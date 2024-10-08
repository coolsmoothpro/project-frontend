import React, { useEffect, useState } from 'react';
import Header from './Component/Header';
import { useSelector } from 'react-redux';

import { updateProject, sendInvite, getProject } from '../../Api/project';

import { toast, ToastContainer } from 'react-toastify';
import { PROJECT_LOGO } from '../../utils/Constant';
import { useNavigate, useLocation } from 'react-router-dom';

export default function ProjectSetting() {
    const navigate = useNavigate();
    const location = useLocation();
    const project = useSelector((state) => state.project) || null;
    const projectId = location.pathname.split('/').pop() || project?.id;
    const [clientId, setClientId] = useState(localStorage.getItem('subdomain') || null);
    
    const [projectLogo, setProjectLogo] = useState("");
    const [projectName, setProjectName] = useState("");
    const [projectDescription, setProjectDescription] = useState("");
    const [startDate, setStartDate] = useState("");
    const [dueDate, setDueDate] = useState("");
    const [terms, setTerms] = useState("");
    const [expectedValue, setExpectedValue] = useState("");
    const [milestone, setMilestone] = useState("");
    const [tasks, setTasks] = useState("");
    const [email, setEmail] = useState("");

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProjectLogo(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };
    
    const handleResetProjectLogo = () => {
        setProjectLogo(PROJECT_LOGO); 
    };

    const handleTerms = (e) => {
        setTerms(e.target.value);
    }

    const handleMilestone = (e) => {
        setMilestone(e.target.value);
    }

    const handleSave = async () => {
        const id = project?.id;
        const { response } = await updateProject({ clientId, id, projectLogo, projectName, projectDescription, startDate, dueDate, terms, expectedValue, milestone, tasks });

        if (response.data.success) {
            toast.success("Project Detail has been updated!");
        } else {
            toast.error("Failed!");
        }
    };

    const handleInvite = async () => {
        const { response } = await sendInvite({clientId, email, projectName});

        if (response.data.success) {
            toast.success("Invitation has been sent!");
        } else {
            toast.error("Failed!");
        }
    }

    // const getProjectById = async () => {
    //     const id = projectId;
    //     const { response } = await getProject({id});

    //     if (response.data.success) {
    //         const project = response.data.project;

    //         setProjectLogo(project?.projectLogo);
    //         setProjectName(project?.projectName);
    //         setProjectDescription(project?.projectDescription);
    //         setTerms(project?.terms);
    //         setExpectedValue(project?.expectedValue);
    //         setMilestone(project?.milestone);
    //     }
    // }

    const setProject = () => {
        setProjectLogo(project?.projectLogo);
        setProjectName(project?.projectName);
        setProjectDescription(project?.projectDescription);
        setStartDate(project?.startDate);
        setDueDate(project?.dueDate);
        setTerms(project?.terms);
        setExpectedValue(project?.expectedValue);
        setMilestone(project?.milestone);
        setTasks(project?.tasks);
    }

    useEffect(() => {
        setProject();

    }, [project]);

    return (
        <>
            <ToastContainer />
            <div className="content container-fluid">
                {/* Page Header */}
                <div className="page-header">
                    <div className="row align-items-end mb-3">
                        <div className="col-sm mb-2 mb-sm-0">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb breadcrumb-no-gutter">
                                    <li className="breadcrumb-item"><a className="breadcrumb-link" href="javascript:;">Pages</a></li>
                                    <li className="breadcrumb-item"><a className="breadcrumb-link" onClick={() =>navigate("/projects-overview")} href="javascript:;">Projects</a></li>
                                    <li className="breadcrumb-item"><a className="breadcrumb-link" onClick={() => navigate(`/project-overview/${projectId}`)} href="javascript:;">{project?.projectName}</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Settings</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                    <Header />
                    {/* End Nav */}
                </div>
                {/* End Page Header */}
                <div className="row justify-content-lg-center">
                    <div className="col-lg-9">
                        {/* Card */}
                        <div className="card card-lg mb-3 mb-lg-5">
                            {/* Header */}
                            <div className="card-header">
                                <h4 className="card-header-title">Details</h4>
                            </div>
                            {/* End Header */}
                            {/* Body */}
                            <div className="card-body">
                                {/* Form */}
                                <div className="mb-4">
                                    <label htmlFor="projectNameProjectSettingsLabel" className="form-label">Project Logo <i className="bi-question-circle text-body ms-1" data-bs-oggle="tooltip" data-bs-placement="top" title="Displayed on public forums, such as Front." /></label>
                                    <div className="d-flex align-items-center">
                                        <label className="avatar avatar-xl avatar-circle avatar-uploader me-5" htmlFor="avatarNewProjectUploader">
                                            <img src={projectLogo || PROJECT_LOGO} id="avatarNewProjectImg" className="avatar-img" alt="Image Description" />
                                            <input onChange={handleFileChange} type="file" className="js-file-attach avatar-uploader-input" id="avatarNewProjectUploader" />
                                            <span className="avatar-uploader-trigger">
                                                <i className="bi-pencil-fill avatar-uploader-icon shadow-sm" />
                                            </span>
                                        </label>
                                        <button onClick={handleResetProjectLogo} type="button" className="js-file-attach-reset-img btn btn-white">Delete</button>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="projectNameProjectSettingsLabel" className="form-label">Project name <i className="bi-question-circle text-body ms-1" data-bs-oggle="tooltip" data-bs-placement="top" title="Displayed on public forums, such as Front." /></label>
                                    <div className="input-group input-group-merge">
                                        <div className="input-group-prepend input-group-text">
                                            <i className="bi-briefcase" />
                                        </div>
                                        <input value={projectName} onChange={(e) => setProjectName(e.target.value)} type="text" className="form-control" name="projectName" id="projectNameProjectSettingsLabel" placeholder="Enter project name here" aria-label="Enter project name here"  />
                                    </div>
                                </div>
                                {/* End Form */}
                                {/* Quill */}
                                <label className="form-label">Project description <span className="form-label-secondary">(Optional)</span></label>
                                {/* Quill */}
                                <div className="quill-custom">
                                    <div className="js-quill" style={{ height: '15rem' }}>
                                        <textarea value={projectDescription} onChange={(e) => setProjectDescription(e.target.value)} rows={10} className='p-2 input-group input-group-merge'/>
                                    </div>
                                </div>
                                {/* End Quill */}
                            </div>
                            {/* End Body */}
                            {/* Footer */}
                            <div className="card-footer d-flex justify-content-end align-items-center gap-3">
                                <button onClick={handleSave} type="button" className="btn btn-primary">Save changes</button>
                            </div>
                            {/* End Footer */}
                        </div>
                        {/* End Card */}
                        {/* Card */}
                        <div className="card card-lg">
                            <div className="card-header">
                                <h4 className="card-header-title">Invite Users</h4>
                            </div>
                            <div className="card-body">
                                <div className="mb-4">
                                    <div className="input-group mb-2 mb-sm-0">
                                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" className="form-control"  placeholder="Input Email" aria-label="Search name or emails" />
                                        <div className="input-group-append input-group-append-last-sm-down-none">
                                            <a className="btn btn-primary d-none d-sm-inline-block" onClick={handleInvite}>Invite</a>
                                        </div>
                                    </div>
                                    <a className="btn btn-primary w-100 d-sm-none" href="javascript:;">Invite</a>
                                </div>
                            </div>
                        </div>
                        <div className="card card-lg">
                            {/* Header */}
                            <div className="card-header">
                                <h4 className="card-header-title">Terms</h4>
                            </div>
                            {/* End Header */}
                            {/* Body */}
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="mb-4">
                                            <label htmlFor="projectDeadlineNewProjectLabel" className="form-label">Start date</label>
                                            <div id="projectDeadlineNewProject" className="input-group input-group-merge">
                                                <div className="input-group-prepend input-group-text">
                                                    <i className="bi-calendar-week" />
                                                </div>
                                                <input value={startDate} onChange={(e)=>setStartDate(e.target.value)} type="date" className="form-control" id="projectDeadlineNewProjectLabel" placeholder="Select dates" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="mb-4">
                                            <label htmlFor="projectDeadlineNewProjectLabel" className="form-label">Due date</label>
                                            <div id="projectDeadlineNewProject" className="input-group input-group-merge">
                                                <div className="input-group-prepend input-group-text">
                                                    <i className="bi-calendar-week" />
                                                </div>
                                                <input value={dueDate} onChange={(e)=>setDueDate(e.target.value)} type="date" className="form-control" id="projectDeadlineNewProjectLabel" placeholder="Select dates" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-6">
                                        {/* Form */}
                                        <div className="mb-4">
                                            <label htmlFor="paymentTermsNewProjectLabel" className="form-label">Terms</label>
                                            {/* Select */}
                                            <div className="tom-select-custom">
                                                <select onChange={handleTerms} className="js-select form-select" id="paymentTermsNewProjectLabel" >
                                                    <option selected={terms === "fixed"} value="fixed" >Fixed</option>
                                                    <option selected={terms === "Per hour"} value="Per hour">Per hour</option>
                                                    <option selected={terms === "Per day"} value="Per day">Per day</option>
                                                    <option selected={terms === "Per week"} value="Per week">Per week</option>
                                                    <option selected={terms === "Per month"} value="Per month">Per month</option>
                                                    <option selected={terms === "Per quarter"} value="Per quarter">Per quarter</option>
                                                    <option selected={terms === "Per year"} value="Per year">Per year</option>
                                                </select>
                                            </div>
                                            {/* End Select */}
                                        </div>
                                        {/* End Form */}
                                    </div>
                                    {/* End Col */}
                                    <div className="col-sm-6">
                                        <label htmlFor="expectedValueNewProjectLabel" className="form-label">Expected value</label>
                                        {/* Form */}
                                        <div className="mb-4">
                                            <div className="input-group input-group-merge">
                                                <div className="input-group-prepend input-group-text">
                                                    <i className="bi-currency-dollar" />
                                                </div>
                                                <input value={expectedValue} onChange={(e) => setExpectedValue(e.target.value)} type="text" className="form-control" name="expectedValue" id="expectedValueNewProjectLabel" placeholder="Enter value here" aria-label="Enter value here" />
                                            </div>
                                        </div>
                                        {/* End Form */}
                                    </div>
                                    {/* End Col */}
                                </div>
                                {/* End Form Row */}
                                <div className="row">
                                    <div className="col-lg-6">
                                        {/* Form */}
                                        <div className="mb-4">
                                            <label htmlFor="milestoneNewProjectLabel" className="form-label">Milestone <a className="fs-6 ms-1" href="javascript:;">Change probability</a></label>
                                            {/* Select */}
                                            <div className="tom-select-custom">
                                                <select onChange={handleMilestone} className="js-select form-select" id="milestoneNewProjectLabel" >
                                                    <option selected={terms === "New"} value="New">New</option>
                                                    <option selected={terms === "Qualified"} value="Qualified">Qualified</option>
                                                    <option selected={terms === "Meeting"} value="Meeting">Meeting</option>
                                                    <option selected={terms === "Proposal"} value="Proposal">Proposal</option>
                                                    <option selected={terms === "Negotiation"} value="Negotiation">Negotiation</option>
                                                    <option selected={terms === "Contact"} value="Contact">Contact</option>
                                                </select>
                                            </div>
                                            {/* End Select */}
                                        </div>
                                        {/* End Form */}
                                    </div>                                    
                                </div>
                            </div>
                            {/* End Body */}
                            {/* Footer */}
                            <div className="card-footer d-flex justify-content-end gap-3">
                                <button onClick={handleSave} type="button" className="btn btn-primary">Save changes</button>
                            </div>
                            {/* End Footer */}
                        </div>
                        {/* End Card */}
                    </div>
                    {/* End Col */}
                </div>
                {/* End Row */}
            </div>
            <div className="modal fade" id="shareWithPeopleModal" tabIndex={-1} aria-labelledby="shareWithPeopleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="shareWithPeopleModalLabel">Invite users</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        {/* Body */}
                        <div className="modal-body">
                            {/* Form */}
                            <div className="mb-4">
                                <div className="input-group mb-2 mb-sm-0">
                                    <input type="text" className="form-control" name="fullName" placeholder="Search name or emails" aria-label="Search name or emails" />
                                    <div className="input-group-append input-group-append-last-sm-down-none">
                                        {/* Select */}
                                        <div className="tom-select-custom tom-select-custom-end">
                                            <select className="js-select form-select tom-select-custom-form-select-invite-user" autoComplete="off" data-hs-tom-select-options="{
                              &quot;searchInDropdown&quot;: false,
                              &quot;hideSearch&quot;: true,
                              &quot;dropdownWidth&quot;: &quot;11rem&quot;
                            }">
                                                <option value="guest" selected>Guest</option>
                                                <option value="can edit">Can edit</option>
                                                <option value="can comment">Can comment</option>
                                                <option value="full access">Full access</option>
                                            </select>
                                        </div>
                                        {/* End Select */}
                                        <a className="btn btn-primary d-none d-sm-inline-block" href="javascript:;">Invite</a>
                                    </div>
                                </div>
                                <a className="btn btn-primary w-100 d-sm-none" href="javascript:;">Invite</a>
                            </div>
                            {/* End Form */}
                            {/* List Group */}
                            <ul className="list-unstyled list-py-2">
                                {/* Item */}
                                <li>
                                    <div className="d-flex">
                                        <div className="flex-shrink-0">
                                            <span className="icon icon-soft-dark icon-sm icon-circle">
                                                <i className="bi-people-fill" />
                                            </span>
                                        </div>
                                        <div className="flex-grow-1 ms-3">
                                            <div className="row align-items-center">
                                                <div className="col-sm">
                                                    <h5 className="text-body mb-0">#digitalmarketing</h5>
                                                    <span className="d-block fs-6">8 members</span>
                                                </div>
                                                {/* End Col */}
                                                <div className="col-sm-auto">
                                                    {/* Select */}
                                                    <div className="tom-select-custom tom-select-custom-sm-end">
                                                        <select className="js-select form-select form-select-borderless tom-select-custom-form-select-invite-user tom-select-form-select-ps-0" autoComplete="off" data-hs-tom-select-options="{
                                    &quot;searchInDropdown&quot;: false,
                                    &quot;hideSearch&quot;: true,
                                    &quot;dropdownWidth&quot;: &quot;11rem&quot;
                                  }">
                                                            <option value="guest">Guest</option>
                                                            <option value="can edit" selected>Can edit</option>
                                                            <option value="can comment">Can comment</option>
                                                            <option value="full access">Full access</option>
                                                            <option value="remove" data-option-template="<div class=&quot;text-danger&quot;>Remove</div>">Remove</option>
                                                        </select>
                                                    </div>
                                                    {/* End Select */}
                                                </div>
                                                {/* End Col */}
                                            </div>
                                            {/* End Row */}
                                        </div>
                                    </div>
                                </li>
                                {/* End Item */}
                                {/* Item */}
                                <li>
                                    <div className="d-flex">
                                        <div className="flex-shrink-0">
                                            <div className="avatar avatar-sm avatar-circle">
                                                <img className="avatar-img" src="./assets/img/160x160/img3.jpg" alt="Image Description" />
                                            </div>
                                        </div>
                                        <div className="flex-grow-1 ms-3">
                                            <div className="row align-items-center">
                                                <div className="col-sm">
                                                    <h5 className="text-body mb-0">David Harrison</h5>
                                                    <span className="d-block fs-6">david@site.com</span>
                                                </div>
                                                {/* End Col */}
                                                <div className="col-sm-auto">
                                                    {/* Select */}
                                                    <div className="tom-select-custom tom-select-custom-sm-end">
                                                        <select className="js-select form-select form-select-borderless tom-select-custom-form-select-invite-user tom-select-form-select-ps-0" autoComplete="off" data-hs-tom-select-options="{
                                    &quot;searchInDropdown&quot;: false,
                                    &quot;hideSearch&quot;: true,
                                    &quot;dropdownWidth&quot;: &quot;11rem&quot;
                                  }">
                                                            <option value="guest">Guest</option>
                                                            <option value="can edit" selected>Can edit</option>
                                                            <option value="can comment">Can comment</option>
                                                            <option value="full access">Full access</option>
                                                            <option value="remove" data-option-template="<div class=&quot;text-danger&quot;>Remove</div>">Remove</option>
                                                        </select>
                                                    </div>
                                                    {/* End Select */}
                                                </div>
                                                {/* End Col */}
                                            </div>
                                            {/* End Row */}
                                        </div>
                                    </div>
                                </li>
                                {/* End Item */}
                                {/* Item */}
                                <li>
                                    <div className="d-flex">
                                        <div className="flex-shrink-0">
                                            <div className="avatar avatar-sm avatar-circle">
                                                <img className="avatar-img" src="./assets/img/160x160/img9.jpg" alt="Image Description" />
                                            </div>
                                        </div>
                                        <div className="flex-grow-1 ms-3">
                                            <div className="row align-items-center">
                                                <div className="col-sm">
                                                    <h5 className="text-body mb-0">Ella Lauda <i className="bi-patch-check-fill text-primary" data-bs-toggle="tooltip" data-bs-placement="top" title="Top endorsed" /></h5>
                                                    <span className="d-block fs-6">Markvt@site.com</span>
                                                </div>
                                                {/* End Col */}
                                                <div className="col-sm-auto">
                                                    {/* Select */}
                                                    <div className="tom-select-custom tom-select-custom-sm-end">
                                                        <select className="js-select form-select form-select-borderless tom-select-custom-form-select-invite-user tom-select-form-select-ps-0" autoComplete="off" data-hs-tom-select-options="{
                                    &quot;searchInDropdown&quot;: false,
                                    &quot;hideSearch&quot;: true,
                                    &quot;dropdownWidth&quot;: &quot;11rem&quot;
                                  }">
                                                            <option value="guest">Guest</option>
                                                            <option value="can edit" selected>Can edit</option>
                                                            <option value="can comment">Can comment</option>
                                                            <option value="full access">Full access</option>
                                                            <option value="remove" data-option-template="<div class=&quot;text-danger&quot;>Remove</div>">Remove</option>
                                                        </select>
                                                    </div>
                                                    {/* End Select */}
                                                </div>
                                                {/* End Col */}
                                            </div>
                                            {/* End Row */}
                                        </div>
                                    </div>
                                </li>
                                {/* End Item */}
                                {/* Item */}
                                <li>
                                    <div className="d-flex">
                                        <div className="flex-shrink-0">
                                            <span className="icon icon-soft-dark icon-sm icon-circle">
                                                <i className="bi-people-fill" />
                                            </span>
                                        </div>
                                        <div className="flex-grow-1 ms-3">
                                            <div className="row align-items-center">
                                                <div className="col-sm">
                                                    <h5 className="text-body mb-0">#conference</h5>
                                                    <span className="d-block fs-6">3 members</span>
                                                </div>
                                                {/* End Col */}
                                                <div className="col-sm-auto">
                                                    {/* Select */}
                                                    <div className="tom-select-custom tom-select-custom-sm-end">
                                                        <select className="js-select form-select form-select-borderless tom-select-custom-form-select-invite-user tom-select-form-select-ps-0" autoComplete="off" data-hs-tom-select-options="{
                                    &quot;searchInDropdown&quot;: false,
                                    &quot;hideSearch&quot;: true,
                                    &quot;dropdownWidth&quot;: &quot;11rem&quot;
                                  }">
                                                            <option value="guest">Guest</option>
                                                            <option value="can edit" selected>Can edit</option>
                                                            <option value="can comment">Can comment</option>
                                                            <option value="full access">Full access</option>
                                                            <option value="remove" data-option-template="<div class=&quot;text-danger&quot;>Remove</div>">Remove</option>
                                                        </select>
                                                    </div>
                                                    {/* End Select */}
                                                </div>
                                                {/* End Col */}
                                            </div>
                                            {/* End Row */}
                                        </div>
                                    </div>
                                </li>
                                {/* End Item */}
                            </ul>
                            {/* End List Group */}
                            {/* Form Switch */}
                            <label className="row form-check form-switch" htmlFor="addTeamPreferencesNewProjectSwitch1">
                                <span className="col-8 col-sm-9 ms-0">
                                    <i className="bi-bell text-primary me-2" />
                                    <span className="text-dark">Inform all project members</span>
                                </span>
                                <span className="col-4 col-sm-3 text-end">
                                    <input type="checkbox" className="form-check-input" id="addTeamPreferencesNewProjectSwitch1" defaultChecked />
                                </span>
                            </label>
                            {/* End Form Switch */}
                        </div>
                        {/* End Body */}
                        {/* Footer */}
                        <div className="modal-footer">
                            <div className="row align-items-center flex-grow-1 mx-n2">
                                <div className="col-sm-9 mb-2 mb-sm-0">
                                    <input type="hidden" id="publicShareLinkClipboard" defaultValue="https://themes.getbootstrap.com/product/front-multipurpose-responsive-template/" />
                                    <p className="modal-footer-text">The public share <a className="link" href="#">link settings</a>
                                        <i className="bi-question-circle" data-bs-toggle="tooltip" data-bs-placement="top" title="The public share link allows people to view the project without giving access to full collaboration features." />
                                    </p>
                                </div>
                                {/* End Col */}
                                <div className="col-sm-3 text-sm-end">
                                    <a className="js-clipboard btn btn-white btn-sm text-nowrap" href="javascript:;" data-bs-toggle="tooltip" data-bs-placement="top" title="Copy to clipboard!" data-hs-clipboard-options="{
                    &quot;type&quot;: &quot;tooltip&quot;,
                    &quot;successText&quot;: &quot;Copied!&quot;,
                    &quot;contentTarget&quot;: &quot;#publicShareLinkClipboard&quot;,
                    &quot;container&quot;: &quot;#shareWithPeopleModal&quot;
                   }">
                                        <i className="bi-link me-1" /> Copy link</a>
                                </div>
                                {/* End Col */}
                            </div>
                            {/* End Row */}
                        </div>
                        {/* End Footer */}
                    </div>
                </div>
            </div>
        </>
    )
}

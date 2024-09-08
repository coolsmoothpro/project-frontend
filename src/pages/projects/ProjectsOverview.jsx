import React, { useEffect, useState, useRef } from 'react'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { useDropzone } from 'react-dropzone';
import { createProject, projectList, sendInvite, deleteProject } from '../../Api/project';
import { useNavigate } from 'react-router-dom';

import { toast } from 'react-toastify';

import Header from './Components/Header';
import { PROJECT_LOGO } from '../../utils/Constant';

const steps = ['Details', 'Terms'];

export default function ProjectsOverview() {
    const navigate = useNavigate();
    const [activeStep, setActiveStep] = React.useState(0);
    const [completed, setCompleted] = React.useState({});

    const [clientId, setClientId] = useState(localStorage.getItem('subdomain') || null);
    const [client, setClient] = useState("");
    const [projects, setProjects] = useState([]);
    const [projectName, setProjectName] = useState("");
    const [projectDescription, setProjectDescription] = useState("");
    const [startDate, setStartDate] = useState("");
    const [dueDate, setDueDate] = useState("");
    const [files, setFiles] = useState([]);
    const [attachedFiles, setAttachedFiles] = useState([]);
    const [terms, setTerms] = useState("");
    const [expectedValue, setExpectedValue] = useState("");
    const [milestone, setMilestone] = useState("");
    const [members, setMembers] = useState([]);
    const [status, setStatus] = useState("todo");
    const [tasks, setTasks] = useState([]);
    const [update, setUpdate] = useState(false);
    const [email, setEmail] = useState("");
    const [projectId, setProjectId] = useState("");
    const [projectLogo, setProjectLogo] = useState("");

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
        setProjectLogo("./assets/img/160x160/img2.jpg"); 
    };

    const onDrop = (acceptedFiles) => {

        const updatedFiles = acceptedFiles.map((file) => ({
            filename: file.name,
            fileurl: file.path,
            filetype: file.type,
            filesize: file.size,
        }));

        setAttachedFiles(updatedFiles);
        setFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);
    };
    
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: 'image/*,application/pdf,.doc,.docx',
    });


    const totalSteps = () => {
        return steps.length;
    };

    const completedSteps = () => {
        return Object.keys(completed).length;
    };

    const isLastStep = () => {
        return activeStep === totalSteps() - 1;
    };

    const allStepsCompleted = () => {
        return completedSteps() === totalSteps();
    };

    const handleNext = () => {
        const newActiveStep =
            isLastStep() && !allStepsCompleted()
                ? // It's the last step, but not all steps have been completed,
                // find the first step that has been completed
                steps.findIndex((step, i) => !(i in completed))
                : activeStep + 1;
        setActiveStep(newActiveStep);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStep = (step) => () => {
        setActiveStep(step);
    };

    const handleComplete = async () => {
        if (completedSteps() === totalSteps() - 1) {

            const formData = new FormData();
            files.forEach((file) => {
                formData.append('files', file);
            });
            formData.append('attachedFiles', attachedFiles);
            formData.append('clientId', clientId);
            formData.append('client', client);
            formData.append('projectLogo', projectLogo);
            formData.append('projectName', projectName);
            formData.append('projectDescription', projectDescription);
            formData.append('startDate', startDate);
            formData.append('dueDate', dueDate);
            formData.append('terms', terms);
            formData.append('expectedValue', expectedValue);
            formData.append('milestone', milestone);
            formData.append('status', status);

            const { response } = await createProject(formData);

            if (response.data.success) {
                setUpdate(!update);
                toast.success("Project has been created successfully!");
            } else {
                toast.error("Failed!");
                return;
            }
        }

        const newCompleted = completed;
        newCompleted[activeStep] = true;
        setCompleted(newCompleted);
        handleNext();
    };

    const handleReset = () => {
        setActiveStep(0);
        setCompleted({});

        setProjectLogo("");
        setClient("");
        setProjectName("");
        setProjectDescription("");
        setStartDate("");
        setDueDate("");
        setAttachedFiles([]);
        setTerms("");
        setExpectedValue("");
        setMilestone("");
        setMembers([]);
        setStatus("todo");
    };

    const getProjects = async () => {
        const { response } = await projectList({clientId});

        if (response.data.success) {
            setProjects(response.data.projects);
        }
    }

    const handleInvite = async () => {
        const { response } = await sendInvite({clientId, email, projectName});

        if (response.data.success) {
            toast.success("Invitation has been sent!");
        } else {
            toast.error("Failed!");
        }
    }

    const handleDelete = async () => {
        const { response } = await deleteProject({clientId, projectId});

        if (response.data.success) {
            navigate(0);
            toast.success(response.data.message);
        } else {
            toast.success(response.data.message);
        }
    }

    useEffect(() => {
        getProjects();
    }, [update]);

    return (
        <>
            <div className="content container-fluid">
                {/* Page Header */}
                <div className="page-header">
                    <div className="row align-items-end">
                        <div className="col-sm mb-2 mb-sm-0">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb breadcrumb-no-gutter">
                                    <li className="breadcrumb-item"><a className="breadcrumb-link" href="javascript:;">Pages</a></li>
                                    <li className="breadcrumb-item"><a className="breadcrumb-link" href="javascript:;">Projects</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Overview</li>
                                </ol>
                            </nav>
                            <h1 className="page-header-title">Overview</h1>
                        </div>
                        {/* End Col */}
                        <div className="col-sm-auto">
                            <a className="btn btn-primary" href="javascript:;" data-bs-toggle="modal" data-bs-target="#newProjectModal">
                                <i className="bi-plus me-1" /> New project
                            </a>
                        </div>
                        {/* End Col */}
                    </div>
                    {/* End Row */}
                    {/* Nav */}
                    <Header />
                    {/* End Nav */}
                </div>
                {/* End Page Header */}
                {/* Card */}
                <div className="card mb-3 mb-lg-5">
                    {/* Body */}
                    <div className="card-body">
                        <div className="d-flex align-items-md-center">
                            <div className="flex-shrink-0">
                                <span className="display-3 text-dark">{projects?.length}</span>
                            </div>
                            <div className="flex-grow-1 ms-3">
                                <div className="row mx-md-n3">
                                    <div className="col-md px-md-4">
                                        <span className="d-block">Total projects</span>
                                        {/* <span className="badge bg-soft-danger text-danger rounded-pill p-1">
                                            <i className="bi-graph-down" /> -2 late in due
                                        </span> */}
                                    </div>
                                    {/* End Col */}
                                    <div className="col-md-9 col-lg-10 column-md-divider px-md-4">
                                        <div className="row justify-content-start mb-2">                                            
                                            <div className="col-auto">
                                                <span className="legend-indicator" />
                                                To do ({projects.filter((project) => project.status === 'todo').length})
                                            </div>
                                            <div className="col-auto">
                                                <span className="legend-indicator bg-primary" />
                                                In progress ({projects.filter((project) => project.status === 'inprogress').length})
                                            </div>                                            
                                            <div className="col-auto">
                                                <span className="legend-indicator bg-warning" />
                                                Review ({projects.filter((project) => project.status === 'review').length})
                                            </div>
                                            <div className="col-auto">
                                                <span className="legend-indicator bg-success" />
                                                Completed ({projects.filter((project) => project.status === 'complete').length})
                                            </div>
                                        </div>
                                        {/* End Row */}
                                        {/* Progress */}
                                        {/* <div className="progress rounded-pill">
                                            <div className="progress-bar" role="progressbar" style={{ width: '40%' }} aria-valuenow={40} aria-valuemin={0} aria-valuemax={100} />
                                            <div className="progress-bar bg-success" role="progressbar" style={{ width: '30%' }} aria-valuenow={30} aria-valuemin={0} aria-valuemax={100} />
                                        </div> */}
                                        {/* End Progress */}
                                    </div>
                                    {/* End Col */}
                                </div>
                                {/* End Row */}
                            </div>
                        </div>
                    </div>
                    {/* End Body */}
                </div>
                {/* End Card */}
                {/* Card */}
                <div className="card">
                    {/* Header */}
                    <div className="card-header card-header-content-md-between">
                        <div className="mb-2 mb-md-0">
                            <form>
                                {/* Search */}
                                <div className="input-group input-group-merge input-group-flush">
                                    <div className="input-group-prepend input-group-text">
                                        <i className="bi-search" />
                                    </div>
                                    <input id="datatableSearch" type="search" className="form-control" placeholder="Search projects" aria-label="Search projects" />
                                </div>
                                {/* End Search */}
                            </form>
                        </div>
                        <div className="d-grid d-sm-flex justify-content-md-end align-items-sm-center gap-2">
                            {/* Datatable Info */}
                            <div id="datatableCounterInfo" style={{ display: 'none' }}>
                                <div className="d-flex align-items-center">
                                    <span className="fs-5 me-3">
                                        <span id="datatableCounter">0</span>
                                        Selected
                                    </span>
                                    <a className="btn btn-outline-danger btn-sm" href="javascript:;">
                                        <i className="bi-trash" /> Delete
                                    </a>
                                </div>
                            </div>
                            {/* End Datatable Info */}
                            {/* Dropdown */}
                            <div className="dropdown">
                                <button type="button" className="btn btn-white btn-sm dropdown-toggle w-100" id="usersExportDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="bi-download me-2" /> Export
                                </button>
                                <div className="dropdown-menu dropdown-menu-sm-end" aria-labelledby="usersExportDropdown">
                                    <span className="dropdown-header">Options</span>
                                    <a id="export-copy" className="dropdown-item" href="javascript:;">
                                        <img className="avatar avatar-xss avatar-4x3 me-2" src="./assets/svg/illustrations/copy-icon.svg" alt="Image Description" />
                                        Copy
                                    </a>
                                    <a id="export-print" className="dropdown-item" href="javascript:;">
                                        <img className="avatar avatar-xss avatar-4x3 me-2" src="./assets/svg/illustrations/print-icon.svg" alt="Image Description" />
                                        Print
                                    </a>
                                    <div className="dropdown-divider" />
                                    <span className="dropdown-header">Download options</span>
                                    <a id="export-excel" className="dropdown-item" href="javascript:;">
                                        <img className="avatar avatar-xss avatar-4x3 me-2" src="./assets/svg/brands/excel-icon.svg" alt="Image Description" />
                                        Excel
                                    </a>
                                    <a id="export-csv" className="dropdown-item" href="javascript:;">
                                        <img className="avatar avatar-xss avatar-4x3 me-2" src="./assets/svg/components/placeholder-csv-format.svg" alt="Image Description" />
                                        .CSV
                                    </a>
                                    <a id="export-pdf" className="dropdown-item" href="javascript:;">
                                        <img className="avatar avatar-xss avatar-4x3 me-2" src="./assets/svg/brands/pdf-icon.svg" alt="Image Description" />
                                        PDF
                                    </a>
                                </div>
                            </div>
                            {/* <div className="dropdown">
                                <button type="button" className="btn btn-white btn-sm w-100" id="usersFilterDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="bi-filter me-1" /> Filter <span className="badge bg-soft-dark text-dark rounded-circle ms-1">2</span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-sm-end dropdown-card card-dropdown-filter-centered" aria-labelledby="usersFilterDropdown" style={{ minWidth: '22rem' }}>
                                    <div className="card">
                                        <div className="card-header card-header-content-between">
                                            <h5 className="card-header-title">Filter users</h5>
                                            <button type="button" className="btn btn-ghost-secondary btn-icon btn-sm ms-2">
                                                <i className="bi-x-lg" />
                                            </button>
                                        </div>
                                        <div className="card-body">
                                            <form>
                                                <div className="mb-4">
                                                    <small className="text-cap text-body">Role</small>
                                                    <div className="row">
                                                        <div className="col">
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" defaultValue id="usersFilterCheckAll" defaultChecked />
                                                                <label className="form-check-label" htmlFor="usersFilterCheckAll">
                                                                    All
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div className="col">
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" defaultValue id="usersFilterCheckEmployee" />
                                                                <label className="form-check-label" htmlFor="usersFilterCheckEmployee">
                                                                    Employee
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-sm mb-4">
                                                        <small className="text-cap text-body">Position</small>
                                                        <div className="tom-select-custom">
                                                            <select className="js-select js-datatable-filter form-select form-select-sm" data-target-column-index={2} data-hs-tom-select-options="{
                                      &quot;placeholder&quot;: &quot;Any&quot;,
                                      &quot;searchInDropdown&quot;: false,
                                      &quot;hideSearch&quot;: true,
                                      &quot;dropdownWidth&quot;: &quot;10rem&quot;
                                    }">
                                                                <option value>Any</option>
                                                                <option value="Accountant">Accountant</option>
                                                                <option value="Co-founder">Co-founder</option>
                                                                <option value="Designer">Designer</option>
                                                                <option value="Developer">Developer</option>
                                                                <option value="Director">Director</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm mb-4">
                                                        <small className="text-cap text-body">Status</small>
                                                        <div className="tom-select-custom">
                                                            <select className="js-select js-datatable-filter form-select form-select-sm" data-target-column-index={4} data-hs-tom-select-options="{
                                      &quot;placeholder&quot;: &quot;Any status&quot;,
                                      &quot;searchInDropdown&quot;: false,
                                      &quot;hideSearch&quot;: true,
                                      &quot;dropdownWidth&quot;: &quot;10rem&quot;
                                    }">
                                                                <option value>Any status</option>
                                                                <option value="Completed" data-option-template="<span class=&quot;d-flex align-items-center&quot;><span class=&quot;legend-indicator bg-success&quot;></span>Completed</span>">Completed</option>
                                                                <option value="In progress" data-option-template="<span class=&quot;d-flex align-items-center&quot;><span class=&quot;legend-indicator bg-warning&quot;></span>In progress</span>">In progress</option>
                                                                <option value="To do" data-option-template="<span class=&quot;d-flex align-items-center&quot;><span class=&quot;legend-indicator bg-danger&quot;></span>To do</span>">To do</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-12 mb-4">
                                                        <small className="text-cap text-body">Members</small>
                                                        <div className="tom-select-custom">
                                                            <select className="js-select form-select" autoComplete="off" multiple data-hs-tom-select-options="{
                                      &quot;singleMultiple&quot;: true,
                                      &quot;hideSelected&quot;: false,
                                      &quot;placeholder&quot;: &quot;Select member&quot;
                                    }">
                                                                <option label="empty" />
                                                                <option value="AH" selected data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/img/160x160/img10.jpg&quot; alt=&quot;Image Description&quot; /><span class=&quot;text-truncate&quot;>Amanda Harvey</span></span>">Amanda Harvey</option>
                                                                <option value="DH" selected data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/img/160x160/img3.jpg&quot; alt=&quot;Image Description&quot; /><span class=&quot;text-truncate&quot;>David Harrison</span></span>">David Harrison</option>
                                                                <option value="SK" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/img/160x160/img4.jpg&quot; alt=&quot;Image Description&quot; /><span class=&quot;text-truncate&quot;>Sam Kart</span></span>">Sam Kart</option>
                                                                <option value="FH" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/img/160x160/img5.jpg&quot; alt=&quot;Image Description&quot; /><span class=&quot;text-truncate&quot;>Finch Hoot</span></span>">Finch Hoot</option>
                                                                <option value="CQ" selected data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/img/160x160/img6.jpg&quot; alt=&quot;Image Description&quot; /><span class=&quot;text-truncate&quot;>Costa Quinn</span></span>">Costa Quinn</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="d-grid">
                                                    <a className="btn btn-primary" href="javascript:;">Apply</a>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                            {/* End Dropdown */}
                        </div>
                    </div>
                    {/* End Header */}
                    {/* Table */}
                    <div className="table-responsive datatable-custom">
                        <table id="datatable" className="table table-lg table-borderless table-thead-bordered table-nowrap table-align-middle card-table" data-hs-datatables-options="{
                   &quot;columnDefs&quot;: [{
                      &quot;targets&quot;: [0, 2, 3, 6, 7],
                      &quot;orderable&quot;: false
                    }],
                   &quot;order&quot;: [],
                   &quot;info&quot;: {
                     &quot;totalQty&quot;: &quot;#datatableWithPaginationInfoTotalQty&quot;
                   },
                   &quot;search&quot;: &quot;#datatableSearch&quot;,
                   &quot;entries&quot;: &quot;#datatableEntries&quot;,
                   &quot;pageLength&quot;: 15,
                   &quot;isResponsive&quot;: false,
                   &quot;isShowPaging&quot;: false,
                   &quot;pagination&quot;: &quot;datatablePagination&quot;
                 }">
                            <thead className="thead-light">
                                <tr>
                                    <th className="table-column-pe-0">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" defaultValue id="datatableCheckAll" />
                                            <label className="form-check-label" htmlFor="datatableCheckAll" />
                                        </div>
                                    </th>
                                    <th className="table-column-ps-0">Project</th>
                                    <th>Tasks</th>
                                    <th>Members</th>
                                    <th>Status</th>
                                    {/* <th>Completion</th> */}
                                    {/* <th><i className="bi-paperclip" /></th>
                                    <th><i className="bi-chat-left-dots" /></th> */}
                                    <th>Due date</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {projects?.map((project) => (
                                    <tr>
                                        <td className="table-column-pe-0">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" defaultValue id="usersDataCheck1" />
                                                <label className="form-check-label" htmlFor="usersDataCheck1" />
                                            </div>
                                        </td>
                                        <td className="table-column-ps-0">
                                            <a className="d-flex align-items-center" onClick={() => navigate(`/project-overview/${project._id}`)} style={{ cursor: "pointer" }}>
                                                <img className="avatar" src={project?.projectLogo || PROJECT_LOGO} alt="Image Description" />
                                                <div className="ms-3">
                                                    <span className="d-block h5 text-inherit mb-0">{project?.projectName}</span>
                                                    {/* <span className="d-block fs-6 text-body">Updated 2 minutes ago</span> */}
                                                </div>
                                            </a>
                                        </td>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                {project?.tasks?.length}
                                            </div>
                                        </td>
                                        <td>
                                            {
                                                project?.members?.length ?
                                                    <div className="avatar-group avatar-group-xs avatar-circle">
                                                        {project?.members?.map((user) => (
                                                            user?.avatar ?
                                                            (<span className="avatar avatar-circle">
                                                                <img className="avatar-img" src={user?.avatar} alt="Image Description" />
                                                            </span>)
                                                            : (
                                                                <span className="avatar avatar-soft-dark avatar-circle">
                                                                    <span className="avatar-initials">{user?.firstname?.charAt(0)}.</span>
                                                                </span>
                                                            )
                                                        ))}
                                                    </div>
                                                : "No Assignee"
                                            }
                                            
                                        </td>
                                        <td>
                                            {project.status === 'todo' ? (
                                                <>
                                                    <span className="legend-indicator" /> To Do
                                                </>
                                            ) : project.status === 'inprogress' ? (
                                                <>
                                                    <span className="legend-indicator bg-primary" /> In progress
                                                </>
                                            ) : project.status === 'review' ? (
                                                <>
                                                    <span className="legend-indicator bg-warning" /> Review
                                                </>
                                            ) : project.status === 'complete' ? (
                                                <>
                                                    <span className="legend-indicator bg-success" /> Complete
                                                </>
                                            ) : null}
                                        </td>
                                        {/* <td>
                                            <div className="d-flex align-items-center">
                                                <span className="fs-6 me-2">35%</span>
                                                <div className="progress table-progress">
                                                    <div className="progress-bar bg-primary" role="progressbar" style={{ width: '35%' }} aria-valuenow={35} aria-valuemin={0} aria-valuemax={100} />
                                                </div>
                                            </div>
                                        </td> */}
                                        {/* <td>
                                            <a className="text-body" href="./project-files.html">
                                                <i className="bi-paperclip" /> 10
                                            </a>
                                        </td>
                                        <td>
                                            <a className="text-body" href="./project-activity.html">
                                                <i className="bi-chat-left-dots" /> 2
                                            </a>
                                        </td> */}
                                        <td>{project.dueDate}</td>
                                        <td>
                                            <button onClick={() => setProjectId(project?._id)} type="button" class="btn btn-danger btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    
                    {/* Footer */}
                    <div className="card-footer">
                        <div className="row justify-content-center justify-content-sm-between align-items-sm-center">
                            <div className="col-sm mb-2 mb-sm-0">
                                <div className="d-flex justify-content-center justify-content-sm-start align-items-center">
                                    <span className="me-2">Showing:</span>
                                    {/* Select */}
                                    <div className="tom-select-custom">
                                        <select id="datatableEntries" className="js-select form-select form-select-borderless w-auto" autoComplete="off" data-hs-tom-select-options="{
                            &quot;searchInDropdown&quot;: false,
                            &quot;hideSearch&quot;: true
                          }">
                                            <option value={10}>10</option>
                                            <option value={15} selected>15</option>
                                            <option value={20}>20</option>
                                        </select>
                                    </div>
                                    {/* End Select */}
                                    <span className="text-secondary me-2">of</span>
                                    {/* Pagination Quantity */}
                                    <span id="datatableWithPaginationInfoTotalQty" />
                                </div>
                            </div>
                            {/* End Col */}
                            <div className="col-sm-auto">
                                <div className="d-flex justify-content-center justify-content-sm-end">
                                    {/* Pagination */}
                                    <nav id="datatablePagination" aria-label="Activity pagination" />
                                </div>
                            </div>
                            {/* End Col */}
                        </div>
                        {/* End Row */}
                    </div>
                    {/* End Footer */}
                </div>
                {/* End Card */}
            </div>
            {/* New Project Modal */}
            <div className="modal fade" id="newProjectModal" tabIndex={-1} aria-labelledby="newProjectModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="newProjectModalLabel">New project</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        {/* Body */}
                        <div className="modal-body">
                            {/* Step Form */}
                            <form className="js-step-form">
                                <Box sx={{ width: '100%' }}>
                                    <Stepper nonLinear activeStep={activeStep}>
                                        {steps.map((label, index) => (
                                            <Step key={label} completed={completed[index]}>
                                                <StepButton color="inherit" onClick={handleStep(index)}>
                                                    {label}
                                                </StepButton>
                                            </Step>
                                        ))}
                                    </Stepper>
                                    <div>
                                        {allStepsCompleted() ? (
                                            <React.Fragment>
                                                <div id="createProjectStepSuccessMessage">
                                                    <div className="text-center">
                                                        <img className="img-fluid mb-3" src="./assets/svg/illustrations/oc-hi-five.svg" alt="Image Description" data-hs-theme-appearance="default" style={{ maxWidth: '15rem' }} />
                                                        {/* <img className="img-fluid mb-3" src="./assets/svg/illustrations-light/oc-hi-five.svg" alt="Image Description" data-hs-theme-appearance="dark" style={{ maxWidth: '15rem' }} /> */}
                                                        <div className="mb-4">
                                                            <h2>Successful!</h2>
                                                            <p>New project has been successfully created.</p>
                                                        </div>
                                                        <div className="d-flex justify-content-center gap-3">
                                                            <a className="btn btn-white" onClick={handleReset}>
                                                                <i className="bi-chevron-left" /> Back to projects
                                                            </a>
                                                            <a className="btn btn-primary" onClick={handleReset} data-toggle="modal" data-target="#newProjectModal">
                                                                <i className="bi-building" /> Add new project
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </React.Fragment>
                                        ) : (
                                            <React.Fragment>
                                                <div id="createProjectStepFormContent" style={{marginTop:'2rem'}} >
                                                    {activeStep === 0 &&
                                                        <div id="createProjectStepDetails">
                                                            {/* Form */}
                                                            <div className="mb-4">
                                                                <label className="form-label">Project logo</label>
                                                                <div className="d-flex align-items-center">
                                                                    <label className="avatar avatar-xl avatar-circle avatar-uploader me-5" htmlFor="avatarNewProjectUploader">
                                                                        <img src={projectLogo || "./assets/img/160x160/img2.jpg"} id="avatarNewProjectImg" className="avatar-img" alt="Image Description" />
                                                                        <input onChange={handleFileChange} type="file" className="js-file-attach avatar-uploader-input" id="avatarNewProjectUploader" />
                                                                        <span className="avatar-uploader-trigger">
                                                                            <i className="bi-pencil-fill avatar-uploader-icon shadow-sm" />
                                                                        </span>
                                                                    </label>
                                                                    <button onClick={handleResetProjectLogo} type="button" className="js-file-attach-reset-img btn btn-white">Delete</button>
                                                                </div>
                                                            </div>
                                                            {/* End Form */}
                                                            {/* Form */}
                                                            <div className="mb-4">
                                                                <label htmlFor="clientNewProjectLabel" className="form-label">Client</label>
                                                                <div className="row align-items-center">
                                                                    <div className="col-12 col-md-12 mb-3">
                                                                        <div className="input-group input-group-merge">
                                                                            <div className="input-group-prepend input-group-text">
                                                                                <i className="bi-person-square" />
                                                                            </div>
                                                                            <input value={client} onChange={(event) => setClient(event.target.value)} className="form-control" id="clientNewProjectLabel" placeholder="Add creater name" aria-label="Add creater name" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {/* End Form */}
                                                            {/* Form */}
                                                            <div className="mb-4">
                                                                <label htmlFor="projectNameNewProjectLabel" className="form-label">Project name <i className="bi-question-circle text-body ms-1" data-toggle="tooltip" data-placement="top" title="Displayed on public forums, such as Front." /></label>
                                                                <div className="input-group input-group-merge">
                                                                    <div className="input-group-prepend input-group-text">
                                                                        <i className="bi-briefcase" />
                                                                    </div>
                                                                    <input value={projectName} onChange={(event) => setProjectName(event.target.value)} type="text" className="form-control" name="projectName" id="projectNameNewProjectLabel" placeholder="Enter project name here" aria-label="Enter project name here" />
                                                                </div>
                                                            </div>
                                                            {/* End Form */}
                                                            {/* Quill */}
                                                            <div className="mb-4">
                                                                <label className="form-label">Project description <span className="form-label-secondary">(Optional)</span></label>
                                                                {/* Quill */}
                                                                <div className="quill-custom">
                                                                    <textarea value={projectDescription} onChange={(e) => setProjectDescription(e.target.value)} rows={5} className="input-group input-group-merge p-2" />
                                                                </div>
                                                                {/* End Quill */}
                                                            </div>
                                                            {/* End Quill */}
                                                            <div className="row">
                                                                <div className="col-sm-6">
                                                                    <div className="mb-4">
                                                                        <label htmlFor="projectDeadlineNewProjectLabel" className="form-label">Start date</label>
                                                                        <div id="projectDeadlineNewProject" className="input-group input-group-merge">
                                                                            <div className="input-group-prepend input-group-text">
                                                                                <i className="bi-calendar-week" />
                                                                            </div>
                                                                            <input value={startDate} onChange={(event) => setStartDate(event.target.value)} type="date" className="form-control" id="projectDeadlineNewProjectLabel" placeholder="Select dates" />
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
                                                                            <input value={dueDate} onChange={(event) => setDueDate(event.target.value)} type="date" className="form-control" id="projectDeadlineNewProjectLabel" placeholder="Select dates" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                {/* End Col */}
                                                                {/* <div className="col-sm-6">
                                                                    <div className="mb-4">
                                                                        <label htmlFor="ownerNewProjectLabel" className="form-label">Owner</label>
                                                                        <div className="tom-select-custom">
                                                                            <select className="js-select form-select" id="ownerNewProjectLabel" data-hs-tom-select-options="{
                                    &quot;searchInDropdown&quot;: false,
                                    &quot;hideSearch&quot;: true
                                    }">
                                                                                <option value="owner1" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle&quot; src=&quot;./assets/img/160x160/img6.jpg&quot; alt=&quot;Avatar&quot; /><span class=&quot;flex-grow-1 ms-2&quot;>Mark Williams</span></span>">Mark Williams</option>
                                                                                <option value="owner2" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle&quot; src=&quot;./assets/img/160x160/img10.jpg&quot; alt=&quot;Avatar&quot; /><span class=&quot;flex-grow-1 ms-2&quot;>Amanda Harvey</span></span>">Amanda Harvey</option>
                                                                                <option value="owner3" selected data-option-template="<span class=&quot;d-flex align-items-center&quot;><i class=&quot;bi-person text-body&quot;></i><span class=&quot;flex-grow-1 ms-2&quot;>Assign to owner</span></span>">Assign to owner</option>
                                                                            </select>
                                                                        </div>
                                                                    </div>
                                                                </div> */}
                                                                {/* End Col */}
                                                            </div>
                                                            {/* End Row */}
                                                            {/* Form */}
                                                            <div className="mb-4">
                                                                <label className="form-label">Attach files</label>
                                                                {/* Dropzone */}
                                                                <div {...getRootProps()} id="attachFilesNewProjectLabel" className="js-dropzone dz-dropzone dz-dropzone-card">
                                                                    <input {...getInputProps()} />
                                                                    {!attachedFiles.length ? (
                                                                        <div className="dz-message">
                                                                            <img
                                                                                className="avatar avatar-xl avatar-4x3 mb-3"
                                                                                src="./assets/svg/illustrations/oc-browse.svg"
                                                                                alt="Image Description"
                                                                                data-hs-theme-appearance="default"
                                                                            />
                                                                            <h5>Drag and drop your file here</h5>
                                                                            <p className="mb-2">or</p>
                                                                            <span className="btn btn-white btn-sm">Browse files</span>
                                                                        </div>
                                                                    ) : (
                                                                        <div className="attached-files">
                                                                            {attachedFiles.map((file, index) => (
                                                                                <div key={index} className="attached-file-item">
                                                                                    {file.filename}
                                                                                </div>
                                                                            ))}
                                                                        </div>
                                                                    )}
                                                                </div>
                                                            </div>
                                                            {/* End Form */}
                                                            {/* <label className="form-label">Default view</label>
                                                            <div className="input-group input-group-md-vertical">
                                                                <label className="form-control" htmlFor="projectViewNewProjectTypeRadio1">
                                                                    <span className="form-check form-check-reverse">
                                                                        <input type="radio" className="form-check-input" name="projectViewNewProjectTypeRadio" id="projectViewNewProjectTypeRadio1" />
                                                                        <span className="form-check-label"><i className="bi-view-list text-muted me-2" /> List</span>
                                                                    </span>
                                                                </label>
                                                                <label className="form-control" htmlFor="projectViewNewProjectTypeRadio2">
                                                                    <span className="form-check form-check-reverse">
                                                                        <input type="radio" className="form-check-input" name="projectViewNewProjectTypeRadio" id="projectViewNewProjectTypeRadio2" defaultChecked />
                                                                        <span className="form-check-label"><i className="bi-table text-muted me-2" /> Table</span>
                                                                    </span>
                                                                </label>
                                                                <label className="form-control" htmlFor="projectViewNewProjectTypeRadio3">
                                                                    <span className="form-check form-check-reverse">
                                                                        <input type="radio" className="form-check-input" name="projectViewNewProjectTypeRadio" id="projectViewNewProjectTypeRadio3" disabled />
                                                                        <span className="form-check-label">Timeline</span>
                                                                        <span className="badge bg-soft-primary text-primary rounded-pill">Coming soon...</span>
                                                                    </span>
                                                                </label>
                                                            </div> */}
                                                        </div>
                                                    }
                                                    {activeStep === 1 &&
                                                        <div id="createProjectStepTerms">
                                                            <div className="row">
                                                                <div className="col-sm-6">
                                                                    {/* Form */}
                                                                    <div className="mb-4">
                                                                        <label htmlFor="paymentTermsNewProjectLabel" className="form-label">Terms</label>
                                                                        {/* Select */}
                                                                        <div className="tom-select-custom">
                                                                            <select onChange={(event) => setTerms(event.target.value)} className="js-select form-select" id="paymentTermsNewProjectLabel" >
                                                                                <option value=""></option>
                                                                                <option value="fixed">Fixed</option>
                                                                                <option value="Per hour">Per hour</option>
                                                                                <option value="Per day">Per day</option>
                                                                                <option value="Per week">Per week</option>
                                                                                <option value="Per month">Per month</option>
                                                                                <option value="Per quarter">Per quarter</option>
                                                                                <option value="Per year">Per year</option>
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
                                                                            <input value={expectedValue} onChange={(event) => setExpectedValue(event.target.value)} type="text" className="form-control" name="expectedValue" id="expectedValueNewProjectLabel" placeholder="Enter value here" aria-label="Enter value here" />
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
                                                                        <label htmlFor="milestoneNewProjectLabel" className="form-label">Milestone <a className="small ms-1" href="javascript:;">Change probability</a></label>
                                                                        {/* Select */}
                                                                        <div className="tom-select-custom">
                                                                            <select onChange={(event) => setMilestone(event.target.value)} className="js-select form-select">
                                                                                <option value=""></option>
                                                                                <option value="New">New</option>
                                                                                <option value="Qualified">Qualified</option>
                                                                                <option value="Meeting">Meeting</option>
                                                                                <option value="Proposal">Proposal</option>
                                                                                <option value="Negotiation">Negotiation</option>
                                                                                <option value="Contact">Contact</option>
                                                                            </select>
                                                                        </div>
                                                                        {/* End Select */}
                                                                    </div>
                                                                    {/* End Form */}
                                                                </div>
                                                                {/* End Col */}
                                                                {/* <div className="col-lg-6">
                                                                    <div className="mb-4">
                                                                        <label htmlFor="privacyNewProjectLabel" className="form-label me-2">Privacy</label>
                                                                        <div className="tom-select-custom">
                                                                            <select className="js-select form-select" id="privacyNewProjectLabel" data-hs-tom-select-options="{
                                  &quot;searchInDropdown&quot;: false,
                                  &quot;hideSearch&quot;: true
                                }">
                                                                                <option value="privacy1" data-option-template="<span class=&quot;d-flex&quot;><i class=&quot;bi-people fs2 text-body&quot;></i><span class=&quot;flex-grow-1 ms-2&quot;><span class=&quot;d-block&quot;>Everyone</span><small class=&quot;tom-select-custom-hide&quot;>Public to Front Dashboard</small></span></span>">Everyone</option>
                                                                                <option value="privacy2" disabled data-option-template="<span class=&quot;d-flex&quot;><i class=&quot;bi-lock fs2 text-body&quot;></i><span class=&quot;flex-grow-1 ms-2&quot;><span class=&quot;d-block&quot;>Private to project members <span class=&quot;badge bg-soft-primary text-primary&quot;>Upgrade to Premium</span></span><small class=&quot;tom-select-custom-hide&quot;>Only visible to project members</small></span></span>">Private to project members</option>
                                                                                <option value="privacy3" data-option-template="<span class=&quot;d-flex&quot;><i class=&quot;bi-person fs2 text-body&quot;></i><span class=&quot;flex-grow-1 ms-2&quot;><span class=&quot;d-block&quot;>Private to me</span><small class=&quot;tom-select-custom-hide&quot;>Only visible to you</small></span></span>">Private to me</option>
                                                                            </select>
                                                                        </div>
                                                                    </div>
                                                                </div> */}
                                                            </div>
                                                            {/* End Form Row */}
                                                            {/* <div className="d-grid gap-2">
                                                                <div className="form-check">
                                                                    <input className="form-check-input" type="checkbox" defaultValue id="budgetNewProjectCheckbox" />
                                                                    <label className="form-check-label" htmlFor="budgetNewProjectCheckbox">
                                                                        Budget resets every month
                                                                    </label>
                                                                </div>
                                                                <div className="form-check">
                                                                    <input className="form-check-input" type="checkbox" defaultValue id="emailAlertNewProjectCheckbox" defaultChecked />
                                                                    <label className="form-check-label" htmlFor="emailAlertNewProjectCheckbox">
                                                                        Send email alerts if project exceeds <span className="font-weight-bold">50.00%</span> of budget
                                                                    </label>
                                                                </div>
                                                            </div> */}
                                                        </div>
                                                    }
                                                    {/* {activeStep === 2 &&
                                                        <div id="createProjectStepMembers">
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
                                                    } */}
                                                </div>
                                                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                                    <Button
                                                        color="inherit"
                                                        disabled={activeStep === 0}
                                                        onClick={handleBack}
                                                        sx={{ mr: 1 }}
                                                    >
                                                        Back
                                                    </Button>
                                                    <Box sx={{ flex: '1 1 auto' }} />
                                                    <Button onClick={handleNext} sx={{ mr: 1 }}>
                                                        Next
                                                    </Button>
                                                    {activeStep !== steps.length &&
                                                        (completed[activeStep] ? (
                                                            <Typography variant="caption" sx={{ display: 'inline-block' }}>
                                                                Step {activeStep + 1} already completed
                                                            </Typography>
                                                        ) : (
                                                            <Button onClick={handleComplete}>
                                                                {completedSteps() === totalSteps() - 1
                                                                    ? 'Finish'
                                                                    : 'Complete Step'}
                                                            </Button>
                                                        ))}
                                                </Box>
                                            </React.Fragment>
                                        )}
                                    </div>
                                </Box>
                            </form>
                            {/* End Step Form */}
                        </div>
                        {/* End Body */}
                    </div>
                </div>
            </div>
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Delete Project</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            Are you sure?
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-white" data-bs-dismiss="modal">Cancle</button>
                            <button onClick={() => handleDelete()} type="button" class="btn btn-danger">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

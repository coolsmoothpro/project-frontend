import React, { useEffect, useState } from 'react'
import Header from './Component/Header'
import { useNavigate, useLocation } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { useSelector } from 'react-redux';
import { userList } from '../../Api/user'; 
import { createTeam, teamList, deleteTeam } from '../../Api/team';

export default function ProjectTeams() {
    const navigate = useNavigate();
    const location = useLocation();
    const projectId = location.pathname.split('/').pop();
    const project = useSelector((state) => state.project) || null;

    const [teamName, setTeamName] = useState("");
    const [teamDescription, setTeamDescription] = useState("");
    const [member, setMember] = useState("");
    const [users, setUsers] = useState([]);
    const [update, setUpdate] = useState(false);
    const [teams, setTeams] = useState([]);
    const [teamId, setTeamId] = useState("");
    
    const getUsers = async () => {
        const { response } = await userList();

        if (response.data.success) {
            setUsers(response.data.users);
        } else {
            toast.error("Users Fetch Failed!");
        }
    }
    
    const handleMember = (e) => {
        setMember(e.target.value);
    }

    const handleSave = async () => {
        const { response } = await createTeam({ teamName, teamDescription, member });

        if (response.data.success) {
            setUpdate(!update);
            toast.success(response.data.message);            
            handleReset();
        } else {
            toast.error(response.data.message);
        }
    }

    const getTeams = async () => {
        const { response } = await teamList();

        if (response.data.success) {
            setTeams(response.data.teams);
            setUpdate(!update);
        }
    }

    const handleReset = () => {
        setTeamName("");
        setTeamDescription("");
        setMember("");
    }

    const handleDelete = async () => {
        const { response } = await deleteTeam({teamId});

        if (response.data.success) {
            navigate(0);
            toast.success(response.data.message);
        } else {
            toast.success(response.data.message);
        }
    }

    useEffect(() => {
        getUsers();
        getTeams();
    }, [update]);

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
                                    <li className="breadcrumb-item active" aria-current="page">Teams</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                    <Header />
                </div>
                {/* End Page Header */}
                {/* Card */}
                <div className="card">
                    {/* Header */}
                    <div className="card-header card-header-content-md-between">
                        <div className="mb-2 mb-md-0">
                            <form>
                                {/* Search */}
                                <div className="input-group input-group-merge input-group-borderless">
                                    <div className="input-group-prepend input-group-text">
                                        <i className="bi-search" />
                                    </div>
                                    <input id="datatableSearch" type="search" className="form-control" placeholder="Search users" aria-label="Search users" />
                                </div>
                                {/* End Search */}
                            </form>
                        </div>
                        {/* End Col */}
                        <div className="d-grid d-sm-flex align-items-sm-center gap-2">
                            {/* Datatable Info */}
                            <div id="datatableCounterInfo" style={{ display: 'none' }}>
                                <div className="d-flex align-items-center">
                                    <span className="fs-5 me-3">
                                        <span id="datatableCounter">0</span> Selected
                                    </span>
                                    <a className="btn btn-outline-danger btn-sm" href="javascript:;">
                                        <i className="bi-trash" /> Delete
                                    </a>
                                </div>
                            </div>
                            {/* End Datatable Info */}
                            {/* Filter Collapse Trigger */}
                            <a className="btn btn-white dropdown-toggle" data-bs-toggle="collapse" href="#filterSearchCollapse" role="button" aria-expanded="false" aria-controls="filterSearchCollapse">
                                <i className="bi-funnel me-1" /> Filters
                            </a>
                            {/* End Filter Collapse Trigger */}
                        </div>
                    </div>
                    {/* End Header */}
                    {/* Filter Search Collapse */}
                    <div className="collapse" id="filterSearchCollapse">
                        <div className="card-body">
                            <form>
                                <div className="row">
                                    <div className="col-sm-12 col-lg-4">
                                        {/* Form */}
                                        <div className="mb-4">
                                            <label htmlFor="teamsFilterLabel" className="form-label">Teams</label>
                                            <div className="input-group input-group-merge">
                                                <div className="input-group-prepend input-group-text">
                                                    <i className="bi-people-fill" />
                                                </div>
                                                <input className="form-control" id="teamsFilterLabel" placeholder="Name, role, department" aria-label="Name, role, department" />
                                            </div>
                                        </div>
                                        {/* End Form */}
                                    </div>
                                    {/* End Col */}
                                    <div className="col-sm-12 col-md-6 col-lg-4">
                                        {/* Form */}
                                        <div className="mb-4">
                                            <label htmlFor="tagsFilterLabel" className="form-label">Tags</label>
                                            {/* Select */}
                                            <div className="tom-select-custom tom-select-custom-with-tags">
                                                <select className="js-select form-select" id="tagsFilterLabel" autoComplete="off" multiple data-hs-tom-select-options="{
                                  &quot;placeholder&quot;: &quot;Enter top tags&quot;
                                }">
                                                    <option value="tagsFilter1">Marketing team</option>
                                                    <option value="tagsFilter2">Blockchain</option>
                                                    <option value="tagsFilter3">Customer service</option>
                                                    <option value="tagsFilter4">Online payment</option>
                                                    <option value="tagsFilter5">Finance</option>
                                                    <option value="tagsFilter6">Organizers</option>
                                                    <option value="tagsFilter7">Software</option>
                                                </select>
                                            </div>
                                            {/* End Select */}
                                        </div>
                                        {/* End Form */}
                                    </div>
                                    {/* End Col */}
                                    <div className="col-sm-12 col-md-6 col-lg-4">
                                        {/* Form */}
                                        <div className="mb-4">
                                            <label htmlFor="ratingFilterLabel" className="form-label">Rating</label>
                                            {/* Select */}
                                            <div className="tom-select-custom">
                                                <select className="js-select form-select" id="ratingFilterLabel" autoComplete="off" multiple data-hs-tom-select-options="{
                                  &quot;singleMultiple&quot;: true,
                                  &quot;hideSelected&quot;: false,
                                  &quot;placeholder&quot;: &quot;Select rating&quot;
                                }">
                                                    <option label="empty" />
                                                    <option value="rating1" data-option-template="<div class=&quot;d-flex gap-1&quot;>
                                    <img src=&quot;./assets/svg/illustrations/star.svg&quot; alt=&quot;Review rating&quot; width=&quot;12&quot;>
                                    <img src=&quot;./assets/svg/illustrations/star-muted.svg&quot; alt=&quot;Review rating&quot; width=&quot;12&quot; data-hs-theme-appearance=&quot;default&quot;>
                                    <img src=&quot;./assets/svg/illustrations-light/star-muted.svg&quot; alt=&quot;Review rating&quot; width=&quot;12&quot; data-hs-theme-appearance=&quot;dark&quot;>
                                    <img src=&quot;./assets/svg/illustrations/star-muted.svg&quot; alt=&quot;Review rating&quot; width=&quot;12&quot; data-hs-theme-appearance=&quot;default&quot;>
                                    <img src=&quot;./assets/svg/illustrations-light/star-muted.svg&quot; alt=&quot;Review rating&quot; width=&quot;12&quot; data-hs-theme-appearance=&quot;dark&quot;>
                                    <img src=&quot;./assets/svg/illustrations/star-muted.svg&quot; alt=&quot;Review rating&quot; width=&quot;12&quot; data-hs-theme-appearance=&quot;default&quot;>
                                    <img src=&quot;./assets/svg/illustrations-light/star-muted.svg&quot; alt=&quot;Review rating&quot; width=&quot;12&quot; data-hs-theme-appearance=&quot;dark&quot;>
                                    <img src=&quot;./assets/svg/illustrations/star-muted.svg&quot; alt=&quot;Review rating&quot; width=&quot;12&quot; data-hs-theme-appearance=&quot;default&quot;>
                                    <img src=&quot;./assets/svg/illustrations-light/star-muted.svg&quot; alt=&quot;Review rating&quot; width=&quot;12&quot; data-hs-theme-appearance=&quot;dark&quot;>
                                    <span class=&quot;me-2&quot;>1 star</span>
                                  </div>">1 star</option>
                                                    <option value="rating2" data-option-template="<div class=&quot;d-flex gap-1&quot;>
                                    <img src=&quot;./assets/svg/illustrations/star.svg&quot; alt=&quot;Review rating&quot; width=&quot;12&quot;>
                                    <img src=&quot;./assets/svg/illustrations/star.svg&quot; alt=&quot;Review rating&quot; width=&quot;12&quot;>
                                    <img src=&quot;./assets/svg/illustrations/star-muted.svg&quot; alt=&quot;Review rating&quot; width=&quot;12&quot; data-hs-theme-appearance=&quot;default&quot;>
                                    <img src=&quot;./assets/svg/illustrations-light/star-muted.svg&quot; alt=&quot;Review rating&quot; width=&quot;12&quot; data-hs-theme-appearance=&quot;dark&quot;>
                                    <img src=&quot;./assets/svg/illustrations/star-muted.svg&quot; alt=&quot;Review rating&quot; width=&quot;12&quot; data-hs-theme-appearance=&quot;default&quot;>
                                    <img src=&quot;./assets/svg/illustrations-light/star-muted.svg&quot; alt=&quot;Review rating&quot; width=&quot;12&quot; data-hs-theme-appearance=&quot;dark&quot;>
                                    <img src=&quot;./assets/svg/illustrations/star-muted.svg&quot; alt=&quot;Review rating&quot; width=&quot;12&quot; data-hs-theme-appearance=&quot;default&quot;>
                                    <img src=&quot;./assets/svg/illustrations-light/star-muted.svg&quot; alt=&quot;Review rating&quot; width=&quot;12&quot; data-hs-theme-appearance=&quot;dark&quot;>
                                    <span class=&quot;me-2&quot;>2 star</span>
                                  </div>">2 star</option>
                                                    <option value="rating3" selected data-option-template="<div class=&quot;d-flex gap-1&quot;>
                                    <img src=&quot;./assets/svg/illustrations/star.svg&quot; alt=&quot;Review rating&quot; width=&quot;12&quot;>
                                    <img src=&quot;./assets/svg/illustrations/star.svg&quot; alt=&quot;Review rating&quot; width=&quot;12&quot;>
                                    <img src=&quot;./assets/svg/illustrations/star.svg&quot; alt=&quot;Review rating&quot; width=&quot;12&quot;>
                                    <img src=&quot;./assets/svg/illustrations/star-muted.svg&quot; alt=&quot;Review rating&quot; width=&quot;12&quot; data-hs-theme-appearance=&quot;default&quot;>
                                    <img src=&quot;./assets/svg/illustrations-light/star-muted.svg&quot; alt=&quot;Review rating&quot; width=&quot;12&quot; data-hs-theme-appearance=&quot;dark&quot;>
                                    <img src=&quot;./assets/svg/illustrations/star-muted.svg&quot; alt=&quot;Review rating&quot; width=&quot;12&quot; data-hs-theme-appearance=&quot;default&quot;>
                                    <img src=&quot;./assets/svg/illustrations-light/star-muted.svg&quot; alt=&quot;Review rating&quot; width=&quot;12&quot; data-hs-theme-appearance=&quot;dark&quot;>
                                    <span class=&quot;me-2&quot;>3 star</span>
                                  </div>">3 star</option>
                                                    <option value="rating4" selected data-option-template="<div class=&quot;d-flex gap-1&quot;>
                                    <img src=&quot;./assets/svg/illustrations/star.svg&quot; alt=&quot;Review rating&quot; width=&quot;12&quot;>
                                    <img src=&quot;./assets/svg/illustrations/star.svg&quot; alt=&quot;Review rating&quot; width=&quot;12&quot;>
                                    <img src=&quot;./assets/svg/illustrations/star.svg&quot; alt=&quot;Review rating&quot; width=&quot;12&quot;>
                                    <img src=&quot;./assets/svg/illustrations/star.svg&quot; alt=&quot;Review rating&quot; width=&quot;12&quot;>
                                    <img src=&quot;./assets/svg/illustrations/star-muted.svg&quot; alt=&quot;Review rating&quot; width=&quot;12&quot; data-hs-theme-appearance=&quot;default&quot;>
                                    <img src=&quot;./assets/svg/illustrations-light/star-muted.svg&quot; alt=&quot;Review rating&quot; width=&quot;12&quot; data-hs-theme-appearance=&quot;dark&quot;>
                                    <span class=&quot;me-2&quot;>4 star</span>
                                  </div>">4 star</option>
                                                    <option value="rating5" selected data-option-template="<div class=&quot;d-flex gap-1&quot;>
                                    <img src=&quot;./assets/svg/illustrations/star.svg&quot; alt=&quot;Review rating&quot; width=&quot;12&quot;>
                                    <img src=&quot;./assets/svg/illustrations/star.svg&quot; alt=&quot;Review rating&quot; width=&quot;12&quot;>
                                    <img src=&quot;./assets/svg/illustrations/star.svg&quot; alt=&quot;Review rating&quot; width=&quot;12&quot;>
                                    <img src=&quot;./assets/svg/illustrations/star.svg&quot; alt=&quot;Review rating&quot; width=&quot;12&quot;>
                                    <img src=&quot;./assets/svg/illustrations/star.svg&quot; alt=&quot;Review rating&quot; width=&quot;12&quot;>
                                    <span class=&quot;me-2&quot;>5 star</span>
                                  </div>">5 star</option>
                                                </select>
                                            </div>
                                            {/* End Select */}
                                        </div>
                                        {/* End Form */}
                                    </div>
                                    {/* End Col */}
                                </div>
                                {/* End Row */}
                                <div className="d-flex justify-content-end gap-3">
                                    <button type="button" className="btn btn-white">Cancel</button>
                                    <button type="button" className="btn btn-primary">Apply</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    {/* End Filter Search Collapse */}
                    {/* Table */}
                    <div className="table-responsive datatable-custom">
                        <table id="datatable" className="table table-borderless table-thead-bordered card-table" data-hs-datatables-options="{
                     &quot;autoWidth&quot;: false,
                     &quot;columnDefs&quot;: [{
                        &quot;targets&quot;: [0, 6],
                        &quot;orderable&quot;: false
                      }],
                     &quot;columns&quot;: [
                        null,
                        null,
                        { &quot;width&quot;: &quot;35%&quot; },
                        null,
                        null,
                        null,
                        null
                      ],
                     &quot;order&quot;: [],
                     &quot;info&quot;: {
                       &quot;totalQty&quot;: &quot;#datatableWithPaginationInfoTotalQty&quot;
                     },
                     &quot;search&quot;: &quot;#datatableSearch&quot;,
                     &quot;entries&quot;: &quot;#datatableEntries&quot;,
                     &quot;pageLength&quot;: 8,
                     &quot;isResponsive&quot;: false,
                     &quot;isShowPaging&quot;: false,
                     &quot;pagination&quot;: &quot;datatablePagination&quot;
                   }">
                            <thead className="thead-light">
                                <tr>
                                    <th scope="col" className="table-column-pe-0">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" defaultValue id="datatableCheckAll" />
                                            <label className="form-check-label" htmlFor="datatableCheckAll" />
                                        </div>
                                    </th>
                                    <th scope="col" className="table-column-ps-0">Team</th>
                                    <th scope="col" style={{ minWidth: '20rem' }}>Description</th>
                                    <th scope="col">Members</th>
                                    <th scope="col" />
                                </tr>
                            </thead>
                            <tbody>
                                {teams?.map((team, index) => (                                    
                                    <tr key={index}>
                                        <td className="table-column-pe-0">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" defaultValue id="teamDataCheck1" />
                                                <label className="form-check-label" htmlFor="teamDataCheck1" />
                                            </div>
                                        </td>
                                        <td className="table-column-ps-0">{team?.teamName}</td>
                                        <td><span className="badge bg-soft-primary text-primary p-2">{team?.teamDescription}</span></td>
                                        <td>
                                            {
                                                team?.members?.length ?
                                                    <div className="avatar-group avatar-group-xs avatar-circle">
                                                        {team?.members?.map((user) => (
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
                                            <button onClick={() => setTeamId(team?._id)} type="button" class="btn btn-danger btn-sm" data-bs-toggle="modal" data-bs-target="#deleteTeamModal">
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                    
                                ))}
                            </tbody>
                        </table>
                    </div>
                    {/* End Table */}
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
                                            <option value={4}>4</option>
                                            <option value={6}>6</option>
                                            <option value={8} selected>8</option>
                                            <option value={12}>12</option>
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
            {/* Share with people Modal */}
            <div className="modal fade" id="shareWithPeopleModal" tabIndex={-1} aria-labelledby="shareWithPeopleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="shareWithPeopleModalLabel">Create a team</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        {/* Body */}
                        <div className="modal-body">
                            <div className="mb-4">
                                <label htmlFor="projectNameNewProjectLabel" className="form-label">Team name <i className="bi-question-circle text-body ms-1" data-toggle="tooltip" data-placement="top" title="Displayed on public forums, such as Front." /></label>
                                <div className="input-group input-group-merge">
                                    <div className="input-group-prepend input-group-text">
                                        <i className="bi-briefcase" />
                                    </div>
                                    <input value={teamName} onChange={(event) => setTeamName(event.target.value)} type="text" className="form-control" name="projectName" id="projectNameNewProjectLabel" placeholder="Enter project name here" aria-label="Enter project name here" />
                                </div>
                            </div>
                            <div className="mb-4">
                                <label className="form-label">Team description <span className="form-label-secondary">(Optional)</span></label>
                                <div className="quill-custom">
                                    <textarea value={teamDescription} onChange={(e) => setTeamDescription(e.target.value)} rows={5} className="input-group input-group-merge p-2" />
                                </div>
                            </div>
                            <div class="tom-select-custom tom-select-custom-with-tags">
                                <select onChange={handleMember} class="js-select form-select" >
                                    <option value="">--Select User--</option>
                                    {users?.map((user) => (
                                        <option  value={JSON.stringify(user)}>{user?.firstname} {user?.lastname}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-white" data-bs-dismiss="modal">Cancle</button>
                            <button onClick={() => handleSave()} type="button" class="btn btn-primary">Save</button>
                        </div>
                    </div>                    
                </div>
            </div>
            <div class="modal fade" id="deleteTeamModal" tabindex="-1" role="dialog" aria-labelledby="deleteTeamModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="deleteTeamModalLabel">Delete Team</h5>
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

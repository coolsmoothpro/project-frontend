import React, { useEffect, useState } from 'react'
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { getProject } from '../../../Api/project';
import { useDispatch, useSelector } from 'react-redux';
import { setProject } from '../../../Store/Reducers/ProjectSlice';
import { PROJECT_LOGO } from '../../../utils/Constant';

export default function Header() {
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();

    const { id } = useParams();
    const projectId = location.pathname.split('/').pop();
    const tab = location.pathname.split('/')[1];
    const project = useSelector((state) => state.project) || null;

    const goToPage = (page) => {
        navigate(page);
    }

    const getNavLinkClass = (page) => {
        return location.pathname.includes(page) ? 'nav-link pointer active' : 'nav-link pointer';
    }

    const handleProject = async () => {
        const { response } = await getProject({id});

        dispatch(setProject(response.data.project));
    }

    useEffect(() => {
        handleProject();
    }, []);

    return (
        <>
            <div className="d-flex mb-3">
                <div class="flex-shrink-0">
                    <div class="avatar avatar-lg avatar-4x3">
                        <img class="avatar-img" src={project?.projectLogo || PROJECT_LOGO} alt="Image Description" />
                    </div>
                </div>
                <div className="flex-grow-1 ms-4">
                    <div className="row">
                        <div className="col-lg mb-3 mb-lg-0">
                            <h1 className="page-header-title">{project?.projectName}</h1>
                            <div className="row align-items-center">
                                <div className="col-auto">
                                    <span>Client:</span>
                                    <a href="#">{project?.client}</a>
                                </div>
                                <div className="col-auto">
                                    <div className="row align-items-center g-0">
                                        <div className="col-auto">Due date:</div>
                                        <div className="col flatpickr-custom-position-fix-sm-down">
                                            <div id="projectDeadlineFlatpickr" className="js-flatpickr flatpickr-custom flatpickr-custom-borderless input-group input-group-sm">
                                                <input defaultValue={project?.dueDate} type="text" className="flatpickr-custom-form-control form-control" placeholder="Select dates" data-input />
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-auto">
                            <span className="text-cap small">Team members:</span>
                            <div className="d-flex">
                                <div className="avatar-group avatar-circle me-3">
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
                            </div>
                        </div>
                        {
                            tab === "project-overview" ? (
                                <div className="col-sm-auto">
                                    <a  className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#newProjectModal">
                                        <i className="bi-plus me-1" /> Add task
                                    </a>
                                </div>
                            ): tab === "project-teams" ? (
                                <div className="col-sm-auto">
                                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#shareWithPeopleModal">
                                        <i className="bi-plus me-1" /> Add team
                                    </button>
                                </div>
                            ) : tab === "project-members" ? (
                                <div className="col-sm-auto">
                                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#newMemberModal">
                                        <i className="bi-plus me-1" /> Add member
                                    </button>
                                </div>
                            ) : tab === "project-files" ? (
                                <div className="col-sm-auto" aria-label="Button group">
                                    {/* Button Group */}
                                    <div className="btn-group" role="group">
                                        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#uploadFilesModal">
                                            <i className="bi-cloud-arrow-up-fill me-1" /> Upload
                                        </button>
                                        {/* <div className="btn-group">
                                            <button type="button" className="btn btn-primary dropdown-toggle" id="uploadGroupDropdown" data-bs-toggle="dropdown" aria-expanded="false" />
                                            <div className="dropdown-menu dropdown-menu-end" aria-labelledby="uploadGroupDropdown">
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-folder-plus dropdown-item-icon" /> New folder
                                                </a>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-folder-symlink dropdown-item-icon" /> New shared folder
                                                </a>
                                                <div className="dropdown-divider" />
                                                <a className="dropdown-item" href="javascript:;" data-bs-toggle="modal" data-bs-target="#uploadFilesModal">
                                                    <i className="bi-file-earmark-arrow-up dropdown-item-icon" /> Upload files
                                                </a>
                                                <a className="dropdown-item" href="javascript:;" data-bs-toggle="modal" data-bs-target="#uploadFilesModal">
                                                    <i className="bi-upload dropdown-item-icon" /> Upload folder
                                                </a>
                                            </div>
                                        </div> */}
                                    </div>
                                    {/* End Button Group */}
                                </div>
                            ) : ""
                        }
                        
                    </div>
                </div>
            </div>
            <div className="js-nav-scroller hs-nav-scroller-horizontal">
                <span className="hs-nav-scroller-arrow-prev" style={{ display: 'none' }}>
                    <a className="hs-nav-scroller-arrow-link" href="javascript:;">
                        <i className="bi-chevron-left" />
                    </a>
                </span>
                <span className="hs-nav-scroller-arrow-next" style={{ display: 'none' }}>
                    <a className="hs-nav-scroller-arrow-link" href="javascript:;">
                        <i className="bi-chevron-right" />
                    </a>
                </span>
                <ul className="nav nav-tabs page-header-tabs" id="projectsTab" role="tablist">
                    <li className="nav-item">
                        <a className={getNavLinkClass('/project-overview')} onClick={() => { goToPage(`/project-overview/${id}`) }} >Overview</a>
                    </li>
                    <li className="nav-item">
                        <a className={getNavLinkClass('/project-kanban')} onClick={() => { goToPage(`/project-kanban/${id}`) }} >Kanban</a>
                    </li>
                    <li className="nav-item">
                        <a className={getNavLinkClass('/project-activity')} onClick={() => { goToPage(`/project-activity/${id}`) }} >Activity</a>
                    </li>
                    <li className="nav-item">
                        <a className={getNavLinkClass('/project-members')} onClick={() => { goToPage(`/project-members/${id}`) }} >Members</a>
                    </li>
                    <li className="nav-item">
                        <a className={getNavLinkClass('/project-teams')} onClick={() => { goToPage(`/project-teams/${id}`) }} >Teams</a>
                    </li>
                    <li className="nav-item">
                        <a className={getNavLinkClass('/project-files')} onClick={() => { goToPage(`/project-files/${id}`) }} >Files</a>
                    </li>
                    <li className="nav-item">
                        <a className={getNavLinkClass('/project-setting')} onClick={() => { goToPage(`/project-setting/${id}`) }} >Settings</a>
                    </li>
                </ul>
            </div>
        </>
    )
}

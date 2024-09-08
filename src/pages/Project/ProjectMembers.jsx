import React, { useState, useEffect } from 'react';
import Header from './Component/Header';
import { useNavigate, useLocation } from 'react-router-dom';
import { AVATAR, PROJECT_LOGO } from '../../utils/Constant';
import { useDispatch, useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import { setProject } from '../../Store/Reducers/ProjectSlice';
import { getProject, deleteMember, sendInvite } from '../../Api/project';
import { userList } from '../../Api/user';

export default function ProjectMembers() {
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();
    
    const projectId = location.pathname.split('/').pop();
    const project = useSelector((state) => state.project) || null;
    const [clientId, setClientId] = useState(localStorage.getItem('subdomain') || null);

    const [update, setUpdate] = useState(false);
    const [users, setUsers] = useState([]);
    const [email, setEmail] = useState("");

    // const getProjectById = async () => {
    //     const id = projectId;
    //     const { response } = await getProject({id});

    //     dispatch(setProject(response.data.project));
    // }

    const getUsers = async () => {
        const { response } = await userList({clientId});

        if (response.data.success) {
            setUsers(response.data.users);
        } else {
            toast.error("Users Fetch Failed!");
        }
    }

    const handleDeleteMember = async (email) => {
        const { response } = await deleteMember({clientId, projectId, email});

        if (response.data.success) {
            setUpdate(!update);
            toast.success(response.data.message);
        } else {
            toast.error("Failed!");
        }
    }

    const handleMember = (e) => {
        setEmail(e.target.value);
    }

    const handleInvite = async () => {
        const projectName = project?.projectName;
        const { response } = await sendInvite({clientId, email, projectName});

        if (response.data.success) {
            toast.success(response.data.message);
            return;
        }

        toast.error(response.data.message);
        return;
    }

    useEffect(() => {
        // getProjectById();
        getUsers();
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
                                    <li className="breadcrumb-item active" aria-current="page">Activity</li>
                                </ol>
                            </nav>
                        </div>                        
                    </div>
                    <Header />
                </div>
                <div className="row justify-content-lg-center">
                <div className="card">
                    <div className="card-header card-header-content-md-between">
                        <div className="mb-2 mb-md-0">
                            <form>
                                <div className="input-group input-group-merge input-group-flush">
                                    <div className="input-group-prepend input-group-text">
                                        <i className="bi-search" />
                                    </div>
                                    <input id="datatableSearch" type="search" className="form-control" placeholder="Search projects" aria-label="Search projects" />
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="table-responsive datatable-custom position-relative">
                        <table id="datatable" className="table table-lg table-borderless table-thead-bordered table-nowrap table-align-middle card-table" >
                            <thead className="thead-light">
                                <tr>
                                    <th className="table-column-pe-0">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" defaultValue id="datatableCheckAll" />
                                            <label className="form-check-label" htmlFor="datatableCheckAll" />
                                        </div>
                                    </th>
                                    <th className="table-column-ps-0">Member</th>
                                    <th>Phone</th>
                                    <th>Role</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {project?.members?.map((member, index) => 
                                    <tr key={index}>
                                        <td className="table-column-pe-0">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" defaultValue id="datatableCheckAll1" />
                                                <label className="form-check-label" htmlFor="datatableCheckAll1" />
                                            </div>
                                        </td>
                                        <td className="table-column-ps-0">
                                            <div className="d-flex align-items-center">
                                                <div className="avatar avatar-circle">
                                                    <img className="avatar-img" src={member?.avatar || AVATAR} alt="Image Description" />
                                                </div>
                                                <div className="ms-3">
                                                    <span className="d-block h5 text-inherit mb-0">{member?.firstname} {member?.lastname}<i className="bi-patch-check-fill text-primary" data-bs-toggle="tooltip" data-bs-placement="top" title="Top endorsed" /></span>
                                                    <span className="d-block fs-5 text-body">{member?.email}</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td>{member?.phone}</td>
                                        <td>{member?.role}</td>
                                        <td>
                                            <button onClick={() => handleDeleteMember(member?.email)} type="button" className="btn btn-danger btn-sm">
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                )}
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
                                        <select id="datatableEntries" className="js-select form-select form-select-borderless w-auto" autoComplete="off">
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
                </div>
            </div>
            <div className="modal fade" id="newMemberModal" tabIndex={-1} aria-labelledby="newMemberModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="newMemberModalLabel">New Member</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                            <div class="tom-select-custom tom-select-custom-with-tags">
                                <select onChange={handleMember} class="js-select form-select" >
                                    <option value="">--Select User--</option>
                                    {users?.map((user) => (
                                        <option value={user?.email}>{user?.firstname} {user?.lastname}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-white" data-bs-dismiss="modal">Cancle</button>
                            <button onClick={()=>handleInvite()} type="button" class="btn btn-primary">Invite</button>
                        </div>
                    </div>                    
                </div>
            </div>
        </>
    )
}
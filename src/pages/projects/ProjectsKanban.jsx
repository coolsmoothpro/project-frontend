import React, { useState, useEffect } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Header from './Components/Header';
import { projectList, updateProjectStatus } from '../../Api/project';
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

export default function ProjectsKanban() {
    const navigate = useNavigate();
    const [projects, setProjects] = useState([]);
    const [status, setStatus] = useState(false);
    const [clientId, setClientId] = useState(localStorage.getItem('subdomain') || null);

    const [tasks, setTasks] = useState({
        todo: [],
        inprogress: [],
        review: [],
        complete: [],
    });

    const DroppableArea = ({ id, children, moveTask }) => {
        const [, drop] = useDrop({
            accept: "TASK",
            drop: (item) => {
                moveTask(item.id, id);
            },
        });
    
        return (
            <div
                ref={drop}
                style={{
                    minWidth: "250px",              
                    minHeight: "150px",
                    borderRadius: "8px",
                    overflowY: "auto",
                    flex: "1 1 auto",
                    }}
            >
                {children}
            </div>
        );
    };

    const DraggableItem = ({ id, children }) => {
        const [{ isDragging }, drag] = useDrag(() => ({
            type: "TASK",
            item: { id },
            collect: (monitor) => ({
                isDragging: monitor.isDragging(),
            }),
        }));
    
        return (
            <li
                ref={drag}
                style={{
                opacity: isDragging ? 0.5 : 1,
                marginBottom: "10px",
                cursor: "move",
                }}
            >
                {children}
            </li>
        );
    };

    // const moveTask = (taskId, newStatus) => {
    //     setTasks((prevTasks) => {
    //         const updatedTasks = { ...prevTasks };
    //         for (const status in updatedTasks) {
    //             updatedTasks[status] = updatedTasks[status].filter(
    //             (task) => task !== taskId
    //             );
    //         }
    //         updatedTasks[newStatus].push(taskId);
    //         return updatedTasks;
    //     });
    // };

    const moveTask = async (taskId, newStatus) => {
        // Update state first
        setTasks((prevTasks) => {
            const updatedTasks = { ...prevTasks };
            for (const status in updatedTasks) {
                updatedTasks[status] = updatedTasks[status].filter(
                    (task) => task !== taskId
                );
            }
            updatedTasks[newStatus].push(taskId);
            return updatedTasks;
        }); 

        // Optionally update backend
        try {
            const { response } = await updateProjectStatus({clientId, taskId, newStatus});

            if (response.data.success) {
                setStatus(!status);
                console.log('Task updated successfully');
            } else {
                console.error('Failed to update task');
            }
        } catch (error) {
            console.error('Error updating task status:', error);
        }
    };
    

    const getProjects = async () => {
        const { response } = await projectList({clientId});

        if (response.data.success) {
            const projectsByStatus = {
                todo: [],
                inprogress: [],
                review: [],
                complete: [],
            };

            response.data.projects.forEach((project) => {
                projectsByStatus[project?.status?.toLowerCase()].push(project);
            });

            setTasks(projectsByStatus);
        }
    };

    useEffect(() => {
        getProjects();
        
    }, [status]);

    return (
        <>
            <div className="content container-fluid">
                {/* Page Header */}
                <div className="page-header">
                    <div className="row align-items-end mb-3">
                        <div className="col-sm mb-2 mb-sm-0">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb breadcrumb-no-gutter">
                                    <li className="breadcrumb-item"><a className="breadcrumb-link" href="javascript:;">Pages</a></li>
                                    <li className="breadcrumb-item"><a className="breadcrumb-link" onClick={()=>navigate("/projects-overview")} href="javascript:;">Projects</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Kanban</li>
                                </ol>
                            </nav>
                            <h1 className="page-header-title">Kanban</h1>
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
                        <Header />
                    </div>
                </div>
                <div className="tab-content" id="connectionsTabContent">
                    <div className="tab-pane fade show active" id="grid" role="tabpanel" aria-labelledby="grid-tab">
                        {/* Content */}
                        <div className="content container-fluid kanban-board">
                            <DndProvider backend={HTML5Backend}>
                                <ul className="row list-unstyled kanban-board-row">
                                    {Object.keys(tasks).map((status) => (
                                    <li key={status} className="js-add-field col-12">
                                        <DroppableArea id={status} moveTask={moveTask}>
                                            <div className="js-sortable-disabled d-flex justify-content-between align-items-center mb-3">
                                                <h6 className="text-cap mb-0">{status}</h6>
                                                <a className="js-create-field btn btn-white btn-icon btn-xs" href="javascript:;" data-bs-toggle="tooltip" data-bs-placement="left" title="Add project">
                                                    <i className="bi-plus" />
                                                </a>
                                            </div>
                                            <div className="js-sortable">
                                                {tasks[status].map((project) => (
                                                    <DraggableItem key={project._id} id={project._id}>
                                                    <div className="js-sortable-link sortablejs-custom sortablejs-custom-rotate sortablejs-custom-handle" data-href="#">
                                                        <div className="card mb-3">
                                                            <div className="card-body">
                                                                <div className="d-flex mb-5">
                                                                    <div className="me-2">
                                                                        <h4 className="text-wrap">{project?.projectName}</h4>
                                                                        <div className="avatar-group avatar-group-sm">
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
                                                                            
                                                                            <span className="fs-6 ms-2">{project?.members?.length} Assignees</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="ms-auto">
                                                                        <div className="dropdown">
                                                                            <button type="button" className="btn btn-ghost-secondary btn-icon btn-sm card-dropdown-btn rounded-circle" id="kanbanProjectsGridDropdown1" data-bs-toggle="dropdown" aria-expanded="false">
                                                                                <i className="bi-three-dots-vertical" />
                                                                            </button>
                                                                            <div className="dropdown-menu dropdown-menu-end" aria-labelledby="kanbanProjectsGridDropdown1">
                                                                                <a className="dropdown-item" href="#">
                                                                                    <i className="bi-pencil dropdown-item-icon" /> Rename project
                                                                                </a>
                                                                                <a className="dropdown-item" href="#">
                                                                                    <i className="bi-star dropdown-item-icon" /> Add to favorites
                                                                                </a>
                                                                                <a className="dropdown-item" href="#">
                                                                                    <i className="bi-archive dropdown-item-icon" /> Archive project
                                                                                </a>
                                                                                <div className="dropdown-divider" />
                                                                                <a className="dropdown-item text-danger" href="#">
                                                                                    <i className="bi-trash dropdown-item-icon text-danger" />
                                                                                    Remove
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="row mb-3">
                                                                    <div className="col-4">
                                                                        <div className="text-center">
                                                                            <span className="d-block h4 mb-1">0</span>
                                                                            <span className="d-block fs-6">Tasks</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-4">
                                                                        <div className="text-center">
                                                                            <span className="d-block h4 mb-1">0</span>
                                                                            <span className="d-block fs-6">Complete</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-4">
                                                                        <div className="text-center">
                                                                            <span className="d-block h4 mb-1">0</span>
                                                                            <span className="d-block fs-6">Completed</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="progress">
                                                                    <div className="progress-bar" role="progressbar" style={{ width: '10%' }} aria-valuenow={0} aria-valuemin={0} aria-valuemax={100} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    </DraggableItem>
                                                ))}
                                            </div>
                                        </DroppableArea>
                                        {/* <div className="d-grid">
                                            <a className="js-sortable-disabled js-create-field btn btn-white btn-dashed-outline" href="javascript:;">
                                                <i className="bi-plus" /> Add project
                                            </a>
                                        </div>
                                        <form id="createProjectGridTemplateInProgress" style={{ display: 'none' }}>
                                            <div className="js-sortable-link sortablejs-custom sortablejs-custom-rotate sortablejs-custom-handle" data-href="#">
                                                <div className="card mb-3">
                                                    <div className="card-body">
                                                        <div className="mb-4">
                                                            <textarea className="form-control" placeholder="What needs to be done?" data-name="body" aria-label="What needs to be done?" defaultValue={""} />
                                                        </div>
                                                        <div className="d-flex justify-content-end gap-3">
                                                            <a className="js-delete-field btn btn-white btn-sm" href="javascript:;">Cancel</a>
                                                            <a className="btn btn-primary btn-sm" href="javascript:;">Create</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form> */}
                                    </li>
                                    ))}
                                </ul>
                            </DndProvider>                            
                        </div>
                        {/* End Content */}
                    </div>
                </div>
            </div>
        </>
    )
}
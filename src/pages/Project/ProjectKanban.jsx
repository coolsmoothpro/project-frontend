import React, { useState, useEffect } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Header from './Component/Header';
import { useSelector } from 'react-redux';
import { updateTaskStatus, taskList } from "../../Api/project";
import { useLocation, useNavigate } from 'react-router-dom';
import { PROJECT_LOGO } from "../../utils/Constant";


export default function ProjectKanban() {
    const navigate = useNavigate();
    const location = useLocation();
    const project = useSelector((state) => state.project);
    const projectId = location.pathname.split('/').pop() || project?.id;
    const [clientId, setClientId] = useState(localStorage.getItem('subdomain') || null);
    const [status, setStatus] = useState(false);

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

    const moveTask = async (taskName, newStatus) => {
        setTasks((prevTasks) => {
            const updatedTasks = { ...prevTasks };
            for (const status in updatedTasks) {
                updatedTasks[status] = updatedTasks[status].filter(
                    (task) => task.taskName !== taskName
                );
            }
            updatedTasks[newStatus].push(taskName);
            return updatedTasks;
        });

        // Optionally update backend
        try {
            const { response } = await updateTaskStatus({clientId, projectId, taskName, newStatus});

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

    const getTasks = async () => {
        const { response } = await taskList({ clientId, projectId });

        if (response.data.success) {
            const tasksByStatus = {
                todo: [],
                inprogress: [],
                review: [],
                complete: [],
            };

            response.data.tasks.forEach((task) => {
                tasksByStatus[task?.status?.toLowerCase()].push(task);
            });

            setTasks(tasksByStatus);
        }
    }

    useEffect(() => {
        getTasks();
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
                                    <li className="breadcrumb-item"><a className="breadcrumb-link" onClick={() =>navigate("/projects-overview")} href="javascript:;">Projects</a></li>
                                    <li className="breadcrumb-item"><a className="breadcrumb-link" onClick={() => navigate(`/project-overview/${projectId}`)} href="javascript:;">{project?.projectName}</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Kanban</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                    <Header />
                    {/* End Nav */}
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
                                                {tasks[status].map((task) => (
                                                    <DraggableItem key={task.taskName} id={task.taskName}>
                                                    <div className="js-sortable-link sortablejs-custom sortablejs-custom-rotate sortablejs-custom-handle" data-href="#">
                                                        <div className="card mb-3">
                                                            <div className="card-body">
                                                                <div className="d-flex mb-5">
                                                                    <div className="me-2">
                                                                        <h4 className="text-wrap">{task.taskName}</h4>
                                                                        <div className="avatar-group avatar-group-sm">
                                                                            {task?.member?.avatar ?
                                                                                (<span className="avatar avatar-circle">
                                                                                    <img className="avatar-img" src={task?.member?.avatar} alt="Image Description" />
                                                                                </span>)
                                                                                : (
                                                                                    <span className="avatar avatar-soft-dark avatar-circle">
                                                                                        <span className="avatar-initials">{task?.member?.firstname?.charAt(0)}.</span>
                                                                                    </span>
                                                                                )
                                                                            }
                                                                            
                                                                            <span className="fs-6 ms-2">{task?.member?.email ? "1 Assignee" : "0 Assignee" }</span>
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
                                                            </div>
                                                        </div>
                                                    </div>
                                                    </DraggableItem>
                                                ))}
                                            </div>
                                        </DroppableArea>
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
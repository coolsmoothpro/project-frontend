import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { toast, ToastContainer } from 'react-toastify';

import Header from './Component/Header'

import { useSelector } from 'react-redux'; 
import { useNavigate, useLocation } from 'react-router-dom';

import { createTask, taskList, getProject, deleteTask, editTask } from '../../Api/project';
import { PROJECT_LOGO } from '../../utils/Constant';

const steps = ['Details', 'Member'];

export default function ProjectOverview() {
    const location = useLocation();
    const projectId = location.pathname.split('/').pop();

    const navigate = useNavigate();
    const [project, setProject] = useState({});
    const [activeStep, setActiveStep] = React.useState(0);
    const [completed, setCompleted] = React.useState({});    
    const [tasks, setTasks] = useState(project?.tasks || []);
    const [email, setEmail] = useState("");
    const [taskName, setTaskName] = useState("");
    const [taskDescription, setTaskDescription] = useState("");
    const [dueDate, setDueDate] =  useState("");
    const [member, setMember] = useState(null);
    const [status, setStatus] = useState("todo");
    const [update, setUpdate] = useState(false);    
    const [deleteTaskName, setDeleteTaskName] = useState("");

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
    
    const handleMember = (e) => {
        setMember(e.target.value);
        console.log(e.target.value);
    }

    const handleComplete = async () => {
        if (completedSteps() === totalSteps() - 1) {
            if (!member) {
                toast.error("Select a member!");
                return;
            };
            
            const { response } = await createTask({ projectId, taskName, taskDescription, dueDate, status, member });

            if (response.data.success) {
                setUpdate(!update);
                handleReset();
                toast.success(response.data.messsage);
            } else {
                toast.error(response.data.messsage);
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
        setTaskName("");
        setTaskDescription("");
        setDueDate("");
        setMember("");
    }

    const tasksByProjectId = async () => {
        const { response } = await taskList({ projectId });

        if (response.data.success) {
            setTasks(response.data.tasks);
        }
    }

    const getProjectById = async () => {
        const id = projectId;
        const { response } = await getProject({id});

        if (response.data.success) {
            setProject(response.data.project);
        }
    }

    const handleDelete = async () => {
        const { response } = await deleteTask({projectId, deleteTaskName});

        if (response.data.success) {
            navigate(0);
            toast.success(response.data.message);
        } else {
            toast.success(response.data.message);
        }
    }

    const updateTask = async() => {
        const { response } = await editTask({ projectId, taskName, taskDescription, dueDate, member });

        if (response.data.success) {
            toast.success(response.data.message);
            navigate(0);
        } else {
            toast.error(response.data.message);
        }
    }

    const handleEditTask = (task) => {
        setTaskName(task.taskName);
        setTaskDescription(task.taskDescription);
        setDueDate(task.dueDate);
        setMember(JSON.stringify(task.member));
    }

    useEffect(() => {
        getProjectById();
        tasksByProjectId();
    }, [update]);

    return (
        <>
            <ToastContainer />
            <div className="content container-fluid">
                <div className="page-header">
                    <div className="row align-items-end mb-3">
                        <div className="col-sm">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb breadcrumb-no-gutter">
                                    <li className="breadcrumb-item"><a className="breadcrumb-link" href="javascript:;">Pages</a></li>
                                    <li className="breadcrumb-item"><a className="breadcrumb-link" onClick={() =>navigate("/projects-overview")} href="javascript:;">Projects</a></li>
                                    <li className="breadcrumb-item"><a className="breadcrumb-link" onClick={() => navigate(`/project-overview/${projectId}`)} href="javascript:;">{project?.projectName}</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Overview</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
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
                                <div className="col-sm-auto">
                                    <a onClick={handleReset} className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#newProjectModal">
                                        <i className="bi-plus me-1" /> Add task
                                    </a>
                                </div>
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
                        <Header />
                    </div>
                </div>
                <div className="card mb-3 mb-lg-5">
                    <div className="card-body">
                        <div className="d-flex align-items-md-center">
                            <div className="flex-shrink-0">
                                <span className="display-3 text-dark">{tasks.length}</span>
                            </div>
                            <div className="flex-grow-1 ms-3">
                                <div className="row mx-md-n3">
                                    <div className="col-md px-md-4">
                                        <span className="d-block">Total tasks</span>
                                    </div>
                                    <div className="col-md-9 col-lg-10 column-md-divider px-md-4">
                                        <div className="row justify-content-start mb-2">                                            
                                            <div className="col-auto">
                                                <span className="legend-indicator" />
                                                To do ({project?.tasks?.filter((task) => task.status === 'todo').length})
                                            </div>
                                            <div className="col-auto">
                                                <span className="legend-indicator bg-primary" />
                                                In progress ({project?.tasks?.filter((task) => task.status === 'inprogress').length})
                                            </div>                                            
                                            <div className="col-auto">
                                                <span className="legend-indicator bg-warning" />
                                                Review ({project?.tasks?.filter((task) => task.status === 'review').length})
                                            </div>
                                            <div className="col-auto">
                                                <span className="legend-indicator bg-success" />
                                                Completed ({project?.tasks?.filter((task) => task.status === 'complete').length})
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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
                                    <input id="datatableSearch" type="search" className="form-control" placeholder="Search tasks" aria-label="Search tasks" />
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
                        </div>
                    </div>
                    <div className="table-responsive datatable-custom">
                        <table id="datatable" className="table table-lg table-borderless table-thead-bordered table-nowrap table-align-middle card-table">
                            <thead className="thead-light">
                                <tr>
                                    <th className="table-column-pe-0">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" defaultValue id="datatableCheckAll" />
                                            <label className="form-check-label" htmlFor="datatableCheckAll" />
                                        </div>
                                    </th>
                                    <th>Task</th>
                                    <th>Member</th>
                                    <th>Status</th>
                                    <th>Due date</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tasks?.map((task) => (
                                    <tr>
                                        <td className="table-column-pe-0">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" defaultValue id="usersDataCheck1" />
                                                <label className="form-check-label" htmlFor="usersDataCheck1" />
                                            </div>
                                        </td>
                                        <td className="table-column-ps-0">
                                            <span className="d-block h5 text-inherit mb-0">{task?.taskName}</span>
                                        </td>
                                        <td>
                                            <div className="avatar-group avatar-group-xs avatar-circle">
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
                                            </div>                                            
                                        </td>
                                        <td>
                                            {task.status === 'todo' ? (
                                                <>
                                                    <span className="legend-indicator" /> To Do
                                                </>
                                            ) : task.status === 'inprogress' ? (
                                                <>
                                                    <span className="legend-indicator bg-primary" /> In progress
                                                </>
                                            ) : task.status === 'review' ? (
                                                <>
                                                    <span className="legend-indicator bg-warning" /> Review
                                                </>
                                            ) : task.status === 'complete' ? (
                                                <>
                                                    <span className="legend-indicator bg-success" /> Complete
                                                </>
                                            ) : null}
                                        </td>
                                        <td>{task.dueDate}</td>
                                        <td>
                                            <button onClick={() => handleEditTask(task)} type="button" class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#editModal">
                                                Edit
                                            </button> &nbsp;
                                            <button onClick={() => setDeleteTaskName(task?.taskName)} type="button" class="btn btn-danger btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal">
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
                                        <select id="datatableEntries" className="js-select form-select form-select-borderless w-auto" autoComplete="off" >
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
                    <div className="modal fade" id="newProjectModal" tabIndex={-1} aria-labelledby="newProjectModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered modal-lg">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                </div>
                                {/* Body */}
                                <div className="modal-body">
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
                                                                <div className="mb-4 mt-3">
                                                                    <h2>Successful!</h2>
                                                                    <p>New task has been successfully created.</p>
                                                                </div>
                                                                <div className="d-flex justify-content-center gap-3">
                                                                    <a className="btn btn-white" onClick={handleReset}>
                                                                        <i className="bi-chevron-left" /> Back to tasks
                                                                    </a>
                                                                    <a className="btn btn-primary" onClick={handleReset} data-toggle="modal" data-target="#newProjectModal">
                                                                        <i className="bi-building" />Add new task
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
                                                                    <div className="mb-4">
                                                                        <label className="form-label">Project Name: <span className="form-label-secondary">{project?.projectName}</span></label>
                                                                    </div>
                                                                    <div className="mb-4">
                                                                        <label htmlFor="projectNameNewProjectLabel" className="form-label">Task name <i className="bi-question-circle text-body ms-1" data-toggle="tooltip" data-placement="top" title="Displayed on public forums, such as Front." /></label>
                                                                        <div className="input-group input-group-merge">
                                                                            <div className="input-group-prepend input-group-text">
                                                                                <i className="bi-briefcase" />
                                                                            </div>
                                                                            <input value={taskName} onChange={(e)=>setTaskName(e.target.value)} type="text" className="form-control" name="projectName" id="projectNameNewProjectLabel" placeholder="Enter project name here" aria-label="Enter project name here" />
                                                                        </div>
                                                                    </div>
                                                                    <div className="mb-4">
                                                                        <label className="form-label">Task description <span className="form-label-secondary">(Optional)</span></label>
                                                                        <div className="quill-custom">
                                                                            <textarea value={taskDescription} onChange={(e)=>setTaskDescription(e.target.value)} rows={5} className="input-group input-group-merge p-2" />
                                                                        </div>
                                                                    </div>
                                                                    <div className="row">
                                                                        <div className="col-sm-12">
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
                                                                </div>  
                                                            }
                                                            {activeStep === 1 &&
                                                                <div id="createProjectStepMembers">
                                                                    <div class="tom-select-custom tom-select-custom-with-tags">
                                                                        <select onChange={handleMember} class="js-select form-select" >
                                                                            <option value="">--Select User--</option>
                                                                            {project?.members?.map((user) => (
                                                                                <option selected={member && JSON.parse(member).email === user.email} value={JSON.stringify(user)}>{user?.firstname} {user?.lastname}</option>
                                                                            ))}
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                            }
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Delete Task</h5>
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
            <div class="modal fade" id="editModal" tabindex="-1" role="dialog" aria-labelledby="editModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="editModal">Edit Task</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div id="createProjectStepDetails">
                                <div className="mb-4">
                                    <label className="form-label">Project Name: <span className="form-label-secondary">{project?.projectName}</span></label>
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="projectNameNewProjectLabel" className="form-label">Task name <i className="bi-question-circle text-body ms-1" data-toggle="tooltip" data-placement="top" title="Displayed on public forums, such as Front." /></label>
                                    <div className="input-group input-group-merge">
                                        <div className="input-group-prepend input-group-text">
                                            <i className="bi-briefcase" />
                                        </div>
                                        <input disabled value={taskName} onChange={(e)=>setTaskName(e.target.value)} type="text" className="form-control" name="projectName" id="projectNameNewProjectLabel" placeholder="Enter project name here" aria-label="Enter project name here" />
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <label className="form-label">Task description <span className="form-label-secondary">(Optional)</span></label>
                                    <div className="quill-custom">
                                        <textarea value={taskDescription} onChange={(e)=>setTaskDescription(e.target.value)} rows={5} className="input-group input-group-merge p-2" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12">
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
                                <div id="createProjectStepMembers">
                                    <div class="tom-select-custom tom-select-custom-with-tags">
                                        <select onChange={handleMember} class="js-select form-select" >
                                            <option value="">--Select User--</option>
                                            {project?.members?.map((user) => (
                                                <option selected={member && JSON.parse(member).email === user.email} value={JSON.stringify(user)}>{user?.firstname} {user?.lastname}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-white" data-bs-dismiss="modal">Cancle</button>
                            <button onClick={() => updateTask()} type="button" class="btn btn-primary">Update</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

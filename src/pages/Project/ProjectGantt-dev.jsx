import React, { useEffect, useState } from 'react';

import Gantt, {
    Tasks, Dependencies, Resources, ResourceAssignments, Column, Editing, Toolbar, Item, Validation,
} from 'devextreme-react/gantt';
import 'devextreme/dist/css/dx.light.css';

import { tasks, dependencies, resources, resourceAssignments } from './data';

import { toast, ToastContainer } from 'react-toastify';

import Header from './Component/Header'

import { useSelector } from 'react-redux'; 
import { useNavigate, useLocation } from 'react-router-dom';

import { taskList, getProject, updateProject } from '../../Api/project';

export default function ProjectGantt() {
    const location = useLocation();
    const projectId = location.pathname.split('/').pop();
    const project = useSelector((state) => state.project);
    const navigate = useNavigate();
    const [clientId, setClientId] = useState(localStorage.getItem('subdomain') || null);
    const [datas, setDatas] = useState([]);
    const [dependencies, setDependencies] = useState([]);

    const getTasks = async () => {
        const id = projectId;
        const responseProject = await getProject({clientId, id});

        if (responseProject.response.data.success) {
            const { response } = await taskList({ clientId, projectId });
        
            if (response.data.success) {
                const temp = [];
                const startDate = responseProject.response.data.project.startDate;
                const dueDate = responseProject.response.data.project.dueDate;

                temp.push({
                    id: project?.id,                    
                    parentId: 0,
                    start: new Date(startDate + 'T00:00:00'),
                    end: new Date(dueDate + 'T23:00:00'),
                    title: project?.projectName,
                    duration: (new Date(dueDate) - new Date(startDate)) / (1000 * 60 * 60 * 24) + " days",
                    assignee: "",
                    type: 'project',
                });

                const taskList = response.data.tasks?.map((item, index) => {
                    return {
                        id: index+1,
                        parentId: project?.id,
                        start: new Date(item.startDate + 'T00:00:00'),
                        end: new Date(item.dueDate + 'T23:00:00'),
                        title: item.taskName,
                        duration: (new Date(item.dueDate) - new Date(item.startDate)) / (1000 * 60 * 60 * 24) + " days",
                        assignee: item?.member?.firstname + "." + item?.member?.lastname.charAt(0),
                        type: 'task',
                        status: item.status
                    };
                });

                setDatas([...temp, ...taskList]);

                const dependencies = response.data.tasks?.map((item, index) => {
                    return {
                        id: index+1,
                        predecessorId: index+1,
                        successorId: index+2,
                        type: 0,
                    }
                });

                setDependencies(dependencies);

            }
        }
    }

    const convertUTCFormat = (date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');

        const formattedDate = `${year}-${month}-${day}`;

        return formattedDate;
    }

    const handleTaskUpdating = async (e) => {
        const updatedTask = e.newValues;
        const parentTask = datas[0];
        const startDate = convertUTCFormat(parentTask.start);
        const dueDate = convertUTCFormat(parentTask.end);
        const id = project?.id;
        const projectLogo = project?.projectLogo;
        const projectName = project?.projectName;
        const projectDescription = project?.projectDescription;
        const expectedValue = project?.expectedValue;
        const milestone = project?.milestone;

        const tasks = project?.tasks.map((item, index) => {
            let start = item.startDate;
            let end = item.dueDate;

            if (index === e.key-1) {
                start = updatedTask.start ? convertUTCFormat(updatedTask.start) : item.startDate;
                end = updatedTask.end ? convertUTCFormat(updatedTask.end) : item.dueDate;
            }

            return {
                taskName: item.taskName,
                taskDescription: item.taskDescription,
                status: item.status,
                member: item.member,
                startDate: start,
                dueDate: end
            }
        });

        const { response } = await updateProject({clientId, id, projectLogo, projectName, projectDescription, startDate, dueDate, expectedValue, milestone, tasks});

        if (response.data.success) {
            toast.success("Updated Successfully!");
        } else {
            toast.error("Failed!");
            return;
        }
    }

    const handleTaskDblClick = (e) => {
        e.cancel = true;
    };

    useEffect(() => {
        getTasks();
        
    }, []);

    return (
        <>
            <ToastContainer />
            <div className="content container-fluid d-grid">
                <div className="page-header">
                    <div className="row align-items-end mb-3">
                        <div className="col-sm">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb breadcrumb-no-gutter">
                                    <li className="breadcrumb-item"><a className="breadcrumb-link" href="javascript:;">Pages</a></li>
                                    <li className="breadcrumb-item"><a className="breadcrumb-link" onClick={() =>navigate("/projects-overview")} href="javascript:;">Projects</a></li>
                                    <li className="breadcrumb-item"><a className="breadcrumb-link" onClick={() => navigate(`/project-overview/${projectId}`)} href="javascript:;">{project?.projectName}</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Gantt Chart</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                    <Header />
                </div>
                <div className="card" >
                    <Gantt
                        taskListWidth={500}
                        scaleType="days"
                        height={500}
                        onTaskUpdating={handleTaskUpdating}
                        onTaskDblClick={handleTaskDblClick}
                    >                            
                    
                        <Tasks dataSource={datas} />
                        <Dependencies dataSource={dependencies} />
                    
                        <Column dataField="title" caption="Name" width={300} />
                        <Column dataField="start" caption="Start" />
                        <Column dataField="end" caption="Due Date" />
                        <Column dataField="duration" caption="Duraton" />
                        <Column dataField="assignee" caption="Assignee" />
                        <Column dataField="status" caption="Status" />


                        <Validation autoUpdateParentTasks />
                        <Editing enabled 
                            allowDependencyAdding={false}
                            allowDependencyDeleting={false}
                            allowResourceAdding={false}
                            allowResourceDeleting={false}
                            allowTaskAdding={false}
                            allowTaskDeleting={false}
                            allowTaskResourceUpdating={false}
                             />
                    
                    </Gantt>
                </div>
            </div>
        </>
    )
}

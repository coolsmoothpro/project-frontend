import React, { useEffect, useState } from 'react';

import { Gantt, ViewMode } from 'gantt-task-react';
import "gantt-task-react/dist/index.css";

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

    const [tasks, setTasks] = useState([]);

    let columnWidth = 60;

    const getStartEndDateForProject = (tasks, projectId) => {
        const projectTasks = tasks.filter((t) => t.project === projectId);
        let start = projectTasks[0].start;
        let end = projectTasks[0].end;
        for (let i = 0; i < projectTasks.length; i++) {
            const task = projectTasks[i];
            if (start.getTime() > task.start.getTime()) {
                start = task.start;
            }
            if (end.getTime() < task.end.getTime()) {
                end = task.end;
            }
        }

        // if (end.getTime() < projectTasks[0].getTime()) {
        //     end = projectTasks[0].end;
        // }

        // console.log(end)
        return [start, end];
    }
    

    const handleTaskChange = (task) => {
        console.log("On date change Id:" + task.name);

        // let newTasks = tasks.map((t) => (t.id === task.id ? task : t));
        // if (task.project) {
        //     const [start, end] = getStartEndDateForProject(newTasks, task.project);
        //     const project =
        //         newTasks[newTasks.findIndex((t) => t.id === task.project)];
        //     if (
        //         project.start.getTime() !== start.getTime() ||
        //         project.end.getTime() !== end.getTime()
        //     ) {
        //         const changedProject = { ...project, start, end };
        //         newTasks = newTasks.map((t) =>
        //             t.id === task.project ? changedProject : t
        //         );
        //     }
        // }

        let newTasks = tasks.map((t) => (t.id === task.id ? task : t));

        if (task.project) {
            const [taskStart, taskEnd] = getStartEndDateForProject(newTasks, task.project);

            const projectIndex = newTasks.findIndex((t) => t.id === task.project);
            const project = newTasks[projectIndex];

            const newEnd = project.end.getTime() > taskEnd.getTime() ? project.end : taskEnd;

            if (
                project.start.getTime() !== taskStart.getTime() ||
                project.end.getTime() !== newEnd.getTime()
            ) {
                const changedProject = { ...project, start: taskStart, end: newEnd };
                newTasks = newTasks.map((t) =>
                    t.id === task.project ? changedProject : t
                );
            }
        }

        saveChange(newTasks);
    };

    const handleProgressChange = async (task) => {
        setTasks(tasks.map((t) => (t.id === task.id ? task : t)));
        console.log("On progress change Id:" + task.id);
    };

    const handleExpanderClick = (task) => {
        setTasks(tasks.map((t) => (t.id === task.id ? task : t)));
        console.log("On expander click Id:" + task.id);
    };

    const convertUTCFormat = (date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');

        const formattedDate = `${year}-${month}-${day}`;

        return formattedDate;
    }
   
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
                    start: new Date(startDate + 'T00:00:00'),
                    end: new Date(dueDate + 'T23:00:00'),
                    name: project?.projectName,
                    id: project?.id,
                    // progress: 50,
                    type: "project",
                    hideChildren: false
                });

                response.data.tasks?.forEach((item, index) => {
                    temp.push({
                        start: new Date(item.startDate + 'T00:00:00'),
                        end: new Date(item.dueDate + 'T23:00:00'),
                        name: item.taskName,
                        id: index,
                        dependencies: [index - 1], 
                        type: "task",
                        project: project?.id,
                        description: item.taskDescription,
                        status: item.status,
                        member: item.member
                    });
                });

                setTasks(temp);
            }
        }
    }

    const saveChange = async (newTasks) => {

        const ChangedProject = newTasks[0];
        const projectStartDate = convertUTCFormat(ChangedProject.start);
        const projectEndDate = convertUTCFormat(ChangedProject.end);

        const changedTasks = newTasks.slice(1);
        const tasks = changedTasks.map((item) => {
            return {
                taskName: item.name,
                taskDescription: item.description,
                status: item.status,
                member: item.member,
                startDate: convertUTCFormat(item.start),
                dueDate: convertUTCFormat(item.end)
            }
        });

        const id = project?.id;
        const projectLogo = project?.projectLogo;
        const projectName = project?.projectName;
        const projectDescription = project?.projectDescription;
        const startDate = projectStartDate;
        const dueDate = projectEndDate;
        const expectedValue = project?.expectedValue;
        const milestone = project?.milestone;

        const { response } = await updateProject({clientId, id, projectLogo, projectName, projectDescription, startDate, dueDate, expectedValue, milestone, tasks});

        if (response.data.success) {
            setTasks(newTasks);
        } else {
            toast.error("Failed!");
            return;
        }
    }

    useEffect(() => {
        getTasks();
    }, [project]);

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
                <div className="card">
                    { tasks.length ?
                        <Gantt 
                            tasks={tasks}
                            viewMode='Day'
                            onDateChange={handleTaskChange}
                            onProgressChange={handleProgressChange}
                            onExpanderClick={handleExpanderClick}
                            columnWidth={columnWidth}
                        />
                        : <div className='text-center'>"No Datas"</div>
                    }
                </div>                    
            </div>
        </>
    )
}

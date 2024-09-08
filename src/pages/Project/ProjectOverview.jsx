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

const steps = ['Details', 'Member'];

export default function ProjectOverview() {
    const location = useLocation();
    const projectId = location.pathname.split('/').pop();
    const project = useSelector((state) => state.project);
    const navigate = useNavigate();
    const [clientId, setClientId] = useState(localStorage.getItem('subdomain') || null);    
    const [tasks, setTasks] = useState(project?.tasks || []);
   

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
                    <Header />
                </div>                
            </div>
        </>
    )
}

import React, { useEffect, useState } from 'react'
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { getProject } from '../../../Api/project';
import { useDispatch } from 'react-redux';
import { setProject } from '../../../Store/Reducers/ProjectSlice';

export default function Header() {
    const navigate = useNavigate();
    const location = useLocation();
    const { id } = useParams();
    const dispatch = useDispatch();

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
            <ul className="nav nav-tabs page-header-tabs" id="projectsTab" role="tablist">
                <li className="nav-item">
                    <a className={getNavLinkClass('/project-overview')} onClick={() => { goToPage(`/project-overview/${id}`) }} >Overview</a>
                </li>
                <li className="nav-item">
                    <a className={getNavLinkClass('/project-files')} onClick={() => { goToPage(`/project-files/${id}`) }} >Files</a>
                </li>
                <li className="nav-item">
                    <a className={getNavLinkClass('/project-activity')} onClick={() => { goToPage(`/project-activity/${id}`) }} >Activity</a>
                </li>
                <li className="nav-item">
                    <a className={getNavLinkClass('/project-teams')} onClick={() => { goToPage(`/project-teams/${id}`) }} >Teams</a>
                </li>
                <li className="nav-item">
                    <a className={getNavLinkClass('/project-setting')} onClick={() => { goToPage(`/project-setting/${id}`) }} >Settings</a>
                </li>
                <li className="nav-item">
                    <a className={getNavLinkClass('/project-kanban')} onClick={() => { goToPage(`/project-kanban/${id}`) }} >Kanban</a>
                </li>
                <li className="nav-item">
                    <a className={getNavLinkClass('/project-members')} onClick={() => { goToPage(`/project-members/${id}`) }} >Members</a>
                </li>
            </ul>
        </>
    )
}

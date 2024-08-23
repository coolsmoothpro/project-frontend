import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom';

export default function Header() {
    const navigate = useNavigate();
    const location = useLocation();

    const goToPage = (page) => {
        navigate(page);
    }

    const getNavLinkClass = (page) => {
        return location.pathname.includes(page) ? 'nav-link pointer active' : 'nav-link pointer';
    }

    return (
        <>
            <ul className="nav nav-tabs page-header-tabs" id="projectsTab" role="tablist">
                <li className="nav-item">
                    <a className={getNavLinkClass('/projects-overview')} onClick={() => { goToPage('/projects-overview') }} >Projects</a>
                </li>
                <li className="nav-item"> 
                    <a className={getNavLinkClass('/projects-timeline')} onClick={() => { goToPage('/projects-timeline') }} >Timeline</a>
                </li>
                <li className="nav-item"> 
                    <a className={getNavLinkClass('/projects-kanban')} onClick={() => { goToPage('/projects-kanban') }} >Kanban</a>
                </li>
            </ul>
        </>
    )
}

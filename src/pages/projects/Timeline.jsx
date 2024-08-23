import React from 'react';
import Header from './Components/Header';
import { useNavigate } from 'react-router-dom';

export default function Timeline() {
    const navigate = useNavigate();

    return (
        <>
            <div className="content container-fluid">
                {/* Page Header */}
                <div className="page-header">
                    <div className="row align-items-end">
                        <div className="col-sm mb-2 mb-sm-0">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb breadcrumb-no-gutter">
                                    <li className="breadcrumb-item"><a className="breadcrumb-link" href="javascript:;">Pages</a></li>
                                    <li className="breadcrumb-item"><a className="breadcrumb-link" onClick={()=>navigate("/projects-overview")} href="javascript:;">Projects</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Timeline</li>
                                </ol>
                            </nav>
                            <h1 className="page-header-title">Timeline</h1>
                        </div>
                        {/* End Col */}
                    </div>
                    {/* End Row */}
                    {/* Nav */}
                    <Header />
                    {/* End Nav */}
                </div>
                {/* End Page Header */}
                {/* Info */}
                <div className="text-center">
                    <div className="h1">
                        <span className="badge bg-primary rounded-pill text-uppercase">
                            <i className="bi-patch-check-fill me-1" /> Pro
                        </span>
                    </div>
                    <div className="mb-4">
                        <h2>Plan and manage projects with Timeline</h2>
                    </div>
                    <div className="w-lg-75 mx-lg-auto mb-5">
                        <img className="img-fluid" src="./assets/svg/illustrations/project-schedule.svg" alt="Image Description" />
                    </div>
                    <p>Create a visual project plan that helps you stay on schedule—so you hit your deadlines. <a className="link" href="#">Learn More <i className="bi-chevron-right" /></a></p>
                    <a className="btn btn-primary" href="#">Upgrade to premium</a>
                </div>
                {/* End Info */}
            </div>
        </>
    )
}

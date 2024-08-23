import React from 'react'
import Header from './Component/Header'
import { useNavigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function ProjectActivity() {
    const navigate = useNavigate();
    const location = useLocation();
    const projectId = location.pathname.split('/').pop();
    const project = useSelector((state) => state.project) || null;

    return (
        <>
            <div className="content container-fluid">
                {/* Page Header */}
                <div className="page-header">
                    <div className="row align-items-end mb-3">
                        <div className="col-sm">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb breadcrumb-no-gutter">
                                    <li className="breadcrumb-item"><a className="breadcrumb-link" href="javascript:;">Pages</a></li>
                                    <li className="breadcrumb-item"><a className="breadcrumb-link" onClick={() =>navigate("/projects-overview")} href="javascript:;">Projects</a></li>
                                    <li className="breadcrumb-item"><a className="breadcrumb-link" onClick={() => navigate(`/project-overview/${projectId}`)} href="javascript:;">{project?.projectName}</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Activity</li>
                                </ol>
                            </nav>
                            <h1 className="page-header-title">Activity</h1>
                        </div>
                        {/* End Col */}
                    </div>
                    {/* End Row */}
                    {/* Nav */}
                    {/* Nav */}
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
                    {/* End Nav */}
                </div>
                {/* End Page Header */}
                <div className="row justify-content-lg-center">
                    <div className="col-lg-9">
                        {/* Alert */}
                        <div className="alert alert-soft-dark mb-5 mb-lg-7" role="alert">
                            <div className="d-flex align-items-center">
                                <div className="flex-shrink-0">
                                    <img className="avatar avatar-xl" src="./assets/svg/illustrations/oc-megaphone.svg" alt="Image Description" data-hs-theme-appearance="default" />
                                    <img className="avatar avatar-xl" src="./assets/svg/illustrations-light/oc-megaphone.svg" alt="Image Description" data-hs-theme-appearance="dark" />
                                </div>
                                <div className="flex-grow-1 ms-3">
                                    <h3 className="alert-heading mb-1">Attention!</h3>
                                    <p className="mb-0">Hi! This project is due for an update. The last update was published 2 days ago.</p>
                                </div>
                            </div>
                        </div>
                        {/* End Alert */}
                        {/* Step */}
                        <ul className="step">
                            {/* Step Item */}
                            <li className="step-item">
                                <div className="step-content-wrapper">
                                    <small className="step-divider">Today</small>
                                </div>
                            </li>
                            {/* End Step Item */}
                            {/* Step Item */}
                            <li className="step-item">
                                <div className="step-content-wrapper">
                                    <div className="step-avatar">
                                        <img className="step-avatar" src="./assets/img/160x160/img9.jpg" alt="Image Description" />
                                    </div>
                                    <div className="step-content">
                                        <h5 className="mb-1">Iana Robinson</h5>
                                        <p className="fs-5 mb-1">Uploaded weekly reports to the task <a className="text-uppercase" href="#"><i className="bi-journal-bookmark-fill" /> Fd-7</a></p>
                                        <ul className="list-group list-group-sm">
                                            {/* List Item */}
                                            <li className="list-group-item list-group-item-light">
                                                <div className="row gx-1">
                                                    <div className="col-sm-4">
                                                        {/* Media */}
                                                        <div className="d-flex">
                                                            <div className="flex-shrink-0">
                                                                <img className="avatar avatar-xs" src="./assets/svg/brands/excel-icon.svg" alt="Image Description" />
                                                            </div>
                                                            <div className="flex-grow-1 text-truncate ms-2">
                                                                <span className="d-block fs-6 text-dark text-truncate" title="weekly-reports.xls">weekly-reports.xls</span>
                                                                <span className="d-block small text-muted">12kb</span>
                                                            </div>
                                                        </div>
                                                        {/* End Media */}
                                                    </div>
                                                    {/* End Col */}
                                                    <div className="col-sm-4">
                                                        {/* Media */}
                                                        <div className="d-flex">
                                                            <div className="flex-shrink-0">
                                                                <img className="avatar avatar-xs" src="./assets/svg/brands/word-icon.svg" alt="Image Description" />
                                                            </div>
                                                            <div className="flex-grow-1 text-truncate ms-2">
                                                                <span className="d-block fs-6 text-dark text-truncate" title="weekly-reports.xls">weekly-reports.xls</span>
                                                                <span className="d-block small text-muted">4kb</span>
                                                            </div>
                                                        </div>
                                                        {/* End Media */}
                                                    </div>
                                                    {/* End Col */}
                                                    <div className="col-sm-4">
                                                        {/* Media */}
                                                        <div className="d-flex">
                                                            <div className="flex-shrink-0">
                                                                <img className="avatar avatar-xs" src="./assets/svg/brands/word-icon.svg" alt="Image Description" />
                                                            </div>
                                                            <div className="flex-grow-1 text-truncate ms-2">
                                                                <span className="d-block fs-6 text-dark text-truncate" title="monthly-reports.xls">monthly-reports.xls</span>
                                                                <span className="d-block small text-muted">8kb</span>
                                                            </div>
                                                        </div>
                                                        {/* End Media */}
                                                    </div>
                                                    {/* End Col */}
                                                </div>
                                                {/* End Row */}
                                            </li>
                                            {/* End List Item */}
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            {/* End Step Item */}
                            {/* Step Item */}
                            <li className="step-item">
                                <div className="step-content-wrapper">
                                    <span className="step-icon step-icon-soft-dark">B</span>
                                    <div className="step-content">
                                        <h5 className="mb-1">Bob Dean</h5>
                                        <p className="fs-5 mb-1">Marked project status as <span className="badge bg-soft-primary text-primary rounded-pill"><span className="legend-indicator bg-primary" />"In progress"</span></p>
                                    </div>
                                </div>
                            </li>
                            {/* End Step Item */}
                            {/* Step Item */}
                            <li className="step-item">
                                <div className="step-content-wrapper">
                                    <small className="step-divider">Yesterday</small>
                                </div>
                            </li>
                            {/* End Step Item */}
                            {/* Step Item */}
                            <li className="step-item">
                                <div className="step-content-wrapper">
                                    <div className="step-avatar">
                                        <img className="step-avatar-img" src="./assets/img/160x160/img3.jpg" alt="Image Description" />
                                    </div>
                                    <div className="step-content">
                                        <h5 className="h5 mb-1">Crane</h5>
                                        <p className="fs-5 mb-1">Added 5 card to <a href="#">Payments</a></p>
                                        <ul className="list-group list-group-sm">
                                            <li className="list-group-item list-group-item-light">
                                                <div className="row gx-1">
                                                    <div className="col">
                                                        <img className="img-fluid rounded" src="./assets/svg/components/card-1.svg" alt="Image Description" />
                                                    </div>
                                                    <div className="col">
                                                        <img className="img-fluid rounded" src="./assets/svg/components/card-2.svg" alt="Image Description" />
                                                    </div>
                                                    <div className="col">
                                                        <img className="img-fluid rounded" src="./assets/svg/components/card-3.svg" alt="Image Description" />
                                                    </div>
                                                    <div className="col-auto align-self-center">
                                                        <div className="text-center">
                                                            <a href="#">+2</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            {/* End Step Item */}
                            {/* Step Item */}
                            <li className="step-item">
                                <div className="step-content-wrapper">
                                    <span className="step-icon step-icon-soft-info">D</span>
                                    <div className="step-content">
                                        <h5 className="mb-1">David Lidell</h5>
                                        <p className="fs-5 mb-1">Added a new member to Front Dashboard</p>
                                    </div>
                                </div>
                            </li>
                            {/* End Step Item */}
                            {/* Step Item */}
                            <li className="step-item">
                                <div className="step-content-wrapper">
                                    <div className="step-avatar">
                                        <img className="step-avatar-img" src="./assets/img/160x160/img7.jpg" alt="Image Description" />
                                    </div>
                                    <div className="step-content">
                                        <h5 className="mb-1">Rachel King</h5>
                                        <p className="fs-5 mb-1">Earned a "Top endorsed" <i className="bi-patch-check-fill text-primary" /> badge</p>
                                    </div>
                                </div>
                            </li>
                            {/* End Step Item */}
                            {/* Step Item */}
                            <li className="step-item">
                                <div className="step-content-wrapper">
                                    <small className="step-divider">Last week</small>
                                </div>
                            </li>
                            {/* End Step Item */}
                            {/* Step Item */}
                            <li className="step-item">
                                <div className="step-content-wrapper">
                                    <div className="step-avatar">
                                        <img className="step-avatar-img" src="./assets/img/160x160/img6.jpg" alt="Image Description" />
                                    </div>
                                    <div className="step-content">
                                        <h5 className="mb-1">
                                            <a className="text-dark" href="#">Mark Williams</a>
                                        </h5>
                                        <p className="fs-5">Attached two files.</p>
                                        <ul className="list-group list-group-sm">
                                            {/* List Item */}
                                            <li className="list-group-item list-group-item-light">
                                                <div className="d-flex">
                                                    <div className="flex-shrink-0">
                                                        <i className="bi-paperclip" />
                                                    </div>
                                                    <div className="flex-grow-1 text-truncate ms-2">
                                                        <span className="d-block text-dark text-truncate">Requirements.figma</span>
                                                        <span className="d-block small">8mb</span>
                                                    </div>
                                                </div>
                                            </li>
                                            {/* End List Item */}
                                            {/* List Item */}
                                            <li className="list-group-item list-group-item-light">
                                                <div className="d-flex">
                                                    <div className="flex-shrink-0">
                                                        <i className="bi-paperclip" />
                                                    </div>
                                                    <div className="flex-grow-1 text-truncate ms-2">
                                                        <span className="d-block text-dark text-truncate">Requirements.sketch</span>
                                                        <span className="d-block small">4mb</span>
                                                    </div>
                                                </div>
                                            </li>
                                            {/* End List Item */}
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            {/* End Step Item */}
                            {/* Step Item */}
                            <li className="step-item">
                                <div className="step-content-wrapper">
                                    <span className="step-icon step-icon-soft-primary">C</span>
                                    <div className="step-content">
                                        <h5 className="mb-1">
                                            <a className="text-dark" href="#">Costa Quinn</a>
                                        </h5>
                                        <p className="fs-5">Marked project status as <span className="badge bg-soft-primary text-primary rounded-pill"><span className="legend-indicator bg-primary" />"In progress"</span></p>
                                    </div>
                                </div>
                            </li>
                            {/* End Step Item */}
                        </ul>
                        {/* End Step */}
                        {/* Footer */}
                        <div className="d-grid">
                            <a className="btn btn-white" href="javascript:;">
                                <i className="bi-arrow-clockwise me-1" /> Load more activities
                            </a>
                        </div>
                        {/* End Footer */}
                    </div>
                </div>
                {/* End Row */}
            </div>
        </>
    )
}

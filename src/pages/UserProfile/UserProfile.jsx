import React, { useEffect, useState } from 'react'
import Header from './Components/Header'
import { useLocation } from 'react-router-dom';
import { currentUser } from '../../Api/auth';

export default function UserProfile() {
    const location = useLocation();
    const userId = location.pathname.split('/').pop();

    const [user, setUser] = useState(null);

    const getCurrentUser = async () => {
        const id = userId;
        if (id) {
            const { response } = await currentUser({id});

            if (response.data.success) {
                setUser(response.data.user);
            }
        }
    } 

    useEffect(() => {
        getCurrentUser();
    }, []);
    
    return (
        <div className="content container-fluid">
            <div className="row justify-content-lg-center">
                <div className="col-lg-10">
                    <Header user = {user} />
                    <div className="row">
                        <div className="col-lg-4">
                            {/* Card */}
                            <div className="card card-body mb-3 mb-lg-5">
                                <h5>Complete your profile</h5>
                                {/* Progress */}
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="progress flex-grow-1">
                                        <div className="progress-bar bg-primary" role="progressbar" style={{ width: '82%' }} aria-valuenow={82} aria-valuemin={0} aria-valuemax={100} />
                                    </div>
                                    <span className="ms-4">82%</span>
                                </div>
                                {/* End Progress */}
                            </div>
                            {/* End Card */}
                            {/* Sticky Block Start Point */}
                            <div id="accountSidebarNav" />
                            {/* Card */}
                            <div className="js-sticky-block card mb-3 mb-lg-5">
                                {/* Header */}
                                <div className="card-header">
                                    <h4 className="card-header-title">Profile</h4>
                                </div>
                                {/* End Header */}
                                {/* Body */}
                                <div className="card-body">
                                    <ul className="list-unstyled list-py-2 text-dark mb-0">
                                        <li className="pb-0"><span className="card-subtitle">About</span></li>
                                        <li><i className="bi-person dropdown-item-icon" /> {user?.firstname} {user?.lastname}</li>
                                        <li><i className="bi-briefcase dropdown-item-icon" /> {user?.department || "No department"}</li>
                                        <li><i className="bi-building dropdown-item-icon" /> {user?.organization || "No Organization"}</li>
                                        <li className="pt-4 pb-0"><span className="card-subtitle">Contacts</span></li>
                                        <li><i className="bi-at dropdown-item-icon" /> {user?.email}</li>
                                        <li><i className="bi-phone dropdown-item-icon" />{user?.phone}</li>
                                        <li className="pt-4 pb-0"><span className="card-subtitle">Teams</span></li>
                                        <li><i className="bi-people dropdown-item-icon" /> Member of 7 teams</li>
                                        <li><i className="bi-stickies dropdown-item-icon" /> Working on 8 projects</li>
                                    </ul>
                                </div>
                                {/* End Body */}
                            </div>
                            {/* End Card */}
                        </div>
                        <div className="col-lg-8">
                            <div className="d-grid gap-3 gap-lg-5">
                                {/* Card */}
                                <div className="card">
                                    {/* Header */}
                                    <div className="card-header card-header-content-between">
                                        <h4 className="card-header-title">Activity stream</h4>
                                        {/* Dropdown */}
                                        <div className="dropdown">
                                            <button type="button" className="btn btn-ghost-secondary btn-icon btn-sm rounded-circle" id="contentActivityStreamDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                                <i className="bi-three-dots-vertical" />
                                            </button>
                                            <div className="dropdown-menu dropdown-menu-end mt-1" aria-labelledby="contentActivityStreamDropdown">
                                                <span className="dropdown-header">Settings</span>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-share-fill dropdown-item-icon" /> Share connections
                                                </a>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-info-circle dropdown-item-icon" /> Suggest edits
                                                </a>
                                                <div className="dropdown-divider" />
                                                <span className="dropdown-header">Feedback</span>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-chat-left-dots dropdown-item-icon" /> Report
                                                </a>
                                            </div>
                                        </div>
                                        {/* End Dropdown */}
                                    </div>
                                    {/* End Header */}
                                    {/* Body */}
                                    <div className="card-body card-body-height" style={{ height: '30rem' }}>
                                        {/* Step */}
                                        <ul className="step step-icon-xs mb-0">
                                            {/* Step Item */}
                                            <li className="step-item">
                                                <div className="step-content-wrapper">
                                                    <span className="step-icon step-icon-pseudo step-icon-soft-dark" />
                                                    <div className="step-content">
                                                        <h5 className="step-title">
                                                            <a className="text-dark" href="#">Task report - uploaded weekly reports</a>
                                                        </h5>
                                                        <p className="fs-5 mb-1">Added 3 files to task <a className="text-uppercase" href="#"><i className="bi-journal-bookmark-fill" /> Fd-7</a></p>
                                                        <ul className="list-group">
                                                            {/* Item */}
                                                            <li className="list-group-item list-group-item-light">
                                                                <div className="row gx-1">
                                                                    <div className="col-sm-4">
                                                                        <div className="d-flex">
                                                                            <span className="flex-shrink-0">
                                                                                <img className="avatar avatar-xs" src="./assets/svg/brands/excel-icon.svg" alt="Image Description" />
                                                                            </span>
                                                                            <div className="flex-grow-1 text-truncate ms-2">
                                                                                <span className="d-block fs-6 text-dark text-truncate" title="weekly-reports.xls">weekly-reports.xls</span>
                                                                                <span className="d-block small text-muted">12kb</span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    {/* End Col */}
                                                                    <div className="col-sm-4">
                                                                        <div className="d-flex">
                                                                            <span className="flex-shrink-0">
                                                                                <img className="avatar avatar-xs" src="./assets/svg/brands/word-icon.svg" alt="Image Description" />
                                                                            </span>
                                                                            <div className="flex-grow-1 text-truncate ms-2">
                                                                                <span className="d-block fs-6 text-dark text-truncate" title="weekly-reports.xls">weekly-reports.xls</span>
                                                                                <span className="d-block small text-muted">4kb</span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    {/* End Col */}
                                                                    <div className="col-sm-4">
                                                                        <div className="d-flex">
                                                                            <span className="flex-shrink-0">
                                                                                <img className="avatar avatar-xs" src="./assets/svg/brands/word-icon.svg" alt="Image Description" />
                                                                            </span>
                                                                            <div className="flex-grow-1 text-truncate ms-2">
                                                                                <span className="d-block fs-6 text-dark text-truncate" title="monthly-reports.xls">monthly-reports.xls</span>
                                                                                <span className="d-block small text-muted">8kb</span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    {/* End Col */}
                                                                </div>
                                                                {/* End Row */}
                                                            </li>
                                                            {/* End Item */}
                                                        </ul>
                                                        <span className="text-muted small text-uppercase">Now</span>
                                                    </div>
                                                </div>
                                            </li>
                                            {/* End Step Item */}
                                            {/* Step Item */}
                                            <li className="step-item">
                                                <div className="step-content-wrapper">
                                                    <span className="step-icon step-icon-pseudo step-icon-soft-dark" />
                                                    <div className="step-content">
                                                        <h5 className="step-title">
                                                            <a className="text-dark" href="#">Project status updated</a>
                                                        </h5>
                                                        <p className="fs-5 mb-1">Marked <a className="text-uppercase" href="#"><i className="bi-journal-bookmark-fill" /> Fr-6</a> as <span className="badge bg-soft-success text-success rounded-pill"><span className="legend-indicator bg-success" />"Completed"</span></p>
                                                        <span className="text-muted small text-uppercase">Today</span>
                                                    </div>
                                                </div>
                                            </li>
                                            {/* End Step Item */}
                                            {/* Step Item */}
                                            <li className="step-item">
                                                <div className="step-content-wrapper">
                                                    <span className="step-icon step-icon-pseudo step-icon-soft-dark" />
                                                    <div className="step-content">
                                                        <h5 className="step-title">
                                                            <a className="text-dark" href="#">New card styles added</a>
                                                        </h5>
                                                        <p className="fs-5 mb-1">Added 3 card to <a href="#">Payments</a></p>
                                                        <ul className="list-group">
                                                            {/* Item */}
                                                            <li className="list-group-item list-group-item-light">
                                                                <div className="row gx-2">
                                                                    <div className="col">
                                                                        <img className="img-fluid rounded-2" src="./assets/svg/components/card-1.svg" alt="Image Description" />
                                                                    </div>
                                                                    <div className="col">
                                                                        <img className="img-fluid rounded-2" src="./assets/svg/components/card-2.svg" alt="Image Description" />
                                                                    </div>
                                                                    <div className="col">
                                                                        <img className="img-fluid rounded-2" src="./assets/svg/components/card-3.svg" alt="Image Description" />
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            {/* Item */}
                                                        </ul>
                                                        <span className="text-muted small text-uppercase">May 12</span>
                                                    </div>
                                                </div>
                                            </li>
                                            {/* End Step Item */}
                                            {/* Step Item */}
                                            <li className="step-item">
                                                <div className="step-content-wrapper">
                                                    <span className="step-icon step-icon-pseudo step-icon-soft-dark" />
                                                    <div className="step-content">
                                                        <h5 className="step-title">
                                                            <a className="text-dark" href="#">Dean added a new team member</a>
                                                        </h5>
                                                        <p className="fs-5 mb-1">Added a new member to Front Dashboard</p>
                                                        <span className="text-muted small text-uppercase">May 15</span>
                                                    </div>
                                                </div>
                                            </li>
                                            {/* End Step Item */}
                                            {/* Step Item */}
                                            <li className="step-item">
                                                <div className="step-content-wrapper">
                                                    <span className="step-icon step-icon-pseudo step-icon-soft-dark" />
                                                    <div className="step-content">
                                                        <h5 className="step-title">
                                                            <a className="text-dark" href="#">Project status updated</a>
                                                        </h5>
                                                        <p className="fs-5 mb-1">Marked <a className="text-uppercase" href="#"><i className="bi-journal-bookmark-fill" /> Fr-3</a> as <span className="badge bg-soft-primary text-primary rounded-pill"><span className="legend-indicator bg-primary" />"In progress"</span></p>
                                                        <span className="text-muted small text-uppercase">Apr 29</span>
                                                    </div>
                                                </div>
                                            </li>
                                            {/* End Step Item */}
                                            {/* Step Item */}
                                            <li className="step-item">
                                                <div className="step-content-wrapper">
                                                    <span className="step-icon step-icon-pseudo step-icon-soft-dark" />
                                                    <div className="step-content">
                                                        <h5 className="step-title">
                                                            <a className="text-dark" href="#">Achievements</a>
                                                        </h5>
                                                        <p className="fs-5 mb-1">Earned a "Top endorsed" <i className="tio-verified text-primary" /> badge</p>
                                                        <span className="text-muted small text-uppercase">Apr 06</span>
                                                    </div>
                                                </div>
                                            </li>
                                            {/* End Step Item */}
                                            {/* Step Item */}
                                            <li id="collapseActivitySection" className="step-item collapse">
                                                <div className="step-content-wrapper">
                                                    <span className="step-icon step-icon-pseudo step-icon-soft-dark" />
                                                    <div className="step-content">
                                                        <h5 className="step-title">
                                                            <a className="text-dark" href="#">Project status updated</a>
                                                        </h5>
                                                        <p className="fs-5 mb-1">Updated <a className="text-uppercase" href="#"><i className="bi-journal-bookmark-fill" /> Fr-3</a> as <span className="badge bg-soft-secondary text-secondary rounded-pill"><span className="legend-indicator bg-secondary" />"To do"</span></p>
                                                        <span className="text-muted small text-uppercase">Feb 10</span>
                                                    </div>
                                                </div>
                                            </li>
                                            {/* End Step Item */}
                                        </ul>
                                        {/* End Step */}
                                    </div>
                                    {/* End Body */}
                                    {/* Footer */}
                                    <div className="card-footer">
                                        <a className="link link-collapse" data-bs-toggle="collapse" href="#collapseActivitySection" role="button" aria-expanded="false" aria-controls="collapseActivitySection">
                                            <span className="link-collapse-default">View more</span>
                                            <span className="link-collapse-active">View less</span>
                                        </a>
                                    </div>
                                    {/* End Footer */}
                                </div>
                                {/* End Card */}
                                <div className="row">
                                    <div className="col-sm-6 mb-3 mb-sm-0">
                                        {/* Card */}
                                        <div className="card h-100">
                                            {/* Header */}
                                            <div className="card-header">
                                                <h4 className="card-header-title">Connections</h4>
                                            </div>
                                            {/* End Header */}
                                            {/* Body */}
                                            <div className="card-body">
                                                <ul className="list-unstyled list-py-3 mb-0">
                                                    {/* Item */}
                                                    <li>
                                                        <div className="d-flex align-items-center">
                                                            <a className="d-flex align-items-center me-2" href="#">
                                                                <div className="flex-shrink-0">
                                                                    <div className="avatar avatar-sm avatar-soft-primary avatar-circle">
                                                                        <span className="avatar-initials">R</span>
                                                                        <span className="avatar-status avatar-sm-status avatar-status-warning" />
                                                                    </div>
                                                                </div>
                                                                <div className="flex-grow-1 ms-3">
                                                                    <h5 className="text-hover-primary mb-0">Rachel Doe</h5>
                                                                    <span className="fs-6 text-body">25 connections</span>
                                                                </div>
                                                            </a>
                                                            <div className="ms-auto">
                                                                {/* Form Check */}
                                                                <div className="form-check form-check-switch">
                                                                    <input className="form-check-input" type="checkbox" defaultValue id="connectionsCheckbox1" defaultChecked />
                                                                    <label className="form-check-label btn-icon btn-xs rounded-circle" htmlFor="connectionsCheckbox1">
                                                                        <span className="form-check-default">
                                                                            <i className="bi-person-plus-fill" />
                                                                        </span>
                                                                        <span className="form-check-active">
                                                                            <i className="bi-check-lg" />
                                                                        </span>
                                                                    </label>
                                                                </div>
                                                                {/* End Form Check */}
                                                            </div>
                                                        </div>
                                                    </li>
                                                    {/* End Item */}
                                                    {/* Item */}
                                                    <li>
                                                        <div className="d-flex align-items-center">
                                                            <a className="d-flex align-items-center me-2" href="#">
                                                                <div className="flex-shrink-0">
                                                                    <div className="avatar avatar-sm avatar-circle">
                                                                        <img className="avatar-img" src="./assets/img/160x160/img8.jpg" alt="Image Description" />
                                                                        <span className="avatar-status avatar-sm-status avatar-status-success" />
                                                                    </div>
                                                                </div>
                                                                <div className="flex-grow-1 ms-3">
                                                                    <h5 className="text-hover-primary mb-0">Isabella Finley</h5>
                                                                    <span className="fs-6 text-body">79 connections</span>
                                                                </div>
                                                            </a>
                                                            <div className="ms-auto">
                                                                {/* Form Check */}
                                                                <div className="form-check form-check-switch">
                                                                    <input className="form-check-input" type="checkbox" defaultValue id="connectionsCheckbox2" />
                                                                    <label className="form-check-label btn-icon btn-xs rounded-circle" htmlFor="connectionsCheckbox2">
                                                                        <span className="form-check-default">
                                                                            <i className="bi-person-plus-fill" />
                                                                        </span>
                                                                        <span className="form-check-active">
                                                                            <i className="bi-check-lg" />
                                                                        </span>
                                                                    </label>
                                                                </div>
                                                                {/* End Form Check */}
                                                            </div>
                                                        </div>
                                                    </li>
                                                    {/* End Item */}
                                                    {/* Item */}
                                                    <li>
                                                        <div className="d-flex align-items-center">
                                                            <a className="d-flex align-items-center me-2" href="#">
                                                                <div className="flex-shrink-0">
                                                                    <div className="avatar avatar-sm avatar-circle">
                                                                        <img className="avatar-img" src="./assets/img/160x160/img3.jpg" alt="Image Description" />
                                                                        <span className="avatar-status avatar-sm-status avatar-status-warning" />
                                                                    </div>
                                                                </div>
                                                                <div className="flex-grow-1 ms-3">
                                                                    <h5 className="text-hover-primary mb-0">David Harrison</h5>
                                                                    <span className="fs-6 text-body">0 connections</span>
                                                                </div>
                                                            </a>
                                                            <div className="ms-auto">
                                                                {/* Form Check */}
                                                                <div className="form-check form-check-switch">
                                                                    <input className="form-check-input" type="checkbox" defaultValue id="connectionsCheckbox3" defaultChecked />
                                                                    <label className="form-check-label btn-icon btn-xs rounded-circle" htmlFor="connectionsCheckbox3">
                                                                        <span className="form-check-default">
                                                                            <i className="bi-person-plus-fill" />
                                                                        </span>
                                                                        <span className="form-check-active">
                                                                            <i className="bi-check-lg" />
                                                                        </span>
                                                                    </label>
                                                                </div>
                                                                {/* End Form Check */}
                                                            </div>
                                                        </div>
                                                    </li>
                                                    {/* End Item */}
                                                    {/* Item */}
                                                    <li>
                                                        <div className="d-flex align-items-center">
                                                            <a className="d-flex align-items-center me-2" href="#">
                                                                <div className="flex-shrink-0">
                                                                    <div className="avatar avatar-sm avatar-circle">
                                                                        <img className="avatar-img" src="./assets/img/160x160/img6.jpg" alt="Image Description" />
                                                                        <span className="avatar-status avatar-sm-status avatar-status-danger" />
                                                                    </div>
                                                                </div>
                                                                <div className="flex-grow-1 ms-3">
                                                                    <h5 className="text-hover-primary mb-0">Costa Quinn</h5>
                                                                    <span className="fs-6 text-body">9 connections</span>
                                                                </div>
                                                            </a>
                                                            <div className="ms-auto">
                                                                {/* Form Check */}
                                                                <div className="form-check form-check-switch">
                                                                    <input className="form-check-input" type="checkbox" defaultValue id="connectionsCheckbox4" />
                                                                    <label className="form-check-label btn-icon btn-xs rounded-circle" htmlFor="connectionsCheckbox4">
                                                                        <span className="form-check-default">
                                                                            <i className="bi-person-plus-fill" />
                                                                        </span>
                                                                        <span className="form-check-active">
                                                                            <i className="bi-check-lg" />
                                                                        </span>
                                                                    </label>
                                                                </div>
                                                                {/* End Form Check */}
                                                            </div>
                                                        </div>
                                                    </li>
                                                    {/* End Item */}
                                                </ul>
                                            </div>
                                            {/* End Body */}
                                            {/* Footer */}
                                            <a className="card-footer text-center" href="user-profile-connections.html">
                                                View all connections <i className="bi-chevron-right" />
                                            </a>
                                            {/* End Footer */}
                                        </div>
                                        {/* End Card */}
                                    </div>
                                    <div className="col-sm-6">
                                        {/* Card */}
                                        <div className="card h-100">
                                            {/* Header */}
                                            <div className="card-header">
                                                <h4 className="card-header-title">Teams</h4>
                                            </div>
                                            {/* End Header */}
                                            {/* Body */}
                                            <div className="card-body">
                                                <ul className="nav nav-pills card-nav card-nav-vertical nav-pills">
                                                    {/* Item */}
                                                    <li>
                                                        <a className="nav-link" href="#">
                                                            <div className="d-flex">
                                                                <div className="flex-shrink-0">
                                                                    <i className="bi-people-fill nav-icon text-dark" />
                                                                </div>
                                                                <div className="flex-grow-1 ms-3">
                                                                    <span className="d-block text-dark">#digitalmarketing</span>
                                                                    <small className="d-block text-muted">8 members</small>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    {/* End Item */}
                                                    {/* Item */}
                                                    <li>
                                                        <a className="nav-link" href="#">
                                                            <div className="d-flex">
                                                                <div className="flex-shrink-0">
                                                                    <i className="bi-people-fill nav-icon text-dark" />
                                                                </div>
                                                                <div className="flex-grow-1 ms-3">
                                                                    <span className="d-block text-dark">#ethereum</span>
                                                                    <small className="d-block text-muted">14 members</small>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    {/* End Item */}
                                                    {/* Item */}
                                                    <li>
                                                        <a className="nav-link" href="#">
                                                            <div className="d-flex">
                                                                <div className="flex-shrink-0">
                                                                    <i className="bi-people-fill nav-icon text-dark" />
                                                                </div>
                                                                <div className="flex-grow-1 ms-3">
                                                                    <span className="d-block text-dark">#conference</span>
                                                                    <small className="d-block text-muted">3 members</small>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    {/* End Item */}
                                                    {/* Item */}
                                                    <li>
                                                        <a className="nav-link" href="#">
                                                            <div className="d-flex">
                                                                <div className="flex-shrink-0">
                                                                    <i className="bi-people-fill nav-icon text-dark" />
                                                                </div>
                                                                <div className="flex-grow-1 ms-3">
                                                                    <span className="d-block text-dark">#supportteam</span>
                                                                    <small className="d-block text-muted">3 members</small>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    {/* End Item */}
                                                    {/* Item */}
                                                    <li>
                                                        <a className="nav-link" href="#">
                                                            <div className="d-flex">
                                                                <div className="flex-shrink-0">
                                                                    <i className="bi-people-fill nav-icon text-dark" />
                                                                </div>
                                                                <div className="flex-grow-1 ms-3">
                                                                    <span className="d-block text-dark">#invoices</span>
                                                                    <small className="d-block text-muted">3 members</small>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    {/* End Item */}
                                                </ul>
                                            </div>
                                            {/* End Body */}
                                            {/* Footer */}
                                            <a className="card-footer text-center" href="user-profile-teams.html">
                                                View all teams <i className="bi-chevron-right" />
                                            </a>
                                            {/* End Footer */}
                                        </div>
                                        {/* End Card */}
                                    </div>
                                </div>
                                {/* End Row */}
                                {/* Card */}
                                <div className="card">
                                    {/* Header */}
                                    <div className="card-header card-header-content-between">
                                        <h4 className="card-header-title">Projects</h4>
                                        {/* Dropdown */}
                                        <div className="dropdowm">
                                            <button type="button" className="btn btn-ghost-secondary btn-icon btn-sm rounded-circle" id="projectReportDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                                <i className="bi-three-dots-vertical" />
                                            </button>
                                            <div className="dropdown-menu dropdown-menu-end mt-1" aria-labelledby="projectReportDropdown">
                                                <span className="dropdown-header">Settings</span>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-share-fill dropdown-item-icon" /> Share connections
                                                </a>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-info-circle dropdown-item-icon" /> Suggest edits
                                                </a>
                                                <div className="dropdown-divider" />
                                                <span className="dropdown-header">Feedback</span>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-chat-left-dots dropdown-item-icon" /> Report
                                                </a>
                                            </div>
                                        </div>
                                        {/* End Dropdown */}
                                    </div>
                                    {/* End Header */}
                                    {/* Table */}
                                    <div className="table-responsive">
                                        <table className="table table-borderless table-thead-bordered table-nowrap table-align-middle card-table">
                                            <thead className="thead-light">
                                                <tr>
                                                    <th>Project</th>
                                                    <th style={{ width: '40%' }}>Progress</th>
                                                    <th className="table-text-end">Hours spent</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <div className="d-flex">
                                                            <span className="avatar avatar-xs avatar-soft-dark avatar-circle">
                                                                <span className="avatar-initials">U</span>
                                                            </span>
                                                            <div className="ms-3">
                                                                <h5 className="mb-0">UI/UX</h5>
                                                                <small>Updated 2 hours ago</small>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <span className="me-3">0%</span>
                                                            <div className="progress table-progress">
                                                                <div className="progress-bar" role="progressbar" style={{ width: '0%' }} aria-valuenow={0} aria-valuemin={0} aria-valuemax={100} />
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="table-text-end">4:25</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="d-flex">
                                                            <img className="avatar avatar-xs" src="./assets/svg/brands/spec-icon.svg" alt="Image Description" />
                                                            <div className="ms-3">
                                                                <h5 className="mb-0">Get a complete audit store</h5>
                                                                <small>Updated 1 day ago</small>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <span className="me-3">45%</span>
                                                            <div className="progress table-progress">
                                                                <div className="progress-bar" role="progressbar" style={{ width: '45%' }} aria-valuenow={45} aria-valuemin={0} aria-valuemax={100} />
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="table-text-end">18:42</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="d-flex">
                                                            <img className="avatar avatar-xs" src="./assets/svg/brands/capsule-icon.svg" alt="Image Description" />
                                                            <div className="ms-3">
                                                                <h5 className="mb-0">Build stronger customer relationships</h5>
                                                                <small>Updated 2 days ago</small>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <span className="me-3">59%</span>
                                                            <div className="progress table-progress">
                                                                <div className="progress-bar" role="progressbar" style={{ width: '59%' }} aria-valuenow={59} aria-valuemin={0} aria-valuemax={100} />
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="table-text-end">9:01</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="d-flex">
                                                            <img className="avatar avatar-xs" src="./assets/svg/brands/mailchimp-icon.svg" alt="Image Description" />
                                                            <div className="ms-3">
                                                                <h5 className="mb-0">Update subscription method</h5>
                                                                <small>Updated 2 days ago</small>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <span className="me-3">57%</span>
                                                            <div className="progress table-progress">
                                                                <div className="progress-bar bg-success" role="progressbar" style={{ width: '57%' }} aria-valuenow={57} aria-valuemin={0} aria-valuemax={100} />
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="table-text-end">0:37</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="d-flex">
                                                            <img className="avatar avatar-xs" src="./assets/svg/brands/figma-icon.svg" alt="Image Description" />
                                                            <div className="ms-3">
                                                                <h5 className="mb-0">Create a new theme</h5>
                                                                <small>Updated 1 week ago</small>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <span className="me-3">100%</span>
                                                            <div className="progress table-progress">
                                                                <div className="progress-bar bg-success" role="progressbar" style={{ width: '100%' }} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="table-text-end">24:12</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="d-flex">
                                                            <span className="avatar avatar-xs avatar-soft-info avatar-circle">
                                                                <span className="avatar-initials">I</span>
                                                            </span>
                                                            <div className="ms-3">
                                                                <h5 className="mb-0">Improve social banners</h5>
                                                                <small>Updated 1 week ago</small>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <span className="me-3">0%</span>
                                                            <div className="progress table-progress">
                                                                <div className="progress-bar" role="progressbar" style={{ width: '0%' }} aria-valuenow={0} aria-valuemin={0} aria-valuemax={100} />
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="table-text-end">8:08</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    {/* End Table */}
                                    {/* Footer */}
                                    <a className="card-footer text-center" href="./projects.html">
                                        View all projects <i className="bi-chevron-right" />
                                    </a>
                                    {/* End Footer */}
                                </div>
                                {/* End Card */}
                            </div>
                            {/* Sticky Block End Point */}
                            <div id="stickyBlockEndPoint" />
                        </div>
                    </div>
                    {/* End Row */}
                </div>
                {/* End Col */}
            </div>
            {/* End Row */}
        </div>
    )
}

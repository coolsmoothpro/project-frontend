import React from 'react'

export default function Kanban() {
    return (
        <>
            <div className="content container-fluid">
                {/* Page Header */}
                <div className="page-header">
                    <div className="row align-items-end">
                        <div className="col-sm mb-2 mb-sm-0">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb breadcrumb-no-gutter">
                                    <li className="breadcrumb-item"><a className="breadcrumb-link" href="javascript:;">Apps</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Kanban</li>
                                </ol>
                            </nav>
                            <h1 className="page-header-title">Kanban</h1>
                        </div>
                        {/* End Col */}
                        <div className="col-lg-auto">
                            <span className="text-cap small">Team members:</span>
                            <div className="d-flex">
                                {/* Avatar Group */}
                                <div className="avatar-group avatar-circle me-3">
                                    <a className="avatar" href="./user-profile.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Amanda Harvey">
                                        <img className="avatar-img" src="./assets/img/160x160/img10.jpg" alt="Image Description" />
                                    </a>
                                    <a className="avatar" href="./user-profile.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Linda Bates">
                                        <img className="avatar-img" src="./assets/img/160x160/img9.jpg" alt="Image Description" />
                                    </a>
                                    <a className="avatar avatar-soft-info" href="./user-profile.html" data-bs-toggle="tooltip" data-bs-placement="top" title="#digitalmarketing">
                                        <span className="avatar-initials">
                                            <i className="bi-people-fill" />
                                        </span>
                                    </a>
                                    <a className="avatar" href="./user-profile.html" data-bs-toggle="tooltip" data-bs-placement="top" title="David Harrison">
                                        <img className="avatar-img" src="./assets/img/160x160/img3.jpg" alt="Image Description" />
                                    </a>
                                    <a className="avatar avatar-soft-dark" href="./user-profile.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Antony Taylor">
                                        <span className="avatar-initials">A</span>
                                    </a>
                                    <a className="avatar avatar-light avatar-circle" href="javascript:;" data-bs-toggle="modal" data-bs-target="#shareWithPeopleModal">
                                        <span className="avatar-initials">+2</span>
                                    </a>
                                </div>
                                {/* End Avatar Group */}
                                <a className="btn btn-primary btn-icon rounded-circle" href="javascript:;" data-bs-toggle="modal" data-bs-target="#shareWithPeopleModal">
                                    <i className="bi-share-fill" />
                                </a>
                            </div>
                        </div>
                        {/* End Col */}
                    </div>
                </div>
                {/* End Page Header */}
            </div>
            {/* Content */}
            <div className="content container-fluid my-n9">
                <div className="row mb-5">
                    <div className="col-12 col-sm-auto mb-3">
                        {/* Input Group */}
                        <div className="input-group input-group-merge">
                            <div className="input-group-prepend input-group-text">
                                <i className="bi-search" />
                            </div>
                            <input type="search" className="form-control" placeholder="Search projects" aria-label="Search projects" />
                        </div>
                        {/* End Input Group */}
                    </div>
                    {/* End Col */}
                    <div className="col-auto mb-3">
                        {/* Daterangepicker */}
                        <button id="js-daterangepicker-predefined" className="btn btn-ghost-secondary dropdown-toggle">
                            <i className="bi-calendar-week" />
                            <span className="js-daterangepicker-predefined-preview ms-2" />
                        </button>
                        {/* End Daterangepicker */}
                    </div>
                    {/* End Col */}
                    <div className="col-auto mb-3 ms-auto">
                        {/* Nav */}
                        <ul className="nav nav-segment" id="connectionsTab" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active" id="grid-tab" data-bs-toggle="tab" href="#grid" role="tab" aria-controls="grid" aria-selected="true" title="Column view">
                                    <i className="bi-grid" />
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="list-tab" data-bs-toggle="tab" href="#list" role="tab" aria-controls="list" aria-selected="false" title="List view">
                                    <i className="bi-view-list" />
                                </a>
                            </li>
                        </ul>
                        {/* End Nav */}
                    </div>
                    {/* End Col */}
                </div>
                {/* End Row */}
            </div>
            {/* End Content */}
            {/* Tab Content */}
            <div className="tab-content" id="connectionsTabContent">
                <div className="tab-pane fade show active" id="grid" role="tabpanel" aria-labelledby="grid-tab">
                    {/* Content */}
                    <div className="content container-fluid kanban-board">
                        {/* Kanban Row */}
                        <ul className="row list-unstyled kanban-board-row">
                            <li className="js-add-field col-12" data-hs-add-field-options="{
                &quot;template&quot;: &quot;#createProjectGridTemplateToDo&quot;,
                &quot;container&quot;: &quot;#createProjectGridContainerToDo&quot;,
                &quot;defaultCreated&quot;: 0
               }">
                                {/* Title */}
                                <div className="js-sortable-disabled d-flex justify-content-between align-items-center mb-3">
                                    <h6 className="text-cap mb-0">To do</h6>
                                    <a className="js-create-field btn btn-white btn-icon btn-xs" href="javascript:;" data-bs-toggle="tooltip" data-bs-placement="left" title="Add project">
                                        <i className="bi-plus" />
                                    </a>
                                </div>
                                {/* End Title */}
                                <div className="js-sortable">
                                    {/* Card */}
                                    <div className="js-sortable-link sortablejs-custom sortablejs-custom-rotate sortablejs-custom-handle" data-href="#">
                                        <div className="card mb-3">
                                            <div className="card-body">
                                                <div className="d-flex mb-5">
                                                    <div className="me-2">
                                                        <h4 className="text-wrap">Front mobile app launch</h4>
                                                        {/* Avatar Group */}
                                                        <div className="avatar-group avatar-group-sm">
                                                            <span className="avatar avatar-circle">
                                                                <img className="avatar-img" src="./assets/img/160x160/img6.jpg" alt="Image Description" />
                                                            </span>
                                                            <span className="avatar avatar-circle">
                                                                <img className="avatar-img" src="./assets/img/160x160/img7.jpg" alt="Image Description" />
                                                            </span>
                                                            <span className="avatar avatar-soft-dark avatar-circle">
                                                                <span className="avatar-initials">I</span>
                                                            </span>
                                                            <span className="fs-6 ms-2">3 Assignees</span>
                                                        </div>
                                                        {/* End Avatar Group */}
                                                    </div>
                                                    <div className="ms-auto">
                                                        {/* Dropdown */}
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
                                                        {/* End Dropdown */}
                                                    </div>
                                                </div>
                                                <div className="row mb-3">
                                                    <div className="col-4">
                                                        {/* Stats */}
                                                        <div className="text-center">
                                                            <span className="d-block h4 mb-1">20</span>
                                                            <span className="d-block fs-6">Tasks</span>
                                                        </div>
                                                        {/* End Stats */}
                                                    </div>
                                                    {/* End Col */}
                                                    <div className="col-4">
                                                        {/* Stats */}
                                                        <div className="text-center">
                                                            <span className="d-block h4 mb-1">0</span>
                                                            <span className="d-block fs-6">Complete</span>
                                                        </div>
                                                        {/* End Stats */}
                                                    </div>
                                                    {/* End Col */}
                                                    <div className="col-4">
                                                        {/* Stats */}
                                                        <div className="text-center">
                                                            <span className="d-block h4 mb-1">0</span>
                                                            <span className="d-block fs-6">Completed</span>
                                                        </div>
                                                        {/* End Stats */}
                                                    </div>
                                                    {/* End Col */}
                                                </div>
                                                {/* End Row */}
                                                {/* Progress */}
                                                <div className="progress">
                                                    <div className="progress-bar" role="progressbar" style={{ width: '0%' }} aria-valuenow={0} aria-valuemin={0} aria-valuemax={100} />
                                                </div>
                                                {/* End Progress */}
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Card */}
                                    {/* Card */}
                                    <div className="js-sortable-link sortablejs-custom sortablejs-custom-rotate sortablejs-custom-handle" data-href="#">
                                        <div className="card mb-3">
                                            <div className="card-body">
                                                <div className="d-flex mb-5">
                                                    <div className="me-2">
                                                        <h4 className="text-wrap">Increase page loading speed</h4>
                                                        {/* Avatar Group */}
                                                        <div className="avatar-group avatar-group-sm">
                                                            <span className="avatar avatar-circle">
                                                                <img className="avatar-img" src="./assets/img/160x160/img3.jpg" alt="Image Description" />
                                                            </span>
                                                            <span className="avatar avatar-circle">
                                                                <img className="avatar-img" src="./assets/img/160x160/img6.jpg" alt="Image Description" />
                                                            </span>
                                                            <span className="fs-6 ms-2">2 Assignees</span>
                                                        </div>
                                                        {/* End Avatar Group */}
                                                    </div>
                                                    <div className="ms-auto">
                                                        {/* Dropdown */}
                                                        <div className="dropdown">
                                                            <button type="button" className="btn btn-ghost-secondary btn-icon btn-sm card-dropdown-btn rounded-circle" id="kanbanProjectsGridDropdown2" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <i className="bi-three-dots-vertical" />
                                                            </button>
                                                            <div className="dropdown-menu dropdown-menu-end" aria-labelledby="kanbanProjectsGridDropdown2">
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
                                                        {/* End Dropdown */}
                                                    </div>
                                                </div>
                                                <div className="row mb-3">
                                                    <div className="col-4">
                                                        {/* Stats */}
                                                        <div className="text-center">
                                                            <span className="d-block h4 mb-1">3</span>
                                                            <span className="d-block fs-6">Tasks</span>
                                                        </div>
                                                        {/* End Stats */}
                                                    </div>
                                                    {/* End Col */}
                                                    <div className="col-4">
                                                        {/* Stats */}
                                                        <div className="text-center">
                                                            <span className="d-block h4 mb-1">0</span>
                                                            <span className="d-block fs-6">Complete</span>
                                                        </div>
                                                        {/* End Stats */}
                                                    </div>
                                                    {/* End Col */}
                                                    <div className="col-4">
                                                        {/* Stats */}
                                                        <div className="text-center">
                                                            <span className="d-block h4 mb-1">0</span>
                                                            <span className="d-block fs-6">Completed</span>
                                                        </div>
                                                        {/* End Stats */}
                                                    </div>
                                                    {/* End Col */}
                                                </div>
                                                {/* End Row */}
                                                {/* Progress */}
                                                <div className="progress">
                                                    <div className="progress-bar" role="progressbar" style={{ width: '0%' }} aria-valuenow={0} aria-valuemin={0} aria-valuemax={100} />
                                                </div>
                                                {/* End Progress */}
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Card */}
                                    {/* Card */}
                                    <div className="js-sortable-link sortablejs-custom sortablejs-custom-rotate sortablejs-custom-handle" data-href="#">
                                        <div className="card mb-3">
                                            <div className="card-body">
                                                <div className="d-flex mb-5">
                                                    <div className="me-2">
                                                        <h4 className="text-wrap">Implement a calendar plugin</h4>
                                                        {/* Avatar Group */}
                                                        <div className="avatar-group avatar-group-sm">
                                                            <span className="avatar avatar-circle">
                                                                <img className="avatar-img" src="./assets/img/160x160/img5.jpg" alt="Image Description" />
                                                            </span>
                                                            <span className="fs-6 ms-2">1 Assignee</span>
                                                        </div>
                                                        {/* End Avatar Group */}
                                                    </div>
                                                    <div className="ms-auto">
                                                        {/* Dropdown */}
                                                        <div className="dropdown">
                                                            <button type="button" className="btn btn-ghost-secondary btn-icon btn-sm card-dropdown-btn rounded-circle" id="kanbanProjectsGridDropdown3" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <i className="bi-three-dots-vertical" />
                                                            </button>
                                                            <div className="dropdown-menu dropdown-menu-end" aria-labelledby="kanbanProjectsGridDropdown3">
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
                                                        {/* End Dropdown */}
                                                    </div>
                                                </div>
                                                <div className="row mb-3">
                                                    <div className="col-4">
                                                        {/* Stats */}
                                                        <div className="text-center">
                                                            <span className="d-block h4 mb-1">9</span>
                                                            <span className="d-block fs-6">Tasks</span>
                                                        </div>
                                                        {/* End Stats */}
                                                    </div>
                                                    {/* End Col */}
                                                    <div className="col-4">
                                                        {/* Stats */}
                                                        <div className="text-center">
                                                            <span className="d-block h4 mb-1">0</span>
                                                            <span className="d-block fs-6">Complete</span>
                                                        </div>
                                                        {/* End Stats */}
                                                    </div>
                                                    {/* End Col */}
                                                    <div className="col-4">
                                                        {/* Stats */}
                                                        <div className="text-center">
                                                            <span className="d-block h4 mb-1">0</span>
                                                            <span className="d-block fs-6">Completed</span>
                                                        </div>
                                                        {/* End Stats */}
                                                    </div>
                                                    {/* End Col */}
                                                </div>
                                                {/* End Row */}
                                                {/* Progress */}
                                                <div className="progress">
                                                    <div className="progress-bar" role="progressbar" style={{ width: '0%' }} aria-valuenow={0} aria-valuemin={0} aria-valuemax={100} />
                                                </div>
                                                {/* End Progress */}
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Card */}
                                </div>
                                {/* Container For Input Field */}
                                <div id="createProjectGridContainerToDo" />
                                {/* Card */}
                                <div className="d-grid">
                                    <a className="js-sortable-disabled js-create-field btn btn-white btn-dashed-outline" href="javascript:;">
                                        <i className="bi-plus" /> Add project
                                    </a>
                                </div>
                                {/* End Card */}
                                {/* Add Create Project Template */}
                                <form id="createProjectGridTemplateToDo" style={{ display: 'none' }}>
                                    <div className="js-sortable-link sortablejs-custom sortablejs-custom-rotate sortablejs-custom-handle" data-href="#">
                                        <div className="card mb-3">
                                            <div className="card-body">
                                                <div className="mb-4">
                                                    <textarea className="form-control" placeholder="What needs to be done?" data-name="body" aria-label="What needs to be done?" defaultValue={""} />
                                                </div>
                                                <div className="d-flex justify-content-end gap-3">
                                                    <a className="js-delete-field btn btn-white btn-sm" href="javascript:;">Cancel</a>
                                                    <a className="btn btn-primary btn-sm" href="javascript:;">Create</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                {/* End Add Create Project Template */}
                            </li>
                            <li className="js-add-field col-12" data-hs-add-field-options="{
                  &quot;template&quot;: &quot;#createProjectGridTemplateInProgress&quot;,
                  &quot;container&quot;: &quot;#createProjectGridContainerInProgress&quot;,
                  &quot;defaultCreated&quot;: 0
                }">
                                {/* Title */}
                                <div className="js-sortable-disabled d-flex justify-content-between align-items-center mb-3">
                                    <h6 className="text-cap mb-0">In progress</h6>
                                    <a className="js-create-field btn btn-white btn-icon btn-xs" href="javascript:;" data-bs-toggle="tooltip" data-bs-placement="left" title="Add project">
                                        <i className="bi-plus" />
                                    </a>
                                </div>
                                {/* End Title */}
                                <div className="js-sortable">
                                    {/* Card */}
                                    <div className="js-sortable-link sortablejs-custom sortablejs-custom-rotate sortablejs-custom-handle" data-href="#">
                                        <div className="card mb-3">
                                            <div className="card-body">
                                                <div className="d-flex mb-5">
                                                    <div className="me-2">
                                                        <h4 className="text-wrap">Display tasks in account page</h4>
                                                        {/* Avatar Group */}
                                                        <div className="avatar-group avatar-group-sm">
                                                            <span className="avatar avatar-circle">
                                                                <img className="avatar-img" src="./assets/img/160x160/img7.jpg" alt="Image Description" />
                                                            </span>
                                                            <span className="avatar avatar-circle">
                                                                <img className="avatar-img" src="./assets/img/160x160/img5.jpg" alt="Image Description" />
                                                            </span>
                                                            <span className="avatar avatar-circle">
                                                                <img className="avatar-img" src="./assets/img/160x160/img8.jpg" alt="Image Description" />
                                                            </span>
                                                            <span className="fs-6 ms-2">3 Assignees</span>
                                                        </div>
                                                        {/* End Avatar Group */}
                                                    </div>
                                                    <div className="ms-auto">
                                                        {/* Dropdown */}
                                                        <div className="dropdown">
                                                            <button type="button" className="btn btn-ghost-secondary btn-icon btn-sm card-dropdown-btn rounded-circle" id="kanbanProjectsGridDropdown4" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <i className="bi-three-dots-vertical" />
                                                            </button>
                                                            <div className="dropdown-menu dropdown-menu-end" aria-labelledby="kanbanProjectsGridDropdown4">
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
                                                        {/* End Dropdown */}
                                                    </div>
                                                </div>
                                                <div className="row mb-3">
                                                    <div className="col-4">
                                                        {/* Stats */}
                                                        <div className="text-center">
                                                            <span className="d-block h4 mb-1">7</span>
                                                            <span className="d-block fs-6">Tasks</span>
                                                        </div>
                                                        {/* End Stats */}
                                                    </div>
                                                    {/* End Col */}
                                                    <div className="col-4">
                                                        {/* Stats */}
                                                        <div className="text-center">
                                                            <span className="d-block h4 mb-1">12</span>
                                                            <span className="d-block fs-6">Complete</span>
                                                        </div>
                                                        {/* End Stats */}
                                                    </div>
                                                    {/* End Col */}
                                                    <div className="col-4">
                                                        {/* Stats */}
                                                        <div className="text-center">
                                                            <span className="d-block h4 mb-1">3</span>
                                                            <span className="d-block fs-6">Days left</span>
                                                        </div>
                                                        {/* End Stats */}
                                                    </div>
                                                    {/* End Col */}
                                                </div>
                                                {/* End Row */}
                                                {/* Progress */}
                                                <div className="progress">
                                                    <div className="progress-bar bg-warning" role="progressbar" style={{ width: '72%' }} aria-valuenow={72} aria-valuemin={0} aria-valuemax={100} />
                                                </div>
                                                {/* End Progress */}
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Card */}
                                    {/* Card */}
                                    <div className="js-sortable-link sortablejs-custom sortablejs-custom-rotate sortablejs-custom-handle" data-href="#">
                                        <div className="card mb-3">
                                            <div className="card-body">
                                                <div className="d-flex mb-5">
                                                    <div className="me-2">
                                                        <h4 className="text-wrap">Update Slack integration to use the new bot token</h4>
                                                        {/* Avatar Group */}
                                                        <div className="avatar-group avatar-group-sm">
                                                            <span className="avatar avatar-circle">
                                                                <img className="avatar-img" src="./assets/img/160x160/img5.jpg" alt="Image Description" />
                                                            </span>
                                                            <span className="avatar avatar-soft-danger avatar-circle">
                                                                <span className="avatar-initials">P</span>
                                                            </span>
                                                            <span className="avatar avatar-circle">
                                                                <img className="avatar-img" src="./assets/img/160x160/img3.jpg" alt="Image Description" />
                                                            </span>
                                                            <span className="fs-6 ms-2">3 Assignees</span>
                                                        </div>
                                                        {/* End Avatar Group */}
                                                    </div>
                                                    <div className="ms-auto">
                                                        {/* Dropdown */}
                                                        <div className="dropdown">
                                                            <button type="button" className="btn btn-ghost-secondary btn-icon btn-sm card-dropdown-btn rounded-circle" id="kanbanProjectsGridDropdown5" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <i className="bi-three-dots-vertical" />
                                                            </button>
                                                            <div className="dropdown-menu dropdown-menu-end" aria-labelledby="kanbanProjectsGridDropdown5">
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
                                                        {/* End Dropdown */}
                                                    </div>
                                                </div>
                                                <div className="row mb-3">
                                                    <div className="col-4">
                                                        {/* Stats */}
                                                        <div className="text-center">
                                                            <span className="d-block h4 mb-1">40</span>
                                                            <span className="d-block fs-6">Tasks</span>
                                                        </div>
                                                        {/* End Stats */}
                                                    </div>
                                                    {/* End Col */}
                                                    <div className="col-4">
                                                        {/* Stats */}
                                                        <div className="text-center">
                                                            <span className="d-block h4 mb-1">20</span>
                                                            <span className="d-block fs-6">Complete</span>
                                                        </div>
                                                        {/* End Stats */}
                                                    </div>
                                                    {/* End Col */}
                                                    <div className="col-4">
                                                        {/* Stats */}
                                                        <div className="text-center">
                                                            <span className="d-block h4 mb-1">45</span>
                                                            <span className="d-block fs-6">Days left</span>
                                                        </div>
                                                        {/* End Stats */}
                                                    </div>
                                                    {/* End Col */}
                                                </div>
                                                {/* End Row */}
                                                {/* Progress */}
                                                <div className="progress">
                                                    <div className="progress-bar bg-danger" role="progressbar" style={{ width: '22%' }} aria-valuenow={22} aria-valuemin={0} aria-valuemax={100} />
                                                </div>
                                                {/* End Progress */}
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Card */}
                                </div>
                                {/* Container For Input Field */}
                                <div id="createProjectGridContainerInProgress" />
                                {/* Card */}
                                <div className="d-grid">
                                    <a className="js-sortable-disabled js-create-field btn btn-white btn-dashed-outline" href="javascript:;">
                                        <i className="bi-plus" /> Add project
                                    </a>
                                </div>
                                {/* End Card */}
                                {/* Add Create Project Template */}
                                <form id="createProjectGridTemplateInProgress" style={{ display: 'none' }}>
                                    <div className="js-sortable-link sortablejs-custom sortablejs-custom-rotate sortablejs-custom-handle" data-href="#">
                                        <div className="card mb-3">
                                            <div className="card-body">
                                                <div className="mb-4">
                                                    <textarea className="form-control" placeholder="What needs to be done?" data-name="body" aria-label="What needs to be done?" defaultValue={""} />
                                                </div>
                                                <div className="d-flex justify-content-end gap-3">
                                                    <a className="js-delete-field btn btn-white btn-sm" href="javascript:;">Cancel</a>
                                                    <a className="btn btn-primary btn-sm" href="javascript:;">Create</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                {/* End Add Create Project Template */}
                            </li>
                            <li className="js-add-field col-12" data-hs-add-field-options="{
                  &quot;template&quot;: &quot;#createProjectGridTemplateReview&quot;,
                  &quot;container&quot;: &quot;#createProjectGridContainerReview&quot;,
                  &quot;defaultCreated&quot;: 0
                }">
                                {/* Title */}
                                <div className="js-sortable-disabled d-flex justify-content-between align-items-center mb-3">
                                    <h6 className="text-cap mb-0">Review</h6>
                                    <a className="js-create-field btn btn-white btn-icon btn-xs" href="javascript:;" data-bs-toggle="tooltip" data-bs-placement="left" title="Add project">
                                        <i className="bi-plus" />
                                    </a>
                                </div>
                                {/* End Title */}
                                <div className="js-sortable">
                                    {/* Card */}
                                    <div className="js-sortable-link sortablejs-custom sortablejs-custom-rotate sortablejs-custom-handle" data-href="#">
                                        <div className="card mb-3">
                                            <div className="card-body">
                                                <div className="d-flex mb-5">
                                                    <div className="me-2">
                                                        <h4 className="text-wrap">Design banner for social networks</h4>
                                                        {/* Avatar Group */}
                                                        <div className="avatar-group avatar-group-sm">
                                                            <span className="avatar avatar-soft-info avatar-circle">
                                                                <span className="avatar-initials">L</span>
                                                            </span>
                                                            <span className="avatar avatar-circle">
                                                                <img className="avatar-img" src="./assets/img/160x160/img9.jpg" alt="Image Description" />
                                                            </span>
                                                            <span className="fs-6 ms-2">2 Assignees</span>
                                                        </div>
                                                        {/* End Avatar Group */}
                                                    </div>
                                                    <div className="ms-auto">
                                                        {/* Dropdown */}
                                                        <div className="dropdown">
                                                            <button type="button" className="btn btn-ghost-secondary btn-icon btn-sm card-dropdown-btn rounded-circle" id="kanbanProjectsGridDropdown6" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <i className="bi-three-dots-vertical" />
                                                            </button>
                                                            <div className="dropdown-menu dropdown-menu-end" aria-labelledby="kanbanProjectsGridDropdown6">
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
                                                        {/* End Dropdown */}
                                                    </div>
                                                </div>
                                                <div className="row mb-3">
                                                    <div className="col-4">
                                                        {/* Stats */}
                                                        <div className="text-center">
                                                            <span className="d-block h4 mb-1">7</span>
                                                            <span className="d-block fs-6">Tasks</span>
                                                        </div>
                                                        {/* End Stats */}
                                                    </div>
                                                    {/* End Col */}
                                                    <div className="col-4">
                                                        {/* Stats */}
                                                        <div className="text-center">
                                                            <span className="d-block h4 mb-1">7</span>
                                                            <span className="d-block fs-6">Complete</span>
                                                        </div>
                                                        {/* End Stats */}
                                                    </div>
                                                    {/* End Col */}
                                                    <div className="col-4">
                                                        {/* Stats */}
                                                        <div className="text-center">
                                                            <span className="d-block h4 mb-1">2</span>
                                                            <span className="d-block fs-6">Days left</span>
                                                        </div>
                                                        {/* End Stats */}
                                                    </div>
                                                    {/* End Col */}
                                                </div>
                                                {/* End Row */}
                                                {/* Progress */}
                                                <div className="progress">
                                                    <div className="progress-bar bg-success" role="progressbar" style={{ width: '99%' }} aria-valuenow={99} aria-valuemin={0} aria-valuemax={100} />
                                                </div>
                                                {/* End Progress */}
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Card */}
                                </div>
                                {/* Container For Input Field */}
                                <div id="createProjectGridContainerReview" />
                                {/* Card */}
                                <div className="d-grid">
                                    <a className="js-sortable-disabled js-create-field btn btn-white btn-dashed-outline" href="javascript:;">
                                        <i className="bi-plus" /> Add project
                                    </a>
                                </div>
                                {/* End Card */}
                                {/* Add Create Project Template */}
                                <form id="createProjectGridTemplateReview" style={{ display: 'none' }}>
                                    <div className="js-sortable-link sortablejs-custom sortablejs-custom-rotate sortablejs-custom-handle" data-href="#">
                                        <div className="card mb-3">
                                            <div className="card-body">
                                                <div className="mb-4">
                                                    <textarea className="form-control" placeholder="What needs to be done?" data-name="body" aria-label="What needs to be done?" defaultValue={""} />
                                                </div>
                                                <div className="d-flex justify-content-end gap-3">
                                                    <a className="js-delete-field btn btn-white btn-sm" href="javascript:;">Cancel</a>
                                                    <a className="btn btn-primary btn-sm" href="javascript:;">Create</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                {/* End Add Create Project Template */}
                            </li>
                            <li className="js-add-field col-12" data-hs-add-field-options="{
                 &quot;template&quot;: &quot;#createProjectGridTemplateDone&quot;,
                 &quot;container&quot;: &quot;#createProjectGridContainerDone&quot;,
                 &quot;defaultCreated&quot;: 0
               }">
                                {/* Title */}
                                <div className="js-sortable-disabled d-flex justify-content-between align-items-center mb-3">
                                    <h6 className="text-cap mb-0">Done</h6>
                                    <a className="js-create-field btn btn-white btn-icon btn-xs" href="javascript:;" data-bs-toggle="tooltip" data-bs-placement="left" title="Add project">
                                        <i className="bi-plus" />
                                    </a>
                                </div>
                                {/* End Title */}
                                <div className="js-sortable">
                                    {/* Card */}
                                    <div className="js-sortable-link sortablejs-custom sortablejs-custom-rotate sortablejs-custom-handle" data-href="#">
                                        <div className="card mb-3">
                                            <div className="card-body">
                                                <div className="d-flex mb-5">
                                                    <div className="me-2">
                                                        <h4 className="text-wrap">Create product roadmap</h4>
                                                        {/* Avatar Group */}
                                                        <div className="avatar-group avatar-group-sm">
                                                            <span className="avatar avatar-circle">
                                                                <img className="avatar-img" src="./assets/img/160x160/img5.jpg" alt="Image Description" />
                                                            </span>
                                                            <span className="fs-6 ms-2">1 Assignee</span>
                                                        </div>
                                                        {/* End Avatar Group */}
                                                    </div>
                                                    <div className="ms-auto">
                                                        {/* Dropdown */}
                                                        <div className="dropdown">
                                                            <button type="button" className="btn btn-ghost-secondary btn-icon btn-sm card-dropdown-btn rounded-circle" id="kanbanProjectsGridDropdown7" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <i className="bi-three-dots-vertical" />
                                                            </button>
                                                            <div className="dropdown-menu dropdown-menu-end" aria-labelledby="kanbanProjectsGridDropdown7">
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
                                                        {/* End Dropdown */}
                                                    </div>
                                                </div>
                                                <div className="row mb-3">
                                                    <div className="col-4">
                                                        {/* Stats */}
                                                        <div className="text-center">
                                                            <span className="d-block h4 mb-1">1</span>
                                                            <span className="d-block fs-6">Tasks</span>
                                                        </div>
                                                        {/* End Stats */}
                                                    </div>
                                                    {/* End Col */}
                                                    <div className="col-4">
                                                        {/* Stats */}
                                                        <div className="text-center">
                                                            <span className="d-block h4 mb-1">1</span>
                                                            <span className="d-block fs-6">Complete</span>
                                                        </div>
                                                        {/* End Stats */}
                                                    </div>
                                                    {/* End Col */}
                                                    <div className="col-4">
                                                        {/* Stats */}
                                                        <div className="text-center">
                                                            <span className="d-block h4 mb-1">0</span>
                                                            <span className="d-block fs-6">Completed</span>
                                                        </div>
                                                        {/* End Stats */}
                                                    </div>
                                                    {/* End Col */}
                                                </div>
                                                {/* End Row */}
                                                {/* Progress */}
                                                <div className="progress">
                                                    <div className="progress-bar" role="progressbar" style={{ width: '100%' }} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
                                                </div>
                                                {/* End Progress */}
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Card */}
                                    {/* Card */}
                                    <div className="js-sortable-link sortablejs-custom sortablejs-custom-rotate sortablejs-custom-handle" data-href="#">
                                        <div className="card mb-3">
                                            <div className="card-body">
                                                <div className="d-flex mb-5">
                                                    <div className="me-2">
                                                        <h4 className="text-wrap">Mobile: notifications for subscribe pages and goals</h4>
                                                        {/* Avatar Group */}
                                                        <div className="avatar-group avatar-group-sm">
                                                            <span className="avatar avatar-circle">
                                                                <img className="avatar-img" src="./assets/img/160x160/img5.jpg" alt="Image Description" />
                                                            </span>
                                                            <span className="avatar avatar-circle">
                                                                <img className="avatar-img" src="./assets/img/160x160/img7.jpg" alt="Image Description" />
                                                            </span>
                                                            <span className="avatar avatar-circle">
                                                                <img className="avatar-img" src="./assets/img/160x160/img3.jpg" alt="Image Description" />
                                                            </span>
                                                            <span className="fs-6 ms-2">3 Assignees</span>
                                                        </div>
                                                        {/* End Avatar Group */}
                                                    </div>
                                                    <div className="ms-auto">
                                                        {/* Dropdown */}
                                                        <div className="dropdown">
                                                            <button type="button" className="btn btn-ghost-secondary btn-icon btn-sm card-dropdown-btn rounded-circle" id="kanbanProjectsGridDropdown8" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <i className="bi-three-dots-vertical" />
                                                            </button>
                                                            <div className="dropdown-menu dropdown-menu-end" aria-labelledby="kanbanProjectsGridDropdown8">
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
                                                        {/* End Dropdown */}
                                                    </div>
                                                </div>
                                                <div className="row mb-3">
                                                    <div className="col-4">
                                                        {/* Stats */}
                                                        <div className="text-center">
                                                            <span className="d-block h4 mb-1">5</span>
                                                            <span className="d-block fs-6">Tasks</span>
                                                        </div>
                                                        {/* End Stats */}
                                                    </div>
                                                    {/* End Col */}
                                                    <div className="col-4">
                                                        {/* Stats */}
                                                        <div className="text-center">
                                                            <span className="d-block h4 mb-1">7</span>
                                                            <span className="d-block fs-6">Complete</span>
                                                        </div>
                                                        {/* End Stats */}
                                                    </div>
                                                    {/* End Col */}
                                                    <div className="col-4">
                                                        {/* Stats */}
                                                        <div className="text-center">
                                                            <span className="d-block h4 mb-1">0</span>
                                                            <span className="d-block fs-6">Completed</span>
                                                        </div>
                                                        {/* End Stats */}
                                                    </div>
                                                    {/* End Col */}
                                                </div>
                                                {/* End Row */}
                                                {/* Progress */}
                                                <div className="progress">
                                                    <div className="progress-bar" role="progressbar" style={{ width: '100%' }} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
                                                </div>
                                                {/* End Progress */}
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Card */}
                                    {/* Card */}
                                    <div className="js-sortable-link sortablejs-custom sortablejs-custom-rotate sortablejs-custom-handle" data-href="#">
                                        <div className="card mb-3">
                                            <div className="card-body">
                                                <div className="d-flex mb-5">
                                                    <div className="me-2">
                                                        <h4 className="text-wrap">Allow commenting from the report view</h4>
                                                        {/* Avatar Group */}
                                                        <div className="avatar-group avatar-group-sm">
                                                            <span className="avatar avatar-circle">
                                                                <img className="avatar-img" src="./assets/img/160x160/img9.jpg" alt="Image Description" />
                                                            </span>
                                                            <span className="avatar avatar-circle">
                                                                <img className="avatar-img" src="./assets/img/160x160/img4.jpg" alt="Image Description" />
                                                            </span>
                                                            <span className="avatar avatar-soft-info avatar-circle">
                                                                <span className="avatar-initials">V</span>
                                                            </span>
                                                            <span className="fs-6 ms-2">3 Assignees</span>
                                                        </div>
                                                        {/* End Avatar Group */}
                                                    </div>
                                                    <div className="ms-auto">
                                                        {/* Dropdown */}
                                                        <div className="dropdown">
                                                            <button type="button" className="btn btn-ghost-secondary btn-icon btn-sm card-dropdown-btn rounded-circle" id="kanbanProjectsGridDropdown9" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <i className="bi-three-dots-vertical" />
                                                            </button>
                                                            <div className="dropdown-menu dropdown-menu-end" aria-labelledby="kanbanProjectsGridDropdown9">
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
                                                        {/* End Dropdown */}
                                                    </div>
                                                </div>
                                                <div className="row mb-3">
                                                    <div className="col-4">
                                                        {/* Stats */}
                                                        <div className="text-center">
                                                            <span className="d-block h4 mb-1">3</span>
                                                            <span className="d-block fs-6">Tasks</span>
                                                        </div>
                                                        {/* End Stats */}
                                                    </div>
                                                    {/* End Col */}
                                                    <div className="col-4">
                                                        {/* Stats */}
                                                        <div className="text-center">
                                                            <span className="d-block h4 mb-1">6</span>
                                                            <span className="d-block fs-6">Complete</span>
                                                        </div>
                                                        {/* End Stats */}
                                                    </div>
                                                    {/* End Col */}
                                                    <div className="col-4">
                                                        {/* Stats */}
                                                        <div className="text-center">
                                                            <span className="d-block h4 mb-1">0</span>
                                                            <span className="d-block fs-6">Completed</span>
                                                        </div>
                                                        {/* End Stats */}
                                                    </div>
                                                    {/* End Col */}
                                                </div>
                                                {/* End Row */}
                                                {/* Progress */}
                                                <div className="progress">
                                                    <div className="progress-bar" role="progressbar" style={{ width: '100%' }} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
                                                </div>
                                                {/* End Progress */}
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Card */}
                                    {/* Card */}
                                    <div className="js-sortable-link sortablejs-custom sortablejs-custom-rotate sortablejs-custom-handle" data-href="#">
                                        <div className="card mb-3">
                                            <div className="card-body">
                                                <div className="d-flex mb-5">
                                                    <div className="me-2">
                                                        <h4 className="text-wrap">Public API</h4>
                                                        {/* Avatar Group */}
                                                        <div className="avatar-group avatar-group-sm">
                                                            <span className="avatar avatar-circle">
                                                                <img className="avatar-img" src="./assets/img/160x160/img4.jpg" alt="Image Description" />
                                                            </span>
                                                            <span className="avatar avatar-circle">
                                                                <img className="avatar-img" src="./assets/img/160x160/img5.jpg" alt="Image Description" />
                                                            </span>
                                                            <span className="avatar avatar-circle">
                                                                <img className="avatar-img" src="./assets/img/160x160/img6.jpg" alt="Image Description" />
                                                            </span>
                                                            <span className="fs-6 ms-2">3 Assignees</span>
                                                        </div>
                                                        {/* End Avatar Group */}
                                                    </div>
                                                    <div className="ms-auto">
                                                        {/* Dropdown */}
                                                        <div className="dropdown">
                                                            <button type="button" className="btn btn-ghost-secondary btn-icon btn-sm card-dropdown-btn rounded-circle" id="kanbanProjectsGridDropdown10" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <i className="bi-three-dots-vertical" />
                                                            </button>
                                                            <div className="dropdown-menu dropdown-menu-end" aria-labelledby="kanbanProjectsGridDropdown10">
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
                                                        {/* End Dropdown */}
                                                    </div>
                                                </div>
                                                <div className="row mb-3">
                                                    <div className="col-4">
                                                        {/* Stats */}
                                                        <div className="text-center">
                                                            <span className="d-block h4 mb-1">75</span>
                                                            <span className="d-block fs-6">Tasks</span>
                                                        </div>
                                                        {/* End Stats */}
                                                    </div>
                                                    {/* End Col */}
                                                    <div className="col-4">
                                                        {/* Stats */}
                                                        <div className="text-center">
                                                            <span className="d-block h4 mb-1">4</span>
                                                            <span className="d-block fs-6">Complete</span>
                                                        </div>
                                                        {/* End Stats */}
                                                    </div>
                                                    {/* End Col */}
                                                    <div className="col-4">
                                                        {/* Stats */}
                                                        <div className="text-center">
                                                            <span className="d-block h4 mb-1">0</span>
                                                            <span className="d-block fs-6">Completed</span>
                                                        </div>
                                                        {/* End Stats */}
                                                    </div>
                                                    {/* End Col */}
                                                </div>
                                                {/* End Row */}
                                                {/* Progress */}
                                                <div className="progress">
                                                    <div className="progress-bar" role="progressbar" style={{ width: '100%' }} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
                                                </div>
                                                {/* End Progress */}
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Card */}
                                </div>
                                {/* Container For Input Field */}
                                <div id="createProjectGridContainerDone" />
                                {/* Card */}
                                <div className="d-grid">
                                    <a className="js-sortable-disabled js-create-field btn btn-white btn-dashed-outline" href="javascript:;">
                                        <i className="bi-plus" /> Add project
                                    </a>
                                </div>
                                {/* End Card */}
                                {/* Add Create Project Template */}
                                <form id="createProjectGridTemplateDone" style={{ display: 'none' }}>
                                    <div className="js-sortable-link sortablejs-custom sortablejs-custom-rotate sortablejs-custom-handle" data-href="#">
                                        <div className="card mb-3">
                                            <div className="card-body">
                                                <div className="mb-4">
                                                    <textarea className="form-control" placeholder="What needs to be done?" data-name="body" aria-label="What needs to be done?" defaultValue={""} />
                                                </div>
                                                <div className="d-flex justify-content-end gap-3">
                                                    <a className="js-delete-field btn btn-white btn-sm" href="javascript:;">Cancel</a>
                                                    <a className="btn btn-primary btn-sm" href="javascript:;">Create</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                {/* End Add Create Project Template */}
                            </li>
                            <li className="col-12">
                                {/* Title */}
                                <div className="js-sortable-disabled d-flex justify-content-between align-items-center mb-3">
                                    <h6 className="text-cap mb-0">Create a new group</h6>
                                    <div className="js-sortable" />
                                    <a className="btn btn-white btn-icon btn-xs" href="javascript:;" data-bs-toggle="tooltip" data-bs-placement="left" title="Create group">
                                        <i className="bi-plus" />
                                    </a>
                                </div>
                                {/* End Title */}
                            </li>
                        </ul>
                        {/* End Kanban Row */}
                    </div>
                    {/* End Content */}
                </div>
                <div className="tab-pane fade" id="list" role="tabpanel" aria-labelledby="list-tab">
                    {/* Content */}
                    <div className="content container-fluid">
                        {/* Kanban List */}
                        <ul className="list-inline">
                            <li className="js-add-field" data-hs-add-field-options="{
                  &quot;template&quot;: &quot;#createProjectListTemplateToDo&quot;,
                  &quot;container&quot;: &quot;#createProjectListContainerToDo&quot;,
                  &quot;defaultCreated&quot;: 0
                }">
                                {/* Title */}
                                <div className="js-sortable-disabled d-flex justify-content-between align-items-center mb-3">
                                    <h6 className="text-cap mb-0">To do</h6>
                                    <a className="js-create-field btn btn-icon btn-sm btn-white" href="javascript:;" data-bs-toggle="tooltip" data-bs-placement="left" title="Add project">
                                        <i className="bi-plus" />
                                    </a>
                                </div>
                                {/* End Title */}
                                <div className="js-sortable">
                                    {/* Card */}
                                    <div className="js-sortable-link sortablejs-custom-handle card mb-3" data-href="#">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col">
                                                    <h4 className="text-wrap">Front mobile app launch</h4>
                                                </div>
                                                {/* End Col */}
                                                <div className="col-auto">
                                                    {/* Dropdown */}
                                                    <div className="dropdown">
                                                        <button type="button" className="btn btn-ghost-secondary btn-icon btn-sm card-dropdown-btn rounded-circle" id="kanbanProjectsListDropdown1" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <i className="bi-three-dots-vertical" />
                                                        </button>
                                                        <div className="dropdown-menu dropdown-menu-end" aria-labelledby="kanbanProjectsListDropdown1">
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
                                                    {/* End Dropdown */}
                                                </div>
                                            </div>
                                            <div className="row align-items-center">
                                                <div className="col-sm-auto mb-3 mb-sm-0">
                                                    {/* Avatar Group */}
                                                    <div className="avatar-group avatar-group-sm">
                                                        <span className="avatar avatar-circle">
                                                            <img className="avatar-img" src="./assets/img/160x160/img6.jpg" alt="Image Description" />
                                                        </span>
                                                        <span className="avatar avatar-circle">
                                                            <img className="avatar-img" src="./assets/img/160x160/img7.jpg" alt="Image Description" />
                                                        </span>
                                                        <span className="avatar avatar-soft-dark avatar-circle">
                                                            <span className="avatar-initials">I</span>
                                                        </span>
                                                    </div>
                                                    {/* End Avatar Group */}
                                                    <span className="d-block fs-6">3 Assignees</span>
                                                </div>
                                                {/* End Col */}
                                                <div className="col-auto mb-3 mb-sm-0">
                                                    {/* Stats */}
                                                    <div className="text-center">
                                                        <span className="d-block h4 mb-1">20</span>
                                                        <span className="d-block fs-6">Tasks</span>
                                                    </div>
                                                    {/* End Stats */}
                                                </div>
                                                {/* End Col */}
                                                <div className="col-auto mb-3 mb-sm-0">
                                                    {/* Stats */}
                                                    <div className="text-center">
                                                        <span className="d-block h4 mb-1">0</span>
                                                        <span className="d-block fs-6">Complete</span>
                                                    </div>
                                                    {/* End Stats */}
                                                </div>
                                                {/* End Col */}
                                                <div className="col-auto mb-3 mb-sm-0">
                                                    {/* Stats */}
                                                    <div className="text-center">
                                                        <span className="d-block h4 mb-1">0</span>
                                                        <span className="d-block fs-6">Completed</span>
                                                    </div>
                                                    {/* End Stats */}
                                                </div>
                                                {/* End Col */}
                                                <div className="col-sm">
                                                    {/* Progress */}
                                                    <div className="progress">
                                                        <div className="progress-bar" role="progressbar" style={{ width: '0%' }} aria-valuenow={0} aria-valuemin={0} aria-valuemax={100} />
                                                    </div>
                                                    {/* End Progress */}
                                                </div>
                                            </div>
                                            {/* End Row */}
                                        </div>
                                    </div>
                                    {/* End Card */}
                                    {/* Card */}
                                    <div className="js-sortable-link sortablejs-custom-handle card mb-3" data-href="#">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col">
                                                    <h4 className="text-wrap">Increase page loading speed</h4>
                                                </div>
                                                {/* End Col */}
                                                <div className="col-auto">
                                                    {/* Dropdown */}
                                                    <div className="dropdown">
                                                        <button type="button" className="btn btn-ghost-secondary btn-icon btn-sm card-dropdown-btn rounded-circle" id="kanbanProjectsListDropdown2" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <i className="bi-three-dots-vertical" />
                                                        </button>
                                                        <div className="dropdown-menu dropdown-menu-end" aria-labelledby="kanbanProjectsListDropdown2">
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
                                                    {/* End Dropdown */}
                                                </div>
                                            </div>
                                            <div className="row align-items-center">
                                                <div className="col-sm-auto mb-3 mb-sm-0">
                                                    {/* Avatar Group */}
                                                    <div className="avatar-group avatar-group-sm">
                                                        <span className="avatar avatar-circle">
                                                            <img className="avatar-img" src="./assets/img/160x160/img3.jpg" alt="Image Description" />
                                                        </span>
                                                        <span className="avatar avatar-circle">
                                                            <img className="avatar-img" src="./assets/img/160x160/img6.jpg" alt="Image Description" />
                                                        </span>
                                                    </div>
                                                    {/* End Avatar Group */}
                                                    <span className="d-block fs-6">2 Assignees</span>
                                                </div>
                                                {/* End Col */}
                                                <div className="col-auto mb-3 mb-sm-0">
                                                    {/* Stats */}
                                                    <div className="text-center">
                                                        <span className="d-block h4 mb-1">3</span>
                                                        <span className="d-block fs-6">Tasks</span>
                                                    </div>
                                                    {/* End Stats */}
                                                </div>
                                                {/* End Col */}
                                                <div className="col-auto mb-3 mb-sm-0">
                                                    {/* Stats */}
                                                    <div className="text-center">
                                                        <span className="d-block h4 mb-1">0</span>
                                                        <span className="d-block fs-6">Complete</span>
                                                    </div>
                                                    {/* End Stats */}
                                                </div>
                                                {/* End Col */}
                                                <div className="col-auto mb-3 mb-sm-0">
                                                    {/* Stats */}
                                                    <div className="text-center">
                                                        <span className="d-block h4 mb-1">0</span>
                                                        <span className="d-block fs-6">Completed</span>
                                                    </div>
                                                    {/* End Stats */}
                                                </div>
                                                {/* End Col */}
                                                <div className="col-sm">
                                                    {/* Progress */}
                                                    <div className="progress">
                                                        <div className="progress-bar" role="progressbar" style={{ width: '0%' }} aria-valuenow={0} aria-valuemin={0} aria-valuemax={100} />
                                                    </div>
                                                    {/* End Progress */}
                                                </div>
                                            </div>
                                            {/* End Row */}
                                        </div>
                                    </div>
                                    {/* End Card */}
                                    {/* Card */}
                                    <div className="js-sortable-link sortablejs-custom-handle card mb-3" data-href="#">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col">
                                                    <h4 className="text-wrap">Implement a calendar plugin</h4>
                                                </div>
                                                {/* End Col */}
                                                <div className="col-auto">
                                                    {/* Dropdown */}
                                                    <div className="dropdown">
                                                        <button type="button" className="btn btn-ghost-secondary btn-icon btn-sm card-dropdown-btn rounded-circle" id="kanbanProjectsListDropdown3" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <i className="bi-three-dots-vertical" />
                                                        </button>
                                                        <div className="dropdown-menu dropdown-menu-end" aria-labelledby="kanbanProjectsListDropdown3">
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
                                                    {/* End Dropdown */}
                                                </div>
                                            </div>
                                            <div className="row align-items-center">
                                                <div className="col-sm-auto mb-3 mb-sm-0">
                                                    {/* Avatar Group */}
                                                    <div className="avatar-group avatar-group-sm">
                                                        <span className="avatar avatar-circle">
                                                            <img className="avatar-img" src="./assets/img/160x160/img3.jpg" alt="Image Description" />
                                                        </span>
                                                        <span className="avatar avatar-circle">
                                                            <img className="avatar-img" src="./assets/img/160x160/img6.jpg" alt="Image Description" />
                                                        </span>
                                                    </div>
                                                    {/* End Avatar Group */}
                                                    <span className="d-block fs-6">2 Assignees</span>
                                                </div>
                                                {/* End Col */}
                                                <div className="col-auto mb-3 mb-sm-0">
                                                    {/* Stats */}
                                                    <div className="text-center">
                                                        <span className="d-block h4 mb-1">9</span>
                                                        <span className="d-block fs-6">Tasks</span>
                                                    </div>
                                                    {/* End Stats */}
                                                </div>
                                                {/* End Col */}
                                                <div className="col-auto mb-3 mb-sm-0">
                                                    {/* Stats */}
                                                    <div className="text-center">
                                                        <span className="d-block h4 mb-1">0</span>
                                                        <span className="d-block fs-6">Complete</span>
                                                    </div>
                                                    {/* End Stats */}
                                                </div>
                                                {/* End Col */}
                                                <div className="col-auto mb-3 mb-sm-0">
                                                    {/* Stats */}
                                                    <div className="text-center">
                                                        <span className="d-block h4 mb-1">0</span>
                                                        <span className="d-block fs-6">Completed</span>
                                                    </div>
                                                    {/* End Stats */}
                                                </div>
                                                {/* End Col */}
                                                <div className="col-sm">
                                                    {/* Progress */}
                                                    <div className="progress">
                                                        <div className="progress-bar" role="progressbar" style={{ width: '0%' }} aria-valuenow={0} aria-valuemin={0} aria-valuemax={100} />
                                                    </div>
                                                    {/* End Progress */}
                                                </div>
                                            </div>
                                            {/* End Row */}
                                        </div>
                                    </div>
                                    {/* End Card */}
                                </div>
                                {/* Container For Input Field */}
                                <div id="createProjectListContainerToDo" />
                                {/* Card */}
                                <a className="js-sortable-disabled js-create-field btn btn-white btn-dashed-outline" href="javascript:;">
                                    <i className="bi-plus" /> Add project
                                </a>
                                {/* End Card */}
                                {/* Add Create Project Template */}
                                <form id="createProjectListTemplateToDo" style={{ display: 'none' }}>
                                    <div className="js-sortable-link sortablejs-custom-handle card mb-3" data-href="#">
                                        <div className="card-body">
                                            <div className="mb-4">
                                                <textarea className="form-control" placeholder="What needs to be done?" data-name="body" aria-label="What needs to be done?" defaultValue={""} />
                                            </div>
                                            <div className="d-flex justify-content-end gap-3">
                                                <a className="js-delete-field btn btn-white btn-sm" href="javascript:;">Cancel</a>
                                                <a className="btn btn-primary btn-sm" href="javascript:;">Create</a>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                {/* End Add Create Project Template */}
                            </li>
                            {/* Divider */}
                            <li>
                                <hr className="my-7" />
                            </li>
                            {/* End Divider */}
                            <li className="js-add-field" data-hs-add-field-options="{
                  &quot;template&quot;: &quot;#createProjectListTemplateInProgress&quot;,
                  &quot;container&quot;: &quot;#createProjectListContainerInProgress&quot;,
                  &quot;defaultCreated&quot;: 0
                }">
                                {/* Title */}
                                <div className="js-sortable-disabled d-flex justify-content-between align-items-center mb-3">
                                    <h6 className="text-cap mb-0">In progress</h6>
                                    <a className="js-create-field btn btn-icon btn-sm btn-white" href="javascript:;" data-bs-toggle="tooltip" data-bs-placement="left" title="Add project">
                                        <i className="bi-plus" />
                                    </a>
                                </div>
                                {/* End Title */}
                                <div className="js-sortable">
                                    {/* Card */}
                                    <div className="js-sortable-link sortablejs-custom-handle card mb-3" data-href="#">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col">
                                                    <h4 className="text-wrap">Display tasks in account page</h4>
                                                </div>
                                                {/* End Col */}
                                                <div className="col-auto">
                                                    {/* Dropdown */}
                                                    <div className="dropdown">
                                                        <button type="button" className="btn btn-ghost-secondary btn-icon btn-sm card-dropdown-btn rounded-circle" id="kanbanProjectsListDropdown4" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <i className="bi-three-dots-vertical" />
                                                        </button>
                                                        <div className="dropdown-menu dropdown-menu-end" aria-labelledby="kanbanProjectsListDropdown4">
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
                                                    {/* End Dropdown */}
                                                </div>
                                            </div>
                                            <div className="row align-items-center">
                                                <div className="col-sm-auto mb-3 mb-sm-0">
                                                    {/* Avatar Group */}
                                                    <div className="avatar-group avatar-group-sm">
                                                        <span className="avatar avatar-circle">
                                                            <img className="avatar-img" src="./assets/img/160x160/img7.jpg" alt="Image Description" />
                                                        </span>
                                                        <span className="avatar avatar-circle">
                                                            <img className="avatar-img" src="./assets/img/160x160/img5.jpg" alt="Image Description" />
                                                        </span>
                                                        <span className="avatar avatar-circle">
                                                            <img className="avatar-img" src="./assets/img/160x160/img8.jpg" alt="Image Description" />
                                                        </span>
                                                    </div>
                                                    {/* End Avatar Group */}
                                                    <span className="d-block fs-6">3 Assignees</span>
                                                </div>
                                                {/* End Col */}
                                                <div className="col-auto mb-3 mb-sm-0">
                                                    {/* Stats */}
                                                    <div className="text-center">
                                                        <span className="d-block h4 mb-1">7</span>
                                                        <span className="d-block fs-6">Tasks</span>
                                                    </div>
                                                    {/* End Stats */}
                                                </div>
                                                {/* End Col */}
                                                <div className="col-auto mb-3 mb-sm-0">
                                                    {/* Stats */}
                                                    <div className="text-center">
                                                        <span className="d-block h4 mb-1">12</span>
                                                        <span className="d-block fs-6">Complete</span>
                                                    </div>
                                                    {/* End Stats */}
                                                </div>
                                                {/* End Col */}
                                                <div className="col-auto mb-3 mb-sm-0">
                                                    {/* Stats */}
                                                    <div className="text-center">
                                                        <span className="d-block h4 mb-1">3</span>
                                                        <span className="d-block fs-6">Completed</span>
                                                    </div>
                                                    {/* End Stats */}
                                                </div>
                                                {/* End Col */}
                                                <div className="col-sm">
                                                    {/* Progress */}
                                                    <div className="progress">
                                                        <div className="progress-bar bg-warning" role="progressbar" style={{ width: '72%' }} aria-valuenow={72} aria-valuemin={0} aria-valuemax={100} />
                                                    </div>
                                                    {/* End Progress */}
                                                </div>
                                            </div>
                                            {/* End Row */}
                                        </div>
                                    </div>
                                    {/* End Card */}
                                    {/* Card */}
                                    <div className="js-sortable-link sortablejs-custom-handle card mb-3" data-href="#">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col">
                                                    <h4 className="text-wrap">Update Slack integration to use the new bot token</h4>
                                                </div>
                                                {/* End Col */}
                                                <div className="col-auto">
                                                    {/* Dropdown */}
                                                    <div className="dropdown">
                                                        <button type="button" className="btn btn-ghost-secondary btn-icon btn-sm card-dropdown-btn rounded-circle" id="kanbanProjectsListDropdown5" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <i className="bi-three-dots-vertical" />
                                                        </button>
                                                        <div className="dropdown-menu dropdown-menu-end" aria-labelledby="kanbanProjectsListDropdown5">
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
                                                    {/* End Dropdown */}
                                                </div>
                                            </div>
                                            <div className="row align-items-center">
                                                <div className="col-sm-auto mb-3 mb-sm-0">
                                                    {/* Avatar Group */}
                                                    <div className="avatar-group avatar-group-sm">
                                                        <span className="avatar avatar-circle">
                                                            <img className="avatar-img" src="./assets/img/160x160/img5.jpg" alt="Image Description" />
                                                        </span>
                                                        <span className="avatar avatar-soft-danger avatar-circle">
                                                            <span className="avatar-initials">P</span>
                                                        </span>
                                                        <span className="avatar avatar-circle">
                                                            <img className="avatar-img" src="./assets/img/160x160/img3.jpg" alt="Image Description" />
                                                        </span>
                                                    </div>
                                                    {/* End Avatar Group */}
                                                    <span className="d-block fs-6">3 Assignees</span>
                                                </div>
                                                {/* End Col */}
                                                <div className="col-auto mb-3 mb-sm-0">
                                                    {/* Stats */}
                                                    <div className="text-center">
                                                        <span className="d-block h4 mb-1">40</span>
                                                        <span className="d-block fs-6">Tasks</span>
                                                    </div>
                                                    {/* End Stats */}
                                                </div>
                                                {/* End Col */}
                                                <div className="col-auto mb-3 mb-sm-0">
                                                    {/* Stats */}
                                                    <div className="text-center">
                                                        <span className="d-block h4 mb-1">20</span>
                                                        <span className="d-block fs-6">Complete</span>
                                                    </div>
                                                    {/* End Stats */}
                                                </div>
                                                {/* End Col */}
                                                <div className="col-auto mb-3 mb-sm-0">
                                                    {/* Stats */}
                                                    <div className="text-center">
                                                        <span className="d-block h4 mb-1">45</span>
                                                        <span className="d-block fs-6">Completed</span>
                                                    </div>
                                                    {/* End Stats */}
                                                </div>
                                                {/* End Col */}
                                                <div className="col-sm">
                                                    {/* Progress */}
                                                    <div className="progress">
                                                        <div className="progress-bar bg-danger" role="progressbar" style={{ width: '22%' }} aria-valuenow={22} aria-valuemin={0} aria-valuemax={100} />
                                                    </div>
                                                    {/* End Progress */}
                                                </div>
                                            </div>
                                            {/* End Row */}
                                        </div>
                                    </div>
                                    {/* End Card */}
                                </div>
                                {/* Container For Input Field */}
                                <div id="createProjectListContainerInProgress" />
                                {/* Card */}
                                <a className="js-sortable-disabled js-create-field btn btn-white btn-dashed-outline" href="javascript:;">
                                    <i className="bi-plus" /> Add project
                                </a>
                                {/* End Card */}
                                {/* Add Create Project Template */}
                                <form id="createProjectListTemplateInProgress" style={{ display: 'none' }}>
                                    <div className="js-sortable-link sortablejs-custom-handle card mb-3" data-href="#">
                                        <div className="card-body">
                                            <div className="mb-4">
                                                <textarea className="form-control" placeholder="What needs to be done?" data-name="body" aria-label="What needs to be done?" defaultValue={""} />
                                            </div>
                                            <div className="d-flex justify-content-end gap-3">
                                                <a className="js-delete-field btn btn-white btn-sm" href="javascript:;">Cancel</a>
                                                <a className="btn btn-primary btn-sm" href="javascript:;">Create</a>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                {/* End Add Create Project Template */}
                            </li>
                            {/* Divider */}
                            <li>
                                <hr className="my-7" />
                            </li>
                            {/* End Divider */}
                            <li className="js-add-field" data-hs-add-field-options="{
                  &quot;template&quot;: &quot;#createProjectListTemplateReview&quot;,
                  &quot;container&quot;: &quot;#createProjectListContainerReview&quot;,
                  &quot;defaultCreated&quot;: 0
                }">
                                {/* Title */}
                                <div className="js-sortable-disabled d-flex justify-content-between align-items-center mb-3">
                                    <h6 className="text-cap mb-0">Review</h6>
                                    <a className="js-create-field btn btn-icon btn-sm btn-white" href="javascript:;" data-bs-toggle="tooltip" data-bs-placement="left" title="Add project">
                                        <i className="bi-plus" />
                                    </a>
                                </div>
                                {/* End Title */}
                                <div className="js-sortable">
                                    {/* Card */}
                                    <div className="js-sortable-link sortablejs-custom-handle card mb-3" data-href="#">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col">
                                                    <h4 className="text-wrap">Design banner for social networks</h4>
                                                </div>
                                                {/* End Col */}
                                                <div className="col-auto">
                                                    {/* Dropdown */}
                                                    <div className="dropdown">
                                                        <button type="button" className="btn btn-ghost-secondary btn-icon btn-sm card-dropdown-btn rounded-circle" id="kanbanProjectsListDropdown6" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <i className="bi-three-dots-vertical" />
                                                        </button>
                                                        <div className="dropdown-menu dropdown-menu-end" aria-labelledby="kanbanProjectsListDropdown6">
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
                                                    {/* End Dropdown */}
                                                </div>
                                            </div>
                                            <div className="row align-items-center">
                                                <div className="col-sm-auto mb-3 mb-sm-0">
                                                    {/* Avatar Group */}
                                                    <div className="avatar-group avatar-group-sm">
                                                        <span className="avatar avatar-soft-info avatar-circle">
                                                            <span className="avatar-initials">L</span>
                                                        </span>
                                                        <span className="avatar avatar-circle">
                                                            <img className="avatar-img" src="./assets/img/160x160/img9.jpg" alt="Image Description" />
                                                        </span>
                                                    </div>
                                                    {/* End Avatar Group */}
                                                    <span className="d-block fs-6">2 Assignees</span>
                                                </div>
                                                {/* End Col */}
                                                <div className="col-auto mb-3 mb-sm-0">
                                                    {/* Stats */}
                                                    <div className="text-center">
                                                        <span className="d-block h4 mb-1">7</span>
                                                        <span className="d-block fs-6">Tasks</span>
                                                    </div>
                                                    {/* End Stats */}
                                                </div>
                                                {/* End Col */}
                                                <div className="col-auto mb-3 mb-sm-0">
                                                    {/* Stats */}
                                                    <div className="text-center">
                                                        <span className="d-block h4 mb-1">7</span>
                                                        <span className="d-block fs-6">Complete</span>
                                                    </div>
                                                    {/* End Stats */}
                                                </div>
                                                {/* End Col */}
                                                <div className="col-auto mb-3 mb-sm-0">
                                                    {/* Stats */}
                                                    <div className="text-center">
                                                        <span className="d-block h4 mb-1">2</span>
                                                        <span className="d-block fs-6">Completed</span>
                                                    </div>
                                                    {/* End Stats */}
                                                </div>
                                                {/* End Col */}
                                                <div className="col-sm">
                                                    {/* Progress */}
                                                    <div className="progress">
                                                        <div className="progress-bar bg-success" role="progressbar" style={{ width: '99%' }} aria-valuenow={99} aria-valuemin={0} aria-valuemax={100} />
                                                    </div>
                                                    {/* End Progress */}
                                                </div>
                                            </div>
                                            {/* End Row */}
                                        </div>
                                    </div>
                                    {/* End Card */}
                                </div>
                                {/* Container For Input Field */}
                                <div id="createProjectListContainerReview" />
                                {/* Card */}
                                <a className="js-sortable-disabled js-create-field btn btn-white btn-dashed-outline" href="javascript:;">
                                    <i className="bi-plus" /> Add project
                                </a>
                                {/* End Card */}
                                {/* Add Create Project Template */}
                                <form id="createProjectListTemplateReview" style={{ display: 'none' }}>
                                    <div className="js-sortable-link sortablejs-custom-handle card mb-3" data-href="#">
                                        <div className="card-body">
                                            <div className="mb-4">
                                                <textarea className="form-control" placeholder="What needs to be done?" data-name="body" aria-label="What needs to be done?" defaultValue={""} />
                                            </div>
                                            <div className="d-flex justify-content-end gap-3">
                                                <a className="js-delete-field btn btn-white btn-sm" href="javascript:;">Cancel</a>
                                                <a className="btn btn-primary btn-sm" href="javascript:;">Create</a>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                {/* End Add Create Project Template */}
                            </li>
                            {/* Divider */}
                            <li>
                                <hr className="my-7" />
                            </li>
                            {/* End Divider */}
                            <li className="js-add-field" data-hs-add-field-options="{
                  &quot;template&quot;: &quot;#createProjectListTemplateDone&quot;,
                  &quot;container&quot;: &quot;#createProjectListContainerDone&quot;,
                  &quot;defaultCreated&quot;: 0
                }">
                                {/* Title */}
                                <div className="js-sortable-disabled d-flex justify-content-between align-items-center mb-3">
                                    <h6 className="text-cap mb-0">Done</h6>
                                    <a className="js-create-field btn btn-icon btn-sm btn-white" href="javascript:;" data-bs-toggle="tooltip" data-bs-placement="left" title="Add project">
                                        <i className="bi-plus" />
                                    </a>
                                </div>
                                {/* End Title */}
                                <div className="js-sortable">
                                    {/* Card */}
                                    <div className="js-sortable-link sortablejs-custom-handle card mb-3" data-href="#">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col">
                                                    <h4 className="text-wrap">Create product roadmap</h4>
                                                </div>
                                                {/* End Col */}
                                                <div className="col-auto">
                                                    {/* Dropdown */}
                                                    <div className="dropdown">
                                                        <button type="button" className="btn btn-ghost-secondary btn-icon btn-sm card-dropdown-btn rounded-circle" id="kanbanProjectsListDropdown7" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <i className="bi-three-dots-vertical" />
                                                        </button>
                                                        <div className="dropdown-menu dropdown-menu-end" aria-labelledby="kanbanProjectsListDropdown7">
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
                                                    {/* End Dropdown */}
                                                </div>
                                            </div>
                                            <div className="row align-items-center">
                                                <div className="col-sm-auto mb-3 mb-sm-0">
                                                    {/* Avatar Group */}
                                                    <div className="avatar-group avatar-group-sm">
                                                        <span className="avatar avatar-circle">
                                                            <img className="avatar-img" src="./assets/img/160x160/img5.jpg" alt="Image Description" />
                                                        </span>
                                                    </div>
                                                    {/* End Avatar Group */}
                                                    <span className="d-block fs-6">1 Assignee</span>
                                                </div>
                                                {/* End Col */}
                                                <div className="col-auto mb-3 mb-sm-0">
                                                    {/* Stats */}
                                                    <div className="text-center">
                                                        <span className="d-block h4 mb-1">1</span>
                                                        <span className="d-block fs-6">Tasks</span>
                                                    </div>
                                                    {/* End Stats */}
                                                </div>
                                                {/* End Col */}
                                                <div className="col-auto mb-3 mb-sm-0">
                                                    {/* Stats */}
                                                    <div className="text-center">
                                                        <span className="d-block h4 mb-1">1</span>
                                                        <span className="d-block fs-6">Complete</span>
                                                    </div>
                                                    {/* End Stats */}
                                                </div>
                                                {/* End Col */}
                                                <div className="col-auto mb-3 mb-sm-0">
                                                    {/* Stats */}
                                                    <div className="text-center">
                                                        <span className="d-block h4 mb-1">0</span>
                                                        <span className="d-block fs-6">Completed</span>
                                                    </div>
                                                    {/* End Stats */}
                                                </div>
                                                {/* End Col */}
                                                <div className="col-sm">
                                                    {/* Progress */}
                                                    <div className="progress">
                                                        <div className="progress-bar" role="progressbar" style={{ width: '100%' }} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
                                                    </div>
                                                    {/* End Progress */}
                                                </div>
                                            </div>
                                            {/* End Row */}
                                        </div>
                                    </div>
                                    {/* End Card */}
                                    {/* Card */}
                                    <div className="js-sortable-link sortablejs-custom-handle card mb-3" data-href="#">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col">
                                                    <h4 className="text-wrap">Mobile: notifications for subscribe pages and goals</h4>
                                                </div>
                                                {/* End Col */}
                                                <div className="col-auto">
                                                    {/* Dropdown */}
                                                    <div className="dropdown">
                                                        <button type="button" className="btn btn-ghost-secondary btn-icon btn-sm card-dropdown-btn rounded-circle" id="kanbanProjectsListDropdown8" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <i className="bi-three-dots-vertical" />
                                                        </button>
                                                        <div className="dropdown-menu dropdown-menu-end" aria-labelledby="kanbanProjectsListDropdown8">
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
                                                    {/* End Dropdown */}
                                                </div>
                                            </div>
                                            <div className="row align-items-center">
                                                <div className="col-sm-auto mb-3 mb-sm-0">
                                                    {/* Avatar Group */}
                                                    <div className="avatar-group avatar-group-sm">
                                                        <span className="avatar avatar-circle">
                                                            <img className="avatar-img" src="./assets/img/160x160/img5.jpg" alt="Image Description" />
                                                        </span>
                                                        <span className="avatar avatar-circle">
                                                            <img className="avatar-img" src="./assets/img/160x160/img7.jpg" alt="Image Description" />
                                                        </span>
                                                        <span className="avatar avatar-circle">
                                                            <img className="avatar-img" src="./assets/img/160x160/img3.jpg" alt="Image Description" />
                                                        </span>
                                                    </div>
                                                    {/* End Avatar Group */}
                                                    <span className="d-block fs-6">3 Assignee</span>
                                                </div>
                                                {/* End Col */}
                                                <div className="col-auto mb-3 mb-sm-0">
                                                    {/* Stats */}
                                                    <div className="text-center">
                                                        <span className="d-block h4 mb-1">5</span>
                                                        <span className="d-block fs-6">Tasks</span>
                                                    </div>
                                                    {/* End Stats */}
                                                </div>
                                                {/* End Col */}
                                                <div className="col-auto mb-3 mb-sm-0">
                                                    {/* Stats */}
                                                    <div className="text-center">
                                                        <span className="d-block h4 mb-1">7</span>
                                                        <span className="d-block fs-6">Complete</span>
                                                    </div>
                                                    {/* End Stats */}
                                                </div>
                                                {/* End Col */}
                                                <div className="col-auto mb-3 mb-sm-0">
                                                    {/* Stats */}
                                                    <div className="text-center">
                                                        <span className="d-block h4 mb-1">0</span>
                                                        <span className="d-block fs-6">Completed</span>
                                                    </div>
                                                    {/* End Stats */}
                                                </div>
                                                {/* End Col */}
                                                <div className="col-sm">
                                                    {/* Progress */}
                                                    <div className="progress">
                                                        <div className="progress-bar" role="progressbar" style={{ width: '100%' }} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
                                                    </div>
                                                    {/* End Progress */}
                                                </div>
                                            </div>
                                            {/* End Row */}
                                        </div>
                                    </div>
                                    {/* End Card */}
                                    {/* Card */}
                                    <div className="js-sortable-link sortablejs-custom-handle card mb-3" data-href="#">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col">
                                                    <h4 className="text-wrap">Allow commenting from the report view</h4>
                                                </div>
                                                {/* End Col */}
                                                <div className="col-auto">
                                                    {/* Dropdown */}
                                                    <div className="dropdown">
                                                        <button type="button" className="btn btn-ghost-secondary btn-icon btn-sm card-dropdown-btn rounded-circle" id="kanbanProjectsListDropdown9" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <i className="bi-three-dots-vertical" />
                                                        </button>
                                                        <div className="dropdown-menu dropdown-menu-end" aria-labelledby="kanbanProjectsListDropdown9">
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
                                                    {/* End Dropdown */}
                                                </div>
                                            </div>
                                            <div className="row align-items-center">
                                                <div className="col-sm-auto mb-3 mb-sm-0">
                                                    {/* Avatar Group */}
                                                    <div className="avatar-group avatar-group-sm">
                                                        <span className="avatar avatar-circle">
                                                            <img className="avatar-img" src="./assets/img/160x160/img9.jpg" alt="Image Description" />
                                                        </span>
                                                        <span className="avatar avatar-circle">
                                                            <img className="avatar-img" src="./assets/img/160x160/img4.jpg" alt="Image Description" />
                                                        </span>
                                                        <span className="avatar avatar-soft-info avatar-circle">
                                                            <span className="avatar-initials">V</span>
                                                        </span>
                                                    </div>
                                                    {/* End Avatar Group */}
                                                    <span className="d-block fs-6">3 Assignee</span>
                                                </div>
                                                {/* End Col */}
                                                <div className="col-auto mb-3 mb-sm-0">
                                                    {/* Stats */}
                                                    <div className="text-center">
                                                        <span className="d-block h4 mb-1">3</span>
                                                        <span className="d-block fs-6">Tasks</span>
                                                    </div>
                                                    {/* End Stats */}
                                                </div>
                                                {/* End Col */}
                                                <div className="col-auto mb-3 mb-sm-0">
                                                    {/* Stats */}
                                                    <div className="text-center">
                                                        <span className="d-block h4 mb-1">6</span>
                                                        <span className="d-block fs-6">Complete</span>
                                                    </div>
                                                    {/* End Stats */}
                                                </div>
                                                {/* End Col */}
                                                <div className="col-auto mb-3 mb-sm-0">
                                                    {/* Stats */}
                                                    <div className="text-center">
                                                        <span className="d-block h4 mb-1">0</span>
                                                        <span className="d-block fs-6">Completed</span>
                                                    </div>
                                                    {/* End Stats */}
                                                </div>
                                                {/* End Col */}
                                                <div className="col-sm">
                                                    {/* Progress */}
                                                    <div className="progress">
                                                        <div className="progress-bar" role="progressbar" style={{ width: '100%' }} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
                                                    </div>
                                                    {/* End Progress */}
                                                </div>
                                            </div>
                                            {/* End Row */}
                                        </div>
                                    </div>
                                    {/* End Card */}
                                    {/* Card */}
                                    <div className="js-sortable-link sortablejs-custom-handle card mb-3" data-href="#">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col">
                                                    <h4 className="text-wrap">Public API</h4>
                                                </div>
                                                {/* End Col */}
                                                <div className="col-auto">
                                                    {/* Dropdown */}
                                                    <div className="dropdown">
                                                        <button type="button" className="btn btn-ghost-secondary btn-icon btn-sm card-dropdown-btn rounded-circle" id="kanbanProjectsListDropdown10" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <i className="bi-three-dots-vertical" />
                                                        </button>
                                                        <div className="dropdown-menu dropdown-menu-end" aria-labelledby="kanbanProjectsListDropdown10">
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
                                                    {/* End Dropdown */}
                                                </div>
                                            </div>
                                            <div className="row align-items-center">
                                                <div className="col-sm-auto mb-3 mb-sm-0">
                                                    {/* Avatar Group */}
                                                    <div className="avatar-group avatar-group-sm">
                                                        <span className="avatar avatar-circle">
                                                            <img className="avatar-img" src="./assets/img/160x160/img4.jpg" alt="Image Description" />
                                                        </span>
                                                        <span className="avatar avatar-circle">
                                                            <img className="avatar-img" src="./assets/img/160x160/img5.jpg" alt="Image Description" />
                                                        </span>
                                                        <span className="avatar avatar-circle">
                                                            <img className="avatar-img" src="./assets/img/160x160/img6.jpg" alt="Image Description" />
                                                        </span>
                                                    </div>
                                                    {/* End Avatar Group */}
                                                    <span className="d-block fs-6">3 Assignee</span>
                                                </div>
                                                {/* End Col */}
                                                <div className="col-auto mb-3 mb-sm-0">
                                                    {/* Stats */}
                                                    <div className="text-center">
                                                        <span className="d-block h4 mb-1">75</span>
                                                        <span className="d-block fs-6">Tasks</span>
                                                    </div>
                                                    {/* End Stats */}
                                                </div>
                                                {/* End Col */}
                                                <div className="col-auto mb-3 mb-sm-0">
                                                    {/* Stats */}
                                                    <div className="text-center">
                                                        <span className="d-block h4 mb-1">4</span>
                                                        <span className="d-block fs-6">Complete</span>
                                                    </div>
                                                    {/* End Stats */}
                                                </div>
                                                {/* End Col */}
                                                <div className="col-auto mb-3 mb-sm-0">
                                                    {/* Stats */}
                                                    <div className="text-center">
                                                        <span className="d-block h4 mb-1">0</span>
                                                        <span className="d-block fs-6">Completed</span>
                                                    </div>
                                                    {/* End Stats */}
                                                </div>
                                                {/* End Col */}
                                                <div className="col-sm">
                                                    {/* Progress */}
                                                    <div className="progress">
                                                        <div className="progress-bar" role="progressbar" style={{ width: '100%' }} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
                                                    </div>
                                                    {/* End Progress */}
                                                </div>
                                            </div>
                                            {/* End Row */}
                                        </div>
                                    </div>
                                    {/* End Card */}
                                </div>
                                {/* Container For Input Field */}
                                <div id="createProjectListContainerDone" />
                                {/* Card */}
                                <a className="js-sortable-disabled js-create-field btn btn-white btn-dashed-outline" href="javascript:;">
                                    <i className="bi-plus" /> Add project
                                </a>
                                {/* End Card */}
                                {/* Add Create Project Template */}
                                <form id="createProjectListTemplateDone" style={{ display: 'none' }}>
                                    <div className="js-sortable-link sortablejs-custom-handle card mb-3" data-href="#">
                                        <div className="card-body">
                                            <div className="mb-4">
                                                <textarea className="form-control" placeholder="What needs to be done?" data-name="body" aria-label="What needs to be done?" defaultValue={""} />
                                            </div>
                                            <div className="d-flex justify-content-end gap-3">
                                                <a className="js-delete-field btn btn-white btn-sm" href="javascript:;">Cancel</a>
                                                <a className="btn btn-primary btn-sm" href="javascript:;">Create</a>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                {/* End Add Create Project Template */}
                            </li>
                        </ul>
                        {/* End Kanban List */}
                    </div>
                    {/* End Content */}
                </div>
            </div>
            <div className="modal fade" id="welcomeMessageModal" tabIndex={-1} aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        {/* Header */}
                        <div className="modal-close">
                            <button type="button" className="btn btn-ghost-secondary btn-icon btn-sm" data-bs-dismiss="modal" aria-label="Close">
                                <i className="bi-x-lg" />
                            </button>
                        </div>
                        {/* End Header */}
                        {/* Body */}
                        <div className="modal-body p-sm-5">
                            <div className="text-center">
                                <div className="w-75 w-sm-50 mx-auto mb-4">
                                    <img className="img-fluid" src="./assets/svg/illustrations/oc-collaboration.svg" alt="Image Description" data-hs-theme-appearance="default" />
                                    <img className="img-fluid" src="./assets/svg/illustrations-light/oc-collaboration.svg" alt="Image Description" data-hs-theme-appearance="dark" />
                                </div>
                                <h4 className="h1">Welcome to Front</h4>
                                <p>We're happy to see you in our community.</p>
                            </div>
                        </div>
                        {/* End Body */}
                        {/* Footer */}
                        <div className="modal-footer d-block text-center py-sm-5">
                            <small className="text-cap text-muted">Trusted by the world's best teams</small>
                            <div className="w-85 mx-auto">
                                <div className="row justify-content-between">
                                    <div className="col">
                                        <img className="img-fluid" src="./assets/svg/brands/gitlab-gray.svg" alt="Image Description" />
                                    </div>
                                    <div className="col">
                                        <img className="img-fluid" src="./assets/svg/brands/fitbit-gray.svg" alt="Image Description" />
                                    </div>
                                    <div className="col">
                                        <img className="img-fluid" src="./assets/svg/brands/flow-xo-gray.svg" alt="Image Description" />
                                    </div>
                                    <div className="col">
                                        <img className="img-fluid" src="./assets/svg/brands/layar-gray.svg" alt="Image Description" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End Footer */}
                    </div>
                </div>
            </div>
            {/* End Welcome Message Modal */}
            {/* Share with people Modal */}
            <div className="modal fade" id="shareWithPeopleModal" tabIndex={-1} aria-labelledby="shareWithPeopleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="shareWithPeopleModalLabel">Invite users</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        {/* Body */}
                        <div className="modal-body">
                            {/* Form */}
                            <div className="mb-4">
                                <div className="input-group mb-2 mb-sm-0">
                                    <input type="text" className="form-control" name="fullName" placeholder="Search name or emails" aria-label="Search name or emails" />
                                    <div className="input-group-append input-group-append-last-sm-down-none">
                                        {/* Select */}
                                        <div className="tom-select-custom tom-select-custom-end">
                                            <select className="js-select form-select tom-select-custom-form-select-invite-user" autoComplete="off" data-hs-tom-select-options="{
                            &quot;searchInDropdown&quot;: false,
                            &quot;hideSearch&quot;: true,
                            &quot;dropdownWidth&quot;: &quot;11rem&quot;
                          }">
                                                <option value="guest" selected>Guest</option>
                                                <option value="can edit">Can edit</option>
                                                <option value="can comment">Can comment</option>
                                                <option value="full access">Full access</option>
                                            </select>
                                        </div>
                                        {/* End Select */}
                                        <a className="btn btn-primary d-none d-sm-inline-block" href="javascript:;">Invite</a>
                                    </div>
                                </div>
                                <a className="btn btn-primary w-100 d-sm-none" href="javascript:;">Invite</a>
                            </div>
                            {/* End Form */}
                            {/* List Group */}
                            <ul className="list-unstyled list-py-2">
                                {/* Item */}
                                <li>
                                    <div className="d-flex">
                                        <div className="flex-shrink-0">
                                            <span className="icon icon-soft-dark icon-sm icon-circle">
                                                <i className="bi-people-fill" />
                                            </span>
                                        </div>
                                        <div className="flex-grow-1 ms-3">
                                            <div className="row align-items-center">
                                                <div className="col-sm">
                                                    <h5 className="text-body mb-0">#digitalmarketing</h5>
                                                    <span className="d-block fs-6">8 members</span>
                                                </div>
                                                {/* End Col */}
                                                <div className="col-sm-auto">
                                                    {/* Select */}
                                                    <div className="tom-select-custom tom-select-custom-sm-end">
                                                        <select className="js-select form-select form-select-borderless tom-select-custom-form-select-invite-user tom-select-form-select-ps-0" autoComplete="off" data-hs-tom-select-options="{
                                  &quot;searchInDropdown&quot;: false,
                                  &quot;hideSearch&quot;: true,
                                  &quot;dropdownWidth&quot;: &quot;11rem&quot;
                                }">
                                                            <option value="guest">Guest</option>
                                                            <option value="can edit" selected>Can edit</option>
                                                            <option value="can comment">Can comment</option>
                                                            <option value="full access">Full access</option>
                                                            <option value="remove" data-option-template="<div class=&quot;text-danger&quot;>Remove</div>">Remove</option>
                                                        </select>
                                                    </div>
                                                    {/* End Select */}
                                                </div>
                                                {/* End Col */}
                                            </div>
                                            {/* End Row */}
                                        </div>
                                    </div>
                                </li>
                                {/* End Item */}
                                {/* Item */}
                                <li>
                                    <div className="d-flex">
                                        <div className="flex-shrink-0">
                                            <div className="avatar avatar-sm avatar-circle">
                                                <img className="avatar-img" src="./assets/img/160x160/img3.jpg" alt="Image Description" />
                                            </div>
                                        </div>
                                        <div className="flex-grow-1 ms-3">
                                            <div className="row align-items-center">
                                                <div className="col-sm">
                                                    <h5 className="text-body mb-0">David Harrison</h5>
                                                    <span className="d-block fs-6">david@site.com</span>
                                                </div>
                                                {/* End Col */}
                                                <div className="col-sm-auto">
                                                    {/* Select */}
                                                    <div className="tom-select-custom tom-select-custom-sm-end">
                                                        <select className="js-select form-select form-select-borderless tom-select-custom-form-select-invite-user tom-select-form-select-ps-0" autoComplete="off" data-hs-tom-select-options="{
                                  &quot;searchInDropdown&quot;: false,
                                  &quot;hideSearch&quot;: true,
                                  &quot;dropdownWidth&quot;: &quot;11rem&quot;
                                }">
                                                            <option value="guest">Guest</option>
                                                            <option value="can edit" selected>Can edit</option>
                                                            <option value="can comment">Can comment</option>
                                                            <option value="full access">Full access</option>
                                                            <option value="remove" data-option-template="<div class=&quot;text-danger&quot;>Remove</div>">Remove</option>
                                                        </select>
                                                    </div>
                                                    {/* End Select */}
                                                </div>
                                                {/* End Col */}
                                            </div>
                                            {/* End Row */}
                                        </div>
                                    </div>
                                </li>
                                {/* End Item */}
                                {/* Item */}
                                <li>
                                    <div className="d-flex">
                                        <div className="flex-shrink-0">
                                            <div className="avatar avatar-sm avatar-circle">
                                                <img className="avatar-img" src="./assets/img/160x160/img9.jpg" alt="Image Description" />
                                            </div>
                                        </div>
                                        <div className="flex-grow-1 ms-3">
                                            <div className="row align-items-center">
                                                <div className="col-sm">
                                                    <h5 className="text-body mb-0">Ella Lauda <i className="bi-patch-check-fill text-primary" data-bs-toggle="tooltip" data-bs-placement="top" title="Top endorsed" /></h5>
                                                    <span className="d-block fs-6">Markvt@site.com</span>
                                                </div>
                                                {/* End Col */}
                                                <div className="col-sm-auto">
                                                    {/* Select */}
                                                    <div className="tom-select-custom tom-select-custom-sm-end">
                                                        <select className="js-select form-select form-select-borderless tom-select-custom-form-select-invite-user tom-select-form-select-ps-0" autoComplete="off" data-hs-tom-select-options="{
                                  &quot;searchInDropdown&quot;: false,
                                  &quot;hideSearch&quot;: true,
                                  &quot;dropdownWidth&quot;: &quot;11rem&quot;
                                }">
                                                            <option value="guest">Guest</option>
                                                            <option value="can edit" selected>Can edit</option>
                                                            <option value="can comment">Can comment</option>
                                                            <option value="full access">Full access</option>
                                                            <option value="remove" data-option-template="<div class=&quot;text-danger&quot;>Remove</div>">Remove</option>
                                                        </select>
                                                    </div>
                                                    {/* End Select */}
                                                </div>
                                                {/* End Col */}
                                            </div>
                                            {/* End Row */}
                                        </div>
                                    </div>
                                </li>
                                {/* End Item */}
                                {/* Item */}
                                <li>
                                    <div className="d-flex">
                                        <div className="flex-shrink-0">
                                            <span className="icon icon-soft-dark icon-sm icon-circle">
                                                <i className="bi-people-fill" />
                                            </span>
                                        </div>
                                        <div className="flex-grow-1 ms-3">
                                            <div className="row align-items-center">
                                                <div className="col-sm">
                                                    <h5 className="text-body mb-0">#conference</h5>
                                                    <span className="d-block fs-6">3 members</span>
                                                </div>
                                                {/* End Col */}
                                                <div className="col-sm-auto">
                                                    {/* Select */}
                                                    <div className="tom-select-custom tom-select-custom-sm-end">
                                                        <select className="js-select form-select form-select-borderless tom-select-custom-form-select-invite-user tom-select-form-select-ps-0" autoComplete="off" data-hs-tom-select-options="{
                                  &quot;searchInDropdown&quot;: false,
                                  &quot;hideSearch&quot;: true,
                                  &quot;dropdownWidth&quot;: &quot;11rem&quot;
                                }">
                                                            <option value="guest">Guest</option>
                                                            <option value="can edit" selected>Can edit</option>
                                                            <option value="can comment">Can comment</option>
                                                            <option value="full access">Full access</option>
                                                            <option value="remove" data-option-template="<div class=&quot;text-danger&quot;>Remove</div>">Remove</option>
                                                        </select>
                                                    </div>
                                                    {/* End Select */}
                                                </div>
                                                {/* End Col */}
                                            </div>
                                            {/* End Row */}
                                        </div>
                                    </div>
                                </li>
                                {/* End Item */}
                            </ul>
                            {/* End List Group */}
                            {/* Form Switch */}
                            <label className="row form-check form-switch" htmlFor="addTeamPreferencesNewProjectSwitch1">
                                <span className="col-8 col-sm-9 ms-0">
                                    <i className="bi-bell text-primary me-2" />
                                    <span className="text-dark">Inform all project members</span>
                                </span>
                                <span className="col-4 col-sm-3 text-end">
                                    <input type="checkbox" className="form-check-input" id="addTeamPreferencesNewProjectSwitch1" defaultChecked />
                                </span>
                            </label>
                            {/* End Form Switch */}
                        </div>
                        {/* End Body */}
                        {/* Footer */}
                        <div className="modal-footer">
                            <div className="row align-items-center flex-grow-1 mx-n2">
                                <div className="col-sm-9 mb-2 mb-sm-0">
                                    <input type="hidden" id="publicShareLinkClipboard" defaultValue="https://themes.getbootstrap.com/product/front-multipurpose-responsive-template/" />
                                    <p className="modal-footer-text">The public share <a className="link" href="#">link settings</a>
                                        <i className="bi-question-circle" data-bs-toggle="tooltip" data-bs-placement="top" title="The public share link allows people to view the project without giving access to full collaboration features." />
                                    </p>
                                </div>
                                {/* End Col */}
                                <div className="col-sm-3 text-sm-end">
                                    <a className="js-clipboard btn btn-white btn-sm text-nowrap" href="javascript:;" data-bs-toggle="tooltip" data-bs-placement="top" title="Copy to clipboard!" data-hs-clipboard-options="{
                  &quot;type&quot;: &quot;tooltip&quot;,
                  &quot;successText&quot;: &quot;Copied!&quot;,
                  &quot;contentTarget&quot;: &quot;#publicShareLinkClipboard&quot;,
                  &quot;container&quot;: &quot;#shareWithPeopleModal&quot;
                 }">
                                        <i className="bi-link me-1" /> Copy link</a>
                                </div>
                                {/* End Col */}
                            </div>
                            {/* End Row */}
                        </div>
                        {/* End Footer */}
                    </div>
                </div>
            </div>
        </>
    )
}

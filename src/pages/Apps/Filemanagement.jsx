import React from 'react'

export default function Filemanagement() {
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
                                    <li className="breadcrumb-item"><a className="breadcrumb-link" href="javascript:;">Project</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">File manager</li>
                                </ol>
                            </nav>
                            <h1 className="page-header-title">Files</h1>
                        </div>
                        {/* End Col */}
                        <div className="col-sm-auto" aria-label="Button group">
                            {/* Button Group */}
                            <div className="btn-group" role="group">
                                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#uploadFilesModal">
                                    <i className="bi-cloud-arrow-up-fill me-1" /> Upload
                                </button>
                                <div className="btn-group">
                                    <button type="button" className="btn btn-primary dropdown-toggle" id="uploadGroupDropdown" data-bs-toggle="dropdown" aria-expanded="false" />
                                    <div className="dropdown-menu dropdown-menu-end" aria-labelledby="uploadGroupDropdown">
                                        <a className="dropdown-item" href="#">
                                            <i className="bi-folder-plus dropdown-item-icon" /> New folder
                                        </a>
                                        <a className="dropdown-item" href="#">
                                            <i className="bi-folder-symlink dropdown-item-icon" /> New shared folder
                                        </a>
                                        <div className="dropdown-divider" />
                                        <a className="dropdown-item" href="javascript:;" data-bs-toggle="modal" data-bs-target="#uploadFilesModal">
                                            <i className="bi-file-earmark-arrow-up dropdown-item-icon" /> Upload files
                                        </a>
                                        <a className="dropdown-item" href="javascript:;" data-bs-toggle="modal" data-bs-target="#uploadFilesModal">
                                            <i className="bi-upload dropdown-item-icon" /> Upload folder
                                        </a>
                                    </div>
                                </div>
                            </div>
                            {/* End Button Group */}
                        </div>
                        {/* End Col */}
                    </div>
                    {/* End Row */}
                </div>
                {/* End Page Header */}
                <h2 className="h4 mb-3">Pinned access <i className="bi-question-circle text-muted" data-bs-toggle="tooltip" data-bs-placement="right" title="Pinned access to files you've been working on." /></h2>
                {/* Pinned Access */}
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 mb-5">
                    <div className="col mb-3 mb-lg-5">
                        {/* Card */}
                        <div className="card card-sm card-hover-shadow h-100 text-center">
                            {/* Form Check */}
                            <div className="form-check form-check-switch card-pinned-top-start zi-2">
                                <input className="form-check-input" type="checkbox" defaultValue id="starredCheckbox1" defaultChecked />
                                <label className="form-check-label btn-icon btn-xs rounded-circle" htmlFor="starredCheckbox1">
                                    <span className="form-check-default" data-bs-toggle="tooltip" data-bs-placement="top" title="Pin">
                                        <i className="bi-star" />
                                    </span>
                                    <span className="form-check-active" data-bs-toggle="tooltip" data-bs-placement="top" title="Pinned">
                                        <i className="bi-star-fill" />
                                    </span>
                                </label>
                            </div>
                            {/* End Form Check */}
                            {/* Dropdown */}
                            <div className="dropdown card-pinned-top-end">
                                <button type="button" className="btn btn-ghost-secondary btn-icon btn-sm card-dropdown-btn rounded-circle" id="pinnedAccessDropdown1" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="bi-three-dots-vertical" />
                                </button>
                                <div className="dropdown-menu dropdown-menu-end" aria-labelledby="pinnedAccessDropdown1" style={{ minWidth: '13rem' }}>
                                    <span className="dropdown-header">Settings</span>
                                    <a className="dropdown-item" href="#">
                                        <i className="bi-share dropdown-item-icon" /> Share folder
                                    </a>
                                    <a className="dropdown-item" href="#">
                                        <i className="bi-folder-plus dropdown-item-icon" /> Move to
                                    </a>
                                    <a className="dropdown-item" href="#">
                                        <i className="bi-star dropdown-item-icon" /> Add to stared
                                    </a>
                                    <a className="dropdown-item" href="#">
                                        <i className="bi-pencil dropdown-item-icon" /> Rename
                                    </a>
                                    <a className="dropdown-item" href="#">
                                        <i className="bi-download dropdown-item-icon" /> Download
                                    </a>
                                    <div className="dropdown-divider" />
                                    <a className="dropdown-item" href="#">
                                        <i className="bi-chat-left-dots dropdown-item-icon" /> Report
                                    </a>
                                    <a className="dropdown-item" href="#">
                                        <i className="bi-trash dropdown-item-icon" /> Delete
                                    </a>
                                </div>
                            </div>
                            {/* End Dropdown */}
                            <img className="card-img-top" src="./assets/img/600x200/img2.jpg" alt="Image Description" />
                            <div className="card-footer border-0">
                                <span className="d-block fs-6 text-muted mb-1">1 files</span>
                                <h5>Screenshots from Figma</h5>
                            </div>
                            <a className="stretched-link" href="#" />
                        </div>
                        {/* End Card */}
                    </div>
                    {/* End Col */}
                    <div className="col mb-3 mb-lg-5">
                        {/* Card */}
                        <div className="card card-sm card-hover-shadow h-100 text-center">
                            {/* Form Check */}
                            <div className="form-check form-check-switch card-pinned-top-start zi-2">
                                <input className="form-check-input" type="checkbox" defaultValue id="starredCheckbox2" defaultChecked />
                                <label className="form-check-label btn-icon btn-xs rounded-circle" htmlFor="starredCheckbox2">
                                    <span className="form-check-default" data-bs-toggle="tooltip" data-bs-placement="top" title="Pin">
                                        <i className="bi-star" />
                                    </span>
                                    <span className="form-check-active" data-bs-toggle="tooltip" data-bs-placement="top" title="Pinned">
                                        <i className="bi-star-fill" />
                                    </span>
                                </label>
                            </div>
                            {/* End Form Check */}
                            {/* Dropdown */}
                            <div className="dropdown card-pinned-top-end">
                                <button type="button" className="btn btn-ghost-secondary btn-icon btn-sm card-dropdown-btn rounded-circle" id="pinnedAccessDropdown2" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="bi-three-dots-vertical" />
                                </button>
                                <div className="dropdown-menu dropdown-menu-end" aria-labelledby="pinnedAccessDropdown2" style={{ minWidth: '13rem' }}>
                                    <span className="dropdown-header">Settings</span>
                                    <a className="dropdown-item" href="#">
                                        <i className="bi-share dropdown-item-icon" /> Share folder
                                    </a>
                                    <a className="dropdown-item" href="#">
                                        <i className="bi-folder-plus dropdown-item-icon" /> Move to
                                    </a>
                                    <a className="dropdown-item" href="#">
                                        <i className="bi-star dropdown-item-icon" /> Add to stared
                                    </a>
                                    <a className="dropdown-item" href="#">
                                        <i className="bi-pencil dropdown-item-icon" /> Rename
                                    </a>
                                    <a className="dropdown-item" href="#">
                                        <i className="bi-download dropdown-item-icon" /> Download
                                    </a>
                                    <div className="dropdown-divider" />
                                    <a className="dropdown-item" href="#">
                                        <i className="bi-chat-left-dots dropdown-item-icon" /> Report
                                    </a>
                                    <a className="dropdown-item" href="#">
                                        <i className="bi-trash dropdown-item-icon" /> Delete
                                    </a>
                                </div>
                            </div>
                            {/* End Dropdown */}
                            <div className="card-body">
                                <img className="avatar avatar-4x3" src="./assets/svg/brands/google-sheets-icon.svg" alt="Image Description" />
                            </div>
                            <div className="card-footer border-0">
                                <span className="d-block fs-6 text-muted mb-1">0 files</span>
                                <h5>Early audit sheets for last year</h5>
                            </div>
                            <a className="stretched-link" href="#" />
                        </div>
                        {/* End Card */}
                    </div>
                    {/* End Col */}
                    <div className="col mb-3 mb-lg-5">
                        {/* Card */}
                        <div className="card card-sm card-hover-shadow h-100 text-center">
                            {/* Form Check */}
                            <div className="form-check form-check-switch card-pinned-top-start zi-2">
                                <input className="form-check-input" type="checkbox" defaultValue id="starredCheckbox3" defaultChecked />
                                <label className="form-check-label btn-icon btn-xs rounded-circle" htmlFor="starredCheckbox3">
                                    <span className="form-check-default" data-bs-toggle="tooltip" data-bs-placement="top" title="Pin">
                                        <i className="bi-star" />
                                    </span>
                                    <span className="form-check-active" data-bs-toggle="tooltip" data-bs-placement="top" title="Pinned">
                                        <i className="bi-star-fill" />
                                    </span>
                                </label>
                            </div>
                            {/* End Form Check */}
                            {/* Dropdown */}
                            <div className="dropdown card-pinned-top-end">
                                <button type="button" className="btn btn-ghost-secondary btn-icon btn-sm card-dropdown-btn rounded-circle" id="pinnedAccessDropdown3" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="bi-three-dots-vertical" />
                                </button>
                                <div className="dropdown-menu dropdown-menu-end" aria-labelledby="pinnedAccessDropdown3" style={{ minWidth: '13rem' }}>
                                    <span className="dropdown-header">Settings</span>
                                    <a className="dropdown-item" href="#">
                                        <i className="bi-share dropdown-item-icon" /> Share folder
                                    </a>
                                    <a className="dropdown-item" href="#">
                                        <i className="bi-folder-plus dropdown-item-icon" /> Move to
                                    </a>
                                    <a className="dropdown-item" href="#">
                                        <i className="bi-star dropdown-item-icon" /> Add to stared
                                    </a>
                                    <a className="dropdown-item" href="#">
                                        <i className="bi-pencil dropdown-item-icon" /> Rename
                                    </a>
                                    <a className="dropdown-item" href="#">
                                        <i className="bi-download dropdown-item-icon" /> Download
                                    </a>
                                    <div className="dropdown-divider" />
                                    <a className="dropdown-item" href="#">
                                        <i className="bi-chat-left-dots dropdown-item-icon" /> Report
                                    </a>
                                    <a className="dropdown-item" href="#">
                                        <i className="bi-trash dropdown-item-icon" /> Delete
                                    </a>
                                </div>
                            </div>
                            {/* End Dropdown */}
                            <div className="card-body">
                                <img className="avatar avatar-4x3" src="./assets/svg/components/placeholder-img-format.svg" alt="Image Description" />
                            </div>
                            <div className="card-footer border-0">
                                <span className="d-block fs-6 text-muted mb-1">27 files</span>
                                <h5>Article images</h5>
                            </div>
                            <a className="stretched-link" href="#" />
                        </div>
                        {/* End Card */}
                    </div>
                    {/* End Col */}
                    <div className="col mb-3 mb-lg-5">
                        {/* Card */}
                        <div className="card card-sm card-hover-shadow h-100 text-center">
                            {/* Form Check */}
                            <div className="form-check form-check-switch card-pinned-top-start zi-2">
                                <input className="form-check-input" type="checkbox" defaultValue id="starredCheckbox4" defaultChecked />
                                <label className="form-check-label btn-icon btn-xs rounded-circle" htmlFor="starredCheckbox4">
                                    <span className="form-check-default" data-bs-toggle="tooltip" data-bs-placement="top" title="Pin">
                                        <i className="bi-star" />
                                    </span>
                                    <span className="form-check-active" data-bs-toggle="tooltip" data-bs-placement="top" title="Pinned">
                                        <i className="bi-star-fill" />
                                    </span>
                                </label>
                            </div>
                            {/* End Form Check */}
                            {/* Dropdown */}
                            <div className="dropdown card-pinned-top-end">
                                <button type="button" className="btn btn-ghost-secondary btn-icon btn-sm card-dropdown-btn rounded-circle" id="pinnedAccessDropdown4" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="bi-three-dots-vertical" />
                                </button>
                                <div className="dropdown-menu dropdown-menu-end" aria-labelledby="pinnedAccessDropdown4" style={{ minWidth: '13rem' }}>
                                    <span className="dropdown-header">Settings</span>
                                    <a className="dropdown-item" href="#">
                                        <i className="bi-share dropdown-item-icon" /> Share folder
                                    </a>
                                    <a className="dropdown-item" href="#">
                                        <i className="bi-folder-plus dropdown-item-icon" /> Move to
                                    </a>
                                    <a className="dropdown-item" href="#">
                                        <i className="bi-star dropdown-item-icon" /> Add to stared
                                    </a>
                                    <a className="dropdown-item" href="#">
                                        <i className="bi-pencil dropdown-item-icon" /> Rename
                                    </a>
                                    <a className="dropdown-item" href="#">
                                        <i className="bi-download dropdown-item-icon" /> Download
                                    </a>
                                    <div className="dropdown-divider" />
                                    <a className="dropdown-item" href="#">
                                        <i className="bi-chat-left-dots dropdown-item-icon" /> Report
                                    </a>
                                    <a className="dropdown-item" href="#">
                                        <i className="bi-trash dropdown-item-icon" /> Delete
                                    </a>
                                </div>
                            </div>
                            {/* End Dropdown */}
                            <div className="card-body">
                                <img className="avatar avatar-4x3" src="./assets/svg/brands/google-slides-icon.svg" alt="Image Description" />
                            </div>
                            <div className="card-footer border-0">
                                <span className="d-block fs-6 text-muted mb-1">8 files</span>
                                <h5>Solving product design exercises</h5>
                            </div>
                            <a className="stretched-link" href="#" />
                        </div>
                        {/* End Card */}
                    </div>
                    {/* End Col */}
                </div>
                {/* End Pinned Access */}
                <h2 className="h4 mb-3">Folders</h2>
                {/* Folders */}
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 mb-5">
                    <div className="col mb-3 mb-lg-5">
                        {/* Card */}
                        <div className="card card-sm card-hover-shadow h-100">
                            <div className="card-body">
                                <div className="d-flex align-items-center">
                                    <i className="bi-folder-plus fs-2 text-body me-2" />
                                    <h5 className="text-truncate ms-2 mb-0">Premium images</h5>
                                    {/* Dropdown */}
                                    <div className="dropdown ms-auto">
                                        <button type="button" className="btn btn-ghost-secondary btn-icon btn-sm card-dropdown-btn rounded-circle" id="folderDropdown1" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i className="bi-three-dots-vertical" />
                                        </button>
                                        <div className="dropdown-menu dropdown-menu-end" aria-labelledby="folderDropdown1" style={{ minWidth: '13rem' }}>
                                            <span className="dropdown-header">Settings</span>
                                            <a className="dropdown-item" href="#">
                                                <i className="bi-share dropdown-item-icon" /> Share folder
                                            </a>
                                            <a className="dropdown-item" href="#">
                                                <i className="bi-folder-plus dropdown-item-icon" /> Move to
                                            </a>
                                            <a className="dropdown-item" href="#">
                                                <i className="bi-star dropdown-item-icon" /> Add to stared
                                            </a>
                                            <a className="dropdown-item" href="#">
                                                <i className="bi-pencil dropdown-item-icon" /> Rename
                                            </a>
                                            <a className="dropdown-item" href="#">
                                                <i className="bi-download dropdown-item-icon" /> Download
                                            </a>
                                            <div className="dropdown-divider" />
                                            <a className="dropdown-item" href="#">
                                                <i className="bi-chat-left-dots dropdown-item-icon" /> Report
                                            </a>
                                            <a className="dropdown-item" href="#">
                                                <i className="bi-trash dropdown-item-icon" /> Delete
                                            </a>
                                        </div>
                                    </div>
                                    {/* End Dropdown */}
                                </div>
                            </div>
                            <a className="stretched-link" href="#" />
                        </div>
                        {/* End Card */}
                    </div>
                    {/* End Col */}
                    <div className="col mb-3 mb-lg-5">
                        {/* Card */}
                        <div className="card card-sm card-hover-shadow h-100">
                            <div className="card-body">
                                <div className="d-flex align-items-center">
                                    <i className="bi-folder fs-2 text-body me-2" />
                                    <h5 className="text-truncate ms-2 mb-0">Front materials</h5>
                                    {/* Dropdown */}
                                    <div className="dropdown ms-auto">
                                        <button type="button" className="btn btn-ghost-secondary btn-icon btn-sm card-dropdown-btn rounded-circle" id="folderDropdown2" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i className="bi-three-dots-vertical" />
                                        </button>
                                        <div className="dropdown-menu dropdown-menu-end" aria-labelledby="folderDropdown2" style={{ minWidth: '13rem' }}>
                                            <span className="dropdown-header">Settings</span>
                                            <a className="dropdown-item" href="#">
                                                <i className="bi-share dropdown-item-icon" /> Share folder
                                            </a>
                                            <a className="dropdown-item" href="#">
                                                <i className="bi-folder-plus dropdown-item-icon" /> Move to
                                            </a>
                                            <a className="dropdown-item" href="#">
                                                <i className="bi-star dropdown-item-icon" /> Add to stared
                                            </a>
                                            <a className="dropdown-item" href="#">
                                                <i className="bi-pencil dropdown-item-icon" /> Rename
                                            </a>
                                            <a className="dropdown-item" href="#">
                                                <i className="bi-download dropdown-item-icon" /> Download
                                            </a>
                                            <div className="dropdown-divider" />
                                            <a className="dropdown-item" href="#">
                                                <i className="bi-chat-left-dots dropdown-item-icon" /> Report
                                            </a>
                                            <a className="dropdown-item" href="#">
                                                <i className="bi-trash dropdown-item-icon" /> Delete
                                            </a>
                                        </div>
                                    </div>
                                    {/* End Dropdown */}
                                </div>
                            </div>
                            <a className="stretched-link" href="#" />
                        </div>
                        {/* End Card */}
                    </div>
                    {/* End Col */}
                    <div className="col mb-3 mb-lg-5">
                        {/* Card */}
                        <div className="card card-sm card-hover-shadow h-100">
                            <div className="card-body">
                                <div className="d-flex align-items-center">
                                    <i className="bi-folder fs-2 text-body me-2" />
                                    <h5 className="text-truncate ms-2 mb-0">Illustrations</h5>
                                    {/* Dropdown */}
                                    <div className="dropdown ms-auto">
                                        <button type="button" className="btn btn-ghost-secondary btn-icon btn-sm card-dropdown-btn rounded-circle" id="folderDropdown3" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i className="bi-three-dots-vertical" />
                                        </button>
                                        <div className="dropdown-menu dropdown-menu-end" aria-labelledby="folderDropdown3" style={{ minWidth: '13rem' }}>
                                            <span className="dropdown-header">Settings</span>
                                            <a className="dropdown-item" href="#">
                                                <i className="bi-share dropdown-item-icon" /> Share folder
                                            </a>
                                            <a className="dropdown-item" href="#">
                                                <i className="bi-folder-plus dropdown-item-icon" /> Move to
                                            </a>
                                            <a className="dropdown-item" href="#">
                                                <i className="bi-star dropdown-item-icon" /> Add to stared
                                            </a>
                                            <a className="dropdown-item" href="#">
                                                <i className="bi-pencil dropdown-item-icon" /> Rename
                                            </a>
                                            <a className="dropdown-item" href="#">
                                                <i className="bi-download dropdown-item-icon" /> Download
                                            </a>
                                            <div className="dropdown-divider" />
                                            <a className="dropdown-item" href="#">
                                                <i className="bi-chat-left-dots dropdown-item-icon" /> Report
                                            </a>
                                            <a className="dropdown-item" href="#">
                                                <i className="bi-trash dropdown-item-icon" /> Delete
                                            </a>
                                        </div>
                                    </div>
                                    {/* End Dropdown */}
                                </div>
                            </div>
                            <a className="stretched-link" href="#" />
                        </div>
                        {/* End Card */}
                    </div>
                    {/* End Col */}
                </div>
                {/* End Folders */}
                {/* Header */}
                <div className="row align-items-center mb-2">
                    <div className="col">
                        <h2 className="h4 mb-0">Files</h2>
                    </div>
                    <div className="col-auto">
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
                </div>
                {/* End Header */}
                {/* Tab Content */}
                <div className="tab-content" id="connectionsTabContent">
                    <div className="tab-pane fade show active" id="grid" role="tabpanel" aria-labelledby="grid-tab">
                        {/* Folders */}
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
                            <div className="col mb-3 mb-lg-5">
                                {/* Card */}
                                <div className="card card-sm card-hover-shadow card-header-borderless h-100 text-center">
                                    <div className="card-header card-header-content-between border-0">
                                        <span className="small">25kb</span>
                                        {/* Dropdown */}
                                        <div className="dropdown">
                                            <button type="button" className="btn btn-ghost-secondary btn-icon btn-sm card-dropdown-btn rounded-circle" id="filesGridDropdown1" data-bs-toggle="dropdown" aria-expanded="false">
                                                <i className="bi-three-dots-vertical" />
                                            </button>
                                            <div className="dropdown-menu dropdown-menu-end" aria-labelledby="filesGridDropdown1" style={{ minWidth: '13rem' }}>
                                                <span className="dropdown-header">Settings</span>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-share dropdown-item-icon" /> Share file
                                                </a>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-folder-plus dropdown-item-icon" /> Move to
                                                </a>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-star dropdown-item-icon" /> Add to stared
                                                </a>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-pencil dropdown-item-icon" /> Rename
                                                </a>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-download dropdown-item-icon" /> Download
                                                </a>
                                                <div className="dropdown-divider" />
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-chat-left-dots dropdown-item-icon" /> Report
                                                </a>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-trash dropdown-item-icon" /> Delete
                                                </a>
                                            </div>
                                        </div>
                                        {/* End Dropdown */}
                                    </div>
                                    <div className="card-body">
                                        <img className="avatar avatar-4x3" src="./assets/svg/brands/google-docs-icon.svg" alt="Image Description" />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">WordPress contract terms</h5>
                                        <p className="small">Updated 50 min ago</p>
                                    </div>
                                    <a className="stretched-link" href="#" />
                                </div>
                                {/* End Card */}
                            </div>
                            {/* End Col */}
                            <div className="col mb-3 mb-lg-5">
                                {/* Card */}
                                <div className="card card-sm card-hover-shadow card-header-borderless h-100 text-center">
                                    <div className="card-header card-header-content-between border-0">
                                        <span className="small">1mb</span>
                                        {/* Dropdown */}
                                        <div className="dropdown">
                                            <button type="button" className="btn btn-ghost-secondary btn-icon btn-sm card-dropdown-btn rounded-circle" id="filesGridDropdown2" data-bs-toggle="dropdown" aria-expanded="false">
                                                <i className="bi-three-dots-vertical" />
                                            </button>
                                            <div className="dropdown-menu dropdown-menu-end" aria-labelledby="filesGridDropdown2" style={{ minWidth: '13rem' }}>
                                                <span className="dropdown-header">Settings</span>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-share dropdown-item-icon" /> Share file
                                                </a>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-folder-plus dropdown-item-icon" /> Move to
                                                </a>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-star dropdown-item-icon" /> Add to stared
                                                </a>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-pencil dropdown-item-icon" /> Rename
                                                </a>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-download dropdown-item-icon" /> Download
                                                </a>
                                                <div className="dropdown-divider" />
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-chat-left-dots dropdown-item-icon" /> Report
                                                </a>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-trash dropdown-item-icon" /> Delete
                                                </a>
                                            </div>
                                        </div>
                                        {/* End Dropdown */}
                                    </div>
                                    <div className="card-body">
                                        <img className="avatar avatar-4x3" src="./assets/svg/brands/pdf-icon.svg" alt="Image Description" />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">Dashboard layout flow</h5>
                                        <p className="small">Updated 1 hour ago</p>
                                    </div>
                                    <a className="stretched-link" href="#" />
                                </div>
                                {/* End Card */}
                            </div>
                            {/* End Col */}
                            <div className="col mb-3 mb-lg-5">
                                {/* Card */}
                                <div className="card card-sm card-hover-shadow card-header-borderless h-100 text-center">
                                    <div className="card-header card-header-content-between border-0">
                                        <span className="small">3mb</span>
                                        {/* Dropdown */}
                                        <div className="dropdown">
                                            <button type="button" className="btn btn-ghost-secondary btn-icon btn-sm card-dropdown-btn rounded-circle" id="filesGridDropdown3" data-bs-toggle="dropdown" aria-expanded="false">
                                                <i className="bi-three-dots-vertical" />
                                            </button>
                                            <div className="dropdown-menu dropdown-menu-end" aria-labelledby="filesGridDropdown3" style={{ minWidth: '13rem' }}>
                                                <span className="dropdown-header">Settings</span>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-share dropdown-item-icon" /> Share file
                                                </a>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-folder-plus dropdown-item-icon" /> Move to
                                                </a>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-star dropdown-item-icon" /> Add to stared
                                                </a>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-pencil dropdown-item-icon" /> Rename
                                                </a>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-download dropdown-item-icon" /> Download
                                                </a>
                                                <div className="dropdown-divider" />
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-chat-left-dots dropdown-item-icon" /> Report
                                                </a>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-trash dropdown-item-icon" /> Delete
                                                </a>
                                            </div>
                                        </div>
                                        {/* End Dropdown */}
                                    </div>
                                    <div className="card-body">
                                        <img className="avatar avatar-4x3" src="./assets/svg/brands/google-slides-icon.svg" alt="Image Description" />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">WordPress theme presentation</h5>
                                        <p className="small">Updated 5 hours ago</p>
                                    </div>
                                    <a className="stretched-link" href="#" />
                                </div>
                                {/* End Card */}
                            </div>
                            {/* End Col */}
                            <div className="col mb-3 mb-lg-5">
                                {/* Card */}
                                <div className="card card-sm card-hover-shadow card-header-borderless h-100 text-center">
                                    <div className="card-header card-header-content-between border-0">
                                        <span className="small">1mb</span>
                                        {/* Dropdown */}
                                        <div className="dropdown">
                                            <button type="button" className="btn btn-ghost-secondary btn-icon btn-sm card-dropdown-btn rounded-circle" id="filesGridDropdown4" data-bs-toggle="dropdown" aria-expanded="false">
                                                <i className="bi-three-dots-vertical" />
                                            </button>
                                            <div className="dropdown-menu dropdown-menu-end" aria-labelledby="filesGridDropdown4" style={{ minWidth: '13rem' }}>
                                                <span className="dropdown-header">Settings</span>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-share dropdown-item-icon" /> Share file
                                                </a>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-folder-plus dropdown-item-icon" /> Move to
                                                </a>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-star dropdown-item-icon" /> Add to stared
                                                </a>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-pencil dropdown-item-icon" /> Rename
                                                </a>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-download dropdown-item-icon" /> Download
                                                </a>
                                                <div className="dropdown-divider" />
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-chat-left-dots dropdown-item-icon" /> Report
                                                </a>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-trash dropdown-item-icon" /> Delete
                                                </a>
                                            </div>
                                        </div>
                                        {/* End Dropdown */}
                                    </div>
                                    <div className="card-body">
                                        <img className="avatar avatar-4x3" src="./assets/svg/brands/google-docs-icon.svg" alt="Image Description" />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">Untitled</h5>
                                        <p className="small">Updated 5 hours ago</p>
                                    </div>
                                    <a className="stretched-link" href="#" />
                                </div>
                                {/* End Card */}
                            </div>
                            {/* End Col */}
                            <div className="col mb-3 mb-lg-5">
                                {/* Card */}
                                <div className="card card-sm card-hover-shadow card-header-borderless h-100 text-center">
                                    <div className="card-header card-header-content-between border-0">
                                        <span className="small">3mb</span>
                                        {/* Dropdown */}
                                        <div className="dropdown">
                                            <button type="button" className="btn btn-ghost-secondary btn-icon btn-sm card-dropdown-btn rounded-circle" id="filesGridDropdown5" data-bs-toggle="dropdown" aria-expanded="false">
                                                <i className="bi-three-dots-vertical" />
                                            </button>
                                            <div className="dropdown-menu dropdown-menu-end" aria-labelledby="filesGridDropdown5" style={{ minWidth: '13rem' }}>
                                                <span className="dropdown-header">Settings</span>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-share dropdown-item-icon" /> Share file
                                                </a>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-folder-plus dropdown-item-icon" /> Move to
                                                </a>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-star dropdown-item-icon" /> Add to stared
                                                </a>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-pencil dropdown-item-icon" /> Rename
                                                </a>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-download dropdown-item-icon" /> Download
                                                </a>
                                                <div className="dropdown-divider" />
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-chat-left-dots dropdown-item-icon" /> Report
                                                </a>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-trash dropdown-item-icon" /> Delete
                                                </a>
                                            </div>
                                        </div>
                                        {/* End Dropdown */}
                                    </div>
                                    <div className="card-body">
                                        <img className="avatar avatar-4x3" src="./assets/svg/brands/google-sheets-icon.svg" alt="Image Description" />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">Hot startups 2019 - Report</h5>
                                        <p className="small">Updated 3 weeks ago</p>
                                    </div>
                                    <a className="stretched-link" href="#" />
                                </div>
                                {/* End Card */}
                            </div>
                            {/* End Col */}
                            <div className="col mb-3 mb-lg-5">
                                {/* Card */}
                                <div className="card card-sm card-hover-shadow card-header-borderless h-100 text-center">
                                    <div className="card-header card-header-content-between border-0">
                                        <span className="small">2mb</span>
                                        {/* Dropdown */}
                                        <div className="dropdown">
                                            <button type="button" className="btn btn-ghost-secondary btn-icon btn-sm card-dropdown-btn rounded-circle" id="filesGridDropdown6" data-bs-toggle="dropdown" aria-expanded="false">
                                                <i className="bi-three-dots-vertical" />
                                            </button>
                                            <div className="dropdown-menu dropdown-menu-end" aria-labelledby="filesGridDropdown6" style={{ minWidth: '13rem' }}>
                                                <span className="dropdown-header">Settings</span>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-share dropdown-item-icon" /> Share file
                                                </a>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-folder-plus dropdown-item-icon" /> Move to
                                                </a>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-star dropdown-item-icon" /> Add to stared
                                                </a>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-pencil dropdown-item-icon" /> Rename
                                                </a>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-download dropdown-item-icon" /> Download
                                                </a>
                                                <div className="dropdown-divider" />
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-chat-left-dots dropdown-item-icon" /> Report
                                                </a>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-trash dropdown-item-icon" /> Delete
                                                </a>
                                            </div>
                                        </div>
                                        {/* End Dropdown */}
                                    </div>
                                    <div className="card-body">
                                        <img className="avatar avatar-4x3" src="./assets/svg/brands/google-docs-icon.svg" alt="Image Description" />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">Marketing strategy</h5>
                                        <p className="small">Updated 2 weeks ago</p>
                                    </div>
                                    <a className="stretched-link" href="#" />
                                </div>
                                {/* End Card */}
                            </div>
                            {/* End Col */}
                            <div className="col mb-3 mb-lg-5">
                                {/* Card */}
                                <div className="card card-sm card-hover-shadow card-header-borderless h-100 text-center">
                                    <div className="card-header card-header-content-between border-0">
                                        <span className="small">15mb</span>
                                        {/* Dropdown */}
                                        <div className="dropdown">
                                            <button type="button" className="btn btn-ghost-secondary btn-icon btn-sm card-dropdown-btn rounded-circle" id="filesGridDropdown7" data-bs-toggle="dropdown" aria-expanded="false">
                                                <i className="bi-three-dots-vertical" />
                                            </button>
                                            <div className="dropdown-menu dropdown-menu-end" aria-labelledby="filesGridDropdown7" style={{ minWidth: '13rem' }}>
                                                <span className="dropdown-header">Settings</span>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-share dropdown-item-icon" /> Share file
                                                </a>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-folder-plus dropdown-item-icon" /> Move to
                                                </a>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-star dropdown-item-icon" /> Add to stared
                                                </a>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-pencil dropdown-item-icon" /> Rename
                                                </a>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-download dropdown-item-icon" /> Download
                                                </a>
                                                <div className="dropdown-divider" />
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-chat-left-dots dropdown-item-icon" /> Report
                                                </a>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-trash dropdown-item-icon" /> Delete
                                                </a>
                                            </div>
                                        </div>
                                        {/* End Dropdown */}
                                    </div>
                                    <div className="card-body">
                                        <img className="avatar avatar-4x3" src="./assets/svg/components/placeholder-img-format.svg" alt="Image Description" />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">Past-experiences.jpg</h5>
                                        <p className="small">Updated 1 month ago</p>
                                    </div>
                                    <a className="stretched-link" href="#" />
                                </div>
                                {/* End Card */}
                            </div>
                            {/* End Col */}
                            <div className="col mb-3 mb-lg-5">
                                {/* Card */}
                                <div className="card card-sm card-hover-shadow card-header-borderless h-100 text-center">
                                    <div className="card-header card-header-content-between border-0">
                                        <span className="small">9mb</span>
                                        {/* Dropdown */}
                                        <div className="dropdown">
                                            <button type="button" className="btn btn-ghost-secondary btn-icon btn-sm card-dropdown-btn rounded-circle" id="filesGridDropdown8" data-bs-toggle="dropdown" aria-expanded="false">
                                                <i className="bi-three-dots-vertical" />
                                            </button>
                                            <div className="dropdown-menu dropdown-menu-end" aria-labelledby="filesGridDropdown8" style={{ minWidth: '13rem' }}>
                                                <span className="dropdown-header">Settings</span>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-share dropdown-item-icon" /> Share file
                                                </a>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-folder-plus dropdown-item-icon" /> Move to
                                                </a>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-star dropdown-item-icon" /> Add to stared
                                                </a>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-pencil dropdown-item-icon" /> Rename
                                                </a>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-download dropdown-item-icon" /> Download
                                                </a>
                                                <div className="dropdown-divider" />
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-chat-left-dots dropdown-item-icon" /> Report
                                                </a>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-trash dropdown-item-icon" /> Delete
                                                </a>
                                            </div>
                                        </div>
                                        {/* End Dropdown */}
                                    </div>
                                    <div className="card-body">
                                        <img className="avatar avatar-4x3" src="./assets/svg/components/placeholder-img-format.svg" alt="Image Description" />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">Front_2018.jpg</h5>
                                        <p className="small">Updated 1 month ago</p>
                                    </div>
                                    <a className="stretched-link" href="#" />
                                </div>
                                {/* End Card */}
                            </div>
                            {/* End Col */}
                            <div className="col mb-3 mb-lg-5">
                                {/* Card */}
                                <div className="card card-sm card-hover-shadow card-header-borderless h-100 text-center">
                                    <div className="card-header card-header-content-between border-0">
                                        <span className="small">4mb</span>
                                        {/* Dropdown */}
                                        <div className="dropdown">
                                            <button type="button" className="btn btn-ghost-secondary btn-icon btn-sm card-dropdown-btn rounded-circle" id="filesGridDropdown9" data-bs-toggle="dropdown" aria-expanded="false">
                                                <i className="bi-three-dots-vertical" />
                                            </button>
                                            <div className="dropdown-menu dropdown-menu-end" aria-labelledby="filesGridDropdown9" style={{ minWidth: '13rem' }}>
                                                <span className="dropdown-header">Settings</span>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-share dropdown-item-icon" /> Share file
                                                </a>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-folder-plus dropdown-item-icon" /> Move to
                                                </a>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-star dropdown-item-icon" /> Add to stared
                                                </a>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-pencil dropdown-item-icon" /> Rename
                                                </a>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-download dropdown-item-icon" /> Download
                                                </a>
                                                <div className="dropdown-divider" />
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-chat-left-dots dropdown-item-icon" /> Report
                                                </a>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-trash dropdown-item-icon" /> Delete
                                                </a>
                                            </div>
                                        </div>
                                        {/* End Dropdown */}
                                    </div>
                                    <div className="card-body">
                                        <img className="avatar avatar-4x3" src="./assets/svg/brands/pdf-icon.svg" alt="Image Description" />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">Business opportunities</h5>
                                        <p className="small">Updated 2 months ago</p>
                                    </div>
                                    <a className="stretched-link" href="#" />
                                </div>
                                {/* End Card */}
                            </div>
                            {/* End Col */}
                        </div>
                        {/* End Folders */}
                    </div>
                    <div className="tab-pane fade" id="list" role="tabpanel" aria-labelledby="list-tab">
                        <ul className="list-group">
                            {/* List Item */}
                            <li className="list-group-item">
                                <div className="row align-items-center">
                                    <div className="col-auto">
                                        <img className="avatar avatar-xs avatar-4x3" src="./assets/svg/brands/google-docs-icon.svg" alt="Image Description" />
                                    </div>
                                    {/* End Col */}
                                    <div className="col">
                                        <h5 className="mb-0">
                                            <a className="text-dark" href="#">WordPress contract terms</a>
                                        </h5>
                                        <ul className="list-inline list-separator small text-body">
                                            <li className="list-inline-item">Updated 50 min ago</li>
                                            <li className="list-inline-item">25kb</li>
                                        </ul>
                                    </div>
                                    {/* End Col */}
                                    <div className="col-auto">
                                        {/* Dropdown */}
                                        <div className="dropdown">
                                            <button type="button" className="btn btn-white btn-sm" id="filesListDropdown1" data-bs-toggle="dropdown" aria-expanded="false">
                                                <span className="d-none d-sm-inline-block me-1">More</span>
                                                <i className="bi-chevron-down" />
                                            </button>
                                            <div className="dropdown-menu dropdown-menu-end" aria-labelledby="filesListDropdown1" style={{ minWidth: '13rem' }}>
                                                <span className="dropdown-header">Settings</span>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-share dropdown-item-icon" /> Share file
                                                </a>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-folder-plus dropdown-item-icon" /> Move to
                                                </a>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-star dropdown-item-icon" /> Add to stared
                                                </a>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-pencil dropdown-item-icon" /> Rename
                                                </a>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-download dropdown-item-icon" /> Download
                                                </a>
                                                <div className="dropdown-divider" />
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-chat-left-dots dropdown-item-icon" /> Report
                                                </a>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-trash dropdown-item-icon" /> Delete
                                                </a>
                                            </div>
                                        </div>
                                        {/* End Dropdown */}
                                    </div>
                                    {/* End Col */}
                                </div>
                                {/* End Row */}
                            </li>
                            {/* End List Item */}
                            {/* List Item */}
                            <li className="list-group-item">
                                <div className="row align-items-center">
                                    <div className="col-auto">
                                        <img className="avatar avatar-xs avatar-4x3" src="./assets/svg/brands/pdf-icon.svg" alt="Image Description" />
                                    </div>
                                    {/* End Col */}
                                    <div className="col">
                                        <h5 className="mb-0">
                                            <a className="text-dark" href="#">Dashboard layout flow</a>
                                        </h5>
                                        <ul className="list-inline list-separator small text-body">
                                            <li className="list-inline-item">Updated 1 hour ago</li>
                                            <li className="list-inline-item">1mb</li>
                                        </ul>
                                    </div>
                                    {/* End Col */}
                                    <div className="col-auto">
                                        {/* Dropdown */}
                                        <div className="dropdown">
                                            <button type="button" className="btn btn-white btn-sm" id="filesListDropdown2" data-bs-toggle="dropdown" aria-expanded="false">
                                                <span className="d-none d-sm-inline-block me-1">More</span>
                                                <i className="bi-chevron-down" />
                                            </button>
                                            <div className="dropdown-menu dropdown-menu-end" aria-labelledby="filesListDropdown2" style={{ minWidth: '13rem' }}>
                                                <span className="dropdown-header">Settings</span>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-share dropdown-item-icon" /> Share file
                                                </a>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-folder-plus dropdown-item-icon" /> Move to
                                                </a>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-star dropdown-item-icon" /> Add to stared
                                                </a>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-pencil dropdown-item-icon" /> Rename
                                                </a>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-download dropdown-item-icon" /> Download
                                                </a>
                                                <div className="dropdown-divider" />
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-chat-left-dots dropdown-item-icon" /> Report
                                                </a>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-trash dropdown-item-icon" /> Delete
                                                </a>
                                            </div>
                                        </div>
                                        {/* End Dropdown */}
                                    </div>
                                    {/* End Col */}
                                </div>
                                {/* End Row */}
                            </li>
                            {/* End List Item */}
                            {/* List Item */}
                            <li className="list-group-item">
                                <div className="row align-items-center">
                                    <div className="col-auto">
                                        <img className="avatar avatar-xs avatar-4x3" src="./assets/svg/brands/google-slides-icon.svg" alt="Image Description" />
                                    </div>
                                    {/* End Col */}
                                    <div className="col">
                                        <h5 className="mb-0">
                                            <a className="text-dark" href="#">WordPress theme presentation</a>
                                        </h5>
                                        <ul className="list-inline list-separator small text-body">
                                            <li className="list-inline-item">Updated 5 hours ago</li>
                                            <li className="list-inline-item">3mb</li>
                                        </ul>
                                    </div>
                                    {/* End Col */}
                                    <div className="col-auto">
                                        {/* Dropdown */}
                                        <div className="dropdown">
                                            <button type="button" className="btn btn-white btn-sm" id="filesListDropdown3" data-bs-toggle="dropdown" aria-expanded="false">
                                                <span className="d-none d-sm-inline-block me-1">More</span>
                                                <i className="bi-chevron-down" />
                                            </button>
                                            <div className="dropdown-menu dropdown-menu-end" aria-labelledby="filesListDropdown3" style={{ minWidth: '13rem' }}>
                                                <span className="dropdown-header">Settings</span>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-share dropdown-item-icon" /> Share file
                                                </a>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-folder-plus dropdown-item-icon" /> Move to
                                                </a>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-star dropdown-item-icon" /> Add to stared
                                                </a>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-pencil dropdown-item-icon" /> Rename
                                                </a>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-download dropdown-item-icon" /> Download
                                                </a>
                                                <div className="dropdown-divider" />
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-chat-left-dots dropdown-item-icon" /> Report
                                                </a>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-trash dropdown-item-icon" /> Delete
                                                </a>
                                            </div>
                                        </div>
                                        {/* End Dropdown */}
                                    </div>
                                    {/* End Col */}
                                </div>
                                {/* End Row */}
                            </li>
                            {/* End List Item */}
                            {/* List Item */}
                            <li className="list-group-item">
                                <div className="row align-items-center">
                                    <div className="col-auto">
                                        <img className="avatar avatar-xs avatar-4x3" src="./assets/svg/brands/google-docs-icon.svg" alt="Image Description" />
                                    </div>
                                    {/* End Col */}
                                    <div className="col">
                                        <h5 className="mb-0">
                                            <a className="text-dark" href="#">Untitled</a>
                                        </h5>
                                        <ul className="list-inline list-separator small text-body">
                                            <li className="list-inline-item">Updated 5 hours ago</li>
                                            <li className="list-inline-item">1mb</li>
                                        </ul>
                                    </div>
                                    {/* End Col */}
                                    <div className="col-auto">
                                        {/* Dropdown */}
                                        <div className="dropdown">
                                            <button type="button" className="btn btn-white btn-sm" id="filesListDropdown4" data-bs-toggle="dropdown" aria-expanded="false">
                                                <span className="d-none d-sm-inline-block me-1">More</span>
                                                <i className="bi-chevron-down" />
                                            </button>
                                            <div className="dropdown-menu dropdown-menu-end" aria-labelledby="filesListDropdown4" style={{ minWidth: '13rem' }}>
                                                <span className="dropdown-header">Settings</span>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-share dropdown-item-icon" /> Share file
                                                </a>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-folder-plus dropdown-item-icon" /> Move to
                                                </a>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-star dropdown-item-icon" /> Add to stared
                                                </a>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-pencil dropdown-item-icon" /> Rename
                                                </a>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-download dropdown-item-icon" /> Download
                                                </a>
                                                <div className="dropdown-divider" />
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-chat-left-dots dropdown-item-icon" /> Report
                                                </a>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-trash dropdown-item-icon" /> Delete
                                                </a>
                                            </div>
                                        </div>
                                        {/* End Dropdown */}
                                    </div>
                                    {/* End Col */}
                                </div>
                                {/* End Row */}
                            </li>
                            {/* End List Item */}
                            {/* List Item */}
                            <li className="list-group-item">
                                <div className="row align-items-center">
                                    <div className="col-auto">
                                        <img className="avatar avatar-xs avatar-4x3" src="./assets/svg/brands/google-sheets-icon.svg" alt="Image Description" />
                                    </div>
                                    {/* End Col */}
                                    <div className="col">
                                        <h5 className="mb-0">
                                            <a className="text-dark" href="#">Hot startup 2019 - Report</a>
                                        </h5>
                                        <ul className="list-inline list-separator small text-body">
                                            <li className="list-inline-item">Updated 3 weeks ago</li>
                                            <li className="list-inline-item">3mb</li>
                                        </ul>
                                    </div>
                                    {/* End Col */}
                                    <div className="col-auto">
                                        {/* Dropdown */}
                                        <div className="dropdown">
                                            <button type="button" className="btn btn-white btn-sm" id="filesListDropdown5" data-bs-toggle="dropdown" aria-expanded="false">
                                                <span className="d-none d-sm-inline-block me-1">More</span>
                                                <i className="bi-chevron-down" />
                                            </button>
                                            <div className="dropdown-menu dropdown-menu-end" aria-labelledby="filesListDropdown5" style={{ minWidth: '13rem' }}>
                                                <span className="dropdown-header">Settings</span>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-share dropdown-item-icon" /> Share file
                                                </a>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-folder-plus dropdown-item-icon" /> Move to
                                                </a>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-star dropdown-item-icon" /> Add to stared
                                                </a>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-pencil dropdown-item-icon" /> Rename
                                                </a>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-download dropdown-item-icon" /> Download
                                                </a>
                                                <div className="dropdown-divider" />
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-chat-left-dots dropdown-item-icon" /> Report
                                                </a>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-trash dropdown-item-icon" /> Delete
                                                </a>
                                            </div>
                                        </div>
                                        {/* End Dropdown */}
                                    </div>
                                    {/* End Col */}
                                </div>
                                {/* End Row */}
                            </li>
                            {/* End List Item */}
                            {/* List Item */}
                            <li className="list-group-item">
                                <div className="row align-items-center">
                                    <div className="col-auto">
                                        <img className="avatar avatar-xs avatar-4x3" src="./assets/svg/brands/google-docs-icon.svg" alt="Image Description" />
                                    </div>
                                    {/* End Col */}
                                    <div className="col">
                                        <h5 className="mb-0">
                                            <a className="text-dark" href="#">Marketing strategy</a>
                                        </h5>
                                        <ul className="list-inline list-separator small text-body">
                                            <li className="list-inline-item">Updated 2 weeks ago</li>
                                            <li className="list-inline-item">2mb</li>
                                        </ul>
                                    </div>
                                    {/* End Col */}
                                    <div className="col-auto">
                                        {/* Dropdown */}
                                        <div className="dropdown">
                                            <button type="button" className="btn btn-white btn-sm" id="filesListDropdown6" data-bs-toggle="dropdown" aria-expanded="false">
                                                <span className="d-none d-sm-inline-block me-1">More</span>
                                                <i className="bi-chevron-down" />
                                            </button>
                                            <div className="dropdown-menu dropdown-menu-end" aria-labelledby="filesListDropdown6" style={{ minWidth: '13rem' }}>
                                                <span className="dropdown-header">Settings</span>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-share dropdown-item-icon" /> Share file
                                                </a>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-folder-plus dropdown-item-icon" /> Move to
                                                </a>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-star dropdown-item-icon" /> Add to stared
                                                </a>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-pencil dropdown-item-icon" /> Rename
                                                </a>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-download dropdown-item-icon" /> Download
                                                </a>
                                                <div className="dropdown-divider" />
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-chat-left-dots dropdown-item-icon" /> Report
                                                </a>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-trash dropdown-item-icon" /> Delete
                                                </a>
                                            </div>
                                        </div>
                                        {/* End Dropdown */}
                                    </div>
                                    {/* End Col */}
                                </div>
                                {/* End Row */}
                            </li>
                            {/* End List Item */}
                            {/* List Item */}
                            <li className="list-group-item">
                                <div className="row align-items-center">
                                    <div className="col-auto">
                                        <img className="avatar avatar-xs avatar-4x3" src="./assets/svg/components/placeholder-img-format.svg" alt="Image Description" />
                                    </div>
                                    {/* End Col */}
                                    <div className="col">
                                        <h5 className="mb-0">
                                            <a className="text-dark" href="#">Past-experience.jpg</a>
                                        </h5>
                                        <ul className="list-inline list-separator small text-body">
                                            <li className="list-inline-item">Updated 1 month ago</li>
                                            <li className="list-inline-item">15mb</li>
                                        </ul>
                                    </div>
                                    {/* End Col */}
                                    <div className="col-auto">
                                        {/* Dropdown */}
                                        <div className="dropdown">
                                            <button type="button" className="btn btn-white btn-sm" id="filesListDropdown7" data-bs-toggle="dropdown" aria-expanded="false">
                                                <span className="d-none d-sm-inline-block me-1">More</span>
                                                <i className="bi-chevron-down" />
                                            </button>
                                            <div className="dropdown-menu dropdown-menu-end" aria-labelledby="filesListDropdown7" style={{ minWidth: '13rem' }}>
                                                <span className="dropdown-header">Settings</span>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-share dropdown-item-icon" /> Share file
                                                </a>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-folder-plus dropdown-item-icon" /> Move to
                                                </a>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-star dropdown-item-icon" /> Add to stared
                                                </a>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-pencil dropdown-item-icon" /> Rename
                                                </a>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-download dropdown-item-icon" /> Download
                                                </a>
                                                <div className="dropdown-divider" />
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-chat-left-dots dropdown-item-icon" /> Report
                                                </a>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-trash dropdown-item-icon" /> Delete
                                                </a>
                                            </div>
                                        </div>
                                        {/* End Dropdown */}
                                    </div>
                                    {/* End Col */}
                                </div>
                                {/* End Row */}
                            </li>
                            {/* End List Item */}
                            {/* List Item */}
                            <li className="list-group-item">
                                <div className="row align-items-center">
                                    <div className="col-auto">
                                        <img className="avatar avatar-xs avatar-4x3" src="./assets/svg/components/placeholder-img-format.svg" alt="Image Description" />
                                    </div>
                                    {/* End Col */}
                                    <div className="col">
                                        <h5 className="mb-0">
                                            <a className="text-dark" href="#">Front_2018.jpg</a>
                                        </h5>
                                        <ul className="list-inline list-separator small text-body">
                                            <li className="list-inline-item">Updated 1 month ago</li>
                                            <li className="list-inline-item">9mb</li>
                                        </ul>
                                    </div>
                                    {/* End Col */}
                                    <div className="col-auto">
                                        {/* Dropdown */}
                                        <div className="dropdown">
                                            <button type="button" className="btn btn-white btn-sm" id="filesListDropdown8" data-bs-toggle="dropdown" aria-expanded="false">
                                                <span className="d-none d-sm-inline-block me-1">More</span>
                                                <i className="bi-chevron-down" />
                                            </button>
                                            <div className="dropdown-menu dropdown-menu-end" aria-labelledby="filesListDropdown8" style={{ minWidth: '13rem' }}>
                                                <span className="dropdown-header">Settings</span>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-share dropdown-item-icon" /> Share file
                                                </a>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-folder-plus dropdown-item-icon" /> Move to
                                                </a>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-star dropdown-item-icon" /> Add to stared
                                                </a>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-pencil dropdown-item-icon" /> Rename
                                                </a>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-download dropdown-item-icon" /> Download
                                                </a>
                                                <div className="dropdown-divider" />
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-chat-left-dots dropdown-item-icon" /> Report
                                                </a>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-trash dropdown-item-icon" /> Delete
                                                </a>
                                            </div>
                                        </div>
                                        {/* End Dropdown */}
                                    </div>
                                    {/* End Col */}
                                </div>
                                {/* End Row */}
                            </li>
                            {/* End List Item */}
                            {/* List Item */}
                            <li className="list-group-item">
                                <div className="row align-items-center">
                                    <div className="col-auto">
                                        <img className="avatar avatar-xs avatar-4x3" src="./assets/svg/brands/pdf-icon.svg" alt="Image Description" />
                                    </div>
                                    {/* End Col */}
                                    <div className="col">
                                        <h5 className="mb-0">
                                            <a className="text-dark" href="#">Business opportunities</a>
                                        </h5>
                                        <ul className="list-inline list-separator small text-body">
                                            <li className="list-inline-item">Updated 2 months ago</li>
                                            <li className="list-inline-item">4mb</li>
                                        </ul>
                                    </div>
                                    {/* End Col */}
                                    <div className="col-auto">
                                        {/* Dropdown */}
                                        <div className="dropdown">
                                            <button type="button" className="btn btn-white btn-sm" id="filesListDropdown9" data-bs-toggle="dropdown" aria-expanded="false">
                                                <span className="d-none d-sm-inline-block me-1">More</span>
                                                <i className="bi-chevron-down" />
                                            </button>
                                            <div className="dropdown-menu dropdown-menu-end" aria-labelledby="filesListDropdown9" style={{ minWidth: '13rem' }}>
                                                <span className="dropdown-header">Settings</span>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-share dropdown-item-icon" /> Share file
                                                </a>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-folder-plus dropdown-item-icon" /> Move to
                                                </a>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-star dropdown-item-icon" /> Add to stared
                                                </a>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-pencil dropdown-item-icon" /> Rename
                                                </a>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-download dropdown-item-icon" /> Download
                                                </a>
                                                <div className="dropdown-divider" />
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-chat-left-dots dropdown-item-icon" /> Report
                                                </a>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-trash dropdown-item-icon" /> Delete
                                                </a>
                                            </div>
                                        </div>
                                        {/* End Dropdown */}
                                    </div>
                                    {/* End Col */}
                                </div>
                                {/* End Row */}
                            </li>
                            {/* End List Item */}
                        </ul><div className="modal fade" id="welcomeMessageModal" tabIndex={-1} aria-hidden="true">
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
                    </div>
                </div>
                {/* End Tab Content */}
            </div>

            <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasActivityStream" aria-labelledby="offcanvasActivityStreamLabel">
                <div className="offcanvas-header">
                    <h4 id="offcanvasActivityStreamLabel" className="mb-0">Activity stream</h4>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
                </div>
                <div className="offcanvas-body">
                    {/* Step */}
                    <ul className="step step-icon-sm step-avatar-sm">
                        {/* Step Item */}
                        <li className="step-item">
                            <div className="step-content-wrapper">
                                <div className="step-avatar">
                                    <img className="step-avatar" src="./assets/img/160x160/img9.jpg" alt="Image Description" />
                                </div>
                                <div className="step-content">
                                    <h5 className="mb-1">Iana Robinson</h5>
                                    <p className="fs-5 mb-1">Added 2 files to task <a className="text-uppercase" href="#"><i className="bi-journal-bookmark-fill" /> Fd-7</a></p>
                                    <ul className="list-group list-group-sm">
                                        {/* List Item */}
                                        <li className="list-group-item list-group-item-light">
                                            <div className="row gx-1">
                                                <div className="col-6">
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
                                                <div className="col-6">
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
                                            </div>
                                            {/* End Row */}
                                        </li>
                                        {/* End List Item */}
                                    </ul>
                                    <span className="small text-muted text-uppercase">Now</span>
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
                                    <p className="fs-5 mb-1">Marked <a className="text-uppercase" href="#"><i className="bi-journal-bookmark-fill" /> Fr-6</a> as <span className="badge bg-soft-success text-success rounded-pill"><span className="legend-indicator bg-success" />"Completed"</span></p>
                                    <span className="small text-muted text-uppercase">Today</span>
                                </div>
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
                                    <span className="small text-muted text-uppercase">May 12</span>
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
                                    <span className="small text-muted text-uppercase">May 15</span>
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
                                    <p className="fs-5 mb-1">Marked <a className="text-uppercase" href="#"><i className="bi-journal-bookmark-fill" /> Fr-3</a> as <span className="badge bg-soft-success text-success rounded-pill"><span className="legend-indicator bg-success" />"Completed"</span></p>
                                    <span className="small text-muted text-uppercase">Apr 29</span>
                                </div>
                            </div>
                        </li>
                        {/* End Step Item */}
                        {/* Step Item */}
                        <li className="step-item">
                            <div className="step-content-wrapper">
                                <div className="step-avatar">
                                    <img className="step-avatar-img" src="./assets/img/160x160/img5.jpg" alt="Image Description" />
                                </div>
                                <div className="step-content">
                                    <h5 className="mb-1">Finch Hoot</h5>
                                    <p className="fs-5 mb-1">Earned a "Top endorsed" <i className="bi-patch-check-fill text-primary" /> badge</p>
                                    <span className="small text-muted text-uppercase">Apr 06</span>
                                </div>
                            </div>
                        </li>
                        {/* End Step Item */}
                        {/* Step Item */}
                        <li className="step-item">
                            <div className="step-content-wrapper">
                                <span className="step-icon step-icon-soft-primary">
                                    <i className="bi-person-fill" />
                                </span>
                                <div className="step-content">
                                    <h5 className="mb-1">Project status updated</h5>
                                    <p className="fs-5 mb-1">Marked <a className="text-uppercase" href="#"><i className="bi-journal-bookmark-fill" /> Fr-3</a> as <span className="badge bg-soft-primary text-primary rounded-pill"><span className="legend-indicator bg-primary" />"In progress"</span></p>
                                    <span className="small text-muted text-uppercase">Feb 10</span>
                                </div>
                            </div>
                        </li>
                        {/* End Step Item */}
                    </ul>
                    {/* End Step */}
                    <div className="d-grid">
                        <a className="btn btn-white" href="javascript:;">View all <i className="bi-chevron-right" /></a>
                    </div>
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
            {/* Upload files Modal */}
            <div className="modal fade" id="uploadFilesModal" tabIndex={-1} aria-labelledby="uploadFilesModalLabel">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="uploadFilesModalLabel">Add files</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        {/* Body */}
                        <div className="modal-body">
                            {/* Dropzone */}
                            <div id="attachFilesNewProjectLabel" className="js-dropzone dz-dropzone dz-dropzone-card">
                                <div className="dz-message">
                                    <img className="avatar avatar-xl avatar-4x3 mb-3" src="./assets/svg/illustrations/oc-browse.svg" alt="Image Description" data-hs-theme-appearance="default" />
                                    {/* <img className="avatar avatar-xl avatar-4x3 mb-3" src="./assets/svg/illustrations-light/oc-browse.svg" alt="Image Description" data-hs-theme-appearance="dark" /> */}
                                    <h5>Drag and drop your file here</h5>
                                    <p className="mb-2">or</p>
                                    <span className="btn btn-white btn-sm">Browse files</span>
                                </div>
                            </div>
                            {/* End Dropzone */}
                        </div>
                        {/* End Body */}
                        {/* Footer */}
                        <div className="modal-footer">
                            <button type="button" className="btn btn-white" data-bs-dismiss="modal" aria-label="Close">Cancel</button>
                            <button type="button" className="btn btn-primary">Upload</button>
                        </div>
                        {/* End Footer */}
                    </div>
                </div>
            </div>
        </>
    )
}

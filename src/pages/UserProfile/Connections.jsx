import React from 'react'
import Header from './Components/Header'

export default function Connections() {
    return (
        <>
            {/* Content */}
            <div className="content container-fluid">
                <div className="row justify-content-lg-center">
                    <div className="col-lg-10">
                        <Header />
                        {/* Filter */}
                        <div className="row align-items-center mb-5">
                            <div className="col">
                                <h3 className="mb-0">7 connections</h3>
                            </div>
                            {/* End Col */}
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
                                            <i className="bi-list" />
                                        </a>
                                    </li>
                                </ul>
                                {/* End Nav */}
                            </div>
                            {/* End Col */}
                        </div>
                        {/* End Filter */}
                        {/* Tab Content */}
                        <div className="tab-content" id="connectionsTabContent">
                            <div className="tab-pane fade show active" id="grid" role="tabpanel" aria-labelledby="grid-tab">
                                {/* Connections */}
                                <div className="row row-cols-1 row-cols-sm-2 row-cols-xl-3">
                                    <div className="col mb-3 mb-lg-5">
                                        {/* Card */}
                                        <div className="card h-100">
                                            <div className="card-pinned">
                                                <div className="card-pinned-top-end">
                                                    {/* Dropdown */}
                                                    <div className="dropdown">
                                                        <button type="button" className="btn btn-ghost-secondary btn-icon btn-sm rounded-circle" id="connectionsDropdown1" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <i className="bi-three-dots-vertical" />
                                                        </button>
                                                        <div className="dropdown-menu dropdown-menu-sm dropdown-menu-end" aria-labelledby="connectionsDropdown1">
                                                            <a className="dropdown-item" href="#">Share connection</a>
                                                            <a className="dropdown-item" href="#">Block connection</a>
                                                            <div className="dropdown-divider" />
                                                            <a className="dropdown-item text-danger" href="#">Delete</a>
                                                        </div>
                                                    </div>
                                                    {/* End Dropdown */}
                                                </div>
                                            </div>
                                            {/* Body */}
                                            <div className="card-body text-center">
                                                {/* Avatar */}
                                                <div className="avatar avatar-xl avatar-soft-primary avatar-circle avatar-centered mb-3">
                                                    <span className="avatar-initials">R</span>
                                                    <span className="avatar-status avatar-sm-status avatar-status-warning" />
                                                </div>
                                                {/* End Avatar */}
                                                <h3 className="mb-1">
                                                    <a className="text-dark" href="#">Rachel Doe</a>
                                                </h3>
                                                <div className="mb-3">
                                                    <i className="bi-building me-1" />
                                                    <span>Design</span>
                                                </div>
                                                {/* Badges */}
                                                <ul className="list-inline mb-0">
                                                    <li className="list-inline-item"><a className="badge bg-soft-secondary text-secondary p-2" href="#">UI/UX</a></li>
                                                    <li className="list-inline-item"><a className="badge bg-soft-secondary text-secondary p-2" href="#">Sketch</a></li>
                                                    <li className="list-inline-item"><a className="badge bg-soft-secondary text-secondary p-2" href="#">Figma</a></li>
                                                </ul>
                                                {/* End Badges */}
                                            </div>
                                            {/* End Body */}
                                            {/* Footer */}
                                            <div className="card-footer">
                                                <div className="row justify-content-between align-items-center">
                                                    <div className="col-auto py-1">
                                                        <a className="fs-6 text-body" href="#">25 connections</a>
                                                    </div>
                                                    <div className="col-auto py-1">
                                                        {/* Form Check */}
                                                        <div className="form-check form-check-switch">
                                                            <input className="form-check-input" type="checkbox" defaultValue id="connectionsCheckbox1" defaultChecked />
                                                            <label className="form-check-label btn btn-sm" htmlFor="connectionsCheckbox1">
                                                                <span className="form-check-default">
                                                                    <i className="bi-person-plus-fill" /> Connect
                                                                </span>
                                                                <span className="form-check-active">
                                                                    <i className="bi-check-lg me-2" /> Connected
                                                                </span>
                                                            </label>
                                                        </div>
                                                        {/* End Form Check */}
                                                    </div>
                                                </div>
                                            </div>
                                            {/* End Footer */}
                                        </div>
                                        {/* End Card */}
                                    </div>
                                    {/* End Col */}
                                    <div className="col mb-3 mb-lg-5">
                                        {/* Card */}
                                        <div className="card h-100">
                                            <div className="card-pinned">
                                                <div className="card-pinned-top-end">
                                                    {/* Dropdown */}
                                                    <div className="dropdown">
                                                        <button type="button" className="btn btn-ghost-secondary btn-icon btn-sm rounded-circle" id="connectionsDropdown2" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <i className="bi-three-dots-vertical" />
                                                        </button>
                                                        <div className="dropdown-menu dropdown-menu-sm dropdown-menu-end" aria-labelledby="connectionsDropdown2">
                                                            <a className="dropdown-item" href="#">Share connection</a>
                                                            <a className="dropdown-item" href="#">Block connection</a>
                                                            <div className="dropdown-divider" />
                                                            <a className="dropdown-item text-danger" href="#">Delete</a>
                                                        </div>
                                                    </div>
                                                    {/* End Dropdown */}
                                                </div>
                                            </div>
                                            {/* Body */}
                                            <div className="card-body text-center">
                                                {/* Avatar */}
                                                <div className="avatar avatar-xl avatar-circle avatar-centered mb-3">
                                                    <img className="avatar-img" src="./assets/img/160x160/img8.jpg" alt="Image Description" />
                                                    <span className="avatar-status avatar-sm-status avatar-status-success" />
                                                </div>
                                                {/* End Avatar */}
                                                <h3 className="mb-1">
                                                    <a className="text-dark" href="#">Isabella Finley</a>
                                                </h3>
                                                <div className="mb-3">
                                                    <i className="bi-building me-1" />
                                                    <span>FrontApp</span>
                                                </div>
                                                {/* Badges */}
                                                <ul className="list-inline mb-0">
                                                    <li className="list-inline-item"><a className="badge bg-soft-secondary text-secondary p-2" href="#">Human resources</a></li>
                                                    <li className="list-inline-item"><a className="badge bg-soft-secondary text-secondary p-2" href="#">Support</a></li>
                                                </ul>
                                                {/* End Badges */}
                                            </div>
                                            {/* End Body */}
                                            {/* Footer */}
                                            <div className="card-footer">
                                                <div className="row justify-content-between align-items-center">
                                                    <div className="col-auto py-1">
                                                        <a className="fs-6 text-body" href="#">79 connections</a>
                                                    </div>
                                                    {/* End Col */}
                                                    <div className="col-auto py-1">
                                                        {/* Form Check */}
                                                        <div className="form-check form-check-switch">
                                                            <input className="form-check-input" type="checkbox" defaultValue id="connectionsCheckbox2" defaultChecked />
                                                            <label className="form-check-label btn btn-sm" htmlFor="connectionsCheckbox2">
                                                                <span className="form-check-default">
                                                                    <i className="bi-person-plus-fill" /> Connect
                                                                </span>
                                                                <span className="form-check-active">
                                                                    <i className="bi-check-lg me-2" /> Connected
                                                                </span>
                                                            </label>
                                                        </div>
                                                        {/* End Form Check */}
                                                    </div>
                                                    {/* End Col */}
                                                </div>
                                                {/* End Row */}
                                            </div>
                                            {/* End Footer */}
                                        </div>
                                        {/* End Card */}
                                    </div>
                                    {/* End Col */}
                                    <div className="col mb-3 mb-lg-5">
                                        {/* Card */}
                                        <div className="card h-100">
                                            <div className="card-pinned">
                                                <div className="card-pinned-top-end">
                                                    {/* Dropdown */}
                                                    <div className="dropdown">
                                                        <button type="button" className="btn btn-ghost-secondary btn-icon btn-sm rounded-circle" id="connectionsDropdown3" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <i className="bi-three-dots-vertical" />
                                                        </button>
                                                        <div className="dropdown-menu dropdown-menu-sm dropdown-menu-end" aria-labelledby="connectionsDropdown3">
                                                            <a className="dropdown-item" href="#">Share connection</a>
                                                            <a className="dropdown-item" href="#">Block connection</a>
                                                            <div className="dropdown-divider" />
                                                            <a className="dropdown-item text-danger" href="#">Delete</a>
                                                        </div>
                                                    </div>
                                                    {/* End Dropdown */}
                                                </div>
                                            </div>
                                            {/* Body */}
                                            <div className="card-body text-center">
                                                {/* Avatar */}
                                                <div className="avatar avatar-xl avatar-circle avatar-centered mb-3">
                                                    <img className="avatar-img" src="./assets/img/160x160/img3.jpg" alt="Image Description" />
                                                    <span className="avatar-status avatar-sm-status avatar-status-warning" />
                                                </div>
                                                {/* End Avatar */}
                                                <h3 className="mb-1">
                                                    <a className="text-dark" href="#">David Harrison</a>
                                                </h3>
                                                <div className="mb-3">
                                                    <i className="bi-building me-1" />
                                                    <span>Unassigned</span>
                                                </div>
                                                {/* Badges */}
                                                <ul className="list-inline mb-0">
                                                    <li className="list-inline-item"><a className="badge bg-soft-secondary text-secondary p-2" href="#">Marketing</a></li>
                                                </ul>
                                                {/* End Badges */}
                                            </div>
                                            {/* End Body */}
                                            {/* Footer */}
                                            <div className="card-footer">
                                                <div className="row justify-content-between align-items-center">
                                                    <div className="col-auto py-1">
                                                        <a className="fs-6 text-body" href="#">0 connections</a>
                                                    </div>
                                                    {/* End Col */}
                                                    <div className="col-auto py-1">
                                                        {/* Form Check */}
                                                        <div className="form-check form-check-switch">
                                                            <input className="form-check-input" type="checkbox" defaultValue id="connectionsCheckbox3" />
                                                            <label className="form-check-label btn btn-sm" htmlFor="connectionsCheckbox3">
                                                                <span className="form-check-default">
                                                                    <i className="bi-person-plus-fill" /> Connect
                                                                </span>
                                                                <span className="form-check-active">
                                                                    <i className="bi-check-lg me-2" /> Connected
                                                                </span>
                                                            </label>
                                                        </div>
                                                        {/* End Form Check */}
                                                    </div>
                                                    {/* End Col */}
                                                </div>
                                                {/* End Row */}
                                            </div>
                                            {/* End Footer */}
                                        </div>
                                        {/* End Card */}
                                    </div>
                                    {/* End Col */}
                                    <div className="col mb-3 mb-lg-5">
                                        {/* Card */}
                                        <div className="card h-100">
                                            <div className="card-pinned">
                                                <div className="card-pinned-top-end">
                                                    {/* Dropdown */}
                                                    <div className="dropdown">
                                                        <button type="button" className="btn btn-ghost-secondary btn-icon btn-sm rounded-circle" id="connectionsDropdown4" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <i className="bi-three-dots-vertical" />
                                                        </button>
                                                        <div className="dropdown-menu dropdown-menu-sm dropdown-menu-end" aria-labelledby="connectionsDropdown4">
                                                            <a className="dropdown-item" href="#">Share connection</a>
                                                            <a className="dropdown-item" href="#">Block connection</a>
                                                            <div className="dropdown-divider" />
                                                            <a className="dropdown-item text-danger" href="#">Delete</a>
                                                        </div>
                                                    </div>
                                                    {/* End Dropdown */}
                                                </div>
                                            </div>
                                            {/* Body */}
                                            <div className="card-body text-center">
                                                {/* Avatar */}
                                                <div className="avatar avatar-xl avatar-soft-dark avatar-circle avatar-centered mb-3">
                                                    <span className="avatar-initials">B</span>
                                                    <span className="avatar-status avatar-sm-status avatar-status-danger" />
                                                </div>
                                                {/* End Avatar */}
                                                <h3 className="mb-1">
                                                    <a className="text-dark" href="#">Bob Dean</a>
                                                </h3>
                                                <div className="mb-3">
                                                    <i className="bi-building me-1" />
                                                    <span>Sales</span>
                                                </div>
                                                {/* Badges */}
                                                <ul className="list-inline mb-0">
                                                    <li className="list-inline-item"><a className="badge bg-soft-secondary text-secondary p-2" href="#">Sales</a></li>
                                                    <li className="list-inline-item"><a className="badge bg-soft-secondary text-secondary p-2" href="#">Legal</a></li>
                                                </ul>
                                                {/* End Badges */}
                                            </div>
                                            {/* End Body */}
                                            {/* Footer */}
                                            <div className="card-footer">
                                                <div className="row justify-content-between align-items-center">
                                                    <div className="col-auto py-1">
                                                        <a className="fs-6 text-body" href="#">25 connections</a>
                                                    </div>
                                                    {/* End Col */}
                                                    <div className="col-auto py-1">
                                                        {/* Form Check */}
                                                        <div className="form-check form-check-switch">
                                                            <input className="form-check-input" type="checkbox" defaultValue id="connectionsCheckbox4" />
                                                            <label className="form-check-label btn btn-sm" htmlFor="connectionsCheckbox4">
                                                                <span className="form-check-default">
                                                                    <i className="bi-person-plus-fill" /> Connect
                                                                </span>
                                                                <span className="form-check-active">
                                                                    <i className="bi-check-lg me-2" /> Connected
                                                                </span>
                                                            </label>
                                                        </div>
                                                        {/* End Form Check */}
                                                    </div>
                                                    {/* End Col */}
                                                </div>
                                                {/* End Row */}
                                            </div>
                                            {/* End Footer */}
                                        </div>
                                        {/* End Card */}
                                    </div>
                                    {/* End Col */}
                                    <div className="col mb-3 mb-lg-5">
                                        {/* Card */}
                                        <div className="card h-100">
                                            <div className="card-pinned">
                                                <div className="card-pinned-top-end">
                                                    {/* Dropdown */}
                                                    <div className="dropdown">
                                                        <button type="button" className="btn btn-ghost-secondary btn-icon btn-sm rounded-circle" id="connectionsDropdown5" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <i className="bi-three-dots-vertical" />
                                                        </button>
                                                        <div className="dropdown-menu dropdown-menu-sm dropdown-menu-end" aria-labelledby="connectionsDropdown5">
                                                            <a className="dropdown-item" href="#">Share connection</a>
                                                            <a className="dropdown-item" href="#">Block connection</a>
                                                            <div className="dropdown-divider" />
                                                            <a className="dropdown-item text-danger" href="#">Delete</a>
                                                        </div>
                                                    </div>
                                                    {/* End Dropdown */}
                                                </div>
                                            </div>
                                            {/* Body */}
                                            <div className="card-body text-center">
                                                {/* Avatar */}
                                                <div className="avatar avatar-xl avatar-circle avatar-centered mb-3">
                                                    <img className="avatar-img" src="./assets/img/160x160/img10.jpg" alt="Image Description" />
                                                    <span className="avatar-status avatar-sm-status avatar-status-success" />
                                                </div>
                                                {/* End Avatar */}
                                                <h3 className="mb-1">
                                                    <a className="text-dark" href="#">Amanda Harvey</a>
                                                </h3>
                                                <div className="mb-3">
                                                    <i className="bi-building me-1" />
                                                    <span>Atlassian</span>
                                                </div>
                                                {/* Badges */}
                                                <ul className="list-inline mb-0">
                                                    <li className="list-inline-item"><a className="badge bg-soft-secondary text-secondary p-2" href="#">Human resources</a></li>
                                                    <li className="list-inline-item"><a className="badge bg-soft-secondary text-secondary p-2" href="#">Legal</a></li>
                                                </ul>
                                                {/* End Badges */}
                                            </div>
                                            {/* End Body */}
                                            {/* Footer */}
                                            <div className="card-footer">
                                                <div className="row justify-content-between align-items-center">
                                                    <div className="col-auto py-1">
                                                        <a className="fs-6 text-body" href="#">3 connections</a>
                                                    </div>
                                                    {/* End Col */}
                                                    <div className="col-auto py-1">
                                                        {/* Form Check */}
                                                        <div className="form-check form-check-switch">
                                                            <input className="form-check-input" type="checkbox" defaultValue id="connectionsCheckbox5" defaultChecked />
                                                            <label className="form-check-label btn btn-sm" htmlFor="connectionsCheckbox5">
                                                                <span className="form-check-default">
                                                                    <i className="bi-person-plus-fill" /> Connect
                                                                </span>
                                                                <span className="form-check-active">
                                                                    <i className="bi-check-lg me-2" /> Connected
                                                                </span>
                                                            </label>
                                                        </div>
                                                        {/* End Form Check */}
                                                    </div>
                                                    {/* End Col */}
                                                </div>
                                                {/* End Row */}
                                            </div>
                                            {/* End Footer */}
                                        </div>
                                        {/* End Card */}
                                    </div>
                                    {/* End Col */}
                                    <div className="col mb-3 mb-lg-5">
                                        {/* Card */}
                                        <div className="card h-100">
                                            <div className="card-pinned">
                                                <div className="card-pinned-top-end">
                                                    {/* Dropdown */}
                                                    <div className="dropdown">
                                                        <button type="button" className="btn btn-ghost-secondary btn-icon btn-sm rounded-circle" id="connectionsDropdown6" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <i className="bi-three-dots-vertical" />
                                                        </button>
                                                        <div className="dropdown-menu dropdown-menu-sm dropdown-menu-end" aria-labelledby="connectionsDropdown6">
                                                            <a className="dropdown-item" href="#">Share connection</a>
                                                            <a className="dropdown-item" href="#">Block connection</a>
                                                            <div className="dropdown-divider" />
                                                            <a className="dropdown-item text-danger" href="#">Delete</a>
                                                        </div>
                                                    </div>
                                                    {/* End Dropdown */}
                                                </div>
                                            </div>
                                            {/* Body */}
                                            <div className="card-body text-center">
                                                {/* Avatar */}
                                                <div className="avatar avatar-xl avatar-circle avatar-centered mb-3">
                                                    <img className="avatar-img" src="./assets/img/160x160/img5.jpg" alt="Image Description" />
                                                    <span className="avatar-status avatar-sm-status avatar-status-success" />
                                                </div>
                                                {/* End Avatar */}
                                                <h3 className="mb-1">
                                                    <a className="text-dark" href="#">Finch Hoot</a>
                                                </h3>
                                                <div className="mb-3">
                                                    <i className="bi-building me-1" />
                                                    <span>Dev</span>
                                                </div>
                                                {/* Badges */}
                                                <ul className="list-inline mb-0">
                                                    <li className="list-inline-item"><a className="badge bg-soft-secondary text-secondary p-2" href="#">JS</a></li>
                                                    <li className="list-inline-item"><a className="badge bg-soft-secondary text-secondary p-2" href="#">Vue.js</a></li>
                                                    <li className="list-inline-item"><a className="badge bg-soft-secondary text-secondary p-2" href="#">HTML5</a></li>
                                                </ul>
                                                {/* End Badges */}
                                            </div>
                                            {/* End Body */}
                                            {/* Footer */}
                                            <div className="card-footer">
                                                <div className="row justify-content-between align-items-center">
                                                    <div className="col-auto py-1">
                                                        <a className="fs-6 text-body" href="#">7 connections</a>
                                                    </div>
                                                    {/* End Col */}
                                                    <div className="col-auto py-1">
                                                        {/* Form Check */}
                                                        <div className="form-check form-check-switch">
                                                            <input className="form-check-input" type="checkbox" defaultValue id="connectionsCheckbox6" defaultChecked />
                                                            <label className="form-check-label btn btn-sm" htmlFor="connectionsCheckbox6">
                                                                <span className="form-check-default">
                                                                    <i className="bi-person-plus-fill" /> Connect
                                                                </span>
                                                                <span className="form-check-active">
                                                                    <i className="bi-check-lg me-2" /> Connected
                                                                </span>
                                                            </label>
                                                        </div>
                                                        {/* End Form Check */}
                                                    </div>
                                                    {/* End Col */}
                                                </div>
                                                {/* End Row */}
                                            </div>
                                            {/* End Footer */}
                                        </div>
                                        {/* End Card */}
                                    </div>
                                    {/* End Col */}
                                    <div className="col mb-3 mb-lg-5">
                                        {/* Card */}
                                        <div className="card h-100">
                                            <div className="card-pinned">
                                                <div className="card-pinned-top-end">
                                                    {/* Dropdown */}
                                                    <div className="dropdown">
                                                        <button type="button" className="btn btn-ghost-secondary btn-icon btn-sm rounded-circle" id="connectionsDropdown7" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <i className="bi-three-dots-vertical" />
                                                        </button>
                                                        <div className="dropdown-menu dropdown-menu-sm dropdown-menu-end" aria-labelledby="connectionsDropdown7">
                                                            <a className="dropdown-item" href="#">Share connection</a>
                                                            <a className="dropdown-item" href="#">Block connection</a>
                                                            <div className="dropdown-divider" />
                                                            <a className="dropdown-item text-danger" href="#">Delete</a>
                                                        </div>
                                                    </div>
                                                    {/* End Dropdown */}
                                                </div>
                                            </div>
                                            {/* Body */}
                                            <div className="card-body text-center">
                                                {/* Avatar */}
                                                <div className="avatar avatar-xl avatar-circle avatar-centered mb-3">
                                                    <img className="avatar-img" src="./assets/img/160x160/img6.jpg" alt="Image Description" />
                                                    <span className="avatar-status avatar-sm-status avatar-status-danger" />
                                                </div>
                                                {/* End Avatar */}
                                                <h3 className="mb-1">
                                                    <a className="text-dark" href="#">Costa Quinn</a>
                                                </h3>
                                                <div className="mb-3">
                                                    <i className="bi-building me-1" />
                                                    <span>Research team</span>
                                                </div>
                                                {/* Badges */}
                                                <ul className="list-inline mb-0">
                                                    <li className="list-inline-item"><a className="badge bg-soft-secondary text-secondary p-2" href="#">SEO</a></li>
                                                </ul>
                                                {/* End Badges */}
                                            </div>
                                            {/* End Body */}
                                            {/* Footer */}
                                            <div className="card-footer">
                                                <div className="row justify-content-between align-items-center">
                                                    <div className="col-auto py-1">
                                                        <a className="fs-6 text-body" href="#">9 connections</a>
                                                    </div>
                                                    {/* End Col */}
                                                    <div className="col-auto py-1">
                                                        {/* Form Check */}
                                                        <div className="form-check form-check-switch">
                                                            <input className="form-check-input" type="checkbox" defaultValue id="connectionsCheckbox7" />
                                                            <label className="form-check-label btn btn-sm" htmlFor="connectionsCheckbox7">
                                                                <span className="form-check-default">
                                                                    <i className="bi-person-plus-fill" /> Connect
                                                                </span>
                                                                <span className="form-check-active">
                                                                    <i className="bi-check-lg me-2" /> Connected
                                                                </span>
                                                            </label>
                                                        </div>
                                                        {/* End Form Check */}
                                                    </div>
                                                    {/* End Col */}
                                                </div>
                                                {/* End Row */}
                                            </div>
                                            {/* End Footer */}
                                        </div>
                                        {/* End Card */}
                                    </div>
                                    {/* End Col */}
                                </div>
                                {/* End Connections */}
                            </div>
                            <div className="tab-pane fade" id="list" role="tabpanel" aria-labelledby="list-tab">
                                <div className="row row-cols-1">
                                    <div className="col mb-3">
                                        {/* Card */}
                                        <div className="card card-body">
                                            <div className="d-flex align-items-md-center">
                                                <div className="flex-shrink-0">
                                                    {/* Avatar */}
                                                    <div className="avatar avatar-lg avatar-soft-primary avatar-circle">
                                                        <span className="avatar-initials">R</span>
                                                        <span className="avatar-status avatar-sm-status avatar-status-warning" />
                                                    </div>
                                                    {/* End Avatar */}
                                                </div>
                                                <div className="flex-grow-1 ms-3">
                                                    <div className="row align-items-md-center">
                                                        <div className="col-9 col-md-4 col-lg-3 mb-2 mb-md-0">
                                                            <h4 className="mb-1">
                                                                <a className="text-dark" href="#">Rachel Doe</a>
                                                            </h4>
                                                            <span className="d-block">
                                                                <i className="bi-building me-1" />
                                                                <span>Design</span>
                                                            </span>
                                                        </div>
                                                        {/* End Col */}
                                                        <div className="col-3 col-md-auto order-md-last text-end ms-n3">
                                                            {/* Dropdown */}
                                                            <div className="dropdown">
                                                                <button type="button" className="btn btn-ghost-secondary btn-icon btn-sm rounded-circle" id="connectionsListDropdown1" data-bs-toggle="dropdown" aria-expanded="false">
                                                                    <i className="bi-three-dots-vertical" />
                                                                </button>
                                                                <div className="dropdown-menu dropdown-menu-sm dropdown-menu-end" aria-labelledby="connectionsListDropdown1">
                                                                    <a className="dropdown-item" href="#">Rename project </a>
                                                                    <a className="dropdown-item" href="#">Add to favorites</a>
                                                                    <a className="dropdown-item" href="#">Archive project</a>
                                                                    <div className="dropdown-divider" />
                                                                    <a className="dropdown-item text-danger" href="#">Delete</a>
                                                                </div>
                                                            </div>
                                                            {/* End Dropdown */}
                                                        </div>
                                                        {/* End Col */}
                                                        <div className="col-sm mb-2 mb-sm-0">
                                                            {/* Badges */}
                                                            <ul className="list-inline mb-0">
                                                                <li className="list-inline-item"><a className="badge bg-soft-secondary text-secondary p-2" href="#">UI/UX</a></li>
                                                                <li className="list-inline-item"><a className="badge bg-soft-secondary text-secondary p-2" href="#">Sketch</a></li>
                                                                <li className="list-inline-item"><a className="badge bg-soft-secondary text-secondary p-2" href="#">Figma</a></li>
                                                            </ul>
                                                            {/* End Badges */}
                                                        </div>
                                                        {/* End Col */}
                                                        <div className="col-sm-auto">
                                                            {/* Form Check */}
                                                            <div className="form-check form-check-switch">
                                                                <input className="form-check-input" type="checkbox" defaultValue id="connectionsListCheckbox1" defaultChecked />
                                                                <label className="form-check-label btn btn-sm" htmlFor="connectionsListCheckbox1">
                                                                    <span className="form-check-default">
                                                                        <i className="bi-person-plus-fill" /> Connect
                                                                    </span>
                                                                    <span className="form-check-active">
                                                                        <i className="bi-check-lg me-2" /> Connected
                                                                    </span>
                                                                </label>
                                                            </div>
                                                            {/* End Form Check */}
                                                        </div>
                                                        {/* End Col */}
                                                    </div>
                                                    {/* End Row */}
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Card */}
                                    </div>
                                    {/* End Col */}
                                    <div className="col mb-3">
                                        {/* Card */}
                                        <div className="card card-body">
                                            <div className="d-flex align-items-md-center">
                                                <div className="flex-shrink-0">
                                                    {/* Avatar */}
                                                    <div className="avatar avatar-lg avatar-circle">
                                                        <img className="avatar-img" src="./assets/img/160x160/img8.jpg" alt="Image Description" />
                                                        <span className="avatar-status avatar-sm-status avatar-status-success" />
                                                    </div>
                                                    {/* End Avatar */}
                                                </div>
                                                <div className="flex-grow-1 ms-3">
                                                    <div className="row align-items-md-center">
                                                        <div className="col-9 col-md-4 col-lg-3 mb-2 mb-md-0">
                                                            <h4 className="mb-1">
                                                                <a className="text-dark" href="#">Isabella Finley</a>
                                                            </h4>
                                                            <span className="d-block">
                                                                <i className="bi-building me-1" />
                                                                <span>FrontApp</span>
                                                            </span>
                                                        </div>
                                                        {/* End Col */}
                                                        <div className="col-3 col-md-auto order-md-last text-end ms-n3">
                                                            {/* Dropdown */}
                                                            <div className="dropdown">
                                                                <button type="button" className="btn btn-ghost-secondary btn-icon btn-sm rounded-circle" id="connectionsListDropdown2" data-bs-toggle="dropdown" aria-expanded="false">
                                                                    <i className="bi-three-dots-vertical" />
                                                                </button>
                                                                <div className="dropdown-menu dropdown-menu-sm dropdown-menu-end" aria-labelledby="connectionsListDropdown2">
                                                                    <a className="dropdown-item" href="#">Rename project </a>
                                                                    <a className="dropdown-item" href="#">Add to favorites</a>
                                                                    <a className="dropdown-item" href="#">Archive project</a>
                                                                    <div className="dropdown-divider" />
                                                                    <a className="dropdown-item text-danger" href="#">Delete</a>
                                                                </div>
                                                            </div>
                                                            {/* End Dropdown */}
                                                        </div>
                                                        {/* End Col */}
                                                        <div className="col-sm mb-2 mb-sm-0">
                                                            {/* Badges */}
                                                            <ul className="list-inline mb-0">
                                                                <li className="list-inline-item"><a className="badge bg-soft-secondary text-secondary p-2" href="#">Human resources</a></li>
                                                                <li className="list-inline-item"><a className="badge bg-soft-secondary text-secondary p-2" href="#">Support</a></li>
                                                            </ul>
                                                            {/* End Badges */}
                                                        </div>
                                                        {/* End Col */}
                                                        <div className="col-sm-auto">
                                                            {/* Form Check */}
                                                            <div className="form-check form-check-switch">
                                                                <input className="form-check-input" type="checkbox" defaultValue id="connectionsListCheckbox2" defaultChecked />
                                                                <label className="form-check-label btn btn-sm" htmlFor="connectionsListCheckbox2">
                                                                    <span className="form-check-default">
                                                                        <i className="bi-person-plus-fill" /> Connect
                                                                    </span>
                                                                    <span className="form-check-active">
                                                                        <i className="bi-check-lg me-2" /> Connected
                                                                    </span>
                                                                </label>
                                                            </div>
                                                            {/* End Form Check */}
                                                        </div>
                                                        {/* End Col */}
                                                    </div>
                                                    {/* End Row */}
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Card */}
                                    </div>
                                    {/* End Col */}
                                    <div className="col mb-3">
                                        {/* Card */}
                                        <div className="card card-body">
                                            <div className="d-flex align-items-md-center">
                                                <div className="flex-shrink-0">
                                                    {/* Avatar */}
                                                    <div className="avatar avatar-lg avatar-circle">
                                                        <img className="avatar-img" src="./assets/img/160x160/img3.jpg" alt="Image Description" />
                                                        <span className="avatar-status avatar-sm-status avatar-status-warning" />
                                                    </div>
                                                    {/* End Avatar */}
                                                </div>
                                                <div className="flex-grow-1 ms-3">
                                                    <div className="row align-items-md-center">
                                                        <div className="col-9 col-md-4 col-lg-3 mb-2 mb-md-0">
                                                            <h4 className="mb-1">
                                                                <a className="text-dark" href="#">David Harrison</a>
                                                            </h4>
                                                            <span className="d-block">
                                                                <i className="bi-building me-1" />
                                                                <span>Unassigned</span>
                                                            </span>
                                                        </div>
                                                        {/* End Col */}
                                                        <div className="col-3 col-md-auto order-md-last text-end ms-n3">
                                                            {/* Dropdown */}
                                                            <div className="dropdown">
                                                                <button type="button" className="btn btn-ghost-secondary btn-icon btn-sm rounded-circle" id="connectionsListDropdown3" data-bs-toggle="dropdown" aria-expanded="false">
                                                                    <i className="bi-three-dots-vertical" />
                                                                </button>
                                                                <div className="dropdown-menu dropdown-menu-sm dropdown-menu-end" aria-labelledby="connectionsListDropdown3">
                                                                    <a className="dropdown-item" href="#">Rename project </a>
                                                                    <a className="dropdown-item" href="#">Add to favorites</a>
                                                                    <a className="dropdown-item" href="#">Archive project</a>
                                                                    <div className="dropdown-divider" />
                                                                    <a className="dropdown-item text-danger" href="#">Delete</a>
                                                                </div>
                                                            </div>
                                                            {/* End Dropdown */}
                                                        </div>
                                                        {/* End Col */}
                                                        <div className="col-sm mb-2 mb-sm-0">
                                                            {/* Badges */}
                                                            <ul className="list-inline mb-0">
                                                                <li className="list-inline-item"><a className="badge bg-soft-secondary text-secondary p-2" href="#">Marketing</a></li>
                                                            </ul>
                                                            {/* End Badges */}
                                                        </div>
                                                        {/* End Col */}
                                                        <div className="col-sm-auto">
                                                            {/* Form Check */}
                                                            <div className="form-check form-check-switch">
                                                                <input className="form-check-input" type="checkbox" defaultValue id="connectionsListCheckbox3" />
                                                                <label className="form-check-label btn btn-sm" htmlFor="connectionsListCheckbox3">
                                                                    <span className="form-check-default">
                                                                        <i className="bi-person-plus-fill" /> Connect
                                                                    </span>
                                                                    <span className="form-check-active">
                                                                        <i className="bi-check-lg me-2" /> Connected
                                                                    </span>
                                                                </label>
                                                            </div>
                                                            {/* End Form Check */}
                                                        </div>
                                                        {/* End Col */}
                                                    </div>
                                                    {/* End Row */}
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Card */}
                                    </div>
                                    {/* End Col */}
                                    <div className="col mb-3">
                                        {/* Card */}
                                        <div className="card card-body">
                                            <div className="d-flex align-items-md-center">
                                                <div className="flex-shrink-0">
                                                    {/* Avatar */}
                                                    <div className="avatar avatar-lg avatar-soft-dark avatar-circle">
                                                        <span className="avatar-initials">B</span>
                                                        <span className="avatar-status avatar-sm-status avatar-status-danger" />
                                                    </div>
                                                    {/* End Avatar */}
                                                </div>
                                                <div className="flex-grow-1 ms-3">
                                                    <div className="row align-items-md-center">
                                                        <div className="col-9 col-md-4 col-lg-3 mb-2 mb-md-0">
                                                            <h4 className="mb-1">
                                                                <a className="text-dark" href="#">Bob Dean</a>
                                                            </h4>
                                                            <span className="d-block">
                                                                <i className="bi-building me-1" />
                                                                <span>Sales</span>
                                                            </span>
                                                        </div>
                                                        {/* End Col */}
                                                        <div className="col-3 col-md-auto order-md-last text-end ms-n3">
                                                            {/* Dropdown */}
                                                            <div className="dropdown">
                                                                <button type="button" className="btn btn-ghost-secondary btn-icon btn-sm rounded-circle" id="connectionsListDropdown4" data-bs-toggle="dropdown" aria-expanded="false">
                                                                    <i className="bi-three-dots-vertical" />
                                                                </button>
                                                                <div className="dropdown-menu dropdown-menu-sm dropdown-menu-end" aria-labelledby="connectionsListDropdown4">
                                                                    <a className="dropdown-item" href="#">Rename project </a>
                                                                    <a className="dropdown-item" href="#">Add to favorites</a>
                                                                    <a className="dropdown-item" href="#">Archive project</a>
                                                                    <div className="dropdown-divider" />
                                                                    <a className="dropdown-item text-danger" href="#">Delete</a>
                                                                </div>
                                                            </div>
                                                            {/* End Dropdown */}
                                                        </div>
                                                        {/* End Col */}
                                                        <div className="col-sm mb-2 mb-sm-0">
                                                            {/* Badges */}
                                                            <ul className="list-inline mb-0">
                                                                <li className="list-inline-item"><a className="badge bg-soft-secondary text-secondary p-2" href="#">Sales</a></li>
                                                                <li className="list-inline-item"><a className="badge bg-soft-secondary text-secondary p-2" href="#">Legal</a></li>
                                                            </ul>
                                                            {/* End Badges */}
                                                        </div>
                                                        {/* End Col */}
                                                        <div className="col-sm-auto">
                                                            {/* Form Check */}
                                                            <div className="form-check form-check-switch">
                                                                <input className="form-check-input" type="checkbox" defaultValue id="connectionsListCheckbox4" />
                                                                <label className="form-check-label btn btn-sm" htmlFor="connectionsListCheckbox4">
                                                                    <span className="form-check-default">
                                                                        <i className="bi-person-plus-fill" /> Connect
                                                                    </span>
                                                                    <span className="form-check-active">
                                                                        <i className="bi-check-lg me-2" /> Connected
                                                                    </span>
                                                                </label>
                                                            </div>
                                                            {/* End Form Check */}
                                                        </div>
                                                        {/* End Col */}
                                                    </div>
                                                    {/* End Row */}
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Card */}
                                    </div>
                                    {/* End Col */}
                                    <div className="col mb-3">
                                        {/* Card */}
                                        <div className="card card-body">
                                            <div className="d-flex align-items-md-center">
                                                <div className="flex-shrink-0">
                                                    {/* Avatar */}
                                                    <div className="avatar avatar-lg avatar-circle">
                                                        <img className="avatar-img" src="./assets/img/160x160/img10.jpg" alt="Image Description" />
                                                        <span className="avatar-status avatar-sm-status avatar-status-success" />
                                                    </div>
                                                    {/* End Avatar */}
                                                </div>
                                                <div className="flex-grow-1 ms-3">
                                                    <div className="row align-items-md-center">
                                                        <div className="col-9 col-md-4 col-lg-3 mb-2 mb-md-0">
                                                            <h4 className="mb-1">
                                                                <a className="text-dark" href="#">Amanda Harvey</a>
                                                            </h4>
                                                            <span className="d-block">
                                                                <i className="bi-building me-1" />
                                                                <span>Atlassian</span>
                                                            </span>
                                                        </div>
                                                        {/* End Col */}
                                                        <div className="col-3 col-md-auto order-md-last text-end ms-n3">
                                                            {/* Dropdown */}
                                                            <div className="dropdown">
                                                                <button type="button" className="btn btn-ghost-secondary btn-icon btn-sm rounded-circle" id="connectionsListDropdown5" data-bs-toggle="dropdown" aria-expanded="false">
                                                                    <i className="bi-three-dots-vertical" />
                                                                </button>
                                                                <div className="dropdown-menu dropdown-menu-sm dropdown-menu-end" aria-labelledby="connectionsListDropdown5">
                                                                    <a className="dropdown-item" href="#">Rename project </a>
                                                                    <a className="dropdown-item" href="#">Add to favorites</a>
                                                                    <a className="dropdown-item" href="#">Archive project</a>
                                                                    <div className="dropdown-divider" />
                                                                    <a className="dropdown-item text-danger" href="#">Delete</a>
                                                                </div>
                                                            </div>
                                                            {/* End Dropdown */}
                                                        </div>
                                                        {/* End Col */}
                                                        <div className="col-sm mb-2 mb-sm-0">
                                                            {/* Badges */}
                                                            <ul className="list-inline mb-0">
                                                                <li className="list-inline-item"><a className="badge bg-soft-secondary text-secondary p-2" href="#">Human resources</a></li>
                                                                <li className="list-inline-item"><a className="badge bg-soft-secondary text-secondary p-2" href="#">Legal</a></li>
                                                            </ul>
                                                            {/* End Badges */}
                                                        </div>
                                                        {/* End Col */}
                                                        <div className="col-sm-auto">
                                                            {/* Form Check */}
                                                            <div className="form-check form-check-switch">
                                                                <input className="form-check-input" type="checkbox" defaultValue id="connectionsListCheckbox5" defaultChecked />
                                                                <label className="form-check-label btn btn-sm" htmlFor="connectionsListCheckbox5">
                                                                    <span className="form-check-default">
                                                                        <i className="bi-person-plus-fill" /> Connect
                                                                    </span>
                                                                    <span className="form-check-active">
                                                                        <i className="bi-check-lg me-2" /> Connected
                                                                    </span>
                                                                </label>
                                                            </div>
                                                            {/* End Form Check */}
                                                        </div>
                                                        {/* End Col */}
                                                    </div>
                                                    {/* End Row */}
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Card */}
                                    </div>
                                    {/* End Col */}
                                    <div className="col mb-3">
                                        {/* Card */}
                                        <div className="card card-body">
                                            <div className="d-flex align-items-md-center">
                                                <div className="flex-shrink-0">
                                                    {/* Avatar */}
                                                    <div className="avatar avatar-lg avatar-circle">
                                                        <img className="avatar-img" src="./assets/img/160x160/img5.jpg" alt="Image Description" />
                                                        <span className="avatar-status avatar-sm-status avatar-status-success" />
                                                    </div>
                                                    {/* End Avatar */}
                                                </div>
                                                <div className="flex-grow-1 ms-3">
                                                    <div className="row align-items-md-center">
                                                        <div className="col-9 col-md-4 col-lg-3 mb-2 mb-md-0">
                                                            <h4 className="mb-1">
                                                                <a className="text-dark" href="#">Finch Hoot</a>
                                                            </h4>
                                                            <span className="d-block">
                                                                <i className="bi-building me-1" />
                                                                <span>Dev</span>
                                                            </span>
                                                        </div>
                                                        {/* End Col */}
                                                        <div className="col-3 col-md-auto order-md-last text-end ms-n3">
                                                            {/* Dropdown */}
                                                            <div className="dropdown">
                                                                <button type="button" className="btn btn-ghost-secondary btn-icon btn-sm rounded-circle" id="connectionsListDropdown6" data-bs-toggle="dropdown" aria-expanded="false">
                                                                    <i className="bi-three-dots-vertical" />
                                                                </button>
                                                                <div className="dropdown-menu dropdown-menu-sm dropdown-menu-end" aria-labelledby="connectionsListDropdown6">
                                                                    <a className="dropdown-item" href="#">Rename project </a>
                                                                    <a className="dropdown-item" href="#">Add to favorites</a>
                                                                    <a className="dropdown-item" href="#">Archive project</a>
                                                                    <div className="dropdown-divider" />
                                                                    <a className="dropdown-item text-danger" href="#">Delete</a>
                                                                </div>
                                                            </div>
                                                            {/* End Dropdown */}
                                                        </div>
                                                        {/* End Col */}
                                                        <div className="col-sm mb-2 mb-sm-0">
                                                            {/* Badges */}
                                                            <ul className="list-inline mb-0">
                                                                <li className="list-inline-item"><a className="badge bg-soft-secondary text-secondary p-2" href="#">JS</a></li>
                                                                <li className="list-inline-item"><a className="badge bg-soft-secondary text-secondary p-2" href="#">Vue.js</a></li>
                                                                <li className="list-inline-item"><a className="badge bg-soft-secondary text-secondary p-2" href="#">HTML5</a></li>
                                                            </ul>
                                                            {/* End Badges */}
                                                        </div>
                                                        {/* End Col */}
                                                        <div className="col-sm-auto">
                                                            {/* Form Check */}
                                                            <div className="form-check form-check-switch">
                                                                <input className="form-check-input" type="checkbox" defaultValue id="connectionsListCheckbox6" defaultChecked />
                                                                <label className="form-check-label btn btn-sm" htmlFor="connectionsListCheckbox6">
                                                                    <span className="form-check-default">
                                                                        <i className="bi-person-plus-fill" /> Connect
                                                                    </span>
                                                                    <span className="form-check-active">
                                                                        <i className="bi-check-lg me-2" /> Connected
                                                                    </span>
                                                                </label>
                                                            </div>
                                                            {/* End Form Check */}
                                                        </div>
                                                        {/* End Col */}
                                                    </div>
                                                    {/* End Row */}
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Card */}
                                    </div>
                                    {/* End Col */}
                                    <div className="col mb-3">
                                        {/* Card */}
                                        <div className="card card-body">
                                            <div className="d-flex align-items-md-center">
                                                <div className="flex-shrink-0">
                                                    {/* Avatar */}
                                                    <div className="avatar avatar-lg avatar-circle">
                                                        <img className="avatar-img" src="./assets/img/160x160/img6.jpg" alt="Image Description" />
                                                        <span className="avatar-status avatar-sm-status avatar-status-danger" />
                                                    </div>
                                                    {/* End Avatar */}
                                                </div>
                                                <div className="flex-grow-1 ms-3">
                                                    <div className="row align-items-md-center">
                                                        <div className="col-9 col-md-4 col-lg-3 mb-2 mb-md-0">
                                                            <h4 className="mb-1">
                                                                <a className="text-dark" href="#">Costa Quinn</a>
                                                            </h4>
                                                            <span className="d-block">
                                                                <i className="bi-building me-1" />
                                                                <span>Research team</span>
                                                            </span>
                                                        </div>
                                                        {/* End Col */}
                                                        <div className="col-3 col-md-auto order-md-last text-end ms-n3">
                                                            {/* Dropdown */}
                                                            <div className="dropdown">
                                                                <button type="button" className="btn btn-ghost-secondary btn-icon btn-sm rounded-circle" id="connectionsListDropdown7" data-bs-toggle="dropdown" aria-expanded="false">
                                                                    <i className="bi-three-dots-vertical" />
                                                                </button>
                                                                <div className="dropdown-menu dropdown-menu-sm dropdown-menu-end" aria-labelledby="connectionsListDropdown7">
                                                                    <a className="dropdown-item" href="#">Rename project </a>
                                                                    <a className="dropdown-item" href="#">Add to favorites</a>
                                                                    <a className="dropdown-item" href="#">Archive project</a>
                                                                    <div className="dropdown-divider" />
                                                                    <a className="dropdown-item text-danger" href="#">Delete</a>
                                                                </div>
                                                            </div>
                                                            {/* End Dropdown */}
                                                        </div>
                                                        {/* End Col */}
                                                        <div className="col-sm mb-2 mb-sm-0">
                                                            {/* Badges */}
                                                            <ul className="list-inline mb-0">
                                                                <li className="list-inline-item"><a className="badge bg-soft-secondary text-secondary p-2" href="#">SEO</a></li>
                                                            </ul>
                                                            {/* End Badges */}
                                                        </div>
                                                        {/* End Col */}
                                                        <div className="col-sm-auto">
                                                            {/* Form Check */}
                                                            <div className="form-check form-check-switch">
                                                                <input className="form-check-input" type="checkbox" defaultValue id="connectionsListCheckbox7" />
                                                                <label className="form-check-label btn btn-sm" htmlFor="connectionsListCheckbox7">
                                                                    <span className="form-check-default">
                                                                        <i className="bi-person-plus-fill" /> Connect
                                                                    </span>
                                                                    <span className="form-check-active">
                                                                        <i className="bi-check-lg me-2" /> Connected
                                                                    </span>
                                                                </label>
                                                            </div>
                                                            {/* End Form Check */}
                                                        </div>
                                                        {/* End Col */}
                                                    </div>
                                                    {/* End Row */}
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Card */}
                                    </div>
                                    {/* End Col */}
                                </div>
                                {/* End Row */}
                            </div>
                        </div>
                        {/* End Tab Content */}
                    </div>
                    {/* End Col */}
                </div>
                {/* End Row */}
            </div>
            {/* End Content */}
        </>
    )
}

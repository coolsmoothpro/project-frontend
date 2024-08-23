import React from 'react'
import Header from './Components/Header'

export default function Projects() {
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
                                <h3 className="mb-0">8 projects</h3>
                            </div>
                            {/* End Col */}
                            <div className="col-auto">
                                {/* Nav */}
                                <ul className="nav nav-segment" id="projectsTab" role="tablist">
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
                        {/* End Filter */}
                        {/* Tab Content */}
                        <div className="tab-content" id="projectsTabContent">
                            <div className="tab-pane fade show active" id="grid" role="tabpanel" aria-labelledby="grid-tab">
                                <div className="row row-cols-1 row-cols-md-2">
                                    <div className="col mb-3 mb-lg-5">
                                        {/* Card */}
                                        <div className="card card-hover-shadow text-center h-100">
                                            <div className="card-progress-wrap">
                                                {/* Progress */}
                                                <div className="progress card-progress">
                                                    <div className="progress-bar" role="progressbar" style={{ width: '0%' }} aria-valuenow={0} aria-valuemin={0} aria-valuemax={100} />
                                                </div>
                                                {/* End Progress */}
                                            </div>
                                            {/* Body */}
                                            <div className="card-body">
                                                <div className="row align-items-center text-start mb-4">
                                                    <div className="col">
                                                        <span className="badge bg-soft-secondary text-secondary p-2">To do</span>
                                                    </div>
                                                    {/* End Col */}
                                                    <div className="col-auto">
                                                        {/* Dropdown */}
                                                        <div className="dropdown">
                                                            <button type="button" className="btn btn-ghost-secondary btn-icon btn-sm card-dropdown-btn rounded-circle" id="projectsGridDropdown8" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <i className="bi-three-dots-vertical" />
                                                            </button>
                                                            <div className="dropdown-menu dropdown-menu-end" aria-labelledby="projectsGridDropdown8">
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
                                                </div>
                                                <div className="d-flex justify-content-center mb-2">
                                                    {/* Avatar */}
                                                    <img className="avatar avatar-lg" src="./assets/svg/brands/google-webdev-icon.svg" alt="Image Description" />
                                                </div>
                                                <div className="mb-4">
                                                    <h2 className="mb-1">Webdev</h2>
                                                    <span className="fs-5">Updated 2 hours ago</span>
                                                </div>
                                                <small className="card-subtitle">Members</small>
                                                <div className="d-flex justify-content-center">
                                                    {/* Avatar Group */}
                                                    <div className="avatar-group avatar-group-sm avatar-circle card-avatar-group">
                                                        <a className="avatar" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Finch Hoot">
                                                            <img className="avatar-img" src="./assets/img/160x160/img5.jpg" alt="Image Description" />
                                                        </a>
                                                        <a className="avatar avatar-soft-dark" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Bob Bardly">
                                                            <span className="avatar-initials">B</span>
                                                        </a>
                                                        <a className="avatar" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Clarice Boone">
                                                            <img className="avatar-img" src="./assets/img/160x160/img7.jpg" alt="Image Description" />
                                                        </a>
                                                        <a className="avatar avatar-soft-dark" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Adam Keep">
                                                            <span className="avatar-initials">A</span>
                                                        </a>
                                                    </div>
                                                    {/* End Avatar Group */}
                                                </div>
                                                <a className="stretched-link" href="#" />
                                            </div>
                                            {/* End Body */}
                                            {/* Footer */}
                                            <div className="card-footer">
                                                {/* Stats */}
                                                <div className="row col-divider">
                                                    <div className="col">
                                                        <span className="h4">19</span>
                                                        <span className="d-block fs-5">Tasks</span>
                                                    </div>
                                                    {/* End Col */}
                                                    <div className="col">
                                                        <span className="h4">33</span>
                                                        <span className="d-block fs-5">Completed</span>
                                                    </div>
                                                    {/* End Col */}
                                                    <div className="col">
                                                        <span className="h4">10</span>
                                                        <span className="d-block fs-5">Days left</span>
                                                    </div>
                                                    {/* End Col */}
                                                </div>
                                                {/* End Stats */}
                                            </div>
                                            {/* End Footer */}
                                        </div>
                                        {/* End Card */}
                                    </div>
                                    <div className="col mb-3 mb-lg-5">
                                        {/* Card */}
                                        <div className="card card-hover-shadow text-center h-100">
                                            {/* Progress */}
                                            <div className="card-progress-wrap">
                                                <div className="progress card-progress">
                                                    <div className="progress-bar" role="progressbar" style={{ width: '45%' }} aria-valuenow={45} aria-valuemin={0} aria-valuemax={100} />
                                                </div>
                                            </div>
                                            {/* End Progress */}
                                            {/* Body */}
                                            <div className="card-body">
                                                <div className="row align-items-center text-start mb-4">
                                                    <div className="col">
                                                        <span className="badge bg-soft-primary text-primary p-2">In progress</span>
                                                    </div>
                                                    {/* End Col */}
                                                    <div className="col-auto">
                                                        {/* Dropdown */}
                                                        <div className="dropdown">
                                                            <button type="button" className="btn btn-ghost-secondary btn-icon btn-sm card-dropdown-btn rounded-circle" id="projectsGridDropdown1" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <i className="bi-three-dots-vertical" />
                                                            </button>
                                                            <div className="dropdown-menu dropdown-menu-end" aria-labelledby="projectsGridDropdown1">
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
                                                </div>
                                                <div className="d-flex justify-content-center mb-2">
                                                    {/* Avatar */}
                                                    <img className="avatar avatar-lg" src="./assets/svg/brands/spec-icon.svg" alt="Image Description" />
                                                </div>
                                                <div className="mb-4">
                                                    <h2 className="mb-1">Get a complete store audit</h2>
                                                    <span className="fs-5">Updated 1 day ago</span>
                                                </div>
                                                <small className="card-subtitle">Members</small>
                                                <div className="d-flex justify-content-center">
                                                    {/* Avatar Group */}
                                                    <div className="avatar-group avatar-group-sm avatar-circle card-avatar-group">
                                                        <a className="avatar" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Ella Lauda">
                                                            <img className="avatar-img" src="./assets/img/160x160/img9.jpg" alt="Image Description" />
                                                        </a>
                                                        <a className="avatar" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="David Harrison">
                                                            <img className="avatar-img" src="./assets/img/160x160/img3.jpg" alt="Image Description" />
                                                        </a>
                                                        <a className="avatar avatar-soft-dark" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Antony Taylor">
                                                            <span className="avatar-initials">A</span>
                                                        </a>
                                                        <a className="avatar avatar-soft-info" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Sara Iwens">
                                                            <span className="avatar-initials">S</span>
                                                        </a>
                                                        <a className="avatar" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Finch Hoot">
                                                            <img className="avatar-img" src="./assets/img/160x160/img5.jpg" alt="Image Description" />
                                                        </a>
                                                        <a className="avatar avatar-light avatar-circle" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Sam Kart, Amanda Harvey and 1 more">
                                                            <span className="avatar-initials">+3</span>
                                                        </a>
                                                    </div>
                                                    {/* End Avatar Group */}
                                                </div>
                                                <a className="stretched-link" href="#" />
                                            </div>
                                            {/* End Body */}
                                            {/* Footer */}
                                            <div className="card-footer">
                                                {/* Stats */}
                                                <div className="row col-divider">
                                                    <div className="col">
                                                        <span className="h4">4</span>
                                                        <span className="d-block fs-5">Tasks</span>
                                                    </div>
                                                    {/* End Col */}
                                                    <div className="col">
                                                        <span className="h4">8</span>
                                                        <span className="d-block fs-5">Completed</span>
                                                    </div>
                                                    {/* End Col */}
                                                    <div className="col">
                                                        <span className="h4">18</span>
                                                        <span className="d-block fs-5">Days left</span>
                                                    </div>
                                                    {/* End Col */}
                                                </div>
                                                {/* End Stats */}
                                            </div>
                                            {/* End Footer */}
                                        </div>
                                        {/* End Card */}
                                    </div>
                                    <div className="col mb-3 mb-lg-5">
                                        {/* Card */}
                                        <div className="card card-hover-shadow text-center h-100">
                                            {/* Progress */}
                                            <div className="card-progress-wrap">
                                                <div className="progress card-progress">
                                                    <div className="progress-bar bg-success" role="progressbar" style={{ width: '100%' }} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
                                                </div>
                                            </div>
                                            {/* End Progress */}
                                            {/* Body */}
                                            <div className="card-body">
                                                <div className="row align-items-center text-start mb-4">
                                                    <div className="col">
                                                        <span className="badge bg-soft-success text-success p-2">Completed</span>
                                                    </div>
                                                    <div className="col-auto">
                                                        {/* Dropdown */}
                                                        <div className="dropdown">
                                                            <button type="button" className="btn btn-ghost-secondary btn-icon btn-sm card-dropdown-btn rounded-circle" id="projectsGridDropdown6" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <i className="bi-three-dots-vertical" />
                                                            </button>
                                                            <div className="dropdown-menu dropdown-menu-end" aria-labelledby="projectsGridDropdown6">
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
                                                </div>
                                                <div className="d-flex justify-content-center mb-2">
                                                    {/* Avatar */}
                                                    <img className="avatar avatar-lg" src="./assets/svg/brands/capsule-icon.svg" alt="Image Description" />
                                                </div>
                                                <div className="mb-4">
                                                    <h2 className="mb-1">Build stronger customer relationships</h2>
                                                    <span className="fs-5">Updated 1 day ago</span>
                                                </div>
                                                <small className="card-subtitle">Members</small>
                                                <div className="d-flex justify-content-center">
                                                    {/* Avatar Group */}
                                                    <div className="avatar-group avatar-group-sm avatar-circle card-avatar-group">
                                                        <a className="avatar" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Amanda Harvey">
                                                            <img className="avatar-img" src="./assets/img/160x160/img10.jpg" alt="Image Description" />
                                                        </a>
                                                        <a className="avatar" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="David Harrison">
                                                            <img className="avatar-img" src="./assets/img/160x160/img3.jpg" alt="Image Description" />
                                                        </a>
                                                        <a className="avatar avatar-soft-info" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Lisa Iston">
                                                            <span className="avatar-initials">L</span>
                                                        </a>
                                                        <a className="avatar" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Sam Kart">
                                                            <img className="avatar-img" src="./assets/img/160x160/img4.jpg" alt="Image Description" />
                                                        </a>
                                                        <a className="avatar avatar-soft-dark" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Zack Ins">
                                                            <span className="avatar-initials">Z</span>
                                                        </a>
                                                        <a className="avatar avatar-light avatar-circle" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Lewis Clarke, Chris Mathew and 3 more">
                                                            <span className="avatar-initials">+5</span>
                                                        </a>
                                                    </div>
                                                    {/* End Avatar Group */}
                                                </div>
                                                <a className="stretched-link" href="#" />
                                            </div>
                                            {/* End Body */}
                                            {/* Footer */}
                                            <div className="card-footer">
                                                {/* Stats */}
                                                <div className="row col-divider">
                                                    <div className="col">
                                                        <span className="h4">7</span>
                                                        <span className="d-block fs-5">Tasks</span>
                                                    </div>
                                                    {/* End Col */}
                                                    <div className="col">
                                                        <span className="h4">7</span>
                                                        <span className="d-block fs-5">Completed</span>
                                                    </div>
                                                    {/* End Col */}
                                                    <div className="col">
                                                        <span className="h4">0</span>
                                                        <span className="d-block fs-5">Days left</span>
                                                    </div>
                                                    {/* End Col */}
                                                </div>
                                                {/* End Stats */}
                                            </div>
                                            {/* End Footer */}
                                        </div>
                                        {/* End Card */}
                                    </div>
                                    <div className="col mb-3 mb-lg-5">
                                        {/* Card */}
                                        <div className="card card-hover-shadow text-center h-100">
                                            {/* Progress */}
                                            <div className="card-progress-wrap">
                                                <div className="progress card-progress">
                                                    <div className="progress-bar" role="progressbar" style={{ width: '57%' }} aria-valuenow={57} aria-valuemin={0} aria-valuemax={100} />
                                                </div>
                                            </div>
                                            {/* End Progress */}
                                            {/* Body */}
                                            <div className="card-body">
                                                <div className="row align-items-center text-start mb-4">
                                                    <div className="col">
                                                        <span className="badge bg-soft-primary text-primary p-2">In progress</span>
                                                    </div>
                                                    {/* End Col */}
                                                    <div className="col-auto">
                                                        {/* Dropdown */}
                                                        <div className="dropdown">
                                                            <button type="button" className="btn btn-ghost-secondary btn-icon btn-sm card-dropdown-btn rounded-circle" id="projectsGridDropdown2" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <i className="bi-three-dots-vertical" />
                                                            </button>
                                                            <div className="dropdown-menu dropdown-menu-end" aria-labelledby="projectsGridDropdown2">
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
                                                </div>
                                                <div className="d-flex justify-content-center mb-2">
                                                    {/* Avatar */}
                                                    <img className="avatar avatar-lg" src="./assets/svg/brands/prosperops-icon.svg" alt="Image Description" />
                                                </div>
                                                <div className="mb-4">
                                                    <h2 className="mb-1">Cloud computing</h2>
                                                    <span className="fs-5">Updated 2 days ago</span>
                                                </div>
                                                <small className="card-subtitle">Members</small>
                                                <div className="d-flex justify-content-center">
                                                    {/* Avatar Group */}
                                                    <div className="avatar-group avatar-group-sm avatar-circle card-avatar-group">
                                                        <a className="avatar" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Finch Hoot">
                                                            <img className="avatar-img" src="./assets/img/160x160/img5.jpg" alt="Image Description" />
                                                        </a>
                                                        <a className="avatar avatar-soft-dark" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Bob Bardly">
                                                            <span className="avatar-initials">B</span>
                                                        </a>
                                                        <a className="avatar" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Linda Bates">
                                                            <img className="avatar-img" src="./assets/img/160x160/img8.jpg" alt="Image Description" />
                                                        </a>
                                                        <a className="avatar" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Ella Lauda">
                                                            <img className="avatar-img" src="./assets/img/160x160/img9.jpg" alt="Image Description" />
                                                        </a>
                                                    </div>
                                                    {/* End Avatar Group */}
                                                </div>
                                                <a className="stretched-link" href="#" />
                                            </div>
                                            {/* End Body */}
                                            {/* Footer */}
                                            <div className="card-footer">
                                                {/* Stats */}
                                                <div className="row col-divider">
                                                    <div className="col">
                                                        <span className="h4">4</span>
                                                        <span className="d-block fs-5">Tasks</span>
                                                    </div>
                                                    {/* End Col */}
                                                    <div className="col">
                                                        <span className="h4">8</span>
                                                        <span className="d-block fs-5">Completed</span>
                                                    </div>
                                                    {/* End Col */}
                                                    <div className="col">
                                                        <span className="h4">30</span>
                                                        <span className="d-block fs-5">Days left</span>
                                                    </div>
                                                    {/* End Col */}
                                                </div>
                                                {/* End Stats */}
                                            </div>
                                            {/* End Footer */}
                                        </div>
                                        {/* End Card */}
                                    </div>
                                    <div className="col mb-3 mb-lg-5">
                                        {/* Card */}
                                        <div className="card card-hover-shadow text-center h-100">
                                            {/* Progress */}
                                            <div className="card-progress-wrap">
                                                <div className="progress card-progress">
                                                    <div className="progress-bar" role="progressbar" style={{ width: '59%' }} aria-valuenow={59} aria-valuemin={0} aria-valuemax={100} />
                                                </div>
                                            </div>
                                            {/* End Progress */}
                                            {/* Body */}
                                            <div className="card-body">
                                                <div className="row align-items-center text-start mb-4">
                                                    <div className="col">
                                                        <span className="badge bg-soft-primary text-primary p-2">In progress</span>
                                                    </div>
                                                    {/* End Col */}
                                                    <div className="col-auto">
                                                        {/* Dropdown */}
                                                        <div className="dropdown">
                                                            <button type="button" className="btn btn-ghost-secondary btn-icon btn-sm card-dropdown-btn rounded-circle" id="projectsGridDropdown4" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <i className="bi-three-dots-vertical" />
                                                            </button>
                                                            <div className="dropdown-menu dropdown-menu-end" aria-labelledby="projectsGridDropdown4">
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
                                                </div>
                                                <div className="d-flex justify-content-center mb-2">
                                                    {/* Avatar */}
                                                    <img className="avatar avatar-lg" src="./assets/svg/brands/mailchimp-icon.svg" alt="Image Description" />
                                                </div>
                                                <div className="mb-4">
                                                    <h2 className="mb-1">Update subscription method</h2>
                                                    <span className="fs-5">Updated 2 days ago</span>
                                                </div>
                                                <small className="card-subtitle">Members</small>
                                                <div className="d-flex justify-content-center">
                                                    {/* Avatar Group */}
                                                    <div className="avatar-group avatar-group-sm avatar-circle card-avatar-group">
                                                        <a className="avatar" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Costa Quinn">
                                                            <img className="avatar-img" src="./assets/img/160x160/img6.jpg" alt="Image Description" />
                                                        </a>
                                                        <a className="avatar" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Clarice Boone">
                                                            <img className="avatar-img" src="./assets/img/160x160/img7.jpg" alt="Image Description" />
                                                        </a>
                                                        <a className="avatar avatar-soft-dark" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Adam Keep">
                                                            <span className="avatar-initials">A</span>
                                                        </a>
                                                    </div>
                                                    {/* End Avatar Group */}
                                                </div>
                                                <a className="stretched-link" href="#" />
                                            </div>
                                            {/* End Body */}
                                            {/* Footer */}
                                            <div className="card-footer">
                                                {/* Stats */}
                                                <div className="row col-divider">
                                                    <div className="col">
                                                        <span className="h4">25</span>
                                                        <span className="d-block fs-5">Tasks</span>
                                                    </div>
                                                    {/* End Col */}
                                                    <div className="col">
                                                        <span className="h4">30</span>
                                                        <span className="d-block fs-5">Completed</span>
                                                    </div>
                                                    {/* End Col */}
                                                    <div className="col">
                                                        <span className="h4">20</span>
                                                        <span className="d-block fs-5">Days left</span>
                                                    </div>
                                                    {/* End Col */}
                                                </div>
                                                {/* End Stats */}
                                            </div>
                                            {/* End Footer */}
                                        </div>
                                        {/* End Card */}
                                    </div>
                                    <div className="col mb-3 mb-lg-5">
                                        {/* Card */}
                                        <div className="card card-hover-shadow text-center h-100">
                                            {/* Progress */}
                                            <div className="card-progress-wrap">
                                                <div className="progress card-progress">
                                                    <div className="progress-bar" role="progressbar" style={{ width: '0%' }} aria-valuenow={0} aria-valuemin={0} aria-valuemax={100} />
                                                </div>
                                            </div>
                                            {/* End Progress */}
                                            {/* Body */}
                                            <div className="card-body">
                                                <div className="row align-items-center text-start mb-4">
                                                    <div className="col">
                                                        <span className="badge bg-soft-secondary text-secondary p-2">To do</span>
                                                    </div>
                                                    <div className="col-auto">
                                                        {/* Dropdown */}
                                                        <div className="dropdown">
                                                            <button type="button" className="btn btn-ghost-secondary btn-icon btn-sm card-dropdown-btn rounded-circle" id="projectsGridDropdown7" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <i className="bi-three-dots-vertical" />
                                                            </button>
                                                            <div className="dropdown-menu dropdown-menu-end" aria-labelledby="projectsGridDropdown7">
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
                                                </div>
                                                <div className="d-flex justify-content-center mb-2">
                                                    {/* Avatar */}
                                                    <span className="avatar avatar-lg avatar-soft-info avatar-circle">
                                                        <span className="avatar-initials">I</span>
                                                    </span>
                                                    {/* End Avatar */}
                                                </div>
                                                <div className="mb-4">
                                                    <h2 className="mb-1">Improve social banners</h2>
                                                    <span className="fs-5">Updated 1 week ago</span>
                                                </div>
                                                <small className="card-subtitle">Members</small>
                                                <div className="d-flex justify-content-center">
                                                    {/* Avatar Group */}
                                                    <div className="avatar-group avatar-group-sm avatar-circle card-avatar-group">
                                                        <a className="avatar" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Costa Quinn">
                                                            <img className="avatar-img" src="./assets/img/160x160/img6.jpg" alt="Image Description" />
                                                        </a>
                                                        <a className="avatar avatar-soft-info" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Bob Bardly">
                                                            <span className="avatar-initials">B</span>
                                                        </a>
                                                        <a className="avatar" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Clarice Boone">
                                                            <img className="avatar-img" src="./assets/img/160x160/img7.jpg" alt="Image Description" />
                                                        </a>
                                                        <a className="avatar" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Sam Kart">
                                                            <img className="avatar-img" src="./assets/img/160x160/img4.jpg" alt="Image Description" />
                                                        </a>
                                                        <a className="avatar avatar-soft-primary" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Daniel Cs.">
                                                            <span className="avatar-initials">D</span>
                                                        </a>
                                                    </div>
                                                    {/* End Avatar Group */}
                                                </div>
                                                <a className="stretched-link" href="#" />
                                            </div>
                                            {/* End Body */}
                                            {/* Footer */}
                                            <div className="card-footer">
                                                {/* Stats */}
                                                <div className="row col-divider">
                                                    <div className="col">
                                                        <span className="h4">9</span>
                                                        <span className="d-block fs-5">Tasks</span>
                                                    </div>
                                                    {/* End Col */}
                                                    <div className="col">
                                                        <span className="h4">16</span>
                                                        <span className="d-block fs-5">Completed</span>
                                                    </div>
                                                    {/* End Col */}
                                                    <div className="col">
                                                        <span className="h4">21</span>
                                                        <span className="d-block fs-5">Days left</span>
                                                    </div>
                                                    {/* End Col */}
                                                </div>
                                                {/* End Stats */}
                                            </div>
                                            {/* End Footer */}
                                        </div>
                                        {/* End Card */}
                                    </div>
                                    <div className="col mb-3 mb-lg-5">
                                        {/* Card */}
                                        <div className="card card-hover-shadow text-center h-100">
                                            {/* Progress */}
                                            <div className="card-progress-wrap">
                                                <div className="progress card-progress">
                                                    <div className="progress-bar bg-success" role="progressbar" style={{ width: '100%' }} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
                                                </div>
                                            </div>
                                            {/* End Progress */}
                                            {/* Body */}
                                            <div className="card-body">
                                                <div className="row align-items-center text-start mb-4">
                                                    <div className="col">
                                                        <span className="badge bg-soft-success text-success p-2">Completed</span>
                                                    </div>
                                                    <div className="col-auto">
                                                        {/* Dropdown */}
                                                        <div className="dropdown">
                                                            <button type="button" className="btn btn-ghost-secondary btn-icon btn-sm card-dropdown-btn rounded-circle" id="projectsGridDropdown3" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <i className="bi-three-dots-vertical" />
                                                            </button>
                                                            <div className="dropdown-menu dropdown-menu-end" aria-labelledby="projectsGridDropdown3">
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
                                                </div>
                                                <div className="d-flex justify-content-center mb-2">
                                                    {/* Avatar */}
                                                    <img className="avatar avatar-lg" src="./assets/svg/brands/figma-icon.svg" alt="Image Description" />
                                                </div>
                                                <div className="mb-4">
                                                    <h2 className="mb-1">Create a new theme</h2>
                                                    <span className="fs-5">Updated 1 week ago</span>
                                                </div>
                                                <small className="card-subtitle">Members</small>
                                                <div className="d-flex justify-content-center">
                                                    {/* Avatar Group */}
                                                    <div className="avatar-group avatar-group-sm avatar-circle card-avatar-group">
                                                        <a className="avatar" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Costa Quinn">
                                                            <img className="avatar-img" src="./assets/img/160x160/img6.jpg" alt="Image Description" />
                                                        </a>
                                                        <a className="avatar" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Clarice Boone">
                                                            <img className="avatar-img" src="./assets/img/160x160/img7.jpg" alt="Image Description" />
                                                        </a>
                                                        <a className="avatar avatar-soft-dark" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Zack Ins">
                                                            <span className="avatar-initials">Z</span>
                                                        </a>
                                                    </div>
                                                    {/* End Avatar Group */}
                                                </div>
                                                <a className="stretched-link" href="#" />
                                            </div>
                                            {/* End Body */}
                                            {/* Footer */}
                                            <div className="card-footer">
                                                {/* Stats */}
                                                <div className="row col-divider">
                                                    <div className="col">
                                                        <span className="h4">7</span>
                                                        <span className="d-block fs-5">Tasks</span>
                                                    </div>
                                                    {/* End Col */}
                                                    <div className="col">
                                                        <span className="h4">7</span>
                                                        <span className="d-block fs-5">Completed</span>
                                                    </div>
                                                    {/* End Col */}
                                                    <div className="col">
                                                        <span className="h4">0</span>
                                                        <span className="d-block fs-5">Days left</span>
                                                    </div>
                                                    {/* End Col */}
                                                </div>
                                                {/* End Stats */}
                                            </div>
                                            {/* End Footer */}
                                        </div>
                                        {/* End Card */}
                                    </div>
                                    <div className="col mb-3 mb-lg-5">
                                        {/* Card */}
                                        <div className="card card-hover-shadow text-center h-100">
                                            {/* Progress */}
                                            <div className="card-progress-wrap">
                                                <div className="progress card-progress">
                                                    <div className="progress-bar" role="progressbar" style={{ width: '77%' }} aria-valuenow={77} aria-valuemin={0} aria-valuemax={100} />
                                                </div>
                                            </div>
                                            {/* End Progress */}
                                            {/* Body */}
                                            <div className="card-body">
                                                <div className="row align-items-center text-start mb-4">
                                                    <div className="col">
                                                        <span className="badge bg-soft-primary text-primary p-2">In progress</span>
                                                    </div>
                                                    {/* End Col */}
                                                    <div className="col-auto">
                                                        {/* Dropdown */}
                                                        <div className="dropdown">
                                                            <button type="button" className="btn btn-ghost-secondary btn-icon btn-sm card-dropdown-btn rounded-circle" id="projectsGridDropdown5" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <i className="bi-three-dots-vertical" />
                                                            </button>
                                                            <div className="dropdown-menu dropdown-menu-end" aria-labelledby="projectsGridDropdown5">
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
                                                </div>
                                                <div className="d-flex justify-content-center mb-2">
                                                    {/* Avatar */}
                                                    <span className="avatar avatar-lg avatar-soft-dark avatar-circle">
                                                        <span className="avatar-initials">N</span>
                                                    </span>
                                                    {/* End Avatar */}
                                                </div>
                                                <div className="mb-4">
                                                    <h2 className="mb-1">Notifications</h2>
                                                    <span className="fs-5">Updated 1 week ago</span>
                                                </div>
                                                <small className="card-subtitle">Members</small>
                                                <div className="d-flex justify-content-center">
                                                    {/* Avatar Group */}
                                                    <div className="avatar-group avatar-group-sm avatar-circle card-avatar-group">
                                                        <a className="avatar" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Sam Kart">
                                                            <img className="avatar-img" src="./assets/img/160x160/img4.jpg" alt="Image Description" />
                                                        </a>
                                                        <a className="avatar avatar-soft-danger" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Teresa Eyker">
                                                            <span className="avatar-initials">T</span>
                                                        </a>
                                                        <a className="avatar" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Amanda Harvey">
                                                            <img className="avatar-img" src="./assets/img/160x160/img10.jpg" alt="Image Description" />
                                                        </a>
                                                        <a className="avatar" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="David Harrison">
                                                            <img className="avatar-img" src="./assets/img/160x160/img3.jpg" alt="Image Description" />
                                                        </a>
                                                        <a className="avatar avatar-soft-warning" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Olivier L.">
                                                            <span className="avatar-initials">O</span>
                                                        </a>
                                                        <a className="avatar avatar-light avatar-circle" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Brian Halligan, Rachel Doe and 7 more">
                                                            <span className="avatar-initials">+9</span>
                                                        </a>
                                                    </div>
                                                    {/* End Avatar Group */}
                                                </div>
                                                <a className="stretched-link" href="#" />
                                            </div>
                                            {/* End Body */}
                                            {/* Footer */}
                                            <div className="card-footer">
                                                {/* Stats */}
                                                <div className="row col-divider">
                                                    <div className="col">
                                                        <span className="h4">9</span>
                                                        <span className="d-block fs-5">Tasks</span>
                                                    </div>
                                                    {/* End Col */}
                                                    <div className="col">
                                                        <span className="h4">16</span>
                                                        <span className="d-block fs-5">Completed</span>
                                                    </div>
                                                    {/* End Col */}
                                                    <div className="col">
                                                        <span className="h4">21</span>
                                                        <span className="d-block fs-5">Days left</span>
                                                    </div>
                                                    {/* End Col */}
                                                </div>
                                                {/* End Stats */}
                                            </div>
                                            {/* End Footer */}
                                        </div>
                                        {/* End Card */}
                                    </div>
                                </div>
                                {/* End Row */}
                            </div>
                            <div className="tab-pane fade" id="list" role="tabpanel" aria-labelledby="list-tab">
                                <div className="row row-cols-1">
                                    <div className="col mb-3 mb-lg-5">
                                        {/* Card */}
                                        <div className="card card-body">
                                            <div className="d-flex">
                                                {/* Avatar */}
                                                <div className="flex-shrink-0 me-3 me-lg-4">
                                                    <img className="avatar" src="./assets/svg/brands/google-webdev-icon.svg" alt="Image Description" />
                                                </div>
                                                <div className="flex-grow-1 ms-3">
                                                    <div className="row align-items-sm-center">
                                                        <div className="col">
                                                            <span className="badge bg-soft-secondary text-secondary p-2 mb-2">To do</span>
                                                            <h3 className="mb-1">Webdev</h3>
                                                        </div>
                                                        {/* End Col */}
                                                        <div className="col-md-3 d-none d-md-flex justify-content-md-end ms-n3">
                                                            {/* Avatar Group */}
                                                            <div className="avatar-group avatar-group-sm avatar-circle card-avatar-group">
                                                                <a className="avatar" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Finch Hoot">
                                                                    <img className="avatar-img" src="./assets/img/160x160/img5.jpg" alt="Image Description" />
                                                                </a>
                                                                <a className="avatar avatar-soft-dark" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Bob Bardly">
                                                                    <span className="avatar-initials">B</span>
                                                                </a>
                                                                <a className="avatar" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Clarice Boone">
                                                                    <img className="avatar-img" src="./assets/img/160x160/img7.jpg" alt="Image Description" />
                                                                </a>
                                                                <a className="avatar avatar-soft-dark" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Adam Keep">
                                                                    <span className="avatar-initials">A</span>
                                                                </a>
                                                            </div>
                                                            {/* End Avatar Group */}
                                                        </div>
                                                        <div className="col-auto">
                                                            {/* Dropdown */}
                                                            <div className="dropdown">
                                                                <button type="button" className="btn btn-ghost-secondary btn-icon btn-sm card-dropdown-btn rounded-circle" id="projectsListDropdown1" data-bs-toggle="dropdown" aria-expanded="false">
                                                                    <i className="bi-three-dots-vertical" />
                                                                </button>
                                                                <div className="dropdown-menu dropdown-menu-end" aria-labelledby="projectsListDropdown1">
                                                                    <a className="dropdown-item" href="#">Rename project </a>
                                                                    <a className="dropdown-item" href="#">Add to favorites</a>
                                                                    <a className="dropdown-item" href="#">Archive project</a>
                                                                    <div className="dropdown-divider" />
                                                                    <a className="dropdown-item text-danger" href="#">Delete</a>
                                                                </div>
                                                            </div>
                                                            {/* End Unfold */}
                                                        </div>
                                                    </div>
                                                    {/* End Row */}
                                                    {/* Stats */}
                                                    <ul className="list-inline">
                                                        <li className="list-inline-item">
                                                            <span className="fs-5">Updated:</span>
                                                            <span className="fw-semibold text-dark">2 hours ago</span>
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <span className="fs-5">Tasks:</span>
                                                            <span className="fw-semibold text-dark">19</span>
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <span className="fs-5">Completed:</span>
                                                            <span className="fw-semibold text-dark">33</span>
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <span className="fs-5">Days left:</span>
                                                            <span className="fw-semibold text-dark">10</span>
                                                        </li>
                                                    </ul>
                                                    {/* End Stats */}
                                                    {/* Progress */}
                                                    <div className="progress card-progress">
                                                        <div className="progress-bar" role="progressbar" style={{ width: '0%' }} aria-valuenow={0} aria-valuemin={0} aria-valuemax={100} />
                                                    </div>
                                                    {/* End Progress */}
                                                    <a className="stretched-link" href="#" />
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Card */}
                                    </div>
                                    <div className="col mb-3 mb-lg-5">
                                        {/* Card */}
                                        <div className="card card-body">
                                            <div className="d-flex">
                                                {/* Avatar */}
                                                <div className="flex-shrink-0 me-3 me-lg-4">
                                                    <img className="avatar" src="./assets/svg/brands/spec-icon.svg" alt="Image Description" />
                                                </div>
                                                <div className="flex-grow-1 ms-3">
                                                    <div className="row align-items-sm-center">
                                                        <div className="col">
                                                            <span className="badge bg-soft-primary text-primary p-2 mb-2">In progress</span>
                                                            <h3 className="mb-1">Get a complete store audit</h3>
                                                        </div>
                                                        {/* End Col */}
                                                        <div className="col-md-3 d-none d-md-flex justify-content-md-end ms-n3">
                                                            {/* Avatar Group */}
                                                            <div className="avatar-group avatar-group-sm avatar-circle card-avatar-group">
                                                                <a className="avatar" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Ella Lauda">
                                                                    <img className="avatar-img" src="./assets/img/160x160/img9.jpg" alt="Image Description" />
                                                                </a>
                                                                <a className="avatar avatar-soft-info" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Sara Iwens">
                                                                    <span className="avatar-initials">S</span>
                                                                </a>
                                                                <a className="avatar" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Finch Hoot">
                                                                    <img className="avatar-img" src="./assets/img/160x160/img5.jpg" alt="Image Description" />
                                                                </a>
                                                                <a className="avatar avatar-light avatar-circle" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Sam Kart, Amanda Harvey and 1 more">
                                                                    <span className="avatar-initials">+5</span>
                                                                </a>
                                                            </div>
                                                            {/* End Avatar Group */}
                                                        </div>
                                                        <div className="col-auto">
                                                            {/* Dropdown */}
                                                            <div className="dropdown">
                                                                <button type="button" className="btn btn-ghost-secondary btn-icon btn-sm card-dropdown-btn rounded-circle" id="projectsListDropdown2" data-bs-toggle="dropdown" aria-expanded="false">
                                                                    <i className="bi-three-dots-vertical" />
                                                                </button>
                                                                <div className="dropdown-menu dropdown-menu-end" aria-labelledby="projectsListDropdown2">
                                                                    <a className="dropdown-item" href="#">Rename project </a>
                                                                    <a className="dropdown-item" href="#">Add to favorites</a>
                                                                    <a className="dropdown-item" href="#">Archive project</a>
                                                                    <div className="dropdown-divider" />
                                                                    <a className="dropdown-item text-danger" href="#">Delete</a>
                                                                </div>
                                                            </div>
                                                            {/* End Unfold */}
                                                        </div>
                                                    </div>
                                                    {/* End Row */}
                                                    {/* Stats */}
                                                    <ul className="list-inline">
                                                        <li className="list-inline-item">
                                                            <span className="fs-5">Updated:</span>
                                                            <span className="fw-semibold text-dark">1 day ago</span>
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <span className="fs-5">Tasks:</span>
                                                            <span className="fw-semibold text-dark">4</span>
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <span className="fs-5">Completed:</span>
                                                            <span className="fw-semibold text-dark">8</span>
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <span className="fs-5">Days left:</span>
                                                            <span className="fw-semibold text-dark">18</span>
                                                        </li>
                                                    </ul>
                                                    {/* End Stats */}
                                                    {/* Progress */}
                                                    <div className="progress card-progress">
                                                        <div className="progress-bar" role="progressbar" style={{ width: '45%' }} aria-valuenow={45} aria-valuemin={0} aria-valuemax={100} />
                                                    </div>
                                                    {/* End Progress */}
                                                    <a className="stretched-link" href="#" />
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Card */}
                                    </div>
                                    <div className="col mb-3 mb-lg-5">
                                        {/* Card */}
                                        <div className="card card-body">
                                            <div className="d-flex">
                                                {/* Avatar */}
                                                <div className="flex-shrink-0 me-3 me-lg-4">
                                                    <img className="avatar" src="./assets/svg/brands/capsule-icon.svg" alt="Image Description" />
                                                </div>
                                                <div className="flex-grow-1 ms-3">
                                                    <div className="row align-items-sm-center">
                                                        <div className="col">
                                                            <span className="badge bg-soft-success text-success p-2 mb-2">Completed</span>
                                                            <h3 className="mb-1">Build stronger customer relationships</h3>
                                                        </div>
                                                        {/* End Col */}
                                                        <div className="col-md-3 d-none d-md-flex justify-content-md-end ms-n3">
                                                            {/* Avatar Group */}
                                                            <div className="avatar-group avatar-group-sm avatar-circle card-avatar-group">
                                                                <a className="avatar" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Amanda Harvey">
                                                                    <img className="avatar-img" src="./assets/img/160x160/img10.jpg" alt="Image Description" />
                                                                </a>
                                                                <a className="avatar" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="David Harrison">
                                                                    <img className="avatar-img" src="./assets/img/160x160/img3.jpg" alt="Image Description" />
                                                                </a>
                                                                <a className="avatar avatar-soft-dark" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Zack Ins">
                                                                    <span className="avatar-initials">Z</span>
                                                                </a>
                                                                <a className="avatar avatar-light avatar-circle" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Lewis Clarke, Chris Mathew and 3 more">
                                                                    <span className="avatar-initials">+5</span>
                                                                </a>
                                                            </div>
                                                            {/* End Avatar Group */}
                                                        </div>
                                                        <div className="col-auto">
                                                            {/* Dropdown */}
                                                            <div className="dropdown">
                                                                <button type="button" className="btn btn-ghost-secondary btn-icon btn-sm card-dropdown-btn rounded-circle" id="projectsListDropdown3" data-bs-toggle="dropdown" aria-expanded="false">
                                                                    <i className="bi-three-dots-vertical" />
                                                                </button>
                                                                <div className="dropdown-menu dropdown-menu-end" aria-labelledby="projectsListDropdown3">
                                                                    <a className="dropdown-item" href="#">Rename project </a>
                                                                    <a className="dropdown-item" href="#">Add to favorites</a>
                                                                    <a className="dropdown-item" href="#">Archive project</a>
                                                                    <div className="dropdown-divider" />
                                                                    <a className="dropdown-item text-danger" href="#">Delete</a>
                                                                </div>
                                                            </div>
                                                            {/* End Unfold */}
                                                        </div>
                                                    </div>
                                                    {/* End Row */}
                                                    {/* Stats */}
                                                    <ul className="list-inline">
                                                        <li className="list-inline-item">
                                                            <span className="fs-5">Updated:</span>
                                                            <span className="fw-semibold text-dark">1 day ago</span>
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <span className="fs-5">Tasks:</span>
                                                            <span className="fw-semibold text-dark">7</span>
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <span className="fs-5">Completed:</span>
                                                            <span className="fw-semibold text-dark">7</span>
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <span className="fs-5">Days left:</span>
                                                            <span className="fw-semibold text-dark">0</span>
                                                        </li>
                                                    </ul>
                                                    {/* End Stats */}
                                                    {/* Progress */}
                                                    <div className="progress card-progress">
                                                        <div className="progress-bar bg-success" role="progressbar" style={{ width: '100%' }} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
                                                    </div>
                                                    {/* End Progress */}
                                                    <a className="stretched-link" href="#" />
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Card */}
                                    </div>
                                    <div className="col mb-3 mb-lg-5">
                                        {/* Card */}
                                        <div className="card card-body">
                                            <div className="d-flex">
                                                {/* Avatar */}
                                                <div className="flex-shrink-0 me-3 me-lg-4">
                                                    <img className="avatar" src="./assets/svg/brands/prosperops-icon.svg" alt="Image Description" />
                                                </div>
                                                <div className="flex-grow-1 ms-3">
                                                    <div className="row align-items-sm-center">
                                                        <div className="col">
                                                            <span className="badge bg-soft-primary text-primary p-2 mb-2">In progress</span>
                                                            <h3 className="mb-1">Cloud computing</h3>
                                                        </div>
                                                        {/* End Col */}
                                                        <div className="col-md-3 d-none d-md-flex justify-content-md-end ms-n3">
                                                            {/* Avatar Group */}
                                                            <div className="avatar-group avatar-group-sm avatar-circle card-avatar-group">
                                                                <a className="avatar" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Finch Hoot">
                                                                    <img className="avatar-img" src="./assets/img/160x160/img5.jpg" alt="Image Description" />
                                                                </a>
                                                                <a className="avatar avatar-soft-dark" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Bob Bardly">
                                                                    <span className="avatar-initials">B</span>
                                                                </a>
                                                                <a className="avatar" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Linda Bates">
                                                                    <img className="avatar-img" src="./assets/img/160x160/img8.jpg" alt="Image Description" />
                                                                </a>
                                                                <a className="avatar" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Ella Lauda">
                                                                    <img className="avatar-img" src="./assets/img/160x160/img9.jpg" alt="Image Description" />
                                                                </a>
                                                            </div>
                                                            {/* End Avatar Group */}
                                                        </div>
                                                        <div className="col-auto">
                                                            {/* Dropdown */}
                                                            <div className="dropdown">
                                                                <button type="button" className="btn btn-ghost-secondary btn-icon btn-sm card-dropdown-btn rounded-circle" id="projectsListDropdown4" data-bs-toggle="dropdown" aria-expanded="false">
                                                                    <i className="bi-three-dots-vertical" />
                                                                </button>
                                                                <div className="dropdown-menu dropdown-menu-end" aria-labelledby="projectsListDropdown4">
                                                                    <a className="dropdown-item" href="#">Rename project </a>
                                                                    <a className="dropdown-item" href="#">Add to favorites</a>
                                                                    <a className="dropdown-item" href="#">Archive project</a>
                                                                    <div className="dropdown-divider" />
                                                                    <a className="dropdown-item text-danger" href="#">Delete</a>
                                                                </div>
                                                            </div>
                                                            {/* End Unfold */}
                                                        </div>
                                                    </div>
                                                    {/* End Row */}
                                                    {/* Stats */}
                                                    <ul className="list-inline">
                                                        <li className="list-inline-item">
                                                            <span className="fs-5">Updated:</span>
                                                            <span className="fw-semibold text-dark">2 hours ago</span>
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <span className="fs-5">Tasks:</span>
                                                            <span className="fw-semibold text-dark">4</span>
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <span className="fs-5">Completed:</span>
                                                            <span className="fw-semibold text-dark">8</span>
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <span className="fs-5">Days left:</span>
                                                            <span className="fw-semibold text-dark">30</span>
                                                        </li>
                                                    </ul>
                                                    {/* End Stats */}
                                                    {/* Progress */}
                                                    <div className="progress card-progress">
                                                        <div className="progress-bar" role="progressbar" style={{ width: '57%' }} aria-valuenow={57} aria-valuemin={0} aria-valuemax={100} />
                                                    </div>
                                                    {/* End Progress */}
                                                    <a className="stretched-link" href="#" />
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Card */}
                                    </div>
                                    <div className="col mb-3 mb-lg-5">
                                        {/* Card */}
                                        <div className="card card-body">
                                            <div className="d-flex">
                                                {/* Avatar */}
                                                <div className="flex-shrink-0 me-3 me-lg-4">
                                                    <img className="avatar" src="./assets/svg/brands/mailchimp-icon.svg" alt="Image Description" />
                                                </div>
                                                <div className="flex-grow-1 ms-3">
                                                    <div className="row align-items-sm-center">
                                                        <div className="col">
                                                            <span className="badge bg-soft-primary text-primary p-2 mb-2">In progress</span>
                                                            <h3 className="mb-1">Update subscription method</h3>
                                                        </div>
                                                        {/* End Col */}
                                                        <div className="col-md-3 d-none d-md-flex justify-content-md-end ms-n3">
                                                            {/* Avatar Group */}
                                                            <div className="avatar-group avatar-group-sm avatar-circle card-avatar-group">
                                                                <a className="avatar" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Costa Quinn">
                                                                    <img className="avatar-img" src="./assets/img/160x160/img6.jpg" alt="Image Description" />
                                                                </a>
                                                                <a className="avatar" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Clarice Boone">
                                                                    <img className="avatar-img" src="./assets/img/160x160/img7.jpg" alt="Image Description" />
                                                                </a>
                                                                <a className="avatar avatar-soft-dark" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Adam Keep">
                                                                    <span className="avatar-initials">A</span>
                                                                </a>
                                                            </div>
                                                            {/* End Avatar Group */}
                                                        </div>
                                                        <div className="col-auto">
                                                            {/* Dropdown */}
                                                            <div className="dropdown">
                                                                <button type="button" className="btn btn-ghost-secondary btn-icon btn-sm card-dropdown-btn rounded-circle" id="projectsListDropdown5" data-bs-toggle="dropdown" aria-expanded="false">
                                                                    <i className="bi-three-dots-vertical" />
                                                                </button>
                                                                <div className="dropdown-menu dropdown-menu-end" aria-labelledby="projectsListDropdown5">
                                                                    <a className="dropdown-item" href="#">Rename project </a>
                                                                    <a className="dropdown-item" href="#">Add to favorites</a>
                                                                    <a className="dropdown-item" href="#">Archive project</a>
                                                                    <div className="dropdown-divider" />
                                                                    <a className="dropdown-item text-danger" href="#">Delete</a>
                                                                </div>
                                                            </div>
                                                            {/* End Unfold */}
                                                        </div>
                                                    </div>
                                                    {/* End Row */}
                                                    {/* Stats */}
                                                    <ul className="list-inline">
                                                        <li className="list-inline-item">
                                                            <span className="fs-5">Updated:</span>
                                                            <span className="fw-semibold text-dark">2 days ago</span>
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <span className="fs-5">Tasks:</span>
                                                            <span className="fw-semibold text-dark">25</span>
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <span className="fs-5">Completed:</span>
                                                            <span className="fw-semibold text-dark">30</span>
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <span className="fs-5">Days left:</span>
                                                            <span className="fw-semibold text-dark">20</span>
                                                        </li>
                                                    </ul>
                                                    {/* End Stats */}
                                                    {/* Progress */}
                                                    <div className="progress card-progress">
                                                        <div className="progress-bar" role="progressbar" style={{ width: '59%' }} aria-valuenow={59} aria-valuemin={0} aria-valuemax={100} />
                                                    </div>
                                                    {/* End Progress */}
                                                    <a className="stretched-link" href="#" />
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Card */}
                                    </div>
                                    <div className="col mb-3 mb-lg-5">
                                        {/* Card */}
                                        <div className="card card-body">
                                            <div className="d-flex">
                                                {/* Avatar */}
                                                <span className="avatar avatar-soft-info avatar-circle me-3 me-lg-4">
                                                    <span className="avatar-initials">I</span>
                                                </span>
                                                {/* End Avatar */}
                                                <div className="flex-grow-1 ms-3">
                                                    <div className="row align-items-sm-center">
                                                        <div className="col">
                                                            <span className="badge bg-soft-secondary text-secondary p-2 mb-2">To do</span>
                                                            <h3 className="mb-1">Improve social banners</h3>
                                                        </div>
                                                        {/* End Col */}
                                                        <div className="col-md-3 d-none d-md-flex justify-content-md-end ms-n3">
                                                            {/* Avatar Group */}
                                                            <div className="avatar-group avatar-group-sm avatar-circle card-avatar-group">
                                                                <a className="avatar" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Costa Quinn">
                                                                    <img className="avatar-img" src="./assets/img/160x160/img6.jpg" alt="Image Description" />
                                                                </a>
                                                                <a className="avatar" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Clarice Boone">
                                                                    <img className="avatar-img" src="./assets/img/160x160/img7.jpg" alt="Image Description" />
                                                                </a>
                                                                <a className="avatar" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Sam Kart">
                                                                    <img className="avatar-img" src="./assets/img/160x160/img4.jpg" alt="Image Description" />
                                                                </a>
                                                                <a className="avatar avatar-soft-primary" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Daniel Cs.">
                                                                    <span className="avatar-initials">D</span>
                                                                </a>
                                                            </div>
                                                            {/* End Avatar Group */}
                                                        </div>
                                                        <div className="col-auto">
                                                            {/* Dropdown */}
                                                            <div className="dropdown">
                                                                <button type="button" className="btn btn-ghost-secondary btn-icon btn-sm card-dropdown-btn rounded-circle" id="projectsListDropdown6" data-bs-toggle="dropdown" aria-expanded="false">
                                                                    <i className="bi-three-dots-vertical" />
                                                                </button>
                                                                <div className="dropdown-menu dropdown-menu-end" aria-labelledby="projectsListDropdown6">
                                                                    <a className="dropdown-item" href="#">Rename project </a>
                                                                    <a className="dropdown-item" href="#">Add to favorites</a>
                                                                    <a className="dropdown-item" href="#">Archive project</a>
                                                                    <div className="dropdown-divider" />
                                                                    <a className="dropdown-item text-danger" href="#">Delete</a>
                                                                </div>
                                                            </div>
                                                            {/* End Unfold */}
                                                        </div>
                                                    </div>
                                                    {/* End Row */}
                                                    {/* Stats */}
                                                    <ul className="list-inline">
                                                        <li className="list-inline-item">
                                                            <span className="fs-5">Updated:</span>
                                                            <span className="fw-semibold text-dark">1 week ago</span>
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <span className="fs-5">Tasks:</span>
                                                            <span className="fw-semibold text-dark">9</span>
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <span className="fs-5">Completed:</span>
                                                            <span className="fw-semibold text-dark">16</span>
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <span className="fs-5">Days left:</span>
                                                            <span className="fw-semibold text-dark">21</span>
                                                        </li>
                                                    </ul>
                                                    {/* End Stats */}
                                                    {/* Progress */}
                                                    <div className="progress card-progress">
                                                        <div className="progress-bar" role="progressbar" style={{ width: '0%' }} aria-valuenow={0} aria-valuemin={0} aria-valuemax={100} />
                                                    </div>
                                                    {/* End Progress */}
                                                    <a className="stretched-link" href="#" />
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Card */}
                                    </div>
                                    <div className="col mb-3 mb-lg-5">
                                        {/* Card */}
                                        <div className="card card-body">
                                            <div className="d-flex">
                                                {/* Avatar */}
                                                <div className="flex-shrink-0 me-3 me-lg-4">
                                                    <img className="avatar" src="./assets/svg/brands/figma-icon.svg" alt="Image Description" />
                                                </div>
                                                <div className="flex-grow-1 ms-3">
                                                    <div className="row align-items-sm-center">
                                                        <div className="col">
                                                            <span className="badge bg-soft-success text-success p-2 mb-2">Completed</span>
                                                            <h3 className="mb-1">Create a new theme</h3>
                                                        </div>
                                                        {/* End Col */}
                                                        <div className="col-md-3 d-none d-md-flex justify-content-md-end ms-n3">
                                                            {/* Avatar Group */}
                                                            <div className="avatar-group avatar-group-sm avatar-circle card-avatar-group">
                                                                <a className="avatar" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Costa Quinn">
                                                                    <img className="avatar-img" src="./assets/img/160x160/img6.jpg" alt="Image Description" />
                                                                </a>
                                                                <a className="avatar" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Clarice Boone">
                                                                    <img className="avatar-img" src="./assets/img/160x160/img7.jpg" alt="Image Description" />
                                                                </a>
                                                                <a className="avatar avatar-soft-dark" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Zack Ins">
                                                                    <span className="avatar-initials">Z</span>
                                                                </a>
                                                            </div>
                                                            {/* End Avatar Group */}
                                                        </div>
                                                        <div className="col-auto">
                                                            {/* Dropdown */}
                                                            <div className="dropdown">
                                                                <button type="button" className="btn btn-ghost-secondary btn-icon btn-sm card-dropdown-btn rounded-circle" id="projectsListDropdown7" data-bs-toggle="dropdown" aria-expanded="false">
                                                                    <i className="bi-three-dots-vertical" />
                                                                </button>
                                                                <div className="dropdown-menu dropdown-menu-end" aria-labelledby="projectsListDropdown7">
                                                                    <a className="dropdown-item" href="#">Rename project </a>
                                                                    <a className="dropdown-item" href="#">Add to favorites</a>
                                                                    <a className="dropdown-item" href="#">Archive project</a>
                                                                    <div className="dropdown-divider" />
                                                                    <a className="dropdown-item text-danger" href="#">Delete</a>
                                                                </div>
                                                            </div>
                                                            {/* End Unfold */}
                                                        </div>
                                                    </div>
                                                    {/* End Row */}
                                                    {/* Stats */}
                                                    <ul className="list-inline">
                                                        <li className="list-inline-item">
                                                            <span className="fs-5">Updated:</span>
                                                            <span className="fw-semibold text-dark">1 week ago</span>
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <span className="fs-5">Tasks:</span>
                                                            <span className="fw-semibold text-dark">7</span>
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <span className="fs-5">Completed:</span>
                                                            <span className="fw-semibold text-dark">7</span>
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <span className="fs-5">Days left:</span>
                                                            <span className="fw-semibold text-dark">0</span>
                                                        </li>
                                                    </ul>
                                                    {/* End Stats */}
                                                    {/* Progress */}
                                                    <div className="progress card-progress">
                                                        <div className="progress-bar bg-success" role="progressbar" style={{ width: '100%' }} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
                                                    </div>
                                                    {/* End Progress */}
                                                    <a className="stretched-link" href="#" />
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Card */}
                                    </div>
                                    <div className="col mb-3 mb-lg-5">
                                        {/* Card */}
                                        <div className="card card-body">
                                            <div className="d-flex">
                                                {/* Avatar */}
                                                <span className="avatar avatar-soft-dark avatar-circle me-3 me-lg-4">
                                                    <span className="avatar-initials">N</span>
                                                </span>
                                                {/* End Avatar */}
                                                <div className="flex-grow-1 ms-3">
                                                    <div className="row align-items-sm-center">
                                                        <div className="col">
                                                            <span className="badge bg-soft-primary text-primary p-2 mb-2">In progress</span>
                                                            <h3 className="mb-1">Notifications</h3>
                                                        </div>
                                                        {/* End Col */}
                                                        <div className="col-md-3 d-none d-md-flex justify-content-md-end ms-n3">
                                                            {/* Avatar Group */}
                                                            <div className="avatar-group avatar-group-sm avatar-circle card-avatar-group">
                                                                <a className="avatar avatar-soft-danger" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Teresa Eyker">
                                                                    <span className="avatar-initials">T</span>
                                                                </a>
                                                                <a className="avatar" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Amanda Harvey">
                                                                    <img className="avatar-img" src="./assets/img/160x160/img10.jpg" alt="Image Description" />
                                                                </a>
                                                                <a className="avatar avatar-soft-warning" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Olivier L.">
                                                                    <span className="avatar-initials">O</span>
                                                                </a>
                                                                <a className="avatar avatar-light avatar-circle" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Brian Halligan, Rachel Doe and 7 more">
                                                                    <span className="avatar-initials">+9</span>
                                                                </a>
                                                            </div>
                                                            {/* End Avatar Group */}
                                                        </div>
                                                        <div className="col-auto">
                                                            {/* Dropdown */}
                                                            <div className="dropdown">
                                                                <button type="button" className="btn btn-ghost-secondary btn-icon btn-sm card-dropdown-btn rounded-circle" id="projectsListDropdown8" data-bs-toggle="dropdown" aria-expanded="false">
                                                                    <i className="bi-three-dots-vertical" />
                                                                </button>
                                                                <div className="dropdown-menu dropdown-menu-end" aria-labelledby="projectsListDropdown8">
                                                                    <a className="dropdown-item" href="#">Rename project </a>
                                                                    <a className="dropdown-item" href="#">Add to favorites</a>
                                                                    <a className="dropdown-item" href="#">Archive project</a>
                                                                    <div className="dropdown-divider" />
                                                                    <a className="dropdown-item text-danger" href="#">Delete</a>
                                                                </div>
                                                            </div>
                                                            {/* End Unfold */}
                                                        </div>
                                                    </div>
                                                    {/* End Row */}
                                                    {/* Stats */}
                                                    <ul className="list-inline">
                                                        <li className="list-inline-item">
                                                            <span className="fs-5">Updated:</span>
                                                            <span className="fw-semibold text-dark">1 week ago</span>
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <span className="fs-5">Tasks:</span>
                                                            <span className="fw-semibold text-dark">9</span>
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <span className="fs-5">Completed:</span>
                                                            <span className="fw-semibold text-dark">16</span>
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <span className="fs-5">Days left:</span>
                                                            <span className="fw-semibold text-dark">21</span>
                                                        </li>
                                                    </ul>
                                                    {/* End Stats */}
                                                    {/* Progress */}
                                                    <div className="progress card-progress">
                                                        <div className="progress-bar" role="progressbar" style={{ width: '77%' }} aria-valuenow={77} aria-valuemin={0} aria-valuemax={100} />
                                                    </div>
                                                    {/* End Progress */}
                                                    <a className="stretched-link" href="#" />
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Card */}
                                    </div>
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

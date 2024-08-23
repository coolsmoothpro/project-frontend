import React from 'react'

export default function Calender() {
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
                                    <li className="breadcrumb-item active" aria-current="page">Calendar</li>
                                </ol>
                            </nav>
                            <h1 className="page-header-title">Calendar</h1>
                        </div>
                        {/* End Col */}
                        <div className="col-sm-auto">
                            {/* Button trigger modal */}
                            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addEventToCalendarModal">
                                <i className="bi-plus" /> Create event
                            </button>
                            {/* End Button trigger modal */}
                        </div>
                        {/* End Col */}
                    </div>
                </div>
                {/* End Page Header */}
                <div className="row align-items-sm-center mb-4">
                    <div className="col-lg-5 mb-2 mb-lg-0">
                        <div className="d-flex align-items-center">
                            <button type="button" className="btn btn-white me-3" data-bs-toggle="tooltip" data-bs-placement="top" title data-fc-today>Today</button>
                            <button type="button" className="btn btn-ghost-secondary btn-icon btn-sm btn-no-focus rounded-circle me-1" data-fc-prev-month data-bs-toggle="tooltip" data-bs-placement="top" title="Previous month">
                                <i className="bi-chevron-left" />
                            </button>
                            <button type="button" className="btn btn-ghost-secondary btn-icon btn-sm btn-no-focus rounded-circle ms-1" data-fc-next-month data-bs-toggle="tooltip" data-bs-placement="top" title="Next month">
                                <i className="bi-chevron-right" />
                            </button>
                            <div className="ms-3">
                                <h4 className="h3 mb-0" data-fc-title />
                            </div>
                        </div>
                    </div>
                    {/* End Col */}
                    <div className="col-lg-7">
                        <div className="d-sm-flex align-items-sm-center">
                            {/* Input Group */}
                            <div className="input-group input-group-merge me-2 mb-2 mb-sm-0">
                                <div className="input-group-prepend input-group-text">
                                    <i className="bi-search" />
                                </div>
                                <input type="text" id="filter-by-title" className="form-control" placeholder="Search by title" />
                            </div>
                            {/* End Input Group */}
                            <div className="d-flex align-items-center">
                                {/* Dropdown */}
                                <div className="dropdown me-2">
                                    <button type="button" className="btn btn-white dropdown-toggle" id="calendarFilterDropdown" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
                                        <i className="bi-filter me-1" /> Filter
                                    </button>
                                    <div className="dropdown-menu dropdown-card" aria-labelledby="calendarFilterDropdown" style={{ minWidth: '15rem' }}>
                                        {/* Card */}
                                        <div className="card">
                                            <div className="card-body">
                                                <small className="card-subtitle">My calendars</small>
                                                {/* Form Check */}
                                                <div className="form-check" data-filter>
                                                    <input className="form-check-input" type="checkbox" defaultValue="fullcalendar-custom-event-hs-team" id="calendarPersonalCheck" defaultChecked />
                                                    <label className="form-check-label" htmlFor="calendarPersonalCheck">HS Team</label>
                                                </div>
                                                {/* End Form Check */}
                                                {/* Form Check */}
                                                <div className="form-check form-check-danger" data-filter>
                                                    <input className="form-check-input" type="checkbox" defaultValue="fullcalendar-custom-event-reminders" id="calendarRemindersCheck" defaultChecked />
                                                    <label className="form-check-label" htmlFor="calendarRemindersCheck">Reminders</label>
                                                </div>
                                                {/* End Form Check */}
                                                {/* Form Check */}
                                                <div className="form-check form-check-warning" data-filter>
                                                    <input className="form-check-input" type="checkbox" defaultValue="fullcalendar-custom-event-tasks" id="calendarTasksCheck" defaultChecked />
                                                    <label className="form-check-label" htmlFor="calendarTasksCheck">Tasks</label>
                                                </div>
                                                {/* End Form Check */}
                                            </div>
                                            <hr className="my-0" />
                                            <div className="card-body">
                                                <small className="card-subtitle">Other calendars</small>
                                                {/* Form Check */}
                                                <div className="form-check form-check-success" data-filter>
                                                    <input className="form-check-input" type="checkbox" defaultValue="fullcalendar-custom-event-holidays" id="calendarHolidaysCheck" defaultChecked />
                                                    <label className="form-check-label" htmlFor="calendarHolidaysCheck">Holidays</label>
                                                </div>
                                                {/* End Form Check */}
                                            </div>
                                        </div>
                                        {/* End Card */}
                                    </div>
                                </div>
                                {/* End Dropdown */}
                                {/* Dropdown */}
                                <div className="dropdown me-2">
                                    <button type="button" className="btn btn-white dropdown-toggle" id="calendarEventsDropdown" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
                                        <i className="bi-calendar-event me-1" /> Events
                                    </button>
                                    <div className="dropdown-menu dropdown-menu-sm-end dropdown-card" aria-labelledby="calendarFilterDropdown" style={{ width: '17rem' }}>
                                        {/* Card */}
                                        <div className="card">
                                            <div className="card-body card-body-height">
                                                <small className="card-subtitle">Drag these onto the calendar:</small>
                                                {/* External Events */}
                                                <div id="external-events" className="fullcalendar-custom">
                                                    {/* Event */}
                                                    <div className="fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event fc-daygrid-inline-block-event fullcalendar-custom-event-hs-team" style={{ backgroundColor: '#eaf1ff', borderColor: '#eaf1ff' }} data-event="{
                             &quot;title&quot;: &quot;Open a new task on Jira&quot;,
                             &quot;image&quot;: &quot;./assets/svg/brands/jira-icon.svg&quot;,
                             &quot;className&quot;: &quot;&quot;,
                             &quot;forceEvent&quot;: true
                           }">
                                                        <div className="fc-event-title" style={{ maxWidth: '14rem' }}>
                                                            <div className="d-flex">
                                                                <img className="avatar avatar-xss me-2" src="./assets/svg/brands/jira-icon.svg" alt="Image Description" />
                                                                <span className="text-truncate">Open a new task on Jira</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* End Event */}
                                                    {/* Event */}
                                                    <div className="fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event fc-daygrid-inline-block-event fullcalendar-custom-event-reminders" style={{ backgroundColor: '#fdeef2', borderColor: '#fdeef2' }} data-event="{
                               &quot;title&quot;: &quot;Send weekly invoice to John&quot;,
                               &quot;image&quot;: &quot;./assets/svg/brands/excel-icon.svg&quot;,
                               &quot;className&quot;: &quot;fc-event-success&quot;,
                               &quot;forceEvent&quot;: true
                             }">
                                                        <div className="fc-event-title" style={{ maxWidth: '14rem' }}>
                                                            <div className="d-flex">
                                                                <img className="avatar avatar-xss me-2" src="./assets/svg/brands/excel-icon.svg" alt="Image Description" />
                                                                <span className="text-truncate">Send weekly invoice to John</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* End Event */}
                                                    {/* Event */}
                                                    <div className="fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event fc-daygrid-inline-block-event fullcalendar-custom-event-hs-team" style={{ backgroundColor: '#eaf1ff', borderColor: '#eaf1ff' }} data-event="{
                               &quot;title&quot;: &quot;Shoot a message to Christina on Slack&quot;,
                               &quot;image&quot;: &quot;./assets/svg/brands/slack-icon.svg&quot;,
                               &quot;className&quot;: &quot;&quot;,
                               &quot;forceEvent&quot;: true
                             }">
                                                        <div className="fc-event-title" style={{ maxWidth: '14rem' }}>
                                                            <div className="d-flex">
                                                                <img className="avatar avatar-xss me-2" src="./assets/svg/brands/slack-icon.svg" alt="Image Description" />
                                                                <span className="text-truncate">Shoot a message to Christina on Slack</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* End Event */}
                                                    {/* Event */}
                                                    <div className="fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event fc-daygrid-inline-block-event fullcalendar-custom-event-tasks" style={{ backgroundColor: '#fdf3e8', borderColor: '#fdf3e8' }} data-event="{
                               &quot;title&quot;: &quot;First team timeline&quot;,
                               &quot;image&quot;: &quot;&quot;,
                               &quot;className&quot;: &quot;fc-event-success&quot;,
                               &quot;forceEvent&quot;: true
                             }">
                                                        <div className="fc-event-title" style={{ maxWidth: '14rem' }}>
                                                            <div className="d-flex">
                                                                <span className="avatar avatar-xss avatar-info avatar-circle me-2">
                                                                    <span className="text-truncate">F</span>
                                                                </span>
                                                                <span>First team timeline</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* End Event */}
                                                    {/* Event */}
                                                    <div className="fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event fc-daygrid-inline-block-event fullcalendar-custom-event-reminders" style={{ backgroundColor: '#fdeef2', borderColor: '#fdeef2' }} data-event="{
                               &quot;title&quot;: &quot;Download monthly data in DigitalOcean&quot;,
                               &quot;image&quot;: &quot;./assets/svg/brands/digitalocean-icon.svg&quot;,
                               &quot;className&quot;: &quot;&quot;,
                               &quot;forceEvent&quot;: true
                             }">
                                                        <div className="fc-event-title" style={{ maxWidth: '14rem' }}>
                                                            <div className="d-flex">
                                                                <img className="avatar avatar-xss me-2" src="./assets/svg/brands/digitalocean-icon.svg" alt="Image Description" />
                                                                <span className="text-truncate">Download monthly data in DigitalOcean</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* End Event */}
                                                    {/* Event */}
                                                    <div className="fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event fc-daygrid-inline-block-event fullcalendar-custom-event-tasks" style={{ backgroundColor: '#fdf3e8', borderColor: '#fdf3e8' }} data-event="{
                               &quot;title&quot;: &quot;Hire a Figma designer&quot;,
                               &quot;image&quot;: &quot;./assets/svg/brands/figma-icon.svg&quot;,
                               &quot;className&quot;: &quot;&quot;,
                               &quot;forceEvent&quot;: true
                             }">
                                                        <div className="fc-event-title" style={{ maxWidth: '14rem' }}>
                                                            <div className="d-flex">
                                                                <img className="avatar avatar-xss me-2" src="./assets/svg/brands/figma-icon.svg" alt="Image Description" />
                                                                <span className="text-truncate">Hire a Figma designer</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* End Event */}
                                                    {/* Event */}
                                                    <div className="fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event fc-daygrid-inline-block-event fullcalendar-custom-event-hs-team" style={{ backgroundColor: '#eaf1ff', borderColor: '#eaf1ff' }} data-event="{
                               &quot;title&quot;: &quot;Mobile App rework for (Pixeel)&quot;,
                               &quot;image&quot;: &quot;&quot;,
                               &quot;className&quot;: &quot;&quot;,
                               &quot;forceEvent&quot;: true
                             }">
                                                        <div className="fc-event-title" style={{ maxWidth: '14rem' }}>
                                                            <div className="d-flex">
                                                                <span className="avatar avatar-xss avatar-primary avatar-circle me-2">
                                                                    <span className="text-truncate">M</span>
                                                                </span>
                                                                <span>Mobile App rework for (Pixeel)</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* End Event */}
                                                </div>
                                                {/* End External Events */}
                                            </div>
                                        </div>
                                        {/* End Card */}
                                    </div>
                                </div>
                                {/* End Dropdown */}
                                {/* Select */}
                                <div className="tom-select-custom">
                                    <select className="js-select form-select" data-fc-grid-view data-hs-tom-select-options="{
                          &quot;searchInDropdown&quot;: false,
                          &quot;hideSearch&quot;: true
                        }">
                                        <option value="dayGridMonth">Month</option>
                                        <option value="timeGridWeek">Week</option>
                                        <option value="timeGridDay">Day</option>
                                        <option value="listWeek">List</option>
                                    </select>
                                </div>
                                {/* End Select */}
                            </div>
                        </div>
                    </div>
                    {/* End Col */}
                </div>
                {/* End Row */}
                {/* Fullcalendar */}
                <div id="js-fullcalendar" className="fullcalendar-custom" />
                {/* End Fullcalendar */}
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
            {/* Modal */}
            <div className="modal fade" id="addEventToCalendarModal" tabIndex={-1} role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                    <div className="modal-content">
                        {/* Header */}
                        <div className="modal-close">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        {/* End Header */}
                        {/* Body */}
                        <div className="modal-body">
                            <label htmlFor="eventTitleLabel" className="visually-hidden form-label">Title</label>
                            <textarea id="eventTitleLabel" className="form-control form-control-title" placeholder="Add title" defaultValue={""} />
                            <div className="row mb-4">
                                <div className="col-sm-3 mb-2 mb-sm-0">
                                    <div className="d-flex align-items-center mt-2">
                                        <i className="bi-list-ul nav-icon" />
                                        <div className="flex-grow-1">Event type</div>
                                    </div>
                                </div>
                                {/* End Col */}
                                <div className="col-sm">
                                    {/* Select */}
                                    <div className="tom-select-custom">
                                        <select className="js-select form-select w-auto" autoComplete="off" id="eventColorLabel" data-hs-tom-select-options="{
                          &quot;searchInDropdown&quot;: false,
                          &quot;placeholder&quot;: &quot;Select event color&quot;
                        }">
                                            <option value data-option-template="<span class=&quot;d-flex align-items-center&quot;>Select event color</span>">Select event color</option>
                                            <option value="fullcalendar-custom-event-hs-team" data-option-template="<span class=&quot;d-flex align-items-center&quot;><span class=&quot;legend-indicator bg-primary me-2&quot;></span>HS Team</span>">HS Team</option>
                                            <option value="fullcalendar-custom-event-reminders" data-option-template="<span class=&quot;d-flex align-items-center&quot;><span class=&quot;legend-indicator bg-danger me-2&quot;></span>Reminders</span>">Reminders</option>
                                            <option value="fullcalendar-custom-event-tasks" data-option-template="<span class=&quot;d-flex align-items-center&quot;><span class=&quot;legend-indicator bg-warning me-2&quot;></span>Tasks</span>">Tasks</option>
                                            <option value="fullcalendar-custom-event-holidays" data-option-template="<span class=&quot;d-flex align-items-center&quot;><span class=&quot;legend-indicator bg-dark me-2&quot;></span>Success</span>">Success</option>
                                        </select>
                                    </div>
                                    {/* End Select */}
                                </div>
                                {/* End Col */}
                            </div>
                            {/* End Row */}
                            <div className="row mb-4">
                                <div className="col-sm-3 mb-2 mb-sm-0">
                                    <div className="d-flex align-items-center mt-2">
                                        <i className="bi-calendar-event nav-icon" />
                                        <div className="flex-grow-1">Date</div>
                                    </div>
                                </div>
                                {/* End Col */}
                                <div className="col-sm">
                                    <label htmlFor="eventDateRangeLabel" className="visually-hidden form-label">Date</label>
                                    {/* Flatpickr */}
                                    <input type="text" id="eventDateRangeLabel" className="flatpickr-custom form-control mb-2" placeholder="Select dates" data-hs-flatpickr-options="{
                       &quot;dateFormat&quot;: &quot;m/d/Y&quot;,
                       &quot;mode&quot;: &quot;range&quot;,
                       &quot;minDate&quot;: &quot;12/01/2020&quot;
                     }" />
                                    {/* End Flatpickr */}
                                    <div className="d-flex align-items-center">
                                        <label htmlFor="eventRepeatLabel" className="text-body me-2 mb-0">Repeat:</label>
                                        {/* Select */}
                                        <div className="tom-select-custom">
                                            <select className="js-select form-select form-select-sm w-auto" id="eventRepeatLabel" data-hs-tom-select-options="{
                            &quot;searchInDropdown&quot;: false,
                            &quot;hideSearch&quot;: true
                          }">
                                                <option value="everyday" selected>Everyday</option>
                                                <option value="weekdays">Weekdays</option>
                                                <option value="never">Never</option>
                                            </select>
                                        </div>
                                        {/* End Select */}
                                    </div>
                                </div>
                                {/* End Col */}
                            </div>
                            {/* End Row */}
                            <div className="row mb-4">
                                <div className="col-sm-3 mb-2 mb-sm-0">
                                    <div className="d-flex align-items-center mt-2">
                                        <i className="bi-people nav-icon" />
                                        <div className="flex-grow-1">Guests</div>
                                    </div>
                                </div>
                                {/* End Col */}
                                <div className="col-sm">
                                    <label htmlFor="eventGuestsLabel" className="visually-hidden form-label">Add guests</label>
                                    <div className="tom-select-custom">
                                        <select className="form-select" id="eventGuestsLabel" placeholder="Add guests" aria-label="Add guests" multiple data-hs-tom-select-options="{
                          &quot;placeholder&quot;: &quot;Select a person...&quot;,
                          &quot;hideSearch&quot;: true
                        }">
                                        </select>
                                    </div>
                                </div>
                                {/* End Col */}
                            </div>
                            {/* End Row */}
                            <div className="row mb-4">
                                <div className="col-sm-3 mb-2 mb-sm-0">
                                    <div className="d-flex align-items-center mt-2">
                                        <i className="bi-camera-reels nav-icon" />
                                        <div className="flex-grow-1">Conference call</div>
                                    </div>
                                </div>
                                {/* End Col */}
                                <div className="col-sm">
                                    <a className="btn btn-primary" href="#">
                                        <i className="bi-camera-video-fill me-1" /> Add Zoom video conferencing
                                    </a>
                                </div>
                                {/* End Col */}
                            </div>
                            {/* End Row */}
                            <div className="row mb-4">
                                <div className="col-sm-3 mb-2 mb-sm-0">
                                    <div className="d-flex align-items-center mt-2">
                                        <i className="bi-geo-alt nav-icon" />
                                        <div className="flex-grow-1">Location</div>
                                    </div>
                                </div>
                                {/* End Col */}
                                <div className="col-sm">
                                    <label htmlFor="eventLocationLabel" className="visually-hidden form-label">Add location</label>
                                    <input type="text" className="form-control" id="eventLocationLabel" placeholder="Add location" aria-label="Add location" />
                                </div>
                                {/* End Col */}
                            </div>
                            {/* End Row */}
                            <div className="row mb-4">
                                <div className="col-sm-3 mb-2 mb-sm-0">
                                    <div className="d-flex align-items-center mt-2">
                                        <i className="bi-text-left nav-icon" />
                                        <div className="flex-grow-1">Description</div>
                                    </div>
                                </div>
                                {/* End Col */}
                                <div className="col-sm">
                                    <label htmlFor="eventDescriptionLabel" className="visually-hidden form-label">Add description</label>
                                    <textarea id="eventDescriptionLabel" className="form-control" placeholder="Add description" defaultValue={""} />
                                </div>
                                {/* End Col */}
                            </div>
                            {/* End Row */}
                            <div className="row">
                                <div className="col-sm-3 mb-2 mb-sm-0">
                                    <div className="d-flex align-items-center mt-2">
                                        <i className="bi-person nav-icon" />
                                        <div className="flex-grow-1">Created by</div>
                                    </div>
                                </div>
                                {/* End Col */}
                                <div className="col-sm">
                                    {/* Media */}
                                    <a className="d-inline-flex align-items-center" href="./user-profile.html">
                                        <div className="avatar avatar-sm avatar-circle me-3">
                                            <img className="avatar-img" src="./assets/img/160x160/img6.jpg" alt="Image Description" />
                                        </div>
                                        <div className="flex-grow-1">
                                            <h5 className="text-inherit mb-0">Mark Williams</h5>
                                        </div>
                                    </a>
                                    {/* End Media */}
                                </div>
                                {/* End Col */}
                            </div>
                            {/* End Row */}
                        </div>
                        {/* End Body */}
                        {/* Footer */}
                        <div className="modal-footer gap-3">
                            <button type="button" id="discardFormt" className="btn btn-white" data-bs-dismiss="modal">Discard</button>
                            <button type="button" id="processEvent" className="btn btn-primary">Create event</button>
                        </div>
                        {/* End Footer */}
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
            {/* Modal */}
            <div className="modal fade" id="addEventToCalendarModal" tabIndex={-1} role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                    <div className="modal-content">
                        {/* Header */}
                        <div className="modal-close">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        {/* End Header */}
                        {/* Body */}
                        <div className="modal-body">
                            <label htmlFor="eventTitleLabel" className="visually-hidden form-label">Title</label>
                            <textarea id="eventTitleLabel" className="form-control form-control-title" placeholder="Add title" defaultValue={""} />
                            <div className="row mb-4">
                                <div className="col-sm-3 mb-2 mb-sm-0">
                                    <div className="d-flex align-items-center mt-2">
                                        <i className="bi-list-ul nav-icon" />
                                        <div className="flex-grow-1">Event type</div>
                                    </div>
                                </div>
                                {/* End Col */}
                                <div className="col-sm">
                                    {/* Select */}
                                    <div className="tom-select-custom">
                                        <select className="js-select form-select w-auto" autoComplete="off" id="eventColorLabel" data-hs-tom-select-options="{
                          &quot;searchInDropdown&quot;: false,
                          &quot;placeholder&quot;: &quot;Select event color&quot;
                        }">
                                            <option value data-option-template="<span class=&quot;d-flex align-items-center&quot;>Select event color</span>">Select event color</option>
                                            <option value="fullcalendar-custom-event-hs-team" data-option-template="<span class=&quot;d-flex align-items-center&quot;><span class=&quot;legend-indicator bg-primary me-2&quot;></span>HS Team</span>">HS Team</option>
                                            <option value="fullcalendar-custom-event-reminders" data-option-template="<span class=&quot;d-flex align-items-center&quot;><span class=&quot;legend-indicator bg-danger me-2&quot;></span>Reminders</span>">Reminders</option>
                                            <option value="fullcalendar-custom-event-tasks" data-option-template="<span class=&quot;d-flex align-items-center&quot;><span class=&quot;legend-indicator bg-warning me-2&quot;></span>Tasks</span>">Tasks</option>
                                            <option value="fullcalendar-custom-event-holidays" data-option-template="<span class=&quot;d-flex align-items-center&quot;><span class=&quot;legend-indicator bg-dark me-2&quot;></span>Success</span>">Success</option>
                                        </select>
                                    </div>
                                    {/* End Select */}
                                </div>
                                {/* End Col */}
                            </div>
                            {/* End Row */}
                            <div className="row mb-4">
                                <div className="col-sm-3 mb-2 mb-sm-0">
                                    <div className="d-flex align-items-center mt-2">
                                        <i className="bi-calendar-event nav-icon" />
                                        <div className="flex-grow-1">Date</div>
                                    </div>
                                </div>
                                {/* End Col */}
                                <div className="col-sm">
                                    <label htmlFor="eventDateRangeLabel" className="visually-hidden form-label">Date</label>
                                    {/* Flatpickr */}
                                    <input type="text" id="eventDateRangeLabel" className="flatpickr-custom form-control mb-2" placeholder="Select dates" data-hs-flatpickr-options="{
                       &quot;dateFormat&quot;: &quot;m/d/Y&quot;,
                       &quot;mode&quot;: &quot;range&quot;,
                       &quot;minDate&quot;: &quot;12/01/2020&quot;
                     }" />
                                    {/* End Flatpickr */}
                                    <div className="d-flex align-items-center">
                                        <label htmlFor="eventRepeatLabel" className="text-body me-2 mb-0">Repeat:</label>
                                        {/* Select */}
                                        <div className="tom-select-custom">
                                            <select className="js-select form-select form-select-sm w-auto" id="eventRepeatLabel" data-hs-tom-select-options="{
                            &quot;searchInDropdown&quot;: false,
                            &quot;hideSearch&quot;: true
                          }">
                                                <option value="everyday" selected>Everyday</option>
                                                <option value="weekdays">Weekdays</option>
                                                <option value="never">Never</option>
                                            </select>
                                        </div>
                                        {/* End Select */}
                                    </div>
                                </div>
                                {/* End Col */}
                            </div>
                            {/* End Row */}
                            <div className="row mb-4">
                                <div className="col-sm-3 mb-2 mb-sm-0">
                                    <div className="d-flex align-items-center mt-2">
                                        <i className="bi-people nav-icon" />
                                        <div className="flex-grow-1">Guests</div>
                                    </div>
                                </div>
                                {/* End Col */}
                                <div className="col-sm">
                                    <label htmlFor="eventGuestsLabel" className="visually-hidden form-label">Add guests</label>
                                    <div className="tom-select-custom">
                                        <select className="form-select" id="eventGuestsLabel" placeholder="Add guests" aria-label="Add guests" multiple data-hs-tom-select-options="{
                          &quot;placeholder&quot;: &quot;Select a person...&quot;,
                          &quot;hideSearch&quot;: true
                        }">
                                        </select>
                                    </div>
                                </div>
                                {/* End Col */}
                            </div>
                            {/* End Row */}
                            <div className="row mb-4">
                                <div className="col-sm-3 mb-2 mb-sm-0">
                                    <div className="d-flex align-items-center mt-2">
                                        <i className="bi-camera-reels nav-icon" />
                                        <div className="flex-grow-1">Conference call</div>
                                    </div>
                                </div>
                                {/* End Col */}
                                <div className="col-sm">
                                    <a className="btn btn-primary" href="#">
                                        <i className="bi-camera-video-fill me-1" /> Add Zoom video conferencing
                                    </a>
                                </div>
                                {/* End Col */}
                            </div>
                            {/* End Row */}
                            <div className="row mb-4">
                                <div className="col-sm-3 mb-2 mb-sm-0">
                                    <div className="d-flex align-items-center mt-2">
                                        <i className="bi-geo-alt nav-icon" />
                                        <div className="flex-grow-1">Location</div>
                                    </div>
                                </div>
                                {/* End Col */}
                                <div className="col-sm">
                                    <label htmlFor="eventLocationLabel" className="visually-hidden form-label">Add location</label>
                                    <input type="text" className="form-control" id="eventLocationLabel" placeholder="Add location" aria-label="Add location" />
                                </div>
                                {/* End Col */}
                            </div>
                            {/* End Row */}
                            <div className="row mb-4">
                                <div className="col-sm-3 mb-2 mb-sm-0">
                                    <div className="d-flex align-items-center mt-2">
                                        <i className="bi-text-left nav-icon" />
                                        <div className="flex-grow-1">Description</div>
                                    </div>
                                </div>
                                {/* End Col */}
                                <div className="col-sm">
                                    <label htmlFor="eventDescriptionLabel" className="visually-hidden form-label">Add description</label>
                                    <textarea id="eventDescriptionLabel" className="form-control" placeholder="Add description" defaultValue={""} />
                                </div>
                                {/* End Col */}
                            </div>
                            {/* End Row */}
                            <div className="row">
                                <div className="col-sm-3 mb-2 mb-sm-0">
                                    <div className="d-flex align-items-center mt-2">
                                        <i className="bi-person nav-icon" />
                                        <div className="flex-grow-1">Created by</div>
                                    </div>
                                </div>
                                {/* End Col */}
                                <div className="col-sm">
                                    {/* Media */}
                                    <a className="d-inline-flex align-items-center" href="./user-profile.html">
                                        <div className="avatar avatar-sm avatar-circle me-3">
                                            <img className="avatar-img" src="./assets/img/160x160/img6.jpg" alt="Image Description" />
                                        </div>
                                        <div className="flex-grow-1">
                                            <h5 className="text-inherit mb-0">Mark Williams</h5>
                                        </div>
                                    </a>
                                    {/* End Media */}
                                </div>
                                {/* End Col */}
                            </div>
                            {/* End Row */}
                        </div>
                        {/* End Body */}
                        {/* Footer */}
                        <div className="modal-footer gap-3">
                            <button type="button" id="discardFormt" className="btn btn-white" data-bs-dismiss="modal">Discard</button>
                            <button type="button" id="processEvent" className="btn btn-primary">Create event</button>
                        </div>
                        {/* End Footer */}
                    </div>
                </div>
            </div>
        </>
    )
}

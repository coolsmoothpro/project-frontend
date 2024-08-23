var MyClass = React.createClass({
    render: function() {
      return (
        <div>
          {/* Required Meta Tags Always Come First */}
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          {/* Title */}
          <title>User Profile | Front - Admin &amp; Dashboard Template</title>
          {/* Favicon */}
          <link rel="shortcut icon" href="./favicon.ico" />
          {/* Font */}
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap" rel="stylesheet" />
          {/* CSS Implementing Plugins */}
          <link rel="stylesheet" href="./assets/vendor/bootstrap-icons/font/bootstrap-icons.css" />
          {/* CSS Front Template */}
          <link rel="preload" href="./assets/css/theme.min.css" data-hs-appearance="default" as="style" />
          <link rel="preload" href="./assets/css/theme-dark.min.css" data-hs-appearance="dark" as="style" />
          <style data-hs-appearance-onload-styles dangerouslySetInnerHTML={{__html: "\n    *\n    {\n      transition: unset !important;\n    }\n\n    body\n    {\n      opacity: 0;\n    }\n  " }} />
          {/* ========== HEADER ========== */}
          <header id="header" className="navbar navbar-expand-lg navbar-fixed navbar-height navbar-container navbar-bordered bg-white">
            <div className="navbar-nav-wrap">
              {/* Logo */}
              <a className="navbar-brand" href="./index.html" aria-label="Front">
                <img className="navbar-brand-logo" src="./assets/svg/logos/logo.svg" alt="Logo" data-hs-theme-appearance="default" />
                <img className="navbar-brand-logo" src="./assets/svg/logos-light/logo.svg" alt="Logo" data-hs-theme-appearance="dark" />
                <img className="navbar-brand-logo-mini" src="./assets/svg/logos/logo-short.svg" alt="Logo" data-hs-theme-appearance="default" />
                <img className="navbar-brand-logo-mini" src="./assets/svg/logos-light/logo-short.svg" alt="Logo" data-hs-theme-appearance="dark" />
              </a>
              {/* End Logo */}
              <div className="navbar-nav-wrap-content-start">
                {/* Navbar Vertical Toggle */}
                <button type="button" className="js-navbar-vertical-aside-toggle-invoker navbar-aside-toggler">
                  <i className="bi-arrow-bar-left navbar-toggler-short-align" data-bs-template="<div class=&quot;tooltip d-none d-md-block&quot; role=&quot;tooltip&quot;><div class=&quot;arrow&quot;></div><div class=&quot;tooltip-inner&quot;></div></div>" data-bs-toggle="tooltip" data-bs-placement="right" title="Collapse" />
                  <i className="bi-arrow-bar-right navbar-toggler-full-align" data-bs-template="<div class=&quot;tooltip d-none d-md-block&quot; role=&quot;tooltip&quot;><div class=&quot;arrow&quot;></div><div class=&quot;tooltip-inner&quot;></div></div>" data-bs-toggle="tooltip" data-bs-placement="right" title="Expand" />
                </button>
                {/* End Navbar Vertical Toggle */}
                {/* Search Form */}
                <div className="dropdown ms-2">
                  {/* Input Group */}
                  <div className="d-none d-lg-block">
                    <div className="input-group input-group-merge input-group-borderless input-group-hover-light navbar-input-group">
                      <div className="input-group-prepend input-group-text">
                        <i className="bi-search" />
                      </div>
                      <input type="search" className="js-form-search form-control" placeholder="Search in front" aria-label="Search in front" data-hs-form-search-options="{
                         &quot;clearIcon&quot;: &quot;#clearSearchResultsIcon&quot;,
                         &quot;dropMenuElement&quot;: &quot;#searchDropdownMenu&quot;,
                         &quot;dropMenuOffset&quot;: 20,
                         &quot;toggleIconOnFocus&quot;: true,
                         &quot;activeClass&quot;: &quot;focus&quot;
                       }" />
                      <a className="input-group-append input-group-text" href="javascript:;">
                        <i id="clearSearchResultsIcon" className="bi-x-lg" style={{display: 'none'}} />
                      </a>
                    </div>
                  </div>
                  <button className="js-form-search js-form-search-mobile-toggle btn btn-ghost-secondary btn-icon rounded-circle d-lg-none" type="button" data-hs-form-search-options="{
                         &quot;clearIcon&quot;: &quot;#clearSearchResultsIcon&quot;,
                         &quot;dropMenuElement&quot;: &quot;#searchDropdownMenu&quot;,
                         &quot;dropMenuOffset&quot;: 20,
                         &quot;toggleIconOnFocus&quot;: true,
                         &quot;activeClass&quot;: &quot;focus&quot;
                       }">
                    <i className="bi-search" />
                  </button>
                  {/* End Input Group */}
                  {/* Card Search Content */}
                  <div id="searchDropdownMenu" className="hs-form-search-menu-content dropdown-menu dropdown-menu-form-search navbar-dropdown-menu-borderless">
                    <div className="card">
                      {/* Body */}
                      <div className="card-body-height">
                        <div className="d-lg-none">
                          <div className="input-group input-group-merge navbar-input-group mb-5">
                            <div className="input-group-prepend input-group-text">
                              <i className="bi-search" />
                            </div>
                            <input type="search" className="form-control" placeholder="Search in front" aria-label="Search in front" />
                            <a className="input-group-append input-group-text" href="javascript:;">
                              <i className="bi-x-lg" />
                            </a>
                          </div>
                        </div>
                        <span className="dropdown-header">Recent searches</span>
                        <div className="dropdown-item bg-transparent text-wrap">
                          <a className="btn btn-soft-dark btn-xs rounded-pill" href="./index.html">
                            Gulp <i className="bi-search ms-1" />
                          </a>
                          <a className="btn btn-soft-dark btn-xs rounded-pill" href="./index.html">
                            Notification panel <i className="bi-search ms-1" />
                          </a>
                        </div>
                        <div className="dropdown-divider" />
                        <span className="dropdown-header">Tutorials</span>
                        <a className="dropdown-item" href="./index.html">
                          <div className="d-flex align-items-center">
                            <div className="flex-shrink-0">
                              <span className="icon icon-soft-dark icon-xs icon-circle">
                                <i className="bi-sliders" />
                              </span>
                            </div>
                            <div className="flex-grow-1 text-truncate ms-2">
                              <span>How to set up Gulp?</span>
                            </div>
                          </div>
                        </a>
                        <a className="dropdown-item" href="./index.html">
                          <div className="d-flex align-items-center">
                            <div className="flex-shrink-0">
                              <span className="icon icon-soft-dark icon-xs icon-circle">
                                <i className="bi-paint-bucket" />
                              </span>
                            </div>
                            <div className="flex-grow-1 text-truncate ms-2">
                              <span>How to change theme color?</span>
                            </div>
                          </div>
                        </a>
                        <div className="dropdown-divider" />
                        <span className="dropdown-header">Members</span>
                        <a className="dropdown-item" href="./index.html">
                          <div className="d-flex align-items-center">
                            <div className="flex-shrink-0">
                              <img className="avatar avatar-xs avatar-circle" src="./assets/img/160x160/img10.jpg" alt="Image Description" />
                            </div>
                            <div className="flex-grow-1 text-truncate ms-2">
                              <span>Amanda Harvey <i className="tio-verified text-primary" data-toggle="tooltip" data-placement="top" title="Top endorsed" /></span>
                            </div>
                          </div>
                        </a>
                        <a className="dropdown-item" href="./index.html">
                          <div className="d-flex align-items-center">
                            <div className="flex-shrink-0">
                              <img className="avatar avatar-xs avatar-circle" src="./assets/img/160x160/img3.jpg" alt="Image Description" />
                            </div>
                            <div className="flex-grow-1 text-truncate ms-2">
                              <span>David Harrison</span>
                            </div>
                          </div>
                        </a>
                        <a className="dropdown-item" href="./index.html">
                          <div className="d-flex align-items-center">
                            <div className="flex-shrink-0">
                              <div className="avatar avatar-xs avatar-soft-info avatar-circle">
                                <span className="avatar-initials">A</span>
                              </div>
                            </div>
                            <div className="flex-grow-1 text-truncate ms-2">
                              <span>Anne Richard</span>
                            </div>
                          </div>
                        </a>
                      </div>
                      {/* End Body */}
                      {/* Footer */}
                      <a className="card-footer text-center" href="./index.html">
                        See all results <i className="bi-chevron-right small" />
                      </a>
                      {/* End Footer */}
                    </div>
                  </div>
                  {/* End Card Search Content */}
                </div>
                {/* End Search Form */}
              </div>
              <div className="navbar-nav-wrap-content-end">
                {/* Navbar */}
                <ul className="navbar-nav">
                  <li className="nav-item d-none d-sm-inline-block">
                    {/* Notification */}
                    <div className="dropdown">
                      <button type="button" className="btn btn-ghost-secondary btn-icon rounded-circle" id="navbarNotificationsDropdown" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside" data-bs-dropdown-animation>
                        <i className="bi-bell" />
                        <span className="btn-status btn-sm-status btn-status-danger" />
                      </button>
                      <div className="dropdown-menu dropdown-menu-end dropdown-card navbar-dropdown-menu navbar-dropdown-menu-borderless" aria-labelledby="navbarNotificationsDropdown" style={{width: '25rem'}}>
                        <div className="card">
                          {/* Header */}
                          <div className="card-header card-header-content-between">
                            <h4 className="card-title mb-0">Notifications</h4>
                            {/* Unfold */}
                            <div className="dropdown">
                              <button type="button" className="btn btn-icon btn-sm btn-ghost-secondary rounded-circle" id="navbarNotificationsDropdownSettings" data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="bi-three-dots-vertical" />
                              </button>
                              <div className="dropdown-menu dropdown-menu-end navbar-dropdown-menu navbar-dropdown-menu-borderless" aria-labelledby="navbarNotificationsDropdownSettings">
                                <span className="dropdown-header">Settings</span>
                                <a className="dropdown-item" href="#">
                                  <i className="bi-archive dropdown-item-icon" /> Archive all
                                </a>
                                <a className="dropdown-item" href="#">
                                  <i className="bi-check2-all dropdown-item-icon" /> Mark all as read
                                </a>
                                <a className="dropdown-item" href="#">
                                  <i className="bi-toggle-off dropdown-item-icon" /> Disable notifications
                                </a>
                                <a className="dropdown-item" href="#">
                                  <i className="bi-gift dropdown-item-icon" /> What's new?
                                </a>
                                <div className="dropdown-divider" />
                                <span className="dropdown-header">Feedback</span>
                                <a className="dropdown-item" href="#">
                                  <i className="bi-chat-left-dots dropdown-item-icon" /> Report
                                </a>
                              </div>
                            </div>
                            {/* End Unfold */}
                          </div>
                          {/* End Header */}
                          {/* Nav */}
                          <ul className="nav nav-tabs nav-justified" id="notificationTab" role="tablist">
                            <li className="nav-item">
                              <a className="nav-link active" href="#notificationNavOne" id="notificationNavOne-tab" data-bs-toggle="tab" data-bs-target="#notificationNavOne" role="tab" aria-controls="notificationNavOne" aria-selected="true">Messages (3)</a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="#notificationNavTwo" id="notificationNavTwo-tab" data-bs-toggle="tab" data-bs-target="#notificationNavTwo" role="tab" aria-controls="notificationNavTwo" aria-selected="false">Archived</a>
                            </li>
                          </ul>
                          {/* End Nav */}
                          {/* Body */}
                          <div className="card-body-height">
                            {/* Tab Content */}
                            <div className="tab-content" id="notificationTabContent">
                              <div className="tab-pane fade show active" id="notificationNavOne" role="tabpanel" aria-labelledby="notificationNavOne-tab">
                                {/* List Group */}
                                <ul className="list-group list-group-flush navbar-card-list-group">
                                  {/* Item */}
                                  <li className="list-group-item form-check-select">
                                    <div className="row">
                                      <div className="col-auto">
                                        <div className="d-flex align-items-center">
                                          <div className="form-check">
                                            <input className="form-check-input" type="checkbox" defaultValue id="notificationCheck1" defaultChecked />
                                            <label className="form-check-label" htmlFor="notificationCheck1" />
                                            <span className="form-check-stretched-bg" />
                                          </div>
                                          <img className="avatar avatar-sm avatar-circle" src="./assets/img/160x160/img3.jpg" alt="Image Description" />
                                        </div>
                                      </div>
                                      {/* End Col */}
                                      <div className="col ms-n2">
                                        <h5 className="mb-1">Brian Warner</h5>
                                        <p className="text-body fs-5">changed an issue from "In Progress" to <span className="badge bg-success">Review</span></p>
                                      </div>
                                      {/* End Col */}
                                      <small className="col-auto text-muted text-cap">2hr</small>
                                      {/* End Col */}
                                    </div>
                                    {/* End Row */}
                                    <a className="stretched-link" href="#" />
                                  </li>
                                  {/* End Item */}
                                  {/* Item */}
                                  <li className="list-group-item form-check-select">
                                    <div className="row">
                                      <div className="col-auto">
                                        <div className="d-flex align-items-center">
                                          <div className="form-check">
                                            <input className="form-check-input" type="checkbox" defaultValue id="notificationCheck2" defaultChecked />
                                            <label className="form-check-label" htmlFor="notificationCheck2" />
                                            <span className="form-check-stretched-bg" />
                                          </div>
                                          <div className="avatar avatar-sm avatar-soft-dark avatar-circle">
                                            <span className="avatar-initials">K</span>
                                          </div>
                                        </div>
                                      </div>
                                      {/* End Col */}
                                      <div className="col ms-n2">
                                        <h5 className="mb-1">Klara Hampton</h5>
                                        <p className="text-body fs-5">mentioned you in a comment</p>
                                        <blockquote className="blockquote blockquote-sm">
                                          Nice work, love! You really nailed it. Keep it up!
                                        </blockquote>
                                      </div>
                                      {/* End Col */}
                                      <small className="col-auto text-muted text-cap">10hr</small>
                                      {/* End Col */}
                                    </div>
                                    {/* End Row */}
                                    <a className="stretched-link" href="#" />
                                  </li>
                                  {/* End Item */}
                                  {/* Item */}
                                  <li className="list-group-item form-check-select">
                                    <div className="row">
                                      <div className="col-auto">
                                        <div className="d-flex align-items-center">
                                          <div className="form-check">
                                            <input className="form-check-input" type="checkbox" defaultValue id="notificationCheck3" defaultChecked />
                                            <label className="form-check-label" htmlFor="notificationCheck3" />
                                            <span className="form-check-stretched-bg" />
                                          </div>
                                          <div className="avatar avatar-sm avatar-circle">
                                            <img className="avatar-img" src="./assets/img/160x160/img10.jpg" alt="Image Description" />
                                          </div>
                                        </div>
                                      </div>
                                      {/* End Col */}
                                      <div className="col ms-n2">
                                        <h5 className="mb-1">Ruby Walter</h5>
                                        <p className="text-body fs-5">joined the Slack group HS Team</p>
                                      </div>
                                      {/* End Col */}
                                      <small className="col-auto text-muted text-cap">3dy</small>
                                      {/* End Col */}
                                    </div>
                                    {/* End Row */}
                                    <a className="stretched-link" href="#" />
                                  </li>
                                  {/* End Item */}
                                  {/* Item */}
                                  <li className="list-group-item form-check-select">
                                    <div className="row">
                                      <div className="col-auto">
                                        <div className="d-flex align-items-center">
                                          <div className="form-check">
                                            <input className="form-check-input" type="checkbox" defaultValue id="notificationCheck4" />
                                            <label className="form-check-label" htmlFor="notificationCheck4" />
                                            <span className="form-check-stretched-bg" />
                                          </div>
                                          <div className="avatar avatar-sm avatar-circle">
                                            <img className="avatar-img" src="./assets/svg/brands/google-icon.svg" alt="Image Description" />
                                          </div>
                                        </div>
                                      </div>
                                      {/* End Col */}
                                      <div className="col ms-n2">
                                        <h5 className="mb-1">from Google</h5>
                                        <p className="text-body fs-5">Start using forms to capture the information of prospects visiting your Google website</p>
                                      </div>
                                      {/* End Col */}
                                      <small className="col-auto text-muted text-cap">17dy</small>
                                      {/* End Col */}
                                    </div>
                                    {/* End Row */}
                                    <a className="stretched-link" href="#" />
                                  </li>
                                  {/* End Item */}
                                  {/* Item */}
                                  <li className="list-group-item form-check-select">
                                    <div className="row">
                                      <div className="col-auto">
                                        <div className="d-flex align-items-center">
                                          <div className="form-check">
                                            <input className="form-check-input" type="checkbox" defaultValue id="notificationCheck5" />
                                            <label className="form-check-label" htmlFor="notificationCheck5" />
                                            <span className="form-check-stretched-bg" />
                                          </div>
                                          <div className="avatar avatar-sm avatar-circle">
                                            <img className="avatar-img" src="./assets/img/160x160/img7.jpg" alt="Image Description" />
                                          </div>
                                        </div>
                                      </div>
                                      {/* End Col */}
                                      <div className="col ms-n2">
                                        <h5 className="mb-1">Sara Villar</h5>
                                        <p className="text-body fs-5">completed <i className="bi-journal-bookmark-fill text-primary" /> FD-7 task</p>
                                      </div>
                                      {/* End Col */}
                                      <small className="col-auto text-muted text-cap">2mn</small>
                                      {/* End Col */}
                                    </div>
                                    {/* End Row */}
                                    <a className="stretched-link" href="#" />
                                  </li>
                                  {/* End Item */}
                                </ul>
                                {/* End List Group */}
                              </div>
                              <div className="tab-pane fade" id="notificationNavTwo" role="tabpanel" aria-labelledby="notificationNavTwo-tab">
                                {/* List Group */}
                                <ul className="list-group list-group-flush navbar-card-list-group">
                                  {/* Item */}
                                  <li className="list-group-item form-check-select">
                                    <div className="row">
                                      <div className="col-auto">
                                        <div className="d-flex align-items-center">
                                          <div className="form-check">
                                            <input className="form-check-input" type="checkbox" defaultValue id="notificationCheck6" />
                                            <label className="form-check-label" htmlFor="notificationCheck6" />
                                            <span className="form-check-stretched-bg" />
                                          </div>
                                          <div className="avatar avatar-sm avatar-soft-dark avatar-circle">
                                            <span className="avatar-initials">A</span>
                                          </div>
                                        </div>
                                      </div>
                                      {/* End Col */}
                                      <div className="col ms-n2">
                                        <h5 className="mb-1">Anne Richard</h5>
                                        <p className="text-body fs-5">accepted your invitation to join Notion</p>
                                      </div>
                                      {/* End Col */}
                                      <small className="col-auto text-muted text-cap">1dy</small>
                                      {/* End Col */}
                                    </div>
                                    {/* End Row */}
                                    <a className="stretched-link" href="#" />
                                  </li>
                                  {/* End Item */}
                                  {/* Item */}
                                  <li className="list-group-item form-check-select">
                                    <div className="row">
                                      <div className="col-auto">
                                        <div className="d-flex align-items-center">
                                          <div className="form-check">
                                            <input className="form-check-input" type="checkbox" defaultValue id="notificationCheck7" />
                                            <label className="form-check-label" htmlFor="notificationCheck7" />
                                            <span className="form-check-stretched-bg" />
                                          </div>
                                          <div className="avatar avatar-sm avatar-circle">
                                            <img className="avatar-img" src="./assets/img/160x160/img5.jpg" alt="Image Description" />
                                          </div>
                                        </div>
                                      </div>
                                      {/* End Col */}
                                      <div className="col ms-n2">
                                        <h5 className="mb-1">Finch Hoot</h5>
                                        <p className="text-body fs-5">left Slack group HS projects</p>
                                      </div>
                                      {/* End Col */}
                                      <small className="col-auto text-muted text-cap">1dy</small>
                                      {/* End Col */}
                                    </div>
                                    {/* End Row */}
                                    <a className="stretched-link" href="#" />
                                  </li>
                                  {/* End Item */}
                                  {/* Item */}
                                  <li className="list-group-item form-check-select">
                                    <div className="row">
                                      <div className="col-auto">
                                        <div className="d-flex align-items-center">
                                          <div className="form-check">
                                            <input className="form-check-input" type="checkbox" defaultValue id="notificationCheck8" />
                                            <label className="form-check-label" htmlFor="notificationCheck8" />
                                            <span className="form-check-stretched-bg" />
                                          </div>
                                          <div className="avatar avatar-sm avatar-dark avatar-circle">
                                            <span className="avatar-initials">HS</span>
                                          </div>
                                        </div>
                                      </div>
                                      {/* End Col */}
                                      <div className="col ms-n2">
                                        <h5 className="mb-1">Htmlstream</h5>
                                        <p className="text-body fs-5">you earned a "Top endorsed" <i className="bi-patch-check-fill text-primary" /> badge</p>
                                      </div>
                                      {/* End Col */}
                                      <small className="col-auto text-muted text-cap">6dy</small>
                                      {/* End Col */}
                                    </div>
                                    {/* End Row */}
                                    <a className="stretched-link" href="#" />
                                  </li>
                                  {/* End Item */}
                                  {/* Item */}
                                  <li className="list-group-item form-check-select">
                                    <div className="row">
                                      <div className="col-auto">
                                        <div className="d-flex align-items-center">
                                          <div className="form-check">
                                            <input className="form-check-input" type="checkbox" defaultValue id="notificationCheck9" />
                                            <label className="form-check-label" htmlFor="notificationCheck9" />
                                            <span className="form-check-stretched-bg" />
                                          </div>
                                          <div className="avatar avatar-sm avatar-circle">
                                            <img className="avatar-img" src="./assets/img/160x160/img8.jpg" alt="Image Description" />
                                          </div>
                                        </div>
                                      </div>
                                      {/* End Col */}
                                      <div className="col ms-n2">
                                        <h5 className="mb-1">Linda Bates</h5>
                                        <p className="text-body fs-5">Accepted your connection</p>
                                      </div>
                                      {/* End Col */}
                                      <small className="col-auto text-muted text-cap">17dy</small>
                                      {/* End Col */}
                                    </div>
                                    {/* End Row */}
                                    <a className="stretched-link" href="#" />
                                  </li>
                                  {/* End Item */}
                                  {/* Item */}
                                  <li className="list-group-item form-check-select">
                                    <div className="row">
                                      <div className="col-auto">
                                        <div className="d-flex align-items-center">
                                          <div className="form-check">
                                            <input className="form-check-input" type="checkbox" defaultValue id="notificationCheck10" />
                                            <label className="form-check-label" htmlFor="notificationCheck10" />
                                            <span className="form-check-stretched-bg" />
                                          </div>
                                          <div className="avatar avatar-sm avatar-soft-dark avatar-circle">
                                            <span className="avatar-initials">L</span>
                                          </div>
                                        </div>
                                      </div>
                                      {/* End Col */}
                                      <div className="col ms-n2">
                                        <h5 className="mb-1">Lewis Clarke</h5>
                                        <p className="text-body fs-5">completed <i className="bi-journal-bookmark-fill text-primary" /> FD-134 task</p>
                                      </div>
                                      {/* End Col */}
                                      <small className="col-auto text-muted text-cap">2mts</small>
                                      {/* End Col */}
                                    </div>
                                    {/* End Row */}
                                    <a className="stretched-link" href="#" />
                                  </li>
                                  {/* End Item */}
                                </ul>
                                {/* End List Group */}
                              </div>
                            </div>
                            {/* End Tab Content */}
                          </div>
                          {/* End Body */}
                          {/* Card Footer */}
                          <a className="card-footer text-center" href="#">
                            View all notifications <i className="bi-chevron-right" />
                          </a>
                          {/* End Card Footer */}
                        </div>
                      </div>
                    </div>
                    {/* End Notification */}
                  </li>
                  <li className="nav-item d-none d-sm-inline-block">
                    {/* Apps */}
                    <div className="dropdown">
                      <button type="button" className="btn btn-icon btn-ghost-secondary rounded-circle" id="navbarAppsDropdown" data-bs-toggle="dropdown" aria-expanded="false" data-bs-dropdown-animation>
                        <i className="bi-app-indicator" />
                      </button>
                      <div className="dropdown-menu dropdown-menu-end dropdown-card navbar-dropdown-menu navbar-dropdown-menu-borderless" aria-labelledby="navbarAppsDropdown" style={{width: '25rem'}}>
                        <div className="card">
                          {/* Header */}
                          <div className="card-header">
                            <h4 className="card-title">Web apps &amp; services</h4>
                          </div>
                          {/* End Header */}
                          {/* Body */}
                          <div className="card-body card-body-height">
                            <a className="dropdown-item" href="#">
                              <div className="d-flex align-items-center">
                                <div className="flex-shrink-0">
                                  <img className="avatar avatar-xs avatar-4x3" src="./assets/svg/brands/atlassian-icon.svg" alt="Image Description" />
                                </div>
                                <div className="flex-grow-1 text-truncate ms-3">
                                  <h5 className="mb-0">Atlassian</h5>
                                  <p className="card-text text-body">Security and control across Cloud</p>
                                </div>
                              </div>
                            </a>
                            <a className="dropdown-item" href="#">
                              <div className="d-flex align-items-center">
                                <div className="flex-shrink-0">
                                  <img className="avatar avatar-xs avatar-4x3" src="./assets/svg/brands/slack-icon.svg" alt="Image Description" />
                                </div>
                                <div className="flex-grow-1 text-truncate ms-3">
                                  <h5 className="mb-0">Slack <span className="badge bg-primary rounded-pill text-uppercase ms-1">Try</span></h5>
                                  <p className="card-text text-body">Email collaboration software</p>
                                </div>
                              </div>
                            </a>
                            <a className="dropdown-item" href="#">
                              <div className="d-flex align-items-center">
                                <div className="flex-shrink-0">
                                  <img className="avatar avatar-xs avatar-4x3" src="./assets/svg/brands/google-webdev-icon.svg" alt="Image Description" />
                                </div>
                                <div className="flex-grow-1 text-truncate ms-3">
                                  <h5 className="mb-0">Google webdev</h5>
                                  <p className="card-text text-body">Work involved in developing a website</p>
                                </div>
                              </div>
                            </a>
                            <a className="dropdown-item" href="#">
                              <div className="d-flex align-items-center">
                                <div className="flex-shrink-0">
                                  <img className="avatar avatar-xs avatar-4x3" src="./assets/svg/brands/frontapp-icon.svg" alt="Image Description" />
                                </div>
                                <div className="flex-grow-1 text-truncate ms-3">
                                  <h5 className="mb-0">Frontapp</h5>
                                  <p className="card-text text-body">The inbox for teams</p>
                                </div>
                              </div>
                            </a>
                            <a className="dropdown-item" href="#">
                              <div className="d-flex align-items-center">
                                <div className="flex-shrink-0">
                                  <img className="avatar avatar-xs avatar-4x3" src="./assets/svg/illustrations/review-rating-shield.svg" alt="Image Description" />
                                </div>
                                <div className="flex-grow-1 text-truncate ms-3">
                                  <h5 className="mb-0">HS Support</h5>
                                  <p className="card-text text-body">Customer service and support</p>
                                </div>
                              </div>
                            </a>
                            <a className="dropdown-item" href="#">
                              <div className="d-flex align-items-center">
                                <div className="flex-shrink-0">
                                  <div className="avatar avatar-sm avatar-soft-dark">
                                    <span className="avatar-initials"><i className="bi-grid" /></span>
                                  </div>
                                </div>
                                <div className="flex-grow-1 text-truncate ms-3">
                                  <h5 className="mb-0">More Front products</h5>
                                  <p className="card-text text-body">Check out more HS products</p>
                                </div>
                              </div>
                            </a>
                          </div>
                          {/* End Body */}
                          {/* Footer */}
                          <a className="card-footer text-center" href="#">
                            View all apps <i className="bi-chevron-right" />
                          </a>
                          {/* End Footer */}
                        </div>
                      </div>
                    </div>
                    {/* End Apps */}
                  </li>
                  <li className="nav-item d-none d-sm-inline-block">
                    {/* Activity */}
                    <button className="btn btn-ghost-secondary btn-icon rounded-circle" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasActivityStream" aria-controls="offcanvasActivityStream">
                      <i className="bi-x-diamond" />
                    </button>
                    {/* Activity */}
                  </li>
                  <li className="nav-item">
                    {/* Account */}
                    <div className="dropdown">
                      <a className="navbar-dropdown-account-wrapper" href="javascript:;" id="accountNavbarDropdown" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside" data-bs-dropdown-animation>
                        <div className="avatar avatar-sm avatar-circle">
                          <img className="avatar-img" src="./assets/img/160x160/img6.jpg" alt="Image Description" />
                          <span className="avatar-status avatar-sm-status avatar-status-success" />
                        </div>
                      </a>
                      <div className="dropdown-menu dropdown-menu-end navbar-dropdown-menu navbar-dropdown-menu-borderless navbar-dropdown-account" aria-labelledby="accountNavbarDropdown" style={{width: '16rem'}}>
                        <div className="dropdown-item-text">
                          <div className="d-flex align-items-center">
                            <div className="avatar avatar-sm avatar-circle">
                              <img className="avatar-img" src="./assets/img/160x160/img6.jpg" alt="Image Description" />
                            </div>
                            <div className="flex-grow-1 ms-3">
                              <h5 className="mb-0">Mark Williams</h5>
                              <p className="card-text text-body">mark@site.com</p>
                            </div>
                          </div>
                        </div>
                        <div className="dropdown-divider" />
                        {/* Dropdown */}
                        <div className="dropdown">
                          <a className="navbar-dropdown-submenu-item dropdown-item dropdown-toggle" href="javascript:;" id="navSubmenuPagesAccountDropdown1" data-bs-toggle="dropdown" aria-expanded="false">Set status</a>
                          <div className="dropdown-menu dropdown-menu-end navbar-dropdown-menu navbar-dropdown-menu-borderless navbar-dropdown-sub-menu" aria-labelledby="navSubmenuPagesAccountDropdown1">
                            <a className="dropdown-item" href="#">
                              <span className="legend-indicator bg-success me-1" /> Available
                            </a>
                            <a className="dropdown-item" href="#">
                              <span className="legend-indicator bg-danger me-1" /> Busy
                            </a>
                            <a className="dropdown-item" href="#">
                              <span className="legend-indicator bg-warning me-1" /> Away
                            </a>
                            <div className="dropdown-divider" />
                            <a className="dropdown-item" href="#"> Reset status
                            </a>
                          </div>
                        </div>
                        {/* End Dropdown */}
                        <a className="dropdown-item" href="#">Profile &amp; account</a>
                        <a className="dropdown-item" href="#">Settings</a>
                        <div className="dropdown-divider" />
                        <a className="dropdown-item" href="#">
                          <div className="d-flex align-items-center">
                            <div className="flex-shrink-0">
                              <div className="avatar avatar-sm avatar-dark avatar-circle">
                                <span className="avatar-initials">HS</span>
                              </div>
                            </div>
                            <div className="flex-grow-1 ms-2">
                              <h5 className="mb-0">Htmlstream <span className="badge bg-primary rounded-pill text-uppercase ms-1">PRO</span></h5>
                              <span className="card-text">hs.example.com</span>
                            </div>
                          </div>
                        </a>
                        <div className="dropdown-divider" />
                        {/* Dropdown */}
                        <div className="dropdown">
                          <a className="navbar-dropdown-submenu-item dropdown-item dropdown-toggle" href="javascript:;" id="navSubmenuPagesAccountDropdown2" data-bs-toggle="dropdown" aria-expanded="false">Customization</a>
                          <div className="dropdown-menu dropdown-menu-end navbar-dropdown-menu navbar-dropdown-menu-borderless navbar-dropdown-sub-menu" aria-labelledby="navSubmenuPagesAccountDropdown2">
                            <a className="dropdown-item" href="#">
                              Invite people
                            </a>
                            <a className="dropdown-item" href="#">
                              Analytics
                              <i className="bi-box-arrow-in-up-right" />
                            </a>
                            <a className="dropdown-item" href="#">
                              Customize Front
                              <i className="bi-box-arrow-in-up-right" />
                            </a>
                          </div>
                        </div>
                        {/* End Dropdown */}
                        <a className="dropdown-item" href="#">Manage team</a>
                        <div className="dropdown-divider" />
                        <a className="dropdown-item" href="#">Sign out</a>
                      </div>
                    </div>
                    {/* End Account */}
                  </li>
                </ul>
                {/* End Navbar */}
              </div>
            </div>
          </header>
          {/* ========== END HEADER ========== */}
          {/* ========== MAIN CONTENT ========== */}
          {/* Navbar Vertical */}
          <aside className="js-navbar-vertical-aside navbar navbar-vertical-aside navbar-vertical navbar-vertical-fixed navbar-expand-xl navbar-bordered bg-white  ">
            <div className="navbar-vertical-container">
              <div className="navbar-vertical-footer-offset">
                {/* Logo */}
                <a className="navbar-brand" href="./index.html" aria-label="Front">
                  <img className="navbar-brand-logo" src="./assets/svg/logos/logo.svg" alt="Logo" data-hs-theme-appearance="default" />
                  <img className="navbar-brand-logo" src="./assets/svg/logos-light/logo.svg" alt="Logo" data-hs-theme-appearance="dark" />
                  <img className="navbar-brand-logo-mini" src="./assets/svg/logos/logo-short.svg" alt="Logo" data-hs-theme-appearance="default" />
                  <img className="navbar-brand-logo-mini" src="./assets/svg/logos-light/logo-short.svg" alt="Logo" data-hs-theme-appearance="dark" />
                </a>
                {/* End Logo */}
                {/* Navbar Vertical Toggle */}
                <button type="button" className="js-navbar-vertical-aside-toggle-invoker navbar-aside-toggler">
                  <i className="bi-arrow-bar-left navbar-toggler-short-align" data-bs-template="<div class=&quot;tooltip d-none d-md-block&quot; role=&quot;tooltip&quot;><div class=&quot;arrow&quot;></div><div class=&quot;tooltip-inner&quot;></div></div>" data-bs-toggle="tooltip" data-bs-placement="right" title="Collapse" />
                  <i className="bi-arrow-bar-right navbar-toggler-full-align" data-bs-template="<div class=&quot;tooltip d-none d-md-block&quot; role=&quot;tooltip&quot;><div class=&quot;arrow&quot;></div><div class=&quot;tooltip-inner&quot;></div></div>" data-bs-toggle="tooltip" data-bs-placement="right" title="Expand" />
                </button>
                {/* End Navbar Vertical Toggle */}
                {/* Content */}
                <div className="navbar-vertical-content">
                  <div id="navbarVerticalMenu" className="nav nav-pills nav-vertical card-navbar-nav">
                    {/* Collapse */}
                    <div className="nav-item">
                      <a className="nav-link dropdown-toggle " href="#navbarVerticalMenuDashboards" role="button" data-bs-toggle="collapse" data-bs-target="#navbarVerticalMenuDashboards" aria-expanded="false" aria-controls="navbarVerticalMenuDashboards">
                        <i className="bi-house-door nav-icon" />
                        <span className="nav-link-title">Dashboards</span>
                      </a>
                      <div id="navbarVerticalMenuDashboards" className="nav-collapse collapse " data-bs-parent="#navbarVerticalMenu">
                        <a className="nav-link " href="./index.html">Default</a>
                        <a className="nav-link " href="./dashboard-alternative.html">Alternative</a>
                      </div>
                    </div>
                    {/* End Collapse */}
                    <span className="dropdown-header mt-4">Pages</span>
                    <small className="bi-three-dots nav-subtitle-replacer" />
                    {/* Collapse */}
                    <div className="navbar-nav nav-compact">
                    </div>
                    <div id="navbarVerticalMenuPagesMenu">
                      {/* Collapse */}
                      <div className="nav-item">
                        <a className="nav-link dropdown-toggle " href="#navbarVerticalMenuPagesUsersMenu" role="button" data-bs-toggle="collapse" data-bs-target="#navbarVerticalMenuPagesUsersMenu" aria-expanded="false" aria-controls="navbarVerticalMenuPagesUsersMenu">
                          <i className="bi-people nav-icon" />
                          <span className="nav-link-title">Users</span>
                        </a>
                        <div id="navbarVerticalMenuPagesUsersMenu" className="nav-collapse collapse " data-bs-parent="#navbarVerticalMenuPagesMenu">
                          <a className="nav-link " href="./users.html">Overview</a>
                          <a className="nav-link " href="./users-leaderboard.html">Leaderboard</a>
                          <a className="nav-link " href="./users-add-user.html">Add User <span className="badge bg-info rounded-pill ms-1">Hot</span></a>
                        </div>
                      </div>
                      {/* End Collapse */}
                      {/* Collapse */}
                      <div className="nav-item">
                        <a className="nav-link dropdown-toggle active" href="#navbarVerticalMenuPagesUserProfileMenu" role="button" data-bs-toggle="collapse" data-bs-target="#navbarVerticalMenuPagesUserProfileMenu" aria-expanded="true" aria-controls="navbarVerticalMenuPagesUserProfileMenu">
                          <i className="bi-person nav-icon" />
                          <span className="nav-link-title">User Profile <span className="badge bg-primary rounded-pill ms-1">5</span></span>
                        </a>
                        <div id="navbarVerticalMenuPagesUserProfileMenu" className="nav-collapse collapse show" data-bs-parent="#navbarVerticalMenuPagesMenu">
                          <a className="nav-link active" href="./user-profile.html">Profile</a>
                          <a className="nav-link " href="./user-profile-teams.html">Teams</a>
                          <a className="nav-link " href="./user-profile-projects.html">Projects</a>
                          <a className="nav-link " href="./user-profile-connections.html">Connections</a>
                          <a className="nav-link " href="./user-profile-my-profile.html">My Profile</a>
                        </div>
                      </div>
                      {/* End Collapse */}
                      {/* Collapse */}
                      <div className="nav-item">
                        <a className="nav-link dropdown-toggle " href="#navbarVerticalMenuPagesAccountMenu" role="button" data-bs-toggle="collapse" data-bs-target="#navbarVerticalMenuPagesAccountMenu" aria-expanded="false" aria-controls="navbarVerticalMenuPagesAccountMenu">
                          <i className="bi-person-badge nav-icon" />
                          <span className="nav-link-title">Account</span>
                        </a>
                        <div id="navbarVerticalMenuPagesAccountMenu" className="nav-collapse collapse " data-bs-parent="#navbarVerticalMenuPagesMenu">
                          <a className="nav-link " href="./account-settings.html">Settings</a>
                          <a className="nav-link " href="./account-billing.html">Billing</a>
                          <a className="nav-link " href="./account-invoice.html">Invoice</a>
                        </div>
                      </div>
                      {/* End Collapse */}
                      {/* Collapse */}
                      <div className="nav-item">
                        <a className="nav-link dropdown-toggle " href="#navbarVerticalMenuPagesEcommerceMenu" role="button" data-bs-toggle="collapse" data-bs-target="#navbarVerticalMenuPagesEcommerceMenu" aria-expanded="false" aria-controls="navbarVerticalMenuPagesEcommerceMenu">
                          <i className="bi-basket nav-icon" />
                          <span className="nav-link-title">E-commerce</span>
                        </a>
                        <div id="navbarVerticalMenuPagesEcommerceMenu" className="nav-collapse collapse " data-bs-parent="#navbarVerticalMenuPagesMenu">
                          <a className="nav-link " href="./ecommerce.html">Overview</a>
                          <div id="navbarVerticalMenuPagesMenuEcommerce">
                            {/* Collapse */}
                            <div className="nav-item">
                              <a className="nav-link dropdown-toggle" href="#navbarVerticalMenuPagesEcommerceProductsMenu" role="button" data-bs-toggle="collapse" data-bs-target="#navbarVerticalMenuPagesEcommerceProductsMenu" aria-expanded="false" aria-controls="navbarVerticalMenuPagesEcommerceProductsMenu">
                                Products
                              </a>
                              <div id="navbarVerticalMenuPagesEcommerceProductsMenu" className="nav-collapse collapse " data-bs-parent="#navbarVerticalMenuPagesMenuEcommerce">
                                <a className="nav-link " href="./ecommerce-products.html">Products</a>
                                <a className="nav-link " href="./ecommerce-product-details.html">Product Details</a>
                                <a className="nav-link " href="./ecommerce-add-product.html">Add Product</a>
                              </div>
                            </div>
                            {/* End Collapse */}
                            {/* Collapse */}
                            <div className="nav-item">
                              <a className="nav-link dropdown-toggle" href="#navbarVerticalMenuPagesEcommerceOrdersMenu" role="button" data-bs-toggle="collapse" data-bs-target="#navbarVerticalMenuPagesEcommerceOrdersMenu" aria-expanded="false" aria-controls="navbarVerticalMenuPagesEcommerceOrdersMenu">
                                Orders
                              </a>
                              <div id="navbarVerticalMenuPagesEcommerceOrdersMenu" className="nav-collapse collapse " data-bs-parent="#navbarVerticalMenuPagesMenuEcommerce">
                                <a className="nav-link " href="./ecommerce-orders.html">Orders</a>
                                <a className="nav-link " href="./ecommerce-order-details.html">Order Details</a>
                              </div>
                            </div>
                            {/* End Collapse */}
                            {/* Collapse */}
                            <div className="nav-item">
                              <a className="nav-link dropdown-toggle" href="#navbarVerticalMenuPagesEcommerceCustomersMenu" role="button" data-bs-toggle="collapse" data-bs-target="#navbarVerticalMenuPagesEcommerceCustomersMenu" aria-expanded="false" aria-controls="navbarVerticalMenuPagesEcommerceCustomersMenu">
                                Customers
                              </a>
                              <div id="navbarVerticalMenuPagesEcommerceCustomersMenu" className="nav-collapse collapse " data-bs-parent="#navbarVerticalMenuPagesMenuEcommerce">
                                <a className="nav-link " href="./ecommerce-customers.html">Customers</a>
                                <a className="nav-link " href="./ecommerce-customer-details.html">Customer Details</a>
                                <a className="nav-link " href="./ecommerce-add-customers.html">Add Customers</a>
                              </div>
                            </div>
                            {/* End Collapse */}
                          </div>
                          <a className="nav-link " href="./ecommerce-referrals.html">Referrals</a>
                          <a className="nav-link " href="./ecommerce-manage-reviews.html">Manage Reviews</a>
                          <a className="nav-link " href="./ecommerce-checkout.html">Checkout</a>
                        </div>
                      </div>
                      {/* End Collapse */}
                      {/* Collapse */}
                      <div className="nav-item">
                        <a className="nav-link dropdown-toggle " href="#navbarVerticalMenuPagesProjectsMenu" role="button" data-bs-toggle="collapse" data-bs-target="#navbarVerticalMenuPagesProjectsMenu" aria-expanded="false" aria-controls="navbarVerticalMenuPagesProjectsMenu">
                          <i className="bi-stickies nav-icon" />
                          <span className="nav-link-title">Projects</span>
                        </a>
                        <div id="navbarVerticalMenuPagesProjectsMenu" className="nav-collapse collapse " data-bs-parent="#navbarVerticalMenuPagesMenu">
                          <a className="nav-link " href="./projects.html">Overview</a>
                          <a className="nav-link " href="./projects-timeline.html">Timeline</a>
                        </div>
                      </div>
                      {/* End Collapse */}
                      {/* Collapse */}
                      <div className="nav-item">
                        <a className="nav-link dropdown-toggle " href="#navbarVerticalMenuPagesProjectMenu" role="button" data-bs-toggle="collapse" data-bs-target="#navbarVerticalMenuPagesProjectMenu" aria-expanded="false" aria-controls="navbarVerticalMenuPagesProjectMenu">
                          <i className="bi-briefcase nav-icon" />
                          <span className="nav-link-title">Project</span>
                        </a>
                        <div id="navbarVerticalMenuPagesProjectMenu" className="nav-collapse collapse " data-bs-parent="#navbarVerticalMenuPagesMenu">
                          <a className="nav-link " href="./project.html">Overview</a>
                          <a className="nav-link " href="./project-files.html">Files</a>
                          <a className="nav-link " href="./project-activity.html">Activity</a>
                          <a className="nav-link " href="./project-teams.html">Teams</a>
                          <a className="nav-link " href="./project-settings.html">Settings</a>
                        </div>
                      </div>
                      {/* End Collapse */}
                      {/* Collapse */}
                      <div className="nav-item">
                        <a className="nav-link dropdown-toggle  collapsed" href="#" role="button" data-bs-toggle="collapse" data-bs-target="#navbarVerticalMenuAuthentication" aria-expanded="false" aria-controls="navbarVerticalMenuAuthentication">
                          <i className="bi-shield-lock nav-icon" />
                          <span className="nav-link-title">Authentication</span>
                        </a>
                        <div id="navbarVerticalMenuAuthentication" className="nav-collapse collapse " data-bs-parent="#navbarVerticalMenu">
                          <div id="navbarVerticalMenuAuthenticationMenu">
                            {/* Collapse */}
                            <div className="nav-item">
                              <a className="nav-link dropdown-toggle " href="#navbarVerticalMenuAuthenticationLoginMenu" role="button" data-bs-toggle="collapse" data-bs-target="#navbarVerticalMenuAuthenticationLoginMenu" aria-expanded="false" aria-controls="navbarVerticalMenuAuthenticationLoginMenu">
                                Log In
                              </a>
                              <div id="navbarVerticalMenuAuthenticationLoginMenu" className="nav-collapse collapse " data-bs-parent="#navbarVerticalMenuAuthenticationMenu">
                                <a className="nav-link " href="./authentication-login-basic.html">Basic</a>
                                <a className="nav-link " href="./authentication-login-cover.html">Cover</a>
                              </div>
                            </div>
                            {/* End Collapse */}
                            {/* Collapse */}
                            <div className="nav-item">
                              <a className="nav-link dropdown-toggle " href="#navbarVerticalMenuAuthenticationSignupMenu" role="button" data-bs-toggle="collapse" data-bs-target="#navbarVerticalMenuAuthenticationSignupMenu" aria-expanded="false" aria-controls="navbarVerticalMenuAuthenticationSignupMenu">
                                Sign Up
                              </a>
                              <div id="navbarVerticalMenuAuthenticationSignupMenu" className="nav-collapse collapse " data-bs-parent="#navbarVerticalMenuAuthenticationMenu">
                                <a className="nav-link " href="./authentication-signup-basic.html">Basic</a>
                                <a className="nav-link " href="./authentication-signup-cover.html">Cover</a>
                              </div>
                            </div>
                            {/* End Collapse */}
                            {/* Collapse */}
                            <div className="nav-item">
                              <a className="nav-link dropdown-toggle " href="#navbarVerticalMenuAuthenticationResetPasswordMenu" role="button" data-bs-toggle="collapse" data-bs-target="#navbarVerticalMenuAuthenticationResetPasswordMenu" aria-expanded="false" aria-controls="navbarVerticalMenuAuthenticationResetPasswordMenu">
                                Reset Password
                              </a>
                              <div id="navbarVerticalMenuAuthenticationResetPasswordMenu" className="nav-collapse collapse " data-bs-parent="#navbarVerticalMenuAuthenticationMenu">
                                <a className="nav-link " href="./authentication-reset-password-basic.html">Basic</a>
                                <a className="nav-link " href="./authentication-reset-password-cover.html">Cover</a>
                              </div>
                            </div>
                            {/* End Collapse */}
                            {/* Collapse */}
                            <div className="nav-item">
                              <a className="nav-link dropdown-toggle " href="#navbarVerticalMenuAuthenticationEmailVerificationMenu" role="button" data-bs-toggle="collapse" data-bs-target="#navbarVerticalMenuAuthenticationEmailVerificationMenu" aria-expanded="false" aria-controls="navbarVerticalMenuAuthenticationEmailVerificationMenu">
                                Email Verification
                              </a>
                              <div id="navbarVerticalMenuAuthenticationEmailVerificationMenu" className="nav-collapse collapse " data-bs-parent="#navbarVerticalMenuAuthenticationMenu">
                                <a className="nav-link " href="./authentication-email-verification-basic.html">Basic</a>
                                <a className="nav-link " href="./authentication-email-verification-cover.html">Cover</a>
                              </div>
                            </div>
                            {/* End Collapse */}
                            {/* Collapse */}
                            <div className="nav-item">
                              <a className="nav-link dropdown-toggle " href="#navbarVerticalMenuAuthentication2StepVerificationMenu" role="button" data-bs-toggle="collapse" data-bs-target="#navbarVerticalMenuAuthentication2StepVerificationMenu" aria-expanded="false" aria-controls="navbarVerticalMenuAuthentication2StepVerificationMenu">
                                2-step Verification
                              </a>
                              <div id="navbarVerticalMenuAuthentication2StepVerificationMenu" className="nav-collapse collapse " data-bs-parent="#navbarVerticalMenuAuthenticationMenu">
                                <a className="nav-link " href="./authentication-2-step-verification-basic.html">Basic</a>
                                <a className="nav-link " href="./authentication-2-step-verification-cover.html">Cover</a>
                              </div>
                            </div>
                            {/* End Collapse */}
                            <a className="nav-link" href="javascript:;" data-bs-toggle="modal" data-bs-target="#welcomeMessageModal">Welcome Message</a>
                            <a className="nav-link " href="./error-404.html">Error 404</a>
                            <a className="nav-link " href="./error-500.html">Error 500</a>
                          </div>
                        </div>
                      </div>
                      {/* End Collapse */}
                      <div className="nav-item">
                        <a className="nav-link " href="./api-keys.html" data-placement="left">
                          <i className="bi-key nav-icon" />
                          <span className="nav-link-title">API Keys</span>
                        </a>
                      </div>
                      <div className="nav-item">
                        <a className="nav-link " href="./welcome-page.html" data-placement="left">
                          <i className="bi-eye nav-icon" />
                          <span className="nav-link-title">Welcome Page</span>
                        </a>
                      </div>
                      <div className="nav-item">
                        <a className="nav-link " href="./landing.html" data-placement="left">
                          <i className="bi-box-seam nav-icon" />
                          <span className="nav-link-title">Landing Page <span className="badge bg-info rounded-pill ms-1">New</span></span>
                        </a>
                      </div>
                    </div>
                    {/* End Collapse */}
                    <span className="dropdown-header mt-4">Apps</span>
                    <small className="bi-three-dots nav-subtitle-replacer" />
                    <div className="nav-item">
                      <a className="nav-link " href="./apps-kanban.html" data-placement="left">
                        <i className="bi-kanban nav-icon" />
                        <span className="nav-link-title">Kanban</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a className="nav-link " href="./apps-calendar.html" data-placement="left">
                        <i className="bi-calendar-week nav-icon" />
                        <span className="nav-link-title">Calendar</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a className="nav-link " href="./apps-invoice-generator.html" data-placement="left">
                        <i className="bi-receipt nav-icon" />
                        <span className="nav-link-title">Invoice Generator</span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a className="nav-link " href="./apps-file-manager.html" data-placement="left">
                        <i className="bi-folder2-open nav-icon" />
                        <span className="nav-link-title">File Manager</span>
                      </a>
                    </div>
                    <span className="dropdown-header mt-4">Layouts</span>
                    <small className="bi-three-dots nav-subtitle-replacer" />
                    <div className="nav-item">
                      <a className="nav-link " href="./layouts/index.html" data-placement="left">
                        <i className="bi-grid-1x2 nav-icon" />
                        <span className="nav-link-title">Layouts</span>
                      </a>
                    </div>
                    <span className="dropdown-header mt-4">Documentation</span>
                    <small className="bi-three-dots nav-subtitle-replacer" />
                    <div className="nav-item">
                      <a className="nav-link " href="./documentation/index.html" data-placement="left">
                        <i className="bi-book nav-icon" />
                        <span className="nav-link-title">Documentation <span className="badge bg-primary rounded-pill ms-1">v2.1.1</span></span>
                      </a>
                    </div>
                    <div className="nav-item">
                      <a className="nav-link " href="./documentation/typography.html" data-placement="left">
                        <i className="bi-layers nav-icon" />
                        <span className="nav-link-title">Components</span>
                      </a>
                    </div>
                  </div>
                </div>
                {/* End Content */}
                {/* Footer */}
                <div className="navbar-vertical-footer">
                  <ul className="navbar-vertical-footer-list">
                    <li className="navbar-vertical-footer-list-item">
                      {/* Style Switcher */}
                      <div className="dropdown dropup">
                        <button type="button" className="btn btn-ghost-secondary btn-icon rounded-circle" id="selectThemeDropdown" data-bs-toggle="dropdown" aria-expanded="false" data-bs-dropdown-animation>
                        </button>
                        <div className="dropdown-menu navbar-dropdown-menu navbar-dropdown-menu-borderless" aria-labelledby="selectThemeDropdown">
                          <a className="dropdown-item" href="#" data-icon="bi-moon-stars" data-value="auto">
                            <i className="bi-moon-stars me-2" />
                            <span className="text-truncate" title="Auto (system default)">Auto (system default)</span>
                          </a>
                          <a className="dropdown-item" href="#" data-icon="bi-brightness-high" data-value="default">
                            <i className="bi-brightness-high me-2" />
                            <span className="text-truncate" title="Default (light mode)">Default (light mode)</span>
                          </a>
                          <a className="dropdown-item active" href="#" data-icon="bi-moon" data-value="dark">
                            <i className="bi-moon me-2" />
                            <span className="text-truncate" title="Dark">Dark</span>
                          </a>
                        </div>
                      </div>
                      {/* End Style Switcher */}
                    </li>
                    <li className="navbar-vertical-footer-list-item">
                      {/* Other Links */}
                      <div className="dropdown dropup">
                        <button type="button" className="btn btn-ghost-secondary btn-icon rounded-circle" id="otherLinksDropdown" data-bs-toggle="dropdown" aria-expanded="false" data-bs-dropdown-animation>
                          <i className="bi-info-circle" />
                        </button>
                        <div className="dropdown-menu navbar-dropdown-menu-borderless" aria-labelledby="otherLinksDropdown">
                          <span className="dropdown-header">Help</span>
                          <a className="dropdown-item" href="#">
                            <i className="bi-journals dropdown-item-icon" />
                            <span className="text-truncate" title="Resources & tutorials">Resources &amp; tutorials</span>
                          </a>
                          <a className="dropdown-item" href="#">
                            <i className="bi-command dropdown-item-icon" />
                            <span className="text-truncate" title="Keyboard shortcuts">Keyboard shortcuts</span>
                          </a>
                          <a className="dropdown-item" href="#">
                            <i className="bi-alt dropdown-item-icon" />
                            <span className="text-truncate" title="Connect other apps">Connect other apps</span>
                          </a>
                          <a className="dropdown-item" href="#">
                            <i className="bi-gift dropdown-item-icon" />
                            <span className="text-truncate" title="What's new?">What's new?</span>
                          </a>
                          <div className="dropdown-divider" />
                          <span className="dropdown-header">Contacts</span>
                          <a className="dropdown-item" href="#">
                            <i className="bi-chat-left-dots dropdown-item-icon" />
                            <span className="text-truncate" title="Contact support">Contact support</span>
                          </a>
                        </div>
                      </div>
                      {/* End Other Links */}
                    </li>
                    <li className="navbar-vertical-footer-list-item">
                      {/* Language */}
                      <div className="dropdown dropup">
                        <button type="button" className="btn btn-ghost-secondary btn-icon rounded-circle" id="selectLanguageDropdown" data-bs-toggle="dropdown" aria-expanded="false" data-bs-dropdown-animation>
                          <img className="avatar avatar-xss avatar-circle" src="./assets/vendor/flag-icon-css/flags/1x1/us.svg" alt="United States Flag" />
                        </button>
                        <div className="dropdown-menu navbar-dropdown-menu-borderless" aria-labelledby="selectLanguageDropdown">
                          <span className="dropdown-header">Select language</span>
                          <a className="dropdown-item" href="#">
                            <img className="avatar avatar-xss avatar-circle me-2" src="./assets/vendor/flag-icon-css/flags/1x1/us.svg" alt="Flag" />
                            <span className="text-truncate" title="English">English (US)</span>
                          </a>
                          <a className="dropdown-item" href="#">
                            <img className="avatar avatar-xss avatar-circle me-2" src="./assets/vendor/flag-icon-css/flags/1x1/gb.svg" alt="Flag" />
                            <span className="text-truncate" title="English">English (UK)</span>
                          </a>
                          <a className="dropdown-item" href="#">
                            <img className="avatar avatar-xss avatar-circle me-2" src="./assets/vendor/flag-icon-css/flags/1x1/de.svg" alt="Flag" />
                            <span className="text-truncate" title="Deutsch">Deutsch</span>
                          </a>
                          <a className="dropdown-item" href="#">
                            <img className="avatar avatar-xss avatar-circle me-2" src="./assets/vendor/flag-icon-css/flags/1x1/dk.svg" alt="Flag" />
                            <span className="text-truncate" title="Dansk">Dansk</span>
                          </a>
                          <a className="dropdown-item" href="#">
                            <img className="avatar avatar-xss avatar-circle me-2" src="./assets/vendor/flag-icon-css/flags/1x1/it.svg" alt="Flag" />
                            <span className="text-truncate" title="Italiano">Italiano</span>
                          </a>
                          <a className="dropdown-item" href="#">
                            <img className="avatar avatar-xss avatar-circle me-2" src="./assets/vendor/flag-icon-css/flags/1x1/cn.svg" alt="Flag" />
                            <span className="text-truncate" title="中文 (繁體)">中文 (繁體)</span>
                          </a>
                        </div>
                      </div>
                      {/* End Language */}
                    </li>
                  </ul>
                </div>
                {/* End Footer */}
              </div>
            </div>
          </aside>
          <main id="content" role="main" className="main">
            {/* Content */}
            <div className="content container-fluid">
              <div className="row justify-content-lg-center">
                <div className="col-lg-10">
                  {/* Profile Cover */}
                  <div className="profile-cover">
                    <div className="profile-cover-img-wrapper">
                      <img className="profile-cover-img" src="./assets/img/1920x400/img1.jpg" alt="Image Description" />
                    </div>
                  </div>
                  {/* End Profile Cover */}
                  {/* Profile Header */}
                  <div className="text-center mb-5">
                    {/* Avatar */}
                    <div className="avatar avatar-xxl avatar-circle profile-cover-avatar">
                      <img className="avatar-img" src="./assets/img/160x160/img9.jpg" alt="Image Description" />
                      <span className="avatar-status avatar-status-success" />
                    </div>
                    {/* End Avatar */}
                    <h1 className="page-header-title">Ella Lauda <i className="bi-patch-check-fill fs-2 text-primary" data-bs-toggle="tooltip" data-bs-placement="top" title="Top endorsed" /></h1>
                    {/* List */}
                    <ul className="list-inline list-px-2">
                      <li className="list-inline-item">
                        <i className="bi-building me-1" />
                        <span>Htmlstream</span>
                      </li>
                      <li className="list-inline-item">
                        <i className="bi-geo-alt me-1" />
                        <a href="#">San Francisco,</a>
                        <a href="#">US</a>
                      </li>
                      <li className="list-inline-item">
                        <i className="bi-calendar-week me-1" />
                        <span>Joined March 2017</span>
                      </li>
                    </ul>
                    {/* End List */}
                  </div>
                  {/* End Profile Header */}
                  {/* Nav */}
                  <div className="js-nav-scroller hs-nav-scroller-horizontal mb-5">
                    <span className="hs-nav-scroller-arrow-prev" style={{display: 'none'}}>
                      <a className="hs-nav-scroller-arrow-link" href="javascript:;">
                        <i className="bi-chevron-left" />
                      </a>
                    </span>
                    <span className="hs-nav-scroller-arrow-next" style={{display: 'none'}}>
                      <a className="hs-nav-scroller-arrow-link" href="javascript:;">
                        <i className="bi-chevron-right" />
                      </a>
                    </span>
                    <ul className="nav nav-tabs align-items-center">
                      <li className="nav-item">
                        <a className="nav-link active" href="./user-profile.html">Profile</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link " href="./user-profile-teams.html">Teams</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link " href="./user-profile-projects.html">Projects <span className="badge bg-soft-dark text-dark rounded-circle ms-1">3</span></a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link " href="./user-profile-connections.html">Connections</a>
                      </li>
                      <li className="nav-item ms-auto">
                        <div className="d-flex gap-2">
                          {/* Form Check */}
                          <div className="form-check form-check-switch">
                            <input className="form-check-input" type="checkbox" defaultValue id="connectCheckbox" />
                            <label className="form-check-label btn btn-sm" htmlFor="connectCheckbox">
                              <span className="form-check-default">
                                <i className="bi-person-plus-fill" /> Connect
                              </span>
                              <span className="form-check-active">
                                <i className="bi-check-lg me-2" /> Connected
                              </span>
                            </label>
                          </div>
                          {/* End Form Check */}
                          <a className="btn btn-icon btn-sm btn-white" href="#">
                            <i className="bi-list-ul me-1" />
                          </a>
                          {/* Dropdown */}
                          <div className="dropdown nav-scroller-dropdown">
                            <button type="button" className="btn btn-white btn-icon btn-sm" id="profileDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                              <i className="bi-three-dots-vertical" />
                            </button>
                            <div className="dropdown-menu dropdown-menu-end mt-1" aria-labelledby="profileDropdown">
                              <span className="dropdown-header">Settings</span>
                              <a className="dropdown-item" href="#">
                                <i className="bi-share-fill dropdown-item-icon" /> Share profile
                              </a>
                              <a className="dropdown-item" href="#">
                                <i className="bi-slash-circle dropdown-item-icon" /> Block page and profile
                              </a>
                              <a className="dropdown-item" href="#">
                                <i className="bi-info-circle dropdown-item-icon" /> Suggest edits
                              </a>
                              <div className="dropdown-divider" />
                              <span className="dropdown-header">Feedback</span>
                              <a className="dropdown-item" href="#">
                                <i className="bi-flag dropdown-item-icon" /> Report
                              </a>
                            </div>
                          </div>
                          {/* End Dropdown */}
                        </div>
                      </li>
                    </ul>
                  </div>
                  {/* End Nav */}
                  <div className="row">
                    <div className="col-lg-4">
                      {/* Card */}
                      <div className="card card-body mb-3 mb-lg-5">
                        <h5>Complete your profile</h5>
                        {/* Progress */}
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="progress flex-grow-1">
                            <div className="progress-bar bg-primary" role="progressbar" style={{width: '82%'}} aria-valuenow={82} aria-valuemin={0} aria-valuemax={100} />
                          </div>
                          <span className="ms-4">82%</span>
                        </div>
                        {/* End Progress */}
                      </div>
                      {/* End Card */}
                      {/* Sticky Block Start Point */}
                      <div id="accountSidebarNav" />
                      {/* Card */}
                      <div className="js-sticky-block card mb-3 mb-lg-5" data-hs-sticky-block-options="{
                       &quot;parentSelector&quot;: &quot;#accountSidebarNav&quot;,
                       &quot;breakpoint&quot;: &quot;lg&quot;,
                       &quot;startPoint&quot;: &quot;#accountSidebarNav&quot;,
                       &quot;endPoint&quot;: &quot;#stickyBlockEndPoint&quot;,
                       &quot;stickyOffsetTop&quot;: 20
                     }">
                        {/* Header */}
                        <div className="card-header">
                          <h4 className="card-header-title">Profile</h4>
                        </div>
                        {/* End Header */}
                        {/* Body */}
                        <div className="card-body">
                          <ul className="list-unstyled list-py-2 text-dark mb-0">
                            <li className="pb-0"><span className="card-subtitle">About</span></li>
                            <li><i className="bi-person dropdown-item-icon" /> Ella Lauda</li>
                            <li><i className="bi-briefcase dropdown-item-icon" /> No department</li>
                            <li><i className="bi-building dropdown-item-icon" /> Htmlstream</li>
                            <li className="pt-4 pb-0"><span className="card-subtitle">Contacts</span></li>
                            <li><i className="bi-at dropdown-item-icon" /> ella@site.com</li>
                            <li><i className="bi-phone dropdown-item-icon" /> +1 (609) 972-22-22</li>
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
                          <div className="card-body card-body-height" style={{height: '30rem'}}>
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
                                  <th style={{width: '40%'}}>Progress</th>
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
                                        <div className="progress-bar" role="progressbar" style={{width: '0%'}} aria-valuenow={0} aria-valuemin={0} aria-valuemax={100} />
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
                                        <div className="progress-bar" role="progressbar" style={{width: '45%'}} aria-valuenow={45} aria-valuemin={0} aria-valuemax={100} />
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
                                        <div className="progress-bar" role="progressbar" style={{width: '59%'}} aria-valuenow={59} aria-valuemin={0} aria-valuemax={100} />
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
                                        <div className="progress-bar bg-success" role="progressbar" style={{width: '57%'}} aria-valuenow={57} aria-valuemin={0} aria-valuemax={100} />
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
                                        <div className="progress-bar bg-success" role="progressbar" style={{width: '100%'}} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
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
                                        <div className="progress-bar" role="progressbar" style={{width: '0%'}} aria-valuenow={0} aria-valuemin={0} aria-valuemax={100} />
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
            {/* End Content */}
            {/* Footer */}
            <div className="footer">
              <div className="row justify-content-between align-items-center">
                <div className="col">
                  <p className="fs-6 mb-0">© Front. <span className="d-none d-sm-inline-block">2022 Htmlstream.</span></p>
                </div>
                {/* End Col */}
                <div className="col-auto">
                  <div className="d-flex justify-content-end">
                    {/* List Separator */}
                    <ul className="list-inline list-separator">
                      <li className="list-inline-item">
                        <a className="list-separator-link" href="#">FAQ</a>
                      </li>
                      <li className="list-inline-item">
                        <a className="list-separator-link" href="#">License</a>
                      </li>
                      <li className="list-inline-item">
                        {/* Keyboard Shortcuts Toggle */}
                        <button className="btn btn-ghost-secondary btn btn-icon btn-ghost-secondary rounded-circle" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasKeyboardShortcuts" aria-controls="offcanvasKeyboardShortcuts">
                          <i className="bi-command" />
                        </button>
                        {/* End Keyboard Shortcuts Toggle */}
                      </li>
                    </ul>
                    {/* End List Separator */}
                  </div>
                </div>
                {/* End Col */}
              </div>
              {/* End Row */}
            </div>
            {/* End Footer */}
          </main>
          {/* ========== END MAIN CONTENT ========== */}
          {/* ========== SECONDARY CONTENTS ========== */}
          {/* Keyboard Shortcuts */}
          <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasKeyboardShortcuts" aria-labelledby="offcanvasKeyboardShortcutsLabel">
            <div className="offcanvas-header">
              <h4 id="offcanvasKeyboardShortcutsLabel" className="mb-0">Keyboard shortcuts</h4>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
            </div>
            <div className="offcanvas-body">
              <div className="list-group list-group-sm list-group-flush list-group-no-gutters mb-5">
                <div className="list-group-item">
                  <h5 className="mb-1">Formatting</h5>
                </div>
                <div className="list-group-item">
                  <div className="row align-items-center">
                    <div className="col-5">
                      <span className="fw-semibold">Bold</span>
                    </div>
                    {/* End Col */}
                    <div className="col-7 text-end">
                      <kbd className="d-inline-block mb-1">Ctrl</kbd> <span className="text-muted small">+</span> <kbd className="d-inline-block mb-1">b</kbd>
                    </div>
                  </div>
                  {/* End Row */}
                </div>
                <div className="list-group-item">
                  <div className="row align-items-center">
                    <div className="col-5">
                      <em>italic</em>
                    </div>
                    {/* End Col */}
                    <div className="col-7 text-end">
                      <kbd className="d-inline-block mb-1">Ctrl</kbd> <span className="text-muted small">+</span> <kbd className="d-inline-block mb-1">i</kbd>
                    </div>
                    {/* End Col */}
                  </div>
                  {/* End Row */}
                </div>
                <div className="list-group-item">
                  <div className="row align-items-center">
                    <div className="col-5">
                      <u>Underline</u>
                    </div>
                    {/* End Col */}
                    <div className="col-7 text-end">
                      <kbd className="d-inline-block mb-1">Ctrl</kbd> <span className="text-muted small">+</span> <kbd className="d-inline-block mb-1">u</kbd>
                    </div>
                    {/* End Col */}
                  </div>
                  {/* End Row */}
                </div>
                <div className="list-group-item">
                  <div className="row align-items-center">
                    <div className="col-5">
                      <s>Strikethrough</s>
                    </div>
                    {/* End Col */}
                    <div className="col-7 text-end">
                      <kbd className="d-inline-block mb-1">Ctrl</kbd> <span className="text-muted small">+</span> <kbd className="d-inline-block mb-1">Alt</kbd> <span className="text-muted small">+</span> <kbd className="d-inline-block mb-1">s</kbd>
                      {/* End Col */}
                    </div>
                  </div>
                  {/* End Row */}
                </div>
                <div className="list-group-item">
                  <div className="row align-items-center">
                    <div className="col-5">
                      <span className="small">Small text</span>
                    </div>
                    {/* End Col */}
                    <div className="col-7 text-end">
                      <kbd className="d-inline-block mb-1">Ctrl</kbd> <span className="text-muted small">+</span> <kbd className="d-inline-block mb-1">s</kbd>
                    </div>
                    {/* End Col */}
                  </div>
                  {/* End Row */}
                </div>
                <div className="list-group-item">
                  <div className="row align-items-center">
                    <div className="col-5">
                      <mark>Highlight</mark>
                    </div>
                    {/* End Col */}
                    <div className="col-7 text-end">
                      <kbd className="d-inline-block mb-1">Ctrl</kbd> <span className="text-muted small">+</span> <kbd className="d-inline-block mb-1">e</kbd>
                    </div>
                    {/* End Col */}
                  </div>
                  {/* End Row */}
                </div>
              </div>
              <div className="list-group list-group-sm list-group-flush list-group-no-gutters mb-5">
                <div className="list-group-item">
                  <h5 className="mb-1">Insert</h5>
                </div>
                <div className="list-group-item">
                  <div className="row align-items-center">
                    <div className="col-5">
                      <span>Mention person <a href="#">(@Brian)</a></span>
                    </div>
                    {/* End Col */}
                    <div className="col-7 text-end">
                      <kbd className="d-inline-block mb-1">@</kbd>
                    </div>
                    {/* End Col */}
                  </div>
                  {/* End Row */}
                </div>
                <div className="list-group-item">
                  <div className="row align-items-center">
                    <div className="col-5">
                      <span>Link to doc <a href="#">(+Meeting notes)</a></span>
                    </div>
                    {/* End Col */}
                    <div className="col-7 text-end">
                      <kbd className="d-inline-block mb-1">+</kbd>
                    </div>
                    {/* End Col */}
                  </div>
                  {/* End Row */}
                </div>
                <div className="list-group-item">
                  <div className="row align-items-center">
                    <div className="col-5">
                      <a href="#">#hashtag</a>
                    </div>
                    {/* End Col */}
                    <div className="col-7 text-end">
                      <kbd className="d-inline-block mb-1">#hashtag</kbd>
                    </div>
                    {/* End Col */}
                  </div>
                  {/* End Row */}
                </div>
                <div className="list-group-item">
                  <div className="row align-items-center">
                    <div className="col-5">
                      <span>Date</span>
                    </div>
                    {/* End Col */}
                    <div className="col-7 text-end">
                      <kbd className="d-inline-block mb-1">/date</kbd>
                      <kbd className="d-inline-block mb-1">Space</kbd>
                      <kbd className="d-inline-block mb-1">/datetime</kbd>
                      <kbd className="d-inline-block mb-1">/datetime</kbd>
                      <kbd className="d-inline-block mb-1">Space</kbd>
                    </div>
                    {/* End Col */}
                  </div>
                  {/* End Row */}
                </div>
                <div className="list-group-item">
                  <div className="row align-items-center">
                    <div className="col-5">
                      <span>Time</span>
                    </div>
                    {/* End Col */}
                    <div className="col-7 text-end">
                      <kbd className="d-inline-block mb-1">/time</kbd>
                      <kbd className="d-inline-block mb-1">Space</kbd>
                    </div>
                    {/* End Col */}
                  </div>
                  {/* End Row */}
                </div>
                <div className="list-group-item">
                  <div className="row align-items-center">
                    <div className="col-5">
                      <span>Note box</span>
                    </div>
                    {/* End Col */}
                    <div className="col-7 text-end">
                      <kbd className="d-inline-block mb-1">/note</kbd>
                      <kbd className="d-inline-block mb-1">Enter</kbd>
                      <kbd className="d-inline-block mb-1">/note red</kbd>
                      <kbd className="d-inline-block mb-1">/note red</kbd>
                      <kbd className="d-inline-block mb-1">Enter</kbd>
                    </div>
                    {/* End Col */}
                  </div>
                  {/* End Row */}
                </div>
              </div>
              <div className="list-group list-group-sm list-group-flush list-group-no-gutters mb-5">
                <div className="list-group-item">
                  <h5 className="mb-1">Editing</h5>
                </div>
                <div className="list-group-item">
                  <div className="row align-items-center">
                    <div className="col-5">
                      <span>Find and replace</span>
                    </div>
                    {/* End Col */}
                    <div className="col-7 text-end">
                      <kbd className="d-inline-block mb-1">Ctrl</kbd> <span className="text-muted small">+</span> <kbd className="d-inline-block mb-1">r</kbd>
                    </div>
                    {/* End Col */}
                  </div>
                  {/* End Row */}
                </div>
                <div className="list-group-item">
                  <div className="row align-items-center">
                    <div className="col-5">
                      <span>Find next</span>
                    </div>
                    {/* End Col */}
                    <div className="col-7 text-end">
                      <kbd className="d-inline-block mb-1">Ctrl</kbd> <span className="text-muted small">+</span> <kbd className="d-inline-block mb-1">n</kbd>
                    </div>
                    {/* End Col */}
                  </div>
                  {/* End Row */}
                </div>
                <div className="list-group-item">
                  <div className="row align-items-center">
                    <div className="col-5">
                      <span>Find previous</span>
                    </div>
                    {/* End Col */}
                    <div className="col-7 text-end">
                      <kbd className="d-inline-block mb-1">Ctrl</kbd> <span className="text-muted small">+</span> <kbd className="d-inline-block mb-1">p</kbd>
                    </div>
                    {/* End Col */}
                  </div>
                  {/* End Row */}
                </div>
                <div className="list-group-item">
                  <div className="row align-items-center">
                    <div className="col-5">
                      <span>Indent</span>
                    </div>
                    {/* End Col */}
                    <div className="col-7 text-end">
                      <kbd className="d-inline-block mb-1">Tab</kbd>
                    </div>
                    {/* End Col */}
                  </div>
                  {/* End Row */}
                </div>
                <div className="list-group-item">
                  <div className="row align-items-center">
                    <div className="col-5">
                      <span>Un-indent</span>
                    </div>
                    {/* End Col */}
                    <div className="col-7 text-end">
                      <kbd className="d-inline-block mb-1">Shift</kbd> <span className="text-muted small">+</span> <kbd className="d-inline-block mb-1">Tab</kbd>
                    </div>
                    {/* End Col */}
                  </div>
                  {/* End Row */}
                </div>
                <div className="list-group-item">
                  <div className="row align-items-center">
                    <div className="col-5">
                      <span>Move line up</span>
                    </div>
                    {/* End Col */}
                    <div className="col-7 text-end">
                      <kbd className="d-inline-block mb-1">Ctrl</kbd> <span className="text-muted small">+</span> <kbd className="d-inline-block mb-1">Shift</kbd> <span className="text-muted small">+</span> <kbd className="d-inline-block mb-1"><i className="bi-arrow-up-short" /></kbd>
                    </div>
                    {/* End Col */}
                  </div>
                  {/* End Row */}
                </div>
                <div className="list-group-item">
                  <div className="row align-items-center">
                    <div className="col-5">
                      <span>Move line down</span>
                    </div>
                    {/* End Col */}
                    <div className="col-7 text-end">
                      <kbd className="d-inline-block mb-1">Ctrl</kbd> <span className="text-muted small">+</span> <kbd className="d-inline-block mb-1">Shift</kbd> <span className="text-muted small">+</span> <kbd className="d-inline-block mb-1"><i className="bi-arrow-down-short fs-5" /></kbd>
                    </div>
                    {/* End Col */}
                  </div>
                  {/* End Row */}
                </div>
                <div className="list-group-item">
                  <div className="row align-items-center">
                    <div className="col-5">
                      <span>Add a comment</span>
                    </div>
                    {/* End Col */}
                    <div className="col-7 text-end">
                      <kbd className="d-inline-block mb-1">Ctrl</kbd> <span className="text-muted small">+</span> <kbd className="d-inline-block mb-1">Alt</kbd> <span className="text-muted small">+</span> <kbd className="d-inline-block mb-1">m</kbd>
                    </div>
                    {/* End Col */}
                  </div>
                  {/* End Row */}
                </div>
                <div className="list-group-item">
                  <div className="row align-items-center">
                    <div className="col-5">
                      <span>Undo</span>
                    </div>
                    {/* End Col */}
                    <div className="col-7 text-end">
                      <kbd className="d-inline-block mb-1">Ctrl</kbd> <span className="text-muted small">+</span> <kbd className="d-inline-block mb-1">z</kbd>
                    </div>
                    {/* End Col */}
                  </div>
                  {/* End Row */}
                </div>
                <div className="list-group-item">
                  <div className="row align-items-center">
                    <div className="col-5">
                      <span>Redo</span>
                    </div>
                    {/* End Col */}
                    <div className="col-7 text-end">
                      <kbd className="d-inline-block mb-1">Ctrl</kbd> <span className="text-muted small">+</span> <kbd className="d-inline-block mb-1">y</kbd>
                    </div>
                    {/* End Col */}
                  </div>
                  {/* End Row */}
                </div>
              </div>
              <div className="list-group list-group-sm list-group-flush list-group-no-gutters">
                <div className="list-group-item">
                  <h5 className="mb-1">Application</h5>
                </div>
                <div className="list-group-item">
                  <div className="row align-items-center">
                    <div className="col-5">
                      <span>Create new doc</span>
                    </div>
                    {/* End Col */}
                    <div className="col-7 text-end">
                      <kbd className="d-inline-block mb-1">Ctrl</kbd> <span className="text-muted small">+</span> <kbd className="d-inline-block mb-1">Alt</kbd> <span className="text-muted small">+</span> <kbd className="d-inline-block mb-1">n</kbd>
                    </div>
                    {/* End Col */}
                  </div>
                  {/* End Row */}
                </div>
                <div className="list-group-item">
                  <div className="row align-items-center">
                    <div className="col-5">
                      <span>Present</span>
                    </div>
                    {/* End Col */}
                    <div className="col-7 text-end">
                      <kbd className="d-inline-block mb-1">Ctrl</kbd> <span className="text-muted small">+</span> <kbd className="d-inline-block mb-1">Shift</kbd> <span className="text-muted small">+</span> <kbd className="d-inline-block mb-1">p</kbd>
                    </div>
                    {/* End Col */}
                  </div>
                  {/* End Row */}
                </div>
                <div className="list-group-item">
                  <div className="row align-items-center">
                    <div className="col-5">
                      <span>Share</span>
                    </div>
                    {/* End Col */}
                    <div className="col-7 text-end">
                      <kbd className="d-inline-block mb-1">Ctrl</kbd> <span className="text-muted small">+</span> <kbd className="d-inline-block mb-1">Shift</kbd> <span className="text-muted small">+</span> <kbd className="d-inline-block mb-1">s</kbd>
                    </div>
                    {/* End Col */}
                  </div>
                  {/* End Row */}
                </div>
                <div className="list-group-item">
                  <div className="row align-items-center">
                    <div className="col-5">
                      <span>Search docs</span>
                    </div>
                    {/* End Col */}
                    <div className="col-7 text-end">
                      <kbd className="d-inline-block mb-1">Ctrl</kbd> <span className="text-muted small">+</span> <kbd className="d-inline-block mb-1">Shift</kbd> <span className="text-muted small">+</span> <kbd className="d-inline-block mb-1">o</kbd>
                    </div>
                    {/* End Col */}
                  </div>
                  {/* End Row */}
                </div>
                <div className="list-group-item">
                  <div className="row align-items-center">
                    <div className="col-5">
                      <span>Keyboard shortcuts</span>
                    </div>
                    {/* End Col */}
                    <div className="col-7 text-end">
                      <kbd className="d-inline-block mb-1">Ctrl</kbd> <span className="text-muted small">+</span> <kbd className="d-inline-block mb-1">Shift</kbd> <span className="text-muted small">+</span> <kbd className="d-inline-block mb-1">/</kbd>
                    </div>
                    {/* End Col */}
                  </div>
                  {/* End Row */}
                </div>
              </div>
            </div>
          </div>
          {/* End Keyboard Shortcuts */}
          {/* Activity */}
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
          {/* End Activity */}
          {/* Welcome Message Modal */}
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
          {/* ========== END SECONDARY CONTENTS ========== */}
          {/* JS Global Compulsory  */}
          {/* JS Implementing Plugins */}
          {/* JS Front */}
          {/* JS Plugins Init. */}
          {/* Style Switcher JS */}
          {/* End Style Switcher JS */}
        </div>
      );
    }
  });
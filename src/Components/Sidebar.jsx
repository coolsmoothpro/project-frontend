import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import { LOGO, SHORT_LOGO } from '../utils/Constant';

export default function Sidebar() {
    const user = JSON.parse(localStorage.getItem('user'));

    const [isExpanded, setisExpanded] = useState(true);

    const navigate = useNavigate();
    const location = useLocation();

    const goToPage = (page) => {
        navigate(page);
    }

    const getNavLinkClass = (page) => {
        return location.pathname === page ? 'nav-link pointer active' : 'nav-link pointer';
    }

    const getClassLinkForUserDashboard = () => {
        return ['/default'].includes(location.pathname)
            ? 'nav-link dropdown-toggle active'
            : 'nav-link dropdown-toggle';
    };

    const getCollapseClassForUserDashboard = () => {
        return ['/default'].some(page => location.pathname.includes(page))
            ? 'nav-collapse collapse show'
            : 'nav-collapse collapse';
    };

    const getClassLinkForUsers = () => {
        return ['/overview', '/leaderboard', '/add-user'].includes(location.pathname)
            ? 'nav-link dropdown-toggle active'
            : 'nav-link dropdown-toggle';
    };

    const getCollapseClassForUsers = () => {
        return ['/overview', '/leaderboard', '/add-user'].some(page => location.pathname.includes(page))
            ? 'nav-collapse collapse show'
            : 'nav-collapse collapse';
    };

    const getClassLinkForUserProfile = () => {
        return ['/profile', '/team', '/projectss', '/connections', '/my-profile'].includes(location.pathname)
            ? 'nav-link dropdown-toggle active'
            : 'nav-link dropdown-toggle';
    };

    const getCollapseClassForUserProfile = () => {
        return ['/profile', '/team', '/projectss', '/connections', '/my-profile'].some(page => location.pathname.includes(page))
            ? 'nav-collapse collapse show'
            : 'nav-collapse collapse';
    };

    const getClassLinkForAccounts = () => {
        return ['/account-settings', '/account-billing', '/account-invoice'].includes(location.pathname)
            ? 'nav-link dropdown-toggle active'
            : 'nav-link dropdown-toggle';
    };

    const getCollapseClassForAccounts = () => {
        return ['/account-settings', '/account-billing', '/account-invoice'].some(page => location.pathname.includes(page))
            ? 'nav-collapse collapse show'
            : 'nav-collapse collapse';
    };

    const getClassLinkForProjects = () => {
        return ['/projects-overview', '/projects-timeline', '/projects-kanban'].includes(location.pathname)
            ? 'nav-link dropdown-toggle active'
            : 'nav-link dropdown-toggle';
    };

    const getCollapseClassForProjects = () => {
        return ['/projects-overview', '/projects-timeline', '/projects-kanban'].some(page => location.pathname.includes(page))
            ? 'nav-collapse collapse show'
            : 'nav-collapse collapse';
    };

    const getClassLinkForProject = () => {
        return ['/project-overview', '/project-files', '/project-activity', '/project-setting'].includes(location.pathname)
            ? 'nav-link dropdown-toggle active'
            : 'nav-link dropdown-toggle';
    };

    const getCollapseClassForProject = () => {
        return ['/project-overview', '/project-files', '/project-activity', '/project-setting'].some(page => location.pathname.includes(page))
            ? 'nav-collapse collapse show'
            : 'nav-collapse collapse';
    };

    const isAriaExpanded = (pages) => {
        return pages.some(page => location.pathname.includes(page)) ? 'true' : 'false';
    };

    return (
        <aside className={`${isExpanded ? 'navbar-verticle-width16' : 'navbar-verticle-width6'} hide-nav-mobile js-navbar-vertical-aside navbar navbar-vertical-aside navbar-vertical navbar-expand-xl navbar-bordered bg-white`}>
            <div className="navbar-vertical-container">
                <div className="navbar-vertical-footer-offset">
                    {/* Logo */}
                    <a className="navbar-brand" href="/" aria-label="Front">
                        <img className="navbar-brand-logo" src={LOGO} alt="Logo" data-hs-theme-appearance="default" />
                        {/* <img className="navbar-brand-logo" src="./assets/svg/logos-light/logo.svg" alt="Logo" data-hs-theme-appearance="dark" /> */}
                        <img className="navbar-brand-logo-mini" src={SHORT_LOGO} alt="Logo" data-hs-theme-appearance="default" />
                        {/* <img className="navbar-brand-logo-mini" src="./assets/svg/logos-light/logo-short.svg" alt="Logo" data-hs-theme-appearance="dark" /> */}
                    </a>
                    {/* End Logo */}
                    {/* Navbar Vertical Toggle */}
                    <button type="button" className="js-navbar-vertical-aside-toggle-invoker navbar-aside-toggler">
                        {isExpanded ?
                            <i className="bi-arrow-bar-left navbar-toggler-short-align" onClick={() => { setisExpanded(false) }} data-bs-template="<div class=&quot;tooltip d-none d-md-block&quot; role=&quot;tooltip&quot;><div class=&quot;arrow&quot;></div><div class=&quot;tooltip-inner&quot;></div></div>" data-bs-toggle="tooltip" data-bs-placement="right" title="Collapse" />
                            :
                            <i className="bi-arrow-bar-right navbar-toggler-full-align" onClick={() => { setisExpanded(true) }} data-bs-template="<div class=&quot;tooltip d-none d-md-block&quot; role=&quot;tooltip&quot;><div class=&quot;arrow&quot;></div><div class=&quot;tooltip-inner&quot;></div></div>" data-bs-toggle="tooltip" data-bs-placement="right" title="Expand" />
                        }
                    </button>
                    {/* End Navbar Vertical Toggle */}
                    {/* Content */}
                    <div className="navbar-vertical-content">
                        <div id="navbarVerticalMenu" className="nav nav-pills nav-vertical card-navbar-nav">
                            {/* Collapse */}
                            <div className="nav-item">
                                <a className={getClassLinkForUserDashboard()} href="#navbarVerticalMenuDashboards" role="button" data-bs-toggle="collapse" data-bs-target="#navbarVerticalMenuDashboards" aria-expanded={isAriaExpanded(['/default'])} aria-controls="navbarVerticalMenuDashboards">
                                    <i className="bi-house-door nav-icon" />
                                    <span className="nav-link-title">Dashboards</span>
                                </a>
                                <div id="navbarVerticalMenuDashboards" className={getCollapseClassForUserDashboard()} data-bs-parent="#navbarVerticalMenu">
                                    <a className="nav-link" href="./">Default</a>
                                    <a className="nav-link" href="./dashboard-alternative.html">Alternative</a>
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
                                    <a className={getClassLinkForUsers()} onClick={() => goToPage('/overview')} role="button" data-bs-toggle="collapse" data-bs-target="#navbarVerticalMenuPagesUsersMenu" aria-expanded={isAriaExpanded(['/overview', '/leaderboard', '/add-user'])} aria-controls="navbarVerticalMenuPagesUsersMenu">
                                        <i className="bi-people nav-icon" />
                                        <span className="nav-link-title">Users</span>
                                    </a>
                                    <div id="navbarVerticalMenuPagesUsersMenu" className={getCollapseClassForUsers()} data-bs-parent="#navbarVerticalMenuPagesMenu">
                                        <a className={getNavLinkClass('/overview')} onClick={() => goToPage('/overview')}>Overview</a>
                                        <a className={getNavLinkClass('/leaderboard')} onClick={() => goToPage('/leaderboard')}>Leaderboard</a>
                                        {(user?.role === 'ADMIN' || user?.role === 'ACCOUNT ADMIN') &&
                                            (<a className={getNavLinkClass('/add-user')} onClick={() => goToPage('/add-user')}>
                                                Add User <span className="badge bg-info rounded-pill ms-1">Hot</span>
                                            </a>)
                                        }
                                    </div>
                                </div>
                                {/* End Collapse */}
                                {/* Collapse */}
                                <div className="nav-item">
                                    <a className={getClassLinkForUserProfile()} onClick={() => goToPage('/profile')} role="button" data-bs-toggle="collapse" data-bs-target="#navbarVerticalMenuPagesUserProfileMenu" aria-expanded={isAriaExpanded(['/profile', '/team', '/projects', '/connections'])} aria-controls="navbarVerticalMenuPagesUserProfileMenu">
                                        <i className="bi-person nav-icon" />
                                        <span className="nav-link-title">User Profile <span className="badge bg-primary rounded-pill ms-1">5</span></span>
                                    </a>
                                    <div id="navbarVerticalMenuPagesUserProfileMenu" className={getCollapseClassForUserProfile()} data-bs-parent="#navbarVerticalMenuPagesMenu">
                                        <a className={getNavLinkClass('/profile')} onClick={() => goToPage('/profile')}>Profile</a>
                                        <a className={getNavLinkClass('/teams')} onClick={() => goToPage('/teams')}>Teams</a>
                                        <a className={getNavLinkClass('/projectss')} onClick={() => goToPage('/projectss')}>Projects</a>
                                        <a className={getNavLinkClass('/connections')} onClick={() => goToPage('/connections')}>Connections</a>
                                        <a className={getNavLinkClass('/my-profile')} onClick={() => goToPage('/my-profile')}>My Profile</a>
                                    </div>
                                </div>
                                {/* End Collapse */}
                                {/* Collapse */}
                                <div className="nav-item">
                                    <a className={getClassLinkForAccounts()} onClick={() => goToPage('/account-settings')} role="button" data-bs-toggle="collapse" data-bs-target="#navbarVerticalMenuPagesAccountMenu" aria-expanded={isAriaExpanded(['/account-settings', '/account-billing', '/account-invoice'])} aria-controls="navbarVerticalMenuPagesAccountMenu">
                                        <i className="bi-person-badge nav-icon" />
                                        <span className="nav-link-title">Account</span>
                                    </a>
                                    <div id="navbarVerticalMenuPagesAccountMenu" className={getCollapseClassForAccounts()} data-bs-parent="#navbarVerticalMenuPagesMenu">
                                        <a className={getNavLinkClass('/account-settings')} onClick={() => goToPage('/account-settings')}>Settings</a>
                                        <a className={getNavLinkClass('/account-billing')} onClick={() => goToPage('/account-billing')} >Billing</a>
                                        <a className={getNavLinkClass('/account-invoice')} onClick={() => goToPage('/account-invoice')} >Invoice</a>
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
                                        <a className={getNavLinkClass('/ecommerce')} href="/ecommerce" >Overview</a>
                                        <div id="navbarVerticalMenuPagesMenuEcommerce">
                                            {/* Collapse */}
                                            <div className="nav-item">
                                                <a className="nav-link dropdown-toggle" href="#navbarVerticalMenuPagesEcommerceProductsMenu" role="button" data-bs-toggle="collapse" data-bs-target="#navbarVerticalMenuPagesEcommerceProductsMenu" aria-expanded="false" aria-controls="navbarVerticalMenuPagesEcommerceProductsMenu">
                                                    Products
                                                </a>
                                                <div id="navbarVerticalMenuPagesEcommerceProductsMenu" className="nav-collapse collapse " data-bs-parent="#navbarVerticalMenuPagesMenuEcommerce">
                                                    <a className={getNavLinkClass('/ecommerce-products')} href="/ecommerce-products" >Products</a>
                                                    <a className={getNavLinkClass('/ecommerce-products-details')} href="/ecommerce-products-details" >Product Details</a>
                                                    <a className={getNavLinkClass('/ecommerce-add-product')} href="/ecommerce-add-product" >Add Product</a>
                                                </div>
                                            </div>
                                            {/* End Collapse */}
                                            {/* Collapse */}
                                            <div className="nav-item">
                                                <a className="nav-link dropdown-toggle" href="#navbarVerticalMenuPagesEcommerceOrdersMenu" role="button" data-bs-toggle="collapse" data-bs-target="#navbarVerticalMenuPagesEcommerceOrdersMenu" aria-expanded="false" aria-controls="navbarVerticalMenuPagesEcommerceOrdersMenu">
                                                    Orders
                                                </a>
                                                <div id="navbarVerticalMenuPagesEcommerceOrdersMenu" className="nav-collapse collapse " data-bs-parent="#navbarVerticalMenuPagesMenuEcommerce">
                                                    <a className={getNavLinkClass('/ecommerce-orders')} href="/ecommerce-orders" >Orders</a>
                                                    <a className={getNavLinkClass('/ecommerce-order-details')} href="/ecommerce-order-details" >Order Details</a>
                                                </div>
                                            </div>
                                            {/* End Collapse */}
                                            {/* Collapse */}
                                            <div className="nav-item">
                                                <a className="nav-link dropdown-toggle" href="#navbarVerticalMenuPagesEcommerceCustomersMenu" role="button" data-bs-toggle="collapse" data-bs-target="#navbarVerticalMenuPagesEcommerceCustomersMenu" aria-expanded="false" aria-controls="navbarVerticalMenuPagesEcommerceCustomersMenu">
                                                    Customers
                                                </a>
                                                <div id="navbarVerticalMenuPagesEcommerceCustomersMenu" className="nav-collapse collapse " data-bs-parent="#navbarVerticalMenuPagesMenuEcommerce">
                                                    <a className={getNavLinkClass('/ecommerce-customer')} href="/ecommerce-customer" >Customers</a>
                                                    <a className={getNavLinkClass('/ecommerce-customer-details')} href="/ecommerce-customer-details" >Customer Details</a>
                                                    <a className={getNavLinkClass('/ecommerce-add-customer')} href="/ecommerce-add-customer" >Add Customers</a>
                                                </div>
                                            </div>
                                            {/* End Collapse */}
                                        </div>
                                        <a className={getNavLinkClass('/ecommerce-referrals')} href="/ecommerce-referrals">Referrals</a>
                                        <a className={getNavLinkClass('/ecommerce-manage-reviews')} href="/ecommerce-manage-reviews">Manage Reviews</a>
                                        <a className={getNavLinkClass('/ecommerce-checkout')} href="/ecommerce-checkout">Checkout</a>
                                    </div>
                                </div>
                                {/* End Collapse */}
                                {/* Collapse */}
                                <div className="nav-item">
                                    <a className={getClassLinkForProjects()} onClick={() => goToPage('/projects-overview')} role="button" data-bs-toggle="collapse" data-bs-target="#navbarVerticalMenuPagesProjectsMenu" aria-expanded={isAriaExpanded(['/projects-overview', '/projects-timeline'])} aria-controls="navbarVerticalMenuPagesProjectsMenu">
                                        <i className="bi-stickies nav-icon" />
                                        <span className="nav-link-title">Projects</span>
                                    </a>
                                    <div id="navbarVerticalMenuPagesProjectsMenu" className={getCollapseClassForProjects()} data-bs-parent="#navbarVerticalMenuPagesMenu">
                                        <a className={getNavLinkClass('/projects-overview')} onClick={() => goToPage('/projects-overview')} >Overview</a>
                                        <a className={getNavLinkClass('/projects-timeline')} onClick={() => goToPage('/projects-timeline')} >Timeline</a>
                                        <a className={getNavLinkClass('/projects-kanban')} onClick={() => goToPage('/projects-kanban')} >Kanban</a>
                                    </div>
                                </div>
                                {/* End Collapse */}
                                {/* Collapse */}
                                {/* <div className="nav-item">
                                    <a className={getClassLinkForProject()} href="#navbarVerticalMenuPagesProjectMenu" role="button" data-bs-toggle="collapse" data-bs-target="#navbarVerticalMenuPagesProjectMenu" aria-expanded={isAriaExpanded(['/project-overview', '/project-files', '/project-activity', '/project-setting'])} aria-controls="navbarVerticalMenuPagesProjectMenu">
                                        <i className="bi-folder nav-icon" />
                                        <span className="nav-link-title">Project</span>
                                    </a>
                                    <div id="navbarVerticalMenuPagesProjectMenu" className={getCollapseClassForProject()} data-bs-parent="#navbarVerticalMenuPagesMenu">
                                        <a className={getNavLinkClass('/project-overview')} onClick={() => goToPage('/project-overview')} >Overview</a>
                                        <a className={getNavLinkClass('/project-files')} onClick={() => goToPage('/project-files')} >Files</a>
                                        <a className={getNavLinkClass('/project-activity')} onClick={() => goToPage('/project-activity')}>Activity</a>
                                        <a className={getNavLinkClass('/project-setting')} onClick={() => goToPage('/project-setting')} >Settings</a>
                                    </div>
                                </div> */}
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
                                                    <a className={getNavLinkClass('/login')} href="/login">Basic</a>
                                                    {/* <a className="nav-link " href="./authentication-login-cover.html">Cover</a> */}
                                                </div>
                                            </div>
                                            {/* End Collapse */}
                                            {/* Collapse */}
                                            <div className="nav-item">
                                                <a className="nav-link dropdown-toggle " href="#navbarVerticalMenuAuthenticationSignupMenu" role="button" data-bs-toggle="collapse" data-bs-target="#navbarVerticalMenuAuthenticationSignupMenu" aria-expanded="false" aria-controls="navbarVerticalMenuAuthenticationSignupMenu">
                                                    Sign Up
                                                </a>
                                                <div id="navbarVerticalMenuAuthenticationSignupMenu" className="nav-collapse collapse " data-bs-parent="#navbarVerticalMenuAuthenticationMenu">
                                                    <a className={getNavLinkClass('/sign-up')} href="/sign-up">Basic</a>
                                                    {/* <a className="nav-link " href="./authentication-signup-cover.html">Cover</a> */}
                                                </div>
                                            </div>
                                            {/* End Collapse */}
                                            {/* Collapse */}
                                            <div className="nav-item">
                                                <a className="nav-link dropdown-toggle " href="#navbarVerticalMenuAuthenticationResetPasswordMenu" role="button" data-bs-toggle="collapse" data-bs-target="#navbarVerticalMenuAuthenticationResetPasswordMenu" aria-expanded="false" aria-controls="navbarVerticalMenuAuthenticationResetPasswordMenu">
                                                    Reset Password
                                                </a>
                                                <div id="navbarVerticalMenuAuthenticationResetPasswordMenu" className="nav-collapse collapse " data-bs-parent="#navbarVerticalMenuAuthenticationMenu">
                                                    <a className={getNavLinkClass('/reset-password')} href="/reset-password">Basic</a>
                                                    {/* <a className="nav-link " href="./authentication-reset-password-cover.html">Cover</a> */}
                                                </div>
                                            </div>
                                            {/* End Collapse */}
                                            {/* Collapse */}
                                            <div className="nav-item">
                                                <a className="nav-link dropdown-toggle " href="#navbarVerticalMenuAuthenticationEmailVerificationMenu" role="button" data-bs-toggle="collapse" data-bs-target="#navbarVerticalMenuAuthenticationEmailVerificationMenu" aria-expanded="false" aria-controls="navbarVerticalMenuAuthenticationEmailVerificationMenu">
                                                    Email Verification
                                                </a>
                                                <div id="navbarVerticalMenuAuthenticationEmailVerificationMenu" className="nav-collapse collapse " data-bs-parent="#navbarVerticalMenuAuthenticationMenu">
                                                    <a className={getNavLinkClass('/email-verification')} href="/email-verification">Basic</a>
                                                    {/* <a className="nav-link " href="./authentication-email-verification-cover.html">Cover</a> */}
                                                </div>
                                            </div>
                                            {/* End Collapse */}
                                            {/* Collapse */}
                                            <div className="nav-item">
                                                <a className="nav-link dropdown-toggle " href="#navbarVerticalMenuAuthentication2StepVerificationMenu" role="button" data-bs-toggle="collapse" data-bs-target="#navbarVerticalMenuAuthentication2StepVerificationMenu" aria-expanded="false" aria-controls="navbarVerticalMenuAuthentication2StepVerificationMenu">
                                                    2-step Verification
                                                </a>
                                                <div id="navbarVerticalMenuAuthentication2StepVerificationMenu" className="nav-collapse collapse " data-bs-parent="#navbarVerticalMenuAuthenticationMenu">
                                                    <a className={getNavLinkClass('/two-step-verification')} href="/two-step-verification" >Basic</a>
                                                    {/* <a className="nav-link " href="./authentication-2-step-verification-cover.html">Cover</a> */}
                                                </div>
                                            </div>
                                            {/* End Collapse */}
                                            {/* <a className="nav-link" href="javascript:;" data-bs-toggle="modal" data-bs-target="#welcomeMessageModal">Welcome Message</a> */}
                                            <a className={getNavLinkClass('/error-404')} href="/error-404">Error 404</a>
                                            <a className={getNavLinkClass('/error-500')} href="/error-500">Error 500</a>
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
                                <a className={getNavLinkClass('/kanban')} href="/kanban" data-placement="left">
                                    <i className="bi-kanban nav-icon" />
                                    <span className="nav-link-title">Kanban</span>
                                </a>
                            </div>
                            <div className="nav-item">
                                <a className={getNavLinkClass('/calender')} href="/calender" data-placement="left">
                                    <i className="bi-calendar-week nav-icon" />
                                    <span className="nav-link-title">Calendar</span>
                                </a>
                            </div>
                            <div className="nav-item">
                                <a className={getNavLinkClass('/invoice-generator')} href="/invoice-generator" data-placement="left">
                                    <i className="bi-receipt nav-icon" />
                                    <span className="nav-link-title">Invoice Generator</span>
                                </a>
                            </div>
                            <div className="nav-item">
                                <a className={getNavLinkClass('/file-management')} href="/file-management" data-placement="left">
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
                            {/* <span className="dropdown-header mt-4">Documentation</span>
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
                            </div> */}
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
                                        <img className="avatar avatar-xss avatar-circle" src="/assets/vendor/flag-icon-css/flags/1x1/us.svg" alt="United States Flag" />
                                    </button>
                                    <div className="dropdown-menu navbar-dropdown-menu-borderless" aria-labelledby="selectLanguageDropdown">
                                        <span className="dropdown-header">Select language</span>
                                        <a className="dropdown-item" href="#">
                                            <img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/us.svg" alt="Flag" />
                                            <span className="text-truncate" title="English">English (US)</span>
                                        </a>
                                        <a className="dropdown-item" href="#">
                                            <img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/gb.svg" alt="Flag" />
                                            <span className="text-truncate" title="English">English (UK)</span>
                                        </a>
                                        <a className="dropdown-item" href="#">
                                            <img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/de.svg" alt="Flag" />
                                            <span className="text-truncate" title="Deutsch">Deutsch</span>
                                        </a>
                                        <a className="dropdown-item" href="#">
                                            <img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/dk.svg" alt="Flag" />
                                            <span className="text-truncate" title="Dansk">Dansk</span>
                                        </a>
                                        <a className="dropdown-item" href="#">
                                            <img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/it.svg" alt="Flag" />
                                            <span className="text-truncate" title="Italiano">Italiano</span>
                                        </a>
                                        <a className="dropdown-item" href="#">
                                            <img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/cn.svg" alt="Flag" />
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
    )
}

import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { AVATAR, PROFILE_COVER_IMG } from '../../../utils/Constant';

export default function Header() {
    const navigate = useNavigate();
    const location = useLocation();

    const goToPage = (page) => {
        navigate(page);
    }

    const getNavLinkClass = (page) => {
        return location.pathname === page ? 'nav-link active' : 'nav-link';
    }

    return (
        <>
            {/* Profile Cover */}
            <div className="profile-cover">
                <div className="profile-cover-img-wrapper">
                    <img className="profile-cover-img" src={PROFILE_COVER_IMG} alt="Image Description" />
                </div>
            </div>
            {/* End Profile Cover */}
            {/* Profile Header */}
            <div className="text-center mb-5">
                {/* Avatar */}
                <div className="avatar avatar-xxl avatar-circle profile-cover-avatar">
                    <img className="avatar-img" src={AVATAR} alt="Image Description" />
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
                <ul className="nav nav-tabs align-items-center">
                    <li className="nav-item pointer">
                        <a className={getNavLinkClass('/profile')} onClick={() => { goToPage('/profile') }}>Profile</a>
                    </li>
                    <li className="nav-item pointer">
                        <a className={getNavLinkClass('/teams')} onClick={() => { goToPage('/teams') }}>Teams</a>
                    </li>
                    <li className="nav-item pointer">
                        <a className={getNavLinkClass('/projectss')} onClick={() => { goToPage('/projectss') }}>Projects <span className="badge bg-soft-dark text-dark rounded-circle ms-1">3</span></a>
                    </li>
                    <li className="nav-item pointer">
                        <a className={getNavLinkClass('/connections')} onClick={() => { goToPage('/connections') }}>Connections</a>
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
        </>
    );
}

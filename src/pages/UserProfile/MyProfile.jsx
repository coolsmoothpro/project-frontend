import React, { useEffect, useState } from 'react';
import { currentUser } from '../../Api/auth';
import { AVATAR } from '../../utils/Constant';

export default function MyProfile() {
    const userData = JSON.parse(localStorage.getItem('user')) || null;

    const getCurrentUser = async () => {        
        const id = userData._id;
        if (id) {
            const { response } = await currentUser({id});

            if (response.data.success) {
                const data = response.data.user;
                setAvatar(data.avatar);
                setEmail(data.email);
                setPhone(data.phone);
                setFirstName(data.firstname);
                setLastName(data.lastname);
                setOrganization(data.organization);
                setDepartment(data.department);
                setAccountType(data.accountType);
                setLocation(data.location);
                setAddress1(data.address1);
                setAddress2(data.address2);
                setZipCode(data.zipcode);
            }
        }
    }    

    const [avatar, setAvatar] = useState("./assets/img/160x160/img1.jpg");
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [organization, setOrganization] = useState("");
    const [department, setDepartment] = useState("");
    const [accountType, setAccountType] = useState("");
    const [location, setLocation] = useState({
        country: "",
        city: "",
        state: ""
    });
    const [address1, setAddress1] = useState("");
    const [address2, setAddress2] = useState("");
    const [zipcode, setZipCode] = useState("");

    useEffect(() => {
        getCurrentUser();
    }, []);

    return (
        <>
            <div className="content container-fluid">
                <div className="row justify-content-lg-center">
                    <div className="col-lg-10">
                        {/* Profile Cover */}
                        <div className="profile-cover">
                            <div className="profile-cover-img-wrapper">
                                <img id="profileCoverImg" className="profile-cover-img" src={"./assets/img/1920x400/img2.jpg"} alt="Image Description" />
                                {/* Custom File Cover */}
                                <div className="profile-cover-content profile-cover-uploader p-3">
                                    <input type="file" className="js-file-attach profile-cover-uploader-input" id="profileCoverUplaoder" data-hs-file-attach-options="{
                              &quot;textTarget&quot;: &quot;#profileCoverImg&quot;,
                              &quot;mode&quot;: &quot;image&quot;,
                              &quot;targetAttr&quot;: &quot;src&quot;,
                              &quot;allowTypes&quot;: [&quot;.png&quot;, &quot;.jpeg&quot;, &quot;.jpg&quot;]
                           }" />
                                    {/* <label className="profile-cover-uploader-label btn btn-sm btn-white" htmlFor="profileCoverUplaoder">
                                        <i className="bi-camera-fill" />
                                        <span className="d-none d-sm-inline-block ms-1">Upload header</span>
                                    </label> */}
                                </div>
                                {/* End Custom File Cover */}
                            </div>
                        </div>
                        {/* End Profile Cover */}
                        {/* Profile Header */}
                        <div className="text-center mb-5">
                            {/* Avatar */}
                            <label className="avatar avatar-xxl avatar-circle avatar-uploader profile-cover-avatar" htmlFor="editAvatarUploaderModal">
                                <img id="editAvatarImgModal" className="avatar-img" src={avatar || AVATAR} alt="Image Description" />
                                
                            </label>
                            {/* End Avatar */}
                            <h1 className="page-header-title">{firstname} {lastname} <i className="bi-patch-check-fill fs-2 text-primary" data-bs-toggle="tooltip" data-bs-placement="top" title="Top endorsed" /></h1>
                            {/* List */}
                            <ul className="list-inline list-px-2">
                                <li className="list-inline-item">
                                    <i className="bi-building me-1" />
                                    <span>{organization}</span>
                                </li>
                                <li className="list-inline-item">
                                    <i className="bi-geo-alt me-1" />
                                    <a href="#">{location?.city},</a>
                                    <a href="#">{location?.country}</a>
                                </li>
                                {/* <li className="list-inline-item">
                                    <i className="bi-calendar-week me-1" />
                                    <span>Joined March 2013</span>
                                </li> */}
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
                                <li className="nav-item">
                                    <a className="nav-link active disabled" href="#">Profile</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link disabled" href="#">Teams</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link disabled" href="#">Projects <span className="badge bg-soft-dark text-dark rounded-circle ms-1">3</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link disabled" href="#">Connections</a>
                                </li>
                                <li className="nav-item ms-auto">
                                    <div className="d-flex gap-2">
                                        <a className="btn btn-white btn-sm" href="./account-settings.html">
                                            <i className="bi-person-plus-fill me-1" /> Edit profile
                                        </a>
                                        <a className="btn btn-white btn-icon btn-sm" href="#">
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
                                            <div className="progress-bar bg-primary" role="progressbar" style={{ width: '15%' }} aria-valuenow={15} aria-valuemin={0} aria-valuemax={100} />
                                        </div>
                                        <span className="ms-4">15%</span>
                                    </div>
                                    {/* End Progress */}
                                </div>
                                {/* End Card */}
                                {/* Card */}
                                <div className="card mb-3 mb-lg-5">
                                    {/* Header */}
                                    <div className="card-header card-header-content-between">
                                        <h4 className="card-header-title">Profile</h4>
                                    </div>
                                    {/* End Header */}
                                    {/* Body */}
                                    <div className="card-body">
                                        <ul className="list-unstyled list-py-2 text-dark mb-0">
                                            <li className="pb-0"><span className="card-subtitle">About</span></li>
                                            <li><i className="bi-person dropdown-item-icon" /> {firstname} {lastname}</li>
                                            <li><i className="bi-briefcase dropdown-item-icon" /> {department || "No department"}</li>
                                            <li><i className="bi-building dropdown-item-icon" /> {organization || "No organization" }</li>
                                            <li className="pt-4 pb-0"><span className="card-subtitle">Contacts</span></li>
                                            <li><i className="bi-at dropdown-item-icon" /> {email}</li>
                                            <li><i className="bi-phone dropdown-item-icon" /> {phone}</li>
                                            <li className="pt-4 pb-0"><span className="card-subtitle">Teams</span></li>
                                            <li className="fs-6 text-body"><i className="bi-people dropdown-item-icon" /> You are not a member of any
                                                teams</li>
                                            <li className="fs-6 text-body"><i className="bi-stickies dropdown-item-icon" /> You are not working on any
                                                projects</li>
                                        </ul>
                                    </div>
                                    {/* End Body */}
                                </div>
                                {/* End Card */}
                                {/* Card */}
                                <div className="card card-lg mb-3 mb-lg-5">
                                    {/* Body */}
                                    <div className="card-body text-center">
                                        <div className="mb-4">
                                            <img className="avatar avatar-xl avatar-4x3" src="./assets/svg/illustrations/oc-unlock.svg" alt="Image Description" data-hs-theme-appearance="default" />
                                            {/* <img className="avatar avatar-xl avatar-4x3" src="./assets/svg/illustrations-light/oc-unlock.svg" alt="Image Description" data-hs-theme-appearance="dark" /> */}
                                        </div>
                                        <div className="mb-3">
                                            <h3>2-step verification</h3>
                                            <p>Protect your account now and enable 2-step verification in the settings.</p>
                                        </div>
                                        <a className="btn btn-primary" href="./account-settings.html#twoStepVerificationSection">Enable now</a>
                                    </div>
                                    {/* End Body */}
                                </div>
                                {/* End Card */}
                            </div>
                            {/* End Col */}
                            <div className="col-lg-8">
                                {/* Card */}
                                <div className="card card-centered mb-3 mb-lg-5">
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
                                    <div className="card-body card-body-height">
                                        <img className="avatar avatar-xxl mb-3" src="./assets/svg/illustrations/oc-error.svg" alt="Image Description" data-hs-theme-appearance="default" />
                                        {/* <img className="avatar avatar-xxl mb-3" src="./assets/svg/illustrations-light/oc-error.svg" alt="Image Description" data-hs-theme-appearance="dark" /> */}
                                        <p className="card-text">No data to show</p>
                                        <a className="btn btn-white btn-sm" href="./#">Start your Activity</a>
                                    </div>
                                    {/* End Body */}
                                </div>
                                {/* End Card */}
                                {/* Card */}
                                <div className="card card-centered mb-3 mb-lg-5">
                                    {/* Header */}
                                    <div className="card-header card-header-content-between">
                                        <h4 className="card-header-title">Projects</h4>
                                        {/* Dropdown */}
                                        <div className="dropdown">
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
                                    {/* Body */}
                                    <div className="card-body card-body-height card-body-centered">
                                        <img className="avatar avatar-xxl mb-3" src="./assets/svg/illustrations/oc-error.svg" alt="Image Description" data-hs-theme-appearance="default" />
                                        {/* <img className="avatar avatar-xxl mb-3" src="./assets/svg/illustrations-light/oc-error.svg" alt="Image Description" data-hs-theme-appearance="dark" /> */}
                                        <p className="card-text">No data to show</p>
                                        <a className="btn btn-white btn-sm" href="./projects.html">Start your Projects</a>
                                    </div>
                                    {/* End Body */}
                                </div>
                                {/* End Card */}
                            </div>
                            {/* End Col */}
                        </div>
                        {/* End Row */}
                    </div>
                    {/* End Col */}
                </div>
                {/* End Row */}
            </div>
        </>
    )
}

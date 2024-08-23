import React, { useEffect, useState } from 'react';
import { userList } from '../../Api/user';
import { toast } from 'react-toastify';
import { useNavigate, useLocation } from 'react-router-dom';
import { updateUser, deleteUser } from '../../Api/auth';


export default function User() {
    const loggedUser = JSON.parse(localStorage.getItem('user'));
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState({});
    const [_id, setId] = useState("");
    const [avatar, setAvatar] = useState("./assets/img/160x160/img1.jpg");
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("");
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
    const [update, setUpdate] = useState(false);
    
    const getUsers = async () => {
        const { response } = await userList();

        if (response.data.success) {
            setUsers(response.data.users);
        } else {
            toast.error("Users Fetch Failed!");
        }
    }

    const handleEditClick = async (data) => {
        setId(data?._id);
        setAvatar(data?.avatar);
        setEmail(data?.email);
        setFirstName(data?.firstname);
        setLastName(data?.lastname);
        setRole(data?.role);
        setPhone(data?.phone);
        setOrganization(data?.organization);
        setDepartment(data?.department);
        setAccountType(data?.accountType);
        setLocation(data?.location);
        setAddress1(data?.address1);
        setAddress2(data?.address2);
        setZipCode(data?.zipcode);
    }

    const handleAvatarChange = (event) => {

        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setAvatar(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleAccountTypeChange = (event) => {
        setAccountType(event.target.value);
    };

    const handleCountryChange = (event) => {
        setLocation({
            ...location,          
            country: event.target.value, 
        });
    };

    const handleCityChange = (event) => {
        setLocation({
            ...location,
            city: event.target.value,
        });
    };
    
    const handleStateChange = (event) => {
        setLocation({
            ...location,
            state: event.target.value,
        });
    };

    const handleSaveChange = async () => {

        const { response } = await updateUser({_id, avatar, email, firstname, lastname, phone, organization, department, accountType, location, address1, address2, zipcode});

        if (response.data.success) {
            setUpdate(!update);
            toast.success("User has been updated successfully!");
        } else {
            toast.error("Failed!");
            return;
        }
    }

    const handleDeleteClick = async (id) => {
        const { response } = await deleteUser({id});

        if (response.data.success) {
            setUpdate(!update);
            toast.success(response.data.message);
        } else {
            toast.error("Failed!");
        }
    }

    useEffect(() => {
        getUsers();
    }, [update]);

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
                                    <li className="breadcrumb-item"><a className="breadcrumb-link" href="javascript:;">Users</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Overview</li>
                                </ol>
                            </nav>
                            <h1 className="page-header-title">Users</h1>
                        </div>
                        {/* End Col */}
                        {(loggedUser?.role === "ADMIN" || loggedUser?.role === "ACCOUNT ADMIN") &&
                            <div className="col-sm-auto">
                                <a className="btn btn-primary" onClick={() => navigate('/add-user')}>
                                    <i className="bi-person-plus-fill me-1" /> Add user
                                </a>
                            </div>
                        }
                        {/* End Col */}
                    </div>
                    {/* End Row */}
                </div>
                {/* End Page Header */}
                {/* Stats */}
                <div className="row">
                    <div className="col-sm-6 col-lg-3 mb-3 mb-lg-5">
                        {/* Card */}
                        <div className="card h-100">
                            <div className="card-body">
                                <h6 className="card-subtitle mb-2">Total users</h6>
                                <div className="row align-items-center gx-2">
                                    <div className="col">
                                        <span className="js-counter display-4 text-dark">{users?.length}</span>
                                    </div>
                                    {/* End Col */}
                                    <div className="col-auto">
                                        <span className="badge bg-soft-success text-success p-1">
                                            <i className="bi-graph-up" /> 5.0%
                                        </span>
                                    </div>
                                    {/* End Col */}
                                </div>
                                {/* End Row */}
                            </div>
                        </div>
                        {/* End Card */}
                    </div>
                    <div className="col-sm-6 col-lg-3 mb-3 mb-lg-5">
                        {/* Card */}
                        <div className="card h-100">
                            <div className="card-body">
                                <h6 className="card-subtitle mb-2">Active members</h6>
                                <div className="row align-items-center gx-2">
                                    <div className="col">
                                        <span className="js-counter display-4 text-dark">12</span>
                                        <span className="text-body fs-5 ms-1">from 11</span>
                                    </div>
                                    <div className="col-auto">
                                        <span className="badge bg-soft-success text-success p-1">
                                            <i className="bi-graph-up" /> 1.2%
                                        </span>
                                    </div>
                                </div>
                                {/* End Row */}
                            </div>
                        </div>
                        {/* End Card */}
                    </div>
                    <div className="col-sm-6 col-lg-3 mb-3 mb-lg-5">
                        {/* Card */}
                        <div className="card h-100">
                            <div className="card-body">
                                <h6 className="card-subtitle mb-2">New/returning</h6>
                                <div className="row align-items-center gx-2">
                                    <div className="col">
                                        <span className="js-counter display-4 text-dark">56</span>
                                        <span className="display-4 text-dark">%</span>
                                        <span className="text-body fs-5 ms-1">from 48.7</span>
                                    </div>
                                    <div className="col-auto">
                                        <span className="badge bg-soft-danger text-danger p-1">
                                            <i className="bi-graph-down" /> 2.8%
                                        </span>
                                    </div>
                                </div>
                                {/* End Row */}
                            </div>
                        </div>
                        {/* End Card */}
                    </div>
                    <div className="col-sm-6 col-lg-3 mb-3 mb-lg-5">
                        {/* Card */}
                        <div className="card h-100">
                            <div className="card-body">
                                <h6 className="card-subtitle mb-2">Active members</h6>
                                <div className="row align-items-center gx-2">
                                    <div className="col">
                                        <span className="js-counter display-4 text-dark">28.6</span>
                                        <span className="display-4 text-dark">%</span>
                                        <span className="text-body fs-5 ms-1">from 28.6%</span>
                                    </div>
                                    <div className="col-auto">
                                        <span className="badge bg-soft-secondary text-secondary p-1">0.0%</span>
                                    </div>
                                </div>
                                {/* End Row */}
                            </div>
                        </div>
                        {/* End Card */}
                    </div>
                </div>
                {/* End Stats */}
                {/* Card */}
                <div className="card">
                    {/* Header */}
                    <div className="card-header card-header-content-md-between">
                        <div className="mb-2 mb-md-0">
                            <form>
                                {/* Search */}
                                <div className="input-group input-group-merge input-group-flush">
                                    <div className="input-group-prepend input-group-text">
                                        <i className="bi-search" />
                                    </div>
                                    <input id="datatableSearch" type="search" className="form-control" placeholder="Search users" aria-label="Search users" />
                                </div>
                                {/* End Search */}
                            </form>
                        </div>
                        <div className="d-grid d-sm-flex justify-content-md-end align-items-sm-center gap-2">
                            {/* Datatable Info */}
                            <div id="datatableCounterInfo" style={{ display: 'none' }}>
                                <div className="d-flex align-items-center">
                                    <span className="fs-5 me-3">
                                        <span id="datatableCounter">0</span>
                                        Selected
                                    </span>
                                    <a className="btn btn-outline-danger btn-sm" href="javascript:;">
                                        <i className="bi-trash" /> Delete
                                    </a>
                                </div>
                            </div>
                            {/* End Datatable Info */}
                            {/* Dropdown */}
                            <div className="dropdown">
                                <button type="button" className="btn btn-white btn-sm dropdown-toggle w-100" id="usersExportDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="bi-download me-2" /> Export
                                </button>
                                <div className="dropdown-menu dropdown-menu-sm-end" aria-labelledby="usersExportDropdown">
                                    <span className="dropdown-header">Options</span>
                                    <a id="export-copy" className="dropdown-item" href="javascript:;">
                                        <img className="avatar avatar-xss avatar-4x3 me-2" src="./assets/svg/illustrations/copy-icon.svg" alt="Image Description" />
                                        Copy
                                    </a>
                                    <a id="export-print" className="dropdown-item" href="javascript:;">
                                        <img className="avatar avatar-xss avatar-4x3 me-2" src="./assets/svg/illustrations/print-icon.svg" alt="Image Description" />
                                        Print
                                    </a>
                                    <div className="dropdown-divider" />
                                    <span className="dropdown-header">Download options</span>
                                    <a id="export-excel" className="dropdown-item" href="javascript:;">
                                        <img className="avatar avatar-xss avatar-4x3 me-2" src="./assets/svg/brands/excel-icon.svg" alt="Image Description" />
                                        Excel
                                    </a>
                                    <a id="export-csv" className="dropdown-item" href="javascript:;">
                                        <img className="avatar avatar-xss avatar-4x3 me-2" src="./assets/svg/components/placeholder-csv-format.svg" alt="Image Description" />
                                        .CSV
                                    </a>
                                    <a id="export-pdf" className="dropdown-item" href="javascript:;">
                                        <img className="avatar avatar-xss avatar-4x3 me-2" src="./assets/svg/brands/pdf-icon.svg" alt="Image Description" />
                                        PDF
                                    </a>
                                </div>
                            </div>
                            {/* End Dropdown */}
                            {/* Dropdown */}
                            <div className="dropdown">
                                <button type="button" className="btn btn-white btn-sm w-100" id="usersFilterDropdown" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                                    <i className="bi-filter me-1" /> Filter <span className="badge bg-soft-dark text-dark rounded-circle ms-1">2</span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-sm-end dropdown-card card-dropdown-filter-centered" aria-labelledby="usersFilterDropdown" style={{ minWidth: '22rem' }}>
                                    {/* Card */}
                                    <div className="card">
                                        <div className="card-header card-header-content-between">
                                            <h5 className="card-header-title">Filter users</h5>
                                            {/* Toggle Button */}
                                            <button type="button" className="btn btn-ghost-secondary btn-icon btn-sm ms-2">
                                                <i className="bi-x-lg" />
                                            </button>
                                            {/* End Toggle Button */}
                                        </div>
                                        <div className="card-body">
                                            <form>
                                                <div className="mb-4">
                                                    <small className="text-cap text-body">Role</small>
                                                    <div className="row">
                                                        <div className="col">
                                                            {/* Check */}
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" defaultValue id="usersFilterCheckAll" defaultChecked />
                                                                <label className="form-check-label" htmlFor="usersFilterCheckAll">
                                                                    All
                                                                </label>
                                                            </div>
                                                            {/* End Check */}
                                                        </div>
                                                        {/* End Col */}
                                                        <div className="col">
                                                            {/* Check */}
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" defaultValue id="usersFilterCheckEmployee" />
                                                                <label className="form-check-label" htmlFor="usersFilterCheckEmployee">
                                                                    Employee
                                                                </label>
                                                            </div>
                                                            {/* End Check */}
                                                        </div>
                                                        {/* End Col */}
                                                    </div>
                                                    {/* End Row */}
                                                </div>
                                                <div className="row">
                                                    <div className="col-sm mb-4">
                                                        <small className="text-cap text-body">Position</small>
                                                        {/* Select */}
                                                        <div className="tom-select-custom">
                                                            <select className="js-select js-datatable-filter form-select form-select-sm" >
                                                                <option value>Any</option>
                                                                <option value="Accountant">Accountant</option>
                                                                <option value="Co-founder">Co-founder</option>
                                                                <option value="Designer">Designer</option>
                                                                <option value="Developer">Developer</option>
                                                                <option value="Director">Director</option>
                                                            </select>
                                                            {/* End Select */}
                                                        </div>
                                                    </div>
                                                    {/* End Col */}
                                                    <div className="col-sm mb-4">
                                                        <small className="text-cap text-body">Status</small>
                                                        {/* Select */}
                                                        <div className="tom-select-custom">
                                                            <select className="js-select js-datatable-filter form-select form-select-sm" >
                                                                <option value>Any status</option>
                                                                <option value="Completed" data-option-template="<span class=&quot;d-flex align-items-center&quot;><span class=&quot;legend-indicator bg-success&quot;></span>Completed</span>">Completed</option>
                                                                <option value="In progress" data-option-template="<span class=&quot;d-flex align-items-center&quot;><span class=&quot;legend-indicator bg-warning&quot;></span>In progress</span>">In progress</option>
                                                                <option value="To do" data-option-template="<span class=&quot;d-flex align-items-center&quot;><span class=&quot;legend-indicator bg-danger&quot;></span>To do</span>">To do</option>
                                                            </select>
                                                        </div>
                                                        {/* End Select */}
                                                    </div>
                                                    {/* End Col */}
                                                    <div className="col-12 mb-4">
                                                        <span className="text-cap text-body">Location</span>
                                                        {/* Select */}
                                                        <div className="tom-select-custom">
                                                            <select className="js-select form-select">
                                                                <option value="AF" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/af.svg&quot; alt=&quot;Afghanistan Flag&quot; /><span class=&quot;text-truncate&quot;>Afghanistan</span></span>">Afghanistan</option>
                                                                <option value="AX" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ax.svg&quot; alt=&quot;Aland Islands Flag&quot; /><span class=&quot;text-truncate&quot;>Aland Islands</span></span>">Aland Islands</option>
                                                                <option value="AL" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/al.svg&quot; alt=&quot;Albania Flag&quot; /><span class=&quot;text-truncate&quot;>Albania</span></span>">Albania</option>
                                                                <option value="DZ" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/dz.svg&quot; alt=&quot;Algeria Flag&quot; /><span class=&quot;text-truncate&quot;>Algeria</span></span>">Algeria</option>
                                                                <option value="AS" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/as.svg&quot; alt=&quot;American Samoa Flag&quot; /><span class=&quot;text-truncate&quot;>American Samoa</span></span>">American Samoa</option>
                                                                <option value="AD" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ad.svg&quot; alt=&quot;Andorra Flag&quot; /><span class=&quot;text-truncate&quot;>Andorra</span></span>">Andorra</option>
                                                                <option value="AO" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ao.svg&quot; alt=&quot;Angola Flag&quot; /><span class=&quot;text-truncate&quot;>Angola</span></span>">Angola</option>
                                                                <option value="AI" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ai.svg&quot; alt=&quot;Anguilla Flag&quot; /><span class=&quot;text-truncate&quot;>Anguilla</span></span>">Anguilla</option>
                                                                <option value="AG" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ag.svg&quot; alt=&quot;Antigua and Barbuda Flag&quot; /><span class=&quot;text-truncate&quot;>Antigua and Barbuda</span></span>">Antigua and Barbuda</option>
                                                                <option value="AR" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ar.svg&quot; alt=&quot;Argentina Flag&quot; /><span class=&quot;text-truncate&quot;>Argentina</span></span>">Argentina</option>
                                                                <option value="AM" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/am.svg&quot; alt=&quot;Armenia Flag&quot; /><span class=&quot;text-truncate&quot;>Armenia</span></span>">Armenia</option>
                                                                <option value="AW" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/aw.svg&quot; alt=&quot;Aruba Flag&quot; /><span class=&quot;text-truncate&quot;>Aruba</span></span>">Aruba</option>
                                                                <option value="AU" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/au.svg&quot; alt=&quot;Australia Flag&quot; /><span class=&quot;text-truncate&quot;>Australia</span></span>">Australia</option>
                                                                <option value="AT" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/at.svg&quot; alt=&quot;Austria Flag&quot; /><span class=&quot;text-truncate&quot;>Austria</span></span>">Austria</option>
                                                                <option value="AZ" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/az.svg&quot; alt=&quot;Azerbaijan Flag&quot; /><span class=&quot;text-truncate&quot;>Azerbaijan</span></span>">Azerbaijan</option>
                                                                <option value="BS" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/bs.svg&quot; alt=&quot;Bahamas Flag&quot; /><span class=&quot;text-truncate&quot;>Bahamas</span></span>">Bahamas</option>
                                                                <option value="BH" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/bh.svg&quot; alt=&quot;Bahrain Flag&quot; /><span class=&quot;text-truncate&quot;>Bahrain</span></span>">Bahrain</option>
                                                                <option value="BD" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/bd.svg&quot; alt=&quot;Bangladesh Flag&quot; /><span class=&quot;text-truncate&quot;>Bangladesh</span></span>">Bangladesh</option>
                                                                <option value="BB" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/bb.svg&quot; alt=&quot;Barbados Flag&quot; /><span class=&quot;text-truncate&quot;>Barbados</span></span>">Barbados</option>
                                                                <option value="BY" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/by.svg&quot; alt=&quot;Belarus Flag&quot; /><span class=&quot;text-truncate&quot;>Belarus</span></span>">Belarus</option>
                                                                <option value="BE" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/be.svg&quot; alt=&quot;Belgium Flag&quot; /><span class=&quot;text-truncate&quot;>Belgium</span></span>">Belgium</option>
                                                                <option value="BZ" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/bz.svg&quot; alt=&quot;Belize Flag&quot; /><span class=&quot;text-truncate&quot;>Belize</span></span>">Belize</option>
                                                                <option value="BJ" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/bj.svg&quot; alt=&quot;Benin Flag&quot; /><span class=&quot;text-truncate&quot;>Benin</span></span>">Benin</option>
                                                                <option value="BM" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/bm.svg&quot; alt=&quot;Bermuda Flag&quot; /><span class=&quot;text-truncate&quot;>Bermuda</span></span>">Bermuda</option>
                                                                <option value="BT" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/bt.svg&quot; alt=&quot;Bhutan Flag&quot; /><span class=&quot;text-truncate&quot;>Bhutan</span></span>">Bhutan</option>
                                                                <option value="BO" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/bo.svg&quot; alt=&quot;Bolivia (Plurinational State of) Flag&quot; /><span class=&quot;text-truncate&quot;>Bolivia (Plurinational State of)</span></span>">Bolivia (Plurinational State of)</option>
                                                                <option value="BQ" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/bq.svg&quot; alt=&quot;Bonaire, Sint Eustatius and Saba Flag&quot; /><span class=&quot;text-truncate&quot;>Bonaire, Sint Eustatius and Saba</span></span>">Bonaire, Sint Eustatius and Saba</option>
                                                                <option value="BA" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ba.svg&quot; alt=&quot;Bosnia and Herzegovina Flag&quot; /><span class=&quot;text-truncate&quot;>Bosnia and Herzegovina</span></span>">Bosnia and Herzegovina</option>
                                                                <option value="BW" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/bw.svg&quot; alt=&quot;Botswana Flag&quot; /><span class=&quot;text-truncate&quot;>Botswana</span></span>">Botswana</option>
                                                                <option value="BR" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/br.svg&quot; alt=&quot;Brazil Flag&quot; /><span class=&quot;text-truncate&quot;>Brazil</span></span>">Brazil</option>
                                                                <option value="IO" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/io.svg&quot; alt=&quot;British Indian Ocean Territory Flag&quot; /><span class=&quot;text-truncate&quot;>British Indian Ocean Territory</span></span>">British Indian Ocean Territory</option>
                                                                <option value="BN" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/bn.svg&quot; alt=&quot;Brunei Darussalam Flag&quot; /><span class=&quot;text-truncate&quot;>Brunei Darussalam</span></span>">Brunei Darussalam</option>
                                                                <option value="BG" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/bg.svg&quot; alt=&quot;Bulgaria Flag&quot; /><span class=&quot;text-truncate&quot;>Bulgaria</span></span>">Bulgaria</option>
                                                                <option value="BF" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/bf.svg&quot; alt=&quot;Burkina Faso Flag&quot; /><span class=&quot;text-truncate&quot;>Burkina Faso</span></span>">Burkina Faso</option>
                                                                <option value="BI" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/bi.svg&quot; alt=&quot;Burundi Flag&quot; /><span class=&quot;text-truncate&quot;>Burundi</span></span>">Burundi</option>
                                                                <option value="CV" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/cv.svg&quot; alt=&quot;Cabo Verde Flag&quot; /><span class=&quot;text-truncate&quot;>Cabo Verde</span></span>">Cabo Verde</option>
                                                                <option value="KH" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/kh.svg&quot; alt=&quot;Cambodia Flag&quot; /><span class=&quot;text-truncate&quot;>Cambodia</span></span>">Cambodia</option>
                                                                <option value="CM" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/cm.svg&quot; alt=&quot;Cameroon Flag&quot; /><span class=&quot;text-truncate&quot;>Cameroon</span></span>">Cameroon</option>
                                                                <option value="CA" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ca.svg&quot; alt=&quot;Canada Flag&quot; /><span class=&quot;text-truncate&quot;>Canada</span></span>">Canada</option>
                                                                <option value="KY" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ky.svg&quot; alt=&quot;Cayman Islands Flag&quot; /><span class=&quot;text-truncate&quot;>Cayman Islands</span></span>">Cayman Islands</option>
                                                                <option value="CF" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/cf.svg&quot; alt=&quot;Central African Republic Flag&quot; /><span class=&quot;text-truncate&quot;>Central African Republic</span></span>">Central African Republic</option>
                                                                <option value="TD" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/td.svg&quot; alt=&quot;Chad Flag&quot; /><span class=&quot;text-truncate&quot;>Chad</span></span>">Chad</option>
                                                                <option value="CL" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/cl.svg&quot; alt=&quot;Chile Flag&quot; /><span class=&quot;text-truncate&quot;>Chile</span></span>">Chile</option>
                                                                <option value="CN" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/cn.svg&quot; alt=&quot;China Flag&quot; /><span class=&quot;text-truncate&quot;>China</span></span>">China</option>
                                                                <option value="CX" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/cx.svg&quot; alt=&quot;Christmas Island Flag&quot; /><span class=&quot;text-truncate&quot;>Christmas Island</span></span>">Christmas Island</option>
                                                                <option value="CC" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/cc.svg&quot; alt=&quot;Cocos (Keeling) Islands Flag&quot; /><span class=&quot;text-truncate&quot;>Cocos (Keeling) Islands</span></span>">Cocos (Keeling) Islands</option>
                                                                <option value="CO" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/co.svg&quot; alt=&quot;Colombia Flag&quot; /><span class=&quot;text-truncate&quot;>Colombia</span></span>">Colombia</option>
                                                                <option value="KM" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/km.svg&quot; alt=&quot;Comoros Flag&quot; /><span class=&quot;text-truncate&quot;>Comoros</span></span>">Comoros</option>
                                                                <option value="CK" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ck.svg&quot; alt=&quot;Cook Islands Flag&quot; /><span class=&quot;text-truncate&quot;>Cook Islands</span></span>">Cook Islands</option>
                                                                <option value="CR" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/cr.svg&quot; alt=&quot;Costa Rica Flag&quot; /><span class=&quot;text-truncate&quot;>Costa Rica</span></span>">Costa Rica</option>
                                                                <option value="HR" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/hr.svg&quot; alt=&quot;Croatia Flag&quot; /><span class=&quot;text-truncate&quot;>Croatia</span></span>">Croatia</option>
                                                                <option value="CU" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/cu.svg&quot; alt=&quot;Cuba Flag&quot; /><span class=&quot;text-truncate&quot;>Cuba</span></span>">Cuba</option>
                                                                <option value="CW" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/cw.svg&quot; alt=&quot;Curaçao Flag&quot; /><span class=&quot;text-truncate&quot;>Curaçao</span></span>">Curaçao</option>
                                                                <option value="CY" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/cy.svg&quot; alt=&quot;Cyprus Flag&quot; /><span class=&quot;text-truncate&quot;>Cyprus</span></span>">Cyprus</option>
                                                                <option value="CZ" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/cz.svg&quot; alt=&quot;Czech Republic Flag&quot; /><span class=&quot;text-truncate&quot;>Czech Republic</span></span>">Czech Republic</option>
                                                                <option value="CI" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ci.svg&quot; alt=Côte d'Ivoire Flag&quot; /><span class=&quot;text-truncate&quot;>Côte d'Ivoire</span></span>">Côte d'Ivoire</option>
                                                                <option value="CD" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/cd.svg&quot; alt=&quot;Democratic Republic of the Congo Flag&quot; /><span class=&quot;text-truncate&quot;>Democratic Republic of the Congo</span></span>">Democratic Republic of the Congo</option>
                                                                <option value="DK" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/dk.svg&quot; alt=&quot;Denmark Flag&quot; /><span class=&quot;text-truncate&quot;>Denmark</span></span>">Denmark</option>
                                                                <option value="DJ" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/dj.svg&quot; alt=&quot;Djibouti Flag&quot; /><span class=&quot;text-truncate&quot;>Djibouti</span></span>">Djibouti</option>
                                                                <option value="DM" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/dm.svg&quot; alt=&quot;Dominica Flag&quot; /><span class=&quot;text-truncate&quot;>Dominica</span></span>">Dominica</option>
                                                                <option value="DO" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/do.svg&quot; alt=&quot;Dominican Republic Flag&quot; /><span class=&quot;text-truncate&quot;>Dominican Republic</span></span>">Dominican Republic</option>
                                                                <option value="EC" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ec.svg&quot; alt=&quot;Ecuador Flag&quot; /><span class=&quot;text-truncate&quot;>Ecuador</span></span>">Ecuador</option>
                                                                <option value="EG" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/eg.svg&quot; alt=&quot;Egypt Flag&quot; /><span class=&quot;text-truncate&quot;>Egypt</span></span>">Egypt</option>
                                                                <option value="SV" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/sv.svg&quot; alt=&quot;El Salvador Flag&quot; /><span class=&quot;text-truncate&quot;>El Salvador</span></span>">El Salvador</option>
                                                                <option value="GB-ENG" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/gb-eng.svg&quot; alt=&quot;England Flag&quot; /><span class=&quot;text-truncate&quot;>England</span></span>">England</option>
                                                                <option value="GQ" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/gq.svg&quot; alt=&quot;Equatorial Guinea Flag&quot; /><span class=&quot;text-truncate&quot;>Equatorial Guinea</span></span>">Equatorial Guinea</option>
                                                                <option value="ER" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/er.svg&quot; alt=&quot;Eritrea Flag&quot; /><span class=&quot;text-truncate&quot;>Eritrea</span></span>">Eritrea</option>
                                                                <option value="EE" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ee.svg&quot; alt=&quot;Estonia Flag&quot; /><span class=&quot;text-truncate&quot;>Estonia</span></span>">Estonia</option>
                                                                <option value="ET" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/et.svg&quot; alt=&quot;Ethiopia Flag&quot; /><span class=&quot;text-truncate&quot;>Ethiopia</span></span>">Ethiopia</option>
                                                                <option value="FK" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/fk.svg&quot; alt=&quot;Falkland Islands Flag&quot; /><span class=&quot;text-truncate&quot;>Falkland Islands</span></span>">Falkland Islands</option>
                                                                <option value="FO" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/fo.svg&quot; alt=&quot;Faroe Islands Flag&quot; /><span class=&quot;text-truncate&quot;>Faroe Islands</span></span>">Faroe Islands</option>
                                                                <option value="FM" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/fm.svg&quot; alt=&quot;Federated States of Micronesia Flag&quot; /><span class=&quot;text-truncate&quot;>Federated States of Micronesia</span></span>">Federated States of Micronesia</option>
                                                                <option value="FJ" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/fj.svg&quot; alt=&quot;Fiji Flag&quot; /><span class=&quot;text-truncate&quot;>Fiji</span></span>">Fiji</option>
                                                                <option value="FI" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/fi.svg&quot; alt=&quot;Finland Flag&quot; /><span class=&quot;text-truncate&quot;>Finland</span></span>">Finland</option>
                                                                <option value="FR" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/fr.svg&quot; alt=&quot;France Flag&quot; /><span class=&quot;text-truncate&quot;>France</span></span>">France</option>
                                                                <option value="GF" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/gf.svg&quot; alt=&quot;French Guiana Flag&quot; /><span class=&quot;text-truncate&quot;>French Guiana</span></span>">French Guiana</option>
                                                                <option value="PF" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/pf.svg&quot; alt=&quot;French Polynesia Flag&quot; /><span class=&quot;text-truncate&quot;>French Polynesia</span></span>">French Polynesia</option>
                                                                <option value="TF" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/tf.svg&quot; alt=&quot;French Southern Territories Flag&quot; /><span class=&quot;text-truncate&quot;>French Southern Territories</span></span>">French Southern Territories</option>
                                                                <option value="GA" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ga.svg&quot; alt=&quot;Gabon Flag&quot; /><span class=&quot;text-truncate&quot;>Gabon</span></span>">Gabon</option>
                                                                <option value="GM" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/gm.svg&quot; alt=&quot;Gambia Flag&quot; /><span class=&quot;text-truncate&quot;>Gambia</span></span>">Gambia</option>
                                                                <option value="GE" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ge.svg&quot; alt=&quot;Georgia Flag&quot; /><span class=&quot;text-truncate&quot;>Georgia</span></span>">Georgia</option>
                                                                <option value="DE" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/de.svg&quot; alt=&quot;Germany Flag&quot; /><span class=&quot;text-truncate&quot;>Germany</span></span>">Germany</option>
                                                                <option value="GH" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/gh.svg&quot; alt=&quot;Ghana Flag&quot; /><span class=&quot;text-truncate&quot;>Ghana</span></span>">Ghana</option>
                                                                <option value="GI" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/gi.svg&quot; alt=&quot;Gibraltar Flag&quot; /><span class=&quot;text-truncate&quot;>Gibraltar</span></span>">Gibraltar</option>
                                                                <option value="GR" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/gr.svg&quot; alt=&quot;Greece Flag&quot; /><span class=&quot;text-truncate&quot;>Greece</span></span>">Greece</option>
                                                                <option value="GL" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/gl.svg&quot; alt=&quot;Greenland Flag&quot; /><span class=&quot;text-truncate&quot;>Greenland</span></span>">Greenland</option>
                                                                <option value="GD" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/gd.svg&quot; alt=&quot;Grenada Flag&quot; /><span class=&quot;text-truncate&quot;>Grenada</span></span>">Grenada</option>
                                                                <option value="GP" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/gp.svg&quot; alt=&quot;Guadeloupe Flag&quot; /><span class=&quot;text-truncate&quot;>Guadeloupe</span></span>">Guadeloupe</option>
                                                                <option value="GU" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/gu.svg&quot; alt=&quot;Guam Flag&quot; /><span class=&quot;text-truncate&quot;>Guam</span></span>">Guam</option>
                                                                <option value="GT" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/gt.svg&quot; alt=&quot;Guatemala Flag&quot; /><span class=&quot;text-truncate&quot;>Guatemala</span></span>">Guatemala</option>
                                                                <option value="GG" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/gg.svg&quot; alt=&quot;Guernsey Flag&quot; /><span class=&quot;text-truncate&quot;>Guernsey</span></span>">Guernsey</option>
                                                                <option value="GN" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/gn.svg&quot; alt=&quot;Guinea Flag&quot; /><span class=&quot;text-truncate&quot;>Guinea</span></span>">Guinea</option>
                                                                <option value="GW" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/gw.svg&quot; alt=&quot;Guinea-Bissau Flag&quot; /><span class=&quot;text-truncate&quot;>Guinea-Bissau</span></span>">Guinea-Bissau</option>
                                                                <option value="GY" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/gy.svg&quot; alt=&quot;Guyana Flag&quot; /><span class=&quot;text-truncate&quot;>Guyana</span></span>">Guyana</option>
                                                                <option value="HT" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ht.svg&quot; alt=&quot;Haiti Flag&quot; /><span class=&quot;text-truncate&quot;>Haiti</span></span>">Haiti</option>
                                                                <option value="VA" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/va.svg&quot; alt=&quot;Holy See Flag&quot; /><span class=&quot;text-truncate&quot;>Holy See</span></span>">Holy See</option>
                                                                <option value="HN" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/hn.svg&quot; alt=&quot;Honduras Flag&quot; /><span class=&quot;text-truncate&quot;>Honduras</span></span>">Honduras</option>
                                                                <option value="HK" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/hk.svg&quot; alt=&quot;Hong Kong Flag&quot; /><span class=&quot;text-truncate&quot;>Hong Kong</span></span>">Hong Kong</option>
                                                                <option value="HU" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/hu.svg&quot; alt=&quot;Hungary Flag&quot; /><span class=&quot;text-truncate&quot;>Hungary</span></span>">Hungary</option>
                                                                <option value="IS" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/is.svg&quot; alt=&quot;Iceland Flag&quot; /><span class=&quot;text-truncate&quot;>Iceland</span></span>">Iceland</option>
                                                                <option value="IN" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/in.svg&quot; alt=&quot;India Flag&quot; /><span class=&quot;text-truncate&quot;>India</span></span>">India</option>
                                                                <option value="ID" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/id.svg&quot; alt=&quot;Indonesia Flag&quot; /><span class=&quot;text-truncate&quot;>Indonesia</span></span>">Indonesia</option>
                                                                <option value="IR" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ir.svg&quot; alt=&quot;Iran (Islamic Republic of) Flag&quot; /><span class=&quot;text-truncate&quot;>Iran (Islamic Republic of)</span></span>">Iran (Islamic Republic of)</option>
                                                                <option value="IQ" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/iq.svg&quot; alt=&quot;Iraq Flag&quot; /><span class=&quot;text-truncate&quot;>Iraq</span></span>">Iraq</option>
                                                                <option value="IE" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ie.svg&quot; alt=&quot;Ireland Flag&quot; /><span class=&quot;text-truncate&quot;>Ireland</span></span>">Ireland</option>
                                                                <option value="IM" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/im.svg&quot; alt=&quot;Isle of Man Flag&quot; /><span class=&quot;text-truncate&quot;>Isle of Man</span></span>">Isle of Man</option>
                                                                <option value="IL" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/il.svg&quot; alt=&quot;Israel Flag&quot; /><span class=&quot;text-truncate&quot;>Israel</span></span>">Israel</option>
                                                                <option value="IT" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/it.svg&quot; alt=&quot;Italy Flag&quot; /><span class=&quot;text-truncate&quot;>Italy</span></span>">Italy</option>
                                                                <option value="JM" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/jm.svg&quot; alt=&quot;Jamaica Flag&quot; /><span class=&quot;text-truncate&quot;>Jamaica</span></span>">Jamaica</option>
                                                                <option value="JP" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/jp.svg&quot; alt=&quot;Japan Flag&quot; /><span class=&quot;text-truncate&quot;>Japan</span></span>">Japan</option>
                                                                <option value="JE" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/je.svg&quot; alt=&quot;Jersey Flag&quot; /><span class=&quot;text-truncate&quot;>Jersey</span></span>">Jersey</option>
                                                                <option value="JO" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/jo.svg&quot; alt=&quot;Jordan Flag&quot; /><span class=&quot;text-truncate&quot;>Jordan</span></span>">Jordan</option>
                                                                <option value="KZ" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/kz.svg&quot; alt=&quot;Kazakhstan Flag&quot; /><span class=&quot;text-truncate&quot;>Kazakhstan</span></span>">Kazakhstan</option>
                                                                <option value="KE" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ke.svg&quot; alt=&quot;Kenya Flag&quot; /><span class=&quot;text-truncate&quot;>Kenya</span></span>">Kenya</option>
                                                                <option value="KI" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ki.svg&quot; alt=&quot;Kiribati Flag&quot; /><span class=&quot;text-truncate&quot;>Kiribati</span></span>">Kiribati</option>
                                                                <option value="KW" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/kw.svg&quot; alt=&quot;Kuwait Flag&quot; /><span class=&quot;text-truncate&quot;>Kuwait</span></span>">Kuwait</option>
                                                                <option value="KG" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/kg.svg&quot; alt=&quot;Kyrgyzstan Flag&quot; /><span class=&quot;text-truncate&quot;>Kyrgyzstan</span></span>">Kyrgyzstan</option>
                                                                <option value="LA" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/la.svg&quot; alt=&quot;Laos Flag&quot; /><span class=&quot;text-truncate&quot;>Laos</span></span>">Laos</option>
                                                                <option value="LV" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/lv.svg&quot; alt=&quot;Latvia Flag&quot; /><span class=&quot;text-truncate&quot;>Latvia</span></span>">Latvia</option>
                                                                <option value="LB" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/lb.svg&quot; alt=&quot;Lebanon Flag&quot; /><span class=&quot;text-truncate&quot;>Lebanon</span></span>">Lebanon</option>
                                                                <option value="LS" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ls.svg&quot; alt=&quot;Lesotho Flag&quot; /><span class=&quot;text-truncate&quot;>Lesotho</span></span>">Lesotho</option>
                                                                <option value="LR" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/lr.svg&quot; alt=&quot;Liberia Flag&quot; /><span class=&quot;text-truncate&quot;>Liberia</span></span>">Liberia</option>
                                                                <option value="LY" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ly.svg&quot; alt=&quot;Libya Flag&quot; /><span class=&quot;text-truncate&quot;>Libya</span></span>">Libya</option>
                                                                <option value="LI" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/li.svg&quot; alt=&quot;Liechtenstein Flag&quot; /><span class=&quot;text-truncate&quot;>Liechtenstein</span></span>">Liechtenstein</option>
                                                                <option value="LT" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/lt.svg&quot; alt=&quot;Lithuania Flag&quot; /><span class=&quot;text-truncate&quot;>Lithuania</span></span>">Lithuania</option>
                                                                <option value="LU" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/lu.svg&quot; alt=&quot;Luxembourg Flag&quot; /><span class=&quot;text-truncate&quot;>Luxembourg</span></span>">Luxembourg</option>
                                                                <option value="MO" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/mo.svg&quot; alt=&quot;Macau Flag&quot; /><span class=&quot;text-truncate&quot;>Macau</span></span>">Macau</option>
                                                                <option value="MG" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/mg.svg&quot; alt=&quot;Madagascar Flag&quot; /><span class=&quot;text-truncate&quot;>Madagascar</span></span>">Madagascar</option>
                                                                <option value="MW" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/mw.svg&quot; alt=&quot;Malawi Flag&quot; /><span class=&quot;text-truncate&quot;>Malawi</span></span>">Malawi</option>
                                                                <option value="MY" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/my.svg&quot; alt=&quot;Malaysia Flag&quot; /><span class=&quot;text-truncate&quot;>Malaysia</span></span>">Malaysia</option>
                                                                <option value="MV" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/mv.svg&quot; alt=&quot;Maldives Flag&quot; /><span class=&quot;text-truncate&quot;>Maldives</span></span>">Maldives</option>
                                                                <option value="ML" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ml.svg&quot; alt=&quot;Mali Flag&quot; /><span class=&quot;text-truncate&quot;>Mali</span></span>">Mali</option>
                                                                <option value="MT" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/mt.svg&quot; alt=&quot;Malta Flag&quot; /><span class=&quot;text-truncate&quot;>Malta</span></span>">Malta</option>
                                                                <option value="MH" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/mh.svg&quot; alt=&quot;Marshall Islands Flag&quot; /><span class=&quot;text-truncate&quot;>Marshall Islands</span></span>">Marshall Islands</option>
                                                                <option value="MQ" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/mq.svg&quot; alt=&quot;Martinique Flag&quot; /><span class=&quot;text-truncate&quot;>Martinique</span></span>">Martinique</option>
                                                                <option value="MR" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/mr.svg&quot; alt=&quot;Mauritania Flag&quot; /><span class=&quot;text-truncate&quot;>Mauritania</span></span>">Mauritania</option>
                                                                <option value="MU" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/mu.svg&quot; alt=&quot;Mauritius Flag&quot; /><span class=&quot;text-truncate&quot;>Mauritius</span></span>">Mauritius</option>
                                                                <option value="YT" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/yt.svg&quot; alt=&quot;Mayotte Flag&quot; /><span class=&quot;text-truncate&quot;>Mayotte</span></span>">Mayotte</option>
                                                                <option value="MX" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/mx.svg&quot; alt=&quot;Mexico Flag&quot; /><span class=&quot;text-truncate&quot;>Mexico</span></span>">Mexico</option>
                                                                <option value="MD" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/md.svg&quot; alt=&quot;Moldova Flag&quot; /><span class=&quot;text-truncate&quot;>Moldova</span></span>">Moldova</option>
                                                                <option value="MC" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/mc.svg&quot; alt=&quot;Monaco Flag&quot; /><span class=&quot;text-truncate&quot;>Monaco</span></span>">Monaco</option>
                                                                <option value="MN" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/mn.svg&quot; alt=&quot;Mongolia Flag&quot; /><span class=&quot;text-truncate&quot;>Mongolia</span></span>">Mongolia</option>
                                                                <option value="ME" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/me.svg&quot; alt=&quot;Montenegro Flag&quot; /><span class=&quot;text-truncate&quot;>Montenegro</span></span>">Montenegro</option>
                                                                <option value="MS" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ms.svg&quot; alt=&quot;Montserrat Flag&quot; /><span class=&quot;text-truncate&quot;>Montserrat</span></span>">Montserrat</option>
                                                                <option value="MA" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ma.svg&quot; alt=&quot;Morocco Flag&quot; /><span class=&quot;text-truncate&quot;>Morocco</span></span>">Morocco</option>
                                                                <option value="MZ" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/mz.svg&quot; alt=&quot;Mozambique Flag&quot; /><span class=&quot;text-truncate&quot;>Mozambique</span></span>">Mozambique</option>
                                                                <option value="MM" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/mm.svg&quot; alt=&quot;Myanmar Flag&quot; /><span class=&quot;text-truncate&quot;>Myanmar</span></span>">Myanmar</option>
                                                                <option value="NA" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/na.svg&quot; alt=&quot;Namibia Flag&quot; /><span class=&quot;text-truncate&quot;>Namibia</span></span>">Namibia</option>
                                                                <option value="NR" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/nr.svg&quot; alt=&quot;Nauru Flag&quot; /><span class=&quot;text-truncate&quot;>Nauru</span></span>">Nauru</option>
                                                                <option value="NP" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/np.svg&quot; alt=&quot;Nepal Flag&quot; /><span class=&quot;text-truncate&quot;>Nepal</span></span>">Nepal</option>
                                                                <option value="NL" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/nl.svg&quot; alt=&quot;Netherlands Flag&quot; /><span class=&quot;text-truncate&quot;>Netherlands</span></span>">Netherlands</option>
                                                                <option value="NC" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/nc.svg&quot; &quot;alt=&quot;New Caledonia Flag&quot; /><span class=&quot;text-truncate&quot;>New Caledonia</span></span>">New Caledonia</option>
                                                                <option value="NZ" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/nz.svg&quot; alt=&quot;New Zealand Flag&quot; /><span class=&quot;text-truncate&quot;>New Zealand</span></span>">New Zealand</option>
                                                                <option value="NI" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ni.svg&quot; alt=&quot;Nicaragua Flag&quot; /><span class=&quot;text-truncate&quot;>Nicaragua</span></span>">Nicaragua</option>
                                                                <option value="NE" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ne.svg&quot; alt=&quot;Niger Flag&quot; /><span class=&quot;text-truncate&quot;>Niger</span></span>">Niger</option>
                                                                <option value="NG" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ng.svg&quot; alt=&quot;Nigeria Flag&quot; /><span class=&quot;text-truncate&quot;>Nigeria</span></span>">Nigeria</option>
                                                                <option value="NU" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/nu.svg&quot; alt=&quot;Niue Flag&quot; /><span class=&quot;text-truncate&quot;>Niue</span></span>">Niue</option>
                                                                <option value="NF" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/nf.svg&quot; alt=&quot;Norfolk Island Flag&quot; /><span class=&quot;text-truncate&quot;>Norfolk Island</span></span>">Norfolk Island</option>
                                                                <option value="KP" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/kp.svg&quot; alt=&quot;North Korea Flag&quot; /><span class=&quot;text-truncate&quot;>North Korea</span></span>">North Korea</option>
                                                                <option value="MK" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/mk.svg&quot; alt=&quot;North Macedonia Flag&quot; /><span class=&quot;text-truncate&quot;>North Macedonia</span></span>">North Macedonia</option>
                                                                <option value="GB-NIR" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/gb-nir.svg&quot; alt=&quot;Northern Ireland Flag&quot; /><span class=&quot;text-truncate&quot;>Northern Ireland</span></span>">Northern Ireland</option>
                                                                <option value="MP" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/mp.svg&quot; alt=&quot;Northern Mariana Islands Flag&quot; /><span class=&quot;text-truncate&quot;>Northern Mariana Islands</span></span>">Northern Mariana Islands</option>
                                                                <option value="NO" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/no.svg&quot; alt=&quot;Norway Flag&quot; /><span class=&quot;text-truncate&quot;>Norway</span></span>">Norway</option>
                                                                <option value="OM" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/om.svg&quot; alt=&quot;Oman Flag&quot; /><span class=&quot;text-truncate&quot;>Oman</span></span>">Oman</option>
                                                                <option value="PK" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/pk.svg&quot; alt=&quot;Pakistan Flag&quot; /><span class=&quot;text-truncate&quot;>Pakistan</span></span>">Pakistan</option>
                                                                <option value="PW" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/pw.svg&quot; alt=&quot;Palau Flag&quot; /><span class=&quot;text-truncate&quot;>Palau</span></span>">Palau</option>
                                                                <option value="PA" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/pa.svg&quot; alt=&quot;Panama Flag&quot; /><span class=&quot;text-truncate&quot;>Panama</span></span>">Panama</option>
                                                                <option value="PG" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/pg.svg&quot; alt=&quot;Papua New Guinea Flag&quot; /><span class=&quot;text-truncate&quot;>Papua New Guinea</span></span>">Papua New Guinea</option>
                                                                <option value="PY" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/py.svg&quot; alt=&quot;Paraguay Flag&quot; /><span class=&quot;text-truncate&quot;>Paraguay</span></span>">Paraguay</option>
                                                                <option value="PE" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/pe.svg&quot; alt=&quot;Peru Flag&quot; /><span class=&quot;text-truncate&quot;>Peru</span></span>">Peru</option>
                                                                <option value="PH" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ph.svg&quot; alt=&quot;Philippines Flag&quot; /><span class=&quot;text-truncate&quot;>Philippines</span></span>">Philippines</option>
                                                                <option value="PN" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/pn.svg&quot; alt=&quot;Pitcairn Flag&quot; /><span class=&quot;text-truncate&quot;>Pitcairn</span></span>">Pitcairn</option>
                                                                <option value="PL" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/pl.svg&quot; alt=&quot;Poland Flag&quot; /><span class=&quot;text-truncate&quot;>Poland</span></span>">Poland</option>
                                                                <option value="PT" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/pt.svg&quot; alt=&quot;Portugal Flag&quot; /><span class=&quot;text-truncate&quot;>Portugal</span></span>">Portugal</option>
                                                                <option value="PR" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/pr.svg&quot; alt=&quot;Puerto Rico Flag&quot; /><span class=&quot;text-truncate&quot;>Puerto Rico</span></span>">Puerto Rico</option>
                                                                <option value="QA" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/qa.svg&quot; alt=&quot;Qatar Flag&quot; /><span class=&quot;text-truncate&quot;>Qatar</span></span>">Qatar</option>
                                                                <option value="CG" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/cg.svg&quot; alt=&quot;Republic of the Congo Flag&quot; /><span class=&quot;text-truncate&quot;>Republic of the Congo</span></span>">Republic of the Congo</option>
                                                                <option value="RO" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ro.svg&quot; alt=&quot;Romania Flag&quot; /><span class=&quot;text-truncate&quot;>Romania</span></span>">Romania</option>
                                                                <option value="RU" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ru.svg&quot; alt=&quot;Russia Flag&quot; /><span class=&quot;text-truncate&quot;>Russia</span></span>">Russia</option>
                                                                <option value="RW" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/rw.svg&quot; alt=&quot;Rwanda Flag&quot; /><span class=&quot;text-truncate&quot;>Rwanda</span></span>">Rwanda</option>
                                                                <option value="RE" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/re.svg&quot; alt=&quot;Réunion Flag&quot; /><span class=&quot;text-truncate&quot;>Réunion</span></span>">Réunion</option>
                                                                <option value="BL" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/bl.svg&quot; alt=&quot;Saint Barthélemy Flag&quot; /><span class=&quot;text-truncate&quot;>Saint Barthélemy</span></span>">Saint Barthélemy</option>
                                                                <option value="SH" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/sh.svg&quot; alt=&quot;Saint Helena, Ascension and Tristan da Cunha Flag&quot; /><span class=&quot;text-truncate&quot;>Saint Helena, Ascension and Tristan da Cunha</span></span>">Saint Helena, Ascension and Tristan da Cunha</option>
                                                                <option value="KN" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/kn.svg&quot; alt=&quot;Saint Kitts and Nevis Flag&quot; /><span class=&quot;text-truncate&quot;>Saint Kitts and Nevis</span></span>">Saint Kitts and Nevis</option>
                                                                <option value="LC" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/lc.svg&quot; alt=&quot;Saint Lucia Flag&quot; /><span class=&quot;text-truncate&quot;>Saint Lucia</span></span>">Saint Lucia</option>
                                                                <option value="MF" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/mf.svg&quot; alt=&quot;Saint Martin Flag&quot; /><span class=&quot;text-truncate&quot;>Saint Martin</span></span>">Saint Martin</option>
                                                                <option value="PM" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/pm.svg&quot; alt=&quot;Saint Pierre and Miquelon Flag&quot; /><span class=&quot;text-truncate&quot;>Saint Pierre and Miquelon</span></span>">Saint Pierre and Miquelon</option>
                                                                <option value="VC" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/vc.svg&quot; alt=&quot;Saint Vincent and the Grenadines Flag&quot; /><span class=&quot;text-truncate&quot;>Saint Vincent and the Grenadines</span></span>">Saint Vincent and the Grenadines</option>
                                                                <option value="WS" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ws.svg&quot; alt=&quot;Samoa Flag&quot; /><span class=&quot;text-truncate&quot;>Samoa</span></span>">Samoa</option>
                                                                <option value="SM" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/sm.svg&quot; &quot;alt=&quot;San Marino Flag&quot; /><span class=&quot;text-truncate&quot;>San Marino</span></span>">San Marino</option>
                                                                <option value="ST" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/st.svg&quot; &quot;alt=&quot;Sao Tome and Principe Flag&quot; /><span class=&quot;text-truncate&quot;>Sao Tome and Principe</span></span>">Sao Tome and Principe</option>
                                                                <option value="SA" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/sa.svg&quot; alt=&quot;Saudi Arabia Flag&quot; /><span class=&quot;text-truncate&quot;>Saudi Arabia</span></span>">Saudi Arabia</option>
                                                                <option value="GB-SCT" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/gb-sct.svg&quot; alt=&quot;Scotland Flag&quot; /><span class=&quot;text-truncate&quot;>Scotland</span></span>">Scotland</option>
                                                                <option value="SN" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/sn.svg&quot; alt=&quot;Senegal Flag&quot; /><span class=&quot;text-truncate&quot;>Senegal</span></span>">Senegal</option>
                                                                <option value="RS" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/rs.svg&quot; alt=&quot;Serbia Flag&quot; /><span class=&quot;text-truncate&quot;>Serbia</span></span>">Serbia</option>
                                                                <option value="SC" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/sc.svg&quot; alt=&quot;Seychelles Flag&quot; /><span class=&quot;text-truncate&quot;>Seychelles</span></span>">Seychelles</option>
                                                                <option value="SL" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/sl.svg&quot; alt=&quot;Sierra Leone Flag&quot; /><span class=&quot;text-truncate&quot;>Sierra Leone</span></span>">Sierra Leone</option>
                                                                <option value="SG" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/sg.svg&quot; alt=&quot;Singapore Flag&quot; /><span class=&quot;text-truncate&quot;>Singapore</span></span>">Singapore</option>
                                                                <option value="SX" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/sx.svg&quot; alt=&quot;Sint Maarten Flag&quot; /><span class=&quot;text-truncate&quot;>Sint Maarten</span></span>">Sint Maarten</option>
                                                                <option value="SK" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/sk.svg&quot; alt=&quot;Slovakia Flag&quot; /><span class=&quot;text-truncate&quot;>Slovakia</span></span>">Slovakia</option>
                                                                <option value="SI" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/si.svg&quot; alt=&quot;Slovenia Flag&quot; /><span class=&quot;text-truncate&quot;>Slovenia</span></span>">Slovenia</option>
                                                                <option value="SB" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/sb.svg&quot; alt=&quot;Solomon Islands Flag&quot; /><span class=&quot;text-truncate&quot;>Solomon Islands</span></span>">Solomon Islands</option>
                                                                <option value="SO" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/so.svg&quot; alt=&quot;Somalia Flag&quot; /><span class=&quot;text-truncate&quot;>Somalia</span></span>">Somalia</option>
                                                                <option value="ZA" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/za.svg&quot; alt=&quot;South Africa Flag&quot; /><span class=&quot;text-truncate&quot;>South Africa</span></span>">South Africa</option>
                                                                <option value="GS" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/gs.svg&quot; alt=&quot;South Georgia and the South Sandwich Islands Flag&quot; /><span class=&quot;text-truncate&quot;>South Georgia and the South Sandwich Islands</span></span>">South Georgia and the South Sandwich Islands</option>
                                                                <option value="KR" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/kr.svg&quot; alt=&quot;South Korea Flag&quot; /><span class=&quot;text-truncate&quot;>South Korea</span></span>">South Korea</option>
                                                                <option value="SS" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ss.svg&quot; alt=&quot;South Sudan Flag&quot; /><span class=&quot;text-truncate&quot;>South Sudan</span></span>">South Sudan</option>
                                                                <option value="ES" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/es.svg&quot; alt=&quot;Spain Flag&quot; /><span class=&quot;text-truncate&quot;>Spain</span></span>">Spain</option>
                                                                <option value="LK" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/lk.svg&quot; &quot;alt=&quot;Sri Lanka Flag&quot; /><span class=&quot;text-truncate&quot;>Sri Lanka</span></span>">Sri Lanka</option>
                                                                <option value="PS" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ps.svg&quot; alt=&quot;State of Palestine Flag&quot; /><span class=&quot;text-truncate&quot;>State of Palestine</span></span>">State of Palestine</option>
                                                                <option value="SD" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/sd.svg&quot; alt=&quot;Sudan Flag&quot; /><span class=&quot;text-truncate&quot;>Sudan</span></span>">Sudan</option>
                                                                <option value="SR" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/sr.svg&quot; alt=&quot;Suriname Flag&quot; /><span class=&quot;text-truncate&quot;>Suriname</span></span>">Suriname</option>
                                                                <option value="SJ" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/sj.svg&quot; alt=&quot;Svalbard and Jan Mayen Flag&quot; /><span class=&quot;text-truncate&quot;>Svalbard and Jan Mayen</span></span>">Svalbard and Jan Mayen</option>
                                                                <option value="SZ" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/sz.svg&quot; alt=&quot;Swaziland Flag&quot; /><span class=&quot;text-truncate&quot;>Swaziland</span></span>">Swaziland</option>
                                                                <option value="SE" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/se.svg&quot; alt=&quot;Sweden Flag&quot; /><span class=&quot;text-truncate&quot;>Sweden</span></span>">Sweden</option>
                                                                <option value="CH" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ch.svg&quot; alt=&quot;Switzerland Flag&quot; /><span class=&quot;text-truncate&quot;>Switzerland</span></span>">Switzerland</option>
                                                                <option value="SY" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/sy.svg&quot; alt=&quot;Syrian Arab Republic Flag&quot; /><span class=&quot;text-truncate&quot;>Syrian Arab Republic</span></span>">Syrian Arab Republic</option>
                                                                <option value="TW" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/tw.svg&quot; alt=&quot;Taiwan Flag&quot; /><span class=&quot;text-truncate&quot;>Taiwan</span></span>">Taiwan</option>
                                                                <option value="TJ" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/tj.svg&quot; alt=&quot;Tajikistan Flag&quot; /><span class=&quot;text-truncate&quot;>Tajikistan</span></span>">Tajikistan</option>
                                                                <option value="TZ" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/tz.svg&quot; alt=&quot;Tanzania Flag&quot; /><span class=&quot;text-truncate&quot;>Tanzania</span></span>">Tanzania</option>
                                                                <option value="TH" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/th.svg&quot; alt=&quot;Thailand Flag&quot; /><span class=&quot;text-truncate&quot;>Thailand</span></span>">Thailand</option>
                                                                <option value="TL" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/tl.svg&quot; alt=&quot;Timor-Leste Flag&quot; /><span class=&quot;text-truncate&quot;>Timor-Leste</span></span>">Timor-Leste</option>
                                                                <option value="TG" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/tg.svg&quot; alt=&quot;Togo Flag&quot; /><span class=&quot;text-truncate&quot;>Togo</span></span>">Togo</option>
                                                                <option value="TK" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/tk.svg&quot; alt=&quot;Tokelau Flag&quot; /><span class=&quot;text-truncate&quot;>Tokelau</span></span>">Tokelau</option>
                                                                <option value="TO" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/to.svg&quot; alt=&quot;Tonga Flag&quot; /><span class=&quot;text-truncate&quot;>Tonga</span></span>">Tonga</option>
                                                                <option value="TT" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/tt.svg&quot; alt=&quot;Trinidad and Tobago Flag&quot; /><span class=&quot;text-truncate&quot;>Trinidad and Tobago</span></span>">Trinidad and Tobago</option>
                                                                <option value="TN" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/tn.svg&quot; alt=&quot;Tunisia Flag&quot; /><span class=&quot;text-truncate&quot;>Tunisia</span></span>">Tunisia</option>
                                                                <option value="TR" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/tr.svg&quot; alt=&quot;Turkey Flag&quot; /><span class=&quot;text-truncate&quot;>Turkey</span></span>">Turkey</option>
                                                                <option value="TM" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/tm.svg&quot; alt=&quot;Turkmenistan Flag&quot; /><span class=&quot;text-truncate&quot;>Turkmenistan</span></span>">Turkmenistan</option>
                                                                <option value="TC" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/tc.svg&quot; alt=&quot;Turks and Caicos Islands Flag&quot; /><span class=&quot;text-truncate&quot;>Turks and Caicos Islands</span></span>">Turks and Caicos Islands</option>
                                                                <option value="TV" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/tv.svg&quot; alt=&quot;Tuvalu Flag&quot; /><span class=&quot;text-truncate&quot;>Tuvalu</span></span>">Tuvalu</option>
                                                                <option value="UG" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ug.svg&quot; alt=&quot;Uganda Flag&quot; /><span class=&quot;text-truncate&quot;>Uganda</span></span>">Uganda</option>
                                                                <option value="UA" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ua.svg&quot; alt=&quot;Ukraine Flag&quot; /><span class=&quot;text-truncate&quot;>Ukraine</span></span>">Ukraine</option>
                                                                <option value="AE" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ae.svg&quot; alt=&quot;United Arab Emirates Flag&quot; /><span class=&quot;text-truncate&quot;>United Arab Emirates</span></span>">United Arab Emirates</option>
                                                                <option value="GB" selected data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/gb.svg&quot; alt=&quot;United Kingdom Flag&quot; /><span class=&quot;text-truncate&quot;>United Kingdom</span></span>">United Kingdom</option>
                                                                <option value="UM" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/um.svg&quot; alt=&quot;United States Minor Outlying Islands Flag&quot; /><span class=&quot;text-truncate&quot;>United States Minor Outlying Islands</span></span>">United States Minor Outlying Islands</option>
                                                                <option value="US" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/us.svg&quot; alt=&quot;United States of America Flag&quot; /><span class=&quot;text-truncate&quot;>United States of America</span></span>">United States of America</option>
                                                                <option value="UY" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/uy.svg&quot; alt=&quot;Uruguay Flag&quot; /><span class=&quot;text-truncate&quot;>Uruguay</span></span>">Uruguay</option>
                                                                <option value="UZ" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/uz.svg&quot; alt=&quot;Uzbekistan Flag&quot; /><span class=&quot;text-truncate&quot;>Uzbekistan</span></span>">Uzbekistan</option>
                                                                <option value="VU" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/vu.svg&quot; alt=&quot;Vanuatu Flag&quot; /><span class=&quot;text-truncate&quot;>Vanuatu</span></span>">Vanuatu</option>
                                                                <option value="VE" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ve.svg&quot; alt=&quot;Venezuela (Bolivarian Republic of) Flag&quot; /><span class=&quot;text-truncate&quot;>Venezuela (Bolivarian Republic of)</span></span>">Venezuela (Bolivarian Republic of)</option>
                                                                <option value="VN" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/vn.svg&quot; alt=&quot;Vietnam Flag&quot; /><span class=&quot;text-truncate&quot;>Vietnam</span></span>">Vietnam</option>
                                                                <option value="VG" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/vg.svg&quot; alt=&quot;Virgin Islands (British) Flag&quot; /><span class=&quot;text-truncate&quot;>Virgin Islands (British)</span></span>">Virgin Islands (British)</option>
                                                                <option value="VI" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/vi.svg&quot; alt=&quot;Virgin Islands (U.S.) Flag&quot; /><span class=&quot;text-truncate&quot;>Virgin Islands (U.S.)</span></span>">Virgin Islands (U.S.)</option>
                                                                <option value="GB-WLS" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/gb-wls.svg&quot; alt=&quot;Wales Flag&quot; /><span class=&quot;text-truncate&quot;>Wales</span></span>">Wales</option>
                                                                <option value="WF" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/wf.svg&quot; alt=&quot;Wallis and Futuna Flag&quot; /><span class=&quot;text-truncate&quot;>Wallis and Futuna</span></span>">Wallis and Futuna</option>
                                                                <option value="EH" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/eh.svg&quot; alt=&quot;Western Sahara Flag&quot; /><span class=&quot;text-truncate&quot;>Western Sahara</span></span>">Western Sahara</option>
                                                                <option value="YE" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ye.svg&quot; alt=&quot;Yemen Flag&quot; /><span class=&quot;text-truncate&quot;>Yemen</span></span>">Yemen</option>
                                                                <option value="ZM" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/zm.svg&quot; alt=&quot;Zambia Flag&quot; /><span class=&quot;text-truncate&quot;>Zambia</span></span>">Zambia</option>
                                                                <option value="ZW" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/zw.svg&quot; alt=&quot;Zimbabwe Flag&quot; /><span class=&quot;text-truncate&quot;>Zimbabwe</span></span>">Zimbabwe</option>
                                                            </select>
                                                        </div>
                                                        {/* End Select */}
                                                    </div>
                                                    {/* End Col */}
                                                </div>
                                                {/* End Row */}
                                                <div className="d-grid">
                                                    <a className="btn btn-primary" href="javascript:;">Apply</a>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    {/* End Card */}
                                </div>
                            </div>
                            {/* End Dropdown */}
                        </div>
                    </div>
                    {/* End Header */}
                    {/* Table */}
                    <div className="table-responsive datatable-custom position-relative">
                        <table id="datatable" className="table table-lg table-borderless table-thead-bordered table-nowrap table-align-middle card-table" >
                            <thead className="thead-light">
                                <tr>
                                    <th className="table-column-pe-0">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" defaultValue id="datatableCheckAll" />
                                            <label className="form-check-label" htmlFor="datatableCheckAll" />
                                        </div>
                                    </th>
                                    <th className="table-column-ps-0">Name</th>
                                    <th>Country</th>
                                    <th>Status</th>
                                    <th>Phone</th>
                                    <th>Role</th>
                                    { (loggedUser?.role === "ADMIN" || loggedUser?.role === 'ACCOUNT ADMIN') &&
                                        <th>Action</th>
                                    }
                                </tr>
                            </thead>
                            <tbody>
                                {users?.map((user, index) => (
                                <tr key={index}>
                                    <td className="table-column-pe-0">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" defaultValue id="datatableCheckAll1" />
                                            <label className="form-check-label" htmlFor="datatableCheckAll1" />
                                        </div>
                                    </td>
                                    <td className="table-column-ps-0">
                                        <a className="d-flex align-items-center" href="javascript:;" onClick={()=>navigate(`/profile/${user._id}`)}>
                                            <div className="avatar avatar-circle">
                                                <img className="avatar-img" src={user?.avatar || "./assets/img/160x160/img1.jpg"} alt="Image Description" />
                                            </div>
                                            <div className="ms-3">
                                                <span className="d-block h5 text-inherit mb-0">{user?.firstname} {user?.lastname} <i className="bi-patch-check-fill text-primary" data-bs-toggle="tooltip" data-bs-placement="top" title="Top endorsed" /></span>
                                                <span className="d-block fs-5 text-body">{user?.email}</span>
                                            </div>
                                        </a>
                                    </td>
                                    <td>{user?.location?.country}</td>
                                    <td>
                                        {
                                            user?.status === 'Available' ? (
                                                <>
                                                    <span className="legend-indicator bg-success" />Active
                                                </>
                                            ) : user?.status === 'Away' ? (
                                                <>
                                                    <span className="legend-indicator bg-warning" />Away
                                                </>
                                            ) : user?.status === 'Busy' ? (
                                                <>
                                                    <span className="legend-indicator bg-danger" />Busy
                                                </>
                                            ) : null
                                        }

                                    </td>
                                    <td>
                                        {user?.phone}
                                        {/* <div className="d-flex align-items-center">
                                            <span className="fs-5 me-2">72%</span>
                                            <div className="progress table-progress">
                                                <div className="progress-bar" role="progressbar" style={{ width: '72%' }} aria-valuenow={72} aria-valuemin={0} aria-valuemax={100} />
                                            </div>
                                        </div> */}
                                    </td>
                                    <td>{user?.role}</td>
                                    { (loggedUser?.role === "ADMIN" || loggedUser?.role === 'ACCOUNT ADMIN') &&
                                        (<td>
                                            <button onClick={() => handleEditClick(user)} type="button" className="btn btn-white btn-sm" data-bs-toggle="modal" data-bs-target="#editUserModal">
                                                <i className="bi-pencil-fill me-1" /> Edit
                                            </button> &nbsp;
                                            <button onClick={() => handleDeleteClick(user?._id)} type="button" className="btn btn-danger btn-sm">
                                                Delete
                                            </button>
                                        </td>)
                                    }
                                </tr>
                                ))}
                                
                            </tbody>
                        </table>
                    </div>
                    {/* End Table */}
                    {/* Footer */}
                    <div className="card-footer">
                        <div className="row justify-content-center justify-content-sm-between align-items-sm-center">
                            <div className="col-sm mb-2 mb-sm-0">
                                <div className="d-flex justify-content-center justify-content-sm-start align-items-center">
                                    <span className="me-2">Showing:</span>
                                    {/* Select */}
                                    <div className="tom-select-custom">
                                        <select id="datatableEntries" className="js-select form-select form-select-borderless w-auto" autoComplete="off" data-hs-tom-select-options="{
                              &quot;searchInDropdown&quot;: false,
                              &quot;hideSearch&quot;: true
                            }">
                                            <option value={10}>10</option>
                                            <option value={15} selected>15</option>
                                            <option value={20}>20</option>
                                        </select>
                                    </div>
                                    {/* End Select */}
                                    <span className="text-secondary me-2">of</span>
                                    {/* Pagination Quantity */}
                                    <span id="datatableWithPaginationInfoTotalQty" />
                                </div>
                            </div>
                            {/* End Col */}
                            <div className="col-sm-auto">
                                <div className="d-flex justify-content-center justify-content-sm-end">
                                    {/* Pagination */}
                                    <nav id="datatablePagination" aria-label="Activity pagination" />
                                </div>
                            </div>
                            {/* End Col */}
                        </div>
                        {/* End Row */}
                    </div>
                    {/* End Footer */}
                </div>
                {/* End Card */}
            </div>

            <div className="modal fade" id="editUserModal" tabIndex={-1} aria-labelledby="editUserModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="editUserModalLabel">Edit user</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        {/* Body */}
                        <div className="modal-body">
                            {/* Nav Scroller */}
                            <div className="js-nav-scroller hs-nav-scroller-horizontal">
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
                                {/* Nav */}
                                <ul className="js-tabs-to-dropdown nav nav-segment nav-fill mb-5" id="editUserModalTab" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" href="#profile" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" role="tab" aria-selected="true">
                                            <i className="bi-person me-1" /> Profile
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#billing-address" id="billing-address-tab" data-bs-toggle="tab" data-bs-target="#billing-address" role="tab" aria-selected="false">
                                            <i className="bi-building me-1" /> Billing address
                                        </a>
                                    </li>
                                    {/* <li className="nav-item">
                                        <a className="nav-link" href="#change-password" id="change-password-tab" data-bs-toggle="tab" data-bs-target="#change-password" role="tab" aria-selected="false">
                                            <i className="bi-shield-lock me-1" /> Change password
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#notifications" id="notifications-tab" data-bs-toggle="tab" data-bs-target="#notifications" role="tab" aria-selected="false">
                                            <i className="bi-bell me-1" /> Notifications
                                        </a>
                                    </li> */}
                                </ul>
                                {/* End Nav */}
                            </div>
                            {/* End Nav Scroller */}
                            {/* Tab Content */}
                            <div className="tab-content" id="editUserModalTabContent">
                                <div className="tab-pane fade show active" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                    <form>
                                        {/* Profile Cover */}
                                        <div className="profile-cover">
                                            <div className="profile-cover-img-wrapper">
                                                <img id="editProfileCoverImgModal" className="profile-cover-img" src="./assets/img/1920x400/img1.jpg" alt="Image Description" />
                                                {/* Custom File Cover */}
                                                <div className="profile-cover-content profile-cover-uploader p-3">
                                                    <input type="file" className="js-file-attach profile-cover-uploader-input" id="editProfileCoverUplaoderModal"/>
                                                    
                                                </div>
                                                {/* End Custom File Cover */}
                                            </div>
                                        </div>
                                        {/* End Profile Cover */}
                                        {/* Avatar */}
                                        <label className="avatar avatar-xxl avatar-circle avatar-uploader profile-cover-avatar mb-5" htmlFor="editAvatarUploaderModal">
                                            <img id="editAvatarImgModal" className="avatar-img" src={avatar || "./assets/img/160x160/img1.jpg"} alt="Image Description" />
                                            <input onChange={handleAvatarChange} type="file" className="js-file-attach avatar-uploader-input" id="editAvatarUploaderModal" />
                                            <span className="avatar-uploader-trigger">
                                                <i className="bi-pencil-fill avatar-uploader-icon shadow-sm" />
                                            </span>
                                        </label>
                                        {/* End Avatar */}
                                        {/* Form */}
                                        <div className="row mb-4">
                                            <label htmlFor="editFirstNameModalLabel" className="col-sm-3 col-form-label form-label">Full name <i className="tio-help-outlined text-body ms-1" data-bs-toggle="tooltip" data-bs-placement="top" title="Displayed on public forums, such as Front." /></label>
                                            <div className="col-sm-9">
                                                <div className="input-group input-group-sm-vertical">
                                                    <input value={firstname} onChange={(e) => setFirstName(e.target.value)} type="text" className="form-control" name="editFirstNameModal" id="editFirstNameModalLabel" placeholder="Your first name" aria-label="Your first name" />
                                                    <input value={lastname} onChange={(e) => setLastName(e.target.value)} type="text" className="form-control" name="editLastNameModal" id="editLastNameModalLabel" placeholder="Your last name" aria-label="Your last name" />
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Form */}
                                        {/* Form */}
                                        <div className="row mb-4">
                                            <label htmlFor="editEmailModalLabel" className="col-sm-3 col-form-label form-label">Email</label>
                                            <div className="col-sm-9">
                                                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" name="editEmailModal" id="editEmailModalLabel" placeholder="Email" aria-label="Email"  />
                                            </div>
                                        </div>
                                        {/* End Form */}
                                        {/* Form */}
                                        <div className="row mb-4">
                                            <label htmlFor="editPhoneLabel" className="col-sm-3 col-form-label form-label">Phone <span className="form-label-secondary">(Optional)</span></label>
                                            <div className="col-sm-9">
                                                <div className="input-group input-group-sm-vertical">
                                                    <input value={phone} onChange={(e) => setPhone(e.target.value)} type="text" className="js-masked-input form-control" name="phone" id="editPhoneLabel" placeholder="+x(xxx)xxx-xx-xx" aria-label="+x(xxx)xxx-xx-xx"/>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Form */}
                                        {/* Form */}
                                        <div className="row mb-4">
                                            <label htmlFor="editOrganizationModalLabel" className="col-sm-3 col-form-label form-label">Organization</label>
                                            <div className="col-sm-9">
                                                <input value={organization} onChange={(e)=>setOrganization(e.target.value)} type="text" className="form-control" name="editOrganizationModal" id="editOrganizationModalLabel" placeholder="Your organization" aria-label="Your organization"  />
                                            </div>
                                        </div>
                                        {/* End Form */}
                                        {/* Form */}
                                        <div className="row mb-4">
                                            <label htmlFor="editDepartmentModalLabel" className="col-sm-3 col-form-label form-label">Department</label>
                                            <div className="col-sm-9">
                                                <input value={department} onChange={(e)=>setDepartment(e.target.value)} type="text" className="form-control" name="editDepartmentModal" id="editDepartmentModalLabel" placeholder="Your department" aria-label="Your department" />
                                            </div>
                                        </div>
                                        {/* End Form */}
                                        {/* Form */}
                                        <div className="row mb-4">
                                            <label className="col-sm-3 col-form-label form-label">Account type</label>
                                            <div className="col-sm-9">
                                                <div className="input-group input-group-sm-vertical">
                                                    <label className="form-control" htmlFor="userAccountTypeRadio1">
                                                        <span className="form-check">
                                                            <input 
                                                                type="radio" 
                                                                className="form-check-input" 
                                                                name="userAccountTypeRadio" 
                                                                id="userAccountTypeRadio1" 
                                                                value="Individual"
                                                                checked={accountType === 'Individual'} 
                                                                onChange={handleAccountTypeChange} 
                                                            />
                                                            <span className="form-check-label">Individual</span>
                                                        </span>
                                                    </label>
                                                    <label className="form-control" htmlFor="userAccountTypeRadio2">
                                                        <span className="form-check">
                                                            <input 
                                                                type="radio" 
                                                                className="form-check-input" 
                                                                name="userAccountTypeRadio" 
                                                                id="userAccountTypeRadio2" 
                                                                value="Company"
                                                                checked={accountType === 'Company'} 
                                                                onChange={handleAccountTypeChange} 
                                                            />
                                                            <span className="form-check-label">Company</span>
                                                        </span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Form */}
                                        <div className="d-flex justify-content-end">
                                            <div className="d-flex gap-3">
                                                <button type="button" className="btn btn-white" data-bs-dismiss="modal" aria-label="Close">Cancel</button>
                                                <button onClick={() => handleSaveChange()} type="button" className="btn btn-primary">Save changes</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="tab-pane fade" id="billing-address" role="tabpanel" aria-labelledby="billing-address-tab">
                                    <form>
                                        {/* Form */}
                                        <div className="row mb-4">
                                            <label htmlFor="editLocationModalLabel" className="col-sm-3 col-form-label form-label">Location</label>
                                            <div className="col-sm-9">
                                                {/* Select */}
                                                <div className="tom-select-custom mb-4">
                                                    <select value={location.country} onChange={handleCountryChange} className="js-select form-select" id="editLocationModalLabel" autoComplete="off" >
                                                        <option value="AF" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/af.svg&quot; alt=&quot;Afghanistan Flag&quot; /><span class=&quot;text-truncate&quot;>Afghanistan</span></span>">Afghanistan</option>
                                                        <option value="AX" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ax.svg&quot; alt=&quot;Aland Islands Flag&quot; /><span class=&quot;text-truncate&quot;>Aland Islands</span></span>">Aland Islands</option>
                                                        <option value="AL" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/al.svg&quot; alt=&quot;Albania Flag&quot; /><span class=&quot;text-truncate&quot;>Albania</span></span>">Albania</option>
                                                        <option value="DZ" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/dz.svg&quot; alt=&quot;Algeria Flag&quot; /><span class=&quot;text-truncate&quot;>Algeria</span></span>">Algeria</option>
                                                        <option value="AS" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/as.svg&quot; alt=&quot;American Samoa Flag&quot; /><span class=&quot;text-truncate&quot;>American Samoa</span></span>">American Samoa</option>
                                                        <option value="AD" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ad.svg&quot; alt=&quot;Andorra Flag&quot; /><span class=&quot;text-truncate&quot;>Andorra</span></span>">Andorra</option>
                                                        <option value="AO" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ao.svg&quot; alt=&quot;Angola Flag&quot; /><span class=&quot;text-truncate&quot;>Angola</span></span>">Angola</option>
                                                        <option value="AI" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ai.svg&quot; alt=&quot;Anguilla Flag&quot; /><span class=&quot;text-truncate&quot;>Anguilla</span></span>">Anguilla</option>
                                                        <option value="AG" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ag.svg&quot; alt=&quot;Antigua and Barbuda Flag&quot; /><span class=&quot;text-truncate&quot;>Antigua and Barbuda</span></span>">Antigua and Barbuda</option>
                                                        <option value="AR" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ar.svg&quot; alt=&quot;Argentina Flag&quot; /><span class=&quot;text-truncate&quot;>Argentina</span></span>">Argentina</option>
                                                        <option value="AM" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/am.svg&quot; alt=&quot;Armenia Flag&quot; /><span class=&quot;text-truncate&quot;>Armenia</span></span>">Armenia</option>
                                                        <option value="AW" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/aw.svg&quot; alt=&quot;Aruba Flag&quot; /><span class=&quot;text-truncate&quot;>Aruba</span></span>">Aruba</option>
                                                        <option value="AU" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/au.svg&quot; alt=&quot;Australia Flag&quot; /><span class=&quot;text-truncate&quot;>Australia</span></span>">Australia</option>
                                                        <option value="AT" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/at.svg&quot; alt=&quot;Austria Flag&quot; /><span class=&quot;text-truncate&quot;>Austria</span></span>">Austria</option>
                                                        <option value="AZ" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/az.svg&quot; alt=&quot;Azerbaijan Flag&quot; /><span class=&quot;text-truncate&quot;>Azerbaijan</span></span>">Azerbaijan</option>
                                                        <option value="BS" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/bs.svg&quot; alt=&quot;Bahamas Flag&quot; /><span class=&quot;text-truncate&quot;>Bahamas</span></span>">Bahamas</option>
                                                        <option value="BH" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/bh.svg&quot; alt=&quot;Bahrain Flag&quot; /><span class=&quot;text-truncate&quot;>Bahrain</span></span>">Bahrain</option>
                                                        <option value="BD" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/bd.svg&quot; alt=&quot;Bangladesh Flag&quot; /><span class=&quot;text-truncate&quot;>Bangladesh</span></span>">Bangladesh</option>
                                                        <option value="BB" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/bb.svg&quot; alt=&quot;Barbados Flag&quot; /><span class=&quot;text-truncate&quot;>Barbados</span></span>">Barbados</option>
                                                        <option value="BY" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/by.svg&quot; alt=&quot;Belarus Flag&quot; /><span class=&quot;text-truncate&quot;>Belarus</span></span>">Belarus</option>
                                                        <option value="BE" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/be.svg&quot; alt=&quot;Belgium Flag&quot; /><span class=&quot;text-truncate&quot;>Belgium</span></span>">Belgium</option>
                                                        <option value="BZ" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/bz.svg&quot; alt=&quot;Belize Flag&quot; /><span class=&quot;text-truncate&quot;>Belize</span></span>">Belize</option>
                                                        <option value="BJ" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/bj.svg&quot; alt=&quot;Benin Flag&quot; /><span class=&quot;text-truncate&quot;>Benin</span></span>">Benin</option>
                                                        <option value="BM" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/bm.svg&quot; alt=&quot;Bermuda Flag&quot; /><span class=&quot;text-truncate&quot;>Bermuda</span></span>">Bermuda</option>
                                                        <option value="BT" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/bt.svg&quot; alt=&quot;Bhutan Flag&quot; /><span class=&quot;text-truncate&quot;>Bhutan</span></span>">Bhutan</option>
                                                        <option value="BO" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/bo.svg&quot; alt=&quot;Bolivia (Plurinational State of) Flag&quot; /><span class=&quot;text-truncate&quot;>Bolivia (Plurinational State of)</span></span>">Bolivia (Plurinational State of)</option>
                                                        <option value="BQ" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/bq.svg&quot; alt=&quot;Bonaire, Sint Eustatius and Saba Flag&quot; /><span class=&quot;text-truncate&quot;>Bonaire, Sint Eustatius and Saba</span></span>">Bonaire, Sint Eustatius and Saba</option>
                                                        <option value="BA" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ba.svg&quot; alt=&quot;Bosnia and Herzegovina Flag&quot; /><span class=&quot;text-truncate&quot;>Bosnia and Herzegovina</span></span>">Bosnia and Herzegovina</option>
                                                        <option value="BW" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/bw.svg&quot; alt=&quot;Botswana Flag&quot; /><span class=&quot;text-truncate&quot;>Botswana</span></span>">Botswana</option>
                                                        <option value="BR" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/br.svg&quot; alt=&quot;Brazil Flag&quot; /><span class=&quot;text-truncate&quot;>Brazil</span></span>">Brazil</option>
                                                        <option value="IO" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/io.svg&quot; alt=&quot;British Indian Ocean Territory Flag&quot; /><span class=&quot;text-truncate&quot;>British Indian Ocean Territory</span></span>">British Indian Ocean Territory</option>
                                                        <option value="BN" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/bn.svg&quot; alt=&quot;Brunei Darussalam Flag&quot; /><span class=&quot;text-truncate&quot;>Brunei Darussalam</span></span>">Brunei Darussalam</option>
                                                        <option value="BG" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/bg.svg&quot; alt=&quot;Bulgaria Flag&quot; /><span class=&quot;text-truncate&quot;>Bulgaria</span></span>">Bulgaria</option>
                                                        <option value="BF" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/bf.svg&quot; alt=&quot;Burkina Faso Flag&quot; /><span class=&quot;text-truncate&quot;>Burkina Faso</span></span>">Burkina Faso</option>
                                                        <option value="BI" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/bi.svg&quot; alt=&quot;Burundi Flag&quot; /><span class=&quot;text-truncate&quot;>Burundi</span></span>">Burundi</option>
                                                        <option value="CV" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/cv.svg&quot; alt=&quot;Cabo Verde Flag&quot; /><span class=&quot;text-truncate&quot;>Cabo Verde</span></span>">Cabo Verde</option>
                                                        <option value="KH" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/kh.svg&quot; alt=&quot;Cambodia Flag&quot; /><span class=&quot;text-truncate&quot;>Cambodia</span></span>">Cambodia</option>
                                                        <option value="CM" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/cm.svg&quot; alt=&quot;Cameroon Flag&quot; /><span class=&quot;text-truncate&quot;>Cameroon</span></span>">Cameroon</option>
                                                        <option value="CA" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ca.svg&quot; alt=&quot;Canada Flag&quot; /><span class=&quot;text-truncate&quot;>Canada</span></span>">Canada</option>
                                                        <option value="KY" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ky.svg&quot; alt=&quot;Cayman Islands Flag&quot; /><span class=&quot;text-truncate&quot;>Cayman Islands</span></span>">Cayman Islands</option>
                                                        <option value="CF" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/cf.svg&quot; alt=&quot;Central African Republic Flag&quot; /><span class=&quot;text-truncate&quot;>Central African Republic</span></span>">Central African Republic</option>
                                                        <option value="TD" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/td.svg&quot; alt=&quot;Chad Flag&quot; /><span class=&quot;text-truncate&quot;>Chad</span></span>">Chad</option>
                                                        <option value="CL" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/cl.svg&quot; alt=&quot;Chile Flag&quot; /><span class=&quot;text-truncate&quot;>Chile</span></span>">Chile</option>
                                                        <option value="CN" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/cn.svg&quot; alt=&quot;China Flag&quot; /><span class=&quot;text-truncate&quot;>China</span></span>">China</option>
                                                        <option value="CX" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/cx.svg&quot; alt=&quot;Christmas Island Flag&quot; /><span class=&quot;text-truncate&quot;>Christmas Island</span></span>">Christmas Island</option>
                                                        <option value="CC" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/cc.svg&quot; alt=&quot;Cocos (Keeling) Islands Flag&quot; /><span class=&quot;text-truncate&quot;>Cocos (Keeling) Islands</span></span>">Cocos (Keeling) Islands</option>
                                                        <option value="CO" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/co.svg&quot; alt=&quot;Colombia Flag&quot; /><span class=&quot;text-truncate&quot;>Colombia</span></span>">Colombia</option>
                                                        <option value="KM" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/km.svg&quot; alt=&quot;Comoros Flag&quot; /><span class=&quot;text-truncate&quot;>Comoros</span></span>">Comoros</option>
                                                        <option value="CK" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ck.svg&quot; alt=&quot;Cook Islands Flag&quot; /><span class=&quot;text-truncate&quot;>Cook Islands</span></span>">Cook Islands</option>
                                                        <option value="CR" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/cr.svg&quot; alt=&quot;Costa Rica Flag&quot; /><span class=&quot;text-truncate&quot;>Costa Rica</span></span>">Costa Rica</option>
                                                        <option value="HR" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/hr.svg&quot; alt=&quot;Croatia Flag&quot; /><span class=&quot;text-truncate&quot;>Croatia</span></span>">Croatia</option>
                                                        <option value="CU" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/cu.svg&quot; alt=&quot;Cuba Flag&quot; /><span class=&quot;text-truncate&quot;>Cuba</span></span>">Cuba</option>
                                                        <option value="CW" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/cw.svg&quot; alt=&quot;Curaçao Flag&quot; /><span class=&quot;text-truncate&quot;>Curaçao</span></span>">Curaçao</option>
                                                        <option value="CY" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/cy.svg&quot; alt=&quot;Cyprus Flag&quot; /><span class=&quot;text-truncate&quot;>Cyprus</span></span>">Cyprus</option>
                                                        <option value="CZ" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/cz.svg&quot; alt=&quot;Czech Republic Flag&quot; /><span class=&quot;text-truncate&quot;>Czech Republic</span></span>">Czech Republic</option>
                                                        <option value="CI" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ci.svg&quot; alt=Côte d'Ivoire Flag&quot; /><span class=&quot;text-truncate&quot;>Côte d'Ivoire</span></span>">Côte d'Ivoire</option>
                                                        <option value="CD" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/cd.svg&quot; alt=&quot;Democratic Republic of the Congo Flag&quot; /><span class=&quot;text-truncate&quot;>Democratic Republic of the Congo</span></span>">Democratic Republic of the Congo</option>
                                                        <option value="DK" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/dk.svg&quot; alt=&quot;Denmark Flag&quot; /><span class=&quot;text-truncate&quot;>Denmark</span></span>">Denmark</option>
                                                        <option value="DJ" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/dj.svg&quot; alt=&quot;Djibouti Flag&quot; /><span class=&quot;text-truncate&quot;>Djibouti</span></span>">Djibouti</option>
                                                        <option value="DM" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/dm.svg&quot; alt=&quot;Dominica Flag&quot; /><span class=&quot;text-truncate&quot;>Dominica</span></span>">Dominica</option>
                                                        <option value="DO" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/do.svg&quot; alt=&quot;Dominican Republic Flag&quot; /><span class=&quot;text-truncate&quot;>Dominican Republic</span></span>">Dominican Republic</option>
                                                        <option value="EC" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ec.svg&quot; alt=&quot;Ecuador Flag&quot; /><span class=&quot;text-truncate&quot;>Ecuador</span></span>">Ecuador</option>
                                                        <option value="EG" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/eg.svg&quot; alt=&quot;Egypt Flag&quot; /><span class=&quot;text-truncate&quot;>Egypt</span></span>">Egypt</option>
                                                        <option value="SV" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/sv.svg&quot; alt=&quot;El Salvador Flag&quot; /><span class=&quot;text-truncate&quot;>El Salvador</span></span>">El Salvador</option>
                                                        <option value="GB-ENG" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/gb-eng.svg&quot; alt=&quot;England Flag&quot; /><span class=&quot;text-truncate&quot;>England</span></span>">England</option>
                                                        <option value="GQ" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/gq.svg&quot; alt=&quot;Equatorial Guinea Flag&quot; /><span class=&quot;text-truncate&quot;>Equatorial Guinea</span></span>">Equatorial Guinea</option>
                                                        <option value="ER" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/er.svg&quot; alt=&quot;Eritrea Flag&quot; /><span class=&quot;text-truncate&quot;>Eritrea</span></span>">Eritrea</option>
                                                        <option value="EE" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ee.svg&quot; alt=&quot;Estonia Flag&quot; /><span class=&quot;text-truncate&quot;>Estonia</span></span>">Estonia</option>
                                                        <option value="ET" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/et.svg&quot; alt=&quot;Ethiopia Flag&quot; /><span class=&quot;text-truncate&quot;>Ethiopia</span></span>">Ethiopia</option>
                                                        <option value="FK" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/fk.svg&quot; alt=&quot;Falkland Islands Flag&quot; /><span class=&quot;text-truncate&quot;>Falkland Islands</span></span>">Falkland Islands</option>
                                                        <option value="FO" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/fo.svg&quot; alt=&quot;Faroe Islands Flag&quot; /><span class=&quot;text-truncate&quot;>Faroe Islands</span></span>">Faroe Islands</option>
                                                        <option value="FM" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/fm.svg&quot; alt=&quot;Federated States of Micronesia Flag&quot; /><span class=&quot;text-truncate&quot;>Federated States of Micronesia</span></span>">Federated States of Micronesia</option>
                                                        <option value="FJ" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/fj.svg&quot; alt=&quot;Fiji Flag&quot; /><span class=&quot;text-truncate&quot;>Fiji</span></span>">Fiji</option>
                                                        <option value="FI" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/fi.svg&quot; alt=&quot;Finland Flag&quot; /><span class=&quot;text-truncate&quot;>Finland</span></span>">Finland</option>
                                                        <option value="FR" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/fr.svg&quot; alt=&quot;France Flag&quot; /><span class=&quot;text-truncate&quot;>France</span></span>">France</option>
                                                        <option value="GF" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/gf.svg&quot; alt=&quot;French Guiana Flag&quot; /><span class=&quot;text-truncate&quot;>French Guiana</span></span>">French Guiana</option>
                                                        <option value="PF" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/pf.svg&quot; alt=&quot;French Polynesia Flag&quot; /><span class=&quot;text-truncate&quot;>French Polynesia</span></span>">French Polynesia</option>
                                                        <option value="TF" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/tf.svg&quot; alt=&quot;French Southern Territories Flag&quot; /><span class=&quot;text-truncate&quot;>French Southern Territories</span></span>">French Southern Territories</option>
                                                        <option value="GA" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ga.svg&quot; alt=&quot;Gabon Flag&quot; /><span class=&quot;text-truncate&quot;>Gabon</span></span>">Gabon</option>
                                                        <option value="GM" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/gm.svg&quot; alt=&quot;Gambia Flag&quot; /><span class=&quot;text-truncate&quot;>Gambia</span></span>">Gambia</option>
                                                        <option value="GE" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ge.svg&quot; alt=&quot;Georgia Flag&quot; /><span class=&quot;text-truncate&quot;>Georgia</span></span>">Georgia</option>
                                                        <option value="DE" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/de.svg&quot; alt=&quot;Germany Flag&quot; /><span class=&quot;text-truncate&quot;>Germany</span></span>">Germany</option>
                                                        <option value="GH" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/gh.svg&quot; alt=&quot;Ghana Flag&quot; /><span class=&quot;text-truncate&quot;>Ghana</span></span>">Ghana</option>
                                                        <option value="GI" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/gi.svg&quot; alt=&quot;Gibraltar Flag&quot; /><span class=&quot;text-truncate&quot;>Gibraltar</span></span>">Gibraltar</option>
                                                        <option value="GR" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/gr.svg&quot; alt=&quot;Greece Flag&quot; /><span class=&quot;text-truncate&quot;>Greece</span></span>">Greece</option>
                                                        <option value="GL" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/gl.svg&quot; alt=&quot;Greenland Flag&quot; /><span class=&quot;text-truncate&quot;>Greenland</span></span>">Greenland</option>
                                                        <option value="GD" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/gd.svg&quot; alt=&quot;Grenada Flag&quot; /><span class=&quot;text-truncate&quot;>Grenada</span></span>">Grenada</option>
                                                        <option value="GP" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/gp.svg&quot; alt=&quot;Guadeloupe Flag&quot; /><span class=&quot;text-truncate&quot;>Guadeloupe</span></span>">Guadeloupe</option>
                                                        <option value="GU" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/gu.svg&quot; alt=&quot;Guam Flag&quot; /><span class=&quot;text-truncate&quot;>Guam</span></span>">Guam</option>
                                                        <option value="GT" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/gt.svg&quot; alt=&quot;Guatemala Flag&quot; /><span class=&quot;text-truncate&quot;>Guatemala</span></span>">Guatemala</option>
                                                        <option value="GG" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/gg.svg&quot; alt=&quot;Guernsey Flag&quot; /><span class=&quot;text-truncate&quot;>Guernsey</span></span>">Guernsey</option>
                                                        <option value="GN" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/gn.svg&quot; alt=&quot;Guinea Flag&quot; /><span class=&quot;text-truncate&quot;>Guinea</span></span>">Guinea</option>
                                                        <option value="GW" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/gw.svg&quot; alt=&quot;Guinea-Bissau Flag&quot; /><span class=&quot;text-truncate&quot;>Guinea-Bissau</span></span>">Guinea-Bissau</option>
                                                        <option value="GY" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/gy.svg&quot; alt=&quot;Guyana Flag&quot; /><span class=&quot;text-truncate&quot;>Guyana</span></span>">Guyana</option>
                                                        <option value="HT" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ht.svg&quot; alt=&quot;Haiti Flag&quot; /><span class=&quot;text-truncate&quot;>Haiti</span></span>">Haiti</option>
                                                        <option value="VA" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/va.svg&quot; alt=&quot;Holy See Flag&quot; /><span class=&quot;text-truncate&quot;>Holy See</span></span>">Holy See</option>
                                                        <option value="HN" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/hn.svg&quot; alt=&quot;Honduras Flag&quot; /><span class=&quot;text-truncate&quot;>Honduras</span></span>">Honduras</option>
                                                        <option value="HK" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/hk.svg&quot; alt=&quot;Hong Kong Flag&quot; /><span class=&quot;text-truncate&quot;>Hong Kong</span></span>">Hong Kong</option>
                                                        <option value="HU" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/hu.svg&quot; alt=&quot;Hungary Flag&quot; /><span class=&quot;text-truncate&quot;>Hungary</span></span>">Hungary</option>
                                                        <option value="IS" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/is.svg&quot; alt=&quot;Iceland Flag&quot; /><span class=&quot;text-truncate&quot;>Iceland</span></span>">Iceland</option>
                                                        <option value="IN" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/in.svg&quot; alt=&quot;India Flag&quot; /><span class=&quot;text-truncate&quot;>India</span></span>">India</option>
                                                        <option value="ID" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/id.svg&quot; alt=&quot;Indonesia Flag&quot; /><span class=&quot;text-truncate&quot;>Indonesia</span></span>">Indonesia</option>
                                                        <option value="IR" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ir.svg&quot; alt=&quot;Iran (Islamic Republic of) Flag&quot; /><span class=&quot;text-truncate&quot;>Iran (Islamic Republic of)</span></span>">Iran (Islamic Republic of)</option>
                                                        <option value="IQ" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/iq.svg&quot; alt=&quot;Iraq Flag&quot; /><span class=&quot;text-truncate&quot;>Iraq</span></span>">Iraq</option>
                                                        <option value="IE" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ie.svg&quot; alt=&quot;Ireland Flag&quot; /><span class=&quot;text-truncate&quot;>Ireland</span></span>">Ireland</option>
                                                        <option value="IM" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/im.svg&quot; alt=&quot;Isle of Man Flag&quot; /><span class=&quot;text-truncate&quot;>Isle of Man</span></span>">Isle of Man</option>
                                                        <option value="IL" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/il.svg&quot; alt=&quot;Israel Flag&quot; /><span class=&quot;text-truncate&quot;>Israel</span></span>">Israel</option>
                                                        <option value="IT" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/it.svg&quot; alt=&quot;Italy Flag&quot; /><span class=&quot;text-truncate&quot;>Italy</span></span>">Italy</option>
                                                        <option value="JM" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/jm.svg&quot; alt=&quot;Jamaica Flag&quot; /><span class=&quot;text-truncate&quot;>Jamaica</span></span>">Jamaica</option>
                                                        <option value="JP" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/jp.svg&quot; alt=&quot;Japan Flag&quot; /><span class=&quot;text-truncate&quot;>Japan</span></span>">Japan</option>
                                                        <option value="JE" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/je.svg&quot; alt=&quot;Jersey Flag&quot; /><span class=&quot;text-truncate&quot;>Jersey</span></span>">Jersey</option>
                                                        <option value="JO" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/jo.svg&quot; alt=&quot;Jordan Flag&quot; /><span class=&quot;text-truncate&quot;>Jordan</span></span>">Jordan</option>
                                                        <option value="KZ" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/kz.svg&quot; alt=&quot;Kazakhstan Flag&quot; /><span class=&quot;text-truncate&quot;>Kazakhstan</span></span>">Kazakhstan</option>
                                                        <option value="KE" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ke.svg&quot; alt=&quot;Kenya Flag&quot; /><span class=&quot;text-truncate&quot;>Kenya</span></span>">Kenya</option>
                                                        <option value="KI" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ki.svg&quot; alt=&quot;Kiribati Flag&quot; /><span class=&quot;text-truncate&quot;>Kiribati</span></span>">Kiribati</option>
                                                        <option value="KW" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/kw.svg&quot; alt=&quot;Kuwait Flag&quot; /><span class=&quot;text-truncate&quot;>Kuwait</span></span>">Kuwait</option>
                                                        <option value="KG" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/kg.svg&quot; alt=&quot;Kyrgyzstan Flag&quot; /><span class=&quot;text-truncate&quot;>Kyrgyzstan</span></span>">Kyrgyzstan</option>
                                                        <option value="LA" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/la.svg&quot; alt=&quot;Laos Flag&quot; /><span class=&quot;text-truncate&quot;>Laos</span></span>">Laos</option>
                                                        <option value="LV" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/lv.svg&quot; alt=&quot;Latvia Flag&quot; /><span class=&quot;text-truncate&quot;>Latvia</span></span>">Latvia</option>
                                                        <option value="LB" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/lb.svg&quot; alt=&quot;Lebanon Flag&quot; /><span class=&quot;text-truncate&quot;>Lebanon</span></span>">Lebanon</option>
                                                        <option value="LS" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ls.svg&quot; alt=&quot;Lesotho Flag&quot; /><span class=&quot;text-truncate&quot;>Lesotho</span></span>">Lesotho</option>
                                                        <option value="LR" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/lr.svg&quot; alt=&quot;Liberia Flag&quot; /><span class=&quot;text-truncate&quot;>Liberia</span></span>">Liberia</option>
                                                        <option value="LY" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ly.svg&quot; alt=&quot;Libya Flag&quot; /><span class=&quot;text-truncate&quot;>Libya</span></span>">Libya</option>
                                                        <option value="LI" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/li.svg&quot; alt=&quot;Liechtenstein Flag&quot; /><span class=&quot;text-truncate&quot;>Liechtenstein</span></span>">Liechtenstein</option>
                                                        <option value="LT" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/lt.svg&quot; alt=&quot;Lithuania Flag&quot; /><span class=&quot;text-truncate&quot;>Lithuania</span></span>">Lithuania</option>
                                                        <option value="LU" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/lu.svg&quot; alt=&quot;Luxembourg Flag&quot; /><span class=&quot;text-truncate&quot;>Luxembourg</span></span>">Luxembourg</option>
                                                        <option value="MO" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/mo.svg&quot; alt=&quot;Macau Flag&quot; /><span class=&quot;text-truncate&quot;>Macau</span></span>">Macau</option>
                                                        <option value="MG" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/mg.svg&quot; alt=&quot;Madagascar Flag&quot; /><span class=&quot;text-truncate&quot;>Madagascar</span></span>">Madagascar</option>
                                                        <option value="MW" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/mw.svg&quot; alt=&quot;Malawi Flag&quot; /><span class=&quot;text-truncate&quot;>Malawi</span></span>">Malawi</option>
                                                        <option value="MY" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/my.svg&quot; alt=&quot;Malaysia Flag&quot; /><span class=&quot;text-truncate&quot;>Malaysia</span></span>">Malaysia</option>
                                                        <option value="MV" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/mv.svg&quot; alt=&quot;Maldives Flag&quot; /><span class=&quot;text-truncate&quot;>Maldives</span></span>">Maldives</option>
                                                        <option value="ML" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ml.svg&quot; alt=&quot;Mali Flag&quot; /><span class=&quot;text-truncate&quot;>Mali</span></span>">Mali</option>
                                                        <option value="MT" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/mt.svg&quot; alt=&quot;Malta Flag&quot; /><span class=&quot;text-truncate&quot;>Malta</span></span>">Malta</option>
                                                        <option value="MH" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/mh.svg&quot; alt=&quot;Marshall Islands Flag&quot; /><span class=&quot;text-truncate&quot;>Marshall Islands</span></span>">Marshall Islands</option>
                                                        <option value="MQ" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/mq.svg&quot; alt=&quot;Martinique Flag&quot; /><span class=&quot;text-truncate&quot;>Martinique</span></span>">Martinique</option>
                                                        <option value="MR" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/mr.svg&quot; alt=&quot;Mauritania Flag&quot; /><span class=&quot;text-truncate&quot;>Mauritania</span></span>">Mauritania</option>
                                                        <option value="MU" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/mu.svg&quot; alt=&quot;Mauritius Flag&quot; /><span class=&quot;text-truncate&quot;>Mauritius</span></span>">Mauritius</option>
                                                        <option value="YT" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/yt.svg&quot; alt=&quot;Mayotte Flag&quot; /><span class=&quot;text-truncate&quot;>Mayotte</span></span>">Mayotte</option>
                                                        <option value="MX" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/mx.svg&quot; alt=&quot;Mexico Flag&quot; /><span class=&quot;text-truncate&quot;>Mexico</span></span>">Mexico</option>
                                                        <option value="MD" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/md.svg&quot; alt=&quot;Moldova Flag&quot; /><span class=&quot;text-truncate&quot;>Moldova</span></span>">Moldova</option>
                                                        <option value="MC" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/mc.svg&quot; alt=&quot;Monaco Flag&quot; /><span class=&quot;text-truncate&quot;>Monaco</span></span>">Monaco</option>
                                                        <option value="MN" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/mn.svg&quot; alt=&quot;Mongolia Flag&quot; /><span class=&quot;text-truncate&quot;>Mongolia</span></span>">Mongolia</option>
                                                        <option value="ME" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/me.svg&quot; alt=&quot;Montenegro Flag&quot; /><span class=&quot;text-truncate&quot;>Montenegro</span></span>">Montenegro</option>
                                                        <option value="MS" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ms.svg&quot; alt=&quot;Montserrat Flag&quot; /><span class=&quot;text-truncate&quot;>Montserrat</span></span>">Montserrat</option>
                                                        <option value="MA" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ma.svg&quot; alt=&quot;Morocco Flag&quot; /><span class=&quot;text-truncate&quot;>Morocco</span></span>">Morocco</option>
                                                        <option value="MZ" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/mz.svg&quot; alt=&quot;Mozambique Flag&quot; /><span class=&quot;text-truncate&quot;>Mozambique</span></span>">Mozambique</option>
                                                        <option value="MM" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/mm.svg&quot; alt=&quot;Myanmar Flag&quot; /><span class=&quot;text-truncate&quot;>Myanmar</span></span>">Myanmar</option>
                                                        <option value="NA" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/na.svg&quot; alt=&quot;Namibia Flag&quot; /><span class=&quot;text-truncate&quot;>Namibia</span></span>">Namibia</option>
                                                        <option value="NR" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/nr.svg&quot; alt=&quot;Nauru Flag&quot; /><span class=&quot;text-truncate&quot;>Nauru</span></span>">Nauru</option>
                                                        <option value="NP" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/np.svg&quot; alt=&quot;Nepal Flag&quot; /><span class=&quot;text-truncate&quot;>Nepal</span></span>">Nepal</option>
                                                        <option value="NL" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/nl.svg&quot; alt=&quot;Netherlands Flag&quot; /><span class=&quot;text-truncate&quot;>Netherlands</span></span>">Netherlands</option>
                                                        <option value="NC" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/nc.svg&quot; &quot;alt=&quot;New Caledonia Flag&quot; /><span class=&quot;text-truncate&quot;>New Caledonia</span></span>">New Caledonia</option>
                                                        <option value="NZ" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/nz.svg&quot; alt=&quot;New Zealand Flag&quot; /><span class=&quot;text-truncate&quot;>New Zealand</span></span>">New Zealand</option>
                                                        <option value="NI" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ni.svg&quot; alt=&quot;Nicaragua Flag&quot; /><span class=&quot;text-truncate&quot;>Nicaragua</span></span>">Nicaragua</option>
                                                        <option value="NE" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ne.svg&quot; alt=&quot;Niger Flag&quot; /><span class=&quot;text-truncate&quot;>Niger</span></span>">Niger</option>
                                                        <option value="NG" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ng.svg&quot; alt=&quot;Nigeria Flag&quot; /><span class=&quot;text-truncate&quot;>Nigeria</span></span>">Nigeria</option>
                                                        <option value="NU" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/nu.svg&quot; alt=&quot;Niue Flag&quot; /><span class=&quot;text-truncate&quot;>Niue</span></span>">Niue</option>
                                                        <option value="NF" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/nf.svg&quot; alt=&quot;Norfolk Island Flag&quot; /><span class=&quot;text-truncate&quot;>Norfolk Island</span></span>">Norfolk Island</option>
                                                        <option value="KP" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/kp.svg&quot; alt=&quot;North Korea Flag&quot; /><span class=&quot;text-truncate&quot;>North Korea</span></span>">North Korea</option>
                                                        <option value="MK" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/mk.svg&quot; alt=&quot;North Macedonia Flag&quot; /><span class=&quot;text-truncate&quot;>North Macedonia</span></span>">North Macedonia</option>
                                                        <option value="GB-NIR" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/gb-nir.svg&quot; alt=&quot;Northern Ireland Flag&quot; /><span class=&quot;text-truncate&quot;>Northern Ireland</span></span>">Northern Ireland</option>
                                                        <option value="MP" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/mp.svg&quot; alt=&quot;Northern Mariana Islands Flag&quot; /><span class=&quot;text-truncate&quot;>Northern Mariana Islands</span></span>">Northern Mariana Islands</option>
                                                        <option value="NO" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/no.svg&quot; alt=&quot;Norway Flag&quot; /><span class=&quot;text-truncate&quot;>Norway</span></span>">Norway</option>
                                                        <option value="OM" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/om.svg&quot; alt=&quot;Oman Flag&quot; /><span class=&quot;text-truncate&quot;>Oman</span></span>">Oman</option>
                                                        <option value="PK" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/pk.svg&quot; alt=&quot;Pakistan Flag&quot; /><span class=&quot;text-truncate&quot;>Pakistan</span></span>">Pakistan</option>
                                                        <option value="PW" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/pw.svg&quot; alt=&quot;Palau Flag&quot; /><span class=&quot;text-truncate&quot;>Palau</span></span>">Palau</option>
                                                        <option value="PA" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/pa.svg&quot; alt=&quot;Panama Flag&quot; /><span class=&quot;text-truncate&quot;>Panama</span></span>">Panama</option>
                                                        <option value="PG" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/pg.svg&quot; alt=&quot;Papua New Guinea Flag&quot; /><span class=&quot;text-truncate&quot;>Papua New Guinea</span></span>">Papua New Guinea</option>
                                                        <option value="PY" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/py.svg&quot; alt=&quot;Paraguay Flag&quot; /><span class=&quot;text-truncate&quot;>Paraguay</span></span>">Paraguay</option>
                                                        <option value="PE" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/pe.svg&quot; alt=&quot;Peru Flag&quot; /><span class=&quot;text-truncate&quot;>Peru</span></span>">Peru</option>
                                                        <option value="PH" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ph.svg&quot; alt=&quot;Philippines Flag&quot; /><span class=&quot;text-truncate&quot;>Philippines</span></span>">Philippines</option>
                                                        <option value="PN" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/pn.svg&quot; alt=&quot;Pitcairn Flag&quot; /><span class=&quot;text-truncate&quot;>Pitcairn</span></span>">Pitcairn</option>
                                                        <option value="PL" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/pl.svg&quot; alt=&quot;Poland Flag&quot; /><span class=&quot;text-truncate&quot;>Poland</span></span>">Poland</option>
                                                        <option value="PT" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/pt.svg&quot; alt=&quot;Portugal Flag&quot; /><span class=&quot;text-truncate&quot;>Portugal</span></span>">Portugal</option>
                                                        <option value="PR" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/pr.svg&quot; alt=&quot;Puerto Rico Flag&quot; /><span class=&quot;text-truncate&quot;>Puerto Rico</span></span>">Puerto Rico</option>
                                                        <option value="QA" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/qa.svg&quot; alt=&quot;Qatar Flag&quot; /><span class=&quot;text-truncate&quot;>Qatar</span></span>">Qatar</option>
                                                        <option value="CG" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/cg.svg&quot; alt=&quot;Republic of the Congo Flag&quot; /><span class=&quot;text-truncate&quot;>Republic of the Congo</span></span>">Republic of the Congo</option>
                                                        <option value="RO" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ro.svg&quot; alt=&quot;Romania Flag&quot; /><span class=&quot;text-truncate&quot;>Romania</span></span>">Romania</option>
                                                        <option value="RU" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ru.svg&quot; alt=&quot;Russia Flag&quot; /><span class=&quot;text-truncate&quot;>Russia</span></span>">Russia</option>
                                                        <option value="RW" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/rw.svg&quot; alt=&quot;Rwanda Flag&quot; /><span class=&quot;text-truncate&quot;>Rwanda</span></span>">Rwanda</option>
                                                        <option value="RE" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/re.svg&quot; alt=&quot;Réunion Flag&quot; /><span class=&quot;text-truncate&quot;>Réunion</span></span>">Réunion</option>
                                                        <option value="BL" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/bl.svg&quot; alt=&quot;Saint Barthélemy Flag&quot; /><span class=&quot;text-truncate&quot;>Saint Barthélemy</span></span>">Saint Barthélemy</option>
                                                        <option value="SH" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/sh.svg&quot; alt=&quot;Saint Helena, Ascension and Tristan da Cunha Flag&quot; /><span class=&quot;text-truncate&quot;>Saint Helena, Ascension and Tristan da Cunha</span></span>">Saint Helena, Ascension and Tristan da Cunha</option>
                                                        <option value="KN" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/kn.svg&quot; alt=&quot;Saint Kitts and Nevis Flag&quot; /><span class=&quot;text-truncate&quot;>Saint Kitts and Nevis</span></span>">Saint Kitts and Nevis</option>
                                                        <option value="LC" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/lc.svg&quot; alt=&quot;Saint Lucia Flag&quot; /><span class=&quot;text-truncate&quot;>Saint Lucia</span></span>">Saint Lucia</option>
                                                        <option value="MF" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/mf.svg&quot; alt=&quot;Saint Martin Flag&quot; /><span class=&quot;text-truncate&quot;>Saint Martin</span></span>">Saint Martin</option>
                                                        <option value="PM" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/pm.svg&quot; alt=&quot;Saint Pierre and Miquelon Flag&quot; /><span class=&quot;text-truncate&quot;>Saint Pierre and Miquelon</span></span>">Saint Pierre and Miquelon</option>
                                                        <option value="VC" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/vc.svg&quot; alt=&quot;Saint Vincent and the Grenadines Flag&quot; /><span class=&quot;text-truncate&quot;>Saint Vincent and the Grenadines</span></span>">Saint Vincent and the Grenadines</option>
                                                        <option value="WS" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ws.svg&quot; alt=&quot;Samoa Flag&quot; /><span class=&quot;text-truncate&quot;>Samoa</span></span>">Samoa</option>
                                                        <option value="SM" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/sm.svg&quot; &quot;alt=&quot;San Marino Flag&quot; /><span class=&quot;text-truncate&quot;>San Marino</span></span>">San Marino</option>
                                                        <option value="ST" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/st.svg&quot; &quot;alt=&quot;Sao Tome and Principe Flag&quot; /><span class=&quot;text-truncate&quot;>Sao Tome and Principe</span></span>">Sao Tome and Principe</option>
                                                        <option value="SA" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/sa.svg&quot; alt=&quot;Saudi Arabia Flag&quot; /><span class=&quot;text-truncate&quot;>Saudi Arabia</span></span>">Saudi Arabia</option>
                                                        <option value="GB-SCT" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/gb-sct.svg&quot; alt=&quot;Scotland Flag&quot; /><span class=&quot;text-truncate&quot;>Scotland</span></span>">Scotland</option>
                                                        <option value="SN" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/sn.svg&quot; alt=&quot;Senegal Flag&quot; /><span class=&quot;text-truncate&quot;>Senegal</span></span>">Senegal</option>
                                                        <option value="RS" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/rs.svg&quot; alt=&quot;Serbia Flag&quot; /><span class=&quot;text-truncate&quot;>Serbia</span></span>">Serbia</option>
                                                        <option value="SC" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/sc.svg&quot; alt=&quot;Seychelles Flag&quot; /><span class=&quot;text-truncate&quot;>Seychelles</span></span>">Seychelles</option>
                                                        <option value="SL" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/sl.svg&quot; alt=&quot;Sierra Leone Flag&quot; /><span class=&quot;text-truncate&quot;>Sierra Leone</span></span>">Sierra Leone</option>
                                                        <option value="SG" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/sg.svg&quot; alt=&quot;Singapore Flag&quot; /><span class=&quot;text-truncate&quot;>Singapore</span></span>">Singapore</option>
                                                        <option value="SX" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/sx.svg&quot; alt=&quot;Sint Maarten Flag&quot; /><span class=&quot;text-truncate&quot;>Sint Maarten</span></span>">Sint Maarten</option>
                                                        <option value="SK" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/sk.svg&quot; alt=&quot;Slovakia Flag&quot; /><span class=&quot;text-truncate&quot;>Slovakia</span></span>">Slovakia</option>
                                                        <option value="SI" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/si.svg&quot; alt=&quot;Slovenia Flag&quot; /><span class=&quot;text-truncate&quot;>Slovenia</span></span>">Slovenia</option>
                                                        <option value="SB" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/sb.svg&quot; alt=&quot;Solomon Islands Flag&quot; /><span class=&quot;text-truncate&quot;>Solomon Islands</span></span>">Solomon Islands</option>
                                                        <option value="SO" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/so.svg&quot; alt=&quot;Somalia Flag&quot; /><span class=&quot;text-truncate&quot;>Somalia</span></span>">Somalia</option>
                                                        <option value="ZA" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/za.svg&quot; alt=&quot;South Africa Flag&quot; /><span class=&quot;text-truncate&quot;>South Africa</span></span>">South Africa</option>
                                                        <option value="GS" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/gs.svg&quot; alt=&quot;South Georgia and the South Sandwich Islands Flag&quot; /><span class=&quot;text-truncate&quot;>South Georgia and the South Sandwich Islands</span></span>">South Georgia and the South Sandwich Islands</option>
                                                        <option value="KR" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/kr.svg&quot; alt=&quot;South Korea Flag&quot; /><span class=&quot;text-truncate&quot;>South Korea</span></span>">South Korea</option>
                                                        <option value="SS" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ss.svg&quot; alt=&quot;South Sudan Flag&quot; /><span class=&quot;text-truncate&quot;>South Sudan</span></span>">South Sudan</option>
                                                        <option value="ES" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/es.svg&quot; alt=&quot;Spain Flag&quot; /><span class=&quot;text-truncate&quot;>Spain</span></span>">Spain</option>
                                                        <option value="LK" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/lk.svg&quot; &quot;alt=&quot;Sri Lanka Flag&quot; /><span class=&quot;text-truncate&quot;>Sri Lanka</span></span>">Sri Lanka</option>
                                                        <option value="PS" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ps.svg&quot; alt=&quot;State of Palestine Flag&quot; /><span class=&quot;text-truncate&quot;>State of Palestine</span></span>">State of Palestine</option>
                                                        <option value="SD" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/sd.svg&quot; alt=&quot;Sudan Flag&quot; /><span class=&quot;text-truncate&quot;>Sudan</span></span>">Sudan</option>
                                                        <option value="SR" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/sr.svg&quot; alt=&quot;Suriname Flag&quot; /><span class=&quot;text-truncate&quot;>Suriname</span></span>">Suriname</option>
                                                        <option value="SJ" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/sj.svg&quot; alt=&quot;Svalbard and Jan Mayen Flag&quot; /><span class=&quot;text-truncate&quot;>Svalbard and Jan Mayen</span></span>">Svalbard and Jan Mayen</option>
                                                        <option value="SZ" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/sz.svg&quot; alt=&quot;Swaziland Flag&quot; /><span class=&quot;text-truncate&quot;>Swaziland</span></span>">Swaziland</option>
                                                        <option value="SE" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/se.svg&quot; alt=&quot;Sweden Flag&quot; /><span class=&quot;text-truncate&quot;>Sweden</span></span>">Sweden</option>
                                                        <option value="CH" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ch.svg&quot; alt=&quot;Switzerland Flag&quot; /><span class=&quot;text-truncate&quot;>Switzerland</span></span>">Switzerland</option>
                                                        <option value="SY" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/sy.svg&quot; alt=&quot;Syrian Arab Republic Flag&quot; /><span class=&quot;text-truncate&quot;>Syrian Arab Republic</span></span>">Syrian Arab Republic</option>
                                                        <option value="TW" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/tw.svg&quot; alt=&quot;Taiwan Flag&quot; /><span class=&quot;text-truncate&quot;>Taiwan</span></span>">Taiwan</option>
                                                        <option value="TJ" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/tj.svg&quot; alt=&quot;Tajikistan Flag&quot; /><span class=&quot;text-truncate&quot;>Tajikistan</span></span>">Tajikistan</option>
                                                        <option value="TZ" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/tz.svg&quot; alt=&quot;Tanzania Flag&quot; /><span class=&quot;text-truncate&quot;>Tanzania</span></span>">Tanzania</option>
                                                        <option value="TH" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/th.svg&quot; alt=&quot;Thailand Flag&quot; /><span class=&quot;text-truncate&quot;>Thailand</span></span>">Thailand</option>
                                                        <option value="TL" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/tl.svg&quot; alt=&quot;Timor-Leste Flag&quot; /><span class=&quot;text-truncate&quot;>Timor-Leste</span></span>">Timor-Leste</option>
                                                        <option value="TG" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/tg.svg&quot; alt=&quot;Togo Flag&quot; /><span class=&quot;text-truncate&quot;>Togo</span></span>">Togo</option>
                                                        <option value="TK" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/tk.svg&quot; alt=&quot;Tokelau Flag&quot; /><span class=&quot;text-truncate&quot;>Tokelau</span></span>">Tokelau</option>
                                                        <option value="TO" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/to.svg&quot; alt=&quot;Tonga Flag&quot; /><span class=&quot;text-truncate&quot;>Tonga</span></span>">Tonga</option>
                                                        <option value="TT" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/tt.svg&quot; alt=&quot;Trinidad and Tobago Flag&quot; /><span class=&quot;text-truncate&quot;>Trinidad and Tobago</span></span>">Trinidad and Tobago</option>
                                                        <option value="TN" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/tn.svg&quot; alt=&quot;Tunisia Flag&quot; /><span class=&quot;text-truncate&quot;>Tunisia</span></span>">Tunisia</option>
                                                        <option value="TR" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/tr.svg&quot; alt=&quot;Turkey Flag&quot; /><span class=&quot;text-truncate&quot;>Turkey</span></span>">Turkey</option>
                                                        <option value="TM" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/tm.svg&quot; alt=&quot;Turkmenistan Flag&quot; /><span class=&quot;text-truncate&quot;>Turkmenistan</span></span>">Turkmenistan</option>
                                                        <option value="TC" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/tc.svg&quot; alt=&quot;Turks and Caicos Islands Flag&quot; /><span class=&quot;text-truncate&quot;>Turks and Caicos Islands</span></span>">Turks and Caicos Islands</option>
                                                        <option value="TV" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/tv.svg&quot; alt=&quot;Tuvalu Flag&quot; /><span class=&quot;text-truncate&quot;>Tuvalu</span></span>">Tuvalu</option>
                                                        <option value="UG" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ug.svg&quot; alt=&quot;Uganda Flag&quot; /><span class=&quot;text-truncate&quot;>Uganda</span></span>">Uganda</option>
                                                        <option value="UA" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ua.svg&quot; alt=&quot;Ukraine Flag&quot; /><span class=&quot;text-truncate&quot;>Ukraine</span></span>">Ukraine</option>
                                                        <option value="AE" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ae.svg&quot; alt=&quot;United Arab Emirates Flag&quot; /><span class=&quot;text-truncate&quot;>United Arab Emirates</span></span>">United Arab Emirates</option>
                                                        <option value="GB" selected data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/gb.svg&quot; alt=&quot;United Kingdom Flag&quot; /><span class=&quot;text-truncate&quot;>United Kingdom</span></span>">United Kingdom</option>
                                                        <option value="UM" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/um.svg&quot; alt=&quot;United States Minor Outlying Islands Flag&quot; /><span class=&quot;text-truncate&quot;>United States Minor Outlying Islands</span></span>">United States Minor Outlying Islands</option>
                                                        <option value="US" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/us.svg&quot; alt=&quot;United States of America Flag&quot; /><span class=&quot;text-truncate&quot;>United States of America</span></span>">United States of America</option>
                                                        <option value="UY" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/uy.svg&quot; alt=&quot;Uruguay Flag&quot; /><span class=&quot;text-truncate&quot;>Uruguay</span></span>">Uruguay</option>
                                                        <option value="UZ" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/uz.svg&quot; alt=&quot;Uzbekistan Flag&quot; /><span class=&quot;text-truncate&quot;>Uzbekistan</span></span>">Uzbekistan</option>
                                                        <option value="VU" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/vu.svg&quot; alt=&quot;Vanuatu Flag&quot; /><span class=&quot;text-truncate&quot;>Vanuatu</span></span>">Vanuatu</option>
                                                        <option value="VE" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ve.svg&quot; alt=&quot;Venezuela (Bolivarian Republic of) Flag&quot; /><span class=&quot;text-truncate&quot;>Venezuela (Bolivarian Republic of)</span></span>">Venezuela (Bolivarian Republic of)</option>
                                                        <option value="VN" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/vn.svg&quot; alt=&quot;Vietnam Flag&quot; /><span class=&quot;text-truncate&quot;>Vietnam</span></span>">Vietnam</option>
                                                        <option value="VG" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/vg.svg&quot; alt=&quot;Virgin Islands (British) Flag&quot; /><span class=&quot;text-truncate&quot;>Virgin Islands (British)</span></span>">Virgin Islands (British)</option>
                                                        <option value="VI" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/vi.svg&quot; alt=&quot;Virgin Islands (U.S.) Flag&quot; /><span class=&quot;text-truncate&quot;>Virgin Islands (U.S.)</span></span>">Virgin Islands (U.S.)</option>
                                                        <option value="GB-WLS" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/gb-wls.svg&quot; alt=&quot;Wales Flag&quot; /><span class=&quot;text-truncate&quot;>Wales</span></span>">Wales</option>
                                                        <option value="WF" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/wf.svg&quot; alt=&quot;Wallis and Futuna Flag&quot; /><span class=&quot;text-truncate&quot;>Wallis and Futuna</span></span>">Wallis and Futuna</option>
                                                        <option value="EH" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/eh.svg&quot; alt=&quot;Western Sahara Flag&quot; /><span class=&quot;text-truncate&quot;>Western Sahara</span></span>">Western Sahara</option>
                                                        <option value="YE" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ye.svg&quot; alt=&quot;Yemen Flag&quot; /><span class=&quot;text-truncate&quot;>Yemen</span></span>">Yemen</option>
                                                        <option value="ZM" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/zm.svg&quot; alt=&quot;Zambia Flag&quot; /><span class=&quot;text-truncate&quot;>Zambia</span></span>">Zambia</option>
                                                        <option value="ZW" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/zw.svg&quot; alt=&quot;Zimbabwe Flag&quot; /><span class=&quot;text-truncate&quot;>Zimbabwe</span></span>">Zimbabwe</option>
                                                    </select>
                                                </div>
                                                {/* End Select */}
                                                <div className="mb-4">
                                                    <input value={location.city} onChange={handleCityChange} type="text" className="form-control" name="editCityModal" id="editCityModalLabel" placeholder="City" aria-label="City"  />
                                                </div>
                                                <input value={location.state} onChange={handleStateChange} type="text" className="form-control" name="editStateModal" id="editStateModalLabel" placeholder="State" aria-label="State" />
                                            </div>
                                        </div>
                                        {/* End Form */}
                                        {/* Form */}
                                        <div className="row mb-4">
                                            <label htmlFor="editAddressLine1Label" className="col-sm-3 col-form-label form-label">Address line 1</label>
                                            <div className="col-sm-9">
                                                <input value={address1} onChange={(e) => setAddress1(e.target.value)} type="text" className="form-control" name="addressLine1" id="editAddressLine1Label" placeholder="Your address" aria-label="Your address"  />
                                            </div>
                                        </div>
                                        {/* End Form */}
                                        {/* Form */}
                                        <div className="row mb-4">
                                            <label htmlFor="editAddressLine2ModalLabel" className="col-sm-3 col-form-label form-label">Address line 2 <span className="form-label-secondary">(Optional)</span></label>
                                            <div className="col-sm-9">
                                                <input value={address2} onChange={(e) => setAddress2(e.target.value)} type="text" className="form-control" name="editAddressLine2Modal" id="editAddressLine2ModalLabel" placeholder="Your address" aria-label="Your address" />
                                            </div>
                                        </div>
                                        {/* End Form */}
                                        {/* Form */}
                                        <div className="row">
                                            <label htmlFor="editZipCodeLabel" className="col-sm-3 col-form-label form-label">Zip code <i className="bi-question-circle text-body ms-1" data-bs-toggle="tooltip" data-bs-placement="top" title="You can find your code in a postal address." /></label>
                                            <div className="col-sm-9">
                                                <input value={zipcode} onChange={(e) => setZipCode(e.target.value)} type="text" className="js-input-mask form-control" name="zipCode" id="editZipCodeLabel" placeholder="Your zip code" aria-label="Your zip code"/>
                                            </div>
                                        </div>
                                        {/* End Form */}
                                        <div className="d-flex justify-content-end mt-4">
                                            <div className="d-flex gap-3">
                                                <button type="button" className="btn btn-white" data-bs-dismiss="modal" aria-label="Close">Cancel</button>
                                                <button onClick={() => handleSaveChange()} type="button" className="btn btn-primary">Save changes</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="tab-pane fade" id="change-password" role="tabpanel" aria-labelledby="change-password-tab">
                                    <form>
                                        {/* Form */}
                                        <div className="row mb-4">
                                            <label htmlFor="editUserModalCurrentPasswordLabel" className="col-sm-3 col-form-label form-label">Current password</label>
                                            <div className="col-sm-9">
                                                {/* Input Group */}
                                                <div className="input-group input-group-merge">
                                                    <input type="password" className="js-toggle-password form-control" name="currentPassword" id="editUserModalCurrentPasswordLabel" placeholder="Enter current password" aria-label="Enter current password" data-hs-toggle-password-options="{
                                 &quot;target&quot;: &quot;#editUserModalChangePassModalTarget&quot;,
                                 &quot;defaultClass&quot;: &quot;bi-eye-slash&quot;,
                                 &quot;showClass&quot;: &quot;bi-eye&quot;,
                                 &quot;classChangeTarget&quot;: &quot;#editUserModalChangePassModalIcon&quot;
                               }" />
                                                    <a id="editUserModalChangePassModalTarget" className="input-group-append input-group-text" href="javascript:;">
                                                        <i id="editUserModalChangePassModalIcon" className="bi-eye" />
                                                    </a>
                                                </div>
                                                {/* End Input Group */}
                                            </div>
                                        </div>
                                        {/* End Form */}
                                        {/* Form */}
                                        <div className="row mb-4">
                                            <label htmlFor="editUserModalNewPassword" className="col-sm-3 col-form-label form-label">New password</label>
                                            <div className="col-sm-9">
                                                <input type="password" className="js-toggle-password form-control" name="editUserModalNewPassword" id="editUserModalNewPassword" placeholder="Enter new password" aria-label="Enter new password" data-hs-toggle-password-options="{
                               &quot;target&quot;: &quot;#editUserModalChangePassModalCheckbox&quot;
                             }" />
                                            </div>
                                        </div>
                                        {/* End Form */}
                                        {/* Form */}
                                        <div className="row mb-4">
                                            <label htmlFor="editUserModalConfirmNewPasswordLabel" className="col-sm-3 col-form-label form-label">Confirm new password</label>
                                            <div className="col-sm-9">
                                                <input type="password" className="js-toggle-password form-control" name="confirmNewPassword" id="editUserModalConfirmNewPasswordLabel" placeholder="Confirm your new password" aria-label="Confirm your new password" data-hs-toggle-password-options="{
                               &quot;target&quot;: &quot;#editUserModalChangePassModalCheckbox&quot;
                             }" />
                                            </div>
                                        </div>
                                        {/* End Form */}
                                        {/* Form */}
                                        <div className="row mb-4">
                                            <div className="col-sm-9 offset-sm-3">
                                                {/* Form Check */}
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" defaultValue id="editUserModalChangePassModalCheckbox" />
                                                    <label className="form-check-label" htmlFor="editUserModalChangePassModalCheckbox">
                                                        Show password
                                                    </label>
                                                </div>
                                                {/* End Form Check */}
                                            </div>
                                        </div>
                                        {/* End Form */}
                                        <div className="d-flex justify-content-end">
                                            <div className="d-flex gap-3">
                                                <button type="button" className="btn btn-white" data-bs-dismiss="modal" aria-label="Close">Cancel</button>
                                                <button type="button" className="btn btn-primary">Save changes</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="tab-pane fade" id="notifications" role="tabpanel" aria-labelledby="notifications-tab">
                                    {/* Table */}
                                    <div className="table-responsive datatable-custom">
                                        <table className="table table-thead-bordered table-nowrap table-align-middle table-first-col-px-0">
                                            <thead className="thead-light">
                                                <tr>
                                                    <th>Type</th>
                                                    <th className="text-center">
                                                        <div className="mb-1">
                                                            <img className="avatar avatar-xs" src="./assets/svg/illustrations/oc-email-at.svg" alt="Image Description" data-hs-theme-appearance="default" />
                                                            <img className="avatar avatar-xs" src="./assets/svg/illustrations-light/oc-email-at.svg" alt="Image Description" data-hs-theme-appearance="dark" />
                                                        </div>
                                                        Email
                                                    </th>
                                                    <th className="text-center">
                                                        <div className="mb-1">
                                                            <img className="avatar avatar-xs" src="./assets/svg/illustrations/oc-globe.svg" alt="Image Description" data-hs-theme-appearance="default" />
                                                            <img className="avatar avatar-xs" src="./assets/svg/illustrations-light/oc-globe.svg" alt="Image Description" data-hs-theme-appearance="dark" />
                                                        </div>
                                                        Browser
                                                    </th>
                                                    <th className="text-center">
                                                        <div className="mb-1">
                                                            <img className="avatar avatar-xs" src="./assets/svg/illustrations/oc-phone.svg" alt="Image Description" data-hs-theme-appearance="default" />
                                                            <img className="avatar avatar-xs" src="./assets/svg/illustrations-light/oc-phone.svg" alt="Image Description" data-hs-theme-appearance="dark" />
                                                        </div>
                                                        App
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>New for you</td>
                                                    <td className="text-center">
                                                        <div className="form-check form-check-inline">
                                                            <input className="form-check-input" type="checkbox" defaultValue id="editUserModalAlertsCheckbox1" />
                                                            <label className="form-check-label" htmlFor="editUserModalAlertsCheckbox1" />
                                                        </div>
                                                    </td>
                                                    <td className="text-center">
                                                        <div className="form-check form-check-inline">
                                                            <input className="form-check-input" type="checkbox" defaultValue id="editUserModalAlertsCheckbox2" />
                                                            <label className="form-check-label" htmlFor="editUserModalAlertsCheckbox2" />
                                                        </div>
                                                    </td>
                                                    <td className="text-center">
                                                        <div className="form-check form-check-inline">
                                                            <input className="form-check-input" type="checkbox" defaultValue id="editUserModalAlertsCheckbox3" />
                                                            <label className="form-check-label" htmlFor="editUserModalAlertsCheckbox3" />
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Account activity <i className="bi-question-circle text-body ms-1" data-bs-toggle="tooltip" data-bs-placement="top" title="Get important notifications about you or activity you've missed" /></td>
                                                    <td className="text-center">
                                                        <div className="form-check form-check-inline">
                                                            <input className="form-check-input" type="checkbox" defaultValue id="editUserModalAlertsCheckbox4" />
                                                            <label className="form-check-label" htmlFor="editUserModalAlertsCheckbox4" />
                                                        </div>
                                                    </td>
                                                    <td className="text-center">
                                                        <div className="form-check form-check-inline">
                                                            <input className="form-check-input" type="checkbox" defaultValue id="editUserModalAlertsCheckbox5" defaultChecked />
                                                            <label className="form-check-label" htmlFor="editUserModalAlertsCheckbox5" />
                                                        </div>
                                                    </td>
                                                    <td className="text-center">
                                                        <div className="form-check form-check-inline">
                                                            <input className="form-check-input" type="checkbox" defaultValue id="editUserModalAlertsCheckbox6" defaultChecked />
                                                            <label className="form-check-label" htmlFor="editUserModalAlertsCheckbox6" />
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>A new browser used to sign in</td>
                                                    <td className="text-center">
                                                        <div className="form-check form-check-inline">
                                                            <input className="form-check-input" type="checkbox" defaultValue id="editUserModalAlertsCheckbox7" defaultChecked />
                                                            <label className="form-check-label" htmlFor="editUserModalAlertsCheckbox7" />
                                                        </div>
                                                    </td>
                                                    <td className="text-center">
                                                        <div className="form-check form-check-inline">
                                                            <input className="form-check-input" type="checkbox" defaultValue id="editUserModalAlertsCheckbox8" defaultChecked />
                                                            <label className="form-check-label" htmlFor="editUserModalAlertsCheckbox8" />
                                                        </div>
                                                    </td>
                                                    <td className="text-center">
                                                        <div className="form-check form-check-inline">
                                                            <input className="form-check-input" type="checkbox" defaultValue id="editUserModalAlertsCheckbox9" defaultChecked />
                                                            <label className="form-check-label" htmlFor="editUserModalAlertsCheckbox9" />
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>A new device is linked</td>
                                                    <td className="text-center">
                                                        <div className="form-check form-check-inline">
                                                            <input className="form-check-input" type="checkbox" defaultValue id="editUserModalAlertsCheckbox10" />
                                                            <label className="form-check-label" htmlFor="editUserModalAlertsCheckbox10" />
                                                        </div>
                                                    </td>
                                                    <td className="text-center">
                                                        <div className="form-check form-check-inline">
                                                            <input className="form-check-input" type="checkbox" defaultValue id="editUserModalAlertsCheckbox11" defaultChecked />
                                                            <label className="form-check-label" htmlFor="editUserModalAlertsCheckbox11" />
                                                        </div>
                                                    </td>
                                                    <td className="text-center">
                                                        <div className="form-check form-check-inline">
                                                            <input className="form-check-input" type="checkbox" defaultValue id="editUserModalAlertsCheckbox12" />
                                                            <label className="form-check-label" htmlFor="editUserModalAlertsCheckbox12" />
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>A new device connected <i className="bi-question-circle text-body ms-1" data-bs-toggle="tooltip" data-bs-placement="top" title="Email me when a new device connected" /></td>
                                                    <td className="text-center">
                                                        <div className="form-check form-check-inline">
                                                            <input className="form-check-input" type="checkbox" defaultValue id="editUserModalAlertsCheckbox13" />
                                                            <label className="form-check-label" htmlFor="editUserModalAlertsCheckbox13" />
                                                        </div>
                                                    </td>
                                                    <td className="text-center">
                                                        <div className="form-check form-check-inline">
                                                            <input className="form-check-input" type="checkbox" defaultValue id="editUserModalAlertsCheckbox14" defaultChecked />
                                                            <label className="form-check-label" htmlFor="editUserModalAlertsCheckbox14" />
                                                        </div>
                                                    </td>
                                                    <td className="text-center">
                                                        <div className="form-check form-check-inline">
                                                            <input className="form-check-input" type="checkbox" defaultValue id="editUserModalAlertsCheckbox15" defaultChecked />
                                                            <label className="form-check-label" htmlFor="editUserModalAlertsCheckbox15" />
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    {/* End Table */}
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm">
                                            {/* Form */}
                                            <div className="mb-4">
                                                <span className="d-block mb-2">When should we send notifications?</span>
                                                {/* Select */}
                                                <div className="tom-select-custom">
                                                    <select className="js-select form-select" autoComplete="off" data-hs-tom-select-options="{
                                  &quot;searchInDropdown&quot;: false,
                                  &quot;width&quot;: &quot;15rem&quot;,
                                  &quot;hideSearch&quot;: true
                                }">
                                                        <option value="whenToSendNotification1">Always</option>
                                                        <option value="whenToSendNotification2">Only when I'm online</option>
                                                    </select>
                                                </div>
                                                {/* End Select */}
                                            </div>
                                            {/* End Form */}
                                        </div>
                                        <div className="col-sm">
                                            {/* Form */}
                                            <div className="mb-4">
                                                <span className="d-block mb-2">Send a daily summary ("Daily Digest") of task activity.</span>
                                                <div className="row">
                                                    <div className="col-auto mb-2">
                                                        {/* Select */}
                                                        <div className="tom-select-custom">
                                                            <select className="js-select form-select" autoComplete="off" data-hs-tom-select-options="{
                                    &quot;searchInDropdown&quot;: false,
                                    &quot;hideSearch&quot;: true
                                  }">
                                                                <option value="EveryDay">Every day</option>
                                                                <option value="weekdays" selected>Weekdays</option>
                                                                <option value="Never">Never</option>
                                                            </select>
                                                        </div>
                                                        {/* End Select */}
                                                    </div>
                                                    {/* End Col */}
                                                    <div className="col-auto mb-2">
                                                        {/* Select */}
                                                        <div className="tom-select-custom tom-select-custom-end">
                                                            <select className="js-select form-select" autoComplete="off" data-hs-tom-select-options="{
                                    &quot;searchInDropdown&quot;: false,
                                    &quot;hideSearch&quot;: true,
                                    &quot;dropdownWidth&quot;: &quot;11rem&quot;,
                                    &quot;dropup&quot;: true
                                  }">
                                                                <option value={0}>at 12 AM</option>
                                                                <option value={1}>at 1 AM</option>
                                                                <option value={2}>at 2 AM</option>
                                                                <option value={3}>at 3 AM</option>
                                                                <option value={4}>at 4 AM</option>
                                                                <option value={5}>at 5 AM</option>
                                                                <option value={6}>at 6 AM</option>
                                                                <option value={7}>at 7 AM</option>
                                                                <option value={8}>at 8 AM</option>
                                                                <option value={9} selected>at 9 AM</option>
                                                                <option value={10}>at 10 AM</option>
                                                                <option value={11}>at 11 AM</option>
                                                                <option value={12}>at 12 PM</option>
                                                                <option value={13}>at 1 PM</option>
                                                                <option value={14}>at 2 PM</option>
                                                                <option value={15}>at 3 PM</option>
                                                                <option value={16}>at 4 PM</option>
                                                                <option value={17}>at 5 PM</option>
                                                                <option value={18}>at 6 PM</option>
                                                                <option value={19}>at 7 PM</option>
                                                                <option value={20}>at 8 PM</option>
                                                                <option value={21}>at 9 PM</option>
                                                                <option value={22}>at 10 PM</option>
                                                                <option value={23}>at 11 PM</option>
                                                            </select>
                                                        </div>
                                                        {/* End Select */}
                                                    </div>
                                                    {/* End Col */}
                                                </div>
                                                {/* End Row */}
                                            </div>
                                            {/* End Form */}
                                        </div>
                                        {/* End Col */}
                                    </div>
                                    {/* End Row */}
                                    <p>In order to cut back on noise, email notifications are grouped together and only sent when you're idle or offline.</p>
                                    <div className="d-flex justify-content-end">
                                        <div className="d-flex gap-3">
                                            <button type="button" className="btn btn-white" data-bs-dismiss="modal" aria-label="Close">Cancel</button>
                                            <button type="submit" className="btn btn-primary">Save changes</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Tab Content */}
                        </div>
                        {/* End Body */}
                    </div>
                </div>
            </div>
        </>
    )
}

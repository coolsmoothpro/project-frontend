import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { toast } from 'react-toastify';

import { createUser } from '../../Api/user';
import { AVATAR } from '../../utils/Constant';
import { useNavigate } from 'react-router-dom';

const steps = ['Profile', 'Billing address', 'Confirmation'];

export default function AddUser() {
    const navigate = useNavigate();
    const [activeStep, setActiveStep] = React.useState(0);
    const [completed, setCompleted] = React.useState({});

    const [avatar, setAvatar] = useState();
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
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [passwordMatched, setPasswordMatched] = useState(false);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setAvatar(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };
    
    const handleResetAvatar = () => {
        setAvatar(); 
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



    const totalSteps = () => {
        return steps.length;
    };

    const completedSteps = () => {
        return Object.keys(completed).length;
    };

    const isLastStep = () => {
        return activeStep === totalSteps() - 1;
    };

    const allStepsCompleted = () => {
        return completedSteps() === totalSteps();
    };

    const handleNext = () => {
        const newActiveStep =
            isLastStep() && !allStepsCompleted()
                ? // It's the last step, but not all steps have been completed,
                // find the first step that has been completed
                steps.findIndex((step, i) => !(i in completed))
                : activeStep + 1;
        setActiveStep(newActiveStep);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStep = (step) => () => {
        setActiveStep(step);
    };

    const handleComplete = async () => {
        if (completedSteps() === totalSteps() - 1) {

            const { response } = await createUser({avatar, email, firstname, lastname, role, phone, organization, department, accountType, location, address1, address2, zipcode, password});
            
            if (response.data.success) {
                toast.success("User has been created successfully!");
            } else {
                toast.error("Failed!");
                return;
            }
        }
        const newCompleted = completed;
        newCompleted[activeStep] = true;
        setCompleted(newCompleted);
        handleNext();
    };

    const handleReset = () => {
        setActiveStep(0);
        setCompleted({});
    };

    useEffect(() => {
        if (password !== confirmPassword) setPasswordMatched(false)
        if (password === confirmPassword) setPasswordMatched(true)
    }, [password, confirmPassword])

    return (
        <>
            <div className="content container-fluid">
                {/* Step Form */}
                <div className="page-header">
                    <div className="row align-items-end">
                        <div className="col-sm mb-2 mb-sm-0">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb breadcrumb-no-gutter">
                                    <li className="breadcrumb-item"><a className="breadcrumb-link" href="javascript:;">Pages</a></li>
                                    <li className="breadcrumb-item"><a className="breadcrumb-link" onClick={() =>navigate("/overview")} href="javascript:;">Users</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Add User</li>
                                </ol>
                            </nav>
                            <h1 className="page-header-title">Add User</h1>
                        </div>
                    </div>
                    {/* End Row */}
                </div>
                <form className="js-step-form py-md-5" >
                    <div className="row justify-content-lg-center">
                        <div className="col-lg-8">
                            {/* Step */}
                            <Box sx={{ width: '100%' }}>
                                <Stepper nonLinear activeStep={activeStep}>
                                    {steps.map((label, index) => (
                                        <Step key={label} completed={completed[index]}>
                                            <StepButton color="inherit" onClick={handleStep(index)}>
                                                {label}
                                            </StepButton>
                                        </Step>
                                    ))}
                                </Stepper>
                                <div>
                                    {allStepsCompleted() ? (
                                        <React.Fragment>
                                            <div id="successMessageContent" style={{marginTop:'2rem'}} >
                                                <div className="text-center">
                                                    <img className="img-fluid mb-3" src="./assets/svg/illustrations/oc-hi-five.svg" alt="Image Description" data-hs-theme-appearance="default" style={{ maxWidth: '15rem' }} />
                                                    {/* <img className="img-fluid mb-3" src="./assets/svg/illustrations-light/oc-hi-five.svg" alt="Image Description" data-hs-theme-appearance="dark" style={{ maxWidth: '15rem' }} /> */}
                                                    <div className="mb-4">
                                                        <h2>Successful!</h2>
                                                        <p>New <span className="fw-semibold text-dark">{firstname} {lastname}</span> user has been successfully created.</p>
                                                    </div>
                                                    <div className="d-flex justify-content-center">
                                                        <a className="btn btn-white me-3" onClick={handleReset} >
                                                            <i className="bi-chevron-left ms-1" /> Back to users
                                                        </a>
                                                        <a className="btn btn-primary" href="/add-user">
                                                            <i className="bi-person-plus-fill me-1" /> Add new user
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </React.Fragment>
                                    ) : (
                                        <React.Fragment>
                                            <div id="addUserStepFormContent" style={{ marginTop: '2rem' }} >
                                                {activeStep === 0 &&
                                                    <div id="addUserStepProfile" className="card card-lg">
                                                        {/* Body */}
                                                        <div className="card-body">
                                                            {/* Form */}
                                                            <div className="row mb-4">
                                                                <label className="col-sm-3 col-form-label form-label">Avatar</label>
                                                                <div className="col-sm-9">
                                                                    <div className="d-flex align-items-center">
                                                                        {/* Avatar */}
                                                                        <label className="avatar avatar-xl avatar-circle avatar-uploader me-5" htmlFor="avatarUploader">
                                                                            <img src={avatar || "./assets/img/160x160/img1.jpg"}  id="avatarImg" className="avatar-img" alt="Image Description" />
                                                                            <input onChange={handleFileChange} type="file" className="js-file-attach avatar-uploader-input" id="avatarUploader" />
                                                                            <span className="avatar-uploader-trigger">
                                                                                <i className="bi-pencil avatar-uploader-icon shadow-sm" />
                                                                            </span>
                                                                        </label>
                                                                        {/* End Avatar */}
                                                                        <button onClick={handleResetAvatar} type="button" className="js-file-attach-reset-img btn btn-white">Delete</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {/* End Form */}
                                                            {/* Form */}
                                                            <div className="row mb-4">
                                                                <label htmlFor="firstNameLabel" className="col-sm-3 col-form-label form-label">Full name <i className="bi-question-circle text-body ms-1" data-bs-toggle="tooltip" data-bs-placement="top" title="Displayed on public forums, such as Front." /></label>
                                                                <div className="col-sm-9">
                                                                    <div className="input-group input-group-sm-vertical">
                                                                        <input onChange={(event) => setFirstName(event.target.value)} value={firstname} type="text" className="form-control" name="firstName" id="firstNameLabel" placeholder="Clarice" aria-label="Clarice" />
                                                                        <input onChange={(event) => setLastName(event.target.value)} value={lastname} type="text" className="form-control" name="lastName" id="lastNameLabel" placeholder="Boone" aria-label="Boone" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {/* End Form */}
                                                            {/* Form */}
                                                            <div className="row mb-4">
                                                                <label htmlFor="emailLabel" className="col-sm-3 col-form-label form-label">Email</label>
                                                                <div className="col-sm-9">
                                                                    <input onChange={(event) => setEmail(event.target.value)} value={email} type="email" className="form-control" name="email" id="emailLabel" placeholder="clarice@site.com" aria-label="clarice@site.com" />
                                                                </div>
                                                            </div>
                                                            {/* End Form */}
                                                            {/* Form */}
                                                            <div className="row mb-4">
                                                                <label htmlFor="locationLabel" className="col-sm-3 col-form-label form-label">Role</label>
                                                                <div className="col-sm-9">
                                                                    <div className="tom-select-custom">
                                                                        <select value={role} onChange={(e) => setRole(e.target.value)} className="js-select form-select" id="locationLabel" >
                                                                            <option value="ACCOUNT ADMIN" >Account Admin</option>
                                                                            <option value="PROJECT MANAGER" >Project Manager</option>
                                                                            <option value="USER" >User</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className=" row mb-4" >
                                                                <label htmlFor="phoneLabel" className="col-sm-3 col-form-label form-label">Phone <span className="form-label-secondary">(Optional)</span></label>
                                                                <div className="col-sm-9">
                                                                    <div className="input-group input-group-sm-vertical">
                                                                        <input onChange={(event) => setPhone(event.target.value)} value={phone} type="text" className="js-input-mask form-control" name="phone" id="phoneLabel" placeholder="+x(xxx)xxx-xx-xx" />
                                                                    </div>                                                                    
                                                                </div>
                                                            </div>                                                          
                                                            <div className="row mb-4">
                                                                <label htmlFor="organizationLabel" className="col-sm-3 col-form-label form-label">Organization</label>
                                                                <div className="col-sm-9">
                                                                    <input onChange={(event) => setOrganization(event.target.value)} value={organization} type="text" className="form-control" name="organization" id="organizationLabel" placeholder="Htmlstream" aria-label="Htmlstream" />
                                                                </div>
                                                            </div>
                                                            {/* End Form */}
                                                            {/* Form */}
                                                            <div className="row mb-4">
                                                                <label htmlFor="departmentLabel" className="col-sm-3 col-form-label form-label">Department</label>
                                                                <div className="col-sm-9">
                                                                    <input onChange={(event) => setDepartment(event.target.value)} value={department} type="text" className="form-control" name="department" id="departmentLabel" placeholder="Human resources" aria-label="Human resources" />
                                                                </div>
                                                            </div>
                                                            {/* End Form */}
                                                            {/* Form */}
                                                            <div className="row">
                                                                <label className="col-sm-3 col-form-label form-label">Account type</label>
                                                                <div className="col-sm-9">
                                                                    <div className="input-group input-group-sm-vertical">
                                                                        {/* Radio Check */}
                                                                        <label className="form-control" htmlFor="userAccountTypeRadio1">
                                                                            <span className="form-check">
                                                                                <input checked={accountType === "Individual"} onChange={handleAccountTypeChange} value="Individual" type="radio" className="form-check-input" name="userAccountTypeRadio" id="userAccountTypeRadio1" />
                                                                                <span className="form-check-label">Individual</span>
                                                                            </span>
                                                                        </label>
                                                                        {/* End Radio Check */}
                                                                        {/* Radio Check */}
                                                                        <label className="form-control" htmlFor="userAccountTypeRadio2">
                                                                            <span className="form-check">
                                                                                <input checked={accountType === "Company"} onChange={handleAccountTypeChange} value="Company" type="radio" className="form-check-input" name="userAccountTypeRadio" id="userAccountTypeRadio2" />
                                                                                <span className="form-check-label">Company</span>
                                                                            </span>
                                                                        </label>
                                                                        {/* End Radio Check */}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {/* End Form */}
                                                        </div>
                                                        {/* End Body */}
                                                    </div>
                                                }
                                                {activeStep === 1 &&
                                                    <div id="addUserStepBillingAddress" className="card card-lg">
                                                        {/* Body */}
                                                        <div className="card-body">
                                                            {/* Form */}
                                                            <div className="row mb-4">
                                                                <label htmlFor="locationLabel" className="col-sm-3 col-form-label form-label">Location</label>
                                                                <div className="col-sm-9">
                                                                    {/* Select */}
                                                                    <div className="tom-select-custom mb-4">
                                                                        <select value={location.country} onChange={handleCountryChange} className="js-select form-select" id="locationLabel" >
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
                                                                        <input value={location.city} onChange={handleCityChange} type="text" className="form-control" name="city" id="cityLabel" placeholder="City" aria-label="City" />
                                                                    </div>
                                                                    <input value={location.state} onChange={handleStateChange} type="text" className="form-control" name="state" id="stateLabel" placeholder="State" aria-label="State" />
                                                                </div>
                                                            </div>
                                                            {/* End Form */}
                                                            {/* Form */}
                                                            <div className="row mb-4">
                                                                <label htmlFor="addressLine1Label" className="col-sm-3 col-form-label form-label">Address line 1</label>
                                                                <div className="col-sm-9">
                                                                    <input value={address1} onChange={(event) => setAddress1(event.target.value)} type="text" className="form-control" name="addressLine1" id="addressLine1Label" placeholder="Your address" aria-label="Your address" />
                                                                </div>
                                                            </div>
                                                            {/* End Form */}
                                                            {/* Form */}
                                                            <div className="js-add-field row mb-4" data-hs-add-field-options="{
                            &quot;template&quot;: &quot;#addAddressFieldTemplate&quot;,
                            &quot;container&quot;: &quot;#addAddressFieldContainer&quot;,
                            &quot;defaultCreated&quot;: 0
                          }">
                                                                <label htmlFor="addressLine2Label" className="col-sm-3 col-form-label form-label">Address line 2 <span className="form-label-secondary">(Optional)</span></label>
                                                                <div className="col-sm-9">
                                                                    <input value={address2} onChange={(event) => setAddress2(event.target.value)} type="text" className="form-control" name="addressLine2" id="addressLine2Label" placeholder="Your address" aria-label="Your address" />
                                                                    
                                                                </div>
                                                            </div>
                                                            {/* End Form */}
                                                            {/* Form */}
                                                            <div className="row mb-4">
                                                                <label htmlFor="zipCodeLabel" className="col-sm-3 col-form-label form-label">Zip code <i className="bi-question-circle text-body ms-1" data-bs-toggle="tooltip" data-bs-placement="top" title="You can find your code in a postal address." /></label>
                                                                <div className="col-sm-9">
                                                                    <input value={zipcode} onChange={(event) => setZipCode(event.target.value)} type="text" className="js-input-mask form-control" name="zipCode" id="zipCodeLabel" placeholder="Your zip code" aria-label="Your zip code" data-hs-mask-options="{
                                 &quot;mask&quot;: &quot;AA0 0AA&quot;
                               }" />
                                                                </div>
                                                            </div>
                                                            <div className="row mb-4">
                                                                <label className="col-sm-3 col-form-label form-label" htmlFor="signupSrPassword">Password</label>
                                                                <div className="input-group col-sm-9" >
                                                                    <input onChange={(event) => setPassword(event.target.value)} type="password" className="js-toggle-password form-control form-control-lg" name="password" id="signupSrPassword" placeholder="8+ characters required" aria-label="8+ characters required" required minLength={8} data-hs-toggle-password-options="{
                                                &quot;target&quot;: [&quot;.js-toggle-password-target-1&quot;, &quot;.js-toggle-password-target-2&quot;],
                                                &quot;defaultClass&quot;: &quot;bi-eye-slash&quot;,
                                                &quot;showClass&quot;: &quot;bi-eye&quot;,
                                                &quot;classChangeTarget&quot;: &quot;.js-toggle-password-show-icon-1&quot;
                                                }" />
                                                                    <a className="js-toggle-password-target-1 input-group-append input-group-text" href="javascript:;">
                                                                        <i className="js-toggle-password-show-icon-1 bi-eye" />
                                                                    </a>
                                                                </div>
                                                                <span className="invalid-feedback">Your password is invalid. Please try again.</span>
                                                            </div>
                                                            <div className="row mb-4">
                                                                <label className="col-sm-3 col-form-label form-label" htmlFor="signupSrConfirmPassword">Confirm password</label>
                                                                <div className="input-group col-sm-9">
                                                                    <input  onChange={(event) => setConfirmPassword(event.target.value)} type="password" className="js-toggle-password form-control form-control-lg" name="confirmPassword" id="signupSrConfirmPassword" placeholder="8+ characters required" aria-label="8+ characters required" required minLength={8} data-hs-toggle-password-options="{
                                                &quot;target&quot;: [&quot;.js-toggle-password-target-1&quot;, &quot;.js-toggle-password-target-2&quot;],
                                                &quot;defaultClass&quot;: &quot;bi-eye-slash&quot;,
                                                &quot;showClass&quot;: &quot;bi-eye&quot;,
                                                &quot;classChangeTarget&quot;: &quot;.js-toggle-password-show-icon-2&quot;
                                                }" />
                                                                    <a className="js-toggle-password-target-2 input-group-append input-group-text" href="javascript:;">
                                                                        <i className="js-toggle-password-show-icon-2 bi-eye" />
                                                                    </a>
                                                                </div>
                                                                {!passwordMatched ? <p className="text-danger mb-0">Password does not confirmed</p> : ""}
                                                            </div>
                                                            {/* End Form */}
                                                        </div>
                                                        {/* End Body */}
                                                    </div>
                                                }
                                                {activeStep === 2 &&
                                                    <div id="addUserStepConfirmation" className="card card-lg">
                                                        {/* Profile Cover */}
                                                        <div className="profile-cover">
                                                            <div className="profile-cover-img-wrapper">
                                                                <img className="profile-cover-img" src="./assets/img/1920x400/img1.jpg" alt="Image Description" />
                                                            </div>
                                                        </div>
                                                        {/* End Profile Cover */}
                                                        {/* Avatar */}
                                                        <div className="avatar avatar-xxl avatar-circle avatar-border-lg profile-cover-avatar">
                                                            <img className="avatar-img" src={avatar || AVATAR} alt="Image Description" />
                                                        </div>
                                                        {/* End Avatar */}
                                                        {/* Body */}
                                                        <div className="card-body">
                                                            <dl className="row">
                                                                <dt className="col-sm-6 text-sm-end">Full name:</dt>
                                                                <dd className="col-sm-6">{firstname} {lastname}</dd>
                                                                <dt className="col-sm-6 text-sm-end">Email:</dt>
                                                                <dd className="col-sm-6">{email}</dd>
                                                                <dt className="col-sm-6 text-sm-end">Phone:</dt>
                                                                <dd className="col-sm-6">{phone}</dd>
                                                                <dt className="col-sm-6 text-sm-end">Organization:</dt>
                                                                <dd className="col-sm-6">{organization}</dd>
                                                                <dt className="col-sm-6 text-sm-end">Department:</dt>
                                                                <dd className="col-sm-6">{department}</dd>
                                                                <dt className="col-sm-6 text-sm-end">Account type:</dt>
                                                                <dd className="col-sm-6">{accountType}</dd>
                                                                <dt className="col-sm-6 text-sm-end">Country:</dt>
                                                                <dd className="col-sm-6">{location.country}</dd>
                                                                <dt className="col-sm-6 text-sm-end">City:</dt>
                                                                <dd className="col-sm-6">{location.city}</dd>
                                                                <dt className="col-sm-6 text-sm-end">State:</dt>
                                                                <dd className="col-sm-6">{location.state}</dd>
                                                                <dt className="col-sm-6 text-sm-end">Address line 1:</dt>
                                                                <dd className="col-sm-6">{address1}</dd>
                                                                <dt className="col-sm-6 text-sm-end">Address line 2:</dt>
                                                                <dd className="col-sm-6">{address2}</dd>
                                                                <dt className="col-sm-6 text-sm-end">Zip code:</dt>
                                                                <dd className="col-sm-6">{zipcode}</dd>
                                                            </dl>
                                                            {/* End Row */}
                                                        </div>
                                                        {/* End Body */}
                                                    </div>
                                                }
                                            </div>
                                            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                                <Button
                                                    color="inherit"
                                                    disabled={activeStep === 0}
                                                    onClick={handleBack}
                                                    sx={{ mr: 1 }}
                                                >
                                                    Back
                                                </Button>
                                                <Box sx={{ flex: '1 1 auto' }} />
                                                <Button onClick={handleNext} sx={{ mr: 1 }}>
                                                    Next
                                                </Button>
                                                {activeStep !== steps.length &&
                                                    (completed[activeStep] ? (
                                                        <Typography variant="caption" sx={{ display: 'inline-block' }}>
                                                            Step {activeStep + 1} already completed
                                                        </Typography>
                                                    ) : (
                                                        <Button onClick={handleComplete}>
                                                            {completedSteps() === totalSteps() - 1
                                                                ? 'Finish'
                                                                : 'Complete Step'}
                                                        </Button>
                                                    ))}
                                            </Box>
                                        </React.Fragment>
                                    )}
                                </div>
                            </Box>
                            {/* End Message Body */}
                        </div>
                    </div>
                    {/* End Row */}
                </form>
                {/* End Step Form */}
            </div>
        </>
    )
}

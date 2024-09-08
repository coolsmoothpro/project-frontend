import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { updatePassword } from '../../Api/auth';
import { SMTP_PORT, SMTP_SERVER } from '../../utils/Constant';

export default function Email() {
    const userData = JSON.parse(localStorage.getItem('user')) || null;

    const [server, setServer] = useState(SMTP_SERVER);
    const [port, setPort] = useState(SMTP_PORT);
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");    
    const [passwordMatched, setPasswordMatched] = useState(false);
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(prevState => !prevState);
    };

    const toggleConfirmPasswordVisibility = () => {
        setIsConfirmPasswordVisible(prevState => !prevState);
    };

    const handlePasswordChange = async () => {
        if (!server) {
            toast.error('Enter the server!');
            return;
        }
        
        if (!port) {
            toast.error('Enter the port!');
            return;
        }

        if (!newPassword) {
            toast.error('Enter a new password!');
            return;
        }

        if (!passwordMatched) {
            return;
        }

        const _id = userData._id;
        const { response } = await updatePassword({server, port, _id, newPassword});

        if (response.data.success) {
            toast.success(response.data.message);
        } else {
            toast.error(response.data.message);
        }
    }

    useEffect(() => {
        if (newPassword !== confirmPassword) setPasswordMatched(false);
        if (newPassword === confirmPassword) setPasswordMatched(true);
    }, [newPassword, confirmPassword])

    return (
        <>
            <div className="content container-fluid">
                <div className="page-header">
                    <div className="row align-items-end">
                        <div className="col-sm mb-2 mb-sm-0">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb breadcrumb-no-gutter">
                                    <li className="breadcrumb-item"><a className="breadcrumb-link" href="javascript:;">Pages</a></li>
                                    <li className="breadcrumb-item"><a className="breadcrumb-link" href="javascript:;">Settings</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Email</li>
                                </ol>
                            </nav>
                            <h1 className="page-header-title">Email</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex align-items-center">
                <div className="col-lg-1"></div>
                <div className="col-lg-10">
                    <div className="d-grid gap-3 gap-lg-5">
                        <div id="passwordSection" className="card">
                            <div className="card-header">
                                <h4 className="card-title">Change your password</h4>
                            </div>
                            <div className="card-body">
                                <form id="changePasswordForm">
                                    <div className="row mb-4">
                                        <label htmlFor="currentPasswordLabel" className="col-sm-3 col-form-label form-label">SMTP Server</label>
                                        <div className="col-sm-9">
                                            <div className="tom-select-custom tom-select-custom-with-tags">
                                                <input value={server} onChange={(e) => setServer(e.target.value)} type="text" className="form-control" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mb-4">
                                        <label htmlFor="currentPasswordLabel" className="col-sm-3 col-form-label form-label">SMTP Port</label>
                                        <div className="col-sm-9">
                                            <div className="tom-select-custom tom-select-custom-with-tags">
                                                <input value={port} onChange={(e) => setPort(e.target.value)} type="text" className="form-control" />
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="row mb-4">
                                        <label htmlFor="newPassword" className="col-sm-3 col-form-label form-label">New password</label>
                                        <div className="col-sm-9">
                                            <div className="input-group input-group-merge" data-hs-validation-validate-class>
                                                <input value={newPassword} onChange={(e) => setNewPassword(e.target.value)} type={isPasswordVisible ? "text" : "password"} className="form-control" name="newPassword" id="newPassword" placeholder="Enter new password" aria-label="Enter new password" />
                                                <a onClick={togglePasswordVisibility} className="js-toggle-password-target-1 input-group-append input-group-text" href="javascript:;">
                                                    <i 
                                                        id="changePassIcon" 
                                                        className={isPasswordVisible ? "bi-eye-slash" : "bi-eye"} 
                                                    />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mb-4">
                                        <label htmlFor="confirmNewPasswordLabel" className="col-sm-3 col-form-label form-label">Confirm new password</label>
                                        <div className="col-sm-9">
                                            <div className="input-group input-group-merge" data-hs-validation-validate-class>
                                                <input value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} type={isConfirmPasswordVisible ? "text" : "password"} className="form-control" name="confirmNewPassword" id="confirmNewPasswordLabel" placeholder="Confirm your new password" aria-label="Confirm your new password" />
                                                <a onClick={toggleConfirmPasswordVisibility} className="js-toggle-password-target-2 input-group-append input-group-text" href="javascript:;">
                                                    <i 
                                                        id="changePassIcon" 
                                                        className={isConfirmPasswordVisible ? "bi-eye-slash" : "bi-eye"} 
                                                    />
                                                </a>
                                            </div>
                                            {!passwordMatched ? <p className="text-danger mb-0">Password does not confirmed</p> : ""}
                                        </div>                                            
                                    </div>
                                    <div className="d-flex justify-content-end">
                                        <button onClick={() => handlePasswordChange()} type="button" className="btn btn-primary">Save Changes</button>
                                    </div>
                                </form>
                            </div>
                        </div>                
                    </div>
                </div>
            </div>            
        </>
    )
}
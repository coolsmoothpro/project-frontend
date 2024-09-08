import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { resetAction, subDomainResetAction } from '../../Api/auth';
import { toast } from 'react-toastify';
import { HOST_ULR, LOGO } from '../../utils/Constant';

export default function ResetPasswordForm() {
    const clientId = (HOST_ULR !== window.location.host) ? window.location.host.replace(`.${HOST_ULR}`, '') : "";
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [passwordMatched, setPasswordMatched] = useState(false);
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);
    const [subDomainStatus, setSubDomainStatus] = useState(false);
    const [subdomain, setSubDomain] = useState(false);

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(prevState => !prevState);
    };

    const toggleConfirmPasswordVisibility = () => {
        setIsConfirmPasswordVisible(prevState => !prevState);
    };

    const navigate = useNavigate();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);

    const token = queryParams.get('token') || null;
    const { email } = JSON.parse(atob(token));

    const resetHandle = async (event) => {
        event.preventDefault();

        if (!passwordMatched) return;

        if (subDomainStatus) {
            const { response } = await subDomainResetAction({ subdomain, email, password })
            
            if (response.data.success) {
                toast.success(response.data.message);
                navigate("/login");
            } else {
                toast.error(response.data.message);
            }
        } else {
            const { response } = await resetAction({ email, password })
            
            if (response.data.success) {
                toast.success(response.data.message);
                navigate("/login");
            } else {
                toast.error(response.data.message);
            }
        }
    };    

    useEffect(() => {
        if (password !== confirmPassword) setPasswordMatched(false);
        if (password === confirmPassword) setPasswordMatched(true);

    }, [password, confirmPassword]);

    useEffect(() => {
        
        if (clientId) {
            setSubDomainStatus(true);
            setSubDomain(clientId);
        } else {
            setSubDomainStatus(false);
        }

    }, []);

    return (
        <>
            <main id="content" role="main" className="main">
                <div className="container py-5 py-sm-7">
                    <a className="d-flex justify-content-center mb-5" href="javascript:;">
                        <img className="zi-2" src={LOGO} alt="Image Description" style={{ width: '8rem' }} />
                    </a>
                    <div className="mx-auto" style={{ maxWidth: '30rem' }}>
                        {/* Card */}
                        <div className="card card-lg mb-5">
                            <div className="card-body">
                                {/* Form */}
                                <form className="js-validate needs-validation" noValidate onSubmit={(e) => resetHandle(e)}>                                    
                                    <div className="mb-4">                             
                                        <label className="form-label" htmlFor="signinSrEmail">Password</label>           
                                        <div className="input-group input-group-merge" data-hs-validation-validate-class>
                                            <input value={password} onChange={(event) => setPassword(event.target.value)} type={isPasswordVisible ? "text" : "password"} className="js-toggle-password form-control form-control-lg" />
                                            <a onClick={togglePasswordVisibility} id="changePassTarget" className="input-group-append input-group-text" href="javascript:;">
                                                <i 
                                                    id="changePassIcon" 
                                                    className={isPasswordVisible ? "bi-eye-slash" : "bi-eye"} 
                                                />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="mb-4">
                                        <label className="form-label" htmlFor="signinSrEmail">Confirm Password</label>           
                                        <div className="input-group input-group-merge" data-hs-validation-validate-class>
                                            <input value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} type={isConfirmPasswordVisible ? "text" : "password"} className="js-toggle-password form-control form-control-lg" />
                                            <a onClick={toggleConfirmPasswordVisibility} id="changePassTarget" className="input-group-append input-group-text" href="javascript:;">
                                                <i 
                                                    id="changePassIcon" 
                                                    className={isConfirmPasswordVisible ? "bi-eye-slash" : "bi-eye"} 
                                                />
                                            </a>
                                        </div>
                                        {!passwordMatched ? <p className="text-danger mb-0">Password does not confirmed</p> : ""}
                                    </div>
                                    <div className="d-grid">
                                        <button type="submit" className="btn btn-primary btn-lg">Reset</button>
                                    </div>
                                </form>
                                {/* End Form */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Content */}
            </main>
        </>
    )
}

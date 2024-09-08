import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { setUser } from '../../Store/Reducers/UserSlice';
import { loginAction, subDomainLoginAction } from '../../Api/auth';
import { toast } from 'react-toastify';
import { BASE_ULR, HOST_IP, HOST_ULR, LOGO } from '../../utils/Constant';

export default function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [subdomain, setSubDomain] = useState("");
    const [subDomainStatus, setSubDomainStatus] = useState(false);
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(prevState => !prevState);
    };

    const toggleConfirmPasswordVisibility = () => {
        setIsConfirmPasswordVisible(prevState => !prevState);
    };

    const goToPage = (page) => {
        navigate(page);
    }

    const loginHandle = async (event) => {
        event.preventDefault();

        if (subDomainStatus) {
            const { response, token } = await subDomainLoginAction({ email, password, subdomain });

            if (token !== undefined) {
                dispatch(setUser(response.data.user));
                
                const subdomain = (HOST_ULR !== window.location.host) ? window.location.host.replace(`.${HOST_ULR}`, '') : "";
                if (subdomain) localStorage.setItem('subdomain', subdomain);

                navigate("/projects-overview");

                setSubDomainStatus(false);

            } else {
                toast.error("Unauthorized user!");
            }
        } else {
            const { response, token } = await loginAction({ email, password });

            if (token !== undefined) {
                dispatch(setUser(response.data.user));

                navigate("/");
            } else {
                toast.error("Unauthorized user!");
            }
        }        
    };
    
    useEffect(() => {
        const host = window.location.host;
        let prefix = null;
        
        if (host !== HOST_IP && host !== HOST_ULR) {
            prefix = host.replace(`.${HOST_ULR}`, '');
        }
        
        if (prefix) {
            setSubDomainStatus(true);
            setSubDomain(prefix);
        } else {
            setSubDomainStatus(false);
        }

    }, [navigate]);

    return (
        <>
            <main id="content" role="main" className="main">
                <div className="position-fixed top-0 end-0 start-0 bg-img-start" style={{ height: '32rem', backgroundImage: 'url(./assets/svg/components/card-6.svg)' }}>
                    {/* Shape */}
                    <div className="shape shape-bottom zi-1">
                        <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 1921 273">
                            <polygon fill="#fff" points="0,273 1921,273 1921,0 " />
                        </svg>
                    </div>
                    {/* End Shape */}
                </div>
                {/* Content */}
                <div className="container py-5 py-sm-7">
                    <a className="d-flex justify-content-center mb-5" href="javascript:;">
                        <img className="zi-2" src={LOGO} alt="Image Description" style={{ width: '8rem' }} />
                    </a>
                    <div className="mx-auto" style={{ maxWidth: '30rem' }}>
                        {/* Card */}
                        <div className="card card-lg mb-5">
                            <div className="card-body">
                                {/* Form */}
                                <form className="js-validate needs-validation" noValidate onSubmit={(e) => loginHandle(e)}>
                                    <div className="text-center">
                                        <div className="mb-5">
                                            <h1 className="display-5">Sign in</h1>
                                            <p>Don't have an account yet? <a className="link" onClick={() => goToPage("/sign-up")} href='javascript:;'>Sign up here</a></p>
                                        </div>
                                    </div>
                                    {/* Form */}
                                    <div className="mb-4">
                                        <label className="form-label" htmlFor="signinSrEmail">Your email</label>
                                        <input onChange={(event) => setEmail(event.target.value)} type="email" className="form-control form-control-lg" name="email" id="signinSrEmail" tabIndex={1} placeholder="email@address.com" aria-label="email@address.com" required />
                                        <span className="invalid-feedback">Please enter a valid email address.</span>
                                    </div>
                                    {/* End Form */}
                                    {/* Form */}
                                    <div className="mb-4">
                                        <label className="form-label w-100" htmlFor="signupSrPassword" tabIndex={0}>
                                            <span className="d-flex justify-content-between align-items-center">
                                                <span>Password</span>
                                                <a className="form-label-link mb-0" onClick={() => goToPage('/reset-password')}>Forgot Password?</a>
                                            </span>
                                        </label>
                                        <div className="input-group input-group-merge" data-hs-validation-validate-class>
                                            <input onChange={(event) => setPassword(event.target.value)} type={isPasswordVisible ? "text" : "password"} className="js-toggle-password form-control form-control-lg" name="password" id="signupSrPassword" placeholder="password required" aria-label="8+ characters required" required minLength={8}  />
                                            <a onClick={togglePasswordVisibility} className="js-toggle-password-target-1 input-group-append input-group-text" href="javascript:;">
                                                <i 
                                                    id="changePassIcon" 
                                                    className={isPasswordVisible ? "bi-eye-slash" : "bi-eye"} 
                                                />
                                            </a>
                                        </div>
                                        <span className="invalid-feedback">Please enter a valid password.</span>
                                    </div>
                                    {/* End Form */}
                                    {/* Form Check */}
                                    <div className="form-check mb-4">
                                        <input className="form-check-input" type="checkbox" defaultValue id="termsCheckbox" />
                                        <label className="form-check-label" htmlFor="termsCheckbox">
                                            Remember me
                                        </label>
                                    </div>
                                    {/* End Form Check */}
                                    <div className="d-grid">
                                        <button type="submit" className="btn btn-primary btn-lg">Sign in</button>
                                    </div>
                                </form>
                                {/* End Form */}
                            </div>
                        </div>
                        {/* End Card */}
                        {/* Footer */}
                        <div className="position-relative text-center zi-1">
                            <small className="text-cap text-body mb-4">Trusted by the world's best teams</small>
                            <div className="w-85 mx-auto">
                                <div className="row justify-content-between">
                                    <div className="col">
                                        <img className="img-fluid" src="./assets/svg/brands/gitlab-gray.svg" alt="Logo" />
                                    </div>
                                    {/* End Col */}
                                    <div className="col">
                                        <img className="img-fluid" src="./assets/svg/brands/fitbit-gray.svg" alt="Logo" />
                                    </div>
                                    {/* End Col */}
                                    <div className="col">
                                        <img className="img-fluid" src="./assets/svg/brands/flow-xo-gray.svg" alt="Logo" />
                                    </div>
                                    {/* End Col */}
                                    <div className="col">
                                        <img className="img-fluid" src="./assets/svg/brands/layar-gray.svg" alt="Logo" />
                                    </div>
                                    {/* End Col */}
                                </div>
                                {/* End Row */}
                            </div>
                        </div>
                        {/* End Footer */}
                    </div>
                </div>
                {/* End Content */}
            </main>
        </>
    )
}

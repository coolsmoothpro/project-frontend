import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { forgetPassword } from '../../Api/auth';

export default function ResetPassword() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");

    const handleforgetPassword = async () => {
        const { response } = await forgetPassword({email});

        if (response.data.success) {
            toast.success("Email has been sent!");
        } else {
            toast.error(response.data.message);
        }
    }
    
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
                    <a className="d-flex justify-content-center mb-5" href="./index.html">
                        <img className="zi-2" src="./assets/svg/logos/logo.svg" alt="Image Description" style={{ width: '8rem' }} />
                    </a>
                    <div className="mx-auto" style={{ maxWidth: '30rem' }}>
                        {/* Card */}
                        <div className="card card-lg mb-5">
                            <div className="card-body">
                                {/* Form */}
                                <form className="js-validate needs-validation" noValidate>
                                    <div className="text-center">
                                        <div className="mb-5">
                                            <h1 className="display-5">Forgot password?</h1>
                                            <p>Enter the email address you used when you joined and we'll send you instructions to reset your password.</p>
                                        </div>
                                    </div>
                                    {/* Form */}
                                    <div className="mb-4">
                                        <label className="form-label" htmlFor="resetPasswordSrEmail" tabIndex={0}>Your email</label>
                                        <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" className="form-control form-control-lg" name="email" id="resetPasswordSrEmail" tabIndex={1} placeholder="Enter your email address" aria-label="Enter your email address" required />
                                        <span className="invalid-feedback">Please enter a valid email address.</span>
                                    </div>
                                    {/* End Form */}
                                    <div className="d-grid gap-2">
                                        <button onClick={() => handleforgetPassword()} type="button" className="btn btn-primary btn-lg">Submit</button>
                                        <div className="text-center">
                                            <a className="btn btn-link" onClick={() => navigate("/login")}>
                                                <i className="bi-chevron-left" /> Back to Sign in
                                            </a>
                                        </div>
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

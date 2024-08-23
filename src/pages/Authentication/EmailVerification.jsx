import React from 'react'

export default function EmailVerification() {
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
                            <div className="card-body text-center">
                                <div className="mb-4">
                                    <img className="avatar avatar-xxl avatar-4x3" src="./assets/svg/illustrations/oc-email-verification.svg" alt="Image Description" data-hs-theme-appearance="default" />
                                    <img className="avatar avatar-xxl avatar-4x3" src="./assets/svg/illustrations-light/oc-email-verification.svg" alt="Image Description" data-hs-theme-appearance="dark" />
                                </div>
                                <h1 className="display-5">Verify your email</h1>
                                <p className="mb-1">We've sent a link to your email address:</p>
                                <span className="d-block text-dark fw-semibold mb-1">mark@gmail.com</span>
                                <p>Please follow the link inside to continue.</p>
                                <div className="mt-4 mb-3">
                                    <a className="btn btn-primary" href="./index.html">Skip now</a>
                                </div>
                                <p>Didn't receive an email? <a href="#">Resend</a></p>
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

import React from 'react'

export default function Error500() {
    return (
        <>
            <main id="content" role="main" className="main">
                {/* Content */}
                <div className="container">
                    <a className="position-absolute top-0 start-0 end-0 py-4" href="./index.html">
                        <img className="avatar avatar-xl avatar-4x3 avatar-centered" src="./assets/svg/logos/logo.svg" alt="Image Description" data-hs-theme-appearance="default" />
                        {/* <img className="avatar avatar-xl avatar-4x3 avatar-centered" src="./assets/svg/logos-light/logo.svg" alt="Image Description" data-hs-theme-appearance="dark" /> */}
                    </a>
                    <div className="footer-height-offset d-flex justify-content-center align-items-center flex-column">
                        <div className="row justify-content-center align-items-sm-center w-100">
                            <div className="col-9 col-sm-6 col-lg-4">
                                <div className="text-center text-sm-end me-sm-4 mb-5 mb-sm-0">
                                    <img className="img-fluid" src="./assets/svg/illustrations/oc-thinking.svg" alt="Image Description" data-hs-theme-appearance="default" />
                                    {/* <img className="img-fluid" src="./assets/svg/illustrations-light/oc-thinking.svg" alt="Image Description" data-hs-theme-appearance="dark" /> */}
                                </div>
                            </div>
                            {/* End Col */}
                            <div className="col-sm-6 col-lg-4 text-center text-sm-start">
                                <h1 className="display-1 mb-0">500</h1>
                                <p className="lead">The server encountered an internal error or misconfiguration and was unable to complete your request.</p>
                                <a className="btn btn-primary" href="./error-500.html">Reload page</a>
                            </div>
                            {/* End Col */}
                        </div>
                        {/* End Row */}
                    </div>
                </div>
                {/* End Content */}
                {/* Footer */}
                <div className="footer text-center">
                    <ul className="list-inline list-separator">
                        <li className="list-inline-item">
                            <a className="list-separator-link" href="#">Front Support</a>
                        </li>
                        <li className="list-inline-item">
                            <a className="list-separator-link" href="#">Front Status</a>
                        </li>
                        <li className="list-inline-item">
                            <a className="list-separator-link" href="#">Get Help</a>
                        </li>
                    </ul>
                </div>
                {/* End Footer */}
            </main>
        </>
    )
}

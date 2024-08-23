import React from 'react'

export default function FooterOfPage() {
    return (
        <div className="footer">
            <div className="row justify-content-between align-items-center">
                <div className="col">
                    <p className="fs-6 mb-0">© Front. <span className="d-none d-sm-inline-block">2022 Htmlstream.</span></p>
                </div>
                {/* End Col */}
                <div className="col-auto">
                    <div className="d-flex justify-content-end">
                        {/* List Separator */}
                        <ul className="list-inline list-separator">
                            <li className="list-inline-item">
                                <a className="list-separator-link" href="#">FAQ</a>
                            </li>
                            <li className="list-inline-item">
                                <a className="list-separator-link" href="#">License</a>
                            </li>
                            <li className="list-inline-item">
                                {/* Keyboard Shortcuts Toggle */}
                                <button className="btn btn-ghost-secondary btn btn-icon btn-ghost-secondary rounded-circle" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasKeyboardShortcuts" aria-controls="offcanvasKeyboardShortcuts">
                                    <i className="bi-command" />
                                </button>
                                {/* End Keyboard Shortcuts Toggle */}
                            </li>
                        </ul>
                        {/* End List Separator */}
                    </div>
                </div>
                {/* End Col */}
            </div>
            {/* End Row */}
        </div>
    )
}

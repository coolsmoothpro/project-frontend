import React from 'react'

export default function Invoice() {
    return (
        <>
            <div className="content container-fluid">
                {/* Page Header */}
                <div className="page-header d-print-none">
                    <div className="row align-items-end">
                        <div className="col-sm mb-2 mb-sm-0">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb breadcrumb-no-gutter">
                                    <li className="breadcrumb-item"><a className="breadcrumb-link" href="javascript:;">Pages</a></li>
                                    <li className="breadcrumb-item"><a className="breadcrumb-link" href="javascript:;">Account</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Invoice</li>
                                </ol>
                            </nav>
                            <h1 className="page-header-title">Invoice</h1>
                        </div>
                        {/* End Col */}
                        <div className="col-sm-auto">
                            <a className="btn btn-primary" href="./apps-invoice-generator.html">
                                <i className="bi-plus-lg me-1" /> New Invoice
                            </a>
                        </div>
                        {/* End Col */}
                    </div>
                    {/* End Row */}
                </div>
                {/* End Page Header */}
                <div className="row">
                    <div className="col-lg-8 mb-5 mb-lg-0">
                        {/* Card */}
                        <div className="card card-lg mb-5">
                            <div className="card-body">
                                <div className="row justify-content-lg-between">
                                    <div className="col-sm order-2 order-sm-1 mb-3">
                                        <div className="mb-2">
                                            <img className="avatar" src="./assets/svg/logos/logo-short.svg" alt="Logo" />
                                        </div>
                                        <h1 className="h2 text-primary">Front Inc.</h1>
                                    </div>
                                    {/* End Col */}
                                    <div className="col-sm-auto order-1 order-sm-2 text-sm-end mb-3">
                                        <div className="mb-3">
                                            <h2>Invoice #</h2>
                                            <span className="d-block">3682303</span>
                                        </div>
                                        <address className="text-dark">
                                            45 Roker Terrace<br />
                                            Latheronwheel<br />
                                            KW5 8NW, London<br />
                                            United Kingdom
                                        </address>
                                    </div>
                                    {/* End Col */}
                                </div>
                                {/* End Row */}
                                <div className="row justify-content-md-between mb-3">
                                    <div className="col-md">
                                        <h4>Bill to:</h4>
                                        <h4>Sara Williams</h4>
                                        <address>
                                            280 Suzanne Throughway,<br />
                                            Breannabury, OR 45801,<br />
                                            United States
                                        </address>
                                    </div>
                                    {/* End Col */}
                                    <div className="col-md text-md-end">
                                        <dl className="row">
                                            <dt className="col-sm-8">Invoice date:</dt>
                                            <dd className="col-sm-4">03/10/2018</dd>
                                        </dl>
                                        <dl className="row">
                                            <dt className="col-sm-8">Due date:</dt>
                                            <dd className="col-sm-4">03/11/2018</dd>
                                        </dl>
                                    </div>
                                    {/* End Col */}
                                </div>
                                {/* End Row */}
                                {/* Table */}
                                <div className="table-responsive">
                                    <table className="table table-borderless table-nowrap table-align-middle">
                                        <thead className="thead-light">
                                            <tr>
                                                <th>Item</th>
                                                <th>Quantity</th>
                                                <th>Rate</th>
                                                <th className="table-text-end">Amount</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th>Design UX and UI</th>
                                                <td>1</td>
                                                <td>5</td>
                                                <td className="table-text-end">$500</td>
                                            </tr>
                                            <tr>
                                                <th>Web project</th>
                                                <td>1</td>
                                                <td>24</td>
                                                <td className="table-text-end">$1250</td>
                                            </tr>
                                            <tr>
                                                <th>SEO</th>
                                                <td>1</td>
                                                <td>6</td>
                                                <td className="table-text-end">$2000</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                {/* End Table */}
                                <hr className="my-5" />
                                <div className="row justify-content-md-end mb-3">
                                    <div className="col-md-8 col-lg-7">
                                        <dl className="row text-sm-end">
                                            <dt className="col-sm-6">Subtotal:</dt>
                                            <dd className="col-sm-6">$2750.00</dd>
                                            <dt className="col-sm-6">Total:</dt>
                                            <dd className="col-sm-6">$2750.00</dd>
                                            <dt className="col-sm-6">Tax:</dt>
                                            <dd className="col-sm-6">$39.00</dd>
                                            <dt className="col-sm-6">Amount paid:</dt>
                                            <dd className="col-sm-6">$2789.00</dd>
                                            <dt className="col-sm-6">Due balance:</dt>
                                            <dd className="col-sm-6">$0.00</dd>
                                        </dl>
                                        {/* End Row */}
                                    </div>
                                </div>
                                {/* End Row */}
                                <div className="mb-3">
                                    <h3>Thank you!</h3>
                                    <p>If you have any questions concerning this invoice, use the following contact information:</p>
                                </div>
                                <p className="small mb-0">© 2021 Htmlstream.</p>
                            </div>
                        </div>
                        {/* End Card */}
                        {/* Footer */}
                        <div className="d-flex justify-content-end d-print-none gap-3">
                            <a className="btn btn-white" href="#">
                                <i className="bi-file-earmark-arrow-down me-1" /> PDF
                            </a>
                            <a className="btn btn-primary" href="javascript:;" onclick="window.print(); return false;">
                                <i className="bi-printer me-1" /> Print details
                            </a>
                        </div>
                        {/* End Footer */}
                    </div>
                    <div className="col-lg-4">
                        {/* Card */}
                        <div className="card d-print-none">
                            {/* Header */}
                            <div className="card-header card-header-content-between">
                                <h4 className="card-header-title">History</h4>
                                {/* Unfold */}
                                <div className="hs-unfold">
                                    <button type="button" className="btn btn-icon btn-sm btn-ghost-secondary rounded-circle" id="reportsOverviewDropdown1" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="bi-three-dots-vertical" />
                                    </button>
                                    <div className="dropdown-menu dropdown-menu-right mt-1">
                                        <span className="dropdown-header">Settings</span>
                                        <a className="dropdown-item" href="#">
                                            <i className="bi-share-fill dropdown-item-icon" /> Share reports
                                        </a>
                                        <a className="dropdown-item" href="#">
                                            <i className="bi-download dropdown-item-icon" /> Download
                                        </a>
                                        <a className="dropdown-item" href="#">
                                            <i className="bi-alt dropdown-item-icon" /> Connect other apps
                                        </a>
                                        <div className="dropdown-divider" />
                                        <span className="dropdown-header">Feedback</span>
                                        <a className="dropdown-item" href="#">
                                            <i className="bi-chat-left-dots dropdown-item-icon" /> Report
                                        </a>
                                    </div>
                                </div>
                                {/* End Unfold */}
                            </div>
                            {/* End Header */}
                            {/* Body */}
                            <div className="card-body">
                                <span className="h1 d-block mb-3">175 <span className="h4 text-body">Invoices</span></span>
                                {/* Progress */}
                                <div className="progress rounded-pill">
                                    <div className="progress-bar" role="progressbar" style={{ width: '76%' }} aria-valuenow={76} aria-valuemin={0} aria-valuemax={100} />
                                    <div className="progress-bar bg-warning" role="progressbar" style={{ width: '8%' }} aria-valuenow={8} aria-valuemin={0} aria-valuemax={100} />
                                    <div className="progress-bar bg-danger" role="progressbar" style={{ width: '2%' }} aria-valuenow={2} aria-valuemin={0} aria-valuemax={100} />
                                </div>
                                {/* End Progress */}
                            </div>
                            {/* End Body */}
                            <hr className="my-0" />
                            {/* Body */}
                            <div className="card-body">
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
                                    <ul className="nav nav-segment nav-fill" id="invoicesStatusTab" role="tablist">
                                        <li className="nav-item">
                                            <a className="nav-link active" id="paid-tab" data-bs-toggle="tab" href="#paid" role="tab" aria-controls="paid" aria-selected="true">
                                                <span className="legend-indicator bg-primary" />Paid (162)
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" id="pending-tab" data-bs-toggle="tab" href="#pending" role="tab" aria-controls="pending" aria-selected="true">
                                                <span className="legend-indicator bg-warning" />Pending (10)
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" id="declined-tab" data-bs-toggle="tab" href="#declined" role="tab" aria-controls="declined" aria-selected="true">
                                                <span className="legend-indicator bg-danger" />Declined (3)
                                            </a>
                                        </li>
                                    </ul>
                                    {/* End Nav */}
                                </div>
                                {/* End Nav Scroller */}
                            </div>
                            {/* End Body */}
                            <hr className="my-0" />
                            {/* Body */}
                            <div className="card-body card-body-height">
                                {/* Tab Content */}
                                <div className="tab-content" id="invoicesStatusTabContent">
                                    <div className="tab-pane fade show active" id="paid" role="tabpanel" aria-labelledby="paid-tab">
                                        {/* List Group */}
                                        <ul className="list-group list-group-flush list-group-no-gutters">
                                            {/* List Item */}
                                            <li className="list-group-item">
                                                <div className="mb-1">
                                                    <h5 className="mb-0">Update subscription method</h5>
                                                    <span className="fs-5">Rocket Science Group</span>
                                                </div>
                                                <div className="d-flex justify-content-between">
                                                    <span className="h4 text-primary">$530.00 USD</span>
                                                    <span className="fs-5">25 May, 2020</span>
                                                </div>
                                            </li>
                                            {/* End List Item */}
                                            {/* List Item */}
                                            <li className="list-group-item">
                                                <div className="mb-1">
                                                    <h5 className="mb-0">Develop Slack mobile app</h5>
                                                    <span className="fs-5">Slack Technologies</span>
                                                </div>
                                                <div className="d-flex justify-content-between">
                                                    <span className="h4 text-primary">$2500.00 USD</span>
                                                    <span className="fs-5">25 May, 2020</span>
                                                </div>
                                            </li>
                                            {/* End List Item */}
                                            {/* List Item */}
                                            <li className="list-group-item">
                                                <div className="mb-1">
                                                    <h5 className="mb-0">Create a new database for Webdev</h5>
                                                    <span className="fs-5">Google LLC</span>
                                                </div>
                                                <div className="d-flex justify-content-between">
                                                    <span className="h4 text-primary">$7000.00 USD</span>
                                                    <span className="fs-5">10 May, 2020</span>
                                                </div>
                                            </li>
                                            {/* End List Item */}
                                            {/* List Item */}
                                            <li className="list-group-item">
                                                <div className="mb-1">
                                                    <h5 className="mb-0">The Hub project</h5>
                                                    <span className="fs-5">HubSpot</span>
                                                </div>
                                                <div className="d-flex justify-content-between">
                                                    <span className="h4 text-primary">$55000.00 USD</span>
                                                    <span className="fs-5">12 June, 2020</span>
                                                </div>
                                            </li>
                                            {/* End List Item */}
                                            {/* List Item */}
                                            <li className="list-group-item">
                                                <div className="mb-1">
                                                    <h5 className="mb-0">Binance-chain</h5>
                                                    <span className="fs-5">FrontApp</span>
                                                </div>
                                                <div className="d-flex justify-content-between">
                                                    <span className="h4 text-primary">$400.00 USD</span>
                                                    <span className="fs-5">01 June, 2020</span>
                                                </div>
                                            </li>
                                            {/* End List Item */}
                                        </ul>
                                        {/* End List Group */}
                                    </div>
                                    <div className="tab-pane fade" id="pending" role="tabpanel" aria-labelledby="pending-tab">
                                        {/* List Group */}
                                        <ul className="list-group list-group-flush list-group-no-gutters">
                                            {/* List Item */}
                                            <li className="list-group-item">
                                                <div className="mb-1">
                                                    <h5 className="mb-0">Marketing campaign for Slack</h5>
                                                    <span className="fs-5">Slack Technologies</span>
                                                </div>
                                                <div className="d-flex justify-content-between">
                                                    <span className="h4 text-primary">$2500.00 USD</span>
                                                    <span className="fs-5">15 May, 2020</span>
                                                </div>
                                            </li>
                                            {/* End List Item */}
                                            {/* List Item */}
                                            <li className="list-group-item">
                                                <div className="mb-1">
                                                    <h5 className="mb-0">Android app</h5>
                                                    <span className="fs-5">Htmlstream Ltd.</span>
                                                </div>
                                                <div className="d-flex justify-content-between">
                                                    <span className="h4 text-primary">$7000.00 USD</span>
                                                    <span className="fs-5">14 May, 2020</span>
                                                </div>
                                            </li>
                                            {/* End List Item */}
                                            {/* List Item */}
                                            <li className="list-group-item">
                                                <div className="mb-1">
                                                    <h5 className="mb-0">Building startup for brand</h5>
                                                    <span className="fs-5">Htmlstream Ltd.</span>
                                                </div>
                                                <div className="d-flex justify-content-between">
                                                    <span className="h4 text-primary">$530.00 USD</span>
                                                    <span className="fs-5">15 May, 2020</span>
                                                </div>
                                            </li>
                                            {/* End List Item */}
                                            {/* List Item */}
                                            <li className="list-group-item">
                                                <div className="mb-1">
                                                    <h5 className="mb-0">Massive dynamic project</h5>
                                                    <span className="fs-5">Microsoft Corporation</span>
                                                </div>
                                                <div className="d-flex justify-content-between">
                                                    <span className="h4 text-primary">$55000.00 USD</span>
                                                    <span className="fs-5">14 Apr, 2020</span>
                                                </div>
                                            </li>
                                            {/* End List Item */}
                                        </ul>
                                        {/* End List Group */}
                                    </div>
                                    <div className="tab-pane fade" id="declined" role="tabpanel" aria-labelledby="declined-tab">
                                        {/* List Group */}
                                        <ul className="list-group list-group-flush list-group-no-gutters">
                                            {/* List Item */}
                                            <li className="list-group-item">
                                                <div className="mb-1">
                                                    <h5 className="mb-0">Set up a datatable for Booking.com</h5>
                                                    <span className="fs-5">United States-based Booking Holdings</span>
                                                </div>
                                                <div className="d-flex justify-content-between">
                                                    <span className="h4 text-primary">$7000.00 USD</span>
                                                    <span className="fs-5">05 May, 2020</span>
                                                </div>
                                            </li>
                                            {/* End List Item */}
                                            {/* List Item */}
                                            <li className="list-group-item">
                                                <div className="mb-1">
                                                    <h5 className="mb-0">Redesigning the Spotify main page</h5>
                                                    <span className="fs-5">Spotify Technology S.A.</span>
                                                </div>
                                                <div className="d-flex justify-content-between">
                                                    <span className="h4 text-primary">$530.00 USD</span>
                                                    <span className="fs-5">04 May, 2020</span>
                                                </div>
                                            </li>
                                            {/* End List Item */}
                                            {/* List Item */}
                                            <li className="list-group-item">
                                                <div className="mb-1">
                                                    <h5 className="mb-0">Prosperops</h5>
                                                    <span className="fs-5">Prosperops</span>
                                                </div>
                                                <div className="d-flex justify-content-between">
                                                    <span className="h4 text-primary">$2500.00 USD</span>
                                                    <span className="fs-5">15 Apr, 2020</span>
                                                </div>
                                            </li>
                                            {/* End List Item */}
                                        </ul>
                                        {/* End List Group */}
                                    </div>
                                </div>
                                {/* End Tab Content */}
                            </div>
                            {/* End Body */}
                            {/* Card Footer */}
                            <a className="card-footer text-center" href="#">
                                View all invoices <i className="bi-chevron-right" />
                            </a>
                            {/* End Card Footer */}
                        </div>
                        {/* End Card */}
                    </div>
                </div>
            </div>
        </>
    )
}

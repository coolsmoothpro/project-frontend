import React from 'react'

export default function OrderDetails() {
    return (
        <>
            <div className="content container-fluid">
                {/* Page Header */}
                <div className="page-header d-print-none">
                    <div className="row align-items-center">
                        <div className="col-sm mb-2 mb-sm-0">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb breadcrumb-no-gutter">
                                    <li className="breadcrumb-item"><a className="breadcrumb-link" href="./ecommerce-orders.html">Orders</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Order details</li>
                                </ol>
                            </nav>
                            <div className="d-sm-flex align-items-sm-center">
                                <h1 className="page-header-title">Order #32543</h1>
                                <span className="badge bg-soft-success text-success ms-sm-3">
                                    <span className="legend-indicator bg-success" />Paid
                                </span>
                                <span className="badge bg-soft-info text-info ms-2 ms-sm-3">
                                    <span className="legend-indicator bg-info" />Fulfilled
                                </span>
                                <span className="ms-2 ms-sm-3">
                                    <i className="bi-calendar-week" /> Aug 17, 2020, 5:48 (ET)
                                </span>
                            </div>
                            <div className="mt-2">
                                <div className="d-flex gap-2">
                                    <a className="text-body me-3" href="javascript:;" onclick="window.print(); return false;">
                                        <i className="bi-printer me-1" /> Print order
                                    </a>
                                    {/* Dropdown */}
                                    <div className="dropdown">
                                        <a className="text-body" href="javascript:;" id="moreOptionsDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                            More options <i className="bi-chevron-down" />
                                        </a>
                                        <div className="dropdown-menu mt-1" aria-labelledby="moreOptionsDropdown">
                                            <a className="dropdown-item" href="#">
                                                <i className="bi-clipboard dropdown-item-icon" /> Duplicate
                                            </a>
                                            <a className="dropdown-item" href="#">
                                                <i className="bi-x dropdown-item-icon" /> Cancel order
                                            </a>
                                            <a className="dropdown-item" href="#">
                                                <i className="bi-archive dropdown-item-icon" /> Archive
                                            </a>
                                            <a className="dropdown-item" href="#">
                                                <i className="bi-eye dropdown-item-icon" /> View order status page
                                            </a>
                                            <a className="dropdown-item" href="#">
                                                <i className="bi-pencil dropdown-item-icon" /> Edit order
                                            </a>
                                        </div>
                                    </div>
                                    {/* End Dropdown */}
                                </div>
                            </div>
                        </div>
                        {/* End Col */}
                        <div className="col-sm-auto">
                            <div className="d-flex gap-2">
                                <button type="button" className="btn btn-ghost-secondary btn-icon btn-sm rounded-circle" data-bs-toggle="tooltip" data-bs-placement="right" title="Previous order">
                                    <i className="bi-arrow-left" />
                                </button>
                                <button type="button" className="btn btn-ghost-secondary btn-icon btn-sm rounded-circle" data-bs-toggle="tooltip" data-bs-placement="right" title="Next order">
                                    <i className="bi-arrow-right" />
                                </button>
                            </div>
                        </div>
                        {/* End Col */}
                    </div>
                    {/* End Row */}
                </div>
                {/* End Page Header */}
                <div className="row">
                    <div className="col-lg-8 mb-3 mb-lg-0">
                        {/* Card */}
                        <div className="card mb-3 mb-lg-5">
                            {/* Header */}
                            <div className="card-header card-header-content-between">
                                <h4 className="card-header-title">Order details <span className="badge bg-soft-dark text-dark rounded-circle ms-1">4</span></h4>
                                <a className="link" href="javascript:;">Edit</a>
                            </div>
                            {/* End Header */}
                            {/* Body */}
                            <div className="card-body">
                                {/* Media */}
                                <div className="d-flex">
                                    <div className="flex-shrink-0">
                                        <div className="avatar avatar-xl">
                                            <img className="img-fluid" src="./assets/img/400x400/img26.jpg" alt="Image Description" />
                                        </div>
                                    </div>
                                    <div className="flex-grow-1 ms-3">
                                        <div className="row">
                                            <div className="col-md-6 mb-3 mb-md-0">
                                                <a className="h5 d-block" href="./ecommerce-product-details.html">Topman shoe in green</a>
                                                <div className="fs-6 text-body">
                                                    <span>Gender:</span>
                                                    <span className="fw-semibold">Women</span>
                                                </div>
                                                <div className="fs-6 text-body">
                                                    <span>Color:</span>
                                                    <span className="fw-semibold">Green</span>
                                                </div>
                                                <div className="fs-6 text-body">
                                                    <span>Size:</span>
                                                    <span className="fw-semibold">UK 7</span>
                                                </div>
                                            </div>
                                            {/* End Col */}
                                            <div className="col col-md-2 align-self-center">
                                                <h5>$21.00</h5>
                                            </div>
                                            {/* End Col */}
                                            <div className="col col-md-2 align-self-center">
                                                <h5>2</h5>
                                            </div>
                                            {/* End Col */}
                                            <div className="col col-md-2 align-self-center text-end">
                                                <h5>$42.00</h5>
                                            </div>
                                            {/* End Col */}
                                        </div>
                                        {/* End Row */}
                                    </div>
                                </div>
                                {/* End Media */}
                                <hr />
                                {/* Media */}
                                <div className="d-flex">
                                    <div className="flex-shrink-0">
                                        <div className="avatar avatar-xl">
                                            <img className="img-fluid" src="./assets/img/400x400/img22.jpg" alt="Image Description" />
                                        </div>
                                    </div>
                                    <div className="flex-grow-1 ms-3">
                                        <div className="row">
                                            <div className="col-md-6 mb-3 mb-md-0">
                                                <a className="h5 d-block" href="./ecommerce-product-details.html">Office Notebook</a>
                                                <div className="fs-6 text-body">
                                                    <span>Color:</span>
                                                    <span className="fw-semibold">Gray</span>
                                                </div>
                                            </div>
                                            {/* End Col */}
                                            <div className="col col-md-2 align-self-center">
                                                <h5>$9</h5>
                                            </div>
                                            {/* End Col */}
                                            <div className="col col-md-2 align-self-center">
                                                <h5>1</h5>
                                            </div>
                                            {/* End Col */}
                                            <div className="col col-md-2 align-self-center text-end">
                                                <h5>$9.00</h5>
                                            </div>
                                            {/* End Col */}
                                        </div>
                                        {/* End Row */}
                                    </div>
                                </div>
                                {/* End Media */}
                                <hr />
                                {/* Media */}
                                <div className="d-flex">
                                    <div className="flex-shrink-0">
                                        <div className="avatar avatar-xl">
                                            <img className="img-fluid" src="./assets/img/400x400/img15.jpg" alt="Image Description" />
                                        </div>
                                    </div>
                                    <div className="flex-grow-1 ms-3">
                                        <div className="row">
                                            <div className="col-md-6 mb-3 mb-md-0">
                                                <a className="h5 d-block" href="./ecommerce-product-details.html">RayBan sunglasses</a>
                                                <div className="fs-6 text-body">
                                                    <span>Gender:</span>
                                                    <span className="fw-semibold">Unisex</span>
                                                </div>
                                                <div className="fs-6 text-body">
                                                    <span>Color:</span>
                                                    <span className="fw-semibold">Black</span>
                                                </div>
                                                <div className="fs-6 text-body">
                                                    <span>Size:</span>
                                                    <span className="fw-semibold">One size</span>
                                                </div>
                                            </div>
                                            {/* End Col */}
                                            <div className="col col-md-2 align-self-center">
                                                <h5>$14.00</h5>
                                            </div>
                                            {/* End Col */}
                                            <div className="col col-md-2 align-self-center">
                                                <h5>1</h5>
                                            </div>
                                            {/* End Col */}
                                            <div className="col col-md-2 align-self-center text-end">
                                                <h5>$14.00</h5>
                                            </div>
                                            {/* End Col */}
                                        </div>
                                        {/* End Row */}
                                    </div>
                                </div>
                                {/* End Media */}
                                <hr />
                                <div className="row justify-content-md-end mb-3">
                                    <div className="col-md-8 col-lg-7">
                                        <dl className="row text-sm-end">
                                            <dt className="col-sm-6">Subtotal:</dt>
                                            <dd className="col-sm-6">$65.00</dd>
                                            <dt className="col-sm-6">Shipping fee:</dt>
                                            <dd className="col-sm-6">$0.00</dd>
                                            <dt className="col-sm-6">Tax:</dt>
                                            <dd className="col-sm-6">$7.00</dd>
                                            <dt className="col-sm-6">Total:</dt>
                                            <dd className="col-sm-6">$65.00</dd>
                                            <dt className="col-sm-6">Amount paid:</dt>
                                            <dd className="col-sm-6">$65.00</dd>
                                        </dl>
                                        {/* End Row */}
                                    </div>
                                    {/* End Col */}
                                </div>
                                {/* End Row */}
                            </div>
                            {/* End Body */}
                        </div>
                        {/* End Card */}
                        {/* Card */}
                        <div className="card">
                            {/* Header */}
                            <div className="card-header">
                                <h4 className="card-header-title">
                                    Shipping activity
                                    <span className="badge bg-soft-dark text-dark ms-1">
                                        <span className="legend-indicator bg-dark" />Marked as fulfilled
                                    </span>
                                </h4>
                            </div>
                            {/* End Header */}
                            {/* Body */}
                            <div className="card-body">
                                {/* Step */}
                                <ul className="step step-icon-xs">
                                    {/* Step Item */}
                                    <li className="step-item">
                                        <div className="step-content-wrapper">
                                            <span className="step-divider">Wednesday, 19 August</span>
                                        </div>
                                    </li>
                                    {/* End Step Item */}
                                    {/* Step Item */}
                                    <li className="step-item">
                                        <div className="step-content-wrapper">
                                            <span className="step-icon step-icon-soft-dark step-icon-pseudo" />
                                            <div className="step-content">
                                                <h5 className="mb-1">
                                                    <a className="text-dark" href="#">Delivered</a>
                                                </h5>
                                                <p className="fs-6 mb-0">4:17 AM</p>
                                            </div>
                                        </div>
                                    </li>
                                    {/* End Step Item */}
                                    {/* Step Item */}
                                    <li className="step-item">
                                        <div className="step-content-wrapper">
                                            <span className="step-icon step-icon-soft-dark step-icon-pseudo" />
                                            <div className="step-content">
                                                <h5 className="mb-1">
                                                    <a className="text-dark" href="#">Out for delivery</a>
                                                </h5>
                                                <p className="fs-6 mb-0">2:38 AM</p>
                                            </div>
                                        </div>
                                    </li>
                                    {/* End Step Item */}
                                    {/* Step Item */}
                                    <li className="step-item">
                                        <div className="step-content-wrapper">
                                            <span className="step-icon step-icon-soft-dark step-icon-pseudo" />
                                            <div className="step-content">
                                                <h5 className="mb-1">
                                                    <a className="text-dark" href="#">Package arrived at the final delivery station</a>
                                                </h5>
                                                <p className="fs-6 mb-0">2:00 AM</p>
                                            </div>
                                        </div>
                                    </li>
                                    {/* End Step Item */}
                                    {/* Step Item */}
                                    <li className="step-item">
                                        <div className="step-content-wrapper">
                                            <span className="step-divider">Tuesday, 18 August</span>
                                        </div>
                                    </li>
                                    {/* End Step Item */}
                                    {/* Step Item */}
                                    <li className="step-item">
                                        <div className="step-content-wrapper">
                                            <span className="step-icon step-icon-soft-dark step-icon-pseudo" />
                                            <div className="step-content">
                                                <h5 className="mb-1">
                                                    <a className="text-dark" href="#">Tracking number</a>
                                                </h5>
                                                <a href="#">3981241023109293</a>
                                                <p className="fs-6 mb-0">6:29 AM</p>
                                            </div>
                                        </div>
                                    </li>
                                    {/* End Step Item */}
                                    {/* Step Item */}
                                    <li className="step-item">
                                        <div className="step-content-wrapper">
                                            <span className="step-icon step-icon-soft-dark step-icon-pseudo" />
                                            <div className="step-content">
                                                <h5 className="mb-1">
                                                    <a className="text-dark" href="#">Package has dispatched</a>
                                                </h5>
                                                <p className="fs-6 mb-0">6:29 AM</p>
                                            </div>
                                        </div>
                                    </li>
                                    {/* End Step Item */}
                                    {/* Step Item */}
                                    <li className="step-item">
                                        <div className="step-content-wrapper">
                                            <span className="step-icon step-icon-soft-dark step-icon-pseudo" />
                                            <div className="step-content">
                                                <h5 className="mb-1">
                                                    <a className="text-dark" href="#">Order was placed</a>
                                                </h5>
                                                <p className="fs-6 mb-0">Order #32543</p>
                                            </div>
                                        </div>
                                    </li>
                                    {/* End Step Item */}
                                </ul>
                                {/* End Step */}
                                <span className="small">Times are shown in the local time zone.</span>
                            </div>
                            {/* End Body */}
                        </div>
                        {/* End Card */}
                    </div>
                    <div className="col-lg-4">
                        {/* Card */}
                        <div className="card">
                            {/* Header */}
                            <div className="card-header">
                                <h4 className="card-header-title">Customer</h4>
                            </div>
                            {/* End Header */}
                            {/* Body */}
                            <div className="card-body">
                                {/* List Group */}
                                <ul className="list-group list-group-flush list-group-no-gutters">
                                    <li className="list-group-item">
                                        <a className="d-flex align-items-center" href="./ecommerce-customer-details.html">
                                            <div className="avatar avatar-circle">
                                                <img className="avatar-img" src="./assets/img/160x160/img10.jpg" alt="Image Description" />
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <span className="text-body text-inherit">Amanda Harvey</span>
                                            </div>
                                            <div className="flex-grow-1 text-end">
                                                <i className="bi-chevron-right text-body" />
                                            </div>
                                        </a>
                                    </li>
                                    <li className="list-group-item">
                                        <a className="d-flex align-items-center" href="./ecommerce-customer-details.html">
                                            <div className="icon icon-soft-info icon-circle">
                                                <i className="bi-basket" />
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <span className="text-body text-inherit">7 orders</span>
                                            </div>
                                            <div className="flex-grow-1 text-end">
                                                <i className="bi-chevron-right text-body" />
                                            </div>
                                        </a>
                                    </li>
                                    <li className="list-group-item">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <h5>Contact info</h5>
                                            <a className="link" href="javascript:;">Edit</a>
                                        </div>
                                        <ul className="list-unstyled list-py-2 text-body">
                                            <li><i className="bi-at me-2" />ella@site.com</li>
                                            <li><i className="bi-phone me-2" />+1 (609) 972-22-22</li>
                                        </ul>
                                    </li>
                                    <li className="list-group-item">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <h5>Shipping address</h5>
                                            <a className="link" href="javascript:;">Edit</a>
                                        </div>
                                        <span className="d-block text-body">
                                            45 Roker Terrace<br />
                                            Latheronwheel<br />
                                            KW5 8NW, London<br />
                                            UK <img className="avatar avatar-xss avatar-circle ms-1" src="./assets/vendor/flag-icon-css/flags/1x1/gb.svg" alt="Great Britain Flag" />
                                        </span>
                                    </li>
                                    <li className="list-group-item">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <h5>Billing address</h5>
                                            <a className="link" href="javascript:;">Edit</a>
                                        </div>
                                        <span className="d-block text-body">
                                            45 Roker Terrace<br />
                                            Latheronwheel<br />
                                            KW5 8NW, London<br />
                                            UK <img className="avatar avatar-xss avatar-circle ms-1" src="./assets/vendor/flag-icon-css/flags/1x1/gb.svg" alt="Great Britain Flag" />
                                        </span>
                                        <div className="mt-3">
                                            <h5 className="mb-0">Mastercard</h5>
                                            <span className="d-block text-body">Card Number: ************4291</span>
                                        </div>
                                    </li>
                                </ul>
                                {/* End List Group */}
                            </div>
                            {/* End Body */}
                        </div>
                        {/* End Card */}
                    </div>
                </div>
                {/* End Row */}
            </div>
            {/* Export Orders Modal */}
            <div className="modal fade" id="exportOrdersModal" tabIndex={-1} aria-labelledby="exportOrdersModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        {/* Header */}
                        <div className="modal-header">
                            <h4 className="modal-title" id="exportOrdersModalLabel">Export orders</h4>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        {/* End Header */}
                        {/* Body */}
                        <div className="modal-body">
                            <div className="d-grid gap-2 mb-4">
                                {/* Form Check */}
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="exportProductsRadio" id="exportProductsRadio1" defaultChecked />
                                    <label className="form-check-label" htmlFor="exportProductsRadio1">
                                        Current page
                                    </label>
                                </div>
                                {/* End Form Check */}
                                {/* Form Check */}
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="exportProductsRadio" id="exportProductsRadio2" />
                                    <label className="form-check-label" htmlFor="exportProductsRadio2">
                                        All products
                                    </label>
                                </div>
                                {/* End Form Check */}
                                {/* Form Check */}
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="exportProductsRadio" id="exportProductsRadio3" />
                                    <label className="form-check-label" htmlFor="exportProductsRadio3">
                                        Selected: 20 products
                                    </label>
                                </div>
                                {/* End Form Check */}
                                {/* Form Check */}
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="exportProductsRadio" id="exportProductsRadio4" />
                                    <label className="form-check-label" htmlFor="exportProductsRadio4">
                                        Order by date
                                    </label>
                                </div>
                                {/* End Form Check */}
                            </div>
                            <label className="form-label">Export as</label>
                            {/* Form Check */}
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="exportOrdersAsRadio" id="exportOrdersAsRadio1" defaultChecked />
                                <label className="form-check-label" htmlFor="exportOrdersAsRadio1">
                                    CSV for Excel, Numbers, or other spreadsheet programs
                                </label>
                            </div>
                            {/* End Form Check */}
                            {/* Form Check */}
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="exportOrdersAsRadio" id="exportOrdersAsRadio2" />
                                <label className="form-check-label" htmlFor="exportOrdersAsRadio2">
                                    Plain CSV file
                                </label>
                            </div>
                            {/* End Form Check */}
                        </div>
                        {/* End Body */}
                        {/* Footer */}
                        <div className="modal-footer gap-3">
                            <button type="button" className="btn btn-white" data-bs-dismiss="modal" aria-label="Close">Cancel</button>
                            <button type="button" className="btn btn-primary">Export orders</button>
                        </div>
                        {/* End Footer */}
                    </div>
                </div>
            </div>
        </>
    )
}

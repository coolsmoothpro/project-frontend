import React from 'react'

export default function Orders() {
    return (
        <>
            <div className="content container-fluid">
                {/* Page Header */}
                <div className="page-header">
                    <div className="row align-items-center mb-3">
                        <div className="col-sm">
                            <h1 className="page-header-title">Orders <span className="badge bg-soft-dark text-dark ms-2">106,905</span></h1>
                            <div className="d-flex mt-2">
                                <a className="text-body me-3" href="javascript:;" data-bs-toggle="modal" data-bs-target="#exportOrdersModal">
                                    <i className="bi-download me-1" /> Export
                                </a>
                                {/* Dropdown */}
                                <div className="dropdowm">
                                    <a className="text-body" href="javascript:;" id="moreOptionsDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                        More options <i className="bi-chevron-down" />
                                    </a>
                                    <div className="dropdown-menu mt-1" aria-labelledby="moreOptionsDropdown">
                                        <a className="dropdown-item" href="#">
                                            <i className="bi-folder-plus dropdown-item-icon" /> New order
                                        </a>
                                        <a className="dropdown-item" href="#">
                                            <i className="bi-folder dropdown-item-icon" /> New order - Development
                                        </a>
                                        <a className="dropdown-item" href="#">
                                            <i className="bi-folder dropdown-item-icon" /> New order - Staging
                                        </a>
                                    </div>
                                </div>
                                {/* End Dropdown */}
                            </div>
                        </div>
                        {/* End Col */}
                    </div>
                    {/* End Row */}
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
                        <ul className="nav nav-tabs page-header-tabs">
                            <li className="nav-item">
                                <a className="nav-link active" href="#">All products</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="#" tabIndex={-1} aria-disabled="true">Open</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="#" tabIndex={-1} aria-disabled="true">Unfulfilled</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="#" tabIndex={-1} aria-disabled="true">Unpaid</a>
                            </li>
                        </ul>
                        {/* End Nav */}
                    </div>
                    {/* End Nav Scroller */}
                </div>
                {/* End Page Header */}
                <div className="row justify-content-end mb-3">
                    <div className="col-lg">
                        {/* Datatable Info */}
                        <div id="datatableCounterInfo" style={{ display: 'none' }}>
                            <div className="d-sm-flex justify-content-lg-end align-items-sm-center">
                                <span className="d-block d-sm-inline-block fs-5 me-3 mb-2 mb-sm-0">
                                    <span id="datatableCounter">0</span>
                                    Selected
                                </span>
                                <a className="btn btn-outline-danger btn-sm mb-2 mb-sm-0 me-2" href="javascript:;">
                                    <i className="bi-trash" /> Delete
                                </a>
                                <a className="btn btn-white btn-sm mb-2 mb-sm-0 me-2" href="javascript:;">
                                    <i className="bi-archive" /> Archive
                                </a>
                                <a className="btn btn-white btn-sm mb-2 mb-sm-0 me-2" href="javascript:;">
                                    <i className="bi-upload" /> Publish
                                </a>
                                <a className="btn btn-white btn-sm mb-2 mb-sm-0" href="javascript:;">
                                    <i className="bi-x-lg" /> Unpublish
                                </a>
                            </div>
                        </div>
                        {/* End Datatable Info */}
                    </div>
                    {/* End Col */}
                </div>
                {/* End Row */}
                {/* Card */}
                <div className="card">
                    {/* Header */}
                    <div className="card-header card-header-content-md-between">
                        <div className="mb-2 mb-md-0">
                            <form>
                                {/* Search */}
                                <div className="input-group input-group-merge input-group-flush">
                                    <div className="input-group-prepend input-group-text">
                                        <i className="bi-search" />
                                    </div>
                                    <input id="datatableSearch" type="search" className="form-control" placeholder="Search users" aria-label="Search users" />
                                </div>
                                {/* End Search */}
                            </form>
                        </div>
                        <div className="d-grid d-sm-flex gap-2">
                            {/* Dropdown */}
                            <div className="dropdown">
                                <button type="button" className="btn btn-white btn-sm dropdown-toggle w-100" id="usersExportDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="bi-download me-2" /> Export
                                </button>
                                <div className="dropdown-menu dropdown-menu-sm-end" aria-labelledby="usersExportDropdown">
                                    <span className="dropdown-header">Options</span>
                                    <a id="export-copy" className="dropdown-item" href="javascript:;">
                                        <img className="avatar avatar-xss avatar-4x3 me-2" src="./assets/svg/illustrations/copy-icon.svg" alt="Image Description" />
                                        Copy
                                    </a>
                                    <a id="export-print" className="dropdown-item" href="javascript:;">
                                        <img className="avatar avatar-xss avatar-4x3 me-2" src="./assets/svg/illustrations/print-icon.svg" alt="Image Description" />
                                        Print
                                    </a>
                                    <div className="dropdown-divider" />
                                    <span className="dropdown-header">Download options</span>
                                    <a id="export-excel" className="dropdown-item" href="javascript:;">
                                        <img className="avatar avatar-xss avatar-4x3 me-2" src="./assets/svg/brands/excel-icon.svg" alt="Image Description" />
                                        Excel
                                    </a>
                                    <a id="export-csv" className="dropdown-item" href="javascript:;">
                                        <img className="avatar avatar-xss avatar-4x3 me-2" src="./assets/svg/components/placeholder-csv-format.svg" alt="Image Description" />
                                        .CSV
                                    </a>
                                    <a id="export-pdf" className="dropdown-item" href="javascript:;">
                                        <img className="avatar avatar-xss avatar-4x3 me-2" src="./assets/svg/brands/pdf-icon.svg" alt="Image Description" />
                                        PDF
                                    </a>
                                </div>
                            </div>
                            {/* End Dropdown */}
                            {/* Dropdown */}
                            <div className="dropdown">
                                <button type="button" className="btn btn-white btn-sm w-100" id="showHideDropdown" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
                                    <i className="bi-table me-1" /> Columns <span className="badge bg-soft-dark text-dark rounded-circle ms-1">7</span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end dropdown-card" aria-labelledby="showHideDropdown" style={{ width: '15rem' }}>
                                    <div className="card card-sm">
                                        <div className="card-body">
                                            <div className="d-grid gap-3">
                                                {/* Form Switch */}
                                                <label className="row form-check form-switch" htmlFor="toggleColumn_order">
                                                    <span className="col-8 col-sm-9 ms-0">
                                                        <span className="me-2">Order</span>
                                                    </span>
                                                    <span className="col-4 col-sm-3 text-end">
                                                        <input type="checkbox" className="form-check-input" id="toggleColumn_order" defaultChecked />
                                                    </span>
                                                </label>
                                                {/* End Form Switch */}
                                                {/* Form Switch */}
                                                <label className="row form-check form-switch" htmlFor="toggleColumn_date">
                                                    <span className="col-8 col-sm-9 ms-0">
                                                        <span className="me-2">Date</span>
                                                    </span>
                                                    <span className="col-4 col-sm-3 text-end">
                                                        <input type="checkbox" className="form-check-input" id="toggleColumn_date" defaultChecked />
                                                    </span>
                                                </label>
                                                {/* End Form Switch */}
                                                {/* Form Switch */}
                                                <label className="row form-check form-switch" htmlFor="toggleColumn_customer">
                                                    <span className="col-8 col-sm-9 ms-0">
                                                        <span className="me-2">Customer</span>
                                                    </span>
                                                    <span className="col-4 col-sm-3 text-end">
                                                        <input type="checkbox" className="form-check-input" id="toggleColumn_customer" defaultChecked />
                                                    </span>
                                                </label>
                                                {/* End Form Switch */}
                                                {/* Form Switch */}
                                                <label className="row form-check form-switch" htmlFor="toggleColumn_payment_status">
                                                    <span className="col-8 col-sm-9 ms-0">
                                                        <span className="me-2">Payment status</span>
                                                    </span>
                                                    <span className="col-4 col-sm-3 text-end">
                                                        <input type="checkbox" className="form-check-input" id="toggleColumn_payment_status" defaultChecked />
                                                    </span>
                                                </label>
                                                {/* End Form Switch */}
                                                {/* Form Switch */}
                                                <label className="row form-check form-switch" htmlFor="toggleColumn_fulfillment_status">
                                                    <span className="col-8 col-sm-9 ms-0">
                                                        <span className="me-2">Fulfillment status</span>
                                                    </span>
                                                    <span className="col-4 col-sm-3 text-end">
                                                        <input type="checkbox" className="form-check-input" id="toggleColumn_fulfillment_status" defaultChecked />
                                                    </span>
                                                </label>
                                                {/* End Form Switch */}
                                                {/* Form Switch */}
                                                <label className="row form-check form-switch" htmlFor="toggleColumn_payment_method">
                                                    <span className="col-8 col-sm-9 ms-0">
                                                        <span className="me-2">Payment method</span>
                                                    </span>
                                                    <span className="col-4 col-sm-3 text-end">
                                                        <input type="checkbox" className="form-check-input" id="toggleColumn_payment_method" defaultChecked />
                                                    </span>
                                                </label>
                                                {/* End Form Switch */}
                                                {/* Form Switch */}
                                                <label className="row form-check form-switch" htmlFor="toggleColumn_total">
                                                    <span className="col-8 col-sm-9 ms-0">
                                                        <span className="me-2">Total</span>
                                                    </span>
                                                    <span className="col-4 col-sm-3 text-end">
                                                        <input type="checkbox" className="form-check-input" id="toggleColumn_total" />
                                                    </span>
                                                </label>
                                                {/* End Form Switch */}
                                                {/* Form Switch */}
                                                <label className="row form-check form-switch" htmlFor="toggleColumn_actions">
                                                    <span className="col-8 col-sm-9 ms-0">
                                                        <span className="me-2">Actions</span>
                                                    </span>
                                                    <span className="col-4 col-sm-3 text-end">
                                                        <input type="checkbox" className="form-check-input" id="toggleColumn_actions" defaultChecked />
                                                    </span>
                                                </label>
                                                {/* End Form Switch */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Dropdown */}
                        </div>
                    </div>
                    {/* End Header */}
                    {/* Table */}
                    <div className="table-responsive datatable-custom">
                        <table id="datatable" className="table table-hover table-borderless table-thead-bordered table-nowrap table-align-middle card-table" style={{ width: '100%' }} data-hs-datatables-options="{
                         &quot;columnDefs&quot;: [{
                            &quot;targets&quot;: [0],
                            &quot;orderable&quot;: false
                          }],
                         &quot;order&quot;: [],
                         &quot;info&quot;: {
                           &quot;totalQty&quot;: &quot;#datatableWithPaginationInfoTotalQty&quot;
                         },
                         &quot;search&quot;: &quot;#datatableSearch&quot;,
                         &quot;entries&quot;: &quot;#datatableEntries&quot;,
                         &quot;pageLength&quot;: 12,
                         &quot;isResponsive&quot;: false,
                         &quot;isShowPaging&quot;: false,
                         &quot;pagination&quot;: &quot;datatablePagination&quot;
                       }">
                            <thead className="thead-light">
                                <tr>
                                    <th className="table-column-pe-0">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" defaultValue id="datatableCheckAll" />
                                            <label className="form-check-label" htmlFor="datatableCheckAll" />
                                        </div>
                                    </th>
                                    <th className="table-column-ps-0">Order</th>
                                    <th>Date</th>
                                    <th>Customer</th>
                                    <th>Payment status</th>
                                    <th>Fulfillment status</th>
                                    <th>Payment method</th>
                                    <th>Total</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="table-column-pe-0">
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" id="ordersCheck1" />
                                            <label className="form-check-label" htmlFor="ordersCheck1" />
                                        </div>
                                    </td>
                                    <td className="table-column-ps-0">
                                        <a href="./ecommerce-order-details.html">#35463</a>
                                    </td>
                                    <td>Aug 17, 2020, 5:48 (ET)</td>
                                    <td>
                                        <a className="text-body" href="./ecommerce-customer-details.html">Jase Marley</a>
                                    </td>
                                    <td>
                                        <span className="badge bg-soft-success text-success">
                                            <span className="legend-indicator bg-success" />Paid
                                        </span>
                                    </td>
                                    <td>
                                        <span className="badge bg-soft-info text-info">
                                            <span className="legend-indicator bg-info" />Fulfilled
                                        </span>
                                    </td>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <img className="avatar avatar-xss avatar-4x3 me-2" src="./assets/svg/brands/mastercard.svg" alt="Image Description" />
                                            <span className="text-dark">•••• 4242</span>
                                        </div>
                                    </td>
                                    <td>$256.39</td>
                                    <td>
                                        <div className="btn-group" role="group">
                                            <a className="btn btn-white btn-sm" href="./ecommerce-order-details.html">
                                                <i className="bi-eye" /> View
                                            </a>
                                            {/* Button Group */}
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-white btn-icon btn-sm dropdown-toggle dropdown-toggle-empty" id="ordersExportDropdown1" data-bs-toggle="dropdown" aria-expanded="false" />
                                                <div className="dropdown-menu dropdown-menu-end mt-1" aria-labelledby="ordersExportDropdown1">
                                                    <span className="dropdown-header">Options</span>
                                                    <a className="js-export-copy dropdown-item" href="javascript:;">
                                                        <img className="avatar avatar-xss avatar-4x3 me-2" src="./assets/svg/illustrations/copy-icon.svg" alt="Image Description" />
                                                        Copy
                                                    </a>
                                                    <a className="js-export-print dropdown-item" href="javascript:;">
                                                        <img className="avatar avatar-xss avatar-4x3 me-2" src="./assets/svg/illustrations/print-icon.svg" alt="Image Description" />
                                                        Print
                                                    </a>
                                                    <div className="dropdown-divider" />
                                                    <span className="dropdown-header">Download options</span>
                                                    <a className="js-export-excel dropdown-item" href="javascript:;">
                                                        <img className="avatar avatar-xss avatar-4x3 me-2" src="./assets/svg/brands/excel-icon.svg" alt="Image Description" />
                                                        Excel
                                                    </a>
                                                    <a className="js-export-csv dropdown-item" href="javascript:;">
                                                        <img className="avatar avatar-xss avatar-4x3 me-2" src="./assets/svg/components/placeholder-csv-format.svg" alt="Image Description" />
                                                        .CSV
                                                    </a>
                                                    <a className="js-export-pdf dropdown-item" href="javascript:;">
                                                        <img className="avatar avatar-xss avatar-4x3 me-2" src="./assets/svg/brands/pdf-icon.svg" alt="Image Description" />
                                                        PDF
                                                    </a>
                                                    <div className="dropdown-divider" />
                                                    <a className="dropdown-item" href="javascript:;">
                                                        <i className="bi-trash dropdown-item-icon" /> Delete
                                                    </a>
                                                </div>
                                            </div>
                                            {/* End Unfold */}
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="table-column-pe-0">
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" id="ordersCheck2" />
                                            <label className="form-check-label" htmlFor="ordersCheck2" />
                                        </div>
                                    </td>
                                    <td className="table-column-ps-0">
                                        <a href="./ecommerce-order-details.html">#23513</a>
                                    </td>
                                    <td>Aug 17, 2020, 2:01 (ET)</td>
                                    <td>
                                        <a className="text-body" href="./ecommerce-customer-details.html">Mathew Gustaffson</a>
                                    </td>
                                    <td>
                                        <span className="badge bg-soft-success text-success">
                                            <span className="legend-indicator bg-success" />Paid
                                        </span>
                                    </td>
                                    <td>
                                        <span className="badge bg-soft-dark text-dark">
                                            <span className="legend-indicator bg-dark" />Unfulfilled
                                        </span>
                                    </td>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <img className="avatar avatar-xss avatar-4x3 me-2" src="./assets/svg/brands/mastercard.svg" alt="Image Description" />
                                            <span className="text-dark">•••• 2390</span>
                                        </div>
                                    </td>
                                    <td>$2,125.00</td>
                                    <td>
                                        <div className="btn-group" role="group">
                                            <a className="btn btn-white btn-sm" href="./ecommerce-order-details.html">
                                                <i className="bi-eye" /> View
                                            </a>
                                            {/* Button Group */}
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-white btn-icon btn-sm dropdown-toggle dropdown-toggle-empty" id="ordersExportDropdown2" data-bs-toggle="dropdown" aria-expanded="false" />
                                                <div className="dropdown-menu dropdown-menu-end mt-1" aria-labelledby="ordersExportDropdown2">
                                                    <span className="dropdown-header">Options</span>
                                                    <a className="js-export-copy dropdown-item" href="javascript:;">
                                                        <img className="avatar avatar-xss avatar-4x3 me-2" src="./assets/svg/illustrations/copy-icon.svg" alt="Image Description" />
                                                        Copy
                                                    </a>
                                                    <a className="js-export-print dropdown-item" href="javascript:;">
                                                        <img className="avatar avatar-xss avatar-4x3 me-2" src="./assets/svg/illustrations/print-icon.svg" alt="Image Description" />
                                                        Print
                                                    </a>
                                                    <div className="dropdown-divider" />
                                                    <span className="dropdown-header">Download options</span>
                                                    <a className="js-export-excel dropdown-item" href="javascript:;">
                                                        <img className="avatar avatar-xss avatar-4x3 me-2" src="./assets/svg/brands/excel-icon.svg" alt="Image Description" />
                                                        Excel
                                                    </a>
                                                    <a className="js-export-csv dropdown-item" href="javascript:;">
                                                        <img className="avatar avatar-xss avatar-4x3 me-2" src="./assets/svg/components/placeholder-csv-format.svg" alt="Image Description" />
                                                        .CSV
                                                    </a>
                                                    <a className="js-export-pdf dropdown-item" href="javascript:;">
                                                        <img className="avatar avatar-xss avatar-4x3 me-2" src="./assets/svg/brands/pdf-icon.svg" alt="Image Description" />
                                                        PDF
                                                    </a>
                                                    <div className="dropdown-divider" />
                                                    <a className="dropdown-item" href="javascript:;">
                                                        <i className="bi-trash dropdown-item-icon" /> Delete
                                                    </a>
                                                </div>
                                            </div>
                                            {/* End Unfold */}
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="table-column-pe-0">
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" id="ordersCheck3" />
                                            <label className="form-check-label" htmlFor="ordersCheck3" />
                                        </div>
                                    </td>
                                    <td className="table-column-ps-0">
                                        <a href="./ecommerce-order-details.html">#62311</a>
                                    </td>
                                    <td>Aug 17, 2020, 1:55 (ET)</td>
                                    <td>
                                        <a className="text-body" href="./ecommerce-customer-details.html">Mathew Gustaffson</a>
                                    </td>
                                    <td>
                                        <span className="badge bg-soft-success text-success">
                                            <span className="legend-indicator bg-success" />Paid
                                        </span>
                                    </td>
                                    <td>
                                        <span className="badge bg-soft-dark text-dark">
                                            <span className="legend-indicator bg-dark" />Unfulfilled
                                        </span>
                                    </td>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <img className="avatar avatar-xss avatar-4x3 me-2" src="./assets/svg/brands/paypal-icon.svg" alt="Image Description" />
                                            <span className="text-dark">••••@gmail.com</span>
                                        </div>
                                    </td>
                                    <td>$532.99</td>
                                    <td>
                                        <div className="btn-group" role="group">
                                            <a className="btn btn-white btn-sm" href="./ecommerce-order-details.html">
                                                <i className="bi-eye" /> View
                                            </a>
                                            {/* Button Group */}
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-white btn-icon btn-sm dropdown-toggle dropdown-toggle-empty" id="ordersExportDropdown3" data-bs-toggle="dropdown" aria-expanded="false" />
                                                <div className="dropdown-menu dropdown-menu-end mt-1" aria-labelledby="ordersExportDropdown3">
                                                    <span className="dropdown-header">Options</span>
                                                    <a className="js-export-copy dropdown-item" href="javascript:;">
                                                        <img className="avatar avatar-xss avatar-4x3 me-2" src="./assets/svg/illustrations/copy-icon.svg" alt="Image Description" />
                                                        Copy
                                                    </a>
                                                    <a className="js-export-print dropdown-item" href="javascript:;">
                                                        <img className="avatar avatar-xss avatar-4x3 me-2" src="./assets/svg/illustrations/print-icon.svg" alt="Image Description" />
                                                        Print
                                                    </a>
                                                    <div className="dropdown-divider" />
                                                    <span className="dropdown-header">Download options</span>
                                                    <a className="js-export-excel dropdown-item" href="javascript:;">
                                                        <img className="avatar avatar-xss avatar-4x3 me-2" src="./assets/svg/brands/excel-icon.svg" alt="Image Description" />
                                                        Excel
                                                    </a>
                                                    <a className="js-export-csv dropdown-item" href="javascript:;">
                                                        <img className="avatar avatar-xss avatar-4x3 me-2" src="./assets/svg/components/placeholder-csv-format.svg" alt="Image Description" />
                                                        .CSV
                                                    </a>
                                                    <a className="js-export-pdf dropdown-item" href="javascript:;">
                                                        <img className="avatar avatar-xss avatar-4x3 me-2" src="./assets/svg/brands/pdf-icon.svg" alt="Image Description" />
                                                        PDF
                                                    </a>
                                                    <div className="dropdown-divider" />
                                                    <a className="dropdown-item" href="javascript:;">
                                                        <i className="bi-trash dropdown-item-icon" /> Delete
                                                    </a>
                                                </div>
                                            </div>
                                            {/* End Unfold */}
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="table-column-pe-0">
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" id="ordersCheck4" />
                                            <label className="form-check-label" htmlFor="ordersCheck4" />
                                        </div>
                                    </td>
                                    <td className="table-column-ps-0">
                                        <a href="./ecommerce-order-details.html">#12453</a>
                                    </td>
                                    <td>Aug 17, 2020, 1:54 (ET)</td>
                                    <td>
                                        <a className="text-body" href="./ecommerce-customer-details.html">Nicky Olvsson</a>
                                    </td>
                                    <td>
                                        <span className="badge bg-soft-warning text-warning">
                                            <span className="legend-indicator bg-warning" />Pending
                                        </span>
                                    </td>
                                    <td>
                                        <span className="badge bg-soft-dark text-dark">
                                            <span className="legend-indicator bg-dark" />Unfulfilled
                                        </span>
                                    </td>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <img className="avatar avatar-xss avatar-4x3 me-2" src="./assets/svg/brands/mastercard.svg" alt="Image Description" />
                                            <span className="text-dark">•••• 3535</span>
                                        </div>
                                    </td>
                                    <td>$1,035.02</td>
                                    <td>
                                        <div className="btn-group" role="group">
                                            <a className="btn btn-white btn-sm" href="./ecommerce-order-details.html">
                                                <i className="bi-eye" /> View
                                            </a>
                                            {/* Button Group */}
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-white btn-icon btn-sm dropdown-toggle dropdown-toggle-empty" id="ordersExportDropdown4" data-bs-toggle="dropdown" aria-expanded="false" />
                                                <div className="dropdown-menu dropdown-menu-end mt-1" aria-labelledby="ordersExportDropdown4">
                                                    <span className="dropdown-header">Options</span>
                                                    <a className="js-export-copy dropdown-item" href="javascript:;">
                                                        <img className="avatar avatar-xss avatar-4x3 me-2" src="./assets/svg/illustrations/copy-icon.svg" alt="Image Description" />
                                                        Copy
                                                    </a>
                                                    <a className="js-export-print dropdown-item" href="javascript:;">
                                                        <img className="avatar avatar-xss avatar-4x3 me-2" src="./assets/svg/illustrations/print-icon.svg" alt="Image Description" />
                                                        Print
                                                    </a>
                                                    <div className="dropdown-divider" />
                                                    <span className="dropdown-header">Download options</span>
                                                    <a className="js-export-excel dropdown-item" href="javascript:;">
                                                        <img className="avatar avatar-xss avatar-4x3 me-2" src="./assets/svg/brands/excel-icon.svg" alt="Image Description" />
                                                        Excel
                                                    </a>
                                                    <a className="js-export-csv dropdown-item" href="javascript:;">
                                                        <img className="avatar avatar-xss avatar-4x3 me-2" src="./assets/svg/components/placeholder-csv-format.svg" alt="Image Description" />
                                                        .CSV
                                                    </a>
                                                    <a className="js-export-pdf dropdown-item" href="javascript:;">
                                                        <img className="avatar avatar-xss avatar-4x3 me-2" src="./assets/svg/brands/pdf-icon.svg" alt="Image Description" />
                                                        PDF
                                                    </a>
                                                    <div className="dropdown-divider" />
                                                    <a className="dropdown-item" href="javascript:;">
                                                        <i className="bi-trash dropdown-item-icon" /> Delete
                                                    </a>
                                                </div>
                                            </div>
                                            {/* End Unfold */}
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="table-column-pe-0">
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" id="ordersCheck5" />
                                            <label className="form-check-label" htmlFor="ordersCheck5" />
                                        </div>
                                    </td>
                                    <td className="table-column-ps-0">
                                        <a href="./ecommerce-order-details.html">#84223</a>
                                    </td>
                                    <td>Aug 17, 2020, 1:04 (ET)</td>
                                    <td>
                                        <a className="text-body" href="./ecommerce-customer-details.html">David Nunez</a>
                                    </td>
                                    <td>
                                        <span className="badge bg-soft-success text-success">
                                            <span className="legend-indicator bg-success" />Paid
                                        </span>
                                    </td>
                                    <td>
                                        <span className="badge bg-soft-info text-info">
                                            <span className="legend-indicator bg-info" />Fulfilled
                                        </span>
                                    </td>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <img className="avatar avatar-xss avatar-4x3 me-2" src="./assets/svg/brands/paypal-icon.svg" alt="Image Description" />
                                            <span className="text-dark">••••@gmail.com</span>
                                        </div>
                                    </td>
                                    <td>$68.53</td>
                                    <td>
                                        <div className="btn-group" role="group">
                                            <a className="btn btn-white btn-sm" href="./ecommerce-order-details.html">
                                                <i className="bi-eye" /> View
                                            </a>
                                            {/* Button Group */}
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-white btn-icon btn-sm dropdown-toggle dropdown-toggle-empty" id="ordersExportDropdown5" data-bs-toggle="dropdown" aria-expanded="false" />
                                                <div className="dropdown-menu dropdown-menu-end mt-1" aria-labelledby="ordersExportDropdown5">
                                                    <span className="dropdown-header">Options</span>
                                                    <a className="js-export-copy dropdown-item" href="javascript:;">
                                                        <img className="avatar avatar-xss avatar-4x3 me-2" src="./assets/svg/illustrations/copy-icon.svg" alt="Image Description" />
                                                        Copy
                                                    </a>
                                                    <a className="js-export-print dropdown-item" href="javascript:;">
                                                        <img className="avatar avatar-xss avatar-4x3 me-2" src="./assets/svg/illustrations/print-icon.svg" alt="Image Description" />
                                                        Print
                                                    </a>
                                                    <div className="dropdown-divider" />
                                                    <span className="dropdown-header">Download options</span>
                                                    <a className="js-export-excel dropdown-item" href="javascript:;">
                                                        <img className="avatar avatar-xss avatar-4x3 me-2" src="./assets/svg/brands/excel-icon.svg" alt="Image Description" />
                                                        Excel
                                                    </a>
                                                    <a className="js-export-csv dropdown-item" href="javascript:;">
                                                        <img className="avatar avatar-xss avatar-4x3 me-2" src="./assets/svg/components/placeholder-csv-format.svg" alt="Image Description" />
                                                        .CSV
                                                    </a>
                                                    <a className="js-export-pdf dropdown-item" href="javascript:;">
                                                        <img className="avatar avatar-xss avatar-4x3 me-2" src="./assets/svg/brands/pdf-icon.svg" alt="Image Description" />
                                                        PDF
                                                    </a>
                                                    <div className="dropdown-divider" />
                                                    <a className="dropdown-item" href="javascript:;">
                                                        <i className="bi-trash dropdown-item-icon" /> Delete
                                                    </a>
                                                </div>
                                            </div>
                                            {/* End Unfold */}
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="table-column-pe-0">
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" id="ordersCheck6" />
                                            <label className="form-check-label" htmlFor="ordersCheck6" />
                                        </div>
                                    </td>
                                    <td className="table-column-ps-0">
                                        <a href="./ecommerce-order-details.html">#46542</a>
                                    </td>
                                    <td>Aug 17, 2020, 1:01 (ET)</td>
                                    <td>
                                        <a className="text-body" href="./ecommerce-customer-details.html">Brian Jackson</a>
                                    </td>
                                    <td>
                                        <span className="badge bg-soft-success text-success">
                                            <span className="legend-indicator bg-success" />Paid
                                        </span>
                                    </td>
                                    <td>
                                        <span className="badge bg-soft-info text-info">
                                            <span className="legend-indicator bg-info" />Fulfilled
                                        </span>
                                    </td>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <img className="avatar avatar-xss avatar-4x3 me-2" src="./assets/svg/brands/paypal-icon.svg" alt="Image Description" />
                                            <span className="text-dark">••••@gmail.com</span>
                                        </div>
                                    </td>
                                    <td>$100.00</td>
                                    <td>
                                        <div className="btn-group" role="group">
                                            <a className="btn btn-white btn-sm" href="./ecommerce-order-details.html">
                                                <i className="bi-eye" /> View
                                            </a>
                                            {/* Button Group */}
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-white btn-icon btn-sm dropdown-toggle dropdown-toggle-empty" id="ordersExportDropdown6" data-bs-toggle="dropdown" aria-expanded="false" />
                                                <div className="dropdown-menu dropdown-menu-end mt-1" aria-labelledby="ordersExportDropdown6">
                                                    <span className="dropdown-header">Options</span>
                                                    <a className="js-export-copy dropdown-item" href="javascript:;">
                                                        <img className="avatar avatar-xss avatar-4x3 me-2" src="./assets/svg/illustrations/copy-icon.svg" alt="Image Description" />
                                                        Copy
                                                    </a>
                                                    <a className="js-export-print dropdown-item" href="javascript:;">
                                                        <img className="avatar avatar-xss avatar-4x3 me-2" src="./assets/svg/illustrations/print-icon.svg" alt="Image Description" />
                                                        Print
                                                    </a>
                                                    <div className="dropdown-divider" />
                                                    <span className="dropdown-header">Download options</span>
                                                    <a className="js-export-excel dropdown-item" href="javascript:;">
                                                        <img className="avatar avatar-xss avatar-4x3 me-2" src="./assets/svg/brands/excel-icon.svg" alt="Image Description" />
                                                        Excel
                                                    </a>
                                                    <a className="js-export-csv dropdown-item" href="javascript:;">
                                                        <img className="avatar avatar-xss avatar-4x3 me-2" src="./assets/svg/components/placeholder-csv-format.svg" alt="Image Description" />
                                                        .CSV
                                                    </a>
                                                    <a className="js-export-pdf dropdown-item" href="javascript:;">
                                                        <img className="avatar avatar-xss avatar-4x3 me-2" src="./assets/svg/brands/pdf-icon.svg" alt="Image Description" />
                                                        PDF
                                                    </a>
                                                    <div className="dropdown-divider" />
                                                    <a className="dropdown-item" href="javascript:;">
                                                        <i className="bi-trash dropdown-item-icon" /> Delete
                                                    </a>
                                                </div>
                                            </div>
                                            {/* End Unfold */}
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="table-column-pe-0">
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" id="ordersCheck7" />
                                            <label className="form-check-label" htmlFor="ordersCheck7" />
                                        </div>
                                    </td>
                                    <td className="table-column-ps-0">
                                        <a className="text-danger" href="./ecommerce-order-details.html">#35378</a>
                                        <i className="bi-exclamation-diamond-fill text-warning" />
                                    </td>
                                    <td>Aug 17, 2020, 12:56 (ET)</td>
                                    <td className="text-danger">No customer</td>
                                    <td>
                                        <span className="badge bg-soft-warning text-warning">
                                            <span className="legend-indicator bg-warning" />Pending
                                        </span>
                                    </td>
                                    <td>
                                        <span className="badge bg-soft-dark text-dark">
                                            <span className="legend-indicator bg-dark" />Unfulfilled
                                        </span>
                                    </td>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <img className="avatar avatar-xss avatar-4x3 me-2" src="./assets/svg/brands/mastercard.svg" alt="Image Description" />
                                            <span className="text-dark">•••• 9901</span>
                                        </div>
                                    </td>
                                    <td className="text-danger">$89.46</td>
                                    <td>
                                        <div className="btn-group" role="group">
                                            <a className="btn btn-white btn-sm" href="./ecommerce-order-details.html">
                                                <i className="bi-eye" /> View
                                            </a>
                                            {/* Button Group */}
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-white btn-icon btn-sm dropdown-toggle dropdown-toggle-empty" id="ordersExportDropdown7" data-bs-toggle="dropdown" aria-expanded="false" />
                                                <div className="dropdown-menu dropdown-menu-end mt-1" aria-labelledby="ordersExportDropdown7">
                                                    <span className="dropdown-header">Options</span>
                                                    <a className="js-export-copy dropdown-item" href="javascript:;">
                                                        <img className="avatar avatar-xss avatar-4x3 me-2" src="./assets/svg/illustrations/copy-icon.svg" alt="Image Description" />
                                                        Copy
                                                    </a>
                                                    <a className="js-export-print dropdown-item" href="javascript:;">
                                                        <img className="avatar avatar-xss avatar-4x3 me-2" src="./assets/svg/illustrations/print-icon.svg" alt="Image Description" />
                                                        Print
                                                    </a>
                                                    <div className="dropdown-divider" />
                                                    <span className="dropdown-header">Download options</span>
                                                    <a className="js-export-excel dropdown-item" href="javascript:;">
                                                        <img className="avatar avatar-xss avatar-4x3 me-2" src="./assets/svg/brands/excel-icon.svg" alt="Image Description" />
                                                        Excel
                                                    </a>
                                                    <a className="js-export-csv dropdown-item" href="javascript:;">
                                                        <img className="avatar avatar-xss avatar-4x3 me-2" src="./assets/svg/components/placeholder-csv-format.svg" alt="Image Description" />
                                                        .CSV
                                                    </a>
                                                    <a className="js-export-pdf dropdown-item" href="javascript:;">
                                                        <img className="avatar avatar-xss avatar-4x3 me-2" src="./assets/svg/brands/pdf-icon.svg" alt="Image Description" />
                                                        PDF
                                                    </a>
                                                    <div className="dropdown-divider" />
                                                    <a className="dropdown-item" href="javascript:;">
                                                        <i className="bi-trash dropdown-item-icon" /> Delete
                                                    </a>
                                                </div>
                                            </div>
                                            {/* End Unfold */}
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="table-column-pe-0">
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" id="ordersCheck8" />
                                            <label className="form-check-label" htmlFor="ordersCheck8" />
                                        </div>
                                    </td>
                                    <td className="table-column-ps-0">
                                        <a className="text-danger" href="./ecommerce-order-details.html">#24562</a>
                                        <i className="bi-exclamation-diamond-fill text-warning" />
                                    </td>
                                    <td>Aug 17, 2020, 12:54 (ET)</td>
                                    <td className="text-danger">No customer</td>
                                    <td>
                                        <span className="badge bg-soft-warning text-warning">
                                            <span className="legend-indicator bg-warning" />Pending
                                        </span>
                                    </td>
                                    <td>
                                        <span className="badge bg-soft-dark text-dark">
                                            <span className="legend-indicator bg-dark" />Unfulfilled
                                        </span>
                                    </td>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <img className="avatar avatar-xss avatar-4x3 me-2" src="./assets/svg/brands/mastercard.svg" alt="Image Description" />
                                            <span className="text-dark">•••• 2278</span>
                                        </div>
                                    </td>
                                    <td className="text-danger">$3,535.46</td>
                                    <td>
                                        <div className="btn-group" role="group">
                                            <a className="btn btn-white btn-sm" href="./ecommerce-order-details.html">
                                                <i className="bi-eye" /> View
                                            </a>
                                            {/* Button Group */}
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-white btn-icon btn-sm dropdown-toggle dropdown-toggle-empty" id="ordersExportDropdown8" data-bs-toggle="dropdown" aria-expanded="false" />
                                                <div className="dropdown-menu dropdown-menu-end mt-1" aria-labelledby="ordersExportDropdown8">
                                                    <span className="dropdown-header">Options</span>
                                                    <a className="js-export-copy dropdown-item" href="javascript:;">
                                                        <img className="avatar avatar-xss avatar-4x3 me-2" src="./assets/svg/illustrations/copy-icon.svg" alt="Image Description" />
                                                        Copy
                                                    </a>
                                                    <a className="js-export-print dropdown-item" href="javascript:;">
                                                        <img className="avatar avatar-xss avatar-4x3 me-2" src="./assets/svg/illustrations/print-icon.svg" alt="Image Description" />
                                                        Print
                                                    </a>
                                                    <div className="dropdown-divider" />
                                                    <span className="dropdown-header">Download options</span>
                                                    <a className="js-export-excel dropdown-item" href="javascript:;">
                                                        <img className="avatar avatar-xss avatar-4x3 me-2" src="./assets/svg/brands/excel-icon.svg" alt="Image Description" />
                                                        Excel
                                                    </a>
                                                    <a className="js-export-csv dropdown-item" href="javascript:;">
                                                        <img className="avatar avatar-xss avatar-4x3 me-2" src="./assets/svg/components/placeholder-csv-format.svg" alt="Image Description" />
                                                        .CSV
                                                    </a>
                                                    <a className="js-export-pdf dropdown-item" href="javascript:;">
                                                        <img className="avatar avatar-xss avatar-4x3 me-2" src="./assets/svg/brands/pdf-icon.svg" alt="Image Description" />
                                                        PDF
                                                    </a>
                                                    <div className="dropdown-divider" />
                                                    <a className="dropdown-item" href="javascript:;">
                                                        <i className="bi-trash dropdown-item-icon" /> Delete
                                                    </a>
                                                </div>
                                            </div>
                                            {/* End Unfold */}
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="table-column-pe-0">
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" id="ordersCheck9" />
                                            <label className="form-check-label" htmlFor="ordersCheck9" />
                                        </div>
                                    </td>
                                    <td className="table-column-ps-0">
                                        <a href="./ecommerce-order-details.html">#78531</a>
                                    </td>
                                    <td>Aug 17, 2020, 12:48 (ET)</td>
                                    <td>
                                        <a className="text-body" href="./ecommerce-customer-details.html">Mathew Gustaffson</a>
                                    </td>
                                    <td>
                                        <span className="badge bg-soft-success text-success">
                                            <span className="legend-indicator bg-success" />Paid
                                        </span>
                                    </td>
                                    <td>
                                        <span className="badge bg-soft-info text-info">
                                            <span className="legend-indicator bg-info" />Fulfilled
                                        </span>
                                    </td>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <img className="avatar avatar-xss avatar-4x3 me-2" src="./assets/svg/brands/paypal-icon.svg" alt="Image Description" />
                                            <span className="text-dark">••••@gmail.com</span>
                                        </div>
                                    </td>
                                    <td>$23.89</td>
                                    <td>
                                        <div className="btn-group" role="group">
                                            <a className="btn btn-white btn-sm" href="./ecommerce-order-details.html">
                                                <i className="bi-eye" /> View
                                            </a>
                                            {/* Button Group */}
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-white btn-icon btn-sm dropdown-toggle dropdown-toggle-empty" id="ordersExportDropdown9" data-bs-toggle="dropdown" aria-expanded="false" />
                                                <div className="dropdown-menu dropdown-menu-end mt-1" aria-labelledby="ordersExportDropdown9">
                                                    <span className="dropdown-header">Options</span>
                                                    <a className="js-export-copy dropdown-item" href="javascript:;">
                                                        <img className="avatar avatar-xss avatar-4x3 me-2" src="./assets/svg/illustrations/copy-icon.svg" alt="Image Description" />
                                                        Copy
                                                    </a>
                                                    <a className="js-export-print dropdown-item" href="javascript:;">
                                                        <img className="avatar avatar-xss avatar-4x3 me-2" src="./assets/svg/illustrations/print-icon.svg" alt="Image Description" />
                                                        Print
                                                    </a>
                                                    <div className="dropdown-divider" />
                                                    <span className="dropdown-header">Download options</span>
                                                    <a className="js-export-excel dropdown-item" href="javascript:;">
                                                        <img className="avatar avatar-xss avatar-4x3 me-2" src="./assets/svg/brands/excel-icon.svg" alt="Image Description" />
                                                        Excel
                                                    </a>
                                                    <a className="js-export-csv dropdown-item" href="javascript:;">
                                                        <img className="avatar avatar-xss avatar-4x3 me-2" src="./assets/svg/components/placeholder-csv-format.svg" alt="Image Description" />
                                                        .CSV
                                                    </a>
                                                    <a className="js-export-pdf dropdown-item" href="javascript:;">
                                                        <img className="avatar avatar-xss avatar-4x3 me-2" src="./assets/svg/brands/pdf-icon.svg" alt="Image Description" />
                                                        PDF
                                                    </a>
                                                    <div className="dropdown-divider" />
                                                    <a className="dropdown-item" href="javascript:;">
                                                        <i className="bi-trash dropdown-item-icon" /> Delete
                                                    </a>
                                                </div>
                                            </div>
                                            {/* End Unfold */}
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="table-column-pe-0">
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" id="ordersCheck10" />
                                            <label className="form-check-label" htmlFor="ordersCheck10" />
                                        </div>
                                    </td>
                                    <td className="table-column-ps-0">
                                        <a href="./ecommerce-order-details.html">#34634</a>
                                    </td>
                                    <td>Aug 17, 2020, 12:41 (ET)</td>
                                    <td>
                                        <a className="text-body" href="./ecommerce-customer-details.html">Jase Marley</a>
                                    </td>
                                    <td>
                                        <span className="badge bg-soft-success text-success">
                                            <span className="legend-indicator bg-success" />Paid
                                        </span>
                                    </td>
                                    <td>
                                        <span className="badge bg-soft-info text-info">
                                            <span className="legend-indicator bg-info" />Fulfilled
                                        </span>
                                    </td>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <img className="avatar avatar-xss avatar-4x3 me-2" src="./assets/svg/brands/paypal-icon.svg" alt="Image Description" />
                                            <span className="text-dark">••••@gmail.com</span>
                                        </div>
                                    </td>
                                    <td>$77.00</td>
                                    <td>
                                        <div className="btn-group" role="group">
                                            <a className="btn btn-white btn-sm" href="./ecommerce-order-details.html">
                                                <i className="bi-eye" /> View
                                            </a>
                                            {/* Button Group */}
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-white btn-icon btn-sm dropdown-toggle dropdown-toggle-empty" id="ordersExportDropdown10" data-bs-toggle="dropdown" aria-expanded="false" />
                                                <div className="dropdown-menu dropdown-menu-end mt-1" aria-labelledby="ordersExportDropdown10">
                                                    <span className="dropdown-header">Options</span>
                                                    <a className="js-export-copy dropdown-item" href="javascript:;">
                                                        <img className="avatar avatar-xss avatar-4x3 me-2" src="./assets/svg/illustrations/copy-icon.svg" alt="Image Description" />
                                                        Copy
                                                    </a>
                                                    <a className="js-export-print dropdown-item" href="javascript:;">
                                                        <img className="avatar avatar-xss avatar-4x3 me-2" src="./assets/svg/illustrations/print-icon.svg" alt="Image Description" />
                                                        Print
                                                    </a>
                                                    <div className="dropdown-divider" />
                                                    <span className="dropdown-header">Download options</span>
                                                    <a className="js-export-excel dropdown-item" href="javascript:;">
                                                        <img className="avatar avatar-xss avatar-4x3 me-2" src="./assets/svg/brands/excel-icon.svg" alt="Image Description" />
                                                        Excel
                                                    </a>
                                                    <a className="js-export-csv dropdown-item" href="javascript:;">
                                                        <img className="avatar avatar-xss avatar-4x3 me-2" src="./assets/svg/components/placeholder-csv-format.svg" alt="Image Description" />
                                                        .CSV
                                                    </a>
                                                    <a className="js-export-pdf dropdown-item" href="javascript:;">
                                                        <img className="avatar avatar-xss avatar-4x3 me-2" src="./assets/svg/brands/pdf-icon.svg" alt="Image Description" />
                                                        PDF
                                                    </a>
                                                    <div className="dropdown-divider" />
                                                    <a className="dropdown-item" href="javascript:;">
                                                        <i className="bi-trash dropdown-item-icon" /> Delete
                                                    </a>
                                                </div>
                                            </div>
                                            {/* End Unfold */}
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="table-column-pe-0">
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" id="ordersCheck11" />
                                            <label className="form-check-label" htmlFor="ordersCheck11" />
                                        </div>
                                    </td>
                                    <td className="table-column-ps-0">
                                        <a className="text-danger" href="./ecommerce-order-details.html">#93817</a>
                                        <i className="bi-exclamation-diamond-fill text-warning" />
                                    </td>
                                    <td>Aug 17, 2020, 12:36 (ET)</td>
                                    <td><a className="text-danger" href="./ecommerce-customer-details.html">Jase Marley</a></td>
                                    <td>
                                        <span className="badge bg-soft-warning text-warning">
                                            <span className="legend-indicator bg-warning" />Pending
                                        </span>
                                    </td>
                                    <td>
                                        <span className="badge bg-soft-dark text-dark">
                                            <span className="legend-indicator bg-dark" />Unfulfilled
                                        </span>
                                    </td>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <img className="avatar avatar-xss avatar-4x3 me-2" src="./assets/svg/brands/paypal-icon.svg" alt="Image Description" />
                                            <span className="text-dark">••••@gmail.com</span>
                                        </div>
                                    </td>
                                    <td className="text-danger">$77.00</td>
                                    <td>
                                        <div className="btn-group" role="group">
                                            <a className="btn btn-white btn-sm" href="./ecommerce-order-details.html">
                                                <i className="bi-eye" /> View
                                            </a>
                                            {/* Button Group */}
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-white btn-icon btn-sm dropdown-toggle dropdown-toggle-empty" id="ordersExportDropdown11" data-bs-toggle="dropdown" aria-expanded="false" />
                                                <div className="dropdown-menu dropdown-menu-end mt-1" aria-labelledby="ordersExportDropdown11">
                                                    <span className="dropdown-header">Options</span>
                                                    <a className="js-export-copy dropdown-item" href="javascript:;">
                                                        <img className="avatar avatar-xss avatar-4x3 me-2" src="./assets/svg/illustrations/copy-icon.svg" alt="Image Description" />
                                                        Copy
                                                    </a>
                                                    <a className="js-export-print dropdown-item" href="javascript:;">
                                                        <img className="avatar avatar-xss avatar-4x3 me-2" src="./assets/svg/illustrations/print-icon.svg" alt="Image Description" />
                                                        Print
                                                    </a>
                                                    <div className="dropdown-divider" />
                                                    <span className="dropdown-header">Download options</span>
                                                    <a className="js-export-excel dropdown-item" href="javascript:;">
                                                        <img className="avatar avatar-xss avatar-4x3 me-2" src="./assets/svg/brands/excel-icon.svg" alt="Image Description" />
                                                        Excel
                                                    </a>
                                                    <a className="js-export-csv dropdown-item" href="javascript:;">
                                                        <img className="avatar avatar-xss avatar-4x3 me-2" src="./assets/svg/components/placeholder-csv-format.svg" alt="Image Description" />
                                                        .CSV
                                                    </a>
                                                    <a className="js-export-pdf dropdown-item" href="javascript:;">
                                                        <img className="avatar avatar-xss avatar-4x3 me-2" src="./assets/svg/brands/pdf-icon.svg" alt="Image Description" />
                                                        PDF
                                                    </a>
                                                    <div className="dropdown-divider" />
                                                    <a className="dropdown-item" href="javascript:;">
                                                        <i className="bi-trash dropdown-item-icon" /> Delete
                                                    </a>
                                                </div>
                                            </div>
                                            {/* End Unfold */}
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="table-column-pe-0">
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" id="ordersCheck12" />
                                            <label className="form-check-label" htmlFor="ordersCheck12" />
                                        </div>
                                    </td>
                                    <td className="table-column-ps-0">
                                        <a href="./ecommerce-order-details.html">#43113</a>
                                    </td>
                                    <td>Aug 17, 2020, 12:25 (ET)</td>
                                    <td>
                                        <a className="text-body" href="./ecommerce-customer-details.html">Jacky Ferguson</a>
                                    </td>
                                    <td>
                                        <span className="badge bg-soft-success text-success">
                                            <span className="legend-indicator bg-success" />Paid
                                        </span>
                                    </td>
                                    <td>
                                        <span className="badge bg-soft-info text-info">
                                            <span className="legend-indicator bg-info" />Fulfilled
                                        </span>
                                    </td>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <img className="avatar avatar-xss avatar-4x3 me-2" src="./assets/svg/brands/mastercard.svg" alt="Image Description" />
                                            <span className="text-dark">•••• 5533</span>
                                        </div>
                                    </td>
                                    <td>$1,421.47</td>
                                    <td>
                                        <div className="btn-group" role="group">
                                            <a className="btn btn-white btn-sm" href="./ecommerce-order-details.html">
                                                <i className="bi-eye" /> View
                                            </a>
                                            {/* Button Group */}
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-white btn-icon btn-sm dropdown-toggle dropdown-toggle-empty" id="ordersExportDropdown12" data-bs-toggle="dropdown" aria-expanded="false" />
                                                <div className="dropdown-menu dropdown-menu-end mt-1" aria-labelledby="ordersExportDropdown12">
                                                    <span className="dropdown-header">Options</span>
                                                    <a className="js-export-copy dropdown-item" href="javascript:;">
                                                        <img className="avatar avatar-xss avatar-4x3 me-2" src="./assets/svg/illustrations/copy-icon.svg" alt="Image Description" />
                                                        Copy
                                                    </a>
                                                    <a className="js-export-print dropdown-item" href="javascript:;">
                                                        <img className="avatar avatar-xss avatar-4x3 me-2" src="./assets/svg/illustrations/print-icon.svg" alt="Image Description" />
                                                        Print
                                                    </a>
                                                    <div className="dropdown-divider" />
                                                    <span className="dropdown-header">Download options</span>
                                                    <a className="js-export-excel dropdown-item" href="javascript:;">
                                                        <img className="avatar avatar-xss avatar-4x3 me-2" src="./assets/svg/brands/excel-icon.svg" alt="Image Description" />
                                                        Excel
                                                    </a>
                                                    <a className="js-export-csv dropdown-item" href="javascript:;">
                                                        <img className="avatar avatar-xss avatar-4x3 me-2" src="./assets/svg/components/placeholder-csv-format.svg" alt="Image Description" />
                                                        .CSV
                                                    </a>
                                                    <a className="js-export-pdf dropdown-item" href="javascript:;">
                                                        <img className="avatar avatar-xss avatar-4x3 me-2" src="./assets/svg/brands/pdf-icon.svg" alt="Image Description" />
                                                        PDF
                                                    </a>
                                                    <div className="dropdown-divider" />
                                                    <a className="dropdown-item" href="javascript:;">
                                                        <i className="bi-trash dropdown-item-icon" /> Delete
                                                    </a>
                                                </div>
                                            </div>
                                            {/* End Unfold */}
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="table-column-pe-0">
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" id="ordersCheck13" />
                                            <label className="form-check-label" htmlFor="ordersCheck13" />
                                        </div>
                                    </td>
                                    <td className="table-column-ps-0">
                                        <a href="./ecommerce-order-details.html">#12412</a>
                                    </td>
                                    <td>Aug 16, 2020, 4:31 (ET)</td>
                                    <td>
                                        <a className="text-body" href="./ecommerce-customer-details.html">Brian Jackson</a>
                                    </td>
                                    <td>
                                        <span className="badge bg-soft-success text-success">
                                            <span className="legend-indicator bg-success" />Paid
                                        </span>
                                    </td>
                                    <td>
                                        <span className="badge bg-soft-info text-info">
                                            <span className="legend-indicator bg-info" />Fulfilled
                                        </span>
                                    </td>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <img className="avatar avatar-xss avatar-4x3 me-2" src="./assets/svg/brands/mastercard.svg" alt="Image Description" />
                                            <span className="text-dark">•••• 4440</span>
                                        </div>
                                    </td>
                                    <td>$45.00</td>
                                    <td>
                                        <div className="btn-group" role="group">
                                            <a className="btn btn-white btn-sm" href="./ecommerce-order-details.html">
                                                <i className="bi-eye" /> View
                                            </a>
                                            {/* Button Group */}
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-white btn-icon btn-sm dropdown-toggle dropdown-toggle-empty" id="ordersExportDropdown13" data-bs-toggle="dropdown" aria-expanded="false" />
                                                <div className="dropdown-menu dropdown-menu-end mt-1" aria-labelledby="ordersExportDropdown13">
                                                    <span className="dropdown-header">Options</span>
                                                    <a className="js-export-copy dropdown-item" href="javascript:;">
                                                        <img className="avatar avatar-xss avatar-4x3 me-2" src="./assets/svg/illustrations/copy-icon.svg" alt="Image Description" />
                                                        Copy
                                                    </a>
                                                    <a className="js-export-print dropdown-item" href="javascript:;">
                                                        <img className="avatar avatar-xss avatar-4x3 me-2" src="./assets/svg/illustrations/print-icon.svg" alt="Image Description" />
                                                        Print
                                                    </a>
                                                    <div className="dropdown-divider" />
                                                    <span className="dropdown-header">Download options</span>
                                                    <a className="js-export-excel dropdown-item" href="javascript:;">
                                                        <img className="avatar avatar-xss avatar-4x3 me-2" src="./assets/svg/brands/excel-icon.svg" alt="Image Description" />
                                                        Excel
                                                    </a>
                                                    <a className="js-export-csv dropdown-item" href="javascript:;">
                                                        <img className="avatar avatar-xss avatar-4x3 me-2" src="./assets/svg/components/placeholder-csv-format.svg" alt="Image Description" />
                                                        .CSV
                                                    </a>
                                                    <a className="js-export-pdf dropdown-item" href="javascript:;">
                                                        <img className="avatar avatar-xss avatar-4x3 me-2" src="./assets/svg/brands/pdf-icon.svg" alt="Image Description" />
                                                        PDF
                                                    </a>
                                                    <div className="dropdown-divider" />
                                                    <a className="dropdown-item" href="javascript:;">
                                                        <i className="bi-trash dropdown-item-icon" /> Delete
                                                    </a>
                                                </div>
                                            </div>
                                            {/* End Unfold */}
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="table-column-pe-0">
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" id="ordersCheck14" />
                                            <label className="form-check-label" htmlFor="ordersCheck14" />
                                        </div>
                                    </td>
                                    <td className="table-column-ps-0">
                                        <a className="text-danger" href="./ecommerce-order-details.html">#92271</a>
                                        <i className="bi-exclamation-diamond-fill text-warning" />
                                    </td>
                                    <td>Aug 16, 2020, 3:26 (ET)</td>
                                    <td><a className="text-danger" href="./ecommerce-customer-details.html">Kamilia Williams</a></td>
                                    <td>
                                        <span className="badge bg-soft-warning text-warning">
                                            <span className="legend-indicator bg-warning" />Pending
                                        </span>
                                    </td>
                                    <td>
                                        <span className="badge bg-soft-dark text-dark">
                                            <span className="legend-indicator bg-dark" />Unfulfilled
                                        </span>
                                    </td>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <img className="avatar avatar-xss avatar-4x3 me-2" src="./assets/svg/brands/mastercard.svg" alt="Image Description" />
                                            <span className="text-dark">•••• 6182</span>
                                        </div>
                                    </td>
                                    <td className="text-danger">$2,577.00</td>
                                    <td>
                                        <div className="btn-group" role="group">
                                            <a className="btn btn-white btn-sm" href="./ecommerce-order-details.html">
                                                <i className="bi-eye" /> View
                                            </a>
                                            {/* Button Group */}
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-white btn-icon btn-sm dropdown-toggle dropdown-toggle-empty" id="ordersExportDropdown14" data-bs-toggle="dropdown" aria-expanded="false" />
                                                <div className="dropdown-menu dropdown-menu-end mt-1" aria-labelledby="ordersExportDropdown14">
                                                    <span className="dropdown-header">Options</span>
                                                    <a className="js-export-copy dropdown-item" href="javascript:;">
                                                        <img className="avatar avatar-xss avatar-4x3 me-2" src="./assets/svg/illustrations/copy-icon.svg" alt="Image Description" />
                                                        Copy
                                                    </a>
                                                    <a className="js-export-print dropdown-item" href="javascript:;">
                                                        <img className="avatar avatar-xss avatar-4x3 me-2" src="./assets/svg/illustrations/print-icon.svg" alt="Image Description" />
                                                        Print
                                                    </a>
                                                    <div className="dropdown-divider" />
                                                    <span className="dropdown-header">Download options</span>
                                                    <a className="js-export-excel dropdown-item" href="javascript:;">
                                                        <img className="avatar avatar-xss avatar-4x3 me-2" src="./assets/svg/brands/excel-icon.svg" alt="Image Description" />
                                                        Excel
                                                    </a>
                                                    <a className="js-export-csv dropdown-item" href="javascript:;">
                                                        <img className="avatar avatar-xss avatar-4x3 me-2" src="./assets/svg/components/placeholder-csv-format.svg" alt="Image Description" />
                                                        .CSV
                                                    </a>
                                                    <a className="js-export-pdf dropdown-item" href="javascript:;">
                                                        <img className="avatar avatar-xss avatar-4x3 me-2" src="./assets/svg/brands/pdf-icon.svg" alt="Image Description" />
                                                        PDF
                                                    </a>
                                                    <div className="dropdown-divider" />
                                                    <a className="dropdown-item" href="javascript:;">
                                                        <i className="bi-trash dropdown-item-icon" /> Delete
                                                    </a>
                                                </div>
                                            </div>
                                            {/* End Unfold */}
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="table-column-pe-0">
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" id="ordersCheck15" />
                                            <label className="form-check-label" htmlFor="ordersCheck15" />
                                        </div>
                                    </td>
                                    <td className="table-column-ps-0">
                                        <a className="text-danger" href="./ecommerce-order-details.html">#62555</a>
                                        <i className="bi-exclamation-diamond-fill text-warning" />
                                    </td>
                                    <td>Aug 16, 2020, 2:54 (ET)</td>
                                    <td className="text-danger">No customer</td>
                                    <td>
                                        <span className="badge bg-soft-warning text-warning">
                                            <span className="legend-indicator bg-warning" />Pending
                                        </span>
                                    </td>
                                    <td>
                                        <span className="badge bg-soft-dark text-dark">
                                            <span className="legend-indicator bg-dark" />Unfulfilled
                                        </span>
                                    </td>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <img className="avatar avatar-xss avatar-4x3 me-2" src="./assets/svg/brands/paypal-icon.svg" alt="Image Description" />
                                            <span className="text-dark">••••@gmail.com</span>
                                        </div>
                                    </td>
                                    <td className="text-danger">$63.46</td>
                                    <td>
                                        <div className="btn-group" role="group">
                                            <a className="btn btn-white btn-sm" href="./ecommerce-order-details.html">
                                                <i className="bi-eye" /> View
                                            </a>
                                            {/* Button Group */}
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-white btn-icon btn-sm dropdown-toggle dropdown-toggle-empty" id="ordersExportDropdown15" data-bs-toggle="dropdown" aria-expanded="false" />
                                                <div className="dropdown-menu dropdown-menu-end mt-1" aria-labelledby="ordersExportDropdown15">
                                                    <span className="dropdown-header">Options</span>
                                                    <a className="js-export-copy dropdown-item" href="javascript:;">
                                                        <img className="avatar avatar-xss avatar-4x3 me-2" src="./assets/svg/illustrations/copy-icon.svg" alt="Image Description" />
                                                        Copy
                                                    </a>
                                                    <a className="js-export-print dropdown-item" href="javascript:;">
                                                        <img className="avatar avatar-xss avatar-4x3 me-2" src="./assets/svg/illustrations/print-icon.svg" alt="Image Description" />
                                                        Print
                                                    </a>
                                                    <div className="dropdown-divider" />
                                                    <span className="dropdown-header">Download options</span>
                                                    <a className="js-export-excel dropdown-item" href="javascript:;">
                                                        <img className="avatar avatar-xss avatar-4x3 me-2" src="./assets/svg/brands/excel-icon.svg" alt="Image Description" />
                                                        Excel
                                                    </a>
                                                    <a className="js-export-csv dropdown-item" href="javascript:;">
                                                        <img className="avatar avatar-xss avatar-4x3 me-2" src="./assets/svg/components/placeholder-csv-format.svg" alt="Image Description" />
                                                        .CSV
                                                    </a>
                                                    <a className="js-export-pdf dropdown-item" href="javascript:;">
                                                        <img className="avatar avatar-xss avatar-4x3 me-2" src="./assets/svg/brands/pdf-icon.svg" alt="Image Description" />
                                                        PDF
                                                    </a>
                                                    <div className="dropdown-divider" />
                                                    <a className="dropdown-item" href="javascript:;">
                                                        <i className="bi-trash dropdown-item-icon" /> Delete
                                                    </a>
                                                </div>
                                            </div>
                                            {/* End Unfold */}
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="table-column-pe-0">
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" id="ordersCheck16" />
                                            <label className="form-check-label" htmlFor="ordersCheck16" />
                                        </div>
                                    </td>
                                    <td className="table-column-ps-0">
                                        <a href="./ecommerce-order-details.html">#35331</a>
                                    </td>
                                    <td>Aug 16, 2020, 2:48 (ET)</td>
                                    <td>
                                        <a className="text-body" href="./ecommerce-customer-details.html">Victoria Vicky</a>
                                    </td>
                                    <td>
                                        <span className="badge bg-soft-success text-success">
                                            <span className="legend-indicator bg-success" />Paid
                                        </span>
                                    </td>
                                    <td>
                                        <span className="badge bg-soft-info text-info">
                                            <span className="legend-indicator bg-info" />Fulfilled
                                        </span>
                                    </td>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <img className="avatar avatar-xss avatar-4x3 me-2" src="./assets/svg/brands/paypal-icon.svg" alt="Image Description" />
                                            <span className="text-dark">••••@gmail.com</span>
                                        </div>
                                    </td>
                                    <td>$4,639.00</td>
                                    <td>
                                        <div className="btn-group" role="group">
                                            <a className="btn btn-white btn-sm" href="./ecommerce-order-details.html">
                                                <i className="bi-eye" /> View
                                            </a>
                                            {/* Button Group */}
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-white btn-icon btn-sm dropdown-toggle dropdown-toggle-empty" id="ordersExportDropdown16" data-bs-toggle="dropdown" aria-expanded="false" />
                                                <div className="dropdown-menu dropdown-menu-end mt-1" aria-labelledby="ordersExportDropdown16">
                                                    <span className="dropdown-header">Options</span>
                                                    <a className="js-export-copy dropdown-item" href="javascript:;">
                                                        <img className="avatar avatar-xss avatar-4x3 me-2" src="./assets/svg/illustrations/copy-icon.svg" alt="Image Description" />
                                                        Copy
                                                    </a>
                                                    <a className="js-export-print dropdown-item" href="javascript:;">
                                                        <img className="avatar avatar-xss avatar-4x3 me-2" src="./assets/svg/illustrations/print-icon.svg" alt="Image Description" />
                                                        Print
                                                    </a>
                                                    <div className="dropdown-divider" />
                                                    <span className="dropdown-header">Download options</span>
                                                    <a className="js-export-excel dropdown-item" href="javascript:;">
                                                        <img className="avatar avatar-xss avatar-4x3 me-2" src="./assets/svg/brands/excel-icon.svg" alt="Image Description" />
                                                        Excel
                                                    </a>
                                                    <a className="js-export-csv dropdown-item" href="javascript:;">
                                                        <img className="avatar avatar-xss avatar-4x3 me-2" src="./assets/svg/components/placeholder-csv-format.svg" alt="Image Description" />
                                                        .CSV
                                                    </a>
                                                    <a className="js-export-pdf dropdown-item" href="javascript:;">
                                                        <img className="avatar avatar-xss avatar-4x3 me-2" src="./assets/svg/brands/pdf-icon.svg" alt="Image Description" />
                                                        PDF
                                                    </a>
                                                    <div className="dropdown-divider" />
                                                    <a className="dropdown-item" href="javascript:;">
                                                        <i className="bi-trash dropdown-item-icon" /> Delete
                                                    </a>
                                                </div>
                                            </div>
                                            {/* End Unfold */}
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="table-column-pe-0">
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" id="ordersCheck17" />
                                            <label className="form-check-label" htmlFor="ordersCheck17" />
                                        </div>
                                    </td>
                                    <td className="table-column-ps-0">
                                        <a href="./ecommerce-order-details.html">#45321</a>
                                    </td>
                                    <td>Aug 16, 2020, 2:40 (ET)</td>
                                    <td>
                                        <a className="text-body" href="./ecommerce-customer-details.html">Anna Alexsandrova</a>
                                    </td>
                                    <td>
                                        <span className="badge bg-soft-success text-success">
                                            <span className="legend-indicator bg-success" />Paid
                                        </span>
                                    </td>
                                    <td>
                                        <span className="badge bg-soft-dark text-dark">
                                            <span className="legend-indicator bg-dark" />Unfulfilled
                                        </span>
                                    </td>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <img className="avatar avatar-xss avatar-4x3 me-2" src="./assets/svg/brands/paypal-icon.svg" alt="Image Description" />
                                            <span className="text-dark">••••@gmail.com</span>
                                        </div>
                                    </td>
                                    <td>$5,253.00</td>
                                    <td>
                                        <div className="btn-group" role="group">
                                            <a className="btn btn-white btn-sm" href="./ecommerce-order-details.html">
                                                <i className="bi-eye" /> View
                                            </a>
                                            {/* Button Group */}
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-white btn-icon btn-sm dropdown-toggle dropdown-toggle-empty" id="ordersExportDropdown17" data-bs-toggle="dropdown" aria-expanded="false" />
                                                <div className="dropdown-menu dropdown-menu-end mt-1" aria-labelledby="ordersExportDropdown17">
                                                    <span className="dropdown-header">Options</span>
                                                    <a className="js-export-copy dropdown-item" href="javascript:;">
                                                        <img className="avatar avatar-xss avatar-4x3 me-2" src="./assets/svg/illustrations/copy-icon.svg" alt="Image Description" />
                                                        Copy
                                                    </a>
                                                    <a className="js-export-print dropdown-item" href="javascript:;">
                                                        <img className="avatar avatar-xss avatar-4x3 me-2" src="./assets/svg/illustrations/print-icon.svg" alt="Image Description" />
                                                        Print
                                                    </a>
                                                    <div className="dropdown-divider" />
                                                    <span className="dropdown-header">Download options</span>
                                                    <a className="js-export-excel dropdown-item" href="javascript:;">
                                                        <img className="avatar avatar-xss avatar-4x3 me-2" src="./assets/svg/brands/excel-icon.svg" alt="Image Description" />
                                                        Excel
                                                    </a>
                                                    <a className="js-export-csv dropdown-item" href="javascript:;">
                                                        <img className="avatar avatar-xss avatar-4x3 me-2" src="./assets/svg/components/placeholder-csv-format.svg" alt="Image Description" />
                                                        .CSV
                                                    </a>
                                                    <a className="js-export-pdf dropdown-item" href="javascript:;">
                                                        <img className="avatar avatar-xss avatar-4x3 me-2" src="./assets/svg/brands/pdf-icon.svg" alt="Image Description" />
                                                        PDF
                                                    </a>
                                                    <div className="dropdown-divider" />
                                                    <a className="dropdown-item" href="javascript:;">
                                                        <i className="bi-trash dropdown-item-icon" /> Delete
                                                    </a>
                                                </div>
                                            </div>
                                            {/* End Unfold */}
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="table-column-pe-0">
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" id="ordersCheck18" />
                                            <label className="form-check-label" htmlFor="ordersCheck18" />
                                        </div>
                                    </td>
                                    <td className="table-column-ps-0">
                                        <a href="./ecommerce-order-details.html">#23541</a>
                                    </td>
                                    <td>Aug 16, 2020, 1:59 (ET)</td>
                                    <td>
                                        <a className="text-body" href="./ecommerce-customer-details.html">Max Norway</a>
                                    </td>
                                    <td>
                                        <span className="badge bg-soft-success text-success">
                                            <span className="legend-indicator bg-success" />Paid
                                        </span>
                                    </td>
                                    <td>
                                        <span className="badge bg-soft-info text-info">
                                            <span className="legend-indicator bg-info" />Fulfilled
                                        </span>
                                    </td>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <img className="avatar avatar-xss avatar-4x3 me-2" src="./assets/svg/brands/mastercard.svg" alt="Image Description" />
                                            <span className="text-dark">•••• 3091</span>
                                        </div>
                                    </td>
                                    <td>$499.00</td>
                                    <td>
                                        <div className="btn-group" role="group">
                                            <a className="btn btn-white btn-sm" href="./ecommerce-order-details.html">
                                                <i className="bi-eye" /> View
                                            </a>
                                            {/* Button Group */}
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-white btn-icon btn-sm dropdown-toggle dropdown-toggle-empty" id="ordersExportDropdown18" data-bs-toggle="dropdown" aria-expanded="false" />
                                                <div className="dropdown-menu dropdown-menu-end mt-1" aria-labelledby="ordersExportDropdown18">
                                                    <span className="dropdown-header">Options</span>
                                                    <a className="js-export-copy dropdown-item" href="javascript:;">
                                                        <img className="avatar avatar-xss avatar-4x3 me-2" src="./assets/svg/illustrations/copy-icon.svg" alt="Image Description" />
                                                        Copy
                                                    </a>
                                                    <a className="js-export-print dropdown-item" href="javascript:;">
                                                        <img className="avatar avatar-xss avatar-4x3 me-2" src="./assets/svg/illustrations/print-icon.svg" alt="Image Description" />
                                                        Print
                                                    </a>
                                                    <div className="dropdown-divider" />
                                                    <span className="dropdown-header">Download options</span>
                                                    <a className="js-export-excel dropdown-item" href="javascript:;">
                                                        <img className="avatar avatar-xss avatar-4x3 me-2" src="./assets/svg/brands/excel-icon.svg" alt="Image Description" />
                                                        Excel
                                                    </a>
                                                    <a className="js-export-csv dropdown-item" href="javascript:;">
                                                        <img className="avatar avatar-xss avatar-4x3 me-2" src="./assets/svg/components/placeholder-csv-format.svg" alt="Image Description" />
                                                        .CSV
                                                    </a>
                                                    <a className="js-export-pdf dropdown-item" href="javascript:;">
                                                        <img className="avatar avatar-xss avatar-4x3 me-2" src="./assets/svg/brands/pdf-icon.svg" alt="Image Description" />
                                                        PDF
                                                    </a>
                                                    <div className="dropdown-divider" />
                                                    <a className="dropdown-item" href="javascript:;">
                                                        <i className="bi-trash dropdown-item-icon" /> Delete
                                                    </a>
                                                </div>
                                            </div>
                                            {/* End Unfold */}
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="table-column-pe-0">
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" id="ordersCheck19" />
                                            <label className="form-check-label" htmlFor="ordersCheck19" />
                                        </div>
                                    </td>
                                    <td className="table-column-ps-0">
                                        <a href="./ecommerce-order-details.html">#68681</a>
                                    </td>
                                    <td>Aug 16, 2020, 1:55 (ET)</td>
                                    <td>
                                        <a className="text-body" href="./ecommerce-customer-details.html">Williams Tonston</a>
                                    </td>
                                    <td>
                                        <span className="badge bg-soft-success text-success">
                                            <span className="legend-indicator bg-success" />Paid
                                        </span>
                                    </td>
                                    <td>
                                        <span className="badge bg-soft-info text-info">
                                            <span className="legend-indicator bg-info" />Fulfilled
                                        </span>
                                    </td>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <img className="avatar avatar-xss avatar-4x3 me-2" src="./assets/svg/brands/mastercard.svg" alt="Image Description" />
                                            <span className="text-dark">•••• 8837</span>
                                        </div>
                                    </td>
                                    <td>$171.00</td>
                                    <td>
                                        <div className="btn-group" role="group">
                                            <a className="btn btn-white btn-sm" href="./ecommerce-order-details.html">
                                                <i className="bi-eye" /> View
                                            </a>
                                            {/* Button Group */}
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-white btn-icon btn-sm dropdown-toggle dropdown-toggle-empty" id="ordersExportDropdown19" data-bs-toggle="dropdown" aria-expanded="false" />
                                                <div className="dropdown-menu dropdown-menu-end mt-1" aria-labelledby="ordersExportDropdown19">
                                                    <span className="dropdown-header">Options</span>
                                                    <a className="js-export-copy dropdown-item" href="javascript:;">
                                                        <img className="avatar avatar-xss avatar-4x3 me-2" src="./assets/svg/illustrations/copy-icon.svg" alt="Image Description" />
                                                        Copy
                                                    </a>
                                                    <a className="js-export-print dropdown-item" href="javascript:;">
                                                        <img className="avatar avatar-xss avatar-4x3 me-2" src="./assets/svg/illustrations/print-icon.svg" alt="Image Description" />
                                                        Print
                                                    </a>
                                                    <div className="dropdown-divider" />
                                                    <span className="dropdown-header">Download options</span>
                                                    <a className="js-export-excel dropdown-item" href="javascript:;">
                                                        <img className="avatar avatar-xss avatar-4x3 me-2" src="./assets/svg/brands/excel-icon.svg" alt="Image Description" />
                                                        Excel
                                                    </a>
                                                    <a className="js-export-csv dropdown-item" href="javascript:;">
                                                        <img className="avatar avatar-xss avatar-4x3 me-2" src="./assets/svg/components/placeholder-csv-format.svg" alt="Image Description" />
                                                        .CSV
                                                    </a>
                                                    <a className="js-export-pdf dropdown-item" href="javascript:;">
                                                        <img className="avatar avatar-xss avatar-4x3 me-2" src="./assets/svg/brands/pdf-icon.svg" alt="Image Description" />
                                                        PDF
                                                    </a>
                                                    <div className="dropdown-divider" />
                                                    <a className="dropdown-item" href="javascript:;">
                                                        <i className="bi-trash dropdown-item-icon" /> Delete
                                                    </a>
                                                </div>
                                            </div>
                                            {/* End Unfold */}
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="table-column-pe-0">
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" id="ordersCheck20" />
                                            <label className="form-check-label" htmlFor="ordersCheck20" />
                                        </div>
                                    </td>
                                    <td className="table-column-ps-0">
                                        <a href="./ecommerce-order-details.html">#78323</a>
                                    </td>
                                    <td>Aug 16, 2020, 1:15 (ET)</td>
                                    <td>
                                        <a className="text-body" href="./ecommerce-customer-details.html">Victor Martinov</a>
                                    </td>
                                    <td>
                                        <span className="badge bg-soft-warning text-warning">
                                            <span className="legend-indicator bg-warning" />Pending
                                        </span>
                                    </td>
                                    <td>
                                        <span className="badge bg-soft-dark text-dark">
                                            <span className="legend-indicator bg-dark" />Unfulfilled
                                        </span>
                                    </td>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <img className="avatar avatar-xss avatar-4x3 me-2" src="./assets/svg/brands/mastercard.svg" alt="Image Description" />
                                            <span className="text-dark">•••• 3566</span>
                                        </div>
                                    </td>
                                    <td>$348.55</td>
                                    <td>
                                        <div className="btn-group" role="group">
                                            <a className="btn btn-white btn-sm" href="./ecommerce-order-details.html">
                                                <i className="bi-eye" /> View
                                            </a>
                                            {/* Button Group */}
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-white btn-icon btn-sm dropdown-toggle dropdown-toggle-empty" id="ordersExportDropdown20" data-bs-toggle="dropdown" aria-expanded="false" />
                                                <div className="dropdown-menu dropdown-menu-end mt-1" aria-labelledby="ordersExportDropdown20">
                                                    <span className="dropdown-header">Options</span>
                                                    <a className="js-export-copy dropdown-item" href="javascript:;">
                                                        <img className="avatar avatar-xss avatar-4x3 me-2" src="./assets/svg/illustrations/copy-icon.svg" alt="Image Description" />
                                                        Copy
                                                    </a>
                                                    <a className="js-export-print dropdown-item" href="javascript:;">
                                                        <img className="avatar avatar-xss avatar-4x3 me-2" src="./assets/svg/illustrations/print-icon.svg" alt="Image Description" />
                                                        Print
                                                    </a>
                                                    <div className="dropdown-divider" />
                                                    <span className="dropdown-header">Download options</span>
                                                    <a className="js-export-excel dropdown-item" href="javascript:;">
                                                        <img className="avatar avatar-xss avatar-4x3 me-2" src="./assets/svg/brands/excel-icon.svg" alt="Image Description" />
                                                        Excel
                                                    </a>
                                                    <a className="js-export-csv dropdown-item" href="javascript:;">
                                                        <img className="avatar avatar-xss avatar-4x3 me-2" src="./assets/svg/components/placeholder-csv-format.svg" alt="Image Description" />
                                                        .CSV
                                                    </a>
                                                    <a className="js-export-pdf dropdown-item" href="javascript:;">
                                                        <img className="avatar avatar-xss avatar-4x3 me-2" src="./assets/svg/brands/pdf-icon.svg" alt="Image Description" />
                                                        PDF
                                                    </a>
                                                    <div className="dropdown-divider" />
                                                    <a className="dropdown-item" href="javascript:;">
                                                        <i className="bi-trash dropdown-item-icon" /> Delete
                                                    </a>
                                                </div>
                                            </div>
                                            {/* End Unfold */}
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    {/* End Table */}
                    {/* Footer */}
                    <div className="card-footer">
                        <div className="row justify-content-center justify-content-sm-between align-items-sm-center">
                            <div className="col-sm mb-2 mb-sm-0">
                                <div className="d-flex justify-content-center justify-content-sm-start align-items-center">
                                    <span className="me-2">Showing:</span>
                                    {/* Select */}
                                    <div className="tom-select-custom">
                                        <select id="datatableEntries" className="js-select form-select form-select-borderless w-auto" autoComplete="off" data-hs-tom-select-options="{
                                  &quot;searchInDropdown&quot;: false,
                                  &quot;hideSearch&quot;: true
                                }">
                                            <option value={12} selected>12</option>
                                            <option value={14}>14</option>
                                            <option value={16}>16</option>
                                            <option value={18}>18</option>
                                        </select>
                                    </div>
                                    {/* End Select */}
                                    <span className="text-secondary me-2">of</span>
                                    {/* Pagination Quantity */}
                                    <span id="datatableWithPaginationInfoTotalQty" />
                                </div>
                            </div>
                            {/* End Col */}
                            <div className="col-sm-auto">
                                <div className="d-flex justify-content-center justify-content-sm-end">
                                    {/* Pagination */}
                                    <nav id="datatablePagination" aria-label="Activity pagination" />
                                </div>
                            </div>
                            {/* End Col */}
                        </div>
                        {/* End Row */}
                    </div>
                    {/* End Footer */}
                </div>
                {/* End Card */}
            </div>
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

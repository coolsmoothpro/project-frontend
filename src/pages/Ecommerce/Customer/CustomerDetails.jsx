import React from 'react'
import Box from '@mui/material/Box';
import { ResponsiveChartContainer } from '@mui/x-charts/ResponsiveChartContainer';
import { LinePlot } from '@mui/x-charts/LineChart';

import { ChartsXAxis } from '@mui/x-charts/ChartsXAxis';
import { ChartsYAxis } from '@mui/x-charts/ChartsYAxis';

const timeData = [
  new Date(2023, 7, 31, 1),   // 1 AM
  new Date(2023, 7, 31, 2),   // 2 AM
  new Date(2023, 7, 31, 3),   // 3 AM
  new Date(2023, 7, 31, 4),   // 4 AM
];

const y1 = [8, 12, 5, 8];
const y2 = [5, 12, 16, 10];

const config = {
  series: [
    { type: 'line', data: y1, color:'#377dff' },
    { type: 'line', data: y2, color: '#c0c0c0' },
  ],
  height: 200,
  xAxis: [
    {
      data: timeData,
      scaleType: 'time',
      valueFormatter: (date) =>
        date.toLocaleTimeString('en-US', {
          hour: 'numeric',
          hour12: true,
        }), // Formatting X-axis labels as "1 AM", "2 AM", etc.
    },
  ],
};

function ActivityGraph() {
  return (
    <Box sx={{ width: '100%', maxWidth: 600 }}>
      <ResponsiveChartContainer {...config}>
        <LinePlot />
        {/* <ChartsXAxis /> */}
        <ChartsYAxis />
      </ResponsiveChartContainer>
    </Box>
  );
}


export default function CustomerDetails() {
    return (
        <>
            <div className="content container-fluid">
                {/* Page Header */}
                <div className="page-header">
                    <div className="row align-items-center">
                        <div className="col-sm mb-2 mb-sm-0">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb breadcrumb-no-gutter">
                                    <li className="breadcrumb-item"><a className="breadcrumb-link" href="./ecommerce-customers.html">Customers</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Customer details</li>
                                </ol>
                            </nav>
                            <h1 className="page-header-title">Anne Richard</h1>
                        </div>
                        {/* End Col */}
                        <div className="col-sm-auto">
                            <div className="d-flex gap-2">
                                <button type="button" className="btn btn-ghost-secondary btn-icon btn-sm rounded-circle" data-bs-toggle="tooltip" data-bs-placement="right" title="Previous customer">
                                    <i className="bi-arrow-left" />
                                </button>
                                <button type="button" className="btn btn-ghost-secondary btn-icon btn-sm rounded-circle" data-bs-toggle="tooltip" data-bs-placement="right" title="Next customer">
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
                    <div className="col-lg-8">
                        {/* Card */}
                        <div className="card mb-3 mb-lg-5">
                            {/* Body */}
                            <div className="card-body">
                                {/* Media */}
                                <div className="d-flex align-items-center mb-5">
                                    <div className="flex-shrink-0">
                                        <div className="avatar avatar-lg avatar-circle">
                                            <img className="avatar-img" src="./assets/img/160x160/img9.jpg" alt="Image Description" />
                                        </div>
                                    </div>
                                    <div className="flex-grow-1 mx-3">
                                        <div className="d-flex mb-1">
                                            <h3 className="mb-0 me-3">Anne Richard</h3>
                                            {/* Dropdown */}
                                            <div className="dropdown" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit">
                                                <button type="button" className="btn btn-white btn-icon btn-xs rounded-circle" id="editDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i className="bi-pencil-fill" />
                                                </button>
                                                <div className="dropdown-menu dropdown-card mt-1" aria-labelledby="editDropdown" style={{ minWidth: '20rem' }}>
                                                    {/* Card */}
                                                    <div className="card">
                                                        <div className="card-body">
                                                            <div className="row gx-3">
                                                                <div className="col-sm-6 mb-3 mb-sm-0">
                                                                    <label htmlFor="firstNameLabel" className="form-label">First name</label>
                                                                    <input type="text" className="form-control" name="firstName" id="firstNameLabel" placeholder="Clarice" aria-label="Clarice" defaultValue="Anna" />
                                                                </div>
                                                                {/* End Col */}
                                                                <div className="col-sm-6">
                                                                    <label htmlFor="lastNameLabel" className="form-label">Last name</label>
                                                                    <input type="text" className="form-control" name="lastName" id="lastNameLabel" placeholder="Boone" aria-label="Boone" defaultValue="Richard" />
                                                                </div>
                                                                {/* End Col */}
                                                            </div>
                                                            {/* End Row */}
                                                            <div className="d-flex justify-content-end gap-2 mt-3">
                                                                <button type="button" className="btn btn-white btn-sm">Cancel</button>
                                                                <button type="button" className="btn btn-primary btn-sm">Save</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* End Body */}
                                                </div>
                                            </div>
                                            {/* End Dropdown */}
                                        </div>
                                        <span className="fs-6">Customer for 3 months</span>
                                    </div>
                                    <div className="d-none d-sm-inline-block ms-auto text-end">
                                        {/* Dropdown */}
                                        <div className="dropdown">
                                            <button type="button" className="btn btn-white btn-sm" id="actionsDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                                Actions <i className="bi-chevron-down" />
                                            </button>
                                            <div className="dropdown-menu mt-1" aria-labelledby="actionsDropdown">
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-envelope dropdown-item-icon" /> Email
                                                </a>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-telephone dropdown-item-icon" /> Call
                                                </a>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-arrow-repeat dropdown-item-icon" /> Merge
                                                </a>
                                                <div className="dropdown-divider" />
                                                <a className="dropdown-item text-danger" href="#">
                                                    <i className="bi-trash dropdown-item-icon text-danger" />
                                                    Delete
                                                </a>
                                            </div>
                                        </div>
                                        {/* End Dropdown */}
                                    </div>
                                </div>
                                {/* End Media */}
                                <label className="form-label">Customer note</label>
                                {/* Quill */}
                                <div className="quill-custom">
                                    <div className="js-quill" style={{ height: '15rem' }} data-hs-quill-options="{
                     &quot;placeholder&quot;: &quot;Type your description...&quot;,
                      &quot;modules&quot;: {
                        &quot;toolbar&quot;: [
                          [&quot;bold&quot;, &quot;italic&quot;, &quot;underline&quot;, &quot;strike&quot;, &quot;link&quot;, &quot;image&quot;, &quot;blockquote&quot;, &quot;code&quot;, {&quot;list&quot;: &quot;bullet&quot;}]
                        ]
                      }
                     }">
                                    </div>
                                </div>
                                {/* End Quill */}
                            </div>
                            {/* Body */}
                            {/* Footer */}
                            <div className="card-footer">
                                <div className="d-flex justify-content-end gap-3">
                                    <button type="submit" className="btn btn-white">Discard</button>
                                    <button type="submit" className="btn btn-primary">Save changes</button>
                                </div>
                            </div>
                            {/* End Footer */}
                        </div>
                        {/* End Card */}
                        {/* Card */}
                        <div className="card mb-3 mb-lg-5">
                            {/* Header */}
                            <div className="card-header card-header-content-sm-between">
                                <div className="d-grid gap-2 mb-2 mb-sm-0">
                                    <h4 className="card-header-title">Orders placed</h4>
                                    {/* Datatable Info */}
                                    <div id="datatableCounterInfo" style={{ display: 'none' }}>
                                        <div className="d-flex align-items-center">
                                            <span className="fs-5 me-3">
                                                <span id="datatableCounter">0</span>
                                                Selected
                                            </span>
                                            <a className="btn btn-outline-danger btn-sm" href="javascript:;">
                                                <i className="bi-trash" /> Delete
                                            </a>
                                        </div>
                                    </div>
                                    {/* End Datatable Info */}
                                </div>
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
                                    <ul className="nav nav-segment nav-fill">
                                        <li className="nav-item">
                                            <a className="nav-link active" href="#">All orders</a>
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
                            {/* End Header */}
                            {/* Body */}
                            <div className="card-body">
                                {/* Input Group */}
                                <div className="input-group input-group-merge">
                                    <div className="input-group-prepend input-group-text">
                                        <i className="bi-search" />
                                    </div>
                                    <input id="datatableSearch" type="search" className="form-control" placeholder="Search orders" aria-label="Search orders" />
                                </div>
                                {/* End Input Group */}
                            </div>
                            {/* End Body */}
                            {/* Table */}
                            <div className="table-responsive datatable-custom">
                                <table id="datatable" className="table table-borderless table-thead-bordered table-nowrap table-align-middle card-table" data-hs-datatables-options="{
                       &quot;columnDefs&quot;: [{
                          &quot;targets&quot;: [0, 5],
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
                                            <th scope="col" className="table-column-pe-0">
                                                <div className="form-check">
                                                    <input id="datatableCheckAll" type="checkbox" className="form-check-input" />
                                                    <label className="form-check-label" htmlFor="datatableCheckAll" />
                                                </div>
                                            </th>
                                            <th className="table-column-ps-0">Order</th>
                                            <th>Date</th>
                                            <th>Payment status</th>
                                            <th>Total</th>
                                            <th>Invoice</th>
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
                                            <td>Aug 17, 2020</td>
                                            <td>
                                                <span className="badge bg-soft-success text-success">
                                                    <span className="legend-indicator bg-success" />Paid
                                                </span>
                                            </td>
                                            <td>$256.39</td>
                                            <td>
                                                <a className="btn btn-white btn-sm" href="javascript:;" data-bs-toggle="modal" data-bs-target="#accountInvoiceReceiptModal">
                                                    <i className="bi-receipt me-1" /> Invoice
                                                </a>
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
                                            <td>Aug 17, 2020</td>
                                            <td>
                                                <span className="badge bg-soft-success text-success">
                                                    <span className="legend-indicator bg-success" />Paid
                                                </span>
                                            </td>
                                            <td>$2,125.00</td>
                                            <td>
                                                <a className="btn btn-white btn-sm" href="javascript:;" data-bs-toggle="modal" data-bs-target="#accountInvoiceReceiptModal">
                                                    <i className="bi-receipt me-1" /> Invoice
                                                </a>
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
                                            <td>Aug 03, 2020</td>
                                            <td>
                                                <span className="badge bg-soft-success text-success">
                                                    <span className="legend-indicator bg-success" />Paid
                                                </span>
                                            </td>
                                            <td>$532.99</td>
                                            <td>
                                                <a className="btn btn-white btn-sm" href="javascript:;" data-bs-toggle="modal" data-bs-target="#accountInvoiceReceiptModal">
                                                    <i className="bi-receipt me-1" /> Invoice
                                                </a>
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
                                            <td>July 29, 2020</td>
                                            <td>
                                                <span className="badge bg-soft-warning text-warning">
                                                    <span className="legend-indicator bg-warning" />Pending
                                                </span>
                                            </td>
                                            <td>$1,035.02</td>
                                            <td>
                                                <a className="btn btn-white btn-sm" href="javascript:;" data-bs-toggle="modal" data-bs-target="#accountInvoiceReceiptModal">
                                                    <i className="bi-receipt me-1" /> Invoice
                                                </a>
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
                                            <td>July 11, 2020</td>
                                            <td>
                                                <span className="badge bg-soft-success text-success">
                                                    <span className="legend-indicator bg-success" />Paid
                                                </span>
                                            </td>
                                            <td>$68.53</td>
                                            <td>
                                                <a className="btn btn-white btn-sm" href="javascript:;" data-bs-toggle="modal" data-bs-target="#accountInvoiceReceiptModal">
                                                    <i className="bi-receipt me-1" /> Invoice
                                                </a>
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
                                            <td>July 04, 2020</td>
                                            <td>
                                                <span className="badge bg-soft-success text-success">
                                                    <span className="legend-indicator bg-success" />Paid
                                                </span>
                                            </td>
                                            <td>$100.00</td>
                                            <td>
                                                <a className="btn btn-white btn-sm" href="javascript:;" data-bs-toggle="modal" data-bs-target="#accountInvoiceReceiptModal">
                                                    <i className="bi-receipt me-1" /> Invoice
                                                </a>
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
                                                <i className="tio-warning text-warning" />
                                            </td>
                                            <td>June 27, 2020</td>
                                            <td>
                                                <span className="badge bg-soft-warning text-warning">
                                                    <span className="legend-indicator bg-warning" />Pending
                                                </span>
                                            </td>
                                            <td className="text-danger">$89.46</td>
                                            <td>
                                                <a className="btn btn-white btn-sm" href="javascript:;" data-bs-toggle="modal" data-bs-target="#accountInvoiceReceiptModal">
                                                    <i className="bi-receipt me-1" /> Invoice
                                                </a>
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
                                                <i className="tio-warning text-warning" />
                                            </td>
                                            <td>June 15, 2020</td>
                                            <td>
                                                <span className="badge bg-soft-warning text-warning">
                                                    <span className="legend-indicator bg-warning" />Pending
                                                </span>
                                            </td>
                                            <td className="text-danger">$3,535.46</td>
                                            <td>
                                                <a className="btn btn-white btn-sm" href="javascript:;" data-bs-toggle="modal" data-bs-target="#accountInvoiceReceiptModal">
                                                    <i className="bi-receipt me-1" /> Invoice
                                                </a>
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
                                            <td>June 12, 2020</td>
                                            <td>
                                                <span className="badge bg-soft-success text-success">
                                                    <span className="legend-indicator bg-success" />Paid
                                                </span>
                                            </td>
                                            <td>$23.89</td>
                                            <td>
                                                <a className="btn btn-white btn-sm" href="javascript:;" data-bs-toggle="modal" data-bs-target="#accountInvoiceReceiptModal">
                                                    <i className="bi-receipt me-1" /> Invoice
                                                </a>
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
                                            <td>June 02, 2020</td>
                                            <td>
                                                <span className="badge bg-soft-success text-success">
                                                    <span className="legend-indicator bg-success" />Paid
                                                </span>
                                            </td>
                                            <td>$77.00</td>
                                            <td>
                                                <a className="btn btn-white btn-sm" href="javascript:;" data-bs-toggle="modal" data-bs-target="#accountInvoiceReceiptModal">
                                                    <i className="bi-receipt me-1" /> Invoice
                                                </a>
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
                                                <i className="tio-warning text-warning" />
                                            </td>
                                            <td>May 30, 2020</td>
                                            <td>
                                                <span className="badge bg-soft-warning text-warning">
                                                    <span className="legend-indicator bg-warning" />Pending
                                                </span>
                                            </td>
                                            <td className="text-danger">$77.00</td>
                                            <td>
                                                <a className="btn btn-white btn-sm" href="javascript:;" data-bs-toggle="modal" data-bs-target="#accountInvoiceReceiptModal">
                                                    <i className="bi-receipt me-1" /> Invoice
                                                </a>
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
                                            <td>May 25, 2020</td>
                                            <td>
                                                <span className="badge bg-soft-success text-success">
                                                    <span className="legend-indicator bg-success" />Paid
                                                </span>
                                            </td>
                                            <td>$1,421.47</td>
                                            <td>
                                                <a className="btn btn-white btn-sm" href="javascript:;" data-bs-toggle="modal" data-bs-target="#accountInvoiceReceiptModal">
                                                    <i className="bi-receipt me-1" /> Invoice
                                                </a>
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
                                            <td>May 16, 2020</td>
                                            <td>
                                                <span className="badge bg-soft-success text-success">
                                                    <span className="legend-indicator bg-success" />Paid
                                                </span>
                                            </td>
                                            <td>$45.00</td>
                                            <td>
                                                <a className="btn btn-white btn-sm" href="javascript:;" data-bs-toggle="modal" data-bs-target="#accountInvoiceReceiptModal">
                                                    <i className="bi-receipt me-1" /> Invoice
                                                </a>
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
                                                    <option value={12}>12</option>
                                                    <option value={14} selected>14</option>
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
                        {/* Card */}
                        <div className="card mb-3 mb-lg-5">
                            {/* Header */}
                            <div className="card-header card-header-content-between">
                                <h4 className="card-header-title">Timeline</h4>
                                {/* Checkbox */}
                                <div className="form-check">
                                    <input id="showCommentsCheckbox" type="checkbox" className="form-check-input" defaultChecked />
                                    <label className="form-check-label" htmlFor="showCommentsCheckbox">Show comments</label>
                                </div>
                                {/* End Checkbox */}
                            </div>
                            {/* End Header */}
                            {/* Body */}
                            <div className="card-body">
                                {/* Step */}
                                <ul className="step step-icon-sm">
                                    {/* Step Item */}
                                    <li className="step-item">
                                        <div className="step-content-wrapper">
                                            <span className="step-icon step-icon-soft-primary">A</span>
                                            {/* Quill */}
                                            <div className="quill-custom">
                                                <div className="js-quill-step" style={{ height: '15rem' }} data-hs-quill-options="{
                           &quot;placeholder&quot;: &quot;Type your description...&quot;,
                            &quot;modules&quot;: {
                              &quot;toolbar&quot;: [
                                [&quot;bold&quot;, &quot;italic&quot;, &quot;underline&quot;, &quot;strike&quot;, &quot;link&quot;, &quot;image&quot;, &quot;blockquote&quot;, &quot;code&quot;, {&quot;list&quot;: &quot;bullet&quot;}]
                              ]
                            }
                           }">
                                                </div>
                                            </div>
                                            {/* End Quill */}
                                        </div>
                                    </li>
                                    {/* End Step Item */}
                                    {/* Step Item */}
                                    <li className="step-item">
                                        <div className="step-content-wrapper">
                                            <small className="step-divider">Wednesday, 19 August</small>
                                        </div>
                                    </li>
                                    {/* End Step Item */}
                                    {/* Step Item */}
                                    <li className="step-item">
                                        <div className="step-content-wrapper">
                                            <span className="step-icon step-icon-soft-dark step-icon-pseudo" />
                                            <div className="step-content">
                                                <h5 className="mb-0">You submitted a customer data request.</h5>
                                                <p className="fs-5 mb-0">10:19 AM</p>
                                            </div>
                                        </div>
                                    </li>
                                    {/* End Step Item */}
                                    {/* Step Item */}
                                    <li className="step-item">
                                        <div className="step-content-wrapper">
                                            <span className="step-icon step-icon-soft-dark step-icon-pseudo" />
                                            <div className="step-content">
                                                <h5 className="mb-0">You added the email anne@gmail.com to this customer.</h5>
                                                <p className="fs-5 mb-0">10:18 AM</p>
                                            </div>
                                        </div>
                                    </li>
                                    {/* End Step Item */}
                                    {/* Step Item */}
                                    <li className="step-item">
                                        <div className="step-content-wrapper">
                                            <span className="step-icon step-icon-soft-dark step-icon-pseudo" />
                                            <div className="step-content">
                                                <h5 className="mb-0">You created this customer.</h5>
                                                <p className="fs-5 mb-0">10:18 AM</p>
                                            </div>
                                        </div>
                                    </li>
                                    {/* End Step Item */}
                                </ul>
                                {/* End Step */}
                            </div>
                            {/* End Body */}
                        </div>
                        {/* End Card */}
                        <div className="d-none d-lg-block">
                            <button type="button" className="btn btn-danger">Delete customer</button>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        {/* Card */}
                        <div className="card mb-3 mb-lg-5">
                            {/* Body */}
                            <div className="card-body">
                                {/* List Group */}
                                <ul className="list-group list-group-flush list-group-no-gutters">
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
                                        {/* Leaflet (Map) */}
                                        <div id="map" className="leaflet-custom rounded mt-1 mb-3" style={{ minHeight: '10rem' }} data-hs-leaflet-options="{
                         &quot;map&quot;: {
                           &quot;scrollWheelZoom&quot;: false,
                           &quot;coords&quot;: [37.4040344, -122.0289704]
                         },
                         &quot;marker&quot;: [
                           {
                             &quot;coords&quot;: [37.4040344, -122.0289704],
                             &quot;icon&quot;: {
                               &quot;iconUrl&quot;: &quot;./assets/svg/components/map-pin.svg&quot;,
                               &quot;iconSize&quot;: [50, 45]
                             },
                             &quot;popup&quot;: {
                               &quot;text&quot;: &quot;153 Williamson Plaza, Maggieberg&quot;
                             }
                           }
                         ]
                        }" />
                                        {/* End Leaflet (Map) */}
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
                        {/* Card */}
                        <div className="card mb-3 mb-lg-5">
                            {/* Header */}
                            <div className="card-header card-header-content-between">
                                <h5>Email marketing</h5>
                                <a className="link" href="javascript:;">Edit status</a>
                            </div>
                            {/* End Header */}
                            {/* Body */}
                            <div className="card-body">
                                <span className="h3">
                                    <span className="badge bg-soft-dark text-dark rounded-pill">Subscribed</span>
                                </span>
                            </div>
                            {/* Body */}
                        </div>
                        {/* End Card */}
                        {/* Card */}
                        <div className="card mb-3 mb-lg-5">
                            {/* Header */}
                            <div className="card-header">
                                <h4 className="card-header-title">Website activity</h4>
                            </div>
                            {/* End Header */}
                            {/* Body */}
                            <div className="card-body">
                                <p>Website activity shows you how many times a contact has visited your site and viewed your pages.</p>
                                {/* Bar Chart */}
                                <div className="chartjs-custom my-5 flex chartsvg" style={{ height: '12rem' }}>
                                    <ActivityGraph />
                                </div>
                                {/* End Bar Chart */}
                                <div className="row justify-content-center">
                                    <div className="col-auto">
                                        <span className="legend-indicator" /> Yesterday
                                    </div>
                                    {/* End Col */}
                                    <div className="col-auto">
                                        <span className="legend-indicator bg-primary" /> Today
                                    </div>
                                    {/* End Col */}
                                </div>
                                {/* End Row */}
                            </div>
                            {/* Body */}
                        </div>
                        {/* End Card */}
                    </div>
                </div>
                {/* End Row */}
                <div className="d-lg-none">
                    <button type="button" className="btn btn-danger">Delete customer</button>
                </div>
            </div>
            {/* Invoice Modal */}
            <div className="modal fade" id="accountInvoiceReceiptModal" tabIndex={-1} role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        {/* Header */}
                        <div className="modal-top-cover bg-dark text-center">
                            <figure className="position-absolute end-0 bottom-0 start-0">
                                <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 1920 100.1">
                                    <path fill="#fff" d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z" />
                                </svg>
                            </figure>
                            <div className="modal-close">
                                <button type="button" className="btn-close btn-close-light" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                        </div>
                        {/* End Header */}
                        <div className="modal-top-cover-icon">
                            <span className="icon icon-lg icon-light icon-circle icon-centered shadow-sm">
                                <i className="bi-receipt fs-2" />
                            </span>
                        </div>
                        {/* Body */}
                        <div className="modal-body">
                            <div className="text-center mb-5">
                                <h3 className="mb-1">Invoice from Front</h3>
                                <span className="d-block">Invoice #3682303</span>
                            </div>
                            <div className="row mb-6">
                                <div className="col-md-4 mb-3 mb-md-0">
                                    <small className="text-cap text-secondary mb-0">Amount paid:</small>
                                    <span className="text-dark">$316.8</span>
                                </div>
                                {/* End Col */}
                                <div className="col-md-4 mb-3 mb-md-0">
                                    <small className="text-cap text-secondary mb-0">Date paid:</small>
                                    <span className="text-dark">April 22, 2020</span>
                                </div>
                                {/* End Col */}
                                <div className="col-md-4">
                                    <small className="text-cap text-secondary mb-0">Payment method:</small>
                                    <div className="d-flex align-items-center">
                                        <img className="avatar avatar-xss me-2" src="./assets/svg/brands/mastercard.svg" alt="Image Description" />
                                        <span className="text-dark">•••• 4242</span>
                                    </div>
                                </div>
                                {/* End Col */}
                            </div>
                            {/* End Row */}
                            <small className="text-cap mb-2">Summary</small>
                            <ul className="list-group mb-4">
                                <li className="list-group-item text-dark">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <span>Payment to Front</span>
                                        <span>$264.00</span>
                                    </div>
                                </li>
                                <li className="list-group-item text-dark">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <span>Tax fee</span>
                                        <span>$52.8</span>
                                    </div>
                                </li>
                                <li className="list-group-item list-group-item-light text-dark">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <strong>Amount paid</strong>
                                        <strong>$316.8</strong>
                                    </div>
                                </li>
                            </ul>
                            <div className="d-flex justify-content-end gap-3">
                                <a className="btn btn-white btn-sm" href="#"><i className="bi-file-earmark-arrow-down-fill me-1" /> PDF</a>
                                <a className="btn btn-white btn-sm" href="#"><i className="bi-printer-fill me-1" /> Print Details</a>
                            </div>
                            <hr className="my-5" />
                            <p className="modal-footer-text">If you have any questions, please contact us at <a className="link" href="mailto:example@gmail.com">example@gmail.com</a> or call at <a className="link text-nowrap" href="#">+1 898 34-5492</a></p>
                        </div>
                        {/* End Body */}
                    </div>
                </div>
            </div>
            {/* End Invoice Modal */}
        </>
    )
}

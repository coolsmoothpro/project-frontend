import React from 'react'
import { BarChart } from '@mui/x-charts/BarChart';

function ChartsOverviewDemo() {
    return (
        <BarChart
            series={[
                { data: [70, 44, 120, 100, 150, 70, 140, 60, 40, 30, 65, 84], color: '#377dff' },
            ]}
            height={290}
            sx={{
                '& .MuiBarChart-bar': {
                    width: '20px !important', // Force the width of each bar to 20px
                },
            }}
            xAxis={[{ data: ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'August', 'Sep', 'Oct', 'Nov', 'Dec'], scaleType: 'band' }]}
            margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
        />
    );
}

export default function EcommRefferal() {
    return (
        <>
            <div className="content container-fluid">
                {/* Page Header */}
                <div className="page-header">
                    <div className="row align-items-center">
                        <div className="col-sm mb-2 mb-sm-0">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb breadcrumb-no-gutter">
                                    <li className="breadcrumb-item"><a className="breadcrumb-link" href="javascript:;">Pages</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Referrals</li>
                                </ol>
                            </nav>
                            <h1 className="page-header-title">Referrals</h1>
                        </div>
                        {/* End Col */}
                        <div className="col-sm-6 col-md-5 col-lg-4">
                            <small className="text-cap">Your referral code:</small>
                            {/* Input Group */}
                            <div className="input-group">
                                <input id="referralCode" type="text" className="form-control" readOnly defaultValue="https://htmlstream.com/wer9n8x" />
                                <div className="input-group-append">
                                    <a className="js-clipboard btn btn-white" href="javascript:;" data-bs-toggle="tooltip" data-bs-placement="right" title="Copy to clipboard" data-hs-clipboard-options="{
                    &quot;type&quot;: &quot;tooltip&quot;,
                    &quot;successText&quot;: &quot;Copied!&quot;,
                    &quot;contentTarget&quot;: &quot;#referralCode&quot;,
                    &quot;classChangeTarget&quot;: &quot;#referralCodeIcon&quot;,
                    &quot;defaultClass&quot;: &quot;bi-clipboard&quot;,
                    &quot;successClass&quot;: &quot;bi-check&quot;
                   }">
                                        <i id="referralCodeIcon" className="bi-clipboard" />
                                    </a>
                                </div>
                            </div>
                            {/* End Input Group */}
                        </div>
                        {/* End Col */}
                    </div>
                    {/* End Row */}
                </div>
                {/* End Page Header */}
                {/* Stats */}
                <div className="row col-lg-divider">
                    <div className="col-lg-4">
                        {/* Card */}
                        <div className="text-center">
                            <img className="avatar avatar-xl avatar-4x3 mb-4" src="./assets/svg/illustrations/oc-megaphone.svg" alt="Image Description" data-hs-theme-appearance="default" style={{ minHeight: '6rem' }} />
                            {/* <img className="avatar avatar-xl avatar-4x3 mb-4" src="./assets/svg/illustrations-light/oc-megaphone.svg" alt="Image Description" data-hs-theme-appearance="dark" style={{ minHeight: '6rem' }} /> */}
                            <span className="text-cap text-body">Number of referrals</span>
                            <span className="d-block display-4 text-dark mb-2">150</span>
                            <div className="row col-divider">
                                <div className="col text-end">
                                    <span className="d-block fw-semibold text-success">
                                        <i className="bi-graph-up" /> 12%
                                    </span>
                                    <span className="d-block">change</span>
                                </div>
                                {/* End Col */}
                                <div className="col text-start">
                                    <span className="d-block fw-semibold text-dark">25</span>
                                    <span className="d-block">last week</span>
                                </div>
                                {/* End Col */}
                            </div>
                            {/* End Row */}
                        </div>
                        {/* End Card */}
                    </div>
                    <div className="col-lg-4">
                        {/* Card */}
                        <div className="text-center">
                            <img className="avatar avatar-xl avatar-4x3 mb-4" src="./assets/svg/illustrations/oc-money-profits.svg" alt="Image Description" data-hs-theme-appearance="default" style={{ minHeight: '6rem' }} />
                            {/* <img className="avatar avatar-xl avatar-4x3 mb-4" src="./assets/svg/illustrations-light/oc-money-profits.svg" alt="Image Description" data-hs-theme-appearance="dark" style={{ minHeight: '6rem' }} /> */}
                            <span className="text-cap text-body">Amount earned</span>
                            <span className="d-block display-4 text-dark mb-2">$7,253.00</span>
                            <div className="row col-divider">
                                <div className="col text-end">
                                    <span className="d-block fw-semibold text-success">
                                        <i className="bi-graph-up" /> 5.6%
                                    </span>
                                    <span className="d-block">change</span>
                                </div>
                                {/* End Col */}
                                <div className="col text-start">
                                    <span className="d-block fw-semibold text-dark">$582.00</span>
                                    <span className="d-block">last week</span>
                                </div>
                                {/* End Col */}
                            </div>
                            {/* End Row */}
                        </div>
                        {/* End Card */}
                    </div>
                    <div className="col-lg-4">
                        {/* Card */}
                        <div className="text-center">
                            <img className="avatar avatar-xl avatar-4x3 mb-4" src="./assets/svg/illustrations/oc-growing.svg" alt="Image Description" data-hs-theme-appearance="default" style={{ minHeight: '6rem' }} />
                            {/* <img className="avatar avatar-xl avatar-4x3 mb-4" src="./assets/svg/illustrations-light/oc-growing.svg" alt="Image Description" data-hs-theme-appearance="dark" style={{ minHeight: '6rem' }} /> */}
                            <span className="text-cap text-body">Referral completed</span>
                            <span className="d-block display-4 text-dark mb-2">25</span>
                            <div className="row col-divider">
                                <div className="col text-end">
                                    <span className="d-block fw-semibold text-danger">
                                        <i className="bi-graph-down" /> 2.3%
                                    </span>
                                    <span className="d-block">change</span>
                                </div>
                                {/* End Col */}
                                <div className="col text-start">
                                    <span className="d-block fw-semibold text-dark">7</span>
                                    <span className="d-block">last week</span>
                                </div>
                                {/* End Col */}
                            </div>
                            {/* End Row */}
                        </div>
                        {/* End Card */}
                    </div>
                </div>
                {/* End Stats */}
                <div className="my-5">
                    <p className="text-muted"><i className="bi-exclamation-octagon" /> Last referral: August 25, 2020.</p>
                </div>
                <div className="row">
                    <div className="col-lg-8 mb-3 mb-lg-5">
                        {/* Card */}
                        <div className="card h-100">
                            {/* Header */}
                            <div className="card-header card-header-content-sm-between">
                                <h4 className="card-header-title mb-2 mb-sm-0">Total sales earnings</h4>
                                {/* Daterangepicker */}
                                <button id="js-daterangepicker-predefined" className="btn btn-ghost-secondary btn-sm dropdown-toggle">
                                    <i className="tio-date-range" />
                                    <span className="js-daterangepicker-predefined-preview ms-1" />
                                </button>
                                {/* End Daterangepicker */}
                            </div>
                            {/* End Header */}
                            {/* Body */}
                            <div className="card-body">
                                {/* Bar Chart */}
                                <div className="chartjs-custom chartsvg flex">
                                    <ChartsOverviewDemo />
                                </div>
                                {/* End Bar Chart */}
                            </div>
                            {/* End Body */}
                        </div>
                        {/* End Card */}
                    </div>
                    <div className="col-lg-4 mb-3 mb-lg-5">
                        {/* Card */}
                        <div className="card h-100">
                            {/* Header */}
                            <div className="card-header card-header-content-between">
                                <h4 className="card-header-title">Your top countries <i className="bi-patch-check-fill text-primary" data-bs-toggle="tooltip" data-bs-placement="top" title="This report is based on 100% of sessions." /></h4>
                                <a className="btn btn-ghost-secondary btn-sm" href="#">View all</a>
                            </div>
                            {/* End Header */}
                            {/* Body */}
                            <div className="card-body">
                                <div className="list-group list-group-flush list-group-no-gutters">
                                    {/* Item */}
                                    <div className="list-group-item">
                                        <div className="d-flex align-items-center">
                                            <div className="flex-shrink-0">
                                                <img className="avatar avatar-xss avatar-circle" src="./assets/vendor/flag-icon-css/flags/1x1/us.svg" alt="Flag" />
                                            </div>
                                            <div className="flex-grow-1 ms-2">
                                                <div className="row align-items-center">
                                                    <div className="col">
                                                        <span className="d-block">United States</span>
                                                    </div>
                                                    {/* End Col */}
                                                    <div className="col-auto">
                                                        <h5>$4,302.00</h5>
                                                    </div>
                                                    {/* End Col */}
                                                </div>
                                                {/* End Row */}
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Item */}
                                    {/* Item */}
                                    <div className="list-group-item">
                                        <div className="d-flex align-items-center">
                                            <div className="flex-shrink-0">
                                                <img className="avatar avatar-xss avatar-circle" src="./assets/vendor/flag-icon-css/flags/1x1/de.svg" alt="Flag" />
                                            </div>
                                            <div className="flex-grow-1 ms-2">
                                                <div className="row align-items-center">
                                                    <div className="col">
                                                        <span className="d-block">Germany</span>
                                                    </div>
                                                    {/* End Col */}
                                                    <div className="col-auto">
                                                        <h5>$1,951.00</h5>
                                                    </div>
                                                    {/* End Col */}
                                                </div>
                                                {/* End Row */}
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Item */}
                                    {/* Item */}
                                    <div className="list-group-item">
                                        <div className="d-flex align-items-center">
                                            <div className="flex-shrink-0">
                                                <img className="avatar avatar-xss avatar-circle" src="./assets/vendor/flag-icon-css/flags/1x1/fr.svg" alt="Flag" />
                                            </div>
                                            <div className="flex-grow-1 ms-2">
                                                <div className="row align-items-center">
                                                    <div className="col">
                                                        <span className="d-block">France</span>
                                                    </div>
                                                    {/* End Col */}
                                                    <div className="col-auto">
                                                        <h5>$592.00</h5>
                                                    </div>
                                                    {/* End Col */}
                                                </div>
                                                {/* End Row */}
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Item */}
                                    {/* Item */}
                                    <div className="list-group-item">
                                        <div className="d-flex align-items-center">
                                            <div className="flex-shrink-0">
                                                <img className="avatar avatar-xss avatar-circle" src="./assets/vendor/flag-icon-css/flags/1x1/ca.svg" alt="Flag" />
                                            </div>
                                            <div className="flex-grow-1 ms-2">
                                                <div className="row align-items-center">
                                                    <div className="col">
                                                        <span className="d-block">Canada</span>
                                                    </div>
                                                    {/* End Col */}
                                                    <div className="col-auto">
                                                        <h5>$219.00</h5>
                                                    </div>
                                                    {/* End Col */}
                                                </div>
                                                {/* End Row */}
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Item */}
                                    {/* Item */}
                                    <div className="list-group-item">
                                        <div className="d-flex align-items-center">
                                            <div className="flex-shrink-0">
                                                <img className="avatar avatar-xss avatar-circle" src="./assets/vendor/flag-icon-css/flags/1x1/it.svg" alt="Flag" />
                                            </div>
                                            <div className="flex-grow-1 ms-2">
                                                <div className="row align-items-center">
                                                    <div className="col">
                                                        <span className="d-block">Italy</span>
                                                    </div>
                                                    {/* End Col */}
                                                    <div className="col-auto">
                                                        <h5>$191.00</h5>
                                                    </div>
                                                    {/* End Col */}
                                                </div>
                                                {/* End Row */}
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Item */}
                                </div>
                            </div>
                            {/* End Body */}
                        </div>
                        {/* End Card */}
                    </div>
                </div>
                {/* End Row */}
                {/* Card */}
                <div className="card">
                    {/* Header */}
                    <div className="card-header">
                        <h4 className="card-header-title">Referral users</h4>
                    </div>
                    {/* End Header */}
                    {/* Table */}
                    <div className="table-responsive datatable-custom">
                        <table id="datatable" className="table table-lg table-borderless table-thead-bordered table-nowrap table-align-middle card-table" data-hs-datatables-options="{
                   &quot;order&quot;: [],
                   &quot;info&quot;: {
                     &quot;totalQty&quot;: &quot;#datatableWithPaginationInfoTotalQty&quot;
                   },
                   &quot;entries&quot;: &quot;#datatableEntries&quot;,
                   &quot;pageLength&quot;: 15,
                   &quot;isResponsive&quot;: false,
                   &quot;isShowPaging&quot;: false,
                   &quot;pagination&quot;: &quot;datatablePagination&quot;
                 }">
                            <thead className="thead-light">
                                <tr>
                                    <th>Referrers</th>
                                    <th>Referred ID</th>
                                    <th>URL</th>
                                    <th>Visits</th>
                                    <th>Total earned</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <a className="d-flex align-items-center" href="./user-profile.html">
                                            <div className="flex-shrink-0">
                                                <div className="avatar avatar-circle">
                                                    <img className="avatar-img" src="./assets/img/160x160/img10.jpg" alt="Image Description" />
                                                </div>
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <span className="d-block h5 text-inherit mb-0">Amanda Harvey <i className="bi-question-circle text-primary" data-bs-toggle="tooltip" data-bs-placement="top" title="Top endorsed" /></span>
                                                <span className="d-block fs-6 text-body">amanda@site.com</span>
                                            </div>
                                        </a>
                                    </td>
                                    <td>24125</td>
                                    <td>
                                        <div className="input-group input-group-sm input-group-merge table-input-group">
                                            <input id="referralsKeyCode1" type="text" className="form-control" readOnly defaultValue="https://htmlstream.com/wer9n8x" />
                                            <a className="js-clipboard input-group-append input-group-text" href="javascript:;" data-bs-toggle="tooltip" title="Copy to clipboard" data-hs-clipboard-options="{
                        &quot;type&quot;: &quot;tooltip&quot;,
                        &quot;successText&quot;: &quot;Copied!&quot;,
                        &quot;contentTarget&quot;: &quot;#referralsKeyCode1&quot;,
                        &quot;classChangeTarget&quot;: &quot;#referralsKeyCodeIcon1&quot;,
                        &quot;defaultClass&quot;: &quot;bi-clipboard&quot;,
                        &quot;successClass&quot;: &quot;bi-check&quot;
                       }">
                                                <i id="referralsKeyCodeIcon1" className="bi-clipboard" />
                                            </a>
                                        </div>
                                    </td>
                                    <td>556</td>
                                    <td>$160.00</td>
                                </tr>
                                <tr>
                                    <td>
                                        <a className="d-flex align-items-center" href="./user-profile.html">
                                            <div className="flex-shrink-0">
                                                <div className="avatar avatar-soft-primary avatar-circle">
                                                    <span className="avatar-initials">A</span>
                                                </div>
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <span className="d-block h5 text-inherit mb-0">Anne Richard</span>
                                                <span className="d-block fs-6 text-body">anne@site.com</span>
                                            </div>
                                        </a>
                                    </td>
                                    <td>84521</td>
                                    <td>
                                        <div className="input-group input-group-sm input-group-merge table-input-group">
                                            <input id="referralsKeyCode2" type="text" className="form-control" readOnly defaultValue="https://htmlstream.com/wer9n8x" />
                                            <a className="js-clipboard input-group-append input-group-text" href="javascript:;" data-bs-toggle="tooltip" title="Copy to clipboard" data-hs-clipboard-options="{
                        &quot;type&quot;: &quot;tooltip&quot;,
                        &quot;successText&quot;: &quot;Copied!&quot;,
                        &quot;contentTarget&quot;: &quot;#referralsKeyCode2&quot;,
                        &quot;classChangeTarget&quot;: &quot;#referralsKeyCodeIcon2&quot;,
                        &quot;defaultClass&quot;: &quot;bi-clipboard&quot;,
                        &quot;successClass&quot;: &quot;bi-check&quot;
                       }">
                                                <i id="referralsKeyCodeIcon2" className="bi-clipboard" />
                                            </a>
                                        </div>
                                    </td>
                                    <td>324</td>
                                    <td>$110.00</td>
                                </tr>
                                <tr>
                                    <td>
                                        <a className="d-flex align-items-center" href="./user-profile.html">
                                            <div className="flex-shrink-0">
                                                <div className="avatar avatar-circle">
                                                    <img className="avatar-img" src="./assets/img/160x160/img3.jpg" alt="Image Description" />
                                                </div>
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <span className="d-block h5 text-inherit mb-0">David Harrison</span>
                                                <span className="d-block fs-6 text-body">david@site.com</span>
                                            </div>
                                        </a>
                                    </td>
                                    <td>09341</td>
                                    <td>
                                        <div className="input-group input-group-sm input-group-merge table-input-group">
                                            <input id="referralsKeyCode3" type="text" className="form-control" readOnly defaultValue="https://htmlstream.com/wer9n8x" />
                                            <a className="js-clipboard input-group-append input-group-text" href="javascript:;" data-bs-toggle="tooltip" title="Copy to clipboard" data-hs-clipboard-options="{
                        &quot;type&quot;: &quot;tooltip&quot;,
                        &quot;successText&quot;: &quot;Copied!&quot;,
                        &quot;contentTarget&quot;: &quot;#referralsKeyCode3&quot;,
                        &quot;classChangeTarget&quot;: &quot;#referralsKeyCodeIcon3&quot;,
                        &quot;defaultClass&quot;: &quot;bi-clipboard&quot;,
                        &quot;successClass&quot;: &quot;bi-check&quot;
                       }">
                                                <i id="referralsKeyCodeIcon3" className="bi-clipboard" />
                                            </a>
                                        </div>
                                    </td>
                                    <td>301</td>
                                    <td>$100.00</td>
                                </tr>
                                <tr>
                                    <td>
                                        <a className="d-flex align-items-center" href="./user-profile.html">
                                            <div className="flex-shrink-0">
                                                <div className="avatar avatar-circle">
                                                    <img className="avatar-img" src="./assets/img/160x160/img5.jpg" alt="Image Description" />
                                                </div>
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <span className="d-block h5 text-inherit mb-0">Finch Hoot</span>
                                                <span className="d-block fs-6 text-body">finch@site.com</span>
                                            </div>
                                        </a>
                                    </td>
                                    <td>09637</td>
                                    <td>
                                        <div className="input-group input-group-sm input-group-merge table-input-group">
                                            <input id="referralsKeyCode4" type="text" className="form-control" readOnly defaultValue="https://htmlstream.com/wer9n8x" />
                                            <a className="js-clipboard input-group-append input-group-text" href="javascript:;" data-bs-toggle="tooltip" title="Copy to clipboard" data-hs-clipboard-options="{
                        &quot;type&quot;: &quot;tooltip&quot;,
                        &quot;successText&quot;: &quot;Copied!&quot;,
                        &quot;contentTarget&quot;: &quot;#referralsKeyCode4&quot;,
                        &quot;classChangeTarget&quot;: &quot;#referralsKeyCodeIcon4&quot;,
                        &quot;defaultClass&quot;: &quot;bi-clipboard&quot;,
                        &quot;successClass&quot;: &quot;bi-check&quot;
                       }">
                                                <i id="referralsKeyCodeIcon4" className="bi-clipboard" />
                                            </a>
                                        </div>
                                    </td>
                                    <td>292</td>
                                    <td>$90.00</td>
                                </tr>
                                <tr>
                                    <td>
                                        <a className="d-flex align-items-center" href="./user-profile.html">
                                            <div className="flex-shrink-0">
                                                <div className="avatar avatar-soft-dark avatar-circle">
                                                    <span className="avatar-initials">B</span>
                                                </div>
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <span className="d-block h5 text-inherit mb-0">Bob Dean</span>
                                                <span className="d-block fs-6 text-body">bob@site.com</span>
                                            </div>
                                        </a>
                                    </td>
                                    <td>93231</td>
                                    <td>
                                        <div className="input-group input-group-sm input-group-merge table-input-group">
                                            <input id="referralsKeyCode5" type="text" className="form-control" readOnly defaultValue="https://htmlstream.com/wer9n8x" />
                                            <a className="js-clipboard input-group-append input-group-text" href="javascript:;" data-bs-toggle="tooltip" title="Copy to clipboard" data-hs-clipboard-options="{
                        &quot;type&quot;: &quot;tooltip&quot;,
                        &quot;successText&quot;: &quot;Copied!&quot;,
                        &quot;contentTarget&quot;: &quot;#referralsKeyCode5&quot;,
                        &quot;classChangeTarget&quot;: &quot;#referralsKeyCodeIcon5&quot;,
                        &quot;defaultClass&quot;: &quot;bi-clipboard&quot;,
                        &quot;successClass&quot;: &quot;bi-check&quot;
                       }">
                                                <i id="referralsKeyCodeIcon5" className="bi-clipboard" />
                                            </a>
                                        </div>
                                    </td>
                                    <td>258</td>
                                    <td>$70.00</td>
                                </tr>
                                <tr>
                                    <td>
                                        <a className="d-flex align-items-center" href="./user-profile.html">
                                            <div className="flex-shrink-0">
                                                <div className="avatar avatar-circle">
                                                    <img className="avatar-img" src="./assets/img/160x160/img9.jpg" alt="Image Description" />
                                                </div>
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <span className="d-block h5 text-inherit mb-0">Ella Lauda <i className="bi-question-circle text-primary" data-bs-toggle="tooltip" data-bs-placement="top" title="Top endorsed" /></span>
                                                <span className="d-block fs-6 text-body">ella@site.com</span>
                                            </div>
                                        </a>
                                    </td>
                                    <td>41512</td>
                                    <td>
                                        <div className="input-group input-group-sm input-group-merge table-input-group">
                                            <input id="referralsKeyCode6" type="text" className="form-control" readOnly defaultValue="https://htmlstream.com/wer9n8x" />
                                            <a className="js-clipboard input-group-append input-group-text" href="javascript:;" data-bs-toggle="tooltip" title="Copy to clipboard" data-hs-clipboard-options="{
                        &quot;type&quot;: &quot;tooltip&quot;,
                        &quot;successText&quot;: &quot;Copied!&quot;,
                        &quot;contentTarget&quot;: &quot;#referralsKeyCode6&quot;,
                        &quot;classChangeTarget&quot;: &quot;#referralsKeyCodeIcon6&quot;,
                        &quot;defaultClass&quot;: &quot;bi-clipboard&quot;,
                        &quot;successClass&quot;: &quot;bi-check&quot;
                       }">
                                                <i id="referralsKeyCodeIcon6" className="bi-clipboard" />
                                            </a>
                                        </div>
                                    </td>
                                    <td>129</td>
                                    <td>$50.00</td>
                                </tr>
                                <tr>
                                    <td>
                                        <a className="d-flex align-items-center" href="./user-profile.html">
                                            <div className="flex-shrink-0">
                                                <div className="avatar avatar-soft-info avatar-circle">
                                                    <span className="avatar-initials">L</span>
                                                </div>
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <span className="d-block h5 text-inherit mb-0">Lori Hunter</span>
                                                <span className="d-block fs-6 text-body">hunter@site.com</span>
                                            </div>
                                        </a>
                                    </td>
                                    <td>62312</td>
                                    <td>
                                        <div className="input-group input-group-sm input-group-merge table-input-group">
                                            <input id="referralsKeyCode7" type="text" className="form-control" readOnly defaultValue="https://htmlstream.com/wer9n8x" />
                                            <a className="js-clipboard input-group-append input-group-text" href="javascript:;" data-bs-toggle="tooltip" title="Copy to clipboard" data-hs-clipboard-options="{
                        &quot;type&quot;: &quot;tooltip&quot;,
                        &quot;successText&quot;: &quot;Copied!&quot;,
                        &quot;contentTarget&quot;: &quot;#referralsKeyCode7&quot;,
                        &quot;classChangeTarget&quot;: &quot;#referralsKeyCodeIcon7&quot;,
                        &quot;defaultClass&quot;: &quot;bi-clipboard&quot;,
                        &quot;successClass&quot;: &quot;bi-check&quot;
                       }">
                                                <i id="referralsKeyCodeIcon7" className="bi-clipboard" />
                                            </a>
                                        </div>
                                    </td>
                                    <td>103</td>
                                    <td>$50.00</td>
                                </tr>
                                <tr>
                                    <td>
                                        <a className="d-flex align-items-center" href="./user-profile.html">
                                            <div className="flex-shrink-0">
                                                <div className="avatar avatar-soft-primary avatar-circle">
                                                    <span className="avatar-initials">M</span>
                                                </div>
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <span className="d-block h5 text-inherit mb-0">Mark Colbert</span>
                                                <span className="d-block fs-6 text-body">mark@site.com</span>
                                            </div>
                                        </a>
                                    </td>
                                    <td>46735</td>
                                    <td>
                                        <div className="input-group input-group-sm input-group-merge table-input-group">
                                            <input id="referralsKeyCode8" type="text" className="form-control" readOnly defaultValue="https://htmlstream.com/wer9n8x" />
                                            <a className="js-clipboard input-group-append input-group-text" href="javascript:;" data-bs-toggle="tooltip" title="Copy to clipboard" data-hs-clipboard-options="{
                        &quot;type&quot;: &quot;tooltip&quot;,
                        &quot;successText&quot;: &quot;Copied!&quot;,
                        &quot;contentTarget&quot;: &quot;#referralsKeyCode8&quot;,
                        &quot;classChangeTarget&quot;: &quot;#referralsKeyCodeIcon8&quot;,
                        &quot;defaultClass&quot;: &quot;bi-clipboard&quot;,
                        &quot;successClass&quot;: &quot;bi-check&quot;
                       }">
                                                <i id="referralsKeyCodeIcon8" className="bi-clipboard" />
                                            </a>
                                        </div>
                                    </td>
                                    <td>100</td>
                                    <td>$50.00</td>
                                </tr>
                                <tr>
                                    <td>
                                        <a className="d-flex align-items-center" href="./user-profile.html">
                                            <div className="flex-shrink-0">
                                                <div className="avatar avatar-circle">
                                                    <img className="avatar-img" src="./assets/img/160x160/img6.jpg" alt="Image Description" />
                                                </div>
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <span className="d-block h5 text-inherit mb-0">Costa Quinn</span>
                                                <span className="d-block fs-6 text-body">costa@site.com</span>
                                            </div>
                                        </a>
                                    </td>
                                    <td>51726</td>
                                    <td>
                                        <div className="input-group input-group-sm input-group-merge table-input-group">
                                            <input id="referralsKeyCode9" type="text" className="form-control" readOnly defaultValue="https://htmlstream.com/wer9n8x" />
                                            <a className="js-clipboard input-group-append input-group-text" href="javascript:;" data-bs-toggle="tooltip" title="Copy to clipboard" data-hs-clipboard-options="{
                        &quot;type&quot;: &quot;tooltip&quot;,
                        &quot;successText&quot;: &quot;Copied!&quot;,
                        &quot;contentTarget&quot;: &quot;#referralsKeyCode9&quot;,
                        &quot;classChangeTarget&quot;: &quot;#referralsKeyCodeIcon9&quot;,
                        &quot;defaultClass&quot;: &quot;bi-clipboard&quot;,
                        &quot;successClass&quot;: &quot;bi-check&quot;
                       }">
                                                <i id="referralsKeyCodeIcon9" className="bi-clipboard" />
                                            </a>
                                        </div>
                                    </td>
                                    <td>99</td>
                                    <td>$40.00</td>
                                </tr>
                                <tr>
                                    <td>
                                        <a className="d-flex align-items-center" href="./user-profile.html">
                                            <div className="flex-shrink-0">
                                                <div className="avatar avatar-soft-danger avatar-circle">
                                                    <span className="avatar-initials">R</span>
                                                </div>
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <span className="d-block h5 text-inherit mb-0">Rachel Doe <i className="bi-question-circle text-primary" data-bs-toggle="tooltip" data-bs-placement="top" title="Top endorsed" /></span>
                                                <span className="d-block fs-6 text-body">rachel@site.com</span>
                                            </div>
                                        </a>
                                    </td>
                                    <td>89232</td>
                                    <td>
                                        <div className="input-group input-group-sm input-group-merge table-input-group">
                                            <input id="referralsKeyCode10" type="text" className="form-control" readOnly defaultValue="https://htmlstream.com/wer9n8x" />
                                            <a className="js-clipboard input-group-append input-group-text" href="javascript:;" data-bs-toggle="tooltip" title="Copy to clipboard" data-hs-clipboard-options="{
                        &quot;type&quot;: &quot;tooltip&quot;,
                        &quot;successText&quot;: &quot;Copied!&quot;,
                        &quot;contentTarget&quot;: &quot;#referralsKeyCode10&quot;,
                        &quot;classChangeTarget&quot;: &quot;#referralsKeyCodeIcon10&quot;,
                        &quot;defaultClass&quot;: &quot;bi-clipboard&quot;,
                        &quot;successClass&quot;: &quot;bi-check&quot;
                       }">
                                                <i id="referralsKeyCodeIcon10" className="bi-clipboard" />
                                            </a>
                                        </div>
                                    </td>
                                    <td>75</td>
                                    <td>$30.00</td>
                                </tr>
                                <tr>
                                    <td>
                                        <a className="d-flex align-items-center" href="./user-profile.html">
                                            <div className="flex-shrink-0">
                                                <div className="avatar avatar-circle">
                                                    <img className="avatar-img" src="./assets/img/160x160/img8.jpg" alt="Image Description" />
                                                </div>
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <span className="d-block h5 text-inherit mb-0">Linda Bates</span>
                                                <span className="d-block fs-6 text-body">linda@site.com</span>
                                            </div>
                                        </a>
                                    </td>
                                    <td>98434</td>
                                    <td>
                                        <div className="input-group input-group-sm input-group-merge table-input-group">
                                            <input id="referralsKeyCode11" type="text" className="form-control" readOnly defaultValue="https://htmlstream.com/wer9n8x" />
                                            <a className="js-clipboard input-group-append input-group-text" href="javascript:;" data-bs-toggle="tooltip" title="Copy to clipboard" data-hs-clipboard-options="{
                        &quot;type&quot;: &quot;tooltip&quot;,
                        &quot;successText&quot;: &quot;Copied!&quot;,
                        &quot;contentTarget&quot;: &quot;#referralsKeyCode11&quot;,
                        &quot;classChangeTarget&quot;: &quot;#referralsKeyCodeIcon11&quot;,
                        &quot;defaultClass&quot;: &quot;bi-clipboard&quot;,
                        &quot;successClass&quot;: &quot;bi-check&quot;
                       }">
                                                <i id="referralsKeyCodeIcon11" className="bi-clipboard" />
                                            </a>
                                        </div>
                                    </td>
                                    <td>52</td>
                                    <td>$20.00</td>
                                </tr>
                                <tr>
                                    <td>
                                        <a className="d-flex align-items-center" href="./user-profile.html">
                                            <div className="flex-shrink-0">
                                                <div className="avatar avatar-soft-info avatar-circle">
                                                    <span className="avatar-initials">B</span>
                                                </div>
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <span className="d-block h5 text-inherit mb-0">Brian Halligan</span>
                                                <span className="d-block fs-6 text-body">brian@site.com</span>
                                            </div>
                                        </a>
                                    </td>
                                    <td>89340</td>
                                    <td>
                                        <div className="input-group input-group-sm input-group-merge table-input-group">
                                            <input id="referralsKeyCode12" type="text" className="form-control" readOnly defaultValue="https://htmlstream.com/wer9n8x" />
                                            <a className="js-clipboard input-group-append input-group-text" href="javascript:;" data-bs-toggle="tooltip" title="Copy to clipboard" data-hs-clipboard-options="{
                        &quot;type&quot;: &quot;tooltip&quot;,
                        &quot;successText&quot;: &quot;Copied!&quot;,
                        &quot;contentTarget&quot;: &quot;#referralsKeyCode12&quot;,
                        &quot;classChangeTarget&quot;: &quot;#referralsKeyCodeIcon12&quot;,
                        &quot;defaultClass&quot;: &quot;bi-clipboard&quot;,
                        &quot;successClass&quot;: &quot;bi-check&quot;
                       }">
                                                <i id="referralsKeyCodeIcon12" className="bi-clipboard" />
                                            </a>
                                        </div>
                                    </td>
                                    <td>39</td>
                                    <td>$20.00</td>
                                </tr>
                                <tr>
                                    <td>
                                        <a className="d-flex align-items-center" href="./user-profile.html">
                                            <div className="flex-shrink-0">
                                                <div className="avatar avatar-soft-dark avatar-circle">
                                                    <span className="avatar-initials">C</span>
                                                </div>
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <span className="d-block h5 text-inherit mb-0">Chris Mathew</span>
                                                <span className="d-block fs-6 text-body">chris@site.com</span>
                                            </div>
                                        </a>
                                    </td>
                                    <td>59234</td>
                                    <td>
                                        <div className="input-group input-group-sm input-group-merge table-input-group">
                                            <input id="referralsKeyCode13" type="text" className="form-control" readOnly defaultValue="https://htmlstream.com/wer9n8x" />
                                            <a className="js-clipboard input-group-append input-group-text" href="javascript:;" data-bs-toggle="tooltip" title="Copy to clipboard" data-hs-clipboard-options="{
                        &quot;type&quot;: &quot;tooltip&quot;,
                        &quot;successText&quot;: &quot;Copied!&quot;,
                        &quot;contentTarget&quot;: &quot;#referralsKeyCode13&quot;,
                        &quot;classChangeTarget&quot;: &quot;#referralsKeyCodeIcon13&quot;,
                        &quot;defaultClass&quot;: &quot;bi-clipboard&quot;,
                        &quot;successClass&quot;: &quot;bi-check&quot;
                       }">
                                                <i id="referralsKeyCodeIcon13" className="bi-clipboard" />
                                            </a>
                                        </div>
                                    </td>
                                    <td>39</td>
                                    <td>$20.00</td>
                                </tr>
                                <tr>
                                    <td>
                                        <a className="d-flex align-items-center" href="./user-profile.html">
                                            <div className="flex-shrink-0">
                                                <div className="avatar avatar-circle">
                                                    <img className="avatar-img" src="./assets/img/160x160/img7.jpg" alt="Image Description" />
                                                </div>
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <span className="d-block h5 text-inherit mb-0">Clarice Boone <i className="bi-question-circle text-primary" data-bs-toggle="tooltip" data-bs-placement="top" title="Top endorsed" /></span>
                                                <span className="d-block fs-6 text-body">clarice@site.com</span>
                                            </div>
                                        </a>
                                    </td>
                                    <td>96545</td>
                                    <td>
                                        <div className="input-group input-group-sm input-group-merge table-input-group">
                                            <input id="referralsKeyCode14" type="text" className="form-control" readOnly defaultValue="https://htmlstream.com/wer9n8x" />
                                            <a className="js-clipboard input-group-append input-group-text" href="javascript:;" data-bs-toggle="tooltip" title="Copy to clipboard" data-hs-clipboard-options="{
                        &quot;type&quot;: &quot;tooltip&quot;,
                        &quot;successText&quot;: &quot;Copied!&quot;,
                        &quot;contentTarget&quot;: &quot;#referralsKeyCode14&quot;,
                        &quot;classChangeTarget&quot;: &quot;#referralsKeyCodeIcon14&quot;,
                        &quot;defaultClass&quot;: &quot;bi-clipboard&quot;,
                        &quot;successClass&quot;: &quot;bi-check&quot;
                       }">
                                                <i id="referralsKeyCodeIcon14" className="bi-clipboard" />
                                            </a>
                                        </div>
                                    </td>
                                    <td>38</td>
                                    <td>$10.00</td>
                                </tr>
                                <tr>
                                    <td>
                                        <a className="d-flex align-items-center" href="./user-profile.html">
                                            <div className="flex-shrink-0">
                                                <div className="avatar avatar-soft-dark avatar-circle">
                                                    <span className="avatar-initials">L</span>
                                                </div>
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <span className="d-block h5 text-inherit mb-0">Lewis Clarke</span>
                                                <span className="d-block fs-6 text-body">lewis@site.com</span>
                                            </div>
                                        </a>
                                    </td>
                                    <td>76322</td>
                                    <td>
                                        <div className="input-group input-group-sm input-group-merge table-input-group">
                                            <input id="referralsKeyCode15" type="text" className="form-control" readOnly defaultValue="https://htmlstream.com/wer9n8x" />
                                            <a className="js-clipboard input-group-append input-group-text" href="javascript:;" data-bs-toggle="tooltip" title="Copy to clipboard" data-hs-clipboard-options="{
                        &quot;type&quot;: &quot;tooltip&quot;,
                        &quot;successText&quot;: &quot;Copied!&quot;,
                        &quot;contentTarget&quot;: &quot;#referralsKeyCode15&quot;,
                        &quot;classChangeTarget&quot;: &quot;#referralsKeyCodeIcon15&quot;,
                        &quot;defaultClass&quot;: &quot;bi-clipboard&quot;,
                        &quot;successClass&quot;: &quot;bi-check&quot;
                       }">
                                                <i id="referralsKeyCodeIcon15" className="bi-clipboard" />
                                            </a>
                                        </div>
                                    </td>
                                    <td>27</td>
                                    <td>$10.00</td>
                                </tr>
                                <tr>
                                    <td>
                                        <a className="d-flex align-items-center" href="./user-profile.html">
                                            <div className="flex-shrink-0">
                                                <div className="avatar avatar-circle">
                                                    <img className="avatar-img" src="./assets/img/160x160/img4.jpg" alt="Image Description" />
                                                </div>
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <span className="d-block h5 text-inherit mb-0">Sam Kart</span>
                                                <span className="d-block fs-6 text-body">sam@site.com</span>
                                            </div>
                                        </a>
                                    </td>
                                    <td>45444</td>
                                    <td>
                                        <div className="input-group input-group-sm input-group-merge table-input-group">
                                            <input id="referralsKeyCode16" type="text" className="form-control" readOnly defaultValue="https://htmlstream.com/wer9n8x" />
                                            <a className="js-clipboard input-group-append input-group-text" href="javascript:;" data-bs-toggle="tooltip" title="Copy to clipboard" data-hs-clipboard-options="{
                        &quot;type&quot;: &quot;tooltip&quot;,
                        &quot;successText&quot;: &quot;Copied!&quot;,
                        &quot;contentTarget&quot;: &quot;#referralsKeyCode16&quot;,
                        &quot;classChangeTarget&quot;: &quot;#referralsKeyCodeIcon16&quot;,
                        &quot;defaultClass&quot;: &quot;bi-clipboard&quot;,
                        &quot;successClass&quot;: &quot;bi-check&quot;
                       }">
                                                <i id="referralsKeyCodeIcon16" className="bi-clipboard" />
                                            </a>
                                        </div>
                                    </td>
                                    <td>21</td>
                                    <td>$10.00</td>
                                </tr>
                                <tr>
                                    <td>
                                        <a className="d-flex align-items-center" href="./user-profile.html">
                                            <div className="flex-shrink-0">
                                                <div className="avatar avatar-soft-danger avatar-circle">
                                                    <span className="avatar-initials">J</span>
                                                </div>
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <span className="d-block h5 text-inherit mb-0">Johnny Appleseed</span>
                                                <span className="d-block fs-6 text-body">johnny@site.com</span>
                                            </div>
                                        </a>
                                    </td>
                                    <td>15512</td>
                                    <td>
                                        <div className="input-group input-group-sm input-group-merge table-input-group">
                                            <input id="referralsKeyCode17" type="text" className="form-control" readOnly defaultValue="https://htmlstream.com/wer9n8x" />
                                            <a className="js-clipboard input-group-append input-group-text" href="javascript:;" data-bs-toggle="tooltip" title="Copy to clipboard" data-hs-clipboard-options="{
                        &quot;type&quot;: &quot;tooltip&quot;,
                        &quot;successText&quot;: &quot;Copied!&quot;,
                        &quot;contentTarget&quot;: &quot;#referralsKeyCode17&quot;,
                        &quot;classChangeTarget&quot;: &quot;#referralsKeyCodeIcon17&quot;,
                        &quot;defaultClass&quot;: &quot;bi-clipboard&quot;,
                        &quot;successClass&quot;: &quot;bi-check&quot;
                       }">
                                                <i id="referralsKeyCodeIcon17" className="bi-clipboard" />
                                            </a>
                                        </div>
                                    </td>
                                    <td>15</td>
                                    <td>$10.00</td>
                                </tr>
                                <tr>
                                    <td>
                                        <a className="d-flex align-items-center" href="./user-profile.html">
                                            <div className="flex-shrink-0">
                                                <div className="avatar avatar-soft-danger avatar-circle">
                                                    <span className="avatar-initials">P</span>
                                                </div>
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <span className="d-block h5 text-inherit mb-0">Phileas Fogg</span>
                                                <span className="d-block fs-6 text-body">phileas@site.com</span>
                                            </div>
                                        </a>
                                    </td>
                                    <td>12093</td>
                                    <td>
                                        <div className="input-group input-group-sm input-group-merge table-input-group">
                                            <input id="referralsKeyCode18" type="text" className="form-control" readOnly defaultValue="https://htmlstream.com/wer9n8x" />
                                            <a className="js-clipboard input-group-append input-group-text" href="javascript:;" data-bs-toggle="tooltip" title="Copy to clipboard" data-hs-clipboard-options="{
                        &quot;type&quot;: &quot;tooltip&quot;,
                        &quot;successText&quot;: &quot;Copied!&quot;,
                        &quot;contentTarget&quot;: &quot;#referralsKeyCode18&quot;,
                        &quot;classChangeTarget&quot;: &quot;#referralsKeyCodeIcon18&quot;,
                        &quot;defaultClass&quot;: &quot;bi-clipboard&quot;,
                        &quot;successClass&quot;: &quot;bi-check&quot;
                       }">
                                                <i id="referralsKeyCodeIcon18" className="bi-clipboard" />
                                            </a>
                                        </div>
                                    </td>
                                    <td>12</td>
                                    <td>$10.00</td>
                                </tr>
                                <tr>
                                    <td>
                                        <a className="d-flex align-items-center" href="./user-profile.html">
                                            <div className="flex-shrink-0">
                                                <div className="avatar avatar-circle">
                                                    <img className="avatar-img" src="./assets/img/160x160/img6.jpg" alt="Image Description" />
                                                </div>
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <span className="d-block h5 text-inherit mb-0">Mark Williams <i className="bi-question-circle text-primary" data-bs-toggle="tooltip" data-bs-placement="top" title="Top endorsed" /></span>
                                                <span className="d-block fs-6 text-body">mark@site.com</span>
                                            </div>
                                        </a>
                                    </td>
                                    <td>25639</td>
                                    <td>
                                        <div className="input-group input-group-sm input-group-merge table-input-group">
                                            <input id="referralsKeyCode19" type="text" className="form-control" readOnly defaultValue="https://htmlstream.com/wer9n8x" />
                                            <a className="js-clipboard input-group-append input-group-text" href="javascript:;" data-bs-toggle="tooltip" title="Copy to clipboard" data-hs-clipboard-options="{
                        &quot;type&quot;: &quot;tooltip&quot;,
                        &quot;successText&quot;: &quot;Copied!&quot;,
                        &quot;contentTarget&quot;: &quot;#referralsKeyCode19&quot;,
                        &quot;classChangeTarget&quot;: &quot;#referralsKeyCodeIcon19&quot;,
                        &quot;defaultClass&quot;: &quot;bi-clipboard&quot;,
                        &quot;successClass&quot;: &quot;bi-check&quot;
                       }">
                                                <i id="referralsKeyCodeIcon19" className="bi-clipboard" />
                                            </a>
                                        </div>
                                    </td>
                                    <td>9</td>
                                    <td>$10.00</td>
                                </tr>
                                <tr>
                                    <td>
                                        <a className="d-flex align-items-center" href="./user-profile.html">
                                            <div className="flex-shrink-0">
                                                <div className="avatar avatar-soft-dark avatar-circle">
                                                    <span className="avatar-initials">T</span>
                                                </div>
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <span className="d-block h5 text-inherit mb-0">Timothy Silva</span>
                                                <span className="d-block fs-6 text-body">timothy@site.com</span>
                                            </div>
                                        </a>
                                    </td>
                                    <td>89314</td>
                                    <td>
                                        <div className="input-group input-group-sm input-group-merge table-input-group">
                                            <input id="referralsKeyCode20" type="text" className="form-control" readOnly defaultValue="https://htmlstream.com/wer9n8x" />
                                            <a className="js-clipboard input-group-append input-group-text" href="javascript:;" data-bs-toggle="tooltip" title="Copy to clipboard" data-hs-clipboard-options="{
                        &quot;type&quot;: &quot;tooltip&quot;,
                        &quot;successText&quot;: &quot;Copied!&quot;,
                        &quot;contentTarget&quot;: &quot;#referralsKeyCode20&quot;,
                        &quot;classChangeTarget&quot;: &quot;#referralsKeyCodeIcon20&quot;,
                        &quot;defaultClass&quot;: &quot;bi-clipboard&quot;,
                        &quot;successClass&quot;: &quot;bi-check&quot;
                       }">
                                                <i id="referralsKeyCodeIcon20" className="bi-clipboard" />
                                            </a>
                                        </div>
                                    </td>
                                    <td>3</td>
                                    <td>$10.00</td>
                                </tr>
                                <tr>
                                    <td>
                                        <a className="d-flex align-items-center" href="./user-profile.html">
                                            <div className="flex-shrink-0">
                                                <div className="avatar avatar-soft-dark avatar-circle">
                                                    <span className="avatar-initials">G</span>
                                                </div>
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <span className="d-block h5 text-inherit mb-0">Gary Bishop <i className="bi-question-circle text-primary" data-bs-toggle="tooltip" data-bs-placement="top" title="Top endorsed" /></span>
                                                <span className="d-block fs-6 text-body">gary@site.com</span>
                                            </div>
                                        </a>
                                    </td>
                                    <td>81724</td>
                                    <td>
                                        <div className="input-group input-group-sm input-group-merge table-input-group">
                                            <input id="referralsKeyCode21" type="text" className="form-control" readOnly defaultValue="https://htmlstream.com/wer9n8x" />
                                            <a className="js-clipboard input-group-append input-group-text" href="javascript:;" data-bs-toggle="tooltip" title="Copy to clipboard" data-hs-clipboard-options="{
                        &quot;type&quot;: &quot;tooltip&quot;,
                        &quot;successText&quot;: &quot;Copied!&quot;,
                        &quot;contentTarget&quot;: &quot;#referralsKeyCode21&quot;,
                        &quot;classChangeTarget&quot;: &quot;#referralsKeyCodeIcon21&quot;,
                        &quot;defaultClass&quot;: &quot;bi-clipboard&quot;,
                        &quot;successClass&quot;: &quot;bi-check&quot;
                       }">
                                                <i id="referralsKeyCodeIcon21" className="bi-clipboard" />
                                            </a>
                                        </div>
                                    </td>
                                    <td>3</td>
                                    <td>$10.00</td>
                                </tr>
                                <tr>
                                    <td>
                                        <a className="d-flex align-items-center" href="./user-profile.html">
                                            <div className="flex-shrink-0">
                                                <div className="avatar avatar-soft-dark avatar-circle">
                                                    <span className="avatar-initials">Y</span>
                                                </div>
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <span className="d-block h5 text-inherit mb-0">Yorker Scogings</span>
                                                <span className="d-block fs-6 text-body">yorker@site.com</span>
                                            </div>
                                        </a>
                                    </td>
                                    <td>15033</td>
                                    <td>
                                        <div className="input-group input-group-sm input-group-merge table-input-group">
                                            <input id="referralsKeyCode22" type="text" className="form-control" readOnly defaultValue="https://htmlstream.com/wer9n8x" />
                                            <a className="js-clipboard input-group-append input-group-text" href="javascript:;" data-bs-toggle="tooltip" title="Copy to clipboard" data-hs-clipboard-options="{
                        &quot;type&quot;: &quot;tooltip&quot;,
                        &quot;successText&quot;: &quot;Copied!&quot;,
                        &quot;contentTarget&quot;: &quot;#referralsKeyCode22&quot;,
                        &quot;classChangeTarget&quot;: &quot;#referralsKeyCodeIcon22&quot;,
                        &quot;defaultClass&quot;: &quot;bi-clipboard&quot;,
                        &quot;successClass&quot;: &quot;bi-check&quot;
                       }">
                                                <i id="referralsKeyCodeIcon22" className="bi-clipboard" />
                                            </a>
                                        </div>
                                    </td>
                                    <td>2</td>
                                    <td>$10.00</td>
                                </tr>
                                <tr>
                                    <td>
                                        <a className="d-flex align-items-center" href="./user-profile.html">
                                            <div className="flex-shrink-0">
                                                <div className="avatar avatar-soft-info avatar-circle">
                                                    <span className="avatar-initials">F</span>
                                                </div>
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <span className="d-block h5 text-inherit mb-0">Frank Phillips</span>
                                                <span className="d-block fs-6 text-body">frank@site.com</span>
                                            </div>
                                        </a>
                                    </td>
                                    <td>32503</td>
                                    <td>
                                        <div className="input-group input-group-sm input-group-merge table-input-group">
                                            <input id="referralsKeyCode23" type="text" className="form-control" readOnly defaultValue="https://htmlstream.com/wer9n8x" />
                                            <a className="js-clipboard input-group-append input-group-text" href="javascript:;" data-bs-toggle="tooltip" title="Copy to clipboard" data-hs-clipboard-options="{
                        &quot;type&quot;: &quot;tooltip&quot;,
                        &quot;successText&quot;: &quot;Copied!&quot;,
                        &quot;contentTarget&quot;: &quot;#referralsKeyCode23&quot;,
                        &quot;classChangeTarget&quot;: &quot;#referralsKeyCodeIcon23&quot;,
                        &quot;defaultClass&quot;: &quot;bi-clipboard&quot;,
                        &quot;successClass&quot;: &quot;bi-check&quot;
                       }">
                                                <i id="referralsKeyCodeIcon23" className="bi-clipboard" />
                                            </a>
                                        </div>
                                    </td>
                                    <td>2</td>
                                    <td>$0.00</td>
                                </tr>
                                <tr>
                                    <td>
                                        <a className="d-flex align-items-center" href="./user-profile.html">
                                            <div className="flex-shrink-0">
                                                <div className="avatar avatar-soft-primary avatar-circle">
                                                    <span className="avatar-initials">E</span>
                                                </div>
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <span className="d-block h5 text-inherit mb-0">Elizabeth Carter</span>
                                                <span className="d-block fs-6 text-body">eliz@site.com</span>
                                            </div>
                                        </a>
                                    </td>
                                    <td>856734</td>
                                    <td>
                                        <div className="input-group input-group-sm input-group-merge table-input-group">
                                            <input id="referralsKeyCode24" type="text" className="form-control" readOnly defaultValue="https://htmlstream.com/wer9n8x" />
                                            <a className="js-clipboard input-group-append input-group-text" href="javascript:;" data-bs-toggle="tooltip" title="Copy to clipboard" data-hs-clipboard-options="{
                        &quot;type&quot;: &quot;tooltip&quot;,
                        &quot;successText&quot;: &quot;Copied!&quot;,
                        &quot;contentTarget&quot;: &quot;#referralsKeyCode24&quot;,
                        &quot;classChangeTarget&quot;: &quot;#referralsKeyCodeIcon24&quot;,
                        &quot;defaultClass&quot;: &quot;bi-clipboard&quot;,
                        &quot;successClass&quot;: &quot;bi-check&quot;
                       }">
                                                <i id="referralsKeyCodeIcon24" className="bi-clipboard" />
                                            </a>
                                        </div>
                                    </td>
                                    <td>1</td>
                                    <td>$0.00</td>
                                </tr>
                                <tr>
                                    <td>
                                        <a className="d-flex align-items-center" href="./user-profile.html">
                                            <div className="flex-shrink-0">
                                                <div className="avatar avatar-soft-dark avatar-circle">
                                                    <span className="avatar-initials">O</span>
                                                </div>
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <span className="d-block h5 text-inherit mb-0">Olive Clarks</span>
                                                <span className="d-block fs-6 text-body">olive@site.com</span>
                                            </div>
                                        </a>
                                    </td>
                                    <td>856734</td>
                                    <td>
                                        <div className="input-group input-group-sm input-group-merge table-input-group">
                                            <input id="referralsKeyCode25" type="text" className="form-control" readOnly defaultValue="https://htmlstream.com/wer9n8x" />
                                            <a className="js-clipboard input-group-append input-group-text" href="javascript:;" data-bs-toggle="tooltip" title="Copy to clipboard" data-hs-clipboard-options="{
                        &quot;type&quot;: &quot;tooltip&quot;,
                        &quot;successText&quot;: &quot;Copied!&quot;,
                        &quot;contentTarget&quot;: &quot;#referralsKeyCode25&quot;,
                        &quot;classChangeTarget&quot;: &quot;#referralsKeyCodeIcon25&quot;,
                        &quot;defaultClass&quot;: &quot;bi-clipboard&quot;,
                        &quot;successClass&quot;: &quot;bi-check&quot;
                       }">
                                                <i id="referralsKeyCodeIcon25" className="bi-clipboard" />
                                            </a>
                                        </div>
                                    </td>
                                    <td>1</td>
                                    <td>$0.00</td>
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
                                            <option value={10}>10</option>
                                            <option value={15} selected>15</option>
                                            <option value={20}>20</option>
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
        </>
    )
}

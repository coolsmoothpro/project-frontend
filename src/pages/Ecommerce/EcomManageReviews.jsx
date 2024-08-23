import React from 'react'

export default function EcomManageReviews() {
    return (
        <>
            <div className="content container-fluid">
                {/* Page Header */}
                <div className="page-header">
                    <h1 className="page-header-title">Manage reviews</h1>
                    {/* Nav */}
                    <ul className="nav nav-tabs page-header-tabs">
                        <li className="nav-item">
                            <a className="nav-link active" href="#">
                                Published
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Pending <span className="badge bg-soft-dark text-dark rounded-pill ms-1">2</span>
                            </a>
                        </li>
                    </ul>
                    {/* End Nav */}
                </div>
                {/* End Page Header */}
                {/* Card */}
                <div className="card mb-3 mb-lg-5">
                    {/* Body */}
                    <div className="card-body">
                        <div className="row align-items-md-center gx-md-5">
                            <div className="col-md-auto mb-3 mb-md-0">
                                <div className="d-flex align-items-center">
                                    <div className="flex-shrink-0">
                                        <img className="avatar avatar-xl avatar-4x3" src="./assets/svg/illustrations/oc-review.svg" alt="Image Description" data-hs-theme-appearance="default" />
                                        {/* <img className="avatar avatar-xl avatar-4x3" src="./assets/svg/illustrations-light/oc-review.svg" alt="Image Description" data-hs-theme-appearance="dark" /> */}
                                    </div>
                                    <div className="flex-grow-1 ms-5">
                                        <h4 className="display-3 text-dark mb-0">4.84</h4>
                                        <p>— of 7 reviews <span className="badge bg-soft-dark text-dark rounded-pill ms-1">+1 this week</span></p>
                                    </div>
                                </div>
                            </div>
                            {/* End Col */}
                            <div className="col-md">
                                {/* List */}
                                <ul className="list-unstyled list-py-1 mb-0">
                                    {/* Review Ratings */}
                                    <li className="d-flex align-items-center fs-6">
                                        <span className="me-3">5 star</span>
                                        <div className="progress flex-grow-1">
                                            <div className="progress-bar" role="progressbar" style={{ width: '82%' }} aria-valuenow={82} aria-valuemin={0} aria-valuemax={100} />
                                        </div>
                                        <span className="ms-3">4</span>
                                    </li>
                                    {/* End Review Ratings */}
                                    {/* Review Ratings */}
                                    <li className="d-flex align-items-center fs-6">
                                        <span className="me-3">4 star</span>
                                        <div className="progress flex-grow-1">
                                            <div className="progress-bar" role="progressbar" style={{ width: '18%' }} aria-valuenow={18} aria-valuemin={0} aria-valuemax={100} />
                                        </div>
                                        <span className="ms-3">3</span>
                                    </li>
                                    {/* End Review Ratings */}
                                    {/* Review Ratings */}
                                    <li className="d-flex align-items-center fs-6">
                                        <span className="me-3">3 star</span>
                                        <div className="progress flex-grow-1">
                                            <div className="progress-bar" role="progressbar" style={{ width: '0%' }} aria-valuenow={0} aria-valuemin={0} aria-valuemax={100} />
                                        </div>
                                        <span className="ms-3">0</span>
                                    </li>
                                    {/* End Review Ratings */}
                                    {/* Review Ratings */}
                                    <li className="d-flex align-items-center fs-6">
                                        <span className="me-3">2 star</span>
                                        <div className="progress flex-grow-1">
                                            <div className="progress-bar" role="progressbar" style={{ width: '0%' }} aria-valuenow={0} aria-valuemin={0} aria-valuemax={100} />
                                        </div>
                                        <span className="ms-3">0</span>
                                    </li>
                                    {/* End Review Ratings */}
                                    {/* Review Ratings */}
                                    <li className="d-flex align-items-center fs-6">
                                        <span className="me-3">1 star</span>
                                        <div className="progress flex-grow-1">
                                            <div className="progress-bar" role="progressbar" style={{ width: '0%' }} aria-valuenow={0} aria-valuemin={0} aria-valuemax={100} />
                                        </div>
                                        <span className="ms-3">0</span>
                                    </li>
                                    {/* End Review Ratings */}
                                </ul>
                                {/* End List */}
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
                    <div className="card-header card-header-content-md-between">
                        <div className="mb-2 mb-md-0">
                            <form>
                                {/* Search */}
                                <div className="input-group input-group-merge input-group-flush">
                                    <div className="input-group-prepend input-group-text">
                                        <i className="bi-search" />
                                    </div>
                                    <input id="datatableSearch" type="search" className="form-control" placeholder="Search reviews" aria-label="Search reviews" />
                                </div>
                                {/* End Search */}
                            </form>
                        </div>
                        <div className="d-grid d-sm-flex justify-content-md-end align-items-sm-center gap-2">
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
                            {/* Select */}
                            <div className="tom-select-custom tom-select-custom-end">
                                <select className="js-select js-datatable-filter form-select form-select-sm" data-target-column-index={5} data-hs-tom-select-options="{
                        &quot;searchInDropdown&quot;: false,
                        &quot;hideSearch&quot;: true,
                        &quot;dropdownWidth&quot;: &quot;11rem&quot;,
                        &quot;placeholder&quot;: &quot;Filters&quot;,
                        &quot;dropdownWrapperClass&quot;: &quot;tom-select-custom tom-select-custom-end&quot;
                      }">
                                    <option value="null" selected>All</option>
                                    <option value="Published">Published</option>
                                    <option value="Pending">Pending</option>
                                </select>
                            </div>
                            {/* End Select */}
                        </div>
                    </div>
                    {/* End Header */}
                    {/* Table */}
                    <div className="table-responsive datatable-custom">
                        <table id="datatable" className="table table-borderless table-thead-bordered table-nowrap card-table" data-hs-datatables-options="{
                   &quot;columnDefs&quot;: [{
                      &quot;targets&quot;: [0, 3, 6],
                      &quot;orderable&quot;: false
                    }],
                   &quot;order&quot;: [],
                   &quot;info&quot;: {
                     &quot;totalQty&quot;: &quot;#datatableWithPaginationInfoTotalQty&quot;
                   },
                   &quot;search&quot;: &quot;#datatableSearch&quot;,
                   &quot;entries&quot;: &quot;#datatableEntries&quot;,
                   &quot;pageLength&quot;: 5,
                   &quot;isResponsive&quot;: false,
                   &quot;isShowPaging&quot;: false,
                   &quot;pagination&quot;: &quot;datatablePagination&quot;
                 }">
                            <thead className="thead-light">
                                <tr>
                                    <th scope="col" className="table-column-pe-0">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" defaultValue id="datatableCheckAll" />
                                            <label className="form-check-label" htmlFor="datatableCheckAll" />
                                        </div>
                                    </th>
                                    <th>Product</th>
                                    <th>Reviewer</th>
                                    <th>Review</th>
                                    <th>Date</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="table-column-pe-0">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" defaultValue id="usersDataCheck2" />
                                            <label className="form-check-label" htmlFor="usersDataCheck2" />
                                        </div>
                                    </td>
                                    <th>
                                        <a className="d-flex align-items-center" href="./user-profile.html">
                                            <div className="avatar">
                                                <img className="avatar-img" src="./assets/img/400x400/img18.jpg" alt="Image Description" />
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <span className="card-title h5 text-dark text-inherit">Brown Hat</span>
                                            </div>
                                        </a>
                                    </th>
                                    <td>
                                        <a className="d-flex align-items-center" href="./user-profile.html">
                                            <div className="avatar avatar-circle">
                                                <img className="avatar-img" src="./assets/img/160x160/img10.jpg" alt="Image Description" />
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <span className="card-title h5 text-inherit">Amanda Harvey <i className="bi-patch-check-fill text-primary" data-bs-toggle="tooltip" data-bs-placement="top" title="Verified purchase" /></span>
                                                <span className="d-block fs-6 text-body">amanda@site.com</span>
                                            </div>
                                        </a>
                                    </td>
                                    <td>
                                        <div className="text-wrap" style={{ width: '18rem' }}>
                                            <div className="d-flex gap-1 mb-2">
                                                <img src="./assets/svg/illustrations/star.svg" alt="Review rating" width={14} />
                                                <img src="./assets/svg/illustrations/star.svg" alt="Review rating" width={14} />
                                                <img src="./assets/svg/illustrations/star.svg" alt="Review rating" width={14} />
                                                <img src="./assets/svg/illustrations/star.svg" alt="Review rating" width={14} />
                                                <img src="./assets/svg/illustrations/star.svg" alt="Review rating" width={14} />
                                            </div>
                                            <h4 className="mb-1">I just love it!</h4>
                                            <p>I bought this hat for my boyfriend, but then i found out he cheated on me so I kept it and I love it!! I wear it all the time and there is no problem with the fit even though its a mens" hat.</p>
                                        </div>
                                    </td>
                                    <td>Aug 17, 2020, 5:48</td>
                                    <td><span className="badge bg-soft-success text-success ms-2">Published</span></td>
                                    <td>
                                        {/* Unfold */}
                                        <div className="hs-unfold">
                                            <button type="button" className="btn btn-ghost-secondary btn-icon btn-sm rounded-circle" id="settingsDropdown1" data-bs-toggle="dropdown" aria-expanded="false">
                                                <i className="bi-three-dots-vertical" />
                                            </button>
                                            <div className="dropdown-menu dropdown-menu-end mt-1" aria-labelledby="settingsDropdown1">
                                                <span className="dropdown-header">Settings</span>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-pencil-fill dropdown-item-icon" /> Edit
                                                </a>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-upload dropdown-item-icon" /> Publish
                                                </a>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-trash dropdown-item-icon" /> Delete
                                                </a>
                                                <div className="dropdown-divider" />
                                                <span className="dropdown-header">Feedback</span>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-reply dropdown-item-icon" /> Reply
                                                </a>
                                            </div>
                                        </div>
                                        {/* End Unfold */}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="table-column-pe-0">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" defaultValue id="usersDataCheck3" />
                                            <label className="form-check-label" htmlFor="usersDataCheck3" />
                                        </div>
                                    </td>
                                    <th>
                                        <a className="d-flex align-items-center" href="./user-profile.html">
                                            <div className="avatar">
                                                <img className="avatar-img" src="./assets/img/400x400/img3.jpg" alt="Image Description" />
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <span className="card-title h5 text-dark text-inherit">Calvin Klein t-shirts</span>
                                            </div>
                                        </a>
                                    </th>
                                    <td>
                                        <a className="d-flex align-items-center" href="./user-profile.html">
                                            <div className="avatar avatar-soft-dark avatar-circle">
                                                <span className="avatar-initials">A</span>
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <span className="card-title h5 text-dark text-inherit">Anne Richard</span>
                                                <span className="d-block fs-6 text-body">anne@site.com</span>
                                            </div>
                                        </a>
                                    </td>
                                    <td>
                                        <div className="text-wrap" style={{ width: '18rem' }}>
                                            <div className="d-flex gap-1 mb-2">
                                                <img src="./assets/svg/illustrations/star.svg" alt="Review rating" width={14} />
                                                <img src="./assets/svg/illustrations/star.svg" alt="Review rating" width={14} />
                                                <img src="./assets/svg/illustrations/star.svg" alt="Review rating" width={14} />
                                                <img src="./assets/svg/illustrations/star.svg" alt="Review rating" width={14} />
                                                <img src="./assets/svg/illustrations/star.svg" alt="Review rating" width={14} />
                                            </div>
                                            <h4 className="mb-1">Really nice</h4>
                                            <p>Material is great and very comfortable and stylish.</p>
                                        </div>
                                    </td>
                                    <td>Aug 04, 2020, 3:17</td>
                                    <td><span className="badge bg-soft-warning text-warning ms-2">Pending</span></td>
                                    <td>
                                        {/* Unfold */}
                                        <div className="hs-unfold">
                                            <button type="button" className="btn btn-ghost-secondary btn-icon btn-sm rounded-circle" id="settingsDropdown2" data-bs-toggle="dropdown" aria-expanded="false">
                                                <i className="bi-three-dots-vertical" />
                                            </button>
                                            <div className="dropdown-menu dropdown-menu-end mt-1" aria-labelledby="settingsDropdown2">
                                                <span className="dropdown-header">Settings</span>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-pencil-fill dropdown-item-icon" /> Edit
                                                </a>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-upload dropdown-item-icon" /> Publish
                                                </a>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-trash dropdown-item-icon" /> Delete
                                                </a>
                                                <div className="dropdown-divider" />
                                                <span className="dropdown-header">Feedback</span>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-reply dropdown-item-icon" /> Reply
                                                </a>
                                            </div>
                                        </div>
                                        {/* End Unfold */}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="table-column-pe-0">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" defaultValue id="usersDataCheck4" />
                                            <label className="form-check-label" htmlFor="usersDataCheck4" />
                                        </div>
                                    </td>
                                    <th>
                                        <a className="d-flex align-items-center" href="./user-profile.html">
                                            <div className="avatar">
                                                <img className="avatar-img" src="./assets/img/400x400/img24.jpg" alt="Image Description" />
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <span className="card-title h5 text-dark text-inherit">Clarks shoes</span>
                                            </div>
                                        </a>
                                    </th>
                                    <td>
                                        <a className="d-flex align-items-center" href="./user-profile.html">
                                            <div className="avatar avatar-circle">
                                                <img className="avatar-img" src="./assets/img/160x160/img3.jpg" alt="Image Description" />
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <span className="card-title h5 text-dark text-inherit">David Harrison</span>
                                                <span className="d-block fs-6 text-body">david@site.com</span>
                                            </div>
                                        </a>
                                    </td>
                                    <td>
                                        <div className="text-wrap" style={{ width: '18rem' }}>
                                            <div className="d-flex gap-1 mb-2">
                                                <img src="./assets/svg/illustrations/star.svg" alt="Review rating" width={14} />
                                                <img src="./assets/svg/illustrations/star.svg" alt="Review rating" width={14} />
                                                <img src="./assets/svg/illustrations/star.svg" alt="Review rating" width={14} />
                                                <img src="./assets/svg/illustrations/star.svg" alt="Review rating" width={14} />
                                                <img src="./assets/svg/illustrations/star-muted.svg" alt="Review rating" width={14} data-hs-theme-appearance="default" />
                                                <img src="./assets/svg/illustrations-light/star-muted.svg" alt="Review rating" width={14} data-hs-theme-appearance="dark" />
                                            </div>
                                            <h4 className="mb-1">Good product</h4>
                                            <p>A really well built shoe. It looks great and wears just as well. A great staple in ball caps.</p>
                                        </div>
                                    </td>
                                    <td>June 18, 2020, 09:19</td>
                                    <td><span className="badge bg-soft-success text-success ms-2">Published</span></td>
                                    <td>
                                        {/* Unfold */}
                                        <div className="hs-unfold">
                                            <button type="button" className="btn btn-ghost-secondary btn-icon btn-sm rounded-circle" id="settingsDropdown3" data-bs-toggle="dropdown" aria-expanded="false">
                                                <i className="bi-three-dots-vertical" />
                                            </button>
                                            <div className="dropdown-menu dropdown-menu-end mt-1" aria-labelledby="settingsDropdown3">
                                                <span className="dropdown-header">Settings</span>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-pencil-fill dropdown-item-icon" /> Edit
                                                </a>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-upload dropdown-item-icon" /> Publish
                                                </a>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-trash dropdown-item-icon" /> Delete
                                                </a>
                                                <div className="dropdown-divider" />
                                                <span className="dropdown-header">Feedback</span>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-reply dropdown-item-icon" /> Reply
                                                </a>
                                            </div>
                                        </div>
                                        {/* End Unfold */}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="table-column-pe-0">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" defaultValue id="usersDataCheck5" />
                                            <label className="form-check-label" htmlFor="usersDataCheck5" />
                                        </div>
                                    </td>
                                    <th>
                                        <a className="d-flex align-items-center" href="./user-profile.html">
                                            <div className="avatar">
                                                <img className="avatar-img" src="./assets/img/400x400/img19.jpg" alt="Image Description" />
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <span className="card-title h5 text-dark text-inherit">Levis women's jeans</span>
                                            </div>
                                        </a>
                                    </th>
                                    <td>
                                        <a className="d-flex align-items-center" href="./user-profile.html">
                                            <div className="avatar avatar-circle">
                                                <img className="avatar-img" src="./assets/img/160x160/img5.jpg" alt="Image Description" />
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <span className="card-title h5 text-dark text-inherit">David Harrison</span>
                                                <span className="d-block fs-6 text-body">david@site.com</span>
                                            </div>
                                        </a>
                                    </td>
                                    <td>
                                        <div className="text-wrap" style={{ width: '18rem' }}>
                                            <div className="d-flex gap-1 mb-2">
                                                <img src="./assets/svg/illustrations/star.svg" alt="Review rating" width={14} />
                                                <img src="./assets/svg/illustrations/star.svg" alt="Review rating" width={14} />
                                                <img src="./assets/svg/illustrations/star.svg" alt="Review rating" width={14} />
                                                <img src="./assets/svg/illustrations/star.svg" alt="Review rating" width={14} />
                                                <img src="./assets/svg/illustrations/star.svg" alt="Review rating" width={14} />
                                            </div>
                                            <h4 className="mb-1">Buy the product, you will not regret it!</h4>
                                            <p>Don't let this merchandise get away! It's a must buy and you will look good in it while working out.</p>
                                        </div>
                                    </td>
                                    <td>June 08, 2020, 07:22</td>
                                    <td><span className="badge bg-soft-success text-success ms-2">Published</span></td>
                                    <td>
                                        {/* Unfold */}
                                        <div className="hs-unfold">
                                            <button type="button" className="btn btn-ghost-secondary btn-icon btn-sm rounded-circle" id="settingsDropdown4" data-bs-toggle="dropdown" aria-expanded="false">
                                                <i className="bi-three-dots-vertical" />
                                            </button>
                                            <div className="dropdown-menu dropdown-menu-end mt-1" aria-labelledby="settingsDropdown4">
                                                <span className="dropdown-header">Settings</span>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-pencil-fill dropdown-item-icon" /> Edit
                                                </a>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-upload dropdown-item-icon" /> Publish
                                                </a>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-trash dropdown-item-icon" /> Delete
                                                </a>
                                                <div className="dropdown-divider" />
                                                <span className="dropdown-header">Feedback</span>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-reply dropdown-item-icon" /> Reply
                                                </a>
                                            </div>
                                        </div>
                                        {/* End Unfold */}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="table-column-pe-0">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" defaultValue id="usersDataCheck6" />
                                            <label className="form-check-label" htmlFor="usersDataCheck6" />
                                        </div>
                                    </td>
                                    <th>
                                        <a className="d-flex align-items-center" href="./user-profile.html">
                                            <div className="avatar">
                                                <img className="avatar-img" src="./assets/img/400x400/img11.jpg" alt="Image Description" />
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <span className="card-title h5 text-dark text-inherit">Asos t-shirts</span>
                                            </div>
                                        </a>
                                    </th>
                                    <td>
                                        <a className="d-flex align-items-center" href="./user-profile.html">
                                            <div className="avatar avatar-soft-dark avatar-circle">
                                                <span className="avatar-initials">B</span>
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <span className="card-title h5 text-dark text-inherit">Bob Dean</span>
                                                <span className="d-block fs-6 text-body">bob@site.com</span>
                                            </div>
                                        </a>
                                    </td>
                                    <td>
                                        <div className="text-wrap" style={{ width: '18rem' }}>
                                            <div className="d-flex gap-1 mb-2">
                                                <img src="./assets/svg/illustrations/star.svg" alt="Review rating" width={14} />
                                                <img src="./assets/svg/illustrations/star.svg" alt="Review rating" width={14} />
                                                <img src="./assets/svg/illustrations/star.svg" alt="Review rating" width={14} />
                                                <img src="./assets/svg/illustrations/star.svg" alt="Review rating" width={14} />
                                                <img src="./assets/svg/illustrations/star-muted.svg" alt="Review rating" width={14} data-hs-theme-appearance="default" />
                                                <img src="./assets/svg/illustrations-light/star-muted.svg" alt="Review rating" width={14} data-hs-theme-appearance="dark" />
                                            </div>
                                            <h4 className="mb-1">Ready for the heat!</h4>
                                            <p>As good as the heat Rdy T-shirt but without the sleeves. Love the stripes on the back.</p>
                                        </div>
                                    </td>
                                    <td>May 27, 2020, 04:01</td>
                                    <td><span className="badge bg-soft-warning text-warning ms-2">Pending</span></td>
                                    <td>
                                        {/* Unfold */}
                                        <div className="hs-unfold">
                                            <button type="button" className="btn btn-ghost-secondary btn-icon btn-sm rounded-circle" id="settingsDropdown5" data-bs-toggle="dropdown" aria-expanded="false">
                                                <i className="bi-three-dots-vertical" />
                                            </button>
                                            <div className="dropdown-menu dropdown-menu-end mt-1" aria-labelledby="settingsDropdown5">
                                                <span className="dropdown-header">Settings</span>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-pencil-fill dropdown-item-icon" /> Edit
                                                </a>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-upload dropdown-item-icon" /> Publish
                                                </a>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-trash dropdown-item-icon" /> Delete
                                                </a>
                                                <div className="dropdown-divider" />
                                                <span className="dropdown-header">Feedback</span>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-reply dropdown-item-icon" /> Reply
                                                </a>
                                            </div>
                                        </div>
                                        {/* End Unfold */}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="table-column-pe-0">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" defaultValue id="usersDataCheck7" />
                                            <label className="form-check-label" htmlFor="usersDataCheck7" />
                                        </div>
                                    </td>
                                    <th>
                                        <a className="d-flex align-items-center" href="./user-profile.html">
                                            <div className="avatar">
                                                <img className="avatar-img" src="./assets/img/400x400/img7.jpg" alt="Image Description" />
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <span className="card-title h5 text-dark text-inherit">Tiro track jacket</span>
                                            </div>
                                        </a>
                                    </th>
                                    <td>
                                        <a className="d-flex align-items-center" href="./user-profile.html">
                                            <div className="avatar avatar-circle">
                                                <img className="avatar-img" src="./assets/img/160x160/img9.jpg" alt="Image Description" />
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <span className="card-title h5 text-dark text-inherit">Ella Lauda <i className="bi-patch-check-fill text-primary" data-bs-toggle="tooltip" data-bs-placement="top" title="Top endorsed" /></span>
                                                <span className="d-block fs-6 text-body">ella@site.com</span>
                                            </div>
                                        </a>
                                    </td>
                                    <td>
                                        <div className="text-wrap" style={{ width: '18rem' }}>
                                            <div className="d-flex gap-1 mb-2">
                                                <img src="./assets/svg/illustrations/star.svg" alt="Review rating" width={14} />
                                                <img src="./assets/svg/illustrations/star.svg" alt="Review rating" width={14} />
                                                <img src="./assets/svg/illustrations/star.svg" alt="Review rating" width={14} />
                                                <img src="./assets/svg/illustrations/star.svg" alt="Review rating" width={14} />
                                                <img src="./assets/svg/illustrations/star-muted.svg" alt="Review rating" width={14} data-hs-theme-appearance="default" />
                                                <img src="./assets/svg/illustrations-light/star-muted.svg" alt="Review rating" width={14} data-hs-theme-appearance="dark" />
                                            </div>
                                            <h4 className="mb-1">Very nice</h4>
                                            <p>Great quality, it is a loose fitting but I would recommend going one size smaller as normal. I always prefer bigger size so bought large for me. Love the pride vibes!!!</p>
                                        </div>
                                    </td>
                                    <td>June 08, 2020, 07:22</td>
                                    <td><span className="badge bg-soft-success text-success ms-2">Published</span></td>
                                    <td>
                                        {/* Unfold */}
                                        <div className="hs-unfold">
                                            <button type="button" className="btn btn-ghost-secondary btn-icon btn-sm rounded-circle" id="settingsDropdown6" data-bs-toggle="dropdown" aria-expanded="false">
                                                <i className="bi-three-dots-vertical" />
                                            </button>
                                            <div className="dropdown-menu dropdown-menu-end mt-1" aria-labelledby="settingsDropdown6">
                                                <span className="dropdown-header">Settings</span>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-pencil-fill dropdown-item-icon" /> Edit
                                                </a>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-upload dropdown-item-icon" /> Publish
                                                </a>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-trash dropdown-item-icon" /> Delete
                                                </a>
                                                <div className="dropdown-divider" />
                                                <span className="dropdown-header">Feedback</span>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-reply dropdown-item-icon" /> Reply
                                                </a>
                                            </div>
                                        </div>
                                        {/* End Unfold */}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="table-column-pe-0">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" defaultValue id="usersDataCheck8" />
                                            <label className="form-check-label" htmlFor="usersDataCheck8" />
                                        </div>
                                    </td>
                                    <th>
                                        <a className="d-flex align-items-center" href="./user-profile.html">
                                            <div className="avatar">
                                                <img className="avatar-img" src="./assets/img/400x400/img14.jpg" alt="Image Description" />
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <span className="card-title h5 text-dark text-inherit">Air Jordan 1</span>
                                            </div>
                                        </a>
                                    </th>
                                    <td>
                                        <a className="d-flex align-items-center" href="./user-profile.html">
                                            <div className="avatar avatar-soft-info avatar-circle">
                                                <span className="avatar-initials">L</span>
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <span className="card-title h5 text-dark text-inherit">Lori Hunter <i className="bi-patch-check-fill text-primary" data-bs-toggle="tooltip" data-bs-placement="top" title="Top endorsed" /></span>
                                                <span className="d-block fs-6 text-body">lori@site.com</span>
                                            </div>
                                        </a>
                                    </td>
                                    <td>
                                        <div className="text-wrap" style={{ width: '18rem' }}>
                                            <div className="d-flex gap-1 mb-2">
                                                <img src="./assets/svg/illustrations/star.svg" alt="Review rating" width={14} />
                                                <img src="./assets/svg/illustrations/star.svg" alt="Review rating" width={14} />
                                                <img src="./assets/svg/illustrations/star.svg" alt="Review rating" width={14} />
                                                <img src="./assets/svg/illustrations/star.svg" alt="Review rating" width={14} />
                                                <img src="./assets/svg/illustrations/star.svg" alt="Review rating" width={14} />
                                            </div>
                                            <h4 className="mb-1">The hype is real!</h4>
                                            <p>I am very pleased with my purchase. I have started to have my friends become addicted to Air Jordans also.</p>
                                        </div>
                                    </td>
                                    <td>May 01, 2020, 01:36</td>
                                    <td><span className="badge bg-soft-success text-success ms-2">Published</span></td>
                                    <td>
                                        {/* Unfold */}
                                        <div className="hs-unfold">
                                            <button type="button" className="btn btn-ghost-secondary btn-icon btn-sm rounded-circle" id="settingsDropdown7" data-bs-toggle="dropdown" aria-expanded="false">
                                                <i className="bi-three-dots-vertical" />
                                            </button>
                                            <div className="dropdown-menu dropdown-menu-end mt-1" aria-labelledby="settingsDropdown7">
                                                <span className="dropdown-header">Settings</span>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-pencil-fill dropdown-item-icon" /> Edit
                                                </a>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-upload dropdown-item-icon" /> Publish
                                                </a>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-trash dropdown-item-icon" /> Delete
                                                </a>
                                                <div className="dropdown-divider" />
                                                <span className="dropdown-header">Feedback</span>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bi-reply dropdown-item-icon" /> Reply
                                                </a>
                                            </div>
                                        </div>
                                        {/* End Unfold */}
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
                                            <option value={5}>5</option>
                                            <option value={7} selected>7</option>
                                            <option value={12}>12</option>
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

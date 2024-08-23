import React from 'react'

export default function Customer() {
    return (
        <div>
            <div className="content container-fluid">
                {/* Page Header */}
                <div className="page-header">
                    <div className="row align-items-center mb-3">
                        <div className="col-md mb-2 mb-md-0">
                            <h1 className="page-header-title">Customers <span className="badge bg-soft-dark text-dark ms-2">97,524</span></h1>
                            <div className="d-sm-flex mt-2">
                                <a className="d-inline-block text-body mb-2 mb-sm-0 me-3" href="javascript:;" data-bs-toggle="modal" data-bs-target="#importCustomersModal">
                                    <i className="bi-upload me-1" /> Import customers
                                </a>
                                <a className="d-inline-block text-body mb-2 mb-sm-0 me-3" href="javascript:;" data-bs-toggle="modal" data-bs-target="#exportCustomersModal">
                                    <i className="bi-download me-1" /> Export
                                </a>
                                {/* Dropdown */}
                                <div className="dropdown">
                                    <a className="d-inline-block text-body mb-2 mb-sm-0 me-3" href="javascript:;" id="moreOptionsDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                        More options <i className="bi-chevron-down" />
                                    </a>
                                    <div className="dropdown-menu mt-1" aria-labelledby="moreOptionsDropdown">
                                        <a className="dropdown-item" href="#">
                                            <i className="bi-clipboard dropdown-item-icon" /> Manage duplicates
                                        </a>
                                        <a className="dropdown-item" href="#">
                                            <i className="bi-pencil dropdown-item-icon" /> Edit users
                                        </a>
                                        <a className="dropdown-item" href="#">
                                            <i className="bi-arrow-clockwise dropdown-item-icon" /> Restore clients
                                        </a>
                                    </div>
                                </div>
                                {/* End Dropdown */}
                            </div>
                        </div>
                        {/* End Col */}
                        <div className="col-md-auto">
                            <a className="btn btn-primary" href="./ecommerce-add-customers.html">Add customers</a>
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
                                <a className="nav-link active" href="#">All</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="#" tabIndex={-1} aria-disabled="true">New</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="#" tabIndex={-1} aria-disabled="true">Returning</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="#" tabIndex={-1} aria-disabled="true">Abandoned checkouts</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="#" tabIndex={-1} aria-disabled="true">Email subscribers</a>
                            </li>
                        </ul>
                        {/* End Nav */}
                    </div>
                    {/* End Nav Scroller */}
                </div>
                {/* End Page Header */}
                {/* Card */}
                <div className="card">
                    {/* Header */}
                    <div className="card-header card-header-content-sm-between">
                        <div className="mb-2 mb-sm-0">
                            <form>
                                {/* Search */}
                                <div className="input-group input-group-merge input-group-flush">
                                    <div className="input-group-prepend input-group-text">
                                        <i className="bi-search" />
                                    </div>
                                    <input id="datatableSearch" type="search" className="form-control" placeholder="Search orders" aria-label="Search orders" />
                                </div>
                                {/* End Search */}
                            </form>
                        </div>
                        <div className="d-grid d-sm-flex justify-content-sm-end align-items-sm-center gap-2">
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
                                <button type="button" className="btn btn-white w-100" id="showHideDropdown" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
                                    <i className="bi-table me-1" /> Columns <span className="badge bg-soft-dark text-dark rounded-circle ms-1">5</span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end dropdown-card" aria-labelledby="showHideDropdown" style={{ width: '15rem' }}>
                                    <div className="card card-sm">
                                        <div className="card-body">
                                            <div className="d-grid gap-3">
                                                {/* Form Switch */}
                                                <label className="row form-check form-switch" htmlFor="toggleColumn_name">
                                                    <span className="col-8 col-sm-9 ms-0">
                                                        <span className="me-2">Name</span>
                                                    </span>
                                                    <span className="col-4 col-sm-3 text-end">
                                                        <input type="checkbox" className="form-check-input" id="toggleColumn_name" defaultChecked />
                                                    </span>
                                                </label>
                                                {/* End Form Switch */}
                                                {/* Form Switch */}
                                                <label className="row form-check form-switch" htmlFor="toggleColumn_email">
                                                    <span className="col-8 col-sm-9 ms-0">
                                                        <span className="me-2">E-mail</span>
                                                    </span>
                                                    <span className="col-4 col-sm-3 text-end">
                                                        <input type="checkbox" className="form-check-input" id="toggleColumn_email" defaultChecked />
                                                    </span>
                                                </label>
                                                {/* End Form Switch */}
                                                {/* Form Switch */}
                                                <label className="row form-check form-switch" htmlFor="toggleColumn_phone">
                                                    <span className="col-8 col-sm-9 ms-0">
                                                        <span className="me-2">Phone</span>
                                                    </span>
                                                    <span className="col-4 col-sm-3 text-end">
                                                        <input type="checkbox" className="form-check-input" id="toggleColumn_phone" />
                                                    </span>
                                                </label>
                                                {/* End Form Switch */}
                                                {/* Form Switch */}
                                                <label className="row form-check form-switch" htmlFor="toggleColumn_country">
                                                    <span className="col-8 col-sm-9 ms-0">
                                                        <span className="me-2">Country</span>
                                                    </span>
                                                    <span className="col-4 col-sm-3 text-end">
                                                        <input type="checkbox" className="form-check-input" id="toggleColumn_country" defaultChecked />
                                                    </span>
                                                </label>
                                                {/* End Form Switch */}
                                                {/* Form Switch */}
                                                <label className="row form-check form-switch" htmlFor="toggleColumn_account_status">
                                                    <span className="col-8 col-sm-9 ms-0">
                                                        <span className="me-2">Account status</span>
                                                    </span>
                                                    <span className="col-4 col-sm-3 text-end">
                                                        <input type="checkbox" className="form-check-input" id="toggleColumn_account_status" />
                                                    </span>
                                                </label>
                                                {/* End Form Switch */}
                                                {/* Form Switch */}
                                                <label className="row form-check form-switch" htmlFor="toggleColumn_orders">
                                                    <span className="col-8 col-sm-9 ms-0">
                                                        <span className="me-2">Orders</span>
                                                    </span>
                                                    <span className="col-4 col-sm-3 text-end">
                                                        <input type="checkbox" className="form-check-input" id="toggleColumn_orders" defaultChecked />
                                                    </span>
                                                </label>
                                                {/* End Form Switch */}
                                                {/* Form Switch */}
                                                <label className="row form-check form-switch" htmlFor="toggleColumn_total_spent">
                                                    <span className="col-8 col-sm-9 ms-0">
                                                        <span className="me-2">Total spent</span>
                                                    </span>
                                                    <span className="col-4 col-sm-3 text-end">
                                                        <input type="checkbox" className="form-check-input" id="toggleColumn_total_spent" defaultChecked />
                                                    </span>
                                                </label>
                                                {/* End Form Switch */}
                                                {/* Form Switch */}
                                                <label className="row form-check form-switch" htmlFor="toggleColumn_last_activity">
                                                    <span className="col-8 col-sm-9 ms-0">
                                                        <span className="me-2">Last activity</span>
                                                    </span>
                                                    <span className="col-4 col-sm-3 text-end">
                                                        <input type="checkbox" className="form-check-input" id="toggleColumn_last_activity" />
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
                        <table id="datatable" className="table table-lg table-borderless table-thead-bordered table-nowrap table-align-middle card-table" data-hs-datatables-options="{
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
                   &quot;pageLength&quot;: 15,
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
                                    <th className="table-column-ps-0">Name</th>
                                    <th>E-mail</th>
                                    <th>Phone</th>
                                    <th>Country</th>
                                    <th>Account status</th>
                                    <th>Orders</th>
                                    <th>Total spent</th>
                                    <th>Last activity</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="table-column-pe-0">
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" id="usersDataCheck1" />
                                            <label className="form-check-label" htmlFor="usersDataCheck1" />
                                        </div>
                                    </td>
                                    <td className="table-column-ps-0">
                                        <a className="d-flex align-items-center" href="./ecommerce-customer-details.html">
                                            <div className="flex-shrink-0">
                                                <div className="avatar avatar-circle">
                                                    <img className="avatar-img" src="./assets/img/160x160/img10.jpg" alt="Image Description" />
                                                </div>
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <span className="h5 text-inherit">Amanda Harvey <i className="bi-patch-check-fill text-primary" data-bs-toggle="tooltip" data-bs-placement="top" title="Top endorsed" /></span>
                                            </div>
                                        </a>
                                    </td>
                                    <td>amanda@site.com</td>
                                    <td>+1-202-555-0140</td>
                                    <td>United Kingdom</td>
                                    <td>
                                        <span className="legend-indicator bg-success" />Active
                                    </td>
                                    <td>3</td>
                                    <td>$3,511.01</td>
                                    <td>Aug 17, 2020, 5:48 (ET)</td>
                                </tr>
                                <tr>
                                    <td className="table-column-pe-0">
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" id="usersDataCheck2" />
                                            <label className="form-check-label" htmlFor="usersDataCheck2" />
                                        </div>
                                    </td>
                                    <td className="table-column-ps-0">
                                        <a className="d-flex align-items-center" href="./ecommerce-customer-details.html">
                                            <div className="flex-shrink-0">
                                                <div className="avatar avatar-soft-primary avatar-circle">
                                                    <span className="avatar-initials">A</span>
                                                </div>
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <span className="h5 text-inherit">Anne Richard</span>
                                            </div>
                                        </a>
                                    </td>
                                    <td>anne@site.com</td>
                                    <td>+1-752-235-2353</td>
                                    <td>United States</td>
                                    <td>
                                        <span className="legend-indicator bg-danger" />Disabled
                                    </td>
                                    <td>1</td>
                                    <td>$235.00</td>
                                    <td>Aug 17, 2020, 2:01 (ET)</td>
                                </tr>
                                <tr>
                                    <td className="table-column-pe-0">
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" id="usersDataCheck3" />
                                            <label className="form-check-label" htmlFor="usersDataCheck3" />
                                        </div>
                                    </td>
                                    <td className="table-column-ps-0">
                                        <a className="d-flex align-items-center" href="./ecommerce-customer-details.html">
                                            <div className="flex-shrink-0">
                                                <div className="avatar avatar-circle">
                                                    <img className="avatar-img" src="./assets/img/160x160/img3.jpg" alt="Image Description" />
                                                </div>
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <span className="h5 text-inherit">David Harrison</span>
                                            </div>
                                        </a>
                                    </td>
                                    <td>david@site.com</td>
                                    <td>+1-235-364-2611</td>
                                    <td>United States</td>
                                    <td>
                                        <span className="legend-indicator bg-success" />Active
                                    </td>
                                    <td>53 <span className="badge bg-soft-dark text-dark ms-1">+3 today</span></td>
                                    <td>$346,410.12</td>
                                    <td>Aug 17, 2020, 1:55 (ET)</td>
                                </tr>
                                <tr>
                                    <td className="table-column-pe-0">
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" id="usersDataCheck4" />
                                            <label className="form-check-label" htmlFor="usersDataCheck4" />
                                        </div>
                                    </td>
                                    <td className="table-column-ps-0">
                                        <a className="d-flex align-items-center" href="./ecommerce-customer-details.html">
                                            <div className="flex-shrink-0">
                                                <div className="avatar avatar-circle">
                                                    <img className="avatar-img" src="./assets/img/160x160/img5.jpg" alt="Image Description" />
                                                </div>
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <span className="h5 text-inherit">Finch Hoot</span>
                                            </div>
                                        </a>
                                    </td>
                                    <td>finch@site.com</td>
                                    <td>+1-743-632-9574</td>
                                    <td>Argentina</td>
                                    <td>
                                        <span className="legend-indicator bg-danger" />Disabled
                                    </td>
                                    <td>12 <span className="badge bg-soft-dark text-dark ms-1">+1 today</span></td>
                                    <td>$1,350.04</td>
                                    <td>Aug 17, 2020, 1:54 (ET)</td>
                                </tr>
                                <tr>
                                    <td className="table-column-pe-0">
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" id="usersDataCheck5" />
                                            <label className="form-check-label" htmlFor="usersDataCheck5" />
                                        </div>
                                    </td>
                                    <td className="table-column-ps-0">
                                        <a className="d-flex align-items-center" href="./ecommerce-customer-details.html">
                                            <div className="flex-shrink-0">
                                                <div className="avatar avatar-soft-dark avatar-circle">
                                                    <span className="avatar-initials">B</span>
                                                </div>
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <span className="h5 text-inherit">Bob Dean</span>
                                            </div>
                                        </a>
                                    </td>
                                    <td>bob@site.com</td>
                                    <td>+1-854-235-9755</td>
                                    <td>Austria</td>
                                    <td>
                                        <span className="legend-indicator bg-danger" />Disabled
                                    </td>
                                    <td>8</td>
                                    <td>$912.13</td>
                                    <td>Aug 17, 2020, 1:04 (ET)</td>
                                </tr>
                                <tr>
                                    <td className="table-column-pe-0">
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" id="usersDataCheck6" />
                                            <label className="form-check-label" htmlFor="usersDataCheck6" />
                                        </div>
                                    </td>
                                    <td className="table-column-ps-0">
                                        <a className="d-flex align-items-center" href="./ecommerce-customer-details.html">
                                            <div className="flex-shrink-0">
                                                <div className="avatar avatar-circle">
                                                    <img className="avatar-img" src="./assets/img/160x160/img9.jpg" alt="Image Description" />
                                                </div>
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <span className="h5 text-inherit">Ella Lauda <i className="bi-patch-check-fill text-primary" data-bs-toggle="tooltip" data-bs-placement="top" title="Top endorsed" /></span>
                                            </div>
                                        </a>
                                    </td>
                                    <td>ella@site.com</td>
                                    <td>+1-846-157-2423</td>
                                    <td>United Kingdom</td>
                                    <td>
                                        <span className="legend-indicator bg-success" />Active
                                    </td>
                                    <td>5</td>
                                    <td>$451.66</td>
                                    <td>Aug 17, 2020, 1:01 (ET)</td>
                                </tr>
                                <tr>
                                    <td className="table-column-pe-0">
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" id="usersDataCheck7" />
                                            <label className="form-check-label" htmlFor="usersDataCheck7" />
                                        </div>
                                    </td>
                                    <td className="table-column-ps-0">
                                        <a className="d-flex align-items-center" href="./ecommerce-customer-details.html">
                                            <div className="flex-shrink-0">
                                                <div className="avatar avatar-soft-info avatar-circle">
                                                    <span className="avatar-initials">L</span>
                                                </div>
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <span className="h5 text-inherit">Lori Hunter</span>
                                            </div>
                                        </a>
                                    </td>
                                    <td>hunter@site.com</td>
                                    <td>+1-844-235-4378</td>
                                    <td>Estonia</td>
                                    <td>
                                        <span className="legend-indicator bg-success" />Active
                                    </td>
                                    <td>11 <span className="badge bg-soft-dark text-dark ms-1">+4 today</span></td>
                                    <td>$3,582.46</td>
                                    <td>Aug 17, 2020, 12:56 (ET)</td>
                                </tr>
                                <tr>
                                    <td className="table-column-pe-0">
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" id="usersDataCheck16" />
                                            <label className="form-check-label" htmlFor="usersDataCheck16" />
                                        </div>
                                    </td>
                                    <td className="table-column-ps-0">
                                        <a className="d-flex align-items-center" href="./ecommerce-customer-details.html">
                                            <div className="flex-shrink-0">
                                                <div className="avatar avatar-soft-primary avatar-circle">
                                                    <span className="avatar-initials">M</span>
                                                </div>
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <span className="h5 text-inherit">Mark Colbert</span>
                                            </div>
                                        </a>
                                    </td>
                                    <td>mark@site.com</td>
                                    <td>+1-235-235-7482</td>
                                    <td>Canada</td>
                                    <td>
                                        <span className="legend-indicator bg-success" />Active
                                    </td>
                                    <td>4</td>
                                    <td>$481.00</td>
                                    <td>Aug 17, 2020, 12:54 (ET)</td>
                                </tr>
                                <tr>
                                    <td className="table-column-pe-0">
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" id="usersDataCheck9" />
                                            <label className="form-check-label" htmlFor="usersDataCheck9" />
                                        </div>
                                    </td>
                                    <td className="table-column-ps-0">
                                        <a className="d-flex align-items-center" href="./ecommerce-customer-details.html">
                                            <div className="flex-shrink-0">
                                                <div className="avatar avatar-circle">
                                                    <img className="avatar-img" src="./assets/img/160x160/img6.jpg" alt="Image Description" />
                                                </div>
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <span className="h5 text-inherit">Costa Quinn</span>
                                            </div>
                                        </a>
                                    </td>
                                    <td>costa@site.com</td>
                                    <td>+1-543-346-6343</td>
                                    <td>France</td>
                                    <td>
                                        <span className="legend-indicator bg-success" />Active
                                    </td>
                                    <td>9</td>
                                    <td>$2,591.00</td>
                                    <td>Aug 17, 2020, 12:48 (ET)</td>
                                </tr>
                                <tr>
                                    <td className="table-column-pe-0">
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" id="usersDataCheck10" />
                                            <label className="form-check-label" htmlFor="usersDataCheck10" />
                                        </div>
                                    </td>
                                    <td className="table-column-ps-0">
                                        <a className="d-flex align-items-center" href="./ecommerce-customer-details.html">
                                            <div className="flex-shrink-0">
                                                <div className="avatar avatar-soft-danger avatar-circle">
                                                    <span className="avatar-initials">R</span>
                                                </div>
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <span className="h5 text-inherit">Rachel Doe <i className="bi-patch-check-fill text-primary" data-bs-toggle="tooltip" data-bs-placement="top" title="Top endorsed" /></span>
                                            </div>
                                        </a>
                                    </td>
                                    <td>rachel@site.com</td>
                                    <td>+1-232-643-3643</td>
                                    <td>United States</td>
                                    <td>
                                        <span className="legend-indicator bg-success" />Active
                                    </td>
                                    <td>21</td>
                                    <td>$5,219.18</td>
                                    <td>Aug 17, 2020, 12:41 (ET)</td>
                                </tr>
                                <tr>
                                    <td className="table-column-pe-0">
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" id="usersDataCheck11" />
                                            <label className="form-check-label" htmlFor="usersDataCheck11" />
                                        </div>
                                    </td>
                                    <td className="table-column-ps-0">
                                        <a className="d-flex align-items-center" href="./ecommerce-customer-details.html">
                                            <div className="flex-shrink-0">
                                                <div className="avatar avatar-circle">
                                                    <img className="avatar-img" src="./assets/img/160x160/img8.jpg" alt="Image Description" />
                                                </div>
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <span className="h5 text-inherit">Linda Bates</span>
                                            </div>
                                        </a>
                                    </td>
                                    <td>linda@site.com</td>
                                    <td>+1-123-523-5433</td>
                                    <td>United Kingdom</td>
                                    <td>
                                        <span className="legend-indicator bg-danger" />Disabled
                                    </td>
                                    <td>32 <span className="badge bg-soft-dark text-dark ms-1">+1 today</span></td>
                                    <td>$8,281.99</td>
                                    <td>Aug 17, 2020, 12:36 (ET)</td>
                                </tr>
                                <tr>
                                    <td className="table-column-pe-0">
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" id="usersDataCheck12" />
                                            <label className="form-check-label" htmlFor="usersDataCheck12" />
                                        </div>
                                    </td>
                                    <td className="table-column-ps-0">
                                        <a className="d-flex align-items-center" href="./ecommerce-customer-details.html">
                                            <div className="flex-shrink-0">
                                                <div className="avatar avatar-soft-info avatar-circle">
                                                    <span className="avatar-initials">B</span>
                                                </div>
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <span className="h5 text-inherit">Brian Halligan</span>
                                            </div>
                                        </a>
                                    </td>
                                    <td>brian@site.com</td>
                                    <td>+1-141-463-1512</td>
                                    <td>France</td>
                                    <td>
                                        <span className="legend-indicator bg-success" />Active
                                    </td>
                                    <td>1</td>
                                    <td>$100.00</td>
                                    <td>Aug 17, 2020, 12:25 (ET)</td>
                                </tr>
                                <tr>
                                    <td className="table-column-pe-0">
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" id="usersDataCheck13" />
                                            <label className="form-check-label" htmlFor="usersDataCheck13" />
                                        </div>
                                    </td>
                                    <td className="table-column-ps-0">
                                        <a className="d-flex align-items-center" href="./ecommerce-customer-details.html">
                                            <div className="flex-shrink-0">
                                                <div className="avatar avatar-soft-dark avatar-circle">
                                                    <span className="avatar-initials">C</span>
                                                </div>
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <span className="h5 text-inherit">Chris Mathew</span>
                                            </div>
                                        </a>
                                    </td>
                                    <td>chris@site.com</td>
                                    <td>+1-253-463-1242</td>
                                    <td>Switzerland</td>
                                    <td>
                                        <span className="legend-indicator bg-success" />Active
                                    </td>
                                    <td>1</td>
                                    <td>$26.00</td>
                                    <td>Aug 16, 2020, 4:31 (ET)</td>
                                </tr>
                                <tr>
                                    <td className="table-column-pe-0">
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" id="usersDataCheck14" />
                                            <label className="form-check-label" htmlFor="usersDataCheck14" />
                                        </div>
                                    </td>
                                    <td className="table-column-ps-0">
                                        <a className="d-flex align-items-center" href="./ecommerce-customer-details.html">
                                            <div className="flex-shrink-0">
                                                <div className="avatar avatar-circle">
                                                    <img className="avatar-img" src="./assets/img/160x160/img7.jpg" alt="Image Description" />
                                                </div>
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <span className="h5 text-inherit">Clarice Boone <i className="bi-patch-check-fill text-primary" data-bs-toggle="tooltip" data-bs-placement="top" title="Top endorsed" /></span>
                                            </div>
                                        </a>
                                    </td>
                                    <td>clarice@site.com</td>
                                    <td>+1-532-325-3253</td>
                                    <td>United Kingdom</td>
                                    <td>
                                        <span className="legend-indicator bg-success" />Active
                                    </td>
                                    <td>2</td>
                                    <td>$274.28</td>
                                    <td>Aug 16, 2020, 3:26 (ET)</td>
                                </tr>
                                <tr>
                                    <td className="table-column-pe-0">
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" id="usersDataCheck15" />
                                            <label className="form-check-label" htmlFor="usersDataCheck15" />
                                        </div>
                                    </td>
                                    <td className="table-column-ps-0">
                                        <a className="d-flex align-items-center" href="./ecommerce-customer-details.html">
                                            <div className="flex-shrink-0">
                                                <div className="avatar avatar-soft-dark avatar-circle">
                                                    <span className="avatar-initials">L</span>
                                                </div>
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <span className="h5 text-inherit">Lewis Clarke</span>
                                            </div>
                                        </a>
                                    </td>
                                    <td>lewis@site.com</td>
                                    <td>+1-235-235-2355</td>
                                    <td>Switzerland</td>
                                    <td>
                                        <span className="legend-indicator bg-danger" />Disabled
                                    </td>
                                    <td>4</td>
                                    <td>$999.00</td>
                                    <td>Aug 16, 2020, 2:54 (ET)</td>
                                </tr>
                                <tr>
                                    <td className="table-column-pe-0">
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" id="usersDataCheck8" />
                                            <label className="form-check-label" htmlFor="usersDataCheck8" />
                                        </div>
                                    </td>
                                    <td className="table-column-ps-0">
                                        <a className="d-flex align-items-center" href="./ecommerce-customer-details.html">
                                            <div className="flex-shrink-0">
                                                <div className="avatar avatar-circle">
                                                    <img className="avatar-img" src="./assets/img/160x160/img4.jpg" alt="Image Description" />
                                                </div>
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <span className="h5 text-inherit">Sam Kart</span>
                                            </div>
                                        </a>
                                    </td>
                                    <td>sam@site.com</td>
                                    <td>+1-457-745-7555</td>
                                    <td>Canada</td>
                                    <td>
                                        <span className="legend-indicator bg-success" />Active
                                    </td>
                                    <td>62 <span className="badge bg-soft-dark text-dark ms-1">+9 today</span></td>
                                    <td>$9,281.58</td>
                                    <td>Aug 16, 2020, 2:48 (ET)</td>
                                </tr>
                                <tr>
                                    <td className="table-column-pe-0">
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" id="usersDataCheck17" />
                                            <label className="form-check-label" htmlFor="usersDataCheck17" />
                                        </div>
                                    </td>
                                    <td className="table-column-ps-0">
                                        <a className="d-flex align-items-center" href="./ecommerce-customer-details.html">
                                            <div className="flex-shrink-0">
                                                <div className="avatar avatar-soft-danger avatar-circle">
                                                    <span className="avatar-initials">J</span>
                                                </div>
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <span className="h5 text-inherit">Johnny Appleseed</span>
                                            </div>
                                        </a>
                                    </td>
                                    <td>johnny@site.com</td>
                                    <td>+1-457-734-4544</td>
                                    <td>United States</td>
                                    <td>
                                        <span className="legend-indicator bg-success" />Active
                                    </td>
                                    <td>30</td>
                                    <td>$23,291.37</td>
                                    <td>Aug 16, 2020, 2:40 (ET)</td>
                                </tr>
                                <tr>
                                    <td className="table-column-pe-0">
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" id="usersDataCheck18" />
                                            <label className="form-check-label" htmlFor="usersDataCheck18" />
                                        </div>
                                    </td>
                                    <td className="table-column-ps-0">
                                        <a className="d-flex align-items-center" href="./ecommerce-customer-details.html">
                                            <div className="flex-shrink-0">
                                                <div className="avatar avatar-soft-danger avatar-circle">
                                                    <span className="avatar-initials">P</span>
                                                </div>
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <span className="h5 text-inherit">Phileas Fogg</span>
                                            </div>
                                        </a>
                                    </td>
                                    <td>phileas@site.com</td>
                                    <td>+1-065-084-8658</td>
                                    <td>Spain</td>
                                    <td>
                                        <span className="legend-indicator bg-danger" />Disabled
                                    </td>
                                    <td>10</td>
                                    <td>$82.39</td>
                                    <td>Aug 16, 2020, 1:59 (ET)</td>
                                </tr>
                                <tr>
                                    <td className="table-column-pe-0">
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" id="usersDataCheck19" />
                                            <label className="form-check-label" htmlFor="usersDataCheck19" />
                                        </div>
                                    </td>
                                    <td className="table-column-ps-0">
                                        <a className="d-flex align-items-center" href="./ecommerce-customer-details.html">
                                            <div className="flex-shrink-0">
                                                <div className="avatar avatar-circle">
                                                    <img className="avatar-img" src="./assets/img/160x160/img6.jpg" alt="Image Description" />
                                                </div>
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <span className="h5 text-inherit">Mark Williams <i className="bi-patch-check-fill text-primary" data-bs-toggle="tooltip" data-bs-placement="top" title="Top endorsed" /></span>
                                            </div>
                                        </a>
                                    </td>
                                    <td>mark@site.com</td>
                                    <td>+1-340-055-4733</td>
                                    <td>United Kingdom</td>
                                    <td>
                                        <span className="legend-indicator bg-danger" />Disabled
                                    </td>
                                    <td>7</td>
                                    <td>$343.93</td>
                                    <td>Aug 16, 2020, 1:55 (ET)</td>
                                </tr>
                                <tr>
                                    <td className="table-column-pe-0">
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" id="usersDataCheck20" />
                                            <label className="form-check-label" htmlFor="usersDataCheck20" />
                                        </div>
                                    </td>
                                    <td className="table-column-ps-0">
                                        <a className="d-flex align-items-center" href="./ecommerce-customer-details.html">
                                            <div className="flex-shrink-0">
                                                <div className="avatar avatar-soft-dark avatar-circle">
                                                    <span className="avatar-initials">T</span>
                                                </div>
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <span className="h5 text-inherit">Timothy Silva</span>
                                            </div>
                                        </a>
                                    </td>
                                    <td>timothy@site.com</td>
                                    <td>+1-083-642-4673</td>
                                    <td>Italy</td>
                                    <td>
                                        <span className="legend-indicator bg-success" />Active
                                    </td>
                                    <td>9</td>
                                    <td>$2,238.29</td>
                                    <td>Aug 16, 2020, 1:15 (ET)</td>
                                </tr>
                                <tr>
                                    <td className="table-column-pe-0">
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" id="usersDataCheck21" />
                                            <label className="form-check-label" htmlFor="usersDataCheck21" />
                                        </div>
                                    </td>
                                    <td className="table-column-ps-0">
                                        <a className="d-flex align-items-center" href="./ecommerce-customer-details.html">
                                            <div className="flex-shrink-0">
                                                <div className="avatar avatar-soft-dark avatar-circle">
                                                    <span className="avatar-initials">G</span>
                                                </div>
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <span className="h5 text-inherit">Gary Bishop <i className="bi-patch-check-fill text-primary" data-bs-toggle="tooltip" data-bs-placement="top" title="Top endorsed" /></span>
                                            </div>
                                        </a>
                                    </td>
                                    <td>gary@site.com</td>
                                    <td>+1-325-547-5683</td>
                                    <td>Latvia</td>
                                    <td>
                                        <span className="legend-indicator bg-success" />Active
                                    </td>
                                    <td>6 <span className="badge bg-soft-dark text-dark ms-1">+1 today</span></td>
                                    <td>$2,120.29</td>
                                    <td>Aug 16, 2020, 1:15 (ET)</td>
                                </tr>
                                <tr>
                                    <td className="table-column-pe-0">
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" id="usersDataCheck22" />
                                            <label className="form-check-label" htmlFor="usersDataCheck22" />
                                        </div>
                                    </td>
                                    <td className="table-column-ps-0">
                                        <a className="d-flex align-items-center" href="./ecommerce-customer-details.html">
                                            <div className="flex-shrink-0">
                                                <div className="avatar avatar-soft-dark avatar-circle">
                                                    <span className="avatar-initials">Y</span>
                                                </div>
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <span className="h5 text-inherit">Yorker Scogings</span>
                                            </div>
                                        </a>
                                    </td>
                                    <td>yorker@site.com</td>
                                    <td>+1-954-236-3235</td>
                                    <td>Norway</td>
                                    <td>
                                        <span className="legend-indicator bg-success" />Active
                                    </td>
                                    <td>3</td>
                                    <td>$882.00</td>
                                    <td>Aug 16, 2020, 1:15 (ET)</td>
                                </tr>
                                <tr>
                                    <td className="table-column-pe-0">
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" id="usersDataCheck23" />
                                            <label className="form-check-label" htmlFor="usersDataCheck23" />
                                        </div>
                                    </td>
                                    <td className="table-column-ps-0">
                                        <a className="d-flex align-items-center" href="./ecommerce-customer-details.html">
                                            <div className="flex-shrink-0">
                                                <div className="avatar avatar-soft-info avatar-circle">
                                                    <span className="avatar-initials">F</span>
                                                </div>
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <span className="h5 text-inherit">Frank Phillips</span>
                                            </div>
                                        </a>
                                    </td>
                                    <td>frank@site.com</td>
                                    <td>+1-253-574-3422</td>
                                    <td>Norway</td>
                                    <td>
                                        <span className="legend-indicator bg-success" />Active
                                    </td>
                                    <td>1</td>
                                    <td>$92.00</td>
                                    <td>Aug 16, 2020, 1:15 (ET)</td>
                                </tr>
                                <tr>
                                    <td className="table-column-pe-0">
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" id="usersDataCheck24" />
                                            <label className="form-check-label" htmlFor="usersDataCheck24" />
                                        </div>
                                    </td>
                                    <td className="table-column-ps-0">
                                        <a className="d-flex align-items-center" href="./ecommerce-customer-details.html">
                                            <div className="flex-shrink-0">
                                                <div className="avatar avatar-soft-primary avatar-circle">
                                                    <span className="avatar-initials">E</span>
                                                </div>
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <span className="h5 text-inherit">Elizabeth Carter</span>
                                            </div>
                                        </a>
                                    </td>
                                    <td>eliz@site.com</td>
                                    <td>+1-800-724-3303</td>
                                    <td>United States</td>
                                    <td>
                                        <span className="legend-indicator bg-success" />Active
                                    </td>
                                    <td>2</td>
                                    <td>$50.00</td>
                                    <td>Aug 16, 2020, 1:15 (ET)</td>
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
            </div>
            {/* End Card */}
            {/* Export Customers Modal */}
            <div className="modal fade" id="exportCustomersModal" tabIndex={-1} aria-labelledby="exportCustomersModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        {/* Header */}
                        <div className="modal-header">
                            <h4 className="modal-title" id="exportCustomersModalLabel">Export customers</h4>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        {/* End Header */}
                        {/* Body */}
                        <div className="modal-body">
                            <div className="mb-4">
                                <label className="form-label">Export</label>
                                <div className="d-grid gap-2">
                                    {/* Form Check */}
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="exportCustomersRadio" id="exportCustomersRadio1" defaultChecked />
                                        <label className="form-check-label" htmlFor="exportCustomersRadio1">
                                            Current page
                                        </label>
                                    </div>
                                    {/* End Form Check */}
                                    {/* Form Check */}
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="exportCustomersRadio" id="exportCustomersRadio2" />
                                        <label className="form-check-label" htmlFor="exportCustomersRadio2">
                                            All Customers
                                        </label>
                                    </div>
                                    {/* End Form Check */}
                                    {/* Form Check */}
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="exportCustomersRadio" id="exportCustomersRadio3" disabled />
                                        <label className="form-check-label" htmlFor="exportCustomersRadio3">
                                            Selected: 24 Customers
                                        </label>
                                    </div>
                                    {/* End Form Check */}
                                    {/* Form Check */}
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="exportCustomersRadio" id="exportCustomersRadio4" />
                                        <label className="form-check-label" htmlFor="exportCustomersRadio4">
                                            Order by date
                                        </label>
                                    </div>
                                    {/* End Form Check */}
                                </div>
                            </div>
                            <label className="form-label">Export as</label>
                            {/* Form Check */}
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="exportCustomersAsRadio" id="exportCustomersAsRadio1" defaultChecked />
                                <label className="form-check-label" htmlFor="exportCustomersAsRadio1">
                                    CSV for Excel, Numbers, or other spreadsheet programs
                                </label>
                            </div>
                            {/* End Form Check */}
                            {/* Form Check */}
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="exportCustomersAsRadio" id="exportCustomersAsRadio2" />
                                <label className="form-check-label" htmlFor="exportCustomersAsRadio2">
                                    Plain CSV file
                                </label>
                            </div>
                            {/* End Form Check */}
                        </div>
                        {/* End Body */}
                        {/* Footer */}
                        <div className="modal-footer gap-3">
                            <button type="button" className="btn btn-white" data-bs-dismiss="modal" aria-label="Close">Cancel</button>
                            <button type="button" className="btn btn-primary">Export customers</button>
                        </div>
                        {/* End Footer */}
                    </div>
                </div>
            </div>
            {/* End Export Customers Modal */}
            {/* Import Customers Modal */}
            <div className="modal fade" id="importCustomersModal" tabIndex={-1} aria-labelledby="importCustomersModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        {/* Header */}
                        <div className="modal-header">
                            <h4 className="modal-title" id="importCustomersModalLabel">Import customers by CSV</h4>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        {/* End Header */}
                        {/* Body */}
                        <div className="modal-body">
                            <p><a className="link" href="#">Download a sample CSV template</a> to see an example of the format required.</p>
                            {/* Dropzone */}
                            <div id="attachFilesNewProjectLabel" className="js-dropzone dz-dropzone dz-dropzone-card mb-4">
                                <div className="dz-message">
                                    <img className="avatar avatar-xl avatar-4x3 mb-3" src="./assets/svg/illustrations/oc-browse.svg" alt="Image Description" data-hs-theme-appearance="default" />
                                    <img className="avatar avatar-xl avatar-4x3 mb-3" src="./assets/svg/illustrations-light/oc-browse.svg" alt="Image Description" data-hs-theme-appearance="dark" />
                                    <h5>Drag and drop your file here</h5>
                                    <p className="mb-2">or</p>
                                    <span className="btn btn-white btn-sm">Browse files</span>
                                </div>
                            </div>
                            {/* End Dropzone */}
                            {/* Form Check */}
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" defaultValue id="overwriteCurrentCustomersCheckbox" />
                                <label className="form-check-label" htmlFor="overwriteCurrentCustomersCheckbox">
                                    Overwrite existing customers that have the same email or phone
                                </label>
                            </div>
                            {/* End Form Check */}
                        </div>
                        {/* End Body */}
                        {/* Footer */}
                        <div className="modal-footer">
                            <button type="button" className="btn btn-white" data-bs-dismiss="modal" aria-label="Close">Cancel</button>
                            <button type="button" className="btn btn-primary">Import customers</button>
                        </div>
                        {/* End Footer */}
                    </div>
                </div>
            </div>
            {/* End Import Customers Modal */}
            {/* Customers Guide Modal */}
            <div className="modal fade" id="exportCustomersGuideModal" tabIndex={-1} aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        {/* Header */}
                        <div className="modal-close">
                            <button type="button" className="btn btn-ghost-secondary btn-icon btn-sm" data-bs-dismiss="modal" aria-label="Close">
                                <i className="bi-x-lg" />
                            </button>
                        </div>
                        {/* End Header */}
                        {/* Body */}
                        <div className="modal-body p-sm-5">
                            <div className="text-center mb-5">
                                <h4 className="h1">Welcome to Front Customers</h4>
                            </div>
                            {/* Media */}
                            <div className="d-flex">
                                <div className="flex-shrink-0">
                                    <img className="avatar avatar-xl avatar-4x3" src="./assets/svg/illustrations/oc-chatting.svg" alt="Image Description" data-hs-theme-appearance="default" />
                                    <img className="avatar avatar-xl avatar-4x3" src="./assets/svg/illustrations-light/oc-chatting.svg" alt="Image Description" data-hs-theme-appearance="dark" />
                                </div>
                                <div className="flex-grow-1 ms-4">
                                    <h4>All your customers in one place</h4>
                                    <p>The E-commerce is where you can view &amp; manage your customers and all their activity at your business.</p>
                                </div>
                            </div>
                            {/* End Media */}
                            <hr className="my-4" />
                            {/* Media */}
                            <div className="d-flex">
                                <div className="flex-shrink-0">
                                    <img className="avatar avatar-xl avatar-4x3" src="./assets/svg/illustrations/oc-looking-for-answers.svg" alt="Image Description" data-hs-theme-appearance="default" />
                                    <img className="avatar avatar-xl avatar-4x3" src="./assets/svg/illustrations-light/oc-looking-for-answers.svg" alt="Image Description" data-hs-theme-appearance="dark" />
                                </div>
                                <div className="flex-grow-1 ms-4">
                                    <h4>Search, sort, filter, and group your customers</h4>
                                    <p>Quickly find the customers you need, and organize them however you prefer.</p>
                                </div>
                            </div>
                            {/* End Media */}
                        </div>
                        {/* End Body */}
                        {/* Footer */}
                        <div className="modal-footer justify-content-center">
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" aria-label="Close">Continue</button>
                        </div>
                        {/* End Footer */}
                    </div>
                </div>
            </div>
        </div>
    )
}

import React from 'react'

export default function EcommerceProducts() {
    return (
        <>
            <div className="content container-fluid">
                {/* Page Header */}
                <div className="page-header">
                    <div className="row align-items-center mb-3">
                        <div className="col-sm mb-2 mb-sm-0">
                            <h1 className="page-header-title">Products <span className="badge bg-soft-dark text-dark ms-2">72,031</span></h1>
                            <div className="mt-2">
                                <a className="text-body me-3" href="javascript:;" data-bs-toggle="modal" data-bs-target="#exportProductsModal">
                                    <i className="bi-download me-1" /> Export
                                </a>
                                <a className="text-body" href="javascript:;" data-bs-toggle="modal" data-bs-target="#importProductsModal">
                                    <i className="bi-upload me-1" /> Import
                                </a>
                            </div>
                        </div>
                        {/* End Col */}
                        <div className="col-sm-auto">
                            <a className="btn btn-primary" href="./ecommerce-add-product.html">Add product</a>
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
                        <ul className="nav nav-tabs page-header-tabs" id="pageHeaderTab" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active" href="#">All products</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="#" tabIndex={-1} aria-disabled="true">Archived</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="#" tabIndex={-1} aria-disabled="true">Publish</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="#" tabIndex={-1} aria-disabled="true">Unpublish</a>
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
                            <button className="btn btn-white" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasEcommerceProductFilter" aria-controls="offcanvasEcommerceProductFilter">
                                <i className="bi-filter me-1" /> Filters
                            </button>
                            {/* Dropdown */}
                            <div className="dropdown">
                                <button type="button" className="btn btn-white w-100" id="showHideDropdown" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
                                    <i className="bi-table me-1" /> Columns <span className="badge bg-soft-dark text-dark rounded-circle ms-1">6</span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end dropdown-card" aria-labelledby="showHideDropdown" style={{ width: '15rem' }}>
                                    <div className="card card-sm">
                                        <div className="card-body">
                                            <div className="d-grid gap-3">
                                                {/* Form Switch */}
                                                <label className="row form-check form-switch" htmlFor="toggleColumn_product">
                                                    <span className="col-8 col-sm-9 ms-0">
                                                        <span className="me-2">Product</span>
                                                    </span>
                                                    <span className="col-4 col-sm-3 text-end">
                                                        <input type="checkbox" className="form-check-input" id="toggleColumn_product" defaultChecked />
                                                    </span>
                                                </label>
                                                {/* End Form Switch */}
                                                {/* Form Switch */}
                                                <label className="row form-check form-switch" htmlFor="toggleColumn_type">
                                                    <span className="col-8 col-sm-9 ms-0">
                                                        <span className="me-2">Type</span>
                                                    </span>
                                                    <span className="col-4 col-sm-3 text-end">
                                                        <input type="checkbox" className="form-check-input" id="toggleColumn_type" defaultChecked />
                                                    </span>
                                                </label>
                                                {/* End Form Switch */}
                                                {/* Form Switch */}
                                                <label className="row form-check form-switch" htmlFor="toggleColumn_vendor">
                                                    <span className="col-8 col-sm-9 ms-0">
                                                        <span className="me-2">Vendor</span>
                                                    </span>
                                                    <span className="col-4 col-sm-3 text-end">
                                                        <input type="checkbox" className="form-check-input" id="toggleColumn_vendor" />
                                                    </span>
                                                </label>
                                                {/* End Form Switch */}
                                                {/* Form Switch */}
                                                <label className="row form-check form-switch" htmlFor="toggleColumn_stocks">
                                                    <span className="col-8 col-sm-9 ms-0">
                                                        <span className="me-2">Stocks</span>
                                                    </span>
                                                    <span className="col-4 col-sm-3 text-end">
                                                        <input type="checkbox" className="form-check-input" id="toggleColumn_stocks" defaultChecked />
                                                    </span>
                                                </label>
                                                {/* End Form Switch */}
                                                {/* Form Switch */}
                                                <label className="row form-check form-switch" htmlFor="toggleColumn_sku">
                                                    <span className="col-8 col-sm-9 ms-0">
                                                        <span className="me-2">SKU</span>
                                                    </span>
                                                    <span className="col-4 col-sm-3 text-end">
                                                        <input type="checkbox" className="form-check-input" id="toggleColumn_sku" defaultChecked />
                                                    </span>
                                                </label>
                                                {/* End Form Switch */}
                                                {/* Form Switch */}
                                                <label className="row form-check form-switch" htmlFor="toggleColumn_price">
                                                    <span className="col-8 col-sm-9 ms-0">
                                                        <span className="me-2">Price</span>
                                                    </span>
                                                    <span className="col-4 col-sm-3 text-end">
                                                        <input type="checkbox" className="form-check-input" id="toggleColumn_price" defaultChecked />
                                                    </span>
                                                </label>
                                                {/* End Form Switch */}
                                                {/* Form Switch */}
                                                <label className="row form-check form-switch" htmlFor="toggleColumn_quantity">
                                                    <span className="col-8 col-sm-9 ms-0">
                                                        <span className="me-2">Quantity</span>
                                                    </span>
                                                    <span className="col-4 col-sm-3 text-end">
                                                        <input type="checkbox" className="form-check-input" id="toggleColumn_quantity" />
                                                    </span>
                                                </label>
                                                {/* End Form Switch */}
                                                {/* Form Switch */}
                                                <label className="row form-check form-switch" htmlFor="toggleColumn_variants">
                                                    <span className="col-8 col-sm-9 ms-0">
                                                        <span className="me-2">Variants</span>
                                                    </span>
                                                    <span className="col-4 col-sm-3 text-end">
                                                        <input type="checkbox" className="form-check-input" id="toggleColumn_variants" defaultChecked />
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
                        <table id="datatable" className="table table-borderless table-thead-bordered table-nowrap table-align-middle card-table" data-hs-datatables-options="{
                   &quot;columnDefs&quot;: [{
                      &quot;targets&quot;: [0, 4, 9],
                      &quot;width&quot;: &quot;5%&quot;,
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
                                            <input className="form-check-input" type="checkbox" defaultValue id="datatableCheckAll" />
                                            <label className="form-check-label">
                                            </label>
                                        </div>
                                    </th>
                                    <th className="table-column-ps-0">Product</th>
                                    <th>Type</th>
                                    <th>Vendor</th>
                                    <th>Stocks</th>
                                    <th>SKU</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Variants</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="table-column-pe-0">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" defaultValue id="datatableCheckAll1" />
                                            <label className="form-check-label" htmlFor="datatableCheckAll1" />
                                        </div>
                                    </td>
                                    <td className="table-column-ps-0">
                                        <a className="d-flex align-items-center" href="./ecommerce-product-details.html">
                                            <div className="flex-shrink-0">
                                                <img className="avatar avatar-lg" src="./assets/img/400x400/img4.jpg" alt="Image Description" />
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <h5 className="text-inherit mb-0">Photive wireless speakers</h5>
                                            </div>
                                        </a>
                                    </td>
                                    <td>Electronics</td>
                                    <td>Google</td>
                                    <td>
                                        <div className="form-check form-switch">
                                            <input className="form-check-input" type="checkbox" id="stocksCheckbox1" defaultChecked />
                                            <label className="form-check-label" htmlFor="stocksCheckbox1" />
                                        </div>
                                    </td>
                                    <td>2384741241</td>
                                    <td>$65</td>
                                    <td>60</td>
                                    <td>2</td>
                                    <td>
                                        <div className="btn-group" role="group">
                                            <a className="btn btn-white btn-sm" href="./ecommerce-product-details.html">
                                                <i className="bi-pencil-fill me-1" /> Edit
                                            </a>
                                            {/* Button Group */}
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-white btn-icon btn-sm dropdown-toggle dropdown-toggle-empty" id="productsEditDropdown1" data-bs-toggle="dropdown" aria-expanded="false" />
                                                <div className="dropdown-menu dropdown-menu-end mt-1" aria-labelledby="productsEditDropdown1">
                                                    <a className="dropdown-item" href="#">
                                                        <i className="bi-trash dropdown-item-icon" /> Delete
                                                    </a>
                                                    <a className="dropdown-item" href="#">
                                                        <i className="bi-archive dropdown-item-icon" /> Archive
                                                    </a>
                                                    <a className="dropdown-item" href="#">
                                                        <i className="bi-upload dropdown-item-icon" /> Publish
                                                    </a>
                                                    <a className="dropdown-item" href="#">
                                                        <i className="bi-x-lg dropdown-item-icon" /> Unpublish
                                                    </a>
                                                </div>
                                            </div>
                                            {/* End Button Group */}
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="table-column-pe-0">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" defaultValue id="productsCheck2" />
                                            <label className="form-check-label" htmlFor="productsCheck2">
                                            </label>
                                        </div>
                                    </td>
                                    <td className="table-column-ps-0">
                                        <a className="d-flex align-items-center" href="./ecommerce-product-details.html">
                                            <div className="flex-shrink-0">
                                                <img className="avatar avatar-lg" src="./assets/img/400x400/img26.jpg" alt="Image Description" />
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <h5 className="text-inherit mb-0">Topman shoe</h5>
                                            </div>
                                        </a>
                                    </td>
                                    <td>Shoes</td>
                                    <td>Topman</td>
                                    <td>
                                        <div className="form-check form-switch">
                                            <input className="form-check-input" type="checkbox" id="stocksCheckbox2" defaultChecked />
                                            <label className="form-check-label" htmlFor="stocksCheckbox2" />
                                        </div>
                                    </td>
                                    <td>4124123847</td>
                                    <td>$21</td>
                                    <td>125</td>
                                    <td>4</td>
                                    <td>
                                        <div className="btn-group" role="group">
                                            <a className="btn btn-white btn-sm" href="./ecommerce-product-details.html">
                                                <i className="bi-pencil-fill me-1" /> Edit
                                            </a>
                                            {/* Button Group */}
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-white btn-icon btn-sm dropdown-toggle dropdown-toggle-empty" id="productsEditDropdown2" data-bs-toggle="dropdown" aria-expanded="false" />
                                                <div className="dropdown-menu dropdown-menu-end mt-1" aria-labelledby="productsEditDropdown2">
                                                    <a className="dropdown-item" href="#">
                                                        <i className="bi-trash dropdown-item-icon" /> Delete
                                                    </a>
                                                    <a className="dropdown-item" href="#">
                                                        <i className="bi-archive dropdown-item-icon" /> Archive
                                                    </a>
                                                    <a className="dropdown-item" href="#">
                                                        <i className="bi-upload dropdown-item-icon" /> Publish
                                                    </a>
                                                    <a className="dropdown-item" href="#">
                                                        <i className="bi-x-lg dropdown-item-icon" /> Unpublish
                                                    </a>
                                                </div>
                                            </div>
                                            {/* End Button Group */}
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="table-column-pe-0">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" defaultValue id="productsCheck3" />
                                            <label className="form-check-label" htmlFor="productsCheck3">
                                            </label>
                                        </div>
                                    </td>
                                    <td className="table-column-ps-0">
                                        <a className="d-flex align-items-center" href="./ecommerce-product-details.html">
                                            <div className="flex-shrink-0">
                                                <img className="avatar avatar-lg" src="./assets/img/400x400/img25.jpg" alt="Image Description" />
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <h5 className="text-inherit mb-0">RayBan black sunglasses</h5>
                                            </div>
                                        </a>
                                    </td>
                                    <td>Accessories</td>
                                    <td>RayBan</td>
                                    <td>
                                        <div className="form-check form-switch">
                                            <input className="form-check-input" type="checkbox" id="stocksCheckbox3" />
                                            <label className="form-check-label" htmlFor="stocksCheckbox3" />
                                        </div>
                                    </td>
                                    <td>8472341241</td>
                                    <td>$37</td>
                                    <td>42</td>
                                    <td>1</td>
                                    <td>
                                        <div className="btn-group" role="group">
                                            <a className="btn btn-white btn-sm" href="./ecommerce-product-details.html">
                                                <i className="bi-pencil-fill me-1" /> Edit
                                            </a>
                                            {/* Button Group */}
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-white btn-icon btn-sm dropdown-toggle dropdown-toggle-empty" id="productsEditDropdown3" data-bs-toggle="dropdown" aria-expanded="false" />
                                                <div className="dropdown-menu dropdown-menu-end mt-1" aria-labelledby="productsEditDropdown3">
                                                    <a className="dropdown-item" href="#">
                                                        <i className="bi-trash dropdown-item-icon" /> Delete
                                                    </a>
                                                    <a className="dropdown-item" href="#">
                                                        <i className="bi-archive dropdown-item-icon" /> Archive
                                                    </a>
                                                    <a className="dropdown-item" href="#">
                                                        <i className="bi-upload dropdown-item-icon" /> Publish
                                                    </a>
                                                    <a className="dropdown-item" href="#">
                                                        <i className="bi-x-lg dropdown-item-icon" /> Unpublish
                                                    </a>
                                                </div>
                                            </div>
                                            {/* End Button Group */}
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="table-column-pe-0">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" defaultValue id="productsCheck4" />
                                            <label className="form-check-label" htmlFor="productsCheck4">
                                            </label>
                                        </div>
                                    </td>
                                    <td className="table-column-ps-0">
                                        <a className="d-flex align-items-center" href="./ecommerce-product-details.html">
                                            <div className="flex-shrink-0">
                                                <img className="avatar avatar-lg" src="./assets/img/400x400/img6.jpg" alt="Image Description" />
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <h5 className="text-inherit mb-0">Mango Women's shoe</h5>
                                            </div>
                                        </a>
                                    </td>
                                    <td>Shoes</td>
                                    <td>Mango</td>
                                    <td>
                                        <div className="form-check form-switch">
                                            <input className="form-check-input" type="checkbox" id="stocksCheckbox4" defaultChecked />
                                            <label className="form-check-label" htmlFor="stocksCheckbox4" />
                                        </div>
                                    </td>
                                    <td>2412384741</td>
                                    <td>$65</td>
                                    <td>76</td>
                                    <td>3</td>
                                    <td>
                                        <div className="btn-group" role="group">
                                            <a className="btn btn-white btn-sm" href="./ecommerce-product-details.html">
                                                <i className="bi-pencil-fill me-1" /> Edit
                                            </a>
                                            {/* Button Group */}
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-white btn-icon btn-sm dropdown-toggle dropdown-toggle-empty" id="productsEditDropdown4" data-bs-toggle="dropdown" aria-expanded="false" />
                                                <div className="dropdown-menu dropdown-menu-end mt-1" aria-labelledby="productsEditDropdown4">
                                                    <a className="dropdown-item" href="#">
                                                        <i className="bi-trash dropdown-item-icon" /> Delete
                                                    </a>
                                                    <a className="dropdown-item" href="#">
                                                        <i className="bi-archive dropdown-item-icon" /> Archive
                                                    </a>
                                                    <a className="dropdown-item" href="#">
                                                        <i className="bi-upload dropdown-item-icon" /> Publish
                                                    </a>
                                                    <a className="dropdown-item" href="#">
                                                        <i className="bi-x-lg dropdown-item-icon" /> Unpublish
                                                    </a>
                                                </div>
                                            </div>
                                            {/* End Button Group */}
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="table-column-pe-0">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" defaultValue id="productsCheck5" />
                                            <label className="form-check-label" htmlFor="productsCheck5">
                                            </label>
                                        </div>
                                    </td>
                                    <td className="table-column-ps-0">
                                        <a className="d-flex align-items-center" href="./ecommerce-product-details.html">
                                            <div className="flex-shrink-0">
                                                <img className="avatar avatar-lg" src="./assets/img/400x400/img3.jpg" alt="Image Description" />
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <h5 className="text-inherit mb-0">Calvin Klein t-shirts</h5>
                                            </div>
                                        </a>
                                    </td>
                                    <td>Clothing</td>
                                    <td>Calvin Klein</td>
                                    <td>
                                        <div className="form-check form-switch">
                                            <input className="form-check-input" type="checkbox" id="stocksCheckbox5" />
                                            <label className="form-check-label" htmlFor="stocksCheckbox5" />
                                        </div>
                                    </td>
                                    <td>8234741241</td>
                                    <td>$89</td>
                                    <td>99</td>
                                    <td>7</td>
                                    <td>
                                        <div className="btn-group" role="group">
                                            <a className="btn btn-white btn-sm" href="./ecommerce-product-details.html">
                                                <i className="bi-pencil-fill me-1" /> Edit
                                            </a>
                                            {/* Button Group */}
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-white btn-icon btn-sm dropdown-toggle dropdown-toggle-empty" id="productsEditDropdown5" data-bs-toggle="dropdown" aria-expanded="false" />
                                                <div className="dropdown-menu dropdown-menu-end mt-1" aria-labelledby="productsEditDropdown5">
                                                    <a className="dropdown-item" href="#">
                                                        <i className="bi-trash dropdown-item-icon" /> Delete
                                                    </a>
                                                    <a className="dropdown-item" href="#">
                                                        <i className="bi-archive dropdown-item-icon" /> Archive
                                                    </a>
                                                    <a className="dropdown-item" href="#">
                                                        <i className="bi-upload dropdown-item-icon" /> Publish
                                                    </a>
                                                    <a className="dropdown-item" href="#">
                                                        <i className="bi-x-lg dropdown-item-icon" /> Unpublish
                                                    </a>
                                                </div>
                                            </div>
                                            {/* End Button Group */}
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="table-column-pe-0">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" defaultValue id="productsCheck6" />
                                            <label className="form-check-label" htmlFor="productsCheck6">
                                            </label>
                                        </div>
                                    </td>
                                    <td className="table-column-ps-0">
                                        <a className="d-flex align-items-center" href="./ecommerce-product-details.html">
                                            <div className="flex-shrink-0">
                                                <img className="avatar avatar-lg" src="./assets/img/400x400/img5.jpg" alt="Image Description" />
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <h5 className="text-inherit mb-0">Givenchy perfume</h5>
                                            </div>
                                        </a>
                                    </td>
                                    <td>Clothing</td>
                                    <td>Givenchy</td>
                                    <td>
                                        <div className="form-check form-switch">
                                            <input className="form-check-input" type="checkbox" id="stocksCheckbox6" defaultChecked />
                                            <label className="form-check-label" htmlFor="stocksCheckbox6" />
                                        </div>
                                    </td>
                                    <td>9984741241</td>
                                    <td>$99</td>
                                    <td>50</td>
                                    <td>1</td>
                                    <td>
                                        <div className="btn-group" role="group">
                                            <a className="btn btn-white btn-sm" href="./ecommerce-product-details.html">
                                                <i className="bi-pencil-fill me-1" /> Edit
                                            </a>
                                            {/* Button Group */}
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-white btn-icon btn-sm dropdown-toggle dropdown-toggle-empty" id="productsEditDropdown6" data-bs-toggle="dropdown" aria-expanded="false" />
                                                <div className="dropdown-menu dropdown-menu-end mt-1" aria-labelledby="productsEditDropdown6">
                                                    <a className="dropdown-item" href="#">
                                                        <i className="bi-trash dropdown-item-icon" /> Delete
                                                    </a>
                                                    <a className="dropdown-item" href="#">
                                                        <i className="bi-archive dropdown-item-icon" /> Archive
                                                    </a>
                                                    <a className="dropdown-item" href="#">
                                                        <i className="bi-upload dropdown-item-icon" /> Publish
                                                    </a>
                                                    <a className="dropdown-item" href="#">
                                                        <i className="bi-x-lg dropdown-item-icon" /> Unpublish
                                                    </a>
                                                </div>
                                            </div>
                                            {/* End Button Group */}
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="table-column-pe-0">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" defaultValue id="productsCheck7" />
                                            <label className="form-check-label" htmlFor="productsCheck7">
                                            </label>
                                        </div>
                                    </td>
                                    <td className="table-column-ps-0">
                                        <a className="d-flex align-items-center" href="./ecommerce-product-details.html">
                                            <div className="flex-shrink-0">
                                                <img className="avatar avatar-lg" src="./assets/img/400x400/img11.jpg" alt="Image Description" />
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <h5 className="text-inherit mb-0">Asos t-shirts</h5>
                                            </div>
                                        </a>
                                    </td>
                                    <td>Clothing</td>
                                    <td>Asos</td>
                                    <td>
                                        <div className="form-check form-switch">
                                            <input className="form-check-input" type="checkbox" id="stocksCheckbox7" />
                                            <label className="form-check-label" htmlFor="stocksCheckbox7" />
                                        </div>
                                    </td>
                                    <td>7184741241</td>
                                    <td>$17</td>
                                    <td>422</td>
                                    <td>4</td>
                                    <td>
                                        <div className="btn-group" role="group">
                                            <a className="btn btn-white btn-sm" href="./ecommerce-product-details.html">
                                                <i className="bi-pencil-fill me-1" /> Edit
                                            </a>
                                            {/* Button Group */}
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-white btn-icon btn-sm dropdown-toggle dropdown-toggle-empty" id="productsEditDropdown7" data-bs-toggle="dropdown" aria-expanded="false" />
                                                <div className="dropdown-menu dropdown-menu-end mt-1" aria-labelledby="productsEditDropdown7">
                                                    <a className="dropdown-item" href="#">
                                                        <i className="bi-trash dropdown-item-icon" /> Delete
                                                    </a>
                                                    <a className="dropdown-item" href="#">
                                                        <i className="bi-archive dropdown-item-icon" /> Archive
                                                    </a>
                                                    <a className="dropdown-item" href="#">
                                                        <i className="bi-upload dropdown-item-icon" /> Publish
                                                    </a>
                                                    <a className="dropdown-item" href="#">
                                                        <i className="bi-x-lg dropdown-item-icon" /> Unpublish
                                                    </a>
                                                </div>
                                            </div>
                                            {/* End Button Group */}
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="table-column-pe-0">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" defaultValue id="productsCheck8" />
                                            <label className="form-check-label" htmlFor="productsCheck8">
                                            </label>
                                        </div>
                                    </td>
                                    <td className="table-column-ps-0">
                                        <a className="d-flex align-items-center" href="./ecommerce-product-details.html">
                                            <div className="flex-shrink-0">
                                                <img className="avatar avatar-lg" src="./assets/img/400x400/img12.jpg" alt="Image Description" />
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <h5 className="text-inherit mb-0">Apple AirPods 2</h5>
                                            </div>
                                        </a>
                                    </td>
                                    <td>Electronics</td>
                                    <td>Apple</td>
                                    <td>
                                        <div className="form-check form-switch">
                                            <input className="form-check-input" type="checkbox" id="stocksCheckbox8" />
                                            <label className="form-check-label" htmlFor="stocksCheckbox8" />
                                        </div>
                                    </td>
                                    <td>1084741241</td>
                                    <td>$249</td>
                                    <td>1000</td>
                                    <td>1</td>
                                    <td>
                                        <div className="btn-group" role="group">
                                            <a className="btn btn-white btn-sm" href="./ecommerce-product-details.html">
                                                <i className="bi-pencil-fill me-1" /> Edit
                                            </a>
                                            {/* Button Group */}
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-white btn-icon btn-sm dropdown-toggle dropdown-toggle-empty" id="productsEditDropdown8" data-bs-toggle="dropdown" aria-expanded="false" />
                                                <div className="dropdown-menu dropdown-menu-end mt-1" aria-labelledby="productsEditDropdown8">
                                                    <a className="dropdown-item" href="#">
                                                        <i className="bi-trash dropdown-item-icon" /> Delete
                                                    </a>
                                                    <a className="dropdown-item" href="#">
                                                        <i className="bi-archive dropdown-item-icon" /> Archive
                                                    </a>
                                                    <a className="dropdown-item" href="#">
                                                        <i className="bi-upload dropdown-item-icon" /> Publish
                                                    </a>
                                                    <a className="dropdown-item" href="#">
                                                        <i className="bi-x-lg dropdown-item-icon" /> Unpublish
                                                    </a>
                                                </div>
                                            </div>
                                            {/* End Button Group */}
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="table-column-pe-0">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" defaultValue id="productsCheck9" />
                                            <label className="form-check-label" htmlFor="productsCheck9">
                                            </label>
                                        </div>
                                    </td>
                                    <td className="table-column-ps-0">
                                        <a className="d-flex align-items-center" href="./ecommerce-product-details.html">
                                            <div className="flex-shrink-0">
                                                <img className="avatar avatar-lg" src="./assets/img/400x400/img13.jpg" alt="Image Description" />
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <h5 className="text-inherit mb-0">Timex Watch</h5>
                                            </div>
                                        </a>
                                    </td>
                                    <td>Accessories</td>
                                    <td>Timex</td>
                                    <td>
                                        <div className="form-check form-switch">
                                            <input className="form-check-input" type="checkbox" id="stocksCheckbox9" />
                                            <label className="form-check-label" htmlFor="stocksCheckbox9" />
                                        </div>
                                    </td>
                                    <td>4831441241</td>
                                    <td>$68</td>
                                    <td>15</td>
                                    <td>2</td>
                                    <td>
                                        <div className="btn-group" role="group">
                                            <a className="btn btn-white btn-sm" href="./ecommerce-product-details.html">
                                                <i className="bi-pencil-fill me-1" /> Edit
                                            </a>
                                            {/* Button Group */}
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-white btn-icon btn-sm dropdown-toggle dropdown-toggle-empty" id="productsEditDropdown9" data-bs-toggle="dropdown" aria-expanded="false" />
                                                <div className="dropdown-menu dropdown-menu-end mt-1" aria-labelledby="productsEditDropdown9">
                                                    <a className="dropdown-item" href="#">
                                                        <i className="bi-trash dropdown-item-icon" /> Delete
                                                    </a>
                                                    <a className="dropdown-item" href="#">
                                                        <i className="bi-archive dropdown-item-icon" /> Archive
                                                    </a>
                                                    <a className="dropdown-item" href="#">
                                                        <i className="bi-upload dropdown-item-icon" /> Publish
                                                    </a>
                                                    <a className="dropdown-item" href="#">
                                                        <i className="bi-x-lg dropdown-item-icon" /> Unpublish
                                                    </a>
                                                </div>
                                            </div>
                                            {/* End Button Group */}
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="table-column-pe-0">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" defaultValue id="productsCheck10" />
                                            <label className="form-check-label" htmlFor="productsCheck10">
                                            </label>
                                        </div>
                                    </td>
                                    <td className="table-column-ps-0">
                                        <a className="d-flex align-items-center" href="./ecommerce-product-details.html">
                                            <div className="flex-shrink-0">
                                                <img className="avatar avatar-lg" src="./assets/img/400x400/img14.jpg" alt="Image Description" />
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <h5 className="text-inherit mb-0">Air Jordan 1</h5>
                                            </div>
                                        </a>
                                    </td>
                                    <td>Shoes</td>
                                    <td>Nike Jordan</td>
                                    <td>
                                        <div className="form-check form-switch">
                                            <input className="form-check-input" type="checkbox" id="stocksCheckbox10" defaultChecked />
                                            <label className="form-check-label" htmlFor="stocksCheckbox10" />
                                        </div>
                                    </td>
                                    <td>1223847441</td>
                                    <td>$139</td>
                                    <td>456</td>
                                    <td>9</td>
                                    <td>
                                        <div className="btn-group" role="group">
                                            <a className="btn btn-white btn-sm" href="./ecommerce-product-details.html">
                                                <i className="bi-pencil-fill me-1" /> Edit
                                            </a>
                                            {/* Button Group */}
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-white btn-icon btn-sm dropdown-toggle dropdown-toggle-empty" id="productsEditDropdown10" data-bs-toggle="dropdown" aria-expanded="false" />
                                                <div className="dropdown-menu dropdown-end-end mt-1" aria-labelledby="productsEditDropdown10">
                                                    <a className="dropdown-item" href="#">
                                                        <i className="bi-trash dropdown-item-icon" /> Delete
                                                    </a>
                                                    <a className="dropdown-item" href="#">
                                                        <i className="bi-archive dropdown-item-icon" /> Archive
                                                    </a>
                                                    <a className="dropdown-item" href="#">
                                                        <i className="bi-upload dropdown-item-icon" /> Publish
                                                    </a>
                                                    <a className="dropdown-item" href="#">
                                                        <i className="bi-x-lg dropdown-item-icon" /> Unpublish
                                                    </a>
                                                </div>
                                            </div>
                                            {/* End Button Group */}
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="table-column-pe-0">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" defaultValue id="productsCheck11" />
                                            <label className="form-check-label" htmlFor="productsCheck11">
                                            </label>
                                        </div>
                                    </td>
                                    <td className="table-column-ps-0">
                                        <a className="d-flex align-items-center" href="./ecommerce-product-details.html">
                                            <div className="flex-shrink-0">
                                                <img className="avatar avatar-lg" src="./assets/img/400x400/img15.jpg" alt="Image Description" />
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <h5 className="text-inherit mb-0">RayBan sunglasses</h5>
                                            </div>
                                        </a>
                                    </td>
                                    <td>Accessories</td>
                                    <td>RayBan</td>
                                    <td>
                                        <div className="form-check form-switch">
                                            <input className="form-check-input" type="checkbox" id="stocksCheckbox11" />
                                            <label className="form-check-label" htmlFor="stocksCheckbox11" />
                                        </div>
                                    </td>
                                    <td>1242384741</td>
                                    <td>$14</td>
                                    <td>83</td>
                                    <td>1</td>
                                    <td>
                                        <div className="btn-group" role="group">
                                            <a className="btn btn-white btn-sm" href="./ecommerce-product-details.html">
                                                <i className="bi-pencil-fill me-1" /> Edit
                                            </a>
                                            {/* Button Group */}
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-white btn-icon btn-sm dropdown-toggle dropdown-toggle-empty" id="productsEditDropdown11" data-bs-toggle="dropdown" aria-expanded="false" />
                                                <div className="dropdown-menu dropdown-end-end mt-1" aria-labelledby="productsEditDropdown11">
                                                    <a className="dropdown-item" href="#">
                                                        <i className="bi-trash dropdown-item-icon" /> Delete
                                                    </a>
                                                    <a className="dropdown-item" href="#">
                                                        <i className="bi-archive dropdown-item-icon" /> Archive
                                                    </a>
                                                    <a className="dropdown-item" href="#">
                                                        <i className="bi-upload dropdown-item-icon" /> Publish
                                                    </a>
                                                    <a className="dropdown-item" href="#">
                                                        <i className="bi-x-lg dropdown-item-icon" /> Unpublish
                                                    </a>
                                                </div>
                                            </div>
                                            {/* End Button Group */}
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="table-column-pe-0">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" defaultValue id="productsCheck12" />
                                            <label className="form-check-label" htmlFor="productsCheck12">
                                            </label>
                                        </div>
                                    </td>
                                    <td className="table-column-ps-0">
                                        <a className="d-flex align-items-center" href="./ecommerce-product-details.html">
                                            <div className="flex-shrink-0">
                                                <img className="avatar avatar-lg" src="./assets/img/400x400/img17.jpg" alt="Image Description" />
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <h5 className="text-inherit mb-0">Gray and yellow cap</h5>
                                            </div>
                                        </a>
                                    </td>
                                    <td>Accessories</td>
                                    <td>VA RVCA</td>
                                    <td>
                                        <div className="form-check form-switch">
                                            <input className="form-check-input" type="checkbox" id="stocksCheckbox12" />
                                            <label className="form-check-label" htmlFor="stocksCheckbox12" />
                                        </div>
                                    </td>
                                    <td>8311741241</td>
                                    <td>$9</td>
                                    <td>522</td>
                                    <td>1</td>
                                    <td>
                                        <div className="btn-group" role="group">
                                            <a className="btn btn-white btn-sm" href="./ecommerce-product-details.html">
                                                <i className="bi-pencil-fill me-1" /> Edit
                                            </a>
                                            {/* Button Group */}
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-white btn-icon btn-sm dropdown-toggle dropdown-toggle-empty" id="productsEditDropdown12" data-bs-toggle="dropdown" aria-expanded="false" />
                                                <div className="dropdown-menu dropdown-end-end mt-1" aria-labelledby="productsEditDropdown12">
                                                    <a className="dropdown-item" href="#">
                                                        <i className="bi-trash dropdown-item-icon" /> Delete
                                                    </a>
                                                    <a className="dropdown-item" href="#">
                                                        <i className="bi-archive dropdown-item-icon" /> Archive
                                                    </a>
                                                    <a className="dropdown-item" href="#">
                                                        <i className="bi-upload dropdown-item-icon" /> Publish
                                                    </a>
                                                    <a className="dropdown-item" href="#">
                                                        <i className="bi-x-lg dropdown-item-icon" /> Unpublish
                                                    </a>
                                                </div>
                                            </div>
                                            {/* End Button Group */}
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="table-column-pe-0">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" defaultValue id="productsCheck13" />
                                            <label className="form-check-label" htmlFor="productsCheck13">
                                            </label>
                                        </div>
                                    </td>
                                    <td className="table-column-ps-0">
                                        <a className="d-flex align-items-center" href="./ecommerce-product-details.html">
                                            <div className="flex-shrink-0">
                                                <img className="avatar avatar-lg" src="./assets/img/400x400/img16.jpg" alt="Image Description" />
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <h5 className="text-inherit mb-0">Apple iPad Pro 2020</h5>
                                            </div>
                                        </a>
                                    </td>
                                    <td>Electronics</td>
                                    <td>Apple</td>
                                    <td>
                                        <div className="form-check form-switch">
                                            <input className="form-check-input" type="checkbox" id="stocksCheckbox13" defaultChecked />
                                            <label className="form-check-label" htmlFor="stocksCheckbox13" />
                                        </div>
                                    </td>
                                    <td>2459741241</td>
                                    <td>$799</td>
                                    <td>450</td>
                                    <td>8</td>
                                    <td>
                                        <div className="btn-group" role="group">
                                            <a className="btn btn-white btn-sm" href="./ecommerce-product-details.html">
                                                <i className="bi-pencil-fill me-1" /> Edit
                                            </a>
                                            {/* Button Group */}
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-white btn-icon btn-sm dropdown-toggle dropdown-toggle-empty" id="productsEditDropdown13" data-bs-toggle="dropdown" aria-expanded="false" />
                                                <div className="dropdown-menu dropdown-end-end mt-1" aria-labelledby="productsEditDropdown13">
                                                    <a className="dropdown-item" href="#">
                                                        <i className="bi-trash dropdown-item-icon" /> Delete
                                                    </a>
                                                    <a className="dropdown-item" href="#">
                                                        <i className="bi-archive dropdown-item-icon" /> Archive
                                                    </a>
                                                    <a className="dropdown-item" href="#">
                                                        <i className="bi-upload dropdown-item-icon" /> Publish
                                                    </a>
                                                    <a className="dropdown-item" href="#">
                                                        <i className="bi-x-lg dropdown-item-icon" /> Unpublish
                                                    </a>
                                                </div>
                                            </div>
                                            {/* End Button Group */}
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="table-column-pe-0">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" defaultValue id="productsCheck14" />
                                            <label className="form-check-label" htmlFor="productsCheck14">
                                            </label>
                                        </div>
                                    </td>
                                    <td className="table-column-ps-0">
                                        <a className="d-flex align-items-center" href="./ecommerce-product-details.html">
                                            <div className="flex-shrink-0">
                                                <img className="avatar avatar-lg" src="./assets/img/400x400/img18.jpg" alt="Image Description" />
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <h5 className="text-inherit mb-0">Brown Hat</h5>
                                            </div>
                                        </a>
                                    </td>
                                    <td>Accessories</td>
                                    <td>Mango</td>
                                    <td>
                                        <div className="form-check form-switch">
                                            <input className="form-check-input" type="checkbox" id="stocksCheckbox14" defaultChecked />
                                            <label className="form-check-label" htmlFor="stocksCheckbox14" />
                                        </div>
                                    </td>
                                    <td>2384994241</td>
                                    <td>$67</td>
                                    <td>32</td>
                                    <td>7</td>
                                    <td>
                                        <div className="btn-group" role="group">
                                            <a className="btn btn-white btn-sm" href="./ecommerce-product-details.html">
                                                <i className="bi-pencil-fill me-1" /> Edit
                                            </a>
                                            {/* Button Group */}
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-white btn-icon btn-sm dropdown-toggle dropdown-toggle-empty" id="productsEditDropdown14" data-bs-toggle="dropdown" aria-expanded="false" />
                                                <div className="dropdown-menu dropdown-end-end mt-1" aria-labelledby="productsEditDropdown14">
                                                    <a className="dropdown-item" href="#">
                                                        <i className="bi-trash dropdown-item-icon" /> Delete
                                                    </a>
                                                    <a className="dropdown-item" href="#">
                                                        <i className="bi-archive dropdown-item-icon" /> Archive
                                                    </a>
                                                    <a className="dropdown-item" href="#">
                                                        <i className="bi-upload dropdown-item-icon" /> Publish
                                                    </a>
                                                    <a className="dropdown-item" href="#">
                                                        <i className="bi-x-lg dropdown-item-icon" /> Unpublish
                                                    </a>
                                                </div>
                                            </div>
                                            {/* End Button Group */}
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="table-column-pe-0">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" defaultValue id="productsCheck15" />
                                            <label className="form-check-label" htmlFor="productsCheck15">
                                            </label>
                                        </div>
                                    </td>
                                    <td className="table-column-ps-0">
                                        <a className="d-flex align-items-center" href="./ecommerce-product-details.html">
                                            <div className="flex-shrink-0">
                                                <img className="avatar avatar-lg" src="./assets/img/400x400/img19.jpg" alt="Image Description" />
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <h5 className="text-inherit mb-0">Levis women's jeans</h5>
                                            </div>
                                        </a>
                                    </td>
                                    <td>Clothing</td>
                                    <td>Levis</td>
                                    <td>
                                        <div className="form-check form-switch">
                                            <input className="form-check-input" type="checkbox" id="stocksCheckbox15" />
                                            <label className="form-check-label" htmlFor="stocksCheckbox15" />
                                        </div>
                                    </td>
                                    <td>1344761241</td>
                                    <td>$74</td>
                                    <td>121</td>
                                    <td>3</td>
                                    <td>
                                        <div className="btn-group" role="group">
                                            <a className="btn btn-white btn-sm" href="./ecommerce-product-details.html">
                                                <i className="bi-pencil-fill me-1" /> Edit
                                            </a>
                                            {/* Button Group */}
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-white btn-icon btn-sm dropdown-toggle dropdown-toggle-empty" id="productsEditDropdown15" data-bs-toggle="dropdown" aria-expanded="false" />
                                                <div className="dropdown-menu dropdown-end-end mt-1" aria-labelledby="productsEditDropdown15">
                                                    <a className="dropdown-item" href="#">
                                                        <i className="bi-trash dropdown-item-icon" /> Delete
                                                    </a>
                                                    <a className="dropdown-item" href="#">
                                                        <i className="bi-archive dropdown-item-icon" /> Archive
                                                    </a>
                                                    <a className="dropdown-item" href="#">
                                                        <i className="bi-upload dropdown-item-icon" /> Publish
                                                    </a>
                                                    <a className="dropdown-item" href="#">
                                                        <i className="bi-x-lg dropdown-item-icon" /> Unpublish
                                                    </a>
                                                </div>
                                            </div>
                                            {/* End Button Group */}
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="table-column-pe-0">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" defaultValue id="productsCheck16" />
                                            <label className="form-check-label" htmlFor="productsCheck16">
                                            </label>
                                        </div>
                                    </td>
                                    <td className="table-column-ps-0">
                                        <a className="d-flex align-items-center" href="./ecommerce-product-details.html">
                                            <div className="flex-shrink-0">
                                                <img className="avatar avatar-lg" src="./assets/img/400x400/img20.jpg" alt="Image Description" />
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <h5 className="text-inherit mb-0">Levis men's jeans jacket</h5>
                                            </div>
                                        </a>
                                    </td>
                                    <td>Clothing</td>
                                    <td>Levis</td>
                                    <td>
                                        <div className="form-check form-switch">
                                            <input className="form-check-input" type="checkbox" id="stocksCheckbox16" />
                                            <label className="form-check-label" htmlFor="stocksCheckbox16" />
                                        </div>
                                    </td>
                                    <td>9904741241</td>
                                    <td>$61</td>
                                    <td>357</td>
                                    <td>1</td>
                                    <td>
                                        <div className="btn-group" role="group">
                                            <a className="btn btn-white btn-sm" href="./ecommerce-product-details.html">
                                                <i className="bi-pencil-fill me-1" /> Edit
                                            </a>
                                            {/* Button Group */}
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-white btn-icon btn-sm dropdown-toggle dropdown-toggle-empty" id="productsEditDropdown16" data-bs-toggle="dropdown" aria-expanded="false" />
                                                <div className="dropdown-menu dropdown-end-end mt-1" aria-labelledby="productsEditDropdown16">
                                                    <a className="dropdown-item" href="#">
                                                        <i className="bi-trash dropdown-item-icon" /> Delete
                                                    </a>
                                                    <a className="dropdown-item" href="#">
                                                        <i className="bi-archive dropdown-item-icon" /> Archive
                                                    </a>
                                                    <a className="dropdown-item" href="#">
                                                        <i className="bi-upload dropdown-item-icon" /> Publish
                                                    </a>
                                                    <a className="dropdown-item" href="#">
                                                        <i className="bi-x-lg dropdown-item-icon" /> Unpublish
                                                    </a>
                                                </div>
                                            </div>
                                            {/* End Button Group */}
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="table-column-pe-0">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" defaultValue id="productsCheck17" />
                                            <label className="form-check-label" htmlFor="productsCheck17">
                                            </label>
                                        </div>
                                    </td>
                                    <td className="table-column-ps-0">
                                        <a className="d-flex align-items-center" href="./ecommerce-product-details.html">
                                            <div className="flex-shrink-0">
                                                <img className="avatar avatar-lg" src="./assets/img/400x400/img21.jpg" alt="Image Description" />
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <h5 className="text-inherit mb-0">Beats Headphones</h5>
                                            </div>
                                        </a>
                                    </td>
                                    <td>Electronics</td>
                                    <td>Beats</td>
                                    <td>
                                        <div className="form-check form-switch">
                                            <input className="form-check-input" type="checkbox" id="stocksCheckbox17" />
                                            <label className="form-check-label" htmlFor="stocksCheckbox17" />
                                        </div>
                                    </td>
                                    <td>8812384741</td>
                                    <td>$499</td>
                                    <td>50</td>
                                    <td>4</td>
                                    <td>
                                        <div className="btn-group" role="group">
                                            <a className="btn btn-white btn-sm" href="./ecommerce-product-details.html">
                                                <i className="bi-pencil-fill me-1" /> Edit
                                            </a>
                                            {/* Button Group */}
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-white btn-icon btn-sm dropdown-toggle dropdown-toggle-empty" id="productsEditDropdown17" data-bs-toggle="dropdown" aria-expanded="false" />
                                                <div className="dropdown-menu dropdown-end-end mt-1" aria-labelledby="productsEditDropdown17">
                                                    <a className="dropdown-item" href="#">
                                                        <i className="bi-trash dropdown-item-icon" /> Delete
                                                    </a>
                                                    <a className="dropdown-item" href="#">
                                                        <i className="bi-archive dropdown-item-icon" /> Archive
                                                    </a>
                                                    <a className="dropdown-item" href="#">
                                                        <i className="bi-upload dropdown-item-icon" /> Publish
                                                    </a>
                                                    <a className="dropdown-item" href="#">
                                                        <i className="bi-x-lg dropdown-item-icon" /> Unpublish
                                                    </a>
                                                </div>
                                            </div>
                                            {/* End Button Group */}
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="table-column-pe-0">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" defaultValue id="productsCheck18" />
                                            <label className="form-check-label" htmlFor="productsCheck18">
                                            </label>
                                        </div>
                                    </td>
                                    <td className="table-column-ps-0">
                                        <a className="d-flex align-items-center" href="./ecommerce-product-details.html">
                                            <div className="flex-shrink-0">
                                                <img className="avatar avatar-lg" src="./assets/img/400x400/img22.jpg" alt="Image Description" />
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <h5 className="text-inherit mb-0">Office Notebook</h5>
                                            </div>
                                        </a>
                                    </td>
                                    <td>Accessories</td>
                                    <td>-</td>
                                    <td>
                                        <div className="form-check form-switch">
                                            <input className="form-check-input" type="checkbox" id="stocksCheckbox18" />
                                            <label className="form-check-label" htmlFor="stocksCheckbox18" />
                                        </div>
                                    </td>
                                    <td>7134741241</td>
                                    <td>$9</td>
                                    <td>750</td>
                                    <td>1</td>
                                    <td>
                                        <div className="btn-group" role="group">
                                            <a className="btn btn-white btn-sm" href="./ecommerce-product-details.html">
                                                <i className="bi-pencil-fill me-1" /> Edit
                                            </a>
                                            {/* Button Group */}
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-white btn-icon btn-sm dropdown-toggle dropdown-toggle-empty" id="productsEditDropdown18" data-bs-toggle="dropdown" aria-expanded="false" />
                                                <div className="dropdown-menu dropdown-end-end mt-1" aria-labelledby="productsEditDropdown18">
                                                    <a className="dropdown-item" href="#">
                                                        <i className="bi-trash dropdown-item-icon" /> Delete
                                                    </a>
                                                    <a className="dropdown-item" href="#">
                                                        <i className="bi-archive dropdown-item-icon" /> Archive
                                                    </a>
                                                    <a className="dropdown-item" href="#">
                                                        <i className="bi-upload dropdown-item-icon" /> Publish
                                                    </a>
                                                    <a className="dropdown-item" href="#">
                                                        <i className="bi-x-lg dropdown-item-icon" /> Unpublish
                                                    </a>
                                                </div>
                                            </div>
                                            {/* End Button Group */}
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="table-column-pe-0">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" defaultValue id="productsCheck19" />
                                            <label className="form-check-label" htmlFor="productsCheck19">
                                            </label>
                                        </div>
                                    </td>
                                    <td className="table-column-ps-0">
                                        <a className="d-flex align-items-center" href="./ecommerce-product-details.html">
                                            <div className="flex-shrink-0">
                                                <img className="avatar avatar-lg" src="./assets/img/400x400/img23.jpg" alt="Image Description" />
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <h5 className="text-inherit mb-0">Colorful pens</h5>
                                            </div>
                                        </a>
                                    </td>
                                    <td>Accessories</td>
                                    <td>-</td>
                                    <td>
                                        <div className="form-check form-switch">
                                            <input className="form-check-input" type="checkbox" id="stocksCheckbox19" defaultChecked />
                                            <label className="form-check-label" htmlFor="stocksCheckbox19" />
                                        </div>
                                    </td>
                                    <td>2224741241</td>
                                    <td>$6</td>
                                    <td>750</td>
                                    <td>3</td>
                                    <td>
                                        <div className="btn-group" role="group">
                                            <a className="btn btn-white btn-sm" href="./ecommerce-product-details.html">
                                                <i className="bi-pencil-fill me-1" /> Edit
                                            </a>
                                            {/* Button Group */}
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-white btn-icon btn-sm dropdown-toggle dropdown-toggle-empty" id="productsEditDropdown19" data-bs-toggle="dropdown" aria-expanded="false" />
                                                <div className="dropdown-menu dropdown-end-end mt-1" aria-labelledby="productsEditDropdown19">
                                                    <a className="dropdown-item" href="#">
                                                        <i className="bi-trash dropdown-item-icon" /> Delete
                                                    </a>
                                                    <a className="dropdown-item" href="#">
                                                        <i className="bi-archive dropdown-item-icon" /> Archive
                                                    </a>
                                                    <a className="dropdown-item" href="#">
                                                        <i className="bi-upload dropdown-item-icon" /> Publish
                                                    </a>
                                                    <a className="dropdown-item" href="#">
                                                        <i className="bi-x-lg dropdown-item-icon" /> Unpublish
                                                    </a>
                                                </div>
                                            </div>
                                            {/* End Button Group */}
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="table-column-pe-0">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" defaultValue id="productsCheck20" />
                                            <label className="form-check-label" htmlFor="productsCheck20">
                                            </label>
                                        </div>
                                    </td>
                                    <td className="table-column-ps-0">
                                        <a className="d-flex align-items-center" href="./ecommerce-product-details.html">
                                            <div className="flex-shrink-0">
                                                <img className="avatar avatar-lg" src="./assets/img/400x400/img24.jpg" alt="Image Description" />
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <h5 className="text-inherit mb-0">Clarks shoes</h5>
                                            </div>
                                        </a>
                                    </td>
                                    <td>Shoes</td>
                                    <td>Clarks</td>
                                    <td>
                                        <div className="form-check form-switch">
                                            <input className="form-check-input" type="checkbox" id="stocksCheckbox20" defaultChecked />
                                            <label className="form-check-label" htmlFor="stocksCheckbox20" />
                                        </div>
                                    </td>
                                    <td>2614741241</td>
                                    <td>$66</td>
                                    <td>982</td>
                                    <td>10</td>
                                    <td>
                                        <div className="btn-group" role="group">
                                            <a className="btn btn-white btn-sm" href="./ecommerce-product-details.html">
                                                <i className="bi-pencil-fill me-1" /> Edit
                                            </a>
                                            {/* Button Group */}
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-white btn-icon btn-sm dropdown-toggle dropdown-toggle-empty" id="productsEditDropdown20" data-bs-toggle="dropdown" aria-expanded="false" />
                                                <div className="dropdown-menu dropdown-end-end mt-1" aria-labelledby="productsEditDropdown20">
                                                    <a className="dropdown-item" href="#">
                                                        <i className="bi-trash dropdown-item-icon" /> Delete
                                                    </a>
                                                    <a className="dropdown-item" href="#">
                                                        <i className="bi-archive dropdown-item-icon" /> Archive
                                                    </a>
                                                    <a className="dropdown-item" href="#">
                                                        <i className="bi-upload dropdown-item-icon" /> Publish
                                                    </a>
                                                    <a className="dropdown-item" href="#">
                                                        <i className="bi-x-lg dropdown-item-icon" /> Unpublish
                                                    </a>
                                                </div>
                                            </div>
                                            {/* End Button Group */}
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
            </div>
            <div className="modal fade" id="exportProductsModal" tabIndex={-1} aria-labelledby="exportProductsModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        {/* Header */}
                        <div className="modal-header">
                            <h4 className="modal-title" id="exportProductsModalLabel">Export products</h4>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        {/* End Header */}
                        {/* Body */}
                        <div className="modal-body">
                            <p>This CSV file can update all product information. To update just inventory quantites use the <a className="link" href="#">CSV file for inventory.</a></p>
                            <div className="mb-4">
                                <label className="form-label">Export</label>
                                <div className="d-grid gap-2">
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
                                </div>
                            </div>
                            <label className="form-label">Export as</label>
                            {/* Form Check */}
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="exportProductsAsRadio" id="exportProductsAsRadio1" defaultChecked />
                                <label className="form-check-label" htmlFor="exportProductsAsRadio1">
                                    CSV for Excel, Numbers, or other spreadsheet programs
                                </label>
                            </div>
                            {/* End Form Check */}
                            {/* Form Check */}
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="exportProductsAsRadio" id="exportProductsAsRadio2" />
                                <label className="form-check-label" htmlFor="exportProductsAsRadio2">
                                    Plain CSV file
                                </label>
                            </div>
                            {/* End Form Check */}
                        </div>
                        {/* End Body */}
                        {/* Footer */}
                        <div className="modal-footer gap-3">
                            <button type="button" className="btn btn-white" data-bs-dismiss="modal" aria-label="Close">Cancel</button>
                            <button type="button" className="btn btn-primary">Export products</button>
                        </div>
                        {/* End Footer */}
                    </div>
                </div>
            </div>
            <div className="modal fade" id="importProductsModal" tabIndex={-1} aria-labelledby="importProductsModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        {/* Header */}
                        <div className="modal-header">
                            <h4 className="modal-title" id="importProductsModalLabel">Import products by CSV</h4>
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
                                <input className="form-check-input" type="checkbox" defaultValue id="overwriteCurrentProductsCheckbox" />
                                <label className="form-check-label" htmlFor="overwriteCurrentProductsCheckbox">
                                    Overwrite any current products that have the same handle. Existing values will be used for any missing columns. <a href="#">Learn more</a>
                                </label>
                            </div>
                            {/* End Form Check */}
                        </div>
                        {/* End Body */}
                        {/* Footer */}
                        <div className="modal-footer">
                            <button type="button" className="btn btn-white" data-bs-dismiss="modal" aria-label="Close">Cancel</button>
                            <button type="button" className="btn btn-primary">Upload and continue</button>
                        </div>
                        {/* End Footer */}
                    </div>
                </div>
            </div>
            <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasEcommerceProductFilter" aria-labelledby="offcanvasEcommerceProductFilterLabel">
                <div className="offcanvas-header">
                    <h4 id="offcanvasEcommerceProductFilterLabel" className="mb-0">Filters</h4>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
                </div>
                <div className="offcanvas-body">
                    <span className="text-cap small">Product vendor</span>
                    <div className="row">
                        <div className="col-6">
                            <div className="d-grid gap-2 mb-2">
                                {/* Form Check */}
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="productAvailabilityFilterRadio" defaultValue id="productVendorFilterRadio1" />
                                    <label className="form-check-label" htmlFor="productVendorFilterRadio1">Google</label>
                                </div>
                                {/* End Form Check */}
                                {/* Form Check */}
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="productAvailabilityFilterRadio" defaultValue id="productVendorFilterRadio2" />
                                    <label className="form-check-label" htmlFor="productVendorFilterRadio2">Topman</label>
                                </div>
                                {/* End Form Check */}
                                {/* Form Check */}
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="productAvailabilityFilterRadio" defaultValue id="productVendorFilterRadio3" />
                                    <label className="form-check-label" htmlFor="productVendorFilterRadio3">RayBan</label>
                                </div>
                                {/* End Form Check */}
                                {/* Form Check */}
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="productAvailabilityFilterRadio" defaultValue id="productVendorFilterRadio4" />
                                    <label className="form-check-label" htmlFor="productVendorFilterRadio4">Mango</label>
                                </div>
                                {/* End Form Check */}
                                {/* Form Check */}
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="productAvailabilityFilterRadio" defaultValue id="productVendorFilterRadio5" />
                                    <label className="form-check-label" htmlFor="productVendorFilterRadio5">Calvin Klein</label>
                                </div>
                                {/* End Form Check */}
                                {/* Form Check */}
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="productAvailabilityFilterRadio" defaultValue id="productVendorFilterRadio6" />
                                    <label className="form-check-label" htmlFor="productVendorFilterRadio6">Givenchy</label>
                                </div>
                                {/* End Form Check */}
                                {/* Form Check */}
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="productAvailabilityFilterRadio" defaultValue id="productVendorFilterRadio7" />
                                    <label className="form-check-label" htmlFor="productVendorFilterRadio7">Asos</label>
                                </div>
                                {/* End Form Check */}
                                {/* Form Check */}
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="productAvailabilityFilterRadio" defaultValue id="productVendorFilterRadio8" />
                                    <label className="form-check-label" htmlFor="productVendorFilterRadio8">Apple</label>
                                </div>
                                {/* End Form Check */}
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="d-grid gap-2 mb-2">
                                {/* Form Check */}
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="productAvailabilityFilterRadio" defaultValue id="productVendorFilterRadio9" />
                                    <label className="form-check-label" htmlFor="productVendorFilterRadio9">Times</label>
                                </div>
                                {/* End Form Check */}
                                {/* Form Check */}
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="productAvailabilityFilterRadio" defaultValue id="productVendorFilterRadio10" />
                                    <label className="form-check-label" htmlFor="productVendorFilterRadio10">Asos</label>
                                </div>
                                {/* End Form Check */}
                                {/* Form Check */}
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="productAvailabilityFilterRadio" defaultValue id="productVendorFilterRadio11" />
                                    <label className="form-check-label" htmlFor="productVendorFilterRadio11">Nike Jordan</label>
                                </div>
                                {/* End Form Check */}
                                {/* Form Check */}
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="productAvailabilityFilterRadio" defaultValue id="productVendorFilterRadio12" />
                                    <label className="form-check-label" htmlFor="productVendorFilterRadio12">VA RVCA</label>
                                </div>
                                {/* End Form Check */}
                                {/* Form Check */}
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="productAvailabilityFilterRadio" defaultValue id="productVendorFilterRadio13" />
                                    <label className="form-check-label" htmlFor="productVendorFilterRadio13">Levis</label>
                                </div>
                                {/* End Form Check */}
                                {/* Form Check */}
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="productAvailabilityFilterRadio" defaultValue id="productVendorFilterRadio14" />
                                    <label className="form-check-label" htmlFor="productVendorFilterRadio14">Beats</label>
                                </div>
                                {/* End Form Check */}
                                {/* Form Check */}
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="productAvailabilityFilterRadio" defaultValue id="productVendorFilterRadio15" />
                                    <label className="form-check-label" htmlFor="productVendorFilterRadio15">Clarks</label>
                                </div>
                                {/* End Form Check */}
                            </div>
                        </div>
                    </div>
                    {/* End Row */}
                    <a className="link mt-2" href="javascript:;">
                        <i className="bi-x" /> Clear
                    </a>
                    <hr />
                    <span className="text-cap small">Availability</span>
                    <div className="d-grid gap-2 mb-2">
                        {/* Form Check */}
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="productAvailabilityFilterRadio" defaultValue id="productAvailabilityFilterRadio1" />
                            <label className="form-check-label" htmlFor="productAvailabilityFilterRadio1">Available on Online Store</label>
                        </div>
                        {/* End Form Check */}
                        {/* Form Check */}
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="productAvailabilityFilterRadio" defaultValue id="productAvailabilityFilterRadio2" />
                            <label className="form-check-label" htmlFor="productAvailabilityFilterRadio2">Unavailable on Online Store</label>
                        </div>
                        {/* End Form Check */}
                    </div>
                    <a className="link mt-2" href="javascript:;">
                        <i className="bi-x" /> Clear
                    </a>
                    <hr />
                    <span className="text-cap small">Tagged with</span>
                    <div className="mb-2">
                        <input type="text" className="form-control" name="tagsName" id="tagsLabel" placeholder="Enter tags here" aria-label="Enter tags here" />
                    </div>
                    <a className="link mt-2" href="javascript:;">
                        <i className="bi-x" /> Clear
                    </a>
                    <hr />
                    <span className="text-cap small">Product type</span>
                    <div className="d-grid gap-2 mb-2">
                        {/* Form Check */}
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="productTypeFilterRadio" defaultValue id="productTypeFilterRadio1" />
                            <label className="form-check-label" htmlFor="productTypeFilterRadio1">Shoes</label>
                        </div>
                        {/* End Form Check */}
                        {/* Form Check */}
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="productTypeFilterRadio" defaultValue id="productTypeFilterRadio2" />
                            <label className="form-check-label" htmlFor="productTypeFilterRadio2">Accessories</label>
                        </div>
                        {/* End Form Check */}
                        {/* Form Check */}
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="productTypeFilterRadio" defaultValue id="productTypeFilterRadio3" />
                            <label className="form-check-label" htmlFor="productTypeFilterRadio3">Clothing</label>
                        </div>
                        {/* End Form Check */}
                        {/* Form Check */}
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="productTypeFilterRadio" defaultValue id="productTypeFilterRadio4" />
                            <label className="form-check-label" htmlFor="productTypeFilterRadio4">Electronics</label>
                        </div>
                        {/* End Form Check */}
                    </div>
                    <a className="link mt-2" href="javascript:;">
                        <i className="bi-x" /> Clear
                    </a>
                    <hr />
                    <span className="text-cap small">Collection</span>
                    {/* Input Group */}
                    <div className="input-group input-group-merge mb-2">
                        <div className="input-group-prepend input-group-text">
                            <i className="bi-search" />
                        </div>
                        <input type="search" className="form-control" placeholder="Search for collections" aria-label="Search for collections" />
                    </div>
                    {/* End Input Group */}
                    {/* Form Check */}
                    <div className="form-check mb-2">
                        <input className="form-check-input" type="radio" defaultValue id="productCollectionFilterRadio1" />
                        <label className="form-check-label" htmlFor="productCollectionFilterRadio1">Home page</label>
                    </div>
                    {/* End Form Check */}
                    <a className="link mt-2" href="javascript:;">
                        <i className="bi-x" /> Clear
                    </a>
                </div>
                {/* End Body */}
                {/* Footer */}
                <div className="offcanvas-footer">
                    <div className="row gx-2">
                        <div className="col">
                            <div className="d-grid">
                                <button type="button" className="btn btn-white">Clear all filters</button>
                            </div>
                        </div>
                        {/* End Col */}
                        <div className="col">
                            <div className="d-grid">
                                <button type="button" className="btn btn-primary">Save</button>
                            </div>
                        </div>
                        {/* End Col */}
                    </div>
                    {/* End Row */}
                </div>
                {/* End Footer */}
            </div>
        </>
    )
}

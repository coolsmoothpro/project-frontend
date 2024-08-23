import React from 'react'

export default function EcommerceProductsDetails() {
  return (
    <>
      <div className="content container-fluid">
        {/* Page Header */}
        <div className="page-header">
          <div className="row align-items-center">
            <div className="col-sm mb-2 mb-sm-0">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb breadcrumb-no-gutter">
                  <li className="breadcrumb-item"><a className="breadcrumb-link" href="./ecommerce-products.html">Products</a></li>
                  <li className="breadcrumb-item active" aria-current="page">Product details</li>
                </ol>
              </nav>
              <h1 className="page-header-title">Tiro track jacket</h1>
              <div className="mt-2">
                <a className="text-body me-3" href="javascript:;">
                  <i className="bi-clipboard me-1" /> Duplicate
                </a>
                <a className="text-body" href="javascript:;">
                  <i className="bi-eye me-1" /> Preview
                </a>
              </div>
            </div>
            {/* End Col */}
            <div className="col-sm-auto">
              <div className="d-flex gap-2">
                <button type="button" className="btn btn-ghost-secondary btn-icon btn-sm rounded-circle me-1" data-bs-toggle="tooltip" data-bs-placement="right" title="Previous product">
                  <i className="bi-arrow-left" />
                </button>
                <button type="button" className="btn btn-ghost-secondary btn-icon btn-sm rounded-circle" data-bs-toggle="tooltip" data-bs-placement="right" title="Next product">
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
              {/* Header */}
              <div className="card-header">
                <h4 className="card-header-title">Product information</h4>
              </div>
              {/* End Header */}
              {/* Body */}
              <div className="card-body">
                {/* Form */}
                <div className="mb-4">
                  <label htmlFor="productNameLabel" className="form-label">Name <i className="bi-question-circle text-body ms-1" data-bs-toggle="tooltip" data-bs-placement="top" title="Products are the goods or services you sell." /></label>
                  <input type="text" className="form-control" name="productName" id="productNameLabel" placeholder="Shirt, t-shirts, etc." aria-label="Shirt, t-shirts, etc." defaultValue="Tiro track jacket" />
                </div>
                {/* End Form */}
                <div className="row">
                  <div className="col-sm-6">
                    {/* Form */}
                    <div className="mb-4">
                      <label htmlFor="SKULabel" className="form-label">SKU</label>
                      <input type="text" className="form-control" name="SKU" id="SKULabel" placeholder="eg. 348121032" aria-label="eg. 348121032" defaultValue={124617209} />
                    </div>
                    {/* End Form */}
                  </div>
                  {/* End Col */}
                  <div className="col-sm-6">
                    {/* Form */}
                    <div className="mb-4">
                      <label htmlFor="weightLabel" className="form-label">Weight</label>
                      <div className="input-group">
                        <input type="text" className="form-control" name="weightName" id="weightLabel" placeholder={0.0} aria-label={0.0} defaultValue="0.2" />
                        <div className="input-group-append">
                          {/* Select */}
                          <div className="tom-select-custom tom-select-custom-end">
                            <select className="js-select form-select" data-hs-tom-select-options="{
                                    &quot;searchInDropdown&quot;: false,
                                    &quot;hideSearch&quot;: true,
                                    &quot;dropdownWidth&quot;: &quot;6rem&quot;
                                  }">
                              <option value="lb">lb</option>
                              <option value="oz">oz</option>
                              <option value="kg" selected>kg</option>
                              <option value="g">g</option>
                            </select>
                          </div>
                          {/* End Select */}
                        </div>
                      </div>
                      <small className="form-text">Used to calculate shipping rates at checkout and label prices during fulfillment.</small>
                    </div>
                    {/* End Form */}
                  </div>
                  {/* End Col */}
                </div>
                {/* End Row */}
                <label className="form-label">Description <span className="form-label-secondary">(Optional)</span></label>
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
                    <p>Train hard. Stay dry. This soccer jacket is made of soft, sweat-wicking fabric that keeps you moving on the practice field. Stretch panels at the elbows and sides give you a full range of motion as you work.</p>
                    <p><br /></p>
                    <h3>Specifications</h3>
                    <ul>
                      <li>Regular fit is wider at the body, with a straight silhouette</li>
                      <li>Ribbed stand-up collar</li>
                      <li>Long sleeves with ribbed cuffs</li>
                      <li>100% polyester doubleknit</li>
                      <li>Front zip pockets; Full zip; Ribbing details; Ribbed hem</li>
                    </ul>
                  </div>
                </div>
                {/* End Quill */}
              </div>
              {/* Body */}
            </div>
            {/* End Card */}
            {/* Card */}
            <div className="card mb-3 mb-lg-5">
              {/* Header */}
              <div className="card-header card-header-content-between">
                <h4 className="card-header-title">Media</h4>
                {/* Dropdown */}
                <div className="dropdown">
                  <button type="button" className="btn btn-ghost-secondary btn-sm" id="mediaDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                    Add media from URL <i className="bi-chevron-down" />
                  </button>
                  <div className="dropdown-menu dropdown-menu-end mt-1">
                    <a className="dropdown-item" href="javascript:;" data-bs-toggle="modal" data-bs-target="#addImageFromURLModal">
                      <i className="bi-link dropdown-item-icon" /> Add image from URL
                    </a>
                    <a className="dropdown-item" href="javascript:;" data-bs-toggle="modal" data-bs-target="#embedVideoModal">
                      <i className="bi-youtube dropdown-item-icon" /> Embed video
                    </a>
                  </div>
                </div>
                {/* End Dropdown */}
              </div>
              {/* End Header */}
              {/* Body */}
              <div className="card-body">
                {/* Gallery */}
                <div id="fancyboxGallery" className="js-fancybox row justify-content-sm-center gx-3">
                  <div className="col-6 col-sm-4 col-md-3 mb-3 mb-lg-5">
                    {/* Card */}
                    <div className="card card-sm">
                      <img className="card-img-top" src="./assets/img/400x400/img7.jpg" alt="Image Description" />
                      <div className="card-body">
                        <div className="row col-divider text-center">
                          <div className="col">
                            <a className="text-body" href="./assets/img/725x1080/img1.jpg" data-bs-toggle="tooltip" data-bs-placement="top" title="View" data-fslightbox="gallery">
                              <i className="bi-eye" />
                            </a>
                          </div>
                          {/* End Col */}
                          <div className="col">
                            <a className="text-danger" href="javascript:;" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete">
                              <i className="bi-trash" />
                            </a>
                          </div>
                          {/* End Col */}
                        </div>
                        {/* End Row */}
                      </div>
                      {/* End Col */}
                    </div>
                    {/* End Card */}
                  </div>
                  {/* End Col */}
                  <div className="col-6 col-sm-4 col-md-3 mb-3 mb-lg-5">
                    {/* Card */}
                    <div className="card card-sm">
                      <img className="card-img-top" src="./assets/img/400x400/img8.jpg" alt="Image Description" />
                      <div className="card-body">
                        <div className="row col-divider text-center">
                          <div className="col">
                            <a className="text-body" href="./assets/img/1920x1080/img1.jpg" data-bs-toggle="tooltip" data-bs-placement="top" title="View" data-fslightbox="gallery">
                              <i className="bi-eye" />
                            </a>
                          </div>
                          {/* End Col */}
                          <div className="col">
                            <a className="text-danger" href="javascript:;" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete">
                              <i className="bi-trash" />
                            </a>
                          </div>
                          {/* End Col */}
                        </div>
                        {/* End Row */}
                      </div>
                      {/* End Col */}
                    </div>
                    {/* End Card */}
                  </div>
                  {/* End Col */}
                  <div className="col-6 col-sm-4 col-md-3 mb-3 mb-lg-5">
                    {/* Card */}
                    <div className="card card-sm">
                      <img className="card-img-top" src="./assets/img/400x400/img9.jpg" alt="Image Description" />
                      <div className="card-body">
                        <div className="row col-divider text-center">
                          <div className="col">
                            <a className="text-body" href="./assets/img/1920x1080/img2.jpg" data-bs-toggle="tooltip" data-bs-placement="top" title="View" data-fslightbox="gallery">
                              <i className="bi-eye" />
                            </a>
                          </div>
                          {/* End Col */}
                          <div className="col">
                            <a className="text-danger" href="javascript:;" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete">
                              <i className="bi-trash" />
                            </a>
                          </div>
                          {/* End Col */}
                        </div>
                        {/* End Row */}
                      </div>
                      {/* End Col */}
                    </div>
                    {/* End Card */}
                  </div>
                  {/* End Col */}
                  <div className="col-6 col-sm-4 col-md-3 mb-3 mb-lg-5">
                    {/* Card */}
                    <div className="card card-sm">
                      <img className="card-img-top" src="./assets/img/400x400/img10.jpg" alt="Image Description" />
                      <div className="card-body">
                        <div className="row col-divider text-center">
                          <div className="col">
                            <a className="text-body" href="./assets/img/1920x1080/img3.jpg" data-bs-toggle="tooltip" data-bs-placement="top" title="View" data-fslightbox="gallery">
                              <i className="bi-eye" />
                            </a>
                          </div>
                          {/* End Col */}
                          <div className="col">
                            <a className="text-danger" href="javascript:;" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete">
                              <i className="bi-trash" />
                            </a>
                          </div>
                          {/* End Col */}
                        </div>
                        {/* End Row */}
                      </div>
                      {/* End Col */}
                    </div>
                    {/* End Card */}
                  </div>
                  {/* End Col */}
                </div>
                {/* End Gallery */}
                {/* Dropzone */}
                <div id="attachFilesNewProjectLabel" className="js-dropzone dz-dropzone dz-dropzone-card">
                  <div className="dz-message">
                    <img className="avatar avatar-xl avatar-4x3 mb-3" src="./assets/svg/illustrations/oc-browse.svg" alt="Image Description" data-hs-theme-appearance="default" />
                    {/* <img className="avatar avatar-xl avatar-4x3 mb-3" src="./assets/svg/illustrations-light/oc-browse.svg" alt="Image Description" data-hs-theme-appearance="dark" /> */}
                    <h5>Drag and drop your file here</h5>
                    <p className="mb-2">or</p>
                    <span className="btn btn-white btn-sm">Browse files</span>
                  </div>
                </div>
                {/* End Dropzone */}
              </div>
              {/* Body */}
            </div>
            {/* End Card */}
            {/* Card */}
            <div className="js-add-field card mb-3 mb-lg-5" data-hs-add-field-options="{
                &quot;template&quot;: &quot;#addVariantsTemplate&quot;,
                &quot;container&quot;: &quot;#addVariantsContainer&quot;,
                &quot;defaultCreated&quot;: 0,
                &quot;limit&quot;: 100
              }">
              {/* Header */}
              <div className="card-header card-header-content-sm-between">
                <h4 className="card-header-title mb-2 mb-sm-0">Variants</h4>
                <div className="d-sm-flex align-items-center gap-2">
                  {/* Datatable Info */}
                  <div id="datatableCounterInfo" className="mb-2 mb-sm-0" style={{ display: 'none' }}>
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
                  <a className="js-create-field btn btn-ghost-secondary btn-sm" href="javascript:;">
                    <i className="bi-plus" /> Add variant
                  </a>
                </div>
              </div>
              {/* End Header */}
              {/* Table */}
              <div className="table-responsive datatable-custom">
                <table id="datatable" className="table table-borderless table-thead-bordered table-nowrap table-align-middle card-table" data-hs-datatables-options="{
                       &quot;columnDefs&quot;: [{
                          &quot;targets&quot;: [0, 1, 6],
                          &quot;orderable&quot;: false
                        }],
                       &quot;order&quot;: [],
                       &quot;pageLength&quot;: 15,
                       &quot;isResponsive&quot;: false,
                       &quot;isShowPaging&quot;: false
                     }">
                  <thead className="thead-light">
                    <tr>
                      <th scope="col" className="table-column-pe-0">
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" defaultValue id="datatableCheckAll" />
                          <label className="form-check-label" htmlFor="datatableCheckAll" />
                        </div>
                      </th>
                      <th />
                      <th className="table-column-ps-0">Size</th>
                      <th className="table-column-ps-0">Color</th>
                      <th className="table-column-ps-0">Price</th>
                      <th className="table-column-ps-0">Quantity</th>
                      <th className="table-column-ps-0" />
                    </tr>
                  </thead>
                  <tbody id="addVariantsContainer">
                    <tr>
                      <td className="table-column-pe-0">
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" defaultValue id="productVariationsCheck1" />
                          <label className="form-check-label" htmlFor="productVariationsCheck1" />
                        </div>
                      </td>
                      <th>
                        <img className="avatar" src="./assets/img/400x400/img7.jpg" alt="Image Description" />
                      </th>
                      <th className="table-column-ps-0">
                        <input type="text" className="form-control" defaultValue="S" style={{ minWidth: '3rem' }} />
                      </th>
                      <th className="table-column-ps-0">
                        <input type="text" className="form-control" defaultValue="White" style={{ minWidth: '6rem' }} />
                      </th>
                      <th className="table-column-ps-0">
                        <div className="input-group input-group-merge" style={{ minWidth: '7rem' }}>
                          <div className="input-group-prepend input-group-text">USD</div>
                          <input type="text" className="form-control" defaultValue={45.00} />
                        </div>
                      </th>
                      <th className="table-column-ps-0">
                        {/* Quantity */}
                        <div className="quantity-counter">
                          <div className="js-quantity-counter-input row align-items-center">
                            <div className="col">
                              <input className="js-result form-control form-control-quantity-counter" type="text" defaultValue={10} />
                            </div>
                            {/* End Col */}
                            <div className="col-auto">
                              <a className="js-minus btn btn-white btn-xs btn-icon rounded-circle" href="javascript:;">
                                <svg width={8} height={2} viewBox="0 0 8 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M0 1C0 0.723858 0.223858 0.5 0.5 0.5H7.5C7.77614 0.5 8 0.723858 8 1C8 1.27614 7.77614 1.5 7.5 1.5H0.5C0.223858 1.5 0 1.27614 0 1Z" fill="currentColor" />
                                </svg>
                              </a>
                              <a className="js-plus btn btn-white btn-xs btn-icon rounded-circle" href="javascript:;">
                                <svg width={8} height={8} viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M4 0C4.27614 0 4.5 0.223858 4.5 0.5V3.5H7.5C7.77614 3.5 8 3.72386 8 4C8 4.27614 7.77614 4.5 7.5 4.5H4.5V7.5C4.5 7.77614 4.27614 8 4 8C3.72386 8 3.5 7.77614 3.5 7.5V4.5H0.5C0.223858 4.5 0 4.27614 0 4C0 3.72386 0.223858 3.5 0.5 3.5H3.5V0.5C3.5 0.223858 3.72386 0 4 0Z" fill="currentColor" />
                                </svg>
                              </a>
                            </div>
                            {/* End Col */}
                          </div>
                          {/* End Row */}
                        </div>
                        {/* End Quantity */}
                      </th>
                      <th className="table-column-ps-0">
                        <div className="btn-group" role="group" aria-label="Edit group">
                          <a className="btn btn-white" href="#">
                            <i className="bi-pencil me-1" /> Edit
                          </a>
                          <a className="btn btn-white" href="#">
                            <i className="bi-trash" />
                          </a>
                        </div>
                      </th>
                    </tr>
                    <tr>
                      <td className="table-column-pe-0">
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" defaultValue id="productVariationsCheck2" />
                          <label className="form-check-label" htmlFor="productVariationsCheck2" />
                        </div>
                      </td>
                      <th>
                        <img className="avatar" src="./assets/img/400x400/img7.jpg" alt="Image Description" />
                      </th>
                      <th className="table-column-ps-0">
                        <input type="text" className="form-control" defaultValue="M" style={{ minWidth: '3rem' }} />
                      </th>
                      <th className="table-column-ps-0">
                        <input type="text" className="form-control" defaultValue="White" style={{ minWidth: '6rem' }} />
                      </th>
                      <th className="table-column-ps-0">
                        <div className="input-group input-group-merge" style={{ minWidth: '7rem' }}>
                          <div className="input-group-prepend input-group-text">USD</div>
                          <input type="text" className="form-control" defaultValue={45.00} />
                        </div>
                      </th>
                      <th className="table-column-ps-0">
                        {/* Quantity */}
                        <div className="quantity-counter">
                          <div className="js-quantity-counter-input row align-items-center">
                            <div className="col">
                              <input className="js-result form-control form-control-quantity-counter" type="text" defaultValue={10} />
                            </div>
                            {/* End Col */}
                            <div className="col-auto">
                              <a className="js-minus btn btn-white btn-xs btn-icon rounded-circle" href="javascript:;">
                                <svg width={8} height={2} viewBox="0 0 8 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M0 1C0 0.723858 0.223858 0.5 0.5 0.5H7.5C7.77614 0.5 8 0.723858 8 1C8 1.27614 7.77614 1.5 7.5 1.5H0.5C0.223858 1.5 0 1.27614 0 1Z" fill="currentColor" />
                                </svg>
                              </a>
                              <a className="js-plus btn btn-white btn-xs btn-icon rounded-circle" href="javascript:;">
                                <svg width={8} height={8} viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M4 0C4.27614 0 4.5 0.223858 4.5 0.5V3.5H7.5C7.77614 3.5 8 3.72386 8 4C8 4.27614 7.77614 4.5 7.5 4.5H4.5V7.5C4.5 7.77614 4.27614 8 4 8C3.72386 8 3.5 7.77614 3.5 7.5V4.5H0.5C0.223858 4.5 0 4.27614 0 4C0 3.72386 0.223858 3.5 0.5 3.5H3.5V0.5C3.5 0.223858 3.72386 0 4 0Z" fill="currentColor" />
                                </svg>
                              </a>
                            </div>
                            {/* End Col */}
                          </div>
                          {/* End Row */}
                        </div>
                        {/* End Quantity */}
                      </th>
                      <th className="table-column-ps-0">
                        <div className="btn-group" role="group" aria-label="Edit group">
                          <a className="btn btn-white" href="#">
                            <i className="bi-pencil me-1" /> Edit
                          </a>
                          <a className="btn btn-white" href="#">
                            <i className="bi-trash" />
                          </a>
                        </div>
                      </th>
                    </tr>
                    <tr>
                      <td className="table-column-pe-0">
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" defaultValue id="productVariationsCheck3" />
                          <label className="form-check-label" htmlFor="productVariationsCheck3" />
                        </div>
                      </td>
                      <th>
                        <img className="avatar" src="./assets/img/400x400/img7.jpg" alt="Image Description" />
                      </th>
                      <th className="table-column-ps-0">
                        <input type="text" className="form-control" defaultValue="L" style={{ minWidth: '3rem' }} />
                      </th>
                      <th className="table-column-ps-0">
                        <input type="text" className="form-control" defaultValue="White" style={{ minWidth: '6rem' }} />
                      </th>
                      <th className="table-column-ps-0">
                        <div className="input-group input-group-merge" style={{ minWidth: '7rem' }}>
                          <div className="input-group-prepend input-group-text">USD</div>
                          <input type="text" className="form-control" defaultValue={45.00} />
                        </div>
                      </th>
                      <th className="table-column-ps-0">
                        {/* Quantity */}
                        <div className="quantity-counter">
                          <div className="js-quantity-counter-input row align-items-center">
                            <div className="col">
                              <input className="js-result form-control form-control-quantity-counter" type="text" defaultValue={10} />
                            </div>
                            {/* End Col */}
                            <div className="col-auto">
                              <a className="js-minus btn btn-white btn-xs btn-icon rounded-circle" href="javascript:;">
                                <svg width={8} height={2} viewBox="0 0 8 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M0 1C0 0.723858 0.223858 0.5 0.5 0.5H7.5C7.77614 0.5 8 0.723858 8 1C8 1.27614 7.77614 1.5 7.5 1.5H0.5C0.223858 1.5 0 1.27614 0 1Z" fill="currentColor" />
                                </svg>
                              </a>
                              <a className="js-plus btn btn-white btn-xs btn-icon rounded-circle" href="javascript:;">
                                <svg width={8} height={8} viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M4 0C4.27614 0 4.5 0.223858 4.5 0.5V3.5H7.5C7.77614 3.5 8 3.72386 8 4C8 4.27614 7.77614 4.5 7.5 4.5H4.5V7.5C4.5 7.77614 4.27614 8 4 8C3.72386 8 3.5 7.77614 3.5 7.5V4.5H0.5C0.223858 4.5 0 4.27614 0 4C0 3.72386 0.223858 3.5 0.5 3.5H3.5V0.5C3.5 0.223858 3.72386 0 4 0Z" fill="currentColor" />
                                </svg>
                              </a>
                            </div>
                            {/* End Col */}
                          </div>
                          {/* End Row */}
                        </div>
                        {/* End Quantity */}
                      </th>
                      <th className="table-column-ps-0">
                        <div className="btn-group" role="group" aria-label="Edit group">
                          <a className="btn btn-white" href="#">
                            <i className="bi-pencil me-1" /> Edit
                          </a>
                          <a className="btn btn-white" href="#">
                            <i className="bi-trash" />
                          </a>
                        </div>
                      </th>
                    </tr>
                    <tr>
                      <td className="table-column-pe-0">
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" defaultValue id="productVariationsCheck4" />
                          <label className="form-check-label" htmlFor="productVariationsCheck4" />
                        </div>
                      </td>
                      <th>
                        <img className="avatar" src="./assets/img/400x400/img7.jpg" alt="Image Description" />
                      </th>
                      <th className="table-column-ps-0">
                        <input type="text" className="form-control" defaultValue="XL" style={{ minWidth: '3rem' }} />
                      </th>
                      <th className="table-column-ps-0">
                        <input type="text" className="form-control" defaultValue="White" style={{ minWidth: '6rem' }} />
                      </th>
                      <th className="table-column-ps-0">
                        <div className="input-group input-group-merge" style={{ minWidth: '7rem' }}>
                          <div className="input-group-prepend input-group-text">USD</div>
                          <input type="text" className="form-control" defaultValue={45.00} />
                        </div>
                      </th>
                      <th className="table-column-ps-0">
                        {/* Quantity */}
                        <div className="quantity-counter">
                          <div className="js-quantity-counter-input row align-items-center">
                            <div className="col">
                              <input className="js-result form-control form-control-quantity-counter" type="text" defaultValue={10} />
                            </div>
                            {/* End Col */}
                            <div className="col-auto">
                              <a className="js-minus btn btn-white btn-xs btn-icon rounded-circle" href="javascript:;">
                                <svg width={8} height={2} viewBox="0 0 8 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M0 1C0 0.723858 0.223858 0.5 0.5 0.5H7.5C7.77614 0.5 8 0.723858 8 1C8 1.27614 7.77614 1.5 7.5 1.5H0.5C0.223858 1.5 0 1.27614 0 1Z" fill="currentColor" />
                                </svg>
                              </a>
                              <a className="js-plus btn btn-white btn-xs btn-icon rounded-circle" href="javascript:;">
                                <svg width={8} height={8} viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M4 0C4.27614 0 4.5 0.223858 4.5 0.5V3.5H7.5C7.77614 3.5 8 3.72386 8 4C8 4.27614 7.77614 4.5 7.5 4.5H4.5V7.5C4.5 7.77614 4.27614 8 4 8C3.72386 8 3.5 7.77614 3.5 7.5V4.5H0.5C0.223858 4.5 0 4.27614 0 4C0 3.72386 0.223858 3.5 0.5 3.5H3.5V0.5C3.5 0.223858 3.72386 0 4 0Z" fill="currentColor" />
                                </svg>
                              </a>
                            </div>
                            {/* End Col */}
                          </div>
                          {/* End Row */}
                        </div>
                        {/* End Quantity */}
                      </th>
                      <th className="table-column-ps-0">
                        <div className="btn-group" role="group" aria-label="Edit group">
                          <a className="btn btn-white" href="#">
                            <i className="bi-pencil me-1" /> Edit
                          </a>
                          <a className="btn btn-white" href="#">
                            <i className="bi-trash" />
                          </a>
                        </div>
                      </th>
                    </tr>
                    <tr>
                      <td className="table-column-pe-0">
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" defaultValue id="productVariationsCheck5" />
                          <label className="form-check-label" htmlFor="productVariationsCheck5" />
                        </div>
                      </td>
                      <th>
                        <img className="avatar" src="./assets/img/400x400/img7.jpg" alt="Image Description" />
                      </th>
                      <th className="table-column-ps-0">
                        <input type="text" className="form-control" defaultValue="S" style={{ minWidth: '3rem' }} />
                      </th>
                      <th className="table-column-ps-0">
                        <input type="text" className="form-control" defaultValue="Black" style={{ minWidth: '6rem' }} />
                      </th>
                      <th className="table-column-ps-0">
                        <div className="input-group input-group-merge" style={{ minWidth: '7rem' }}>
                          <div className="input-group-prepend input-group-text">USD</div>
                          <input type="text" className="form-control" defaultValue={45.00} />
                        </div>
                      </th>
                      <th className="table-column-ps-0">
                        {/* Quantity */}
                        <div className="quantity-counter">
                          <div className="js-quantity-counter-input row align-items-center">
                            <div className="col">
                              <input className="js-result form-control form-control-quantity-counter" type="text" defaultValue={10} />
                            </div>
                            {/* End Col */}
                            <div className="col-auto">
                              <a className="js-minus btn btn-white btn-xs btn-icon rounded-circle" href="javascript:;">
                                <svg width={8} height={2} viewBox="0 0 8 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M0 1C0 0.723858 0.223858 0.5 0.5 0.5H7.5C7.77614 0.5 8 0.723858 8 1C8 1.27614 7.77614 1.5 7.5 1.5H0.5C0.223858 1.5 0 1.27614 0 1Z" fill="currentColor" />
                                </svg>
                              </a>
                              <a className="js-plus btn btn-white btn-xs btn-icon rounded-circle" href="javascript:;">
                                <svg width={8} height={8} viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M4 0C4.27614 0 4.5 0.223858 4.5 0.5V3.5H7.5C7.77614 3.5 8 3.72386 8 4C8 4.27614 7.77614 4.5 7.5 4.5H4.5V7.5C4.5 7.77614 4.27614 8 4 8C3.72386 8 3.5 7.77614 3.5 7.5V4.5H0.5C0.223858 4.5 0 4.27614 0 4C0 3.72386 0.223858 3.5 0.5 3.5H3.5V0.5C3.5 0.223858 3.72386 0 4 0Z" fill="currentColor" />
                                </svg>
                              </a>
                            </div>
                            {/* End Col */}
                          </div>
                          {/* End Row */}
                        </div>
                        {/* End Quantity */}
                      </th>
                      <th className="table-column-ps-0">
                        <div className="btn-group" role="group" aria-label="Edit group">
                          <a className="btn btn-white" href="#">
                            <i className="bi-pencil me-1" /> Edit
                          </a>
                          <a className="btn btn-white" href="#">
                            <i className="bi-trash" />
                          </a>
                        </div>
                      </th>
                    </tr>
                    <tr>
                      <td className="table-column-pe-0">
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" defaultValue id="productVariationsCheck6" />
                          <label className="form-check-label" htmlFor="productVariationsCheck6" />
                        </div>
                      </td>
                      <th>
                        <img className="avatar" src="./assets/img/400x400/img7.jpg" alt="Image Description" />
                      </th>
                      <th className="table-column-ps-0">
                        <input type="text" className="form-control" defaultValue="M" style={{ minWidth: '3rem' }} />
                      </th>
                      <th className="table-column-ps-0">
                        <input type="text" className="form-control" defaultValue="Black" style={{ minWidth: '6rem' }} />
                      </th>
                      <th className="table-column-ps-0">
                        <div className="input-group input-group-merge" style={{ minWidth: '7rem' }}>
                          <div className="input-group-prepend input-group-text">USD</div>
                          <input type="text" className="form-control" defaultValue={45.00} />
                        </div>
                      </th>
                      <th className="table-column-ps-0">
                        {/* Quantity */}
                        <div className="quantity-counter">
                          <div className="js-quantity-counter-input row align-items-center">
                            <div className="col">
                              <input className="js-result form-control form-control-quantity-counter" type="text" defaultValue={10} />
                            </div>
                            {/* End Col */}
                            <div className="col-auto">
                              <a className="js-minus btn btn-white btn-xs btn-icon rounded-circle" href="javascript:;">
                                <svg width={8} height={2} viewBox="0 0 8 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M0 1C0 0.723858 0.223858 0.5 0.5 0.5H7.5C7.77614 0.5 8 0.723858 8 1C8 1.27614 7.77614 1.5 7.5 1.5H0.5C0.223858 1.5 0 1.27614 0 1Z" fill="currentColor" />
                                </svg>
                              </a>
                              <a className="js-plus btn btn-white btn-xs btn-icon rounded-circle" href="javascript:;">
                                <svg width={8} height={8} viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M4 0C4.27614 0 4.5 0.223858 4.5 0.5V3.5H7.5C7.77614 3.5 8 3.72386 8 4C8 4.27614 7.77614 4.5 7.5 4.5H4.5V7.5C4.5 7.77614 4.27614 8 4 8C3.72386 8 3.5 7.77614 3.5 7.5V4.5H0.5C0.223858 4.5 0 4.27614 0 4C0 3.72386 0.223858 3.5 0.5 3.5H3.5V0.5C3.5 0.223858 3.72386 0 4 0Z" fill="currentColor" />
                                </svg>
                              </a>
                            </div>
                            {/* End Col */}
                          </div>
                          {/* End Row */}
                        </div>
                        {/* End Quantity */}
                      </th>
                      <th className="table-column-ps-0">
                        <div className="btn-group" role="group" aria-label="Edit group">
                          <a className="btn btn-white" href="#">
                            <i className="bi-pencil me-1" /> Edit
                          </a>
                          <a className="btn btn-white" href="#">
                            <i className="bi-trash" />
                          </a>
                        </div>
                      </th>
                    </tr>
                    <tr>
                      <td className="table-column-pe-0">
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" defaultValue id="productVariationsCheck7" />
                          <label className="form-check-label" htmlFor="productVariationsCheck7" />
                        </div>
                      </td>
                      <th>
                        <img className="avatar" src="./assets/img/400x400/img7.jpg" alt="Image Description" />
                      </th>
                      <th className="table-column-ps-0">
                        <input type="text" className="form-control" defaultValue="L" style={{ minWidth: '3rem' }} />
                      </th>
                      <th className="table-column-ps-0">
                        <input type="text" className="form-control" defaultValue="Black" style={{ minWidth: '6rem' }} />
                      </th>
                      <th className="table-column-ps-0">
                        <div className="input-group input-group-merge" style={{ minWidth: '7rem' }}>
                          <div className="input-group-prepend input-group-text">USD</div>
                          <input type="text" className="form-control" defaultValue={45.00} />
                        </div>
                      </th>
                      <th className="table-column-ps-0">
                        {/* Quantity */}
                        <div className="quantity-counter">
                          <div className="js-quantity-counter-input row align-items-center">
                            <div className="col">
                              <input className="js-result form-control form-control-quantity-counter" type="text" defaultValue={10} />
                            </div>
                            {/* End Col */}
                            <div className="col-auto">
                              <a className="js-minus btn btn-white btn-xs btn-icon rounded-circle" href="javascript:;">
                                <svg width={8} height={2} viewBox="0 0 8 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M0 1C0 0.723858 0.223858 0.5 0.5 0.5H7.5C7.77614 0.5 8 0.723858 8 1C8 1.27614 7.77614 1.5 7.5 1.5H0.5C0.223858 1.5 0 1.27614 0 1Z" fill="currentColor" />
                                </svg>
                              </a>
                              <a className="js-plus btn btn-white btn-xs btn-icon rounded-circle" href="javascript:;">
                                <svg width={8} height={8} viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M4 0C4.27614 0 4.5 0.223858 4.5 0.5V3.5H7.5C7.77614 3.5 8 3.72386 8 4C8 4.27614 7.77614 4.5 7.5 4.5H4.5V7.5C4.5 7.77614 4.27614 8 4 8C3.72386 8 3.5 7.77614 3.5 7.5V4.5H0.5C0.223858 4.5 0 4.27614 0 4C0 3.72386 0.223858 3.5 0.5 3.5H3.5V0.5C3.5 0.223858 3.72386 0 4 0Z" fill="currentColor" />
                                </svg>
                              </a>
                            </div>
                            {/* End Col */}
                          </div>
                          {/* End Row */}
                        </div>
                        {/* End Quantity */}
                      </th>
                      <th className="table-column-ps-0">
                        <div className="btn-group" role="group" aria-label="Edit group">
                          <a className="btn btn-white" href="#">
                            <i className="bi-pencil me-1" /> Edit
                          </a>
                          <a className="btn btn-white" href="#">
                            <i className="bi-trash" />
                          </a>
                        </div>
                      </th>
                    </tr>
                    <tr>
                      <td className="table-column-pe-0">
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" defaultValue id="productVariationsCheck8" />
                          <label className="form-check-label" htmlFor="productVariationsCheck8" />
                        </div>
                      </td>
                      <th>
                        <img className="avatar" src="./assets/img/400x400/img7.jpg" alt="Image Description" />
                      </th>
                      <th className="table-column-ps-0">
                        <input type="text" className="form-control" defaultValue="XL" style={{ minWidth: '3rem' }} />
                      </th>
                      <th className="table-column-ps-0">
                        <input type="text" className="form-control" defaultValue="Black" style={{ minWidth: '6rem' }} />
                      </th>
                      <th className="table-column-ps-0">
                        <div className="input-group input-group-merge" style={{ minWidth: '7rem' }}>
                          <div className="input-group-prepend input-group-text">USD</div>
                          <input type="text" className="form-control" defaultValue={45.00} />
                        </div>
                      </th>
                      <th className="table-column-ps-0">
                        {/* Quantity */}
                        <div className="quantity-counter">
                          <div className="js-quantity-counter-input row align-items-center">
                            <div className="col">
                              <input className="js-result form-control form-control-quantity-counter" type="text" defaultValue={10} />
                            </div>
                            {/* End Col */}
                            <div className="col-auto">
                              <a className="js-minus btn btn-white btn-xs btn-icon rounded-circle" href="javascript:;">
                                <svg width={8} height={2} viewBox="0 0 8 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M0 1C0 0.723858 0.223858 0.5 0.5 0.5H7.5C7.77614 0.5 8 0.723858 8 1C8 1.27614 7.77614 1.5 7.5 1.5H0.5C0.223858 1.5 0 1.27614 0 1Z" fill="currentColor" />
                                </svg>
                              </a>
                              <a className="js-plus btn btn-white btn-xs btn-icon rounded-circle" href="javascript:;">
                                <svg width={8} height={8} viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M4 0C4.27614 0 4.5 0.223858 4.5 0.5V3.5H7.5C7.77614 3.5 8 3.72386 8 4C8 4.27614 7.77614 4.5 7.5 4.5H4.5V7.5C4.5 7.77614 4.27614 8 4 8C3.72386 8 3.5 7.77614 3.5 7.5V4.5H0.5C0.223858 4.5 0 4.27614 0 4C0 3.72386 0.223858 3.5 0.5 3.5H3.5V0.5C3.5 0.223858 3.72386 0 4 0Z" fill="currentColor" />
                                </svg>
                              </a>
                            </div>
                            {/* End Col */}
                          </div>
                          {/* End Row */}
                        </div>
                        {/* End Quantity */}
                      </th>
                      <th className="table-column-ps-0">
                        <div className="btn-group" role="group" aria-label="Edit group">
                          <a className="btn btn-white" href="#">
                            <i className="bi-pencil me-1" /> Edit
                          </a>
                          <a className="btn btn-white" href="#">
                            <i className="bi-trash" />
                          </a>
                        </div>
                      </th>
                    </tr>
                    <tr>
                      <td className="table-column-pe-0">
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" defaultValue id="productVariationsCheck9" />
                          <label className="form-check-label" htmlFor="productVariationsCheck9" />
                        </div>
                      </td>
                      <th>
                        <img className="avatar" src="./assets/img/400x400/img7.jpg" alt="Image Description" />
                      </th>
                      <th className="table-column-ps-0">
                        <input type="text" className="form-control" defaultValue="S" style={{ minWidth: '3rem' }} />
                      </th>
                      <th className="table-column-ps-0">
                        <input type="text" className="form-control" defaultValue="Orange" style={{ minWidth: '6rem' }} />
                      </th>
                      <th className="table-column-ps-0">
                        <div className="input-group input-group-merge" style={{ minWidth: '7rem' }}>
                          <div className="input-group-prepend input-group-text">USD</div>
                          <input type="text" className="form-control" defaultValue={50.00} />
                        </div>
                      </th>
                      <th className="table-column-ps-0">
                        {/* Quantity */}
                        <div className="quantity-counter">
                          <div className="js-quantity-counter-input row align-items-center">
                            <div className="col">
                              <input className="js-result form-control form-control-quantity-counter" type="text" defaultValue={5} />
                            </div>
                            {/* End Col */}
                            <div className="col-auto">
                              <a className="js-minus btn btn-white btn-xs btn-icon rounded-circle" href="javascript:;">
                                <svg width={8} height={2} viewBox="0 0 8 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M0 1C0 0.723858 0.223858 0.5 0.5 0.5H7.5C7.77614 0.5 8 0.723858 8 1C8 1.27614 7.77614 1.5 7.5 1.5H0.5C0.223858 1.5 0 1.27614 0 1Z" fill="currentColor" />
                                </svg>
                              </a>
                              <a className="js-plus btn btn-white btn-xs btn-icon rounded-circle" href="javascript:;">
                                <svg width={8} height={8} viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M4 0C4.27614 0 4.5 0.223858 4.5 0.5V3.5H7.5C7.77614 3.5 8 3.72386 8 4C8 4.27614 7.77614 4.5 7.5 4.5H4.5V7.5C4.5 7.77614 4.27614 8 4 8C3.72386 8 3.5 7.77614 3.5 7.5V4.5H0.5C0.223858 4.5 0 4.27614 0 4C0 3.72386 0.223858 3.5 0.5 3.5H3.5V0.5C3.5 0.223858 3.72386 0 4 0Z" fill="currentColor" />
                                </svg>
                              </a>
                            </div>
                            {/* End Col */}
                          </div>
                          {/* End Row */}
                        </div>
                        {/* End Quantity */}
                      </th>
                      <th className="table-column-ps-0">
                        <div className="btn-group" role="group" aria-label="Edit group">
                          <a className="btn btn-white" href="#">
                            <i className="bi-pencil me-1" /> Edit
                          </a>
                          <a className="btn btn-white" href="#">
                            <i className="bi-trash" />
                          </a>
                        </div>
                      </th>
                    </tr>
                    <tr>
                      <td className="table-column-pe-0">
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" defaultValue id="productVariationsCheck10" />
                          <label className="form-check-label" htmlFor="productVariationsCheck10" />
                        </div>
                      </td>
                      <th>
                        <img className="avatar" src="./assets/img/400x400/img7.jpg" alt="Image Description" />
                      </th>
                      <th className="table-column-ps-0">
                        <input type="text" className="form-control" defaultValue="M" style={{ minWidth: '3rem' }} />
                      </th>
                      <th className="table-column-ps-0">
                        <input type="text" className="form-control" defaultValue="Orange" style={{ minWidth: '6rem' }} />
                      </th>
                      <th className="table-column-ps-0">
                        <div className="input-group input-group-merge" style={{ minWidth: '7rem' }}>
                          <div className="input-group-prepend input-group-text">USD</div>
                          <input type="text" className="form-control" defaultValue={50.00} />
                        </div>
                      </th>
                      <th className="table-column-ps-0">
                        {/* Quantity */}
                        <div className="quantity-counter">
                          <div className="js-quantity-counter-input row align-items-center">
                            <div className="col">
                              <input className="js-result form-control form-control-quantity-counter" type="text" defaultValue={5} />
                            </div>
                            {/* End Col */}
                            <div className="col-auto">
                              <a className="js-minus btn btn-white btn-xs btn-icon rounded-circle" href="javascript:;">
                                <svg width={8} height={2} viewBox="0 0 8 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M0 1C0 0.723858 0.223858 0.5 0.5 0.5H7.5C7.77614 0.5 8 0.723858 8 1C8 1.27614 7.77614 1.5 7.5 1.5H0.5C0.223858 1.5 0 1.27614 0 1Z" fill="currentColor" />
                                </svg>
                              </a>
                              <a className="js-plus btn btn-white btn-xs btn-icon rounded-circle" href="javascript:;">
                                <svg width={8} height={8} viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M4 0C4.27614 0 4.5 0.223858 4.5 0.5V3.5H7.5C7.77614 3.5 8 3.72386 8 4C8 4.27614 7.77614 4.5 7.5 4.5H4.5V7.5C4.5 7.77614 4.27614 8 4 8C3.72386 8 3.5 7.77614 3.5 7.5V4.5H0.5C0.223858 4.5 0 4.27614 0 4C0 3.72386 0.223858 3.5 0.5 3.5H3.5V0.5C3.5 0.223858 3.72386 0 4 0Z" fill="currentColor" />
                                </svg>
                              </a>
                            </div>
                            {/* End Col */}
                          </div>
                          {/* End Row */}
                        </div>
                        {/* End Quantity */}
                      </th>
                      <th className="table-column-ps-0">
                        <div className="btn-group" role="group" aria-label="Edit group">
                          <a className="btn btn-white" href="#">
                            <i className="bi-pencil me-1" /> Edit
                          </a>
                          <a className="btn btn-white" href="#">
                            <i className="bi-trash" />
                          </a>
                        </div>
                      </th>
                    </tr>
                    <tr>
                      <td className="table-column-pe-0">
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" defaultValue id="productVariationsCheck11" />
                          <label className="form-check-label" htmlFor="productVariationsCheck11" />
                        </div>
                      </td>
                      <th>
                        <img className="avatar" src="./assets/img/400x400/img7.jpg" alt="Image Description" />
                      </th>
                      <th className="table-column-ps-0">
                        <input type="text" className="form-control" defaultValue="L" style={{ minWidth: '3rem' }} />
                      </th>
                      <th className="table-column-ps-0">
                        <input type="text" className="form-control" defaultValue="Orange" style={{ minWidth: '6rem' }} />
                      </th>
                      <th className="table-column-ps-0">
                        <div className="input-group input-group-merge" style={{ minWidth: '7rem' }}>
                          <div className="input-group-prepend input-group-text">USD</div>
                          <input type="text" className="form-control" defaultValue={50.00} />
                        </div>
                      </th>
                      <th className="table-column-ps-0">
                        {/* Quantity */}
                        <div className="quantity-counter">
                          <div className="js-quantity-counter-input row align-items-center">
                            <div className="col">
                              <input className="js-result form-control form-control-quantity-counter" type="text" defaultValue={5} />
                            </div>
                            {/* End Col */}
                            <div className="col-auto">
                              <a className="js-minus btn btn-white btn-xs btn-icon rounded-circle" href="javascript:;">
                                <svg width={8} height={2} viewBox="0 0 8 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M0 1C0 0.723858 0.223858 0.5 0.5 0.5H7.5C7.77614 0.5 8 0.723858 8 1C8 1.27614 7.77614 1.5 7.5 1.5H0.5C0.223858 1.5 0 1.27614 0 1Z" fill="currentColor" />
                                </svg>
                              </a>
                              <a className="js-plus btn btn-white btn-xs btn-icon rounded-circle" href="javascript:;">
                                <svg width={8} height={8} viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M4 0C4.27614 0 4.5 0.223858 4.5 0.5V3.5H7.5C7.77614 3.5 8 3.72386 8 4C8 4.27614 7.77614 4.5 7.5 4.5H4.5V7.5C4.5 7.77614 4.27614 8 4 8C3.72386 8 3.5 7.77614 3.5 7.5V4.5H0.5C0.223858 4.5 0 4.27614 0 4C0 3.72386 0.223858 3.5 0.5 3.5H3.5V0.5C3.5 0.223858 3.72386 0 4 0Z" fill="currentColor" />
                                </svg>
                              </a>
                            </div>
                            {/* End Col */}
                          </div>
                          {/* End Row */}
                        </div>
                        {/* End Quantity */}
                      </th>
                      <th className="table-column-ps-0">
                        <div className="btn-group" role="group" aria-label="Edit group">
                          <a className="btn btn-white" href="#">
                            <i className="bi-pencil me-1" /> Edit
                          </a>
                          <a className="btn btn-white" href="#">
                            <i className="bi-trash" />
                          </a>
                        </div>
                      </th>
                    </tr>
                    <tr>
                      <td className="table-column-pe-0">
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" defaultValue id="productVariationsCheck12" />
                          <label className="form-check-label" htmlFor="productVariationsCheck12" />
                        </div>
                      </td>
                      <th>
                        <img className="avatar" src="./assets/img/400x400/img7.jpg" alt="Image Description" />
                      </th>
                      <th className="table-column-ps-0">
                        <input type="text" className="form-control" defaultValue="XL" style={{ minWidth: '3rem' }} />
                      </th>
                      <th className="table-column-ps-0">
                        <input type="text" className="form-control" defaultValue="Orange" style={{ minWidth: '6rem' }} />
                      </th>
                      <th className="table-column-ps-0">
                        <div className="input-group input-group-merge" style={{ minWidth: '7rem' }}>
                          <div className="input-group-prepend input-group-text">USD</div>
                          <input type="text" className="form-control" defaultValue={50.00} />
                        </div>
                      </th>
                      <th className="table-column-ps-0">
                        {/* Quantity */}
                        <div className="quantity-counter">
                          <div className="js-quantity-counter-input row align-items-center">
                            <div className="col">
                              <input className="js-result form-control form-control-quantity-counter" type="text" defaultValue={5} />
                            </div>
                            {/* End Col */}
                            <div className="col-auto">
                              <a className="js-minus btn btn-white btn-xs btn-icon rounded-circle" href="javascript:;">
                                <svg width={8} height={2} viewBox="0 0 8 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M0 1C0 0.723858 0.223858 0.5 0.5 0.5H7.5C7.77614 0.5 8 0.723858 8 1C8 1.27614 7.77614 1.5 7.5 1.5H0.5C0.223858 1.5 0 1.27614 0 1Z" fill="currentColor" />
                                </svg>
                              </a>
                              <a className="js-plus btn btn-white btn-xs btn-icon rounded-circle" href="javascript:;">
                                <svg width={8} height={8} viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M4 0C4.27614 0 4.5 0.223858 4.5 0.5V3.5H7.5C7.77614 3.5 8 3.72386 8 4C8 4.27614 7.77614 4.5 7.5 4.5H4.5V7.5C4.5 7.77614 4.27614 8 4 8C3.72386 8 3.5 7.77614 3.5 7.5V4.5H0.5C0.223858 4.5 0 4.27614 0 4C0 3.72386 0.223858 3.5 0.5 3.5H3.5V0.5C3.5 0.223858 3.72386 0 4 0Z" fill="currentColor" />
                                </svg>
                              </a>
                            </div>
                            {/* End Col */}
                          </div>
                          {/* End Row */}
                        </div>
                        {/* End Quantity */}
                      </th>
                      <th className="table-column-ps-0">
                        <div className="btn-group" role="group" aria-label="Edit group">
                          <a className="btn btn-white" href="#">
                            <i className="bi-pencil me-1" /> Edit
                          </a>
                          <a className="btn btn-white" href="#">
                            <i className="bi-trash" />
                          </a>
                        </div>
                      </th>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* End Table */}
              {/* Footer */}
              <div className="card-footer">
                <a className="js-create-field btn btn-sm btn-ghost-secondary" href="javascript:;">
                  <i className="bi-plus" /> Add variant
                </a>
              </div>
              {/* End Footer */}
              {/* Add Variants Field */}
              <table style={{ display: 'none' }}>
                <tbody><tr id="addVariantsTemplate">
                  <td className="table-column-pe-0">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" defaultValue id="productVariationsCheck13" />
                      <label className="form-check-label" htmlFor="productVariationsCheck13" />
                    </div>
                  </td>
                  <th>
                    <img className="avatar" src="./assets/img/400x400/img2.jpg" alt="Image Description" />
                  </th>
                  <th className="table-column-ps-0">
                    <input type="text" className="form-control" style={{ minWidth: '3rem' }} />
                  </th>
                  <th className="table-column-ps-0">
                    <input type="text" className="form-control" style={{ minWidth: '6rem' }} />
                  </th>
                  <th className="table-column-ps-0">
                    <div className="input-group input-group-merge" style={{ minWidth: '7rem' }}>
                      <div className="input-group-prepend input-group-text">USD</div>
                      <input type="text" className="form-control" />
                    </div>
                  </th>
                  <th className="table-column-ps-0">
                    {/* Quantity */}
                    <div className="quantity-counter">
                      <div className="js-quantity-counter-dynamic row align-items-center">
                        <div className="col">
                          <input className="js-result form-control form-control-quantity-counter" type="text" defaultValue={1} />
                        </div>
                        {/* End Col */}
                        <div className="col-auto">
                          <a className="js-minus btn btn-white btn-xs btn-icon rounded-circle" href="javascript:;">
                            <svg width={8} height={2} viewBox="0 0 8 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M0 1C0 0.723858 0.223858 0.5 0.5 0.5H7.5C7.77614 0.5 8 0.723858 8 1C8 1.27614 7.77614 1.5 7.5 1.5H0.5C0.223858 1.5 0 1.27614 0 1Z" fill="currentColor" />
                            </svg>
                          </a>
                          <a className="js-plus btn btn-white btn-xs btn-icon rounded-circle" href="javascript:;">
                            <svg width={8} height={8} viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M4 0C4.27614 0 4.5 0.223858 4.5 0.5V3.5H7.5C7.77614 3.5 8 3.72386 8 4C8 4.27614 7.77614 4.5 7.5 4.5H4.5V7.5C4.5 7.77614 4.27614 8 4 8C3.72386 8 3.5 7.77614 3.5 7.5V4.5H0.5C0.223858 4.5 0 4.27614 0 4C0 3.72386 0.223858 3.5 0.5 3.5H3.5V0.5C3.5 0.223858 3.72386 0 4 0Z" fill="currentColor" />
                            </svg>
                          </a>
                        </div>
                        {/* End Col */}
                      </div>
                      {/* End Row */}
                    </div>
                    {/* End Quantity */}
                  </th>
                  <th className="table-column-ps-0">
                    <div className="btn-group" role="group" aria-label="Edit group">
                      <a className="btn btn-white" href="#">
                        <i className="bi-pencil me-1" /> Edit
                      </a>
                      <a className="btn btn-white" href="#">
                        <i className="bi-trash" />
                      </a>
                    </div>
                  </th>
                </tr>
                </tbody></table>
              {/* End Add Variants Field */}
            </div>
            {/* End Card */}
          </div>
          {/* End Col */}
          <div className="col-lg-4">
            {/* Card */}
            <div className="card mb-3 mb-lg-5">
              {/* Header */}
              <div className="card-header">
                <h4 className="card-header-title">Pricing</h4>
              </div>
              {/* End Header */}
              {/* Body */}
              <div className="card-body">
                {/* Form */}
                <div className="mb-4">
                  <label htmlFor="priceNameLabel" className="form-label">Price</label>
                  <div className="input-group">
                    <input type="text" className="form-control" name="priceName" id="priceNameLabel" placeholder={0.00} aria-label={0.00} defaultValue={45.00} />
                    <div className="input-group-append">
                      {/* Select */}
                      <div className="tom-select-custom tom-select-custom-end">
                        <select className="js-select form-select" data-hs-tom-select-options="{
                                &quot;searchInDropdown&quot;: false,
                                &quot;hideSearch&quot;: true,
                                &quot;dropdownWidth&quot;: &quot;8rem&quot;
                              }">
                          <option value="USD" selected>USD</option>
                          <option value="AED">AED</option>
                          <option value="AFN">AFN</option>
                          <option value="ALL">ALL</option>
                          <option value="AMD">AMD</option>
                          <option value="ANG">ANG</option>
                          <option value="AOA">AOA</option>
                          <option value="ARS">ARS</option>
                          <option value="AUD">AUD</option>
                          <option value="AWG">AWG</option>
                          <option value="AZN">AZN</option>
                          <option value="BAM">BAM</option>
                          <option value="BBD">BBD</option>
                          <option value="BDT">BDT</option>
                          <option value="BGN">BGN</option>
                          <option value="BIF">BIF</option>
                          <option value="BMD">BMD</option>
                          <option value="BND">BND</option>
                          <option value="BOB">BOB</option>
                          <option value="BRL">BRL</option>
                          <option value="BSD">BSD</option>
                          <option value="BWP">BWP</option>
                          <option value="BZD">BZD</option>
                          <option value="CAD">CAD</option>
                          <option value="CDF">CDF</option>
                          <option value="CHF">CHF</option>
                          <option value="CLP">CLP</option>
                          <option value="CNY">CNY</option>
                          <option value="COP">COP</option>
                          <option value="CRC">CRC</option>
                          <option value="CVE">CVE</option>
                          <option value="CZK">CZK</option>
                          <option value="DJF">DJF</option>
                          <option value="DKK">DKK</option>
                          <option value="DOP">DOP</option>
                          <option value="DZD">DZD</option>
                          <option value="EGP">EGP</option>
                          <option value="ETB">ETB</option>
                          <option value="EUR">EUR</option>
                          <option value="FJD">FJD</option>
                          <option value="FKP">FKP</option>
                          <option value="GBP">GBP</option>
                          <option value="GEL">GEL</option>
                          <option value="GIP">GIP</option>
                          <option value="GMD">GMD</option>
                          <option value="GNF">GNF</option>
                          <option value="GTQ">GTQ</option>
                          <option value="GYD">GYD</option>
                          <option value="HKD">HKD</option>
                          <option value="HNL">HNL</option>
                          <option value="HRK">HRK</option>
                          <option value="HTG">HTG</option>
                          <option value="HUF">HUF</option>
                          <option value="IDR">IDR</option>
                          <option value="ILS">ILS</option>
                          <option value="INR">INR</option>
                          <option value="ISK">ISK</option>
                          <option value="JMD">JMD</option>
                          <option value="JPY">JPY</option>
                          <option value="KES">KES</option>
                          <option value="KGS">KGS</option>
                          <option value="KHR">KHR</option>
                          <option value="KMF">KMF</option>
                          <option value="KRW">KRW</option>
                          <option value="KYD">KYD</option>
                          <option value="KZT">KZT</option>
                          <option value="LAK">LAK</option>
                          <option value="LBP">LBP</option>
                          <option value="LKR">LKR</option>
                          <option value="LRD">LRD</option>
                          <option value="LSL">LSL</option>
                          <option value="MAD">MAD</option>
                          <option value="MDL">MDL</option>
                          <option value="MGA">MGA</option>
                          <option value="MKD">MKD</option>
                          <option value="MMK">MMK</option>
                          <option value="MNT">MNT</option>
                          <option value="MOP">MOP</option>
                          <option value="MRO">MRO</option>
                          <option value="MUR">MUR</option>
                          <option value="MVR">MVR</option>
                          <option value="MWK">MWK</option>
                          <option value="MXN">MXN</option>
                          <option value="MYR">MYR</option>
                          <option value="MZN">MZN</option>
                          <option value="NAD">NAD</option>
                          <option value="NGN">NGN</option>
                          <option value="NIO">NIO</option>
                          <option value="NOK">NOK</option>
                          <option value="NPR">NPR</option>
                          <option value="NZD">NZD</option>
                          <option value="PAB">PAB</option>
                          <option value="PEN">PEN</option>
                          <option value="PGK">PGK</option>
                          <option value="PHP">PHP</option>
                          <option value="PKR">PKR</option>
                          <option value="PLN">PLN</option>
                          <option value="PYG">PYG</option>
                          <option value="QAR">QAR</option>
                          <option value="RON">RON</option>
                          <option value="RSD">RSD</option>
                          <option value="RUB">RUB</option>
                          <option value="RWF">RWF</option>
                          <option value="SAR">SAR</option>
                          <option value="SBD">SBD</option>
                          <option value="SCR">SCR</option>
                          <option value="SEK">SEK</option>
                          <option value="SGD">SGD</option>
                          <option value="SHP">SHP</option>
                          <option value="SLL">SLL</option>
                          <option value="SOS">SOS</option>
                          <option value="SRD">SRD</option>
                          <option value="STD">STD</option>
                          <option value="SZL">SZL</option>
                          <option value="THB">THB</option>
                          <option value="TJS">TJS</option>
                          <option value="TOP">TOP</option>
                          <option value="TRY">TRY</option>
                          <option value="TTD">TTD</option>
                          <option value="TWD">TWD</option>
                          <option value="TZS">TZS</option>
                          <option value="UAH">UAH</option>
                          <option value="UGX">UGX</option>
                          <option value="UYU">UYU</option>
                          <option value="UZS">UZS</option>
                          <option value="VND">VND</option>
                          <option value="VUV">VUV</option>
                          <option value="WST">WST</option>
                          <option value="XAF">XAF</option>
                          <option value="XCD">XCD</option>
                          <option value="XOF">XOF</option>
                          <option value="XPF">XPF</option>
                          <option value="YER">YER</option>
                          <option value="ZAR">ZAR</option>
                          <option value="ZMW">ZMW</option>
                        </select>
                      </div>
                      {/* End Select */}
                    </div>
                  </div>
                </div>
                {/* End Form */}
                <div className="mb-2">
                  <a className="d-inline-block" href="javascript:;" data-bs-toggle="modal" data-bs-target="#productsAdvancedFeaturesModal">
                    <i className="bi-star-fill fs-4 text-warning me-1" /> Set "Compare to" price
                  </a>
                </div>
                <a className="d-inline-block" href="javascript:;" data-bs-toggle="modal" data-bs-target="#productsAdvancedFeaturesModal">
                  <i className="bi-star-fill fs-4 text-warning me-1" /> Bulk discount pricing
                </a>
                <hr className="my-4" />
                {/* Form Switch */}
                <label className="row form-check form-switch" htmlFor="availabilitySwitch1">
                  <span className="col-8 col-sm-9 ms-0">
                    <span className="text-dark">Availability <i className="bi-question-circle text-body ms-1" data-bs-toggle="tooltip" data-bs-placement="top" title="Product availability switch toggler." /></span>
                  </span>
                  <span className="col-4 col-sm-3 text-end">
                    <input type="checkbox" className="form-check-input" id="availabilitySwitch1" defaultChecked />
                  </span>
                </label>
                {/* End Form Switch */}
              </div>
              {/* Body */}
            </div>
            {/* End Card */}
            {/* Card */}
            <div className="card">
              {/* Header */}
              <div className="card-header">
                <h4 className="card-header-title">Organization</h4>
              </div>
              {/* End Header */}
              {/* Body */}
              <div className="card-body">
                {/* Form */}
                <div className="mb-4">
                  <label htmlFor="vendorLabel" className="form-label">Vendor</label>
                  <input type="text" className="form-control" name="vendor" id="vendorLabel" placeholder="eg. Nike" aria-label="eg. Nike" defaultValue="Adidas" />
                </div>
                {/* End Form */}
                {/* Form */}
                <div className="mb-4">
                  <label htmlFor="categoryLabel" className="form-label">Category</label>
                  {/* Select */}
                  <div className="tom-select-custom">
                    <select className="js-select form-select" autoComplete="off" id="categoryLabel" data-hs-tom-select-options="{
                            &quot;searchInDropdown&quot;: false,
                            &quot;hideSearch&quot;: true,
                            &quot;placeholder&quot;: &quot;Select category&quot;
                          }">
                      <option label="empty" />
                      <option value="Clothing" selected>Clothing</option>
                      <option value="Shoes">Shoes</option>
                      <option value="Electronics">Electronics</option>
                      <option value="Others">Others</option>
                    </select>
                  </div>
                  {/* End Select */}
                </div>
                {/* Form */}
                {/* Form */}
                <div className="mb-4">
                  <label htmlFor="collectionsLabel" className="form-label">Collections</label>
                  {/* Select */}
                  <div className="tom-select-custom">
                    <select className="js-select form-select" autoComplete="off" id="collectionsLabel" data-hs-tom-select-options="{
                            &quot;searchInDropdown&quot;: false,
                            &quot;hideSearch&quot;: true,
                            &quot;placeholder&quot;: &quot;Select collections&quot;
                          }">
                      <option label="empty" />
                      <option value="Winter">Winter</option>
                      <option value="Spring">Spring</option>
                      <option value="Summer" selected>Summer</option>
                      <option value="Autumn">Autumn</option>
                    </select>
                  </div>
                  {/* End Select */}
                  <span className="form-text">Add this product to a collection so it’s easy to find in your store.</span>
                </div>
                {/* Form */}
                <label htmlFor="tagsLabel" className="form-label">Tags</label>
                <input type="text" className="form-control" id="tagsLabel" placeholder="Enter tags here" aria-label="Enter tags here" />
              </div>
              {/* Body */}
            </div>
            {/* End Card */}
          </div>
          {/* End Col */}
        </div>
        {/* End Row */}
        <div className="position-fixed start-50 bottom-0 translate-middle-x w-100 zi-99 mb-3" style={{ maxWidth: '40rem' }}>
          {/* Card */}
          <div className="card card-sm bg-dark border-dark mx-2">
            <div className="card-body">
              <div className="row justify-content-center justify-content-sm-between">
                <div className="col">
                  <button type="button" className="btn btn-ghost-danger">Delete</button>
                </div>
                {/* End Col */}
                <div className="col-auto">
                  <div className="d-flex gap-3">
                    <button type="button" className="btn btn-ghost-light">Discard</button>
                    <button type="button" className="btn btn-primary">Save</button>
                  </div>
                </div>
                {/* End Col */}
              </div>
              {/* End Row */}
            </div>
          </div>
          {/* End Card */}
        </div>
      </div>
      <div className="modal fade" id="addImageFromURLModal" tabIndex={-1} aria-labelledby="addImageFromURLModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            {/* Header */}
            <div className="modal-header">
              <h4 className="modal-title" id="addImageFromURLModalLabel">Add image from URL</h4>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            {/* End Header */}
            {/* Body */}
            <div className="modal-body">
              <label htmlFor="pasteImageURLNameLabel" className="form-label">Paste image URL</label>
              <input type="text" className="form-control" name="projectName" id="pasteImageURLNameLabel" placeholder="https://" aria-label="https://" />
            </div>
            {/* End Body */}
            {/* Footer */}
            <div className="modal-footer gap-3">
              <button type="button" className="btn btn-white" data-bs-dismiss="modal" aria-label="Close">Cancel</button>
              <button type="button" className="btn btn-primary">Add media</button>
            </div>
            {/* End Footer */}
          </div>
        </div>
      </div>
      <div className="modal fade" id="embedVideoModal" tabIndex={-1} aria-labelledby="embedVideoModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            {/* Header */}
            <div className="modal-header">
              <h4 className="modal-title" id="embedVideoModalLabel">Embed video</h4>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            {/* End Header */}
            {/* Body */}
            <div className="modal-body">
              <label htmlFor="pasteVideoURLNameLabel" className="form-label">Paste image URL</label>
              <input type="text" className="form-control" name="projectName" id="pasteVideoURLNameLabel" placeholder="https://" aria-label="https://" />
            </div>
            {/* End Body */}
            {/* Footer */}
            <div className="modal-footer gap-3">
              <button type="button" className="btn btn-white" data-bs-dismiss="modal" aria-label="Close">Cancel</button>
              <button type="button" className="btn btn-primary">Add media</button>
            </div>
            {/* End Footer */}
          </div>
        </div>
      </div>
      <div className="modal fade" id="productsAdvancedFeaturesModal" tabIndex={-1} aria-hidden="true">
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
            <div className="modal-body">
              <div className="text-center mb-7">
                <h4 className="h1">Advanced features</h4>
                <p>"Compare to" Price, Bulk Discount Pricing, Inventory Tracking</p>
                <a className="btn btn-primary" href="#">
                  <i className="bi-star-fill me-1" /> Upgrade to get these features
                </a>
              </div>
              {/* Media */}
              <div className="d-flex">
                <div className="flex-shrink-0 mb-3 mb-sm-0">
                  <img className="avatar avatar-lg avatar-4x3" src="./assets/svg/illustrations/oc-money-profits.svg" alt="Image Description" data-hs-theme-appearance="default" />
                  <img className="avatar avatar-lg avatar-4x3" src="./assets/svg/illustrations-light/oc-money-profits.svg" alt="Image Description" data-hs-theme-appearance="dark" />
                </div>
                <div className="flex-grow-1 ms-4">
                  <h4>"Compare to" price</h4>
                  <p>Use this feature when you want to put a product on sale or show savings off suggested retail pricing.</p>
                </div>
              </div>
              {/* End Media */}
              <hr className="my-4" />
              {/* Media */}
              <div className="d-flex">
                <div className="flex-shrink-0 mb-3 mb-sm-0">
                  <img className="avatar avatar-lg avatar-4x3" src="./assets/svg/illustrations/oc-discount.svg" alt="Image Description" data-hs-theme-appearance="default" />
                  <img className="avatar avatar-lg avatar-4x3" src="./assets/svg/illustrations-light/oc-discount.svg" alt="Image Description" data-hs-theme-appearance="dark" />
                </div>
                <div className="flex-grow-1 ms-4">
                  <h4>Bulk discount pricing</h4>
                  <p>Encourage higher purchase quantities with volume discounts.</p>
                </div>
              </div>
              {/* End Media */}
              <hr className="my-4" />
              {/* Media */}
              <div className="d-flex">
                <div className="flex-shrink-0 mb-3 mb-sm-0">
                  <img className="avatar avatar-lg avatar-4x3" src="./assets/svg/illustrations/oc-collection.svg" alt="Image Description" data-hs-theme-appearance="default" />
                  <img className="avatar avatar-lg avatar-4x3" src="./assets/svg/illustrations-light/oc-collection.svg" alt="Image Description" data-hs-theme-appearance="dark" />
                </div>
                <div className="flex-grow-1 ms-4">
                  <h4>Inventory tracking</h4>
                  <p>Automatically keep track of product availability and receive notifications when inventory levels get low.</p>
                </div>
              </div>
              {/* End Media */}
            </div>
            {/* End Body */}
            {/* Footer */}
            <div className="modal-footer gap-3">
              <button type="button" className="btn btn-white" data-bs-dismiss="modal" aria-label="Close">Cancel</button>
              <button type="button" className="btn btn-primary">Upgrade now</button>
            </div>
            {/* End Footer */}
          </div>
        </div>
      </div>
    </>
  )
}

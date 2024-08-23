import React from 'react'

export default function InvoiceGenerator() {
    return (
        <div>
            <div className="content container-fluid">
                <div className="row">
                    <div className="col-lg-9 mb-5 mb-lg-0">
                        {/* Card */}
                        <div className="card card-lg">
                            {/* Body */}
                            <div className="card-body">
                                <div className="row justify-content-md-between">
                                    <div className="col-md-4 mb-3 mb-md-0">
                                        {/* Logo */}
                                        <label className="form-check form-check-dashed" htmlFor="logoUploader">
                                            <img id="logoImg" className="avatar avatar-xl avatar-4x3 avatar-centered h-100 mb-2" src="./assets/svg/illustrations/oc-browse-file.svg" alt="Image Description" data-hs-theme-appearance="default" />
                                            {/* <img id="logoImg" className="avatar avatar-xl avatar-4x3 avatar-centered h-100 mb-2" src="./assets/svg/illustrations-light/oc-browse-file.svg" alt="Image Description" data-hs-theme-appearance="dark" /> */}
                                            <span className="d-block">Browse your file here</span>
                                            <input type="file" className="js-file-attach form-check-input" id="logoUploader" data-hs-file-attach-options="{
                                        &quot;textTarget&quot;: &quot;#logoImg&quot;,
                                        &quot;mode&quot;: &quot;image&quot;,
                                        &quot;targetAttr&quot;: &quot;src&quot;,
                                        &quot;allowTypes&quot;: [&quot;.png&quot;, &quot;.jpeg&quot;, &quot;.jpg&quot;]
                                     }" />
                                        </label>
                                        {/* End Logo */}
                                    </div>
                                    {/* End Col */}
                                    <div className="col-md-5 text-md-end">
                                        <h2>Invoice #</h2>
                                        {/* Form */}
                                        <div className="d-grid d-md-flex justify-content-md-end mb-2 mb-md-4">
                                            <input type="text" className="form-control w-auto" placeholder aria-label defaultValue={982131} />
                                        </div>
                                        {/* End Form */}
                                        <textarea className="form-control" placeholder="Who is this invoice from?" id="invoiceAddressFromLabel" aria-label="Who is this invoice from?" rows={3} defaultValue={""} />
                                    </div>
                                    {/* End Col */}
                                </div>
                                {/* End Row */}
                                <hr className="my-5" />
                                <div className="row mb-3">
                                    <div className="col-md-5">
                                        {/* Form */}
                                        <div className="mb-4">
                                            <label htmlFor="invoiceAddressToLabel" className="form-label">Bill to:</label>
                                            <textarea className="form-control" placeholder="Who is this invoice from?" id="invoiceAddressToLabel" aria-label="Who is this invoice from?" rows={3} defaultValue={""} />
                                        </div>
                                        {/* End Form */}
                                    </div>
                                    {/* End Col */}
                                    <div className="col-md-7 align-self-md-end">
                                        {/* Form */}
                                        <div className="mb-4">
                                            <dl className="row align-items-sm-center mb-3">
                                                <dt className="col-md text-sm-end mb-2 mb-sm-0">Invoice date:</dt>
                                                <dd className="col-md-auto mb-0">
                                                    {/* Flatpickr */}
                                                    <div id="invoiceDateFlatpickr" className="js-flatpickr flatpickr-custom" data-hs-flatpickr-options="{
                                        &quot;appendTo&quot;: &quot;#invoiceDateFlatpickr&quot;,
                                        &quot;dateFormat&quot;: &quot;d/m/Y&quot;,
                                        &quot;wrap&quot;: true
                                      }">
                                                        <input type="text" className="flatpickr-custom-form-control form-control" placeholder="Select dates" data-input defaultValue="29/06/2020" />
                                                    </div>
                                                    {/* End Flatpickr */}
                                                </dd>
                                            </dl>
                                            <dl className="row align-items-sm-center">
                                                <dt className="col-md text-sm-end mb-2 mb-sm-0">Due date:</dt>
                                                <dd className="col-md-auto mb-0">
                                                    {/* Flatpickr */}
                                                    <div id="invoiceDueDateFlatpickr" className="js-flatpickr flatpickr-custom" data-hs-flatpickr-options="{
                                        &quot;appendTo&quot;: &quot;#invoiceDueDateFlatpickr&quot;,
                                        &quot;dateFormat&quot;: &quot;d/m/Y&quot;,
                                        &quot;wrap&quot;: true
                                      }">
                                                        <input type="text" className="flatpickr-custom-form-control form-control" placeholder="Select dates" data-input defaultValue="29/06/2020" />
                                                    </div>
                                                    {/* End Flatpickr */}
                                                </dd>
                                            </dl>
                                        </div>
                                        {/* End Form */}
                                    </div>
                                    {/* End Col */}
                                </div>
                                {/* End Row */}
                                <div className="js-add-field" data-hs-add-field-options="{
                                &quot;template&quot;: &quot;#addInvoiceItemTemplate&quot;,
                                &quot;container&quot;: &quot;#addInvoiceItemContainer&quot;,
                                &quot;defaultCreated&quot;: 0
                              }">
                                    {/* Title */}
                                    <div className="bg-light border-bottom p-2 mb-3">
                                        <div className="row">
                                            <div className="col-sm-5">
                                                <h6 className="card-title text-cap">Item</h6>
                                            </div>
                                            {/* End Col */}
                                            <div className="col-sm-3 d-none d-sm-inline-block">
                                                <h6 className="card-title text-cap">Quantity</h6>
                                            </div>
                                            {/* End Col */}
                                            <div className="col-sm-2 d-none d-sm-inline-block">
                                                <h6 className="card-title text-cap">Rate</h6>
                                            </div>
                                            {/* End Col */}
                                            <div className="col-sm-2 d-none d-sm-inline-block">
                                                <h6 className="card-title text-cap">Amount</h6>
                                            </div>
                                            {/* End Col */}
                                        </div>
                                        {/* End Row */}
                                    </div>
                                    {/* End Title */}
                                    {/* Content */}
                                    <div className="row">
                                        <div className="col-md-5">
                                            <input type="text" className="form-control mb-3" placeholder="Item name" aria-label="Item name" />
                                            <input type="text" className="form-control mb-3" placeholder="Description" aria-label="Description" />
                                        </div>
                                        {/* End Col */}
                                        <div className="col-12 col-sm-auto col-md-3">
                                            {/* Quantity */}
                                            <div className="quantity-counter mb-3">
                                                <div className="js-quantity-counter row align-items-center">
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
                                        </div>
                                        {/* End Col */}
                                        <div className="col-12 col-sm col-md-2">
                                            {/* Input Group */}
                                            <div className="mb-3">
                                                <input type="number" className="form-control" placeholder={0} aria-label={0} />
                                            </div>
                                            {/* End Input Group */}
                                        </div>
                                        {/* End Col */}
                                        <div className="col col-md-2">
                                            <input type="number" className="form-control-plaintext mb-3" placeholder="$0.00" aria-label="$0.00" />
                                        </div>
                                        {/* End Col */}
                                    </div>
                                    {/* End Content */}
                                    {/* Container For Input Field */}
                                    <div id="addInvoiceItemContainer" />
                                    <a href="javascript:;" className="js-create-field form-link">
                                        <i className="bi-plus" /> Add item
                                    </a>
                                    {/* Add Phone Input Field */}
                                    <div id="addInvoiceItemTemplate" style={{ display: 'none' }}>
                                        {/* Content */}
                                        <div className="input-group-add-field">
                                            <div className="row">
                                                <div className="col-md-5">
                                                    <input type="text" className="form-control mb-3" placeholder="Item name" aria-label="Item name" />
                                                    <input type="text" className="form-control mb-3" placeholder="Description" aria-label="Description" />
                                                </div>
                                                {/* End Col */}
                                                <div className="col-12 col-sm-auto col-md-3">
                                                    {/* Quantity */}
                                                    <div className="quantity-counter mb-3">
                                                        <div className="js-quantity-counter row align-items-center">
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
                                                </div>
                                                {/* End Col */}
                                                <div className="col-12 col-sm col-md-2">
                                                    {/* Input Group */}
                                                    <div className="mb-3">
                                                        <input type="number" className="form-control" placeholder={0} aria-label={0} />
                                                    </div>
                                                    {/* End Input Group */}
                                                </div>
                                                {/* End Col */}
                                                <div className="col col-md-2">
                                                    <input type="number" className="form-control-plaintext mb-3" placeholder="$0.00" aria-label="$0.00" />
                                                </div>
                                                {/* End Col */}
                                            </div>
                                            {/* End Row */}
                                            <a className="js-delete-field input-group-add-field-delete" href="javascript:;" data-toggle="tooltip" data-placement="top" title="Remove item">
                                                <i className="bi-x-lg" />
                                            </a>
                                        </div>
                                        {/* End Content */}
                                    </div>
                                    {/* End Add Phone Input Field */}
                                </div>
                                <hr className="my-5" />
                                <div className="row justify-content-md-end mb-3">
                                    <div className="col-md-auto">
                                        <dl className="row text-md-end">
                                            <dt className="col-md-6">Subtotal:</dt>
                                            <dd className="col-md-6">$0.00</dd>
                                            <dt className="col-md-6">Total:</dt>
                                            <dd className="col-md-6">$0.00</dd>
                                            <dt className="col-md-6 mb-1 mb-md-0">Tax:</dt>
                                            <dd className="col-md-6">
                                                {/* Input Group */}
                                                <div className="tom-select-custom tom-select-custom-end">
                                                    <div id="taxSelect" className="input-group">
                                                        <input type="number" className="form-control" placeholder={0.00} aria-label={0.00} style={{ minWidth: '5rem' }} />
                                                        {/* Select */}
                                                        <select className="js-select form-select" data-hs-tom-select-options="{
                                              &quot;searchInDropdown&quot;: false,
                                              &quot;hideSearch&quot;: true,
                                              &quot;dropdownWidth&quot;: &quot;9rem&quot;
                                            }">
                                                            <option value="discount2Filter1">Flat ($)</option>
                                                            <option value="discount2Filter2" selected>Percent (%)</option>
                                                        </select>
                                                        {/* End Select */}
                                                    </div>
                                                </div>
                                                {/* End Input Group */}
                                            </dd>
                                            <dt className="col-md-6 mb-1 mb-md-0">Amount paid:</dt>
                                            <dd className="col-md-6">
                                                {/* Input Group */}
                                                <div className="input-group input-group-merge">
                                                    <div className="input-group-prepend input-group-text">
                                                        <i className="bi-currency-dollar" />
                                                    </div>
                                                    <input type="number" className="form-control" placeholder={0.00} aria-label={0.00} />
                                                </div>
                                                {/* End Input Group */}
                                            </dd>
                                            <dt className="col-md-6">Due balance:</dt>
                                            <dd className="col-md-6">$0.00</dd>
                                        </dl>
                                        {/* End Row */}
                                    </div>
                                    {/* End Col */}
                                </div>
                                {/* End Row */}
                                {/* Form */}
                                <div className="mb-4">
                                    <label htmlFor="invoiceNotesLabel" className="form-label">Notes &amp; terms</label>
                                    <textarea className="form-control" placeholder="Who is this invoice to?" id="invoiceNotesLabel" aria-label="Who is this invoice to?" rows={3} defaultValue={""} />
                                </div>
                                {/* End Form */}
                                <p className="fs-6 mb-0">© Front. 2020 Htmlstream.</p>
                            </div>
                            {/* End Body */}
                        </div>
                        {/* End Card */}
                        {/* Sticky Block End Point */}
                        <div id="stickyBlockEndPoint" />
                    </div>
                    <div className="col-lg-3">
                        <div id="stickyBlockStartPoint">
                            <div className="js-sticky-block" data-hs-sticky-block-options="{
                             &quot;parentSelector&quot;: &quot;#stickyBlockStartPoint&quot;,
                             &quot;breakpoint&quot;: &quot;lg&quot;,
                             &quot;startPoint&quot;: &quot;#stickyBlockStartPoint&quot;,
                             &quot;endPoint&quot;: &quot;#stickyBlockEndPoint&quot;,
                             &quot;stickyOffsetTop&quot;: 20
                           }">
                                <div className="d-grid gap-2 gap-sm-3 mb-2 mb-sm-3">
                                    <a className="btn btn-primary" href="javascript:;">
                                        <i className="bi-cursor-fill me-1" /> Send invoice
                                    </a>
                                    <a className="btn btn-white" href="javascript:;">
                                        <i className="bi-download me-1" /> Download
                                    </a>
                                </div>
                                <div className="row gx-3">
                                    <div className="col-sm mb-2 mb-sm-0">
                                        <div className="d-grid">
                                            <a className="btn btn-white" href="javascript:;">Preview</a>
                                        </div>
                                    </div>
                                    {/* End Col */}
                                    <div className="col-sm">
                                        <div className="d-grid">
                                            <a className="btn btn-white" href="javascript:;">Save</a>
                                        </div>
                                    </div>
                                    {/* End Col */}
                                </div>
                                {/* End Row */}
                                <hr className="my-4" />
                                {/* Form */}
                                <div className="mb-4">
                                    <label htmlFor="currencyLabel" className="form-label">Currency</label>
                                    {/* Select */}
                                    <div className="tom-select-custom">
                                        <select className="js-select form-select" id="currencyLabel" autoComplete="off" data-hs-tom-select-options="{
                                      &quot;searchInDropdown&quot;: false,
                                      &quot;hideSearch&quot;: true
                                    }">
                                            <option label="empty" />
                                            <option value="currency1" selected data-option-template="<span class=&quot;d-flex align-items-center text-truncate&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/us.svg&quot; alt=&quot;Image description&quot; width=&quot;16&quot;/><span>USD (United States Dollar)</span></span>">USD (United States Dollar)</option>
                                            <option value="currency2" data-option-template="<span class=&quot;d-flex align-items-center text-truncate&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/gb.svg&quot; alt=&quot;Image description&quot; width=&quot;16&quot;/><span>GBP (United Kingdom Pound)</span></span>">GBP (United Kingdom Pound)</option>
                                            <option value="currency3" data-option-template="<span class=&quot;d-flex align-items-center text-truncate&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/eu.svg&quot; alt=&quot;Image description&quot; width=&quot;16&quot;/><span>Euro (Euro Member Countries)</span></span>">Euro (Euro Member Countries)</option>
                                        </select>
                                    </div>
                                    {/* End Select */}
                                </div>
                                {/* End Form */}
                                <div className="d-grid gap-3">
                                    {/* Form Switch */}
                                    <label className="row form-check form-switch" htmlFor="invoicePaymentTermsSwitch">
                                        <span className="col-8 col-sm-9 ms-0">Payment terms</span>
                                        <span className="col-4 col-sm-3 text-end">
                                            <input type="checkbox" className="form-check-input" id="invoicePaymentTermsSwitch" defaultChecked />
                                        </span>
                                    </label>
                                    {/* End Form Switch */}
                                    {/* Form Switch */}
                                    <label className="row form-check form-switch" htmlFor="invoiceClientNotesSwitch">
                                        <span className="col-8 col-sm-9 ms-0">Client notes</span>
                                        <span className="col-4 col-sm-3 text-end">
                                            <input type="checkbox" className="form-check-input" id="invoiceClientNotesSwitch" defaultChecked />
                                        </span>
                                    </label>
                                    {/* End Form Switch */}
                                    {/* Form Switch */}
                                    <label className="row form-check form-switch" htmlFor="invoiceAttachPDFSwitch">
                                        <span className="col-8 col-sm-9 ms-0">Attach PDF in mail</span>
                                        <span className="col-4 col-sm-3 text-end">
                                            <input type="checkbox" className="form-check-input" id="invoiceAttachPDFSwitch" />
                                        </span>
                                    </label>
                                    {/* End Form Switch */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Row */}
            </div>
            <div className="modal fade" id="welcomeMessageModal" tabIndex={-1} aria-hidden="true">
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
                            <div className="text-center">
                                <div className="w-75 w-sm-50 mx-auto mb-4">
                                    <img className="img-fluid" src="./assets/svg/illustrations/oc-collaboration.svg" alt="Image Description" data-hs-theme-appearance="default" />
                                    <img className="img-fluid" src="./assets/svg/illustrations-light/oc-collaboration.svg" alt="Image Description" data-hs-theme-appearance="dark" />
                                </div>
                                <h4 className="h1">Welcome to Front</h4>
                                <p>We're happy to see you in our community.</p>
                            </div>
                        </div>
                        {/* End Body */}
                        {/* Footer */}
                        <div className="modal-footer d-block text-center py-sm-5">
                            <small className="text-cap text-muted">Trusted by the world's best teams</small>
                            <div className="w-85 mx-auto">
                                <div className="row justify-content-between">
                                    <div className="col">
                                        <img className="img-fluid" src="./assets/svg/brands/gitlab-gray.svg" alt="Image Description" />
                                    </div>
                                    <div className="col">
                                        <img className="img-fluid" src="./assets/svg/brands/fitbit-gray.svg" alt="Image Description" />
                                    </div>
                                    <div className="col">
                                        <img className="img-fluid" src="./assets/svg/brands/flow-xo-gray.svg" alt="Image Description" />
                                    </div>
                                    <div className="col">
                                        <img className="img-fluid" src="./assets/svg/brands/layar-gray.svg" alt="Image Description" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End Footer */}
                    </div>
                </div>
            </div>
            {/* End Welcome Message Modal */}
            {/* Share with people Modal */}
            <div className="modal fade" id="shareWithPeopleModal" tabIndex={-1} aria-labelledby="shareWithPeopleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="shareWithPeopleModalLabel">Invite users</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        {/* Body */}
                        <div className="modal-body">
                            {/* Form */}
                            <div className="mb-4">
                                <div className="input-group mb-2 mb-sm-0">
                                    <input type="text" className="form-control" name="fullName" placeholder="Search name or emails" aria-label="Search name or emails" />
                                    <div className="input-group-append input-group-append-last-sm-down-none">
                                        {/* Select */}
                                        <div className="tom-select-custom tom-select-custom-end">
                                            <select className="js-select form-select tom-select-custom-form-select-invite-user" autoComplete="off" data-hs-tom-select-options="{
                                      &quot;searchInDropdown&quot;: false,
                                      &quot;hideSearch&quot;: true,
                                      &quot;dropdownWidth&quot;: &quot;11rem&quot;
                                    }">
                                                <option value="guest" selected>Guest</option>
                                                <option value="can edit">Can edit</option>
                                                <option value="can comment">Can comment</option>
                                                <option value="full access">Full access</option>
                                            </select>
                                        </div>
                                        {/* End Select */}
                                        <a className="btn btn-primary d-none d-sm-inline-block" href="javascript:;">Invite</a>
                                    </div>
                                </div>
                                <a className="btn btn-primary w-100 d-sm-none" href="javascript:;">Invite</a>
                            </div>
                            {/* End Form */}
                            {/* List Group */}
                            <ul className="list-unstyled list-py-2">
                                {/* Item */}
                                <li>
                                    <div className="d-flex">
                                        <div className="flex-shrink-0">
                                            <span className="icon icon-soft-dark icon-sm icon-circle">
                                                <i className="bi-people-fill" />
                                            </span>
                                        </div>
                                        <div className="flex-grow-1 ms-3">
                                            <div className="row align-items-center">
                                                <div className="col-sm">
                                                    <h5 className="text-body mb-0">#digitalmarketing</h5>
                                                    <span className="d-block fs-6">8 members</span>
                                                </div>
                                                {/* End Col */}
                                                <div className="col-sm-auto">
                                                    {/* Select */}
                                                    <div className="tom-select-custom tom-select-custom-sm-end">
                                                        <select className="js-select form-select form-select-borderless tom-select-custom-form-select-invite-user tom-select-form-select-ps-0" autoComplete="off" data-hs-tom-select-options="{
                                            &quot;searchInDropdown&quot;: false,
                                            &quot;hideSearch&quot;: true,
                                            &quot;dropdownWidth&quot;: &quot;11rem&quot;
                                          }">
                                                            <option value="guest">Guest</option>
                                                            <option value="can edit" selected>Can edit</option>
                                                            <option value="can comment">Can comment</option>
                                                            <option value="full access">Full access</option>
                                                            <option value="remove" data-option-template="<div class=&quot;text-danger&quot;>Remove</div>">Remove</option>
                                                        </select>
                                                    </div>
                                                    {/* End Select */}
                                                </div>
                                                {/* End Col */}
                                            </div>
                                            {/* End Row */}
                                        </div>
                                    </div>
                                </li>
                                {/* End Item */}
                                {/* Item */}
                                <li>
                                    <div className="d-flex">
                                        <div className="flex-shrink-0">
                                            <div className="avatar avatar-sm avatar-circle">
                                                <img className="avatar-img" src="./assets/img/160x160/img3.jpg" alt="Image Description" />
                                            </div>
                                        </div>
                                        <div className="flex-grow-1 ms-3">
                                            <div className="row align-items-center">
                                                <div className="col-sm">
                                                    <h5 className="text-body mb-0">David Harrison</h5>
                                                    <span className="d-block fs-6">david@site.com</span>
                                                </div>
                                                {/* End Col */}
                                                <div className="col-sm-auto">
                                                    {/* Select */}
                                                    <div className="tom-select-custom tom-select-custom-sm-end">
                                                        <select className="js-select form-select form-select-borderless tom-select-custom-form-select-invite-user tom-select-form-select-ps-0" autoComplete="off" data-hs-tom-select-options="{
                                            &quot;searchInDropdown&quot;: false,
                                            &quot;hideSearch&quot;: true,
                                            &quot;dropdownWidth&quot;: &quot;11rem&quot;
                                          }">
                                                            <option value="guest">Guest</option>
                                                            <option value="can edit" selected>Can edit</option>
                                                            <option value="can comment">Can comment</option>
                                                            <option value="full access">Full access</option>
                                                            <option value="remove" data-option-template="<div class=&quot;text-danger&quot;>Remove</div>">Remove</option>
                                                        </select>
                                                    </div>
                                                    {/* End Select */}
                                                </div>
                                                {/* End Col */}
                                            </div>
                                            {/* End Row */}
                                        </div>
                                    </div>
                                </li>
                                {/* End Item */}
                                {/* Item */}
                                <li>
                                    <div className="d-flex">
                                        <div className="flex-shrink-0">
                                            <div className="avatar avatar-sm avatar-circle">
                                                <img className="avatar-img" src="./assets/img/160x160/img9.jpg" alt="Image Description" />
                                            </div>
                                        </div>
                                        <div className="flex-grow-1 ms-3">
                                            <div className="row align-items-center">
                                                <div className="col-sm">
                                                    <h5 className="text-body mb-0">Ella Lauda <i className="bi-patch-check-fill text-primary" data-bs-toggle="tooltip" data-bs-placement="top" title="Top endorsed" /></h5>
                                                    <span className="d-block fs-6">Markvt@site.com</span>
                                                </div>
                                                {/* End Col */}
                                                <div className="col-sm-auto">
                                                    {/* Select */}
                                                    <div className="tom-select-custom tom-select-custom-sm-end">
                                                        <select className="js-select form-select form-select-borderless tom-select-custom-form-select-invite-user tom-select-form-select-ps-0" autoComplete="off" data-hs-tom-select-options="{
                                            &quot;searchInDropdown&quot;: false,
                                            &quot;hideSearch&quot;: true,
                                            &quot;dropdownWidth&quot;: &quot;11rem&quot;
                                          }">
                                                            <option value="guest">Guest</option>
                                                            <option value="can edit" selected>Can edit</option>
                                                            <option value="can comment">Can comment</option>
                                                            <option value="full access">Full access</option>
                                                            <option value="remove" data-option-template="<div class=&quot;text-danger&quot;>Remove</div>">Remove</option>
                                                        </select>
                                                    </div>
                                                    {/* End Select */}
                                                </div>
                                                {/* End Col */}
                                            </div>
                                            {/* End Row */}
                                        </div>
                                    </div>
                                </li>
                                {/* End Item */}
                                {/* Item */}
                                <li>
                                    <div className="d-flex">
                                        <div className="flex-shrink-0">
                                            <span className="icon icon-soft-dark icon-sm icon-circle">
                                                <i className="bi-people-fill" />
                                            </span>
                                        </div>
                                        <div className="flex-grow-1 ms-3">
                                            <div className="row align-items-center">
                                                <div className="col-sm">
                                                    <h5 className="text-body mb-0">#conference</h5>
                                                    <span className="d-block fs-6">3 members</span>
                                                </div>
                                                {/* End Col */}
                                                <div className="col-sm-auto">
                                                    {/* Select */}
                                                    <div className="tom-select-custom tom-select-custom-sm-end">
                                                        <select className="js-select form-select form-select-borderless tom-select-custom-form-select-invite-user tom-select-form-select-ps-0" autoComplete="off" data-hs-tom-select-options="{
                                            &quot;searchInDropdown&quot;: false,
                                            &quot;hideSearch&quot;: true,
                                            &quot;dropdownWidth&quot;: &quot;11rem&quot;
                                          }">
                                                            <option value="guest">Guest</option>
                                                            <option value="can edit" selected>Can edit</option>
                                                            <option value="can comment">Can comment</option>
                                                            <option value="full access">Full access</option>
                                                            <option value="remove" data-option-template="<div class=&quot;text-danger&quot;>Remove</div>">Remove</option>
                                                        </select>
                                                    </div>
                                                    {/* End Select */}
                                                </div>
                                                {/* End Col */}
                                            </div>
                                            {/* End Row */}
                                        </div>
                                    </div>
                                </li>
                                {/* End Item */}
                            </ul>
                            {/* End List Group */}
                            {/* Form Switch */}
                            <label className="row form-check form-switch" htmlFor="addTeamPreferencesNewProjectSwitch1">
                                <span className="col-8 col-sm-9 ms-0">
                                    <i className="bi-bell text-primary me-2" />
                                    <span className="text-dark">Inform all project members</span>
                                </span>
                                <span className="col-4 col-sm-3 text-end">
                                    <input type="checkbox" className="form-check-input" id="addTeamPreferencesNewProjectSwitch1" defaultChecked />
                                </span>
                            </label>
                            {/* End Form Switch */}
                        </div>
                        {/* End Body */}
                        {/* Footer */}
                        <div className="modal-footer">
                            <div className="row align-items-center flex-grow-1 mx-n2">
                                <div className="col-sm-9 mb-2 mb-sm-0">
                                    <input type="hidden" id="publicShareLinkClipboard" defaultValue="https://themes.getbootstrap.com/product/front-multipurpose-responsive-template/" />
                                    <p className="modal-footer-text">The public share <a className="link" href="#">link settings</a>
                                        <i className="bi-question-circle" data-bs-toggle="tooltip" data-bs-placement="top" title="The public share link allows people to view the project without giving access to full collaboration features." />
                                    </p>
                                </div>
                                {/* End Col */}
                                <div className="col-sm-3 text-sm-end">
                                    <a className="js-clipboard btn btn-white btn-sm text-nowrap" href="javascript:;" data-bs-toggle="tooltip" data-bs-placement="top" title="Copy to clipboard!" data-hs-clipboard-options="{
                            &quot;type&quot;: &quot;tooltip&quot;,
                            &quot;successText&quot;: &quot;Copied!&quot;,
                            &quot;contentTarget&quot;: &quot;#publicShareLinkClipboard&quot;,
                            &quot;container&quot;: &quot;#shareWithPeopleModal&quot;
                           }">
                                        <i className="bi-link me-1" /> Copy link</a>
                                </div>
                                {/* End Col */}
                            </div>
                            {/* End Row */}
                        </div>
                        {/* End Footer */}
                    </div>
                </div>
            </div>
        </div>
    )
}

import React, { useEffect } from 'react'
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './assets/css/theme.min.css'
// import '../public/assets/vendor/bootstrap-icons/font/bootstrap-icons.css'
import './assets/css/style.css'
// import './assets/css/theme-dark.min.css'
import Sidebar from './Components/Sidebar'
import Navbar from './Components/Navbar'
import UserProfile from './pages/UserProfile/UserProfile'
import FooterOfPage from './Components/FooterOfPage'
import Teams from './pages/UserProfile/Teams'
import Projects from './pages/UserProfile/Projects'
import Connections from './pages/UserProfile/Connections'
import MyProfile from './pages/UserProfile/MyProfile'
import Overview from './pages/Users/Overview'
import Leaderboard from './pages/Users/Leaderboard'
import AddUser from './pages/Users/AddUser'
import Default from './pages/Dashboards/Default'
import ProjectOverview from './pages/Project/ProjectOverview'
import ProjectFiles from './pages/Project/ProjectFiles'
import ProjectActivity from './pages/Project/ProjectActivity'
import ProjectTeams from './pages/Project/ProjectTeams'
import ProjectSetting from './pages/Project/ProjectSetting'
import ProjectKanban from './pages/Project/ProjectKanban'
import Settings from './pages/Account/Settings'
import Billing from './pages/Account/Billing'
import Invoice from './pages/Account/Invoice'
import ProjectsOverview from './pages/projects/ProjectsOverview'
import Timeline from './pages/projects/Timeline'
import EcomOverview from './pages/Ecommerce/EcomOverview'
import EcommerceProducts from './pages/Ecommerce/Products/EcommerceProducts'
import EcommerceProductsDetails from './pages/Ecommerce/Products/EcommerceProductsDetails'
import EcommerceAddProduct from './pages/Ecommerce/Products/EcommerceAddProduct'
import Orders from './pages/Ecommerce/Orders/Orders'
import OrderDetails from './pages/Ecommerce/Orders/OrderDetails'
import Customer from './pages/Ecommerce/Customer/Customer'
import CustomerDetails from './pages/Ecommerce/Customer/CustomerDetails'
import AddCustomer from './pages/Ecommerce/Customer/AddCustomer'
import EcommRefferal from './pages/Ecommerce/EcommRefferal'
import EcomManageReviews from './pages/Ecommerce/EcomManageReviews'
import EcommCheckout from './pages/Ecommerce/EcommCheckout'
import SignIn from './pages/Authentication/SignIn'
import SignUp from './pages/Authentication/SignUp'
import ResetPassword from './pages/Authentication/ResetPassword'
import EmailVerification from './pages/Authentication/EmailVerification'
import TwostepVerification from './pages/Authentication/TwostepVerification'
import Error404 from './pages/Authentication/Error404'
import Error500 from './pages/Authentication/Error500'
import Kanban from './pages/Apps/Kanban'
import Calender from './pages/Apps/Calender'
import InvoiceGenerator from './pages/Apps/InvoiceGenerator'
import Filemanagement from './pages/Apps/Filemanagement'
import ProjectsKanban from './pages/projects/ProjectsKanban'
import Welcome from './pages/Welcome'
import ResetPasswordForm from './pages/Authentication/ResetPasswordForm'
import ProjectMembers from './pages/Project/ProjectMembers';
import Email from './pages/Settings/Email';

export default function App() {
  const token = localStorage.getItem("token");
  const noLayoutRoutes = ["/login", "/sign-up", "/reset-password", "/reset-password-form", "/email-verification", "/two-step-verification", "/error-404", "/error-500", "/welcome"];

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!token && window.location.pathname !== '/sign-up' && window.location.pathname !== '/reset-password' && window.location.pathname !== '/reset-password-form') {
      navigate("/login");
    }

  }, [token, navigate])

  const shouldHideLayout = noLayoutRoutes.includes(location.pathname); 

  return (
    <div>
      <ToastContainer />
      {!shouldHideLayout && <Navbar />}
      <div className={shouldHideLayout ? '' : 'main-grid'}>
        {!shouldHideLayout && <Sidebar />}
        <main id="content" role="main" className="main">
          <Routes>
            <Route path='/' element={<Default />} />
            <Route path='/overview' element={<Overview />} />
            <Route path='/leaderboard' element={<Leaderboard />} />
            <Route path='/add-user' element={<AddUser />} />
            <Route path='/profile/:id' element={<UserProfile />} />
            <Route path='/teams/:id' element={<Teams />} />
            <Route path='/projectss/:id' element={<Projects />} />
            <Route path='/connections/:id' element={<Connections />} />
            <Route path='/my-profile' element={<MyProfile />} />
            <Route path='/projects-overview' element={<ProjectsOverview />} />
            <Route path='/projects-timeline' element={<Timeline />} />
            <Route path='/projects-kanban' element={<ProjectsKanban />} />
            <Route path='/project-overview/:id' element={<ProjectOverview />} />
            <Route path='/project-files/:id' element={<ProjectFiles />} />
            <Route path='/project-activity/:id' element={<ProjectActivity />} />
            <Route path='/project-teams/:id' element={<ProjectTeams />} />
            <Route path='/project-kanban/:id' element={<ProjectKanban />} />
            <Route path='/project-setting/:id' element={<ProjectSetting />} />
            <Route path='/project-members/:id' element={<ProjectMembers />} />
            <Route path='/account-settings' element={<Settings />} />
            <Route path='/account-billing' element={<Billing />} />
            <Route path='/account-invoice' element={<Invoice />} />
            <Route path='/settings-email' element={<Email />} />
            <Route path='/ecommerce' element={<EcomOverview />} />
            <Route path='/ecommerce-products' element={<EcommerceProducts />} />
            <Route path='/ecommerce-products-details' element={<EcommerceProductsDetails />} />
            <Route path='/ecommerce-add-product' element={<EcommerceAddProduct />} />
            <Route path='/ecommerce-orders' element={<Orders />} />
            <Route path='/ecommerce-order-details' element={<OrderDetails />} />
            <Route path='/ecommerce-customer' element={<Customer />} />
            <Route path='/ecommerce-customer-details' element={<CustomerDetails />} />
            <Route path='/ecommerce-add-customer' element={<AddCustomer />} />
            <Route path='/ecommerce-referrals' element={<EcommRefferal />} />
            <Route path='/ecommerce-manage-reviews' element={<EcomManageReviews />} />
            <Route path='/ecommerce-checkout' element={<EcommCheckout />} />
            <Route path='/login' element={<SignIn />} />
            <Route path='/sign-up' element={<SignUp />} />
            <Route path='/reset-password' element={<ResetPassword />} />
            <Route path='/reset-password-form' element={<ResetPasswordForm />} />
            <Route path='/email-verification' element={<EmailVerification />} />
            <Route path='/two-step-verification' element={<TwostepVerification />} />
            <Route path='/kanban' element={<Kanban />} />
            <Route path='/calender' element={<Calender />} />
            <Route path='/invoice-generator' element={<InvoiceGenerator />} />
            <Route path='/file-management' element={<Filemanagement />} />
            <Route path='/error-404' element={<Error404 />} />
            <Route path='/error-500' element={<Error500 />} />
            <Route path='/welcome' element={<Welcome />} />
            <Route path='*' element={<Default />} />
          </Routes>
          {!shouldHideLayout && <FooterOfPage />}
        </main>
      </div>

      {/* Keyboard Shortcuts */}
      <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasKeyboardShortcuts" aria-labelledby="offcanvasKeyboardShortcutsLabel">
        <div className="offcanvas-header">
          <h4 id="offcanvasKeyboardShortcutsLabel" className="mb-0">Keyboard shortcuts</h4>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
        </div>
        <div className="offcanvas-body">
          <div className="list-group list-group-sm list-group-flush list-group-no-gutters mb-5">
            <div className="list-group-item">
              <h5 className="mb-1">Formatting</h5>
            </div>
            <div className="list-group-item">
              <div className="row align-items-center">
                <div className="col-5">
                  <span className="fw-semibold">Bold</span>
                </div>
                {/* End Col */}
                <div className="col-7 text-end">
                  <kbd className="d-inline-block mb-1">Ctrl</kbd> <span className="text-muted small">+</span> <kbd className="d-inline-block mb-1">b</kbd>
                </div>
              </div>
              {/* End Row */}
            </div>
            <div className="list-group-item">
              <div className="row align-items-center">
                <div className="col-5">
                  <em>italic</em>
                </div>
                {/* End Col */}
                <div className="col-7 text-end">
                  <kbd className="d-inline-block mb-1">Ctrl</kbd> <span className="text-muted small">+</span> <kbd className="d-inline-block mb-1">i</kbd>
                </div>
                {/* End Col */}
              </div>
              {/* End Row */}
            </div>
            <div className="list-group-item">
              <div className="row align-items-center">
                <div className="col-5">
                  <u>Underline</u>
                </div>
                {/* End Col */}
                <div className="col-7 text-end">
                  <kbd className="d-inline-block mb-1">Ctrl</kbd> <span className="text-muted small">+</span> <kbd className="d-inline-block mb-1">u</kbd>
                </div>
                {/* End Col */}
              </div>
              {/* End Row */}
            </div>
            <div className="list-group-item">
              <div className="row align-items-center">
                <div className="col-5">
                  <s>Strikethrough</s>
                </div>
                {/* End Col */}
                <div className="col-7 text-end">
                  <kbd className="d-inline-block mb-1">Ctrl</kbd> <span className="text-muted small">+</span> <kbd className="d-inline-block mb-1">Alt</kbd> <span className="text-muted small">+</span> <kbd className="d-inline-block mb-1">s</kbd>
                  {/* End Col */}
                </div>
              </div>
              {/* End Row */}
            </div>
            <div className="list-group-item">
              <div className="row align-items-center">
                <div className="col-5">
                  <span className="small">Small text</span>
                </div>
                {/* End Col */}
                <div className="col-7 text-end">
                  <kbd className="d-inline-block mb-1">Ctrl</kbd> <span className="text-muted small">+</span> <kbd className="d-inline-block mb-1">s</kbd>
                </div>
                {/* End Col */}
              </div>
              {/* End Row */}
            </div>
            <div className="list-group-item">
              <div className="row align-items-center">
                <div className="col-5">
                  <mark>Highlight</mark>
                </div>
                {/* End Col */}
                <div className="col-7 text-end">
                  <kbd className="d-inline-block mb-1">Ctrl</kbd> <span className="text-muted small">+</span> <kbd className="d-inline-block mb-1">e</kbd>
                </div>
                {/* End Col */}
              </div>
              {/* End Row */}
            </div>
          </div>
          <div className="list-group list-group-sm list-group-flush list-group-no-gutters mb-5">
            <div className="list-group-item">
              <h5 className="mb-1">Insert</h5>
            </div>
            <div className="list-group-item">
              <div className="row align-items-center">
                <div className="col-5">
                  <span>Mention person <a href="#">(@Brian)</a></span>
                </div>
                {/* End Col */}
                <div className="col-7 text-end">
                  <kbd className="d-inline-block mb-1">@</kbd>
                </div>
                {/* End Col */}
              </div>
              {/* End Row */}
            </div>
            <div className="list-group-item">
              <div className="row align-items-center">
                <div className="col-5">
                  <span>Link to doc <a href="#">(+Meeting notes)</a></span>
                </div>
                {/* End Col */}
                <div className="col-7 text-end">
                  <kbd className="d-inline-block mb-1">+</kbd>
                </div>
                {/* End Col */}
              </div>
              {/* End Row */}
            </div>
            <div className="list-group-item">
              <div className="row align-items-center">
                <div className="col-5">
                  <a href="#">#hashtag</a>
                </div>
                {/* End Col */}
                <div className="col-7 text-end">
                  <kbd className="d-inline-block mb-1">#hashtag</kbd>
                </div>
                {/* End Col */}
              </div>
              {/* End Row */}
            </div>
            <div className="list-group-item">
              <div className="row align-items-center">
                <div className="col-5">
                  <span>Date</span>
                </div>
                {/* End Col */}
                <div className="col-7 text-end">
                  <kbd className="d-inline-block mb-1">/date</kbd>
                  <kbd className="d-inline-block mb-1">Space</kbd>
                  <kbd className="d-inline-block mb-1">/datetime</kbd>
                  <kbd className="d-inline-block mb-1">/datetime</kbd>
                  <kbd className="d-inline-block mb-1">Space</kbd>
                </div>
                {/* End Col */}
              </div>
              {/* End Row */}
            </div>
            <div className="list-group-item">
              <div className="row align-items-center">
                <div className="col-5">
                  <span>Time</span>
                </div>
                {/* End Col */}
                <div className="col-7 text-end">
                  <kbd className="d-inline-block mb-1">/time</kbd>
                  <kbd className="d-inline-block mb-1">Space</kbd>
                </div>
                {/* End Col */}
              </div>
              {/* End Row */}
            </div>
            <div className="list-group-item">
              <div className="row align-items-center">
                <div className="col-5">
                  <span>Note box</span>
                </div>
                {/* End Col */}
                <div className="col-7 text-end">
                  <kbd className="d-inline-block mb-1">/note</kbd>
                  <kbd className="d-inline-block mb-1">Enter</kbd>
                  <kbd className="d-inline-block mb-1">/note red</kbd>
                  <kbd className="d-inline-block mb-1">/note red</kbd>
                  <kbd className="d-inline-block mb-1">Enter</kbd>
                </div>
                {/* End Col */}
              </div>
              {/* End Row */}
            </div>
          </div>
          <div className="list-group list-group-sm list-group-flush list-group-no-gutters mb-5">
            <div className="list-group-item">
              <h5 className="mb-1">Editing</h5>
            </div>
            <div className="list-group-item">
              <div className="row align-items-center">
                <div className="col-5">
                  <span>Find and replace</span>
                </div>
                {/* End Col */}
                <div className="col-7 text-end">
                  <kbd className="d-inline-block mb-1">Ctrl</kbd> <span className="text-muted small">+</span> <kbd className="d-inline-block mb-1">r</kbd>
                </div>
                {/* End Col */}
              </div>
              {/* End Row */}
            </div>
            <div className="list-group-item">
              <div className="row align-items-center">
                <div className="col-5">
                  <span>Find next</span>
                </div>
                {/* End Col */}
                <div className="col-7 text-end">
                  <kbd className="d-inline-block mb-1">Ctrl</kbd> <span className="text-muted small">+</span> <kbd className="d-inline-block mb-1">n</kbd>
                </div>
                {/* End Col */}
              </div>
              {/* End Row */}
            </div>
            <div className="list-group-item">
              <div className="row align-items-center">
                <div className="col-5">
                  <span>Find previous</span>
                </div>
                {/* End Col */}
                <div className="col-7 text-end">
                  <kbd className="d-inline-block mb-1">Ctrl</kbd> <span className="text-muted small">+</span> <kbd className="d-inline-block mb-1">p</kbd>
                </div>
                {/* End Col */}
              </div>
              {/* End Row */}
            </div>
            <div className="list-group-item">
              <div className="row align-items-center">
                <div className="col-5">
                  <span>Indent</span>
                </div>
                {/* End Col */}
                <div className="col-7 text-end">
                  <kbd className="d-inline-block mb-1">Tab</kbd>
                </div>
                {/* End Col */}
              </div>
              {/* End Row */}
            </div>
            <div className="list-group-item">
              <div className="row align-items-center">
                <div className="col-5">
                  <span>Un-indent</span>
                </div>
                {/* End Col */}
                <div className="col-7 text-end">
                  <kbd className="d-inline-block mb-1">Shift</kbd> <span className="text-muted small">+</span> <kbd className="d-inline-block mb-1">Tab</kbd>
                </div>
                {/* End Col */}
              </div>
              {/* End Row */}
            </div>
            <div className="list-group-item">
              <div className="row align-items-center">
                <div className="col-5">
                  <span>Move line up</span>
                </div>
                {/* End Col */}
                <div className="col-7 text-end">
                  <kbd className="d-inline-block mb-1">Ctrl</kbd> <span className="text-muted small">+</span> <kbd className="d-inline-block mb-1">Shift</kbd> <span className="text-muted small">+</span> <kbd className="d-inline-block mb-1"><i className="bi-arrow-up-short" /></kbd>
                </div>
                {/* End Col */}
              </div>
              {/* End Row */}
            </div>
            <div className="list-group-item">
              <div className="row align-items-center">
                <div className="col-5">
                  <span>Move line down</span>
                </div>
                {/* End Col */}
                <div className="col-7 text-end">
                  <kbd className="d-inline-block mb-1">Ctrl</kbd> <span className="text-muted small">+</span> <kbd className="d-inline-block mb-1">Shift</kbd> <span className="text-muted small">+</span> <kbd className="d-inline-block mb-1"><i className="bi-arrow-down-short fs-5" /></kbd>
                </div>
                {/* End Col */}
              </div>
              {/* End Row */}
            </div>
            <div className="list-group-item">
              <div className="row align-items-center">
                <div className="col-5">
                  <span>Add a comment</span>
                </div>
                {/* End Col */}
                <div className="col-7 text-end">
                  <kbd className="d-inline-block mb-1">Ctrl</kbd> <span className="text-muted small">+</span> <kbd className="d-inline-block mb-1">Alt</kbd> <span className="text-muted small">+</span> <kbd className="d-inline-block mb-1">m</kbd>
                </div>
                {/* End Col */}
              </div>
              {/* End Row */}
            </div>
            <div className="list-group-item">
              <div className="row align-items-center">
                <div className="col-5">
                  <span>Undo</span>
                </div>
                {/* End Col */}
                <div className="col-7 text-end">
                  <kbd className="d-inline-block mb-1">Ctrl</kbd> <span className="text-muted small">+</span> <kbd className="d-inline-block mb-1">z</kbd>
                </div>
                {/* End Col */}
              </div>
              {/* End Row */}
            </div>
            <div className="list-group-item">
              <div className="row align-items-center">
                <div className="col-5">
                  <span>Redo</span>
                </div>
                {/* End Col */}
                <div className="col-7 text-end">
                  <kbd className="d-inline-block mb-1">Ctrl</kbd> <span className="text-muted small">+</span> <kbd className="d-inline-block mb-1">y</kbd>
                </div>
                {/* End Col */}
              </div>
              {/* End Row */}
            </div>
          </div>
          <div className="list-group list-group-sm list-group-flush list-group-no-gutters">
            <div className="list-group-item">
              <h5 className="mb-1">Application</h5>
            </div>
            <div className="list-group-item">
              <div className="row align-items-center">
                <div className="col-5">
                  <span>Create new doc</span>
                </div>
                {/* End Col */}
                <div className="col-7 text-end">
                  <kbd className="d-inline-block mb-1">Ctrl</kbd> <span className="text-muted small">+</span> <kbd className="d-inline-block mb-1">Alt</kbd> <span className="text-muted small">+</span> <kbd className="d-inline-block mb-1">n</kbd>
                </div>
                {/* End Col */}
              </div>
              {/* End Row */}
            </div>
            <div className="list-group-item">
              <div className="row align-items-center">
                <div className="col-5">
                  <span>Present</span>
                </div>
                {/* End Col */}
                <div className="col-7 text-end">
                  <kbd className="d-inline-block mb-1">Ctrl</kbd> <span className="text-muted small">+</span> <kbd className="d-inline-block mb-1">Shift</kbd> <span className="text-muted small">+</span> <kbd className="d-inline-block mb-1">p</kbd>
                </div>
                {/* End Col */}
              </div>
              {/* End Row */}
            </div>
            <div className="list-group-item">
              <div className="row align-items-center">
                <div className="col-5">
                  <span>Share</span>
                </div>
                {/* End Col */}
                <div className="col-7 text-end">
                  <kbd className="d-inline-block mb-1">Ctrl</kbd> <span className="text-muted small">+</span> <kbd className="d-inline-block mb-1">Shift</kbd> <span className="text-muted small">+</span> <kbd className="d-inline-block mb-1">s</kbd>
                </div>
                {/* End Col */}
              </div>
              {/* End Row */}
            </div>
            <div className="list-group-item">
              <div className="row align-items-center">
                <div className="col-5">
                  <span>Search docs</span>
                </div>
                {/* End Col */}
                <div className="col-7 text-end">
                  <kbd className="d-inline-block mb-1">Ctrl</kbd> <span className="text-muted small">+</span> <kbd className="d-inline-block mb-1">Shift</kbd> <span className="text-muted small">+</span> <kbd className="d-inline-block mb-1">o</kbd>
                </div>
                {/* End Col */}
              </div>
              {/* End Row */}
            </div>
            <div className="list-group-item">
              <div className="row align-items-center">
                <div className="col-5">
                  <span>Keyboard shortcuts</span>
                </div>
                {/* End Col */}
                <div className="col-7 text-end">
                  <kbd className="d-inline-block mb-1">Ctrl</kbd> <span className="text-muted small">+</span> <kbd className="d-inline-block mb-1">Shift</kbd> <span className="text-muted small">+</span> <kbd className="d-inline-block mb-1">/</kbd>
                </div>
                {/* End Col */}
              </div>
              {/* End Row */}
            </div>
          </div>
        </div>
      </div>
      {/* End Keyboard Shortcuts */}
      {/* Activity */}
      <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasActivityStream" aria-labelledby="offcanvasActivityStreamLabel">
        <div className="offcanvas-header">
          <h4 id="offcanvasActivityStreamLabel" className="mb-0">Activity stream</h4>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
        </div>
        <div className="offcanvas-body">
          {/* Step */}
          <ul className="step step-icon-sm step-avatar-sm">
            {/* Step Item */}
            <li className="step-item">
              <div className="step-content-wrapper">
                <div className="step-avatar">
                  <img className="step-avatar" src="./assets/img/160x160/img9.jpg" alt="Image Description" />
                </div>
                <div className="step-content">
                  <h5 className="mb-1">Iana Robinson</h5>
                  <p className="fs-5 mb-1">Added 2 files to task <a className="text-uppercase" href="#"><i className="bi-journal-bookmark-fill" /> Fd-7</a></p>
                  <ul className="list-group list-group-sm">
                    {/* List Item */}
                    <li className="list-group-item list-group-item-light">
                      <div className="row gx-1">
                        <div className="col-6">
                          {/* Media */}
                          <div className="d-flex">
                            <div className="flex-shrink-0">
                              <img className="avatar avatar-xs" src="./assets/svg/brands/excel-icon.svg" alt="Image Description" />
                            </div>
                            <div className="flex-grow-1 text-truncate ms-2">
                              <span className="d-block fs-6 text-dark text-truncate" title="weekly-reports.xls">weekly-reports.xls</span>
                              <span className="d-block small text-muted">12kb</span>
                            </div>
                          </div>
                          {/* End Media */}
                        </div>
                        {/* End Col */}
                        <div className="col-6">
                          {/* Media */}
                          <div className="d-flex">
                            <div className="flex-shrink-0">
                              <img className="avatar avatar-xs" src="./assets/svg/brands/word-icon.svg" alt="Image Description" />
                            </div>
                            <div className="flex-grow-1 text-truncate ms-2">
                              <span className="d-block fs-6 text-dark text-truncate" title="weekly-reports.xls">weekly-reports.xls</span>
                              <span className="d-block small text-muted">4kb</span>
                            </div>
                          </div>
                          {/* End Media */}
                        </div>
                        {/* End Col */}
                      </div>
                      {/* End Row */}
                    </li>
                    {/* End List Item */}
                  </ul>
                  <span className="small text-muted text-uppercase">Now</span>
                </div>
              </div>
            </li>
            {/* End Step Item */}
            {/* Step Item */}
            <li className="step-item">
              <div className="step-content-wrapper">
                <span className="step-icon step-icon-soft-dark">B</span>
                <div className="step-content">
                  <h5 className="mb-1">Bob Dean</h5>
                  <p className="fs-5 mb-1">Marked <a className="text-uppercase" href="#"><i className="bi-journal-bookmark-fill" /> Fr-6</a> as <span className="badge bg-soft-success text-success rounded-pill"><span className="legend-indicator bg-success" />"Completed"</span></p>
                  <span className="small text-muted text-uppercase">Today</span>
                </div>
              </div>
            </li>
            {/* End Step Item */}
            {/* Step Item */}
            <li className="step-item">
              <div className="step-content-wrapper">
                <div className="step-avatar">
                  <img className="step-avatar-img" src="./assets/img/160x160/img3.jpg" alt="Image Description" />
                </div>
                <div className="step-content">
                  <h5 className="h5 mb-1">Crane</h5>
                  <p className="fs-5 mb-1">Added 5 card to <a href="#">Payments</a></p>
                  <ul className="list-group list-group-sm">
                    <li className="list-group-item list-group-item-light">
                      <div className="row gx-1">
                        <div className="col">
                          <img className="img-fluid rounded" src="./assets/svg/components/card-1.svg" alt="Image Description" />
                        </div>
                        <div className="col">
                          <img className="img-fluid rounded" src="./assets/svg/components/card-2.svg" alt="Image Description" />
                        </div>
                        <div className="col">
                          <img className="img-fluid rounded" src="./assets/svg/components/card-3.svg" alt="Image Description" />
                        </div>
                        <div className="col-auto align-self-center">
                          <div className="text-center">
                            <a href="#">+2</a>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <span className="small text-muted text-uppercase">May 12</span>
                </div>
              </div>
            </li>
            {/* End Step Item */}
            {/* Step Item */}
            <li className="step-item">
              <div className="step-content-wrapper">
                <span className="step-icon step-icon-soft-info">D</span>
                <div className="step-content">
                  <h5 className="mb-1">David Lidell</h5>
                  <p className="fs-5 mb-1">Added a new member to Front Dashboard</p>
                  <span className="small text-muted text-uppercase">May 15</span>
                </div>
              </div>
            </li>
            {/* End Step Item */}
            {/* Step Item */}
            <li className="step-item">
              <div className="step-content-wrapper">
                <div className="step-avatar">
                  <img className="step-avatar-img" src="./assets/img/160x160/img7.jpg" alt="Image Description" />
                </div>
                <div className="step-content">
                  <h5 className="mb-1">Rachel King</h5>
                  <p className="fs-5 mb-1">Marked <a className="text-uppercase" href="#"><i className="bi-journal-bookmark-fill" /> Fr-3</a> as <span className="badge bg-soft-success text-success rounded-pill"><span className="legend-indicator bg-success" />"Completed"</span></p>
                  <span className="small text-muted text-uppercase">Apr 29</span>
                </div>
              </div>
            </li>
            {/* End Step Item */}
            {/* Step Item */}
            <li className="step-item">
              <div className="step-content-wrapper">
                <div className="step-avatar">
                  <img className="step-avatar-img" src="./assets/img/160x160/img5.jpg" alt="Image Description" />
                </div>
                <div className="step-content">
                  <h5 className="mb-1">Finch Hoot</h5>
                  <p className="fs-5 mb-1">Earned a "Top endorsed" <i className="bi-patch-check-fill text-primary" /> badge</p>
                  <span className="small text-muted text-uppercase">Apr 06</span>
                </div>
              </div>
            </li>
            {/* End Step Item */}
            {/* Step Item */}
            <li className="step-item">
              <div className="step-content-wrapper">
                <span className="step-icon step-icon-soft-primary">
                  <i className="bi-person-fill" />
                </span>
                <div className="step-content">
                  <h5 className="mb-1">Project status updated</h5>
                  <p className="fs-5 mb-1">Marked <a className="text-uppercase" href="#"><i className="bi-journal-bookmark-fill" /> Fr-3</a> as <span className="badge bg-soft-primary text-primary rounded-pill"><span className="legend-indicator bg-primary" />"In progress"</span></p>
                  <span className="small text-muted text-uppercase">Feb 10</span>
                </div>
              </div>
            </li>
            {/* End Step Item */}
          </ul>
          {/* End Step */}
          <div className="d-grid">
            <a className="btn btn-white" href="javascript:;">View all <i className="bi-chevron-right" /></a>
          </div>
        </div>
      </div>
      {/* End Activity */}
      {/* Welcome Message Modal */}
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
    </div>
  )
}

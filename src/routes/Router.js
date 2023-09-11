import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { PATHS } from '../data/constant'
import Home from '../pages/Home'
import About from '../pages/About'
import Treatments from '../pages/Treatments'
import Sessions from '../pages/Sessions'
import Gallery from '../pages/Gallery'
import Program from '../pages/Program'
import Blogs from '../pages/Blogs'
import BlogDetails from '../pages/Blog_Details'
import Updates from '../pages/Updates'
import Contact from '../pages/Contact'
import PrivacyPolicy from '../pages/PrivacyPolicy'
import Terms from '../pages/Terms'

const Router = () => {
  return (
    <Routes>
      <Route path={PATHS.HOME_PATH} Component={Home} />
      <Route path={PATHS.HOME_PAGE} Component={Home} />
      <Route path={PATHS.ABOUT_US_PAGE} Component={About} />
      <Route path={PATHS.TREATMENTS_PAGE} Component={Treatments} />
      <Route path={PATHS.SESSIONS_PAGE} Component={Sessions} />
      <Route path={PATHS.GALLERY_PAGE} Component={Gallery} />
      <Route path={PATHS.PROGRAM_PAGE} Component={Program} />
      <Route path={PATHS.BLOGS_PAGE} Component={Blogs} />
      <Route path={PATHS.BLOG_DETAILS_PAGE} Component={BlogDetails} />
      <Route path={PATHS.UPDATES_PAGE} Component={Updates} />
      <Route path={PATHS.CONTACT_PAGE} Component={Contact} />
      <Route path={PATHS.PRIVACY_POLICY_PAGE} Component={PrivacyPolicy} />
      <Route path={PATHS.TERMS_CONDITIONS_PAGE} Component={Terms} />
    </Routes>
  )
}

export default Router

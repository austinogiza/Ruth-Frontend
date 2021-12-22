import React, { Fragment, lazy, Suspense } from "react"
import ScrollToTop from "components/ScrollTop"
import Layout from "container/Layout"

import { BrowserRouter, Routes, Route } from "react-router-dom"
import PageLoading from "components/PageLoading"

//code splitting routes
const About = lazy(() => import("pages/About"))
const Contact = lazy(() => import("pages/Contact"))
const Home = lazy(() => import("pages/Home"))
const WorkDetails = lazy(() => import("pages/WorkDetails"))
const Work = lazy(() => import("pages/Works"))
const NotFound = lazy(() => import("pages/404"))
const App = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Layout>
          <ScrollToTop />
          <Suspense fallback={<PageLoading />}>
            <Routes>
              <Route element={<Home />} path="/" />
              <Route element={<About />} path="/about" />
              <Route element={<Work />} path="/works" />
              <Route element={<WorkDetails />} path="/work/:slug" />
              <Route element={<Contact />} path="/contact" />
              <Route element={<NotFound />} path="*" />
            </Routes>
          </Suspense>
        </Layout>
      </BrowserRouter>
    </Fragment>
  )
}

export default App

import React, { Fragment, useEffect } from "react"
import Layout from "container/Layout"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "pages/Home"
import About from "pages/About"
import Work from "pages/Works"
import WorkDetails from "pages/WorkDetails"
import Contact from "pages/Contact"
import NotFound from "pages/404"
import ScrollToTop from "components/ScrollTop"
import gsap from "gsap"
const App = () => {
  useEffect(() => {
    gsap.to("body", 0, { css: { visibility: "visible" } })
  }, [])
  return (
    <Fragment>
      <BrowserRouter>
        <Layout>
          <ScrollToTop />
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<About />} path="/about" />
            <Route element={<Work />} path="/works" />
            <Route element={<WorkDetails />} path="/work/:slug" />
            <Route element={<Contact />} path="/contact" />
            <Route element={<NotFound />} path="*" />
          </Routes>
        </Layout>
      </BrowserRouter>
    </Fragment>
  )
}

export default App

import React, { Fragment, useEffect, Suspense } from "react"
import Layout from "container/Layout"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import loadable from "@loadable/component"
import ScrollToTop from "components/ScrollTop"
import gsap from "gsap"
import PageTransition from "components/PageTransition"
const Home = loadable(() => import(/* webpackPrefetch:true */ "pages/Home"))
const About = loadable(() => import(/* webpackPrefetch:true */ "pages/About"))
const Work = loadable(() => import(/* webpackPrefetch:true */ "pages/Works"))
const WorkDetails = loadable(
  () => import(/* webpackPrefetch:true */ "pages/WorkDetails")
)
const Contact = loadable(
  () => import(/* webpackPrefetch:true */ "pages/Contact")
)
const NotFound = loadable(() => import(/* webpackPrefetch:true */ "pages/404"))

const App = () => {
  useEffect(() => {
    gsap.to("body", 0, { css: { visibility: "visible" } })
  }, [])
  return (
    <Fragment>
      <BrowserRouter>
        <Layout>
          <ScrollToTop />
          <Suspense fallback={<PageTransition />}>
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

export default React.memo(App)

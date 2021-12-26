import React, { Fragment } from "react"
import ScrollToTop from "components/ScrollTop"
import Layout from "container/Layout"
import { QueryClient, QueryClientProvider } from "react-query"
import { BrowserRouter, Routes, Route } from "react-router-dom"
// import PageLoading from "components/PageLoading"
import Home from "pages/Home"
import About from "pages/About"
import Work from "pages/Works"
import WorkDetails from "pages/WorkDetails"
import Contact from "pages/Contact"
import NotFound from "pages/404"

const App = () => {
  const client = new QueryClient()
  return (
    <Fragment>
      <QueryClientProvider client={client}>
        <BrowserRouter>
          <Layout>
            <ScrollToTop />
            {/* <Suspense fallback={<PageLoading />}> */}
            <Routes>
              <Route element={<Home />} path="/" />
              <Route element={<About />} path="/about" />
              <Route element={<Work />} path="/works" />
              <Route element={<WorkDetails />} path="/work/:slug" />
              <Route element={<Contact />} path="/contact" />
              <Route element={<NotFound />} path="*" />
            </Routes>
            {/* </Suspense> */}
          </Layout>
        </BrowserRouter>
      </QueryClientProvider>
    </Fragment>
  )
}

export default App

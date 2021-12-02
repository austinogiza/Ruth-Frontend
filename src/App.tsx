import ScrollToTop from "components/ScrollTop";
import Layout from "container/Layout";
import About from "pages/about";
import Contact from "pages/contact";
import Home from "pages/Home";
import WorkDetails from "pages/WorkDetails";
import Work from "pages/Works";
import React, { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Layout>
          <ScrollToTop />
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<About />} path="/about" />
            <Route element={<Work />} path="/work" />
            <Route element={<WorkDetails />} path="/work/:slug" />
            <Route element={<Contact />} path="/contact" />
            <Route element={<Home />} path="*" />
          </Routes>
        </Layout>
      </BrowserRouter>
    </Fragment>
  );
};

export default App;

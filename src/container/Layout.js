import Footer from "components/Footer"
import Message from "components/Message"

import React from "react"

const Layout = ({ children }) => {
  return (
    <>
      {children}
      <Message />
      <Footer />
    </>
  )
}

export default Layout

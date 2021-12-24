import Footer from "components/Footer"
import Message from "components/Message"
import Navbar from "components/Navbar"
import React from "react"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Message />
      <Footer />
    </>
  )
}

export default Layout

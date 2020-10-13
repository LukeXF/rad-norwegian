import React from "react"

// import SEO from '@components/SEO';
import Navigation from "@components/Navigation"
import Footer from '@components/Footer';

// main site style
import "@styles/style.scss"

const Layout = ({ children, className = "" }) => {
  return (
    <div className={`app ${className}`}>
      {/*<SEO/>*/}
      <Navigation/>
      <main>
        <div>{children}</div>
        <Footer/>
      </main>
    </div>
  )
}


export default Layout

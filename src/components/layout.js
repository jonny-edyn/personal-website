import * as React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <div className="site-shell" data-is-root-path={isRootPath}>
      <div className="site-glow site-glow-left" aria-hidden="true" />
      <div className="site-glow site-glow-right" aria-hidden="true" />
      <div className="global-wrapper">
        <header className="global-header">
          <Link
            className={isRootPath ? "header-home" : "header-link-home"}
            to="/"
          >
            {title}
          </Link>
          <nav className="header-nav" aria-label="Primary">
            <Link to="/">Home</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/about-me">About</Link>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="site-footer">
          © {new Date().getFullYear()}, Built with Gatsby in London
          <span className="site-footer-version">Version 2.0</span>
        </footer>
      </div>
    </div>
  )
}

export default Layout

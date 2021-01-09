import React from 'react'
import { Link } from 'gatsby'
import { rhythm, scale } from '../utils/typography'
import Search from "./search"

const searchIndices = [{ name: `turtlerabbit`, title: `turtlerabbit` }]

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            ...scale(1.3),
            marginBottom: rhythm(0.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
            marginBottom: rhythm(0),
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color:`steelblue`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(30),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        {header}
        <Search indices={searchIndices} />
        {children}
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">gatsby</a>
          {`, `}
          <a href="https://www.algolia.com">algolia</a>
          {`, `}
          <a href="https://mdxjs.com/">mdx</a>
          {`, `}
          <a href="https://github.com/kyleamathews/typography.js/">typography.js</a>
          {`, `}
          <a href="https://turtlerabbit.github.io/">github</a>
        </footer>
      </div>
    )
  }
}

export default Layout
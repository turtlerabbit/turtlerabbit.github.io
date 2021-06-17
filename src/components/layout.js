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
            ...scale(1.18),
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
          maxWidth: rhythm(33),
          padding: `${rhythm(1.5)} ${rhythm(3 / 20)}`,
        }}
      >
        {header}
        <Search indices={searchIndices} />
        {children}
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <Link style={{ boxShadow: `none`, color:`dimgray`, textDecoration: `none`,}} to={'https://www.gatsbyjs.org'}>
            gatsby
          </Link>
          {`, `}
          <Link style={{ boxShadow: `none`, color:`dimgray`, textDecoration: `none`,}} to={'https://www.algolia.com'}>
          algolia
          </Link>
          {`, `}
          <Link style={{ boxShadow: `none`, color:`dimgray`, textDecoration: `none`,}} to={'https://mdxjs.com/'}>
          mdx
          </Link>
          {`, `}
          <Link style={{ boxShadow: `none`, color:`dimgray`, textDecoration: `none`,}} to={'https://github.com/kyleamathews/typography.js/'}>
          typography.js
          </Link>
          {`, `}
          <Link style={{ boxShadow: `none`, color:`dimgray`, textDecoration: `none`,}} to={'https://turtlerabbit.github.io/'}>
          github
          </Link>
        </footer>
      </div>
    )
  }
}

export default Layout
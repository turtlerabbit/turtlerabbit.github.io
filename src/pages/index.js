import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import { rhythm } from '../utils/typography'

class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = `TurtleRabbit Archive`
    const posts = data.allMdx.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <div key={node.fields.slug}>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <Link style={{ boxShadow: `none`, color:`dodgerblue`}} to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <small>{node.frontmatter.date}</small>
              <p dangerouslySetInnerHTML={{ __html: node.excerpt }} style={{ marginBottom: rhythm(1.5) }} />
            </div>
          )
        })}
      </Layout>
    )
  }
}

export default IndexPage

export const pageQuery = graphql`
query {
  allMdx(sort: {fields: frontmatter___date, order: DESC}) {
    edges {
      node {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          tag
        }
      }
    }
  }
}
`
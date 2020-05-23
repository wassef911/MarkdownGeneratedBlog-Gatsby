import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"

import SEO from "../components/seo"

export default ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <div>
      <h1>Wassef 911</h1>
      <h4>data.allMarkdownRemark.totalCount</h4>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <span>
            {node.frontmatter.title}-{node.frontmatter.date}
          </span>
          <p>node.html</p>
        </div>
      ))}
    </div>
  </Layout>
)

export const query = graphql`
  query MyQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            description
            title
            date
          }
          html
        }
      }
    }
  }
`

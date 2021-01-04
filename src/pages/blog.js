import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

const BlogPage = ({ data }) => (
  <Layout>
    <div>
      <h1 className="text-2xl py-10">Latest Posts</h1>
      {data.allMarkdownRemark.edges.map(post => (
        <div
          className="border-2 border-gray-700 flex flex-col items-center justify-evenly mb-5"
          key={post.node.id}
        >
          <h3 className="text-xl pt-5">{post.node.frontmatter.title}</h3>
          <p className="text-sm">
            Posted by {post.node.frontmatter.author} on{" "}
            {post.node.frontmatter.date}
          </p>
          <br />
          <br />
          <div dangerouslySetInnerHTML={{ __html: post.node.html }} />
          <br />
          <br />
          <hr />
        </div>
      ))}
    </div>
  </Layout>
)
//query to bring in data using graphql creates an array node[id,html,[frontmatter[path,title,date.author]]
export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          html
          frontmatter {
            path
            title
            date
            author
          }
        }
      }
    }
  }
`
export default BlogPage

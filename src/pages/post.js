import React from "react"
import Card from "../components/Card"
import SEO from "../components/seo"
import Navbar from "../components/Navbar"
import { graphql } from "gatsby"
import Layout from "../components/layout"

const Post = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges.map(edge => <Card post={edge.node} />)
  console.log(edges)
  return (
    <Layout isTransparent={false}>
      <SEO title="Blogs" />
      <div className="container h-40 mx-auto flex items-center content-center mt-2 lg:mt-40">
        <h1 className="font-head text-gray-800 max-w-md leading-relaxed p-6">
          It’s just a bad day. <br />
          Not a bad life
        </h1>
      </div>
      <div className="container mx-auto p-2 flex flex-wrap">{Posts}</div>
    </Layout>
  )
}

export default Post
export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
      edges {
        node {
          frontmatter {
            path
            title
            date(formatString: "MMMM DD YYYY")
            thumbnail
          }
          id
          excerpt(pruneLength: 256)
        }
      }
    }
  }
`

console.log(pageQuery)

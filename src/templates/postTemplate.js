import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

const PostTemplate = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  return (
    <Layout isTransparent={true}>
      <div className="blog-post-container">
        <div className="relative h-screen flex items-center">
          <div className="container mx-auto z-50">
            <div className="text-white px-3">
              <h1 className="font-bold lg:text-5xl sm:text-4xl text-4xl max-w-lg mb-8 tracking-wide">
                {frontmatter.title}
              </h1>
              <h4>{frontmatter.date}</h4>
            </div>
          </div>
          <div
            className="w-full h-screen absolute top-0 bg-no-repeat bg-cover"
            style={{ backgroundImage: `url(${frontmatter.thumbnail})` }}
          ></div>
          <div className="w-full h-screen absolute top-0 bg-black opacity-50"></div>
        </div>
        <div
          className="container mx-auto my-40"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        thumbnail
      }
    }
  }
`

export default PostTemplate

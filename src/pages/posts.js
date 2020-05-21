import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const PostsPage = () => (
  <Layout>
    <SEO title="Posts" />
    <h1>Posts</h1>
    <p>Here is a page containing all of the posts.</p>
  </Layout>
)

export default PostsPage
import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>Sorry</h1>
    <p>The page you are trying to access does not exist.
    <br/><br/>This might be because you have entered the web address incorrectly or the page has moved.
    <br/><br/>We apologise for any inconvenience.
    </p>
  </Layout>
)

export default NotFoundPage

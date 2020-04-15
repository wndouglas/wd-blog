import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="Contact" />
    <h1>Contact</h1>
    <p>This page contains contact details.</p>
    <Link to="/">Go home</Link>
  </Layout>
)

export default AboutPage

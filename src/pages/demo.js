import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"


const DemoPage = () => (
  <Layout>
    <SEO title="Demo" />
    <h1>Demo</h1>
    <p>Welcome to Demo</p>
    <Link to="/home">Go back to the homepage</Link>
  </Layout>
)

export default DemoPage

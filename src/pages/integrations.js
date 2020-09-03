import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"


const IntegrationsPage = () => (
  <Layout>
    <SEO title="Integrations" />
    <h1>Integrations</h1>
    <p>Welcome to Integrations</p>
    <Link to="/home">Go back to the homepage</Link>
  </Layout>
)

export default IntegrationsPage

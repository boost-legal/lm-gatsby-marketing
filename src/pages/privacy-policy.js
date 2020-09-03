import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"


const PrivacyPolicyPage = () => (
  <Layout>
    <SEO title="PrivacyPolicy" />
    <h1>PrivacyPolicy</h1>
    <p>Welcome to PrivacyPolicy</p>
    <Link to="/home">Go back to the homepage</Link>
  </Layout>
)

export default PrivacyPolicyPage

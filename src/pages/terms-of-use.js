import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"


const TermsOfUsePage = () => (
  <Layout>
    <SEO title="TermsOfUse" />
    <h1>TermsOfUse</h1>
    <p>Welcome to TermsOfUse</p>
    <Link to="/home">Go back to the homepage</Link>
  </Layout>
)

export default TermsOfUsePage

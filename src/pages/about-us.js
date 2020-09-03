import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"


const AboutUsPage = () => (
  <Layout>
    <SEO title="AboutUs" />
    <h1>AboutUs</h1>
    <p>Welcome to AboutUs</p>
    <Link to="/home">Go back to the homepage</Link>
  </Layout>
)

export default AboutUsPage

import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"


const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <h1>Contact</h1>
    <p>Welcome to Contact</p>
    <Link to="/home">Go back to the homepage</Link>
  </Layout>
)

export default ContactPage

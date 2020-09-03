import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const PricingPage = () => (
  <Layout>
    <SEO title="Pricing" />
    <h1>Pricing</h1>
    <p>Welcome to Pricing</p>
    <Link to="/home">Go back to the homepage</Link>
  </Layout>
);

export default PricingPage;

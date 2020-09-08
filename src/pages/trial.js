import React from 'react';

import Link from '../components/link';
import Layout from '../components/layout';
import SEO from '../components/seo';

const TrialPage = () => (
  <Layout>
    <SEO title="Trial" />
    <h1>Trial</h1>
    <p>Welcome to Trial</p>
    <Link to="/home">Go back to the homepage</Link>
  </Layout>
);

export default TrialPage;

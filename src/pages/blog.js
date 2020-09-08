import React from 'react';

import Link from '../components/link';
import Layout from '../components/layout';
import SEO from '../components/seo';

const BlogPage = () => (
  <Layout>
    <SEO title="Blog" />
    <h1>Blog</h1>
    <p>Welcome to Blog</p>
    <Link to="/home">Go back to the homepage</Link>
  </Layout>
);

export default BlogPage;

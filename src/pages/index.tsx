import React, { JSX } from 'react';
import Layout from '@theme/Layout';
import HomepageFeatures from '../components/HomepageFeatures';
import ServerSpecs from '../components/Specs';

export default function Home(): JSX.Element {
  return (
    <Layout title="Welcome to PUG Docs" description="PUG is playful, useful, and genius">
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}

import Head from 'next/head'
import React from 'react'
import Layout from '../components/layout'

export default function People() {
  return (
    <Layout title="People">
      <Head>
        <title>People - BoniLab</title>
      </Head>
      <div>        
        <h1>This is People page</h1>
      </div>
    </Layout>
  )
}

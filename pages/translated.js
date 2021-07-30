import Head from 'next/head'
import React from 'react'
import Layout from '../components/layout'

export default function Publications() {
  return (
    <Layout title="Bài Báo Khoa Học">
      <Head>
        <title>Bài Báo Khoa Học | Boni Lab</title>
      </Head>
      <div>        
        <em>Below is a list of publications that we have translated into Vietnamese for our partners at the Vietnamese Ministry of Health, the National Institutes of Hygiene and Epidemiology, and the Hospital for Tropical Diseases in Ho Chi Minh City.</em>
      </div>
    </Layout>
  )
}

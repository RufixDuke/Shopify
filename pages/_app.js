import '../styles/globals.css'
import Layout from '../components/Layout/Layout'
import { Component } from 'react'

function MyApp({ pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
    </Layout>
    </>
    
  )
}

export default MyApp

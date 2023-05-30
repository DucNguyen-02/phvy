import React from 'react'
import '../globals.css'
import Header from './Header'
import Fotoer from './Footer'
import Head from 'next/head'

const MainLayout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Panasonic Admin</title>
        <meta name="description" content="Panasonic" />
      </Head>
      <div>
        <Header />
        {children}
        <Fotoer />
      </div>
    </>
  )
}

export default MainLayout

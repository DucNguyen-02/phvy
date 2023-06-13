import React, { useEffect } from 'react'
import '../globals.css'
import Header from './Header'
import Fotoer from './Footer'
import Head from 'next/head'
import StorageUtil, { STORAGE_KEY } from '../util/storage'
import Router from 'next/router'

const MainLayout = ({ children }) => {
  useEffect(() => {
    const role = StorageUtil.get(STORAGE_KEY.ROLE)
    if (!role) {
      Router.push('/login')
    }
  }, [])

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

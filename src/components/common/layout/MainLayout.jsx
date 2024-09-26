import React from 'react'
import Header from '../../Header'
import Footer from '../../Footer'

export default function MainLayout({children}) {
  return (
    <div className='min-h-full'>
        <Header />
        {children}
        <Footer />
    </div>
  )
}

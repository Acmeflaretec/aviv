import React from 'react'
import Header from '../../components/header/Header'
import Banner from '../../components/banner/Banner'
import HomeProducts from '../../components/homeproducts/HomeProducts'
import HomeAbout from '../../components/homeabout/HomeAbout'
import HomeBanner from '../../components/homebanner/HomeBanner'
import Footer from '../../components/footer/Footer'
import HomeContact from '../../components/homecontact/HomeContact'

function Home() {
  return (
    <div>
        <Header/>
        <Banner/>
        <HomeProducts/>
        <HomeAbout/>
        <HomeBanner/>
        <HomeContact/>
        <Footer/>
    </div>
  )
}

export default Home
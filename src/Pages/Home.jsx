import React from 'react'
// import Header from '../components/Header/Header'
import Instagram from '../components/Instagram/Instagram'
import KitabSetleri from '../components/KitabSetleri/KitabSetleri'
import KitabTurleri from '../components/KitabTurleri/KitabTurleri'
import Language from '../components/Language/Language'
import Publisher from '../components/Publisher/Publisher'
import SalesBook from '../components/SalesBook/SalesBook'
import Sifaris from '../components/Sifaris/Sifaris'
import Slider from '../components/Slider/Slider'
import Stocks from '../components/Stocks/Stocks'
import Category from '../components/Category/Category'

const Home = () => {
  return (
    <div>
        <Slider/>
        <Category />
        <Publisher />
        {/* <YayinEvi /> */}
        <Language />
        <KitabTurleri />
        <KitabSetleri />
        <SalesBook />
        <Stocks />
        <Sifaris />
        <Instagram />
    </div>
  )
}

export default Home
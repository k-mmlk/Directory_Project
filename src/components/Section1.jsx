import React from 'react'
import Header from './Header'
import HeaderSpacer from './HeaderSpacer'
import HeroSection from './HeroSection'
import Feature from './Feature'

const Section1 = () => {
  return (
    <section className="bg-gray-100" >
        <Header/>
        <HeaderSpacer/>
        <HeroSection/>
        <Feature/>
    </section>
  )
}

export default Section1
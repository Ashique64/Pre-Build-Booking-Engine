import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import Hero from '../../components/Hero/Hero'
import Categories from '../../components/Categories/Categories'
import Popular_Destination from '../../components/Popular_Destination/Popular_Destination'
import NavBar2 from '../../components/NavBar2/NavBar2'

const Home = () => {
  return (
    <>
    <NavBar/>
    <Hero/>
    <Categories/>
    <Popular_Destination/>
    </>
  )
}

export default Home
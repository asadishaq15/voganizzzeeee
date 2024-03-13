import { useState } from 'react'

import './App.css'
import Header from './Components/Header/header'
import Footer from './Components/Footer/footer'
import PortfolioStats from './Components/PortfolioStats/PortfolioStats'
import PortableSoftware from './Components/PortableSoftware/portableSoftware'
import ToolCategories from './Components/ToolCategories/toolCategories'
import WorkingProcess from './Components/WorkingProcess/workingProcess'
import Categories from './Components/Categories/categories'
import Hero from './Components/Hero/hero'
import ImproveContainers from './Components/ImproveBusiness/improveBusiness'
import DiverseTool from './Components/DiverseTool/diverseTool'
import Testimonials from './Components/Testimonials/testimonials'

function App() {

  return (
    <>
    <Header/>
    <Hero/>
    <Categories/>
    <DiverseTool/>
    <PortfolioStats/>
    <PortableSoftware/>
    <ToolCategories/>
    <WorkingProcess/>
    <Testimonials/>
    <ImproveContainers/>
    <Footer/>
    </>
  )
}

export default App

import React from 'react'
import About from './component/about'
import Hero from './component/hero'
import Welcome from './component/welcome'
import Question from './component/questions'
import Statistics from './component/statistics'
import Nav from './component/Nav'
import Pagefooter from './component/Pagefooter'
import Layout from './component/Layout'
function App() {
  
  return (

    

    <div className=''>
      <Layout>
        <Hero />
        <About />
        <Welcome />
        <Statistics />
        <Question />
      </Layout>
        
        {/* <Pagefooter /> */}
  </div>
   
  )
}

export default App
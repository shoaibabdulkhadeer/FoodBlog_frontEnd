import React from 'react'
import {Routes,Route} from 'react-router-dom'
import HomePage from '../components/HomePage'
import Navbar from '../components/Navbar'
import About from './About'
import Foods from '../components/Foods'
import Lifestyle from './Lifestyle'
import Contact from './Contact'
import Footer from './Footer'


const Home = () => {
  return (
    <div>

      <Navbar />
         <Routes> 
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/foods" element={<Foods />} />
            <Route path="/lifestyle" element={<Lifestyle />} />
            <Route path="/contact" element={<Contact />}/>
         </Routes>
         <Footer />
 


    </div>
  )
}

export default Home
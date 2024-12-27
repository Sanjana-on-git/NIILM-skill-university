import React from 'react'
import '../App.css'
import Navbar from '../Navbar'
import Footer from '../Footer'
const Experts = () => {
  return (
    <>
  <Navbar/>
   <div className="container bg-[url('/public/images/img1.png')]">
        
         <h2 id='text' >Experts and Mentors</h2> 
        </div>
        <p id="text2">
        Faculty at NSVE act as facilitators, directing students into academic programs that are relevant to the business. Our emphasis on practical skills gives students a competitive advantage in their chosen areas. Our skilled faculty bridges the educational and real-world gap through interactive workshops and industrial collaborations. We promote hands-on experiences and industry relationships to provide students with the skills that employers desire.
         </p>
         <center>
         <br />
         <iframe id="vdo" width="1160" height="515"  src="https://www.youtube.com/embed/PmRZjkkwMUQ?si=LcyTBwRZ5cJ82cdS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
         </center>
         <br />
         <br />
         <center>
      
        
        </center>
        <br />
        <br />
        <Footer/>
    
   
   

    </>
  )
}

export default Experts

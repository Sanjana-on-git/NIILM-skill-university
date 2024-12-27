import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
function NewsLetter() {
  return (
    <div>
      <Navbar />
      <div className="container-NewsLetter">
        
        <h2 id='text' >News Letter</h2> 
       </div>
       <div  class="card m-20"  >
    <img id='card-img' alt="Group of people standing together, one holding a document" height="200" src="../public/images/experts/img29.jpg" width="300"/>
    <div class="card-content">
     <div class="card-title">
       Newsletter December24
     </div>
     
      
    
    </div>
   </div>
   
   
      <Footer />
    </div>
  )
}

export default NewsLetter

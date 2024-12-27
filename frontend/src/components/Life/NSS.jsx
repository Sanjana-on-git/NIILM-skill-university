import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
function NSS() {
  return (
    <>
    
    <Navbar />
    <div className="container-NSS">
        
        <h2 id='text'className='p-10' >National Service Scheme</h2> 
       </div>
       <br />
       <br />
       <div className='flex'>
       <div id="text2">
        <center>
       <h1 id='text3'>National Service Scheme</h1> <br />
       </center>
Students presenting at the best Skill development university Northeast India
National Service Scheme (NSS)
NSS, or the National Service Scheme is a Central Sector Scheme, under the Ministry of Youth Affairs & Sports, Government of India. NSS allows students to contribute to societal affairs through various activities in the fields of environmental conservation, health awareness campaigns, educational outreach and more. These initiatives help students to become responsible citizens of the country. <br /> They develop a sense of civic duty, empathy, enthusiasm to work in a team and leadership skills. Through the NSS initiatives as the integral part of the curriculum, we aim to nurture individuals who are able to address the complex societal challenges and are driven to make tangible contributions to their communities. Through these initiatives, students create an impact that extends far beyond the confines of the classroom.

        </div>
        <div className="img-cont">
            <img src="https://www.niilmuniversity.ac.in/web/assets/img/Achieved-3.png" alt="" />
        </div>
        </div>
        <br />
        <center><h1 id='text3'>Gallery</h1></center>
        <br />
        <div class="gallery">
            
   <div class="gallery-item large">
    <img id='big-img' alt="Group of people playing tug of war" height="200" src="../public/images/experts/_DSC0814.JPG" width="600"/>
   </div>
   <div class="gallery-item medium">
    <img id='img-cont0' alt="Group of people playing a team sport" height="400" src="../public/images/experts/img10.png" width="600"/>
   </div>
   <div class="gallery-item small">
    <img id='img-cont0' alt="Two people playing soccer with an audience in the background" height="400" src="../public/images/experts/img11.png" width="600"/>
   </div>
   <div id='img-cont0' class="gallery-item medium">
    <img alt="Group of people playing volleyball" height="400" src="../public/images/experts/_DSC0836.JPG" width="600"/>
   </div>
   <div class="gallery-item small">
    <img alt="Group of people smiling and posing for a photo" height="400" src="../public/images/experts/IMG12.png" width="600"/>

   </div>
  </div>
    <Footer />
    </>
  )
}

export default NSS

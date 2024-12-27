import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
function Culture() {
  return (
    <>
    <Navbar />
    <div className="container-culture">
        
        <h2 id='text'className='p-10' >Culture</h2> 
       </div>
       
       <section id='img-gallery2'>
       <div className='flex'>
       <div id="text2">
       At NIILM School of Vocational Education, our vibrant culture is the heartbeat of campus life, pulsating with energy and diversity. As a melting pot of cultures, traditions, and ideologies, our university is a microcosm of the nation, where students from all corners come together to learn, grow, and celebrate the rich tapestry of human experience.  From the colorful festivities of cultural showcases to the insightful discussions in our multicultural forums, there's an undeniable sense of unity and camaraderie that permeates every aspect of campus life. <br /> Our commitment to fostering an inclusive environment extends beyond mere tolerance – it's about embracing and honoring the unique backgrounds and perspectives that each individual brings to the table. Through immersive cultural experiences, such as art exhibitions, music concerts, dance performances, and culinary events, students have the opportunity to explore, appreciate, and learn from the diverse cultures that coexist within our community. <br /> It's in these moments of cultural exchange and understanding that lifelong friendships are forged, and global citizens are born. Here, culture isn't just something we celebrate – it's the essence of who we are, guiding us as we strive to create a more interconnected and compassionate world.
        </div>
        <div className="img-cont">
            <img src="../public/images/experts/img13.png" alt="" />
        </div>
        </div>
        </section>
       

    <section id='img-gallery'>
        <center><h1 id='text3'>Gallery</h1></center>
        <br />

        <div class="gallery">
            
   <div class="gallery-item large">
    <img id='big-img' alt="Group of people playing tug of war" height="200" src="../public/images/experts/IMG_9099.JPG" width="500"/>
   </div>
   <div class="gallery-item medium">
    <img alt="Group of people playing a team sport" height="400" src="../public/images/experts/img14.png" width="600"/>
   </div>
   <div class="gallery-item small">
    <img alt="Two people playing soccer with an audience in the background" height="400" src="../public/images/experts/img15.png" width="600"/>
   </div>
   <div class="gallery-item medium">
    <img alt="Group of people playing volleyball" height="400" src="../public/images/experts/img16.png" width="600"/>
   </div>
   <div class="gallery-item small">
    <img alt="Group of people smiling and posing for a photo" height="400" src="../public/images/experts/img17.png" width="600"/>
   </div>
  </div>
  </section>
    <Footer />
    </>
  )
}

export default Culture

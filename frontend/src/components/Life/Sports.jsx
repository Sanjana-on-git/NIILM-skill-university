import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
function Sports() {
  return (
    <>
    <Navbar />
    <div className="container-sports">
        
        <h2 id='text'className='p-10' >Sports</h2> 
       </div>
       <div className='flex'>
       <div id="text2">
       At NIILM School of Vocational Education, we believe in nurturing not just the mind, but the body and spirit as well. Our dynamic sports facility provides students with the resources and opportunities they need to thrive both inside and outside the classroom. <br /> Spanning an impressive 20,000 square feet, this state-of-the-art facility is designed to cater to the diverse interests and passions of our students.

Within our meticulously crafted sports arena, you'll discover a plethora of courts dedicated to a variety of sports, including volleyball, badminton, futsal, and basketball, among others. Whether you're a seasoned athlete seeking to hone your skills or a recreational player looking for a friendly match, our top-tier facilities provide the perfect setting for every level of expertise.
<br />
But the excitement doesn't end there. Step indoors and explore our array of recreational opportunities, where you can engage in friendly games of table tennis, challenge your strategic acumen with a round of chess, or immerse yourself in the fast-paced action of carom. With options to suit every interest and inclination, there's no shortage of ways to stay active and engaged on campus.

        </div>
        <div className="img-cont">
            <img src="../public/images/experts/img7.png" alt="" />
        </div>
        </div>
        <div class="gallery">
   <div class="gallery-item large">
    <img id='big-img' alt="Group of people playing tug of war" height="200" src="../public/images/experts/img8.png" width="600"/>
   </div>
   <div class="gallery-item medium">
    <img alt="Group of people playing a team sport" height="400" src="https://storage.googleapis.com/a1aa/image/yi7FoxiQNPqEKZg3s7feREfXZUG3XAf36Bm7NqCt4dB0myxPB.jpg" width="600"/>
   </div>
   <div class="gallery-item small">
    <img alt="Two people playing soccer with an audience in the background" height="400" src="https://storage.googleapis.com/a1aa/image/9SLdM7pu6hpYMB2HRyz620pVE9KcikBMWzprX5NGcNlaKHfJA.jpg" width="600"/>
   </div>
   <div class="gallery-item medium">
    <img alt="Group of people playing volleyball" height="400" src="../public/images/experts/IMG6.png" width="600"/>
   </div>
   <div class="gallery-item small">
    <img alt="Group of people smiling and posing for a photo" height="400" src="https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?cs=srgb&dl=pexels-pixabay-46798.jpg&fm=jpg" width="600"/>
   </div>
  </div>
    <Footer />
    </>
  )
}

export default Sports

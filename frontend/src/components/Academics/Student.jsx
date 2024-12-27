import '../App.css'
import Navbar from '../Navbar'
import Footer from '../Footer'
function Student() {

    return (
      <>
      <Navbar />
        
      <div className="container-student">
        
        <h2 id='text' >Student Showcase</h2> 
       </div>
       <p id="text2">
       NSVE encourages students to actively participate in meaningful initiatives that expand their learning experience and promote personal and professional development. These projects allow students to dive into particular topics or complete hands-on projects.

These projects allow students to pursue their interests, apply conceptual understanding to real-world problems, and learn essential skills. Through such activities, students receive real-world experience, engage with classmates and teachers, and generate powerful results that indicate their preparation for future challenges.

        </p>
        <center>
         <h1 id='text3' > Showcase Gallery</h1>
         <br /><br />
         </center>
        
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
    
         
        <br />
        <Footer />
      </>
    )
  }
  
  export default Student
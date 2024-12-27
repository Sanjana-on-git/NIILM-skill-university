import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import '../App.css'
function Blogs() {
  return (
    <>
         <Navbar/>
    <div className="container-Blogs">
        
        <h2 id='text'className='p-10' >Blogs</h2> 
       </div>
       <div class="cards">
   <div class="card">
    <img id='card-img' alt="Group of people standing together, one holding a document" height="200" src="../public/images/experts/img24.jpeg" width="300"/>
    <div class="card-content">
     <div class="card-title">
      NIILM University organizes Blood donation camp
     </div>
     <div class="card-date">
      <i class="fas fa-calendar-alt">
      </i>
      Sep 2, 2024
     </div>
     <div class="card-description">
      NIILM University successfully hosted a Blood Donation Camp to promote the noble cause of saving lives. The event witnessed enthusiastic participation from students, faculty, and staff...
     </div>
    </div>
   </div>
   <div  class="card">
    <img id='card-img' alt="Group of people standing together, one holding a document" height="200" src="../public/images/experts/img25.jpg" width="300"/>
    <div class="card-content">
     <div class="card-title">
     Grand Convocation Ceremony at NIILM University
     </div>
     <div class="card-date">
      <i class="fas fa-calendar-alt">
      </i>
      Sep 2, 2024
     </div>
     <div class="card-description">
     NIILM University recently celebrated its Convocation Ceremony, a momentous occasion marking the academic achievements of its graduating students...
     </div>
    </div>
   </div>
   <div class="card">
    <img id='card-img' alt="Group of people standing together, one holding a document" height="200" src="../public/images/experts/img26.jpg" width="300"/>
    <div class="card-content">
     <div class="card-title">
      
Orientation Program at NIILM University
     </div>
     <div class="card-date">
      <i class="fas fa-calendar-alt">
      </i>
      Sep 2, 2024
     </div>
     <div class="card-description">
     NIILM University recently organized a vibrant Orientation Program to welcome its new batch of students for the academic year...
     </div>
    </div>
   </div>
   <div class="card">
    <img id='card-img' alt="Group of people standing together, one holding a document" height="200" src="../public/images/experts/img27.jpg" width="300"/>
    <div class="card-content">
     <div class="card-title">
     NIILM University Hosts Inspiring Marathon Event
     </div>
     <div class="card-date">
      <i class="fas fa-calendar-alt">
      </i>
      Sep 2, 2024
     </div>
     <div class="card-description">
     NIILM University recently organized an exciting Marathon, bringing together students, faculty, staff, and community members to promote fitness, unity, and a spirit of determination...
     </div>
    </div>
   </div>
   <div  class="card">
    <img id='card-img' alt="Group of people standing together, one holding a document" height="200" src="../public/images/experts/img28.jpg" width="300"/>
    <div class="card-content">
     <div class="card-title">
     World Water Day Celebration at NIILM University
     </div>
     <div class="card-date">
      <i class="fas fa-calendar-alt">
      </i>
      Sep 2, 2024
     </div>
     <div class="card-description">
     NIILM University proudly celebrated World Water Day, emphasizing the importance of water conservation and sustainable management of this precious resource...
     </div>
    </div>
   </div>
   <div  class="card">
    <img id='card-img' alt="Group of people standing together, one holding a document" height="200" src="../public/images/experts/img30.jpg" width="300"/>
    <div class="card-content">
     <div class="card-title">
     IEEE Conference at NIILM University
     </div>
     <div class="card-date">
      <i class="fas fa-calendar-alt">
      </i>
      Sep 2, 2024
     </div>
     <div class="card-description">
     NIILM University recently hosted a prestigious IEEE Conference, bringing together researchers, academicians, industry experts, and students to exchange knowledge and explore advancements in science, technology, and innovation...
     </div>
    </div>
   </div>
   <div  class="card">
    <img id='card-img' alt="Group of people standing together, one holding a document" height="200" src="../public/images/experts/img31.jpg" width="300"/>
    <div class="card-content">
     <div class="card-title">
     Colorful Holi Celebration at NIILM University
     </div>
     <div class="card-date">
      <i class="fas fa-calendar-alt">
      </i>
      Sep 2, 2024
     </div>
     <div class="card-description">
     NIILM University recently came alive with vibrant colors and joyous festivities during its Holi Celebration, bringing together students, faculty, and staff for a day of fun, unity, and cultural pride...
     </div>
    </div>
   </div>
   <div  class="card">
    <img id='card-img' alt="Group of people standing together, one holding a document" height="200" src="../public/images/experts/img29.jpg" width="300"/>
    <div class="card-content">
     <div class="card-title">
    
Talent Hunt at NIILM University
     </div>
     <div class="card-date">
      <i class="fas fa-calendar-alt">
      </i>
      Sep 2, 2024
     </div>
     <div class="card-description">
     NIILM University recently organized an exciting Talent Hunt event, providing students with a platform to showcase their unique abilities and creative skills...
     </div>
    </div>
   </div>
   
    </div>
   
    <center>
    <button id='btn'>
        Load More
    </button>
    </center>
    <br />
      
    <Footer/>

    </>
  )
}

export default Blogs

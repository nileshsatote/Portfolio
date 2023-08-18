import React from 'react'
import Portfolio_img from '../../picture/portfolio.jpg'
import Attendo from'../../picture/attendo.jpg'
import Novice from '../../picture/novice.jpg'
import Button from "@mui/material/Button";
import { Link } from 'react-router-dom';
export const Pro_cnt = () => {
  return (
  <>

<div className='proj_cnt'>
         <div className='proj1'>
             <h3>Portfoli</h3>
            <img src={Portfolio_img}
            style={{width:'200px', height:'auto',display:'flex',justifyContent:'center',paddingTop:'5px'}}
            />
            <p 
            className='cnt_p'
             style={{marginLeft:'10px', marginRight:'10px'}}>
            Discover my journey through a captivating online portfolio. Explore a collection of my works, ranging from intricate web designs to innovative coding projects. Immerse yourself in a showcase of creativity, skill, and dedication. Engage with my expertise in various technologies and programming languages, all displayed elegantly on this platform. Witness the fusion of aesthetics and functionality as you navigate through my projects. Join me in celebrating my passion for creating digital solutions that leave an impact. This portfolio encapsulates my professional growth, reflecting a commitment to continuous learning and excellence. Welcome to a visual narrative of my skills, achievements, and aspirations. Let's connect and explore the world I've crafted, one project at a time.
            </p>

            <div style={{paddingBottom:'10px'}}>
            <Link>
            <Button variant="contained">Check</Button>
            </Link>
            </div>

         </div>

         <div className='proj2'>
          <h3>Attendo</h3>
          <img src={Attendo}
            style={{width:'200px', height:'auto',display:'flex',justifyContent:'center',paddingTop:'5px'}}
            />
          <p 
          className='cnt_p'
          style={{marginLeft:'10px', marginRight:'10px'}} >
          The Face Detection Attendance System is an innovative project that leverages computer vision and facial recognition technology to automate attendance tracking. Using a webcam or camera-equipped device, the system captures real-time images of individuals. These images are then processed using advanced facial recognition algorithms to identify unique facial features. The system matches these features against a pre-stored database of known individuals, allowing for accurate and efficient identification. By eliminating the need for manual attendance recording, the project streamlines administrative tasks and enhances accuracy. The web-based user interface provides real-time attendance updates, individual records, and reporting functionalities. Overall, the Face Detection Attendance System offers a modern, convenient, and secure solution for attendance management in various settings, such as educational institutions and workplaces.
          </p>

          <div style={{paddingBottom:'10px'}}>
            <Link>
            <Button variant="contained">Check</Button>
            </Link>
            </div>
         </div>

         <div className='proj3'>
          <h3>Novice</h3>
          <img src={Novice}
            style={{width:'200px', height:'auto',display:'flex',justifyContent:'center',paddingTop:'5px'}}
            />
             <p 
               className='cnt_p'
             style={{marginLeft:'10px', marginRight:'10px'}} >
          
             "Empower beginners in the world of coding with our platform, designed to make programming accessible and engaging. Through a user-friendly interface, learners can access interactive coding exercises, step-by-step tutorials, and real-time feedback. We provide a supportive environment for hands-on practice in popular programming languages. From building basic projects to understanding complex concepts, our platform fosters growth. Gamified challenges and a collaborative community encourage skill development. Beginners gain confidence as they see their code come to life, while mentors offer guidance. Join us to embark on a journey from coding novices to capable developers, all within an intuitive and encouraging coding ecosystem."
          </p>

          <div style={{paddingBottom:'10px'}}>
            <Link>
            <Button variant="contained">Check</Button>
            </Link>
            </div>
         </div>
    </div>
  </>
  )
}

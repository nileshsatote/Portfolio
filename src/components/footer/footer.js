import React from 'react'
import './footer.css'
import HomeIcon from '@mui/icons-material/Home';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import InsertLinkTwoToneIcon from '@mui/icons-material/InsertLinkTwoTone';
import { Link } from 'react-router-dom';
export default function Footer() {
  return (
    <>
    <div className='footer_sec'>
        <div className='left_sec'>
           <HomeIcon /> Indore, Rau 453331 (M.P)<br></br>
           <PhoneIcon /> 9302048935<br>
           </br>

           <Link  to='/'>
           <EmailIcon /> satote19@gmail.com <br></br>
           </Link>
        </div>
        <div className='right_sec'>
          <h1 className='h1_about'> About The Portfolio</h1>
          <p> 
            This portfolio is Developed By Nilesh Satote 
            using some Technical Stack such as <br></br>
            React.js, javascript, MUI, TailwindCSS etc.
          </p>
         <InsertLinkTwoToneIcon /> Facebook<br></br>
        <InsertLinkTwoToneIcon /> WhatsApp<br></br>
        <InsertLinkTwoToneIcon /> Linkedin

          </div>
    </div>
    </>
  )
}

import React from "react";
import "./about.css";
import React_img from '../../picture/react.jpg';
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import DownloadFile from "./download";
export const About = () => {
  return (
    <>
      <div className="about_sec">
        <div className="img_sec">
          <h1 className="about_h1">About Me.</h1>
          <h2>Im a Friendly Front-End Developer .</h2>
        </div>

        
        {/* summary */}
        <div className="two_sec">
          <div className="left_sec">
            <h2>SUMMARY</h2>
            <p>
              As a final-year computer science engineering student with three
              years of experience,<br></br> I am enthusiastic about front-end
              development. I am skilled in React,<br></br>
              and I have a strong foundation in building intuitive user
              interfaces.<br></br> I stay updated with the latest trends and
              constantly seek opportunities <br></br>to enhance my skills. With
              a focus on creating exceptional user experiences,<br></br> I have
              a proven track record of delivering high-quality projects.
              <br></br> I am a collaborative team player with excellent
              communication skills<br></br> and a comprehensive understanding of
              the full development stack.<br></br> I am ready to make an impact
              and am passionate about contributing to the<br></br> front-end
              developer community
            </p>
            {/* <Link to='https://drive.google.com/file/d/1joBKnAPeny8Kh0hO4PMRjW2p76YKQCq6/view?usp=drive_link'>
            <Button variant="contained" >Resume</Button>
            </Link> */}
            <DownloadFile />
          </div>

          <div className="right_sec">
            <img  src={React_img} alt="react_img" className="react_img"/>
            
          </div>
          </div>

        
      </div>
         {/* education */}
         <div className="edu_sec">
          <div className="edu_btn">
            <Link  to='/education'>
                     <Button variant="contained" >Education</Button>
            </Link>

            <Link  to='/achivement'>
                     <Button variant="contained" >Achivement</Button>
            </Link>
         </div>
              </div>
    </>
  );
};

import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
import home_img from "../../picture/home_bck.jpg";
import Button from "@mui/material/Button";
import { Project } from "../project/project";
// import { Project_cnt } from "../project/project";

// import Footer from "../../footer/footer";


export const Home = () => {
  return (
    <>
      <div className="home_bck" style={{backgroundColor:"black"}}>
        
      
        <div className="mask">
          <img className="intro_img" src={home_img} alt="intro_img_bck" />

          <div className="content">
            <Link to='/about'>
            <p>HI, I'M Nilesh</p>

            </Link>
            <h1>A Frontend Developer</h1>
          </div>

          <div className="btn_class">
            <Button variant="contained" color="success">About ME </Button>

            <Button variant="outlined">Contact Me</Button>
           
          </div>
        </div>
      
     <Project />
      </div>
    </>
  );
};

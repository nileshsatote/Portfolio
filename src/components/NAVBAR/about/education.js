import React from "react";
import "./education.css";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import RoomIcon from "@mui/icons-material/Room";
import Edu_img from "../../picture/home_bckk.jpg";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
export const Education = () => {
  return (
    <>
      <div className="edu_div">
        <img className="edu_img" src={Edu_img} />

        <div className="education">
          <h2
            style={{
              color: "white",
              display: "flex",
              justifyContent: "center",
            }}
          >
            Bachelor of computer Science (BTech.)
          </h2>
          <p
            style={{
              color: "white",
              display: "flex",
              justifyContent: "center",
            }}
          >
            Indore Institue of Science And Technology <br></br>{" "}
          </p>

          <div
            style={{
              color: "white",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <RoomIcon /> indore
          </div>
          <div
            style={{
              color: "white",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <CalendarTodayIcon /> 2020-2024
          </div>

          <p
            style={{
              color: "white",
              display: "flex",
              justifyContent: "center",
            }}
          >
            I learned about programming languages, data structures, web
            development, and the fundamentals of software engineering in
            college. I also gained expertise in project management, cooperation,
            and problem-solving
          </p>
        </div>
      </div>

      <div className="edu_sec">
          <div className="edu_btn">
            <Link  to='/about'>
                     <Button variant="contained" >Back</Button>
            </Link>

            <Link  to='/achivement'>
                     <Button variant="contained" >Achivement</Button>
            </Link>
         </div>
              </div>
    </>
  );
};

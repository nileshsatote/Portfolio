import React from "react";
import "./achivement.css";
import Achiv from "../../picture/achiv.jpeg";
// import Achiv2 from '../../picture/achiv2.jpeg'
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
export const Achivement = () => {
  return (
    <>
      <div className="acv_sec">
        <div className="achiv_img">
          <img src={Achiv} />
        </div>
      </div>
      <div className="achiv_p">
        <p style={{ color: "white" }}>
          <RocketLaunchIcon />
          NTERNAL HACKATHON WINNER 2023<br></br>
          Secured first place in an internal hackathon by leading a team to
          develop and present an innovative solution, demonstrating exceptional
          problem-solving abilities, effective teamwork, and the ability to
          deliver high-quality results within strict time constraints
        </p>
      </div>

      <div className="edu_sec">
        <div className="edu_btn">
          <Link to="/about">
            <Button variant="contained">Back</Button>
          </Link>

          <Link to="/education">
            <Button variant="contained">Education</Button>
          </Link>
        </div>
      </div>
    </>
  );
};

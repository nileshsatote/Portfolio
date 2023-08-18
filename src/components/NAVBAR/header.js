import React from 'react'
import { useState } from 'react';
import {Link} from 'react-router-dom'; 
import Nevbar from './NevBar';
import './header.css'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
export const Header = () => {
    const [click,setClick] = useState(false);
    const handleClick =()=> setClick(!click);
  return (
    <>
    <div className='header'> 
         <Link to="/">
        <h2>Nilesh_Satote</h2>
        </Link>
        <div className='ArrowIcon' onClick={handleClick}>
       {click ? (<CloseIcon />) : (<MenuIcon />)}
       {/* {<CloseIcon /> ? console.log("click"): console.log("no")} */}
        </div>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
        <Link to='/'>
            <h4>Home</h4>
        </Link> 
        </li> 

        <li>
        <Link to='/about'>
            <h4>About</h4>
        </Link>
        </li> 



        <li>

        <Link to='/Project '>
            <h4>Project</h4>
        </Link>
        </li>

        <li>
        <Link to='/contact'>
            <h4>Contact</h4>
        </Link>
        </li>
        </ul>
        </div>
       
        <Nevbar />
    </>
    
  );
}

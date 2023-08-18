import '../NAVBAR/NavBar.css';
import {Route, Routes} from 'react-router-dom';

import { Home } from './home/home';
import { About } from './about/about';
import { Contact } from './contact/contact';
import {Project} from './project/project';
import { Education } from './about/education';
import { Achivement } from './about/achivement';
const Nevbar =()=>{
return(
    <div className="h">
      
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/project' element={<Project />}/>
            <Route path='/contact' element={<Contact />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/education' element={<Education />} />
            <Route path='/achivement' element={<Achivement />}/>
        </Routes>
 

        
    </div>
);
}
export  default Nevbar; 
import React,{useState}from 'react'
import './contact.css'
import contact_img from '../../picture/contact.jpg'
export const Contact = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form data submitted:', formData);
    // You can add code here to send the form data to a server, perform validation, etc.
  };
  return (
   <>
   <div className='contact_cnt'>
     
     <div className='cnct_img'>
        
        <div className='form_cnt'>
           {/* <h1 style={{color:'white'}}>contact us</h1> */}
           <div className="form-container">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label" htmlFor="name">Name:</label>
          <input
            className="form-input"
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="email">Email:</label>
          <input
            className="form-input"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="number">Number:</label>
          <input
            className="form-input"
            type="tel"
            id="number"
            number="number"
            value={formData.number}
            onChange={handleInputChange}
          />
        </div>
        <button className="form-button" type="submit">Submit</button>
      </form>
    </div>
        </div>

     </div>
   </div>
   </>
  )
}

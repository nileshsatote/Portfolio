import React from 'react';
import Button from "@mui/material/Button";
const DownloadFile = () => {
  const handleDownload = () => {
    // Replace 'file_url' with the actual URL of the file you want to download
    const fileUrl = 'https://drive.google.com/file/d/1joBKnAPeny8Kh0hO4PMRjW2p76YKQCq6/view?usp=drive_link';

    // Create a virtual link element
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'file.pdf'; // You can specify the desired file name here
    document.body.appendChild(link);

    // Simulate a click on the link to initiate download
    link.click();

    // Clean up: Remove the virtual link from the DOM
    document.body.removeChild(link);
  };

  return (
    <div>
        <Button variant="contained" onClick={handleDownload} >Resume</Button>
      
    </div>
  );
};

export default DownloadFile;

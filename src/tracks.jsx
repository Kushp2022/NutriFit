import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './tracks.css';

function Track() {
  const [filePreview, setFilePreview] = useState('');
  const [isImageSelected, setIsImageSelected] = useState(false);
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setFilePreview(event.target.result);
        setIsImageSelected(true);
        setFile(selectedFile);
      };
      reader.readAsDataURL(selectedFile);
    } else {
      setIsImageSelected(false);
      setFile(null);
    }
  };

  const handleUpload = () => {
    if (file) {
      // Perform a backend operation using the 'file' variable
      // You can make a fetch request or use any other method to send the file to the backend
      // For demonstration, we'll just log the file details here
      console.log('Uploading file...', file);
    }
  };

  return (
    <div className='grid-container'>
      <div className='first-half'>
        <div className='Welcome-track'>
          <p>We'll Take It From Here, Upload Your Document</p>
        </div>
        <div className='upload-pic'>
          <div className='yourmeal'>
            <p>Your Meal</p>
          </div>
          <div className='pic-meal'>
            <p>Add a Picture of Your Meal Below</p>
          </div>
          <div className='form'>
            <form id="file-upload-form" className="uploader">
              <label
                htmlFor="file-upload"
                id="file-drag"
                style={{ border: isImageSelected ? `3px solid #32794F` : '3px solid #eee' }}
              >
                <img
                  id="file-image"
                  src={filePreview}
                  alt="Preview"
                  className={isImageSelected ? '' : 'hidden'}
                  style={{ maxWidth: '180px' }}
                />
                <div id="start">
                  <div id="notimage" className={isImageSelected ? 'hidden' : ''}>
                    Choose Your Picture!
                  </div>
                  <span id="file-upload-btn" className="btn btn-primary">
                    Select a file
                  </span>
                </div>
                <div id="response" className="hidden">
                  <div id="messages"></div>
                </div>
              </label>
              <input id="file-upload" type="file" name="fileUpload" onChange={handleFileChange} style={{ display: 'none' }} />
            </form>
            {isImageSelected && (
              <button onClick={handleUpload} className="btn btn-warning custom-button">
                Upload Document
              </button>
            )}
   
          </div>
        <div className='rec-try'>
            <p>Here's Our Recommendation:</p>
        </div>
        <div className='output-api'></div>
        </div>
      </div>
      <div className='second-half'>
        <div className='cal-intake'>
          <p>Here's Your Recommended Calorie Intake:</p>
        </div>
        <div className="flex-container">
          <div className="flex-box">
            Daily: 
          </div>
          <div className="flex-box">
            Weekly: 
          </div>
          <div className="flex-box">
            Monthly: 
          </div>
        </div>
      </div>
    </div>
  );
}

export default Track;

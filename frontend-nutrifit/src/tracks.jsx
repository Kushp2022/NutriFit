import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './tracks.css';

function Track() {
  const [filePreview, setFilePreview] = useState('');
  const [isImageSelected, setIsImageSelected] = useState(false);
  const [file, setFile] = useState(null);
<<<<<<< Updated upstream
  const [fileUrl, setFileUrl] = useState(null);
  const [aiData, setAIData] = useState({ Food: '', Response: '' });


  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);

=======
  const [data, setData] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
    if (file) {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('fileUrl', fileUrl);
      fetch('http://localhost:5000/upload', {
        method: 'POST',
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setFileUrl(data.url);
        })
        .catch((error) => {
          console.error('Error uploading the file:', error);
        });
    }
  };  

  fetch('http://localhost:5000/food', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({fileUrl: fileUrl}).toString(),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the backend as needed
        setAIData(data)
        console.log(data);
        window.location.href = "/food";
      });

  return (
=======
    fetch('http://localhost:5000/food', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        })
          .then((response) => response.json())
          .then((data) => {
            // Handle the response from the backend as needed
            setData(data["Response"])
            console.log(data)
          });
  }
>>>>>>> Stashed changes
    <div className='grid-container'>
      <div className='first-half'>
        <div className='Welcome-track'>
          <p>We'll Take It From Here, Upload Your Document</p>
        </div>
        <div className='upload-pic'>
          <div className='yourmeal'>
            <p></p>
          </div>
          <div className='pic-meal'>
            <p>Add a document below</p>
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
                    Please select a document
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
            <p>Here's our Recommendation</p>
        </div>
        <div className='output-api'>
          <p>{aiData.Response}</p>
        </div>
<<<<<<< Updated upstream
=======
        <div className='output-api'>
              <p>AI Response: {data} </p>
        </div>
>>>>>>> Stashed changes
        </div>
      </div>
      <div className='second-half'>
        <div className='cal-intake'>
          <p>Here's Your Recommended daily Calorie Intake:</p>
        </div>
      </div>
    </div>
  

  }
export default Track;

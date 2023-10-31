import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './tracks.css'
function Track() {
  return (
    <div className='grid-container'>
        <div className='first-half'>
            <div className='Welcome-track'>
                <p>We'll Take It From Here, Upload Your Image</p>
            </div>
        </div>
        <div className='second-half'>
            <div className='cal-intake'>
                <p>Here's Your Recommended daily Calorie Intake:</p>
            </div>

        </div>

    </div>
  );
}

export default Track;

import React, { useState } from 'react';
import './App.css';
import { Link } from 'react-router-dom';


function App() {
  const [formData, setFormData] = useState({
    currentAge: '',
    gender: '',
    currentWeight: '',
    currentHeight: '',
    mealCount: '',
    goal: '', // Add a new field for the user's goal
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Collect user responses in an object, including the user's goal
    const userResponses = {
      age: formData.currentAge,
      gender: formData.gender,
      weight: formData.currentWeight,
      height: formData.currentHeight,
      mealCount: formData.mealCount,
      goal: formData.goal, // Include the user's goal
    };

    // Send the userResponses as form-encoded data to the backend
    fetch('http://localhost:5000/members', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams(userResponses).toString(),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the backend as needed
        console.log(data);
        window.location.href = "/track";
      });
  };

  return (
    <div className="Screen">
      <div className="BodyGoal">
        <p className="Welcome">
          <strong>Welcome to NutriFit</strong>
        </p>
        <p className="MyGoal">
          <strong>Choose Your Goal</strong>
        </p>
        <div className="WeightButtons">
          <button
            className="MuscleButton"
            onClick={() => setFormData({ ...formData, goal: 'Build Muscle' })}
          >
            Build Muscle
          </button>
          <button
            className="WeightButton"
            onClick={() => setFormData({ ...formData, goal: 'Lose Weight' })}
          >
            Lose Weight
          </button>
          <button
            className="MaintainButton"
            onClick={() => setFormData({ ...formData, goal: 'Maintain Weight' })}
          >
            Maintain Weight
          </button>
        </div>
      </div>
      <div className="BodyInfo">
        <div className="Age">
          <form id="AgeInfo" action="http://localhost:5000/members" method="POST">
            <p className="EnterAge">Age</p>
            <input
              type="text"
              id="currentAge"
              name="currentAge"
              placeholder="Enter Your Age"
              required
              onChange={(e) => setFormData({ ...formData, currentAge: e.target.value })}
            />
          </form>
        </div>
        <div className="Gender">
          <p className="WhatGender">Gender</p>
          <div className="labels-container">
            <input
              type="radio"
              id="male"
              name="gender"
              value="male"
              onChange={() => setFormData({ ...formData, gender: 'male' })}
            />
            <label htmlFor="male">Male</label>

            <input
              type="radio"
              id="female"
              name="gender"
              value="female"
              onChange={() => setFormData({ ...formData, gender: 'female' })}
            />
            <label htmlFor="female">Female</label>

            <input
              type="radio"
              id="PreferNotToSpecify"
              name="gender"
              value="Prefer Not to Specify"
              onChange={() => setFormData({ ...formData, gender: 'Prefer Not to Specify' })}
            />
            <label htmlFor="PreferNotToSpecify">Prefer Not to Specify</label>
          </div>
        </div>
        <div className="UserBody">
          <form id="UserBodyInfo" action="http://localhost:5000/members" method="POST">
            <p className="WhatWeight">Current Weight</p>
            <div className="WeightBox">
              <input
                type="text"
                id="currentWeight"
                name="currentWeight"
                placeholder="Enter Your Weight in lbs"
                required
                onChange={(e) => setFormData({ ...formData, currentWeight: e.target.value })}
              />
            </div>
            <p className="WhatHeight">Current Height</p>
            <div className="HeightBox">
              <input
                type="text"
                id="currentHeight"
                name="currentHeight"
                placeholder="Enter Your Height in Feet (5'8)"
                required
                onChange={(e) => setFormData({ ...formData, currentHeight: e.target.value })}
              />
            </div>
            <p className="WhatMeal">How Many Meals You Eat</p>
            <div className="MealBox">
              <input
                type="text"
                id="mealCount"
                name="mealCount"
                placeholder="How Many Meals You Eat Per Day"
                required
                onChange={(e) => setFormData({ ...formData, mealCount: e.target.value })}
              />
            </div>
          </form>
        </div>
      </div>
      <button className="CreatePlan" type="submit" form="UserBodyInfo" onClick={handleSubmit}>
        Create My Plan
      </button>
    </div>
  );
}

export default App;

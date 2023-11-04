import { useState } from 'react'
import React, {useEffect} from 'react'
import './App.css'

function App() {
  useEffect(() => {
    fetch("/members")
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        console.log(response); // Add this line to inspect the response
        return response.json();
      })
      .then(data => {
        setData(data);
        console.log(data);
      })
      .catch(error => {
        console.error('Error fetching bla:', error);
      });
  }, []);



  return (
    <div className="Screen">
      <div className ="BodyGoal">
        <p className="Welcome"><strong>Welcome to NutriFit</strong></p>
        <p className="MyGoal"><strong>Choose Your Goal</strong></p>
        <div className="WeightButtons">
          <button className="MuscleButton">Build Muscle</button>
          <button className="WeightButton">Lose Weight</button>
          <button className="MaintainButton">Maintain Weight</button>
        </div>
      </div>
      <div className ="BodyInfo">
        <div className ="Age">
          <form id="AgeInfo" action="/submit" method="POST">
            <p className="EnterAge">Age</p>
            <input type="text" id="currentAge" name="currentAge" placeholder="Enter Your Age" required />
          </form>
        </div>
        <div className="Gender">
          <p className="WhatGender">Gender</p>
          <div className="labels-container">
            <input type="radio" id="male" name="gender" value="male" />
            <label htmlFor="male">Male</label>

            <input type="radio" id="female" name="gender" value="female" />
            <label htmlFor="female">Female</label>
          
            <input type="radio" id="PreferNotToSpecify" name="gender" value="Prefer Not to Specify" />
            <label htmlFor="PreferNotToSpecify">Prefer Not to Specify</label>
          </div>
        </div>
        <div className="UserBody">
          <form id= "UserBodyInfo" action="/submit" method ="POST">
            <p className="WhatWeight">Current Weight</p>
            <div className="WeightBox">
              <input type="text" id="currentWeight" name="currentWeight" placeholder="Enter Your Weight in lbs" required />
            </div>
            <p className="WhatHeight">Current Height</p>
            <div className="HeightBox">
              <input type="text" id="currentHeight" name="currentHeight" placeholder="Enter Your Height in Feet (5'8)" required />
            </div>
            <p className="WhatMeal">How Many Meals You Eat</p>
            <div className="MealBox">
              <input type="text" id="mealCount" name="mealCount" placeholder="How Many Meals You Eat Per Day" required />
            </div>
          </form>
        </div>
      </div>
      <button className="CreatePlan" type="submit" form="UserBodyInfo">Create My Plan</button>
    </div>
  );
}

export default App

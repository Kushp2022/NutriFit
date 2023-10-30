import { useState } from 'react'
import './App.css'

function AgeDropdown(){
  const ageArr = [];
  for(let age = 13; age <= 99; age++){
    ageArr.push(
      <option key={age} value={age}>
      {age}
    </option>
    );
  }
  return (
    <select id="ageDropdown">
      {ageArr}
    </select>
  );
}

function App() {

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
          <p className="EnterAge">Choose Your Age</p>
          <div className="AgeDropdown">{AgeDropdown()}</div>
        </div>
        <div className="Gender">
          <p className="WhatGender">Choose Your Gender</p>
          <input type="radio" id="male" name="gender" value="male"/>
          <label for="male">Male</label>

          <input type="radio" id="female" name="gender" value="female"/>
          <label for="female">Female</label><br></br>

          <input type="radio" id="Non-Binary" name="gender" value="Non-Binary"/>
          <label for="Non-Binary">Non-Binary</label>

          <input type="radio" id="Prefer Not to Specify" name="gender" value="Prefer Not to Specify"/>
          <label for="Prefer Not to Specify">Prefer Not to Specify</label><br></br>
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

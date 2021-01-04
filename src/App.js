import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import UserInput from './userInput';
import CakeStyle from './styleOfCake';
import Decorations from './decorations';
import Shape from './shape';
import Flavours from './flavours';
import Colours from './colours';


function App() {

  const [cakeStyle, setCakeStyle] = useState("");
  const [decor, setDecor] = useState(0);
  const [shape, setShape] = useState(0);
  const [flavour, setFlavour] = useState(0);
  const [colour, setColour] = useState(0);

  const onSubmit = () => {
    var budget =0;
    var slices = 0; 
    var subtotal=0;
    if(document.getElementById("cakeBudget").value===""){
      alert("Enter Budget")
    }
    else{
      budget=document.getElementById("cakeBudget").value;
      if(document.getElementById("numberSlice").value===""){
        alert("Enter number of slices")
      }
      else{
        slices = document.getElementById("numberSlice").value;
        if(cakeStyle==="")
        {
          alert("Select style of cake");
        }
        else{
          if(decor===0){
            alert("Select decorations");
          }
          else{
            if(shape===0){
              alert("Select shape and structure");
            }
            else{
              if(flavour===0){
                alert("Select flavour and filling");
              }
              else{
                if(colour===0){
                  alert("Select colour of cake");
                }
                else{
                  subtotal = slices * (parseInt(decor) + parseInt(shape) + parseInt(flavour) + parseInt(colour));
                  if(subtotal>budget){
                    alert("Your subtotal is greater than your budget");
                  }
                  else{
                    const tax = subtotal * 0.13;
                    const total = subtotal + tax;
                    document.getElementById("subTotal").innerHTML = "Subtotal: $" + subtotal.toFixed(2);
                    document.getElementById("Tax").innerHTML = "Tax: $" + tax.toFixed(2);
                    document.getElementById("total").innerHTML = "Total: $" + total.toFixed(2);
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  const getStyleCake = (value) => {
    setCakeStyle(value);
  }

  const getDecor = (value) => {
    setDecor(value);
  }
  const getShape = (value) => {
    setShape(value);
  }
  const getFlavour = (value) => {
    setFlavour(value);
  }
  const getColours = (value) => {
    setColour(value);
  }



  return (
    <div className="App d-flex align-items-center justify-content-center">
      <div className="cakeBuild d-flex flex-column align-items-left">
        <div className="userInput m-1">
          <h1>Build a Cake</h1>
          <label for="cakeBudget">Cake Budget $ :</label>
          <input type="number" min="0" id="cakeBudget" className="m-1" /><br />
          <label for="numberSlice">Number of slices : </label>
          <input type="number" id="numberSlice" min="0" className="m-1" /><br />
        </div>
        <div className="cakeBox">
          <div className="headingOne d-flex flex-row">
            <div className="m-5">
              <CakeStyle styleUpdate={getStyleCake} />
            </div>
            <div className="m-5">
              <Decorations decorUpdate={getDecor} />
            </div>
            <div className="m-5">
              <Shape shapeUpdate={getShape} />
            </div>
          </div>
          <div className="headingTwo d-flex flex-row">
            <div className="m-5">
              <Flavours flavUpdate={getFlavour} />
            </div>
            <div className="m-5">
              <Colours coloursUpdate={getColours} />
            </div>
            <div id="output" className="m-5 p-5">
              <p id="subTotal">Subtotal:-------</p>
              <p id="Tax">Tax:--------</p>
              <p id="total">Total:------</p>
              <button className="buttonSub" type="button" onClick={onSubmit}>Submit</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;

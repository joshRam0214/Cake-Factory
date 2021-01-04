import React from 'react';

export default function userInput(props) {
    return (
        <div>
            <h1>Build a Cake</h1>
            <label for="cakeBudget">Cake Budget: $</label>
            <input type="number" min="0" value="0" id="cakeBudget" className="m-1" /><br/>
            <label for="numberSlice">Number of slices: </label>
            <input type="number" id="numberSlice" min="0" className="m-1" /><br />
        </div>
    )
}

import React from 'react'
import RadioBtn from './radioBtn';
export default function colours(props) {
    const getColour = () =>{
        const colour = document.getElementById("colours").getElementsByTagName("input");
        for(var x =0; x < colour.length; x++)
        {
            if (colour.item(x).checked===true)
            {
                //console.log(colour.item(x).value);
                props.coloursUpdate(colour.item(x).value);
            }
                
        }
    }
    return (
        <div id="colours" onChange={getColour}>
            <h2>Colours $5/Slice</h2>
            <RadioBtn radName="colour" radValue="5" radLabel="White"/>
            <RadioBtn radName="colour" radValue="5" radLabel="Ivory"/>
            <RadioBtn radName="colour" radValue="5" radLabel="Yellow"/>
            <RadioBtn radName="colour" radValue="5" radLabel="Peach"/>
            <RadioBtn radName="colour" radValue="5" radLabel="Red"/>
            <RadioBtn radName="colour" radValue="5" radLabel="Pink"/>
            <RadioBtn radName="colour" radValue="5" radLabel="Lavender"/>
        </div>
    )
}

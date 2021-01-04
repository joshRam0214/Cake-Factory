import React from 'react'
import RadioBtn from './radioBtn';

export default function shape(props) {
    const getShape = () =>{
        const shape = document.getElementById("shape").getElementsByTagName("input");
        for(var x =0; x < shape.length; x++)
        {
            if (shape.item(x).checked===true)
            {
                console.log(shape.item(x).value);
                props.shapeUpdate(shape.item(x).value);
            }
                
        }
    }
    return (
        <div id="shape" onChange={getShape}>
            <h2>Shape and Structure</h2>
            <RadioBtn radName="shape" radValue="20" radLabel="Round $20"/>
            <RadioBtn radName="shape" radValue="30" radLabel="Square $30"/>
            <RadioBtn radName="shape" radValue="40" radLabel="Rectangular $40"/>
            <RadioBtn radName="shape" radValue="80" radLabel="Heart $80"/>
            <RadioBtn radName="shape" radValue="90" radLabel="Tiered(with columns) $90"/>
            <RadioBtn radName="shape" radValue="70" radLabel="Tiered stacked $70"/>
            <RadioBtn radName="shape" radValue="60" radLabel="Cupcakes $60"/>
        </div>
    )
}

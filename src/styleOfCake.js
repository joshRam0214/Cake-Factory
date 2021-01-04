import React from 'react';
import RadioBtn from './radioBtn';
export default function styleOfCake(props) {
   
    const getStyle = () =>{
        const cakeType = document.getElementById("StyleOfCake").getElementsByTagName("input");
        for(var x =0; x < cakeType.length; x++)
        {
            if (cakeType.item(x).checked===true)
                props.styleUpdate(cakeType.item(x).value);
        }
    }
   
    return (
        <div id ="StyleOfCake"onChange={getStyle}>
            <h2>Style of Cake</h2>
            <RadioBtn radName="cakeStyle" radValue="Traditional" radLabel="Traditional"/>  
            <RadioBtn radName="cakeStyle" radValue="Contemporary" radLabel="Contemporary"/>
            <RadioBtn radName="cakeStyle" radValue="Dramatic" radLabel="Dramatic"/>
            <RadioBtn radName="cakeStyle" radValue="Ornate" radLabel="Ornate"/>
            <RadioBtn radName="cakeStyle" radValue="Simple" radLabel="Simple"/>
            <RadioBtn radName="cakeStyle" radValue="Regal" radLabel="Regal"/>
            <RadioBtn radName="cakeStyle" radValue="Unique" radLabel="Unique"/>
        </div>

    )
}

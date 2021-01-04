import React from 'react'
import RadioBtn from './radioBtn';

export default function decorations(props) {

    const getDecor = () =>{
        const decorType = document.getElementById("decorations").getElementsByTagName("input");
        for(var x =0; x < decorType.length; x++)
        {
            if (decorType.item(x).checked===true)
            {
                //console.log(decorType.item(x).value);
                props.decorUpdate(decorType.item(x).value);
            }
                
        }
    }
    return (
        <div id="decorations" onChange={getDecor}>
            <h2>Decorations $20/Slice</h2>
            <RadioBtn radName="decor" radValue="20" radLabel="Sugar flowers"/>
            <RadioBtn radName="decor" radValue="20" radLabel="Fresh Flowers"/>
            <RadioBtn radName="decor" radValue="20" radLabel="Chocolate Shavings"/>
            <RadioBtn radName="decor" radValue="20" radLabel="Gold or Sliver Leafs"/>
            <RadioBtn radName="decor" radValue="20" radLabel="Pearls"/>
            <RadioBtn radName="decor" radValue="20" radLabel="Latticework"/>
            <RadioBtn radName="decor" radValue="20" radLabel="Cake Top"/>
        </div>
    )
}

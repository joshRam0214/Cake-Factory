import React from 'react'
import RadioBtn from './radioBtn'
export default function flavours(props) {
    const getFlav = () =>{
        const flavours = document.getElementById("flavours").getElementsByTagName("input");
        for(var x =0; x < flavours.length; x++)
        {
            if (flavours.item(x).checked===true)
            {
                //console.log(flavours.item(x).value);
                props.flavUpdate(flavours.item(x).value);
            }
                
        }
    }
    return (
        <div id = "flavours" onChange={getFlav}>
            <h2>Flavours and Fillings $10/Slice</h2>
            <RadioBtn radName="flav" radValue="10" radLabel="Chocolate"/>
            <RadioBtn radName="flav" radValue="10" radLabel="Chocolate Mud"/>
            <RadioBtn radName="flav" radValue="10" radLabel="White Chocolate"/>
            <RadioBtn radName="flav" radValue="10" radLabel="Mocha"/>
            <RadioBtn radName="flav" radValue="10" radLabel="Truffle"/>
            <RadioBtn radName="flav" radValue="10" radLabel="Caramel"/>
            <RadioBtn radName="flav" radValue="10" radLabel="Berries and Whipped Cream"/>
        </div>
    )
}

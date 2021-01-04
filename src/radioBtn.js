import React from 'react'

export default function radioBtn({radName,radValue,radLabel}) {
    return (
        <div>
            <input type="radio" name={radName} value={radValue} className="m-1" />
            <label for={radName}>{radLabel}</label><br />
        </div>
    )
}

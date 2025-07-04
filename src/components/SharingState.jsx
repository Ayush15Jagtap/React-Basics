import React from 'react'

function SharingState({label,value,onhov}) {
  return (
    <div>
        <label>

        {label}
        <input type="text" value={value} onChange={onhov} >
        
        </input>
        </label>



    </div>
  )
}

export default SharingState

import React from 'react'
import  './Input.css'
const input=(props)=>{
    return(
       <div>
           <label>{props.label}</label>
          <input
          value={props.value}
          placeholder={props.placeholder}
          className={props.cls}
          onChange={props.changed}
          />
       </div>
    );
}
export default input

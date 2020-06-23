import React from 'react'
import {NavLink,Link} from 'react-router-dom'

const Headers=()=>{
return(
    <div>
<nav>
       <button className="btnnav"><NavLink to="/register">register</NavLink></button>
       <button className="btnnav"><NavLink to="/login">login</NavLink></button>
    </nav>
    </div>
    
)
};export default Headers;


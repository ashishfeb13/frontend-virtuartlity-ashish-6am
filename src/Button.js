
import React from 'react';


const Button = (prop) =>{
        return(
        
        <button type="button" 
        className={`btn btn-primary${prop.className}`}
        >
            {prop.children}
        </button>
        // <button 
        // classNameSearch={prop}  //className="btn btn-outline-success my-2 my-sm-0"
        // >Search
        // </button> 
        

)

} 

export default Button;


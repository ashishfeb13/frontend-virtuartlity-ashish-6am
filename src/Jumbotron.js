import React from 'react';
import Button from './Button';



const Jumbotron = (prop) => {
return (
    <div>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                
                {/* ------ below {prop.title}  is for getting title from app.js ----- */}
                    <h1 className="display-4">{prop.title}</h1> 
                    <p className="lead">
                
                 {/* ------ below {prop.description}  is for getting description from app.js ----- */}           
                        {prop.description}</p>
                
                {/* ------ below {prop.children}  is for the button for signup in jumbotron from app.js ----- */}
                        {prop.children}

                </div>

                    {/* <p class="text-justify">Register to contribute to the gallery, receive our newsletter, access our members only area or make purchases</p>
                        <form className="form-inline my-2 my-lg-">
                          <input className="form-control mr-sm-2" type="email" placeholder="Enter your email" aria-label="Search"/>
                          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Register for NewsLetter</button>
                          
                        </form> */}

            </div>

        

            

    </div>


        )
    }

export default Jumbotron;
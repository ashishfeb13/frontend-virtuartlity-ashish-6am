import React from 'react';
import Button from './Button.js'


const NavBar = () =>{
    return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                      <a className="navbar-brand" href="#">Home</a>
                      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                      </button>
    
                      <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              Overview
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                              <a className="dropdown-item" href="#">Action</a>
                              <a className="dropdown-item" href="#">Another action</a>
                              <div className="dropdown-divider"></div>
                              <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                          </li>
                          <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              Gallery
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                              <a className="dropdown-item" href="#">Action</a>
                              <a className="dropdown-item" href="#">Another action</a>
                              <div className="dropdown-divider"></div>
                              <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                          </li>
                          <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              Events
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                              <a className="dropdown-item" href="#">Action</a>
                              <a className="dropdown-item" href="#">Another action</a>
                              <div className="dropdown-divider"></div>
                              <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="#">Artists</a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="#">News</a>
                          </li>
                          
                        </ul>
                        <form className="form-inline my-2 my-lg-">
                          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                          
                          <div style={{disply: 'flex'}}>
                          {/* <Button className="btn btn-outline-success">Search</Button> */}
                            
                            <Button className="btn btn-outline-success"
                            >Search</Button>

                            <Button 
                            type="button" 
                            className="btn btn-primary"
                            >Sign-In</Button>

                            <button 
                            type="button" 
                            className="btn btn-danger"
                            >Sign-Up</button>

                            {/* <Button 
                            className="btn btn-outline-success">
                                Sign-In
                                
                            </Button> */}
                          </div>
                        </form>
                        
                      </div>
                        {/* ---------------------------------------
                            adding a button for sinup and signin
                            ------------------------------------------- 
                        <button type="button" className="btn btn-primary">Sign-In/Logout</button>
                        */}
                    </nav>
    
    )
    
    }

    export default NavBar;
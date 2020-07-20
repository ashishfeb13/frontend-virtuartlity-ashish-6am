import React from 'react';
import Button from './Button.js';
import Card from './Card.js';
import Jumbotron from './Jumbotron.js'
import NavBar from './NavBar.js'

import './App.css';
//import Cards from './Cards.js';
//import logo from './logo.svg';


const App = () => {
  return (
         
     <div>
      <NavBar /> 
      <Jumbotron 
      title="Welcome to VertuARTlity" 
      description="Welcome to the Middle East's 
      Virtual ART Gallery for artists and connoisseurs"
      >
      
        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Sign-up for NewsLetters" aria-label="Sign-up for NewsLetters" aria-describedby="basic-addon2"/>
            <div className="input-group-append">
              <button className="btn btn-outline-secondary" type="button">Sign-Up</button>
            </div>
        </div>
        </Jumbotron> 

        <Jumbotron title="carousel for pics" description="we will add pics here" >
      <div>
        
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                  <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img className="d-block w-2 h-2" src="https://images.all-free-download.com/images/graphiclarge/pink_flowers_with_bees_hd_picture_166824.jpg" alt="carouselExample First slide"/>
                  </div>
                  <div className="carousel-item">
                    <img className="d-block w-2 h-2" src="https://images.all-free-download.com/images/graphiclarge/flower_summer_flowers_yellow_flower_215887.jpg" alt="Second slide"/>
                  </div>
                  <div className="carousel-item">
                    <img className="d-block w-2 h-2" src="https://render.fineartamerica.com/images/rendered/default/acrylic-print/8/8/hangingwire/break/images/artworkimages/medium/1/day-lilies-anna-rose-bain.jpg" alt="Third slide"/>
                  </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
      </div>

        </Jumbotron>
        
        <Jumbotron title="items" description="some description for items" >
                {/* ------------------New Jumbotron for adding cards- 1st working card ----------------- 
                  <div className="card" style={{width: "18rem"}}>
                      <img className="card-img-top" src="..." alt="Card image cap"/>
                      <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">Some quick exam.............card's content.</p>
                      <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>
                -------------------------now below is prop for cards to redirect card.js -----------------------------------------------*/}
                 
                 {/* ------------- workin code for cards default before prop-
                 <div style={{display:'flex' , width: '100%' , justifyContent: 'space-between'}}>
                  { 
                  ['photoraphy', 'Canvas', 'Landscape'].map
                      (
                        (brand)=>
                        <Card 
                        title="Canvas "
                        description="Painting"
                        image="https://images.unsplash.com/photo-1579783483458-83d02161294e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=856&q=80"
                        buttonLable="Buy"
                        buttonLink="#"
                        />
                      )
                  }

                 -------------------------------------------------------
                  */}
                 
                 <div style={{display:'flex' , width: '100%' , justifyContent: 'space-between'}}>
                  { 
                  ['photoraphy', 'Canvas', 'Landscape'].map
                      (
                        (brand)=>
                        <Card 
                        title="Canvas "
                        description="Painting"
                        image="https://images.unsplash.com/photo-1579783483458-83d02161294e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=856&q=80"
                        buttonLable="Buy"
                        buttonLink="#"
                        />
                      )
                  }


                 </div>


        </Jumbotron>

     </div>     

  );
}

export default App;

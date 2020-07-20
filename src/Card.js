import React from 'react';


const Card = (prop) => {        
return (
    <div className="card" style={{width: "18rem"}}>
    <img className="card-img-top" src={prop.image} alt="Card image cap"/>
    <div className="card-body">
        <h5 className="card-title">{prop.title}</h5>
            <p className="card-text">{prop.description}</p>
            <a href={prop.buttonLink} className="btn btn-primary">{prop.buttonLable}</a>
    </div>
  </div>

    
)
    }

export default Card;
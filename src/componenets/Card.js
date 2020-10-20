import React from 'react';

const Card = (props) => {
    return (
      <div className={`card ${props.class}`}>
        <h3>{props.header}</h3>
        <p>{props.para}</p>
        <div className="image-container">
          <img src={process.env.PUBLIC_URL + props.imgPath} alt="marvel-logo" width="50px" height="50px"/>
        </div>
    </div>
    )
  }

  export default Card;
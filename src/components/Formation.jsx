import React from 'react';
import '../css/Formation.css';

function Formation(props) {
  const { title, title2, link, picture, description } = props;
  return (
    <div className='formationCard'>
      <h4 className='title'>{title}</h4>
      <h4 className='title2'>{title2}</h4>
      <div className='descriptionBox'>
        <div className='picture'>
          <a href={link}>
            <img src={picture}></img>
          </a>
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Formation;

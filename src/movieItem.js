import React from 'react';

export default function MovieItem(props) {
    return (
      <div className='item'>
        <img src={props.image} alt={`{$props.title}`} />
        <div className='overlay'>
          <h2>{props.title}</h2>
        </div>
      </div>
    );
  }
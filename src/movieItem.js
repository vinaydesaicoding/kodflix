import React from 'react';
import { Link } from 'react-router-dom';

export default function MovieItem(props) {
  return (
    <Link to={`/${props.id}`} className='item'>
      <img src={props.image} alt={`{$props.title}`} />
      <div className='overlay'>
        <h2>{props.title}</h2>
      </div>
    </Link>
  );
}



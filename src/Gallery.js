import React from 'react';
import MovieItem from './movieItem';
import GetGallery from './GetGallery'

export default function Gallery() {
  return (
    <div>
      <h1>Welcome to Kodflix</h1>
      <div className='container'>
       {
         GetGallery().map(stack => (
           <MovieItem 
            key={stack.id}
            id={stack.id} 
            title={stack.title} 
            image={stack.image} />
         ))
       }
      </div>
    </div>
  );
}




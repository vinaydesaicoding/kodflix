import React from 'react';
import MovieItem from './movieItem';
import mementoCover from './images/memento.jpg';
import americanPsychoCover from './images/americanPsycho.jpg';
import theWolfOfWallStreetCover from './images/theWolfOfWallStreet.jpg';
import inceptionCover from './images/inception.jpg';
import boratCover from './images/borat.jpg';
import thisIsSpinalTapCover from './images/thisIsSpinalTap.jpg';

export default function Gallery() {
  return (
    <div>
      <h1>Welcome to Kodflix</h1>
      <div className='container'>
        <MovieItem id='memento' title='Memento' image={mementoCover} />
        <MovieItem id='american-psycho' title='American Psycho' image={americanPsychoCover} />
        <MovieItem id='the-wolf-of-wall-street' title='The Wolf of Wall Street' image={theWolfOfWallStreetCover} />
      </div>
      <div className='container'>
        <MovieItem id='inception' title='Inception' image={inceptionCover} />
        <MovieItem id='borat' title='Borat' image={boratCover} />
        <MovieItem id='this-is-spinal-tap' title='This is Spinal Tap' image={thisIsSpinalTapCover} />
      </div>
    </div>
  );
}
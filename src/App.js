import React from 'react';
import MovieItem from './movieItem';
import mementoCover from './images/memento.jpg';
import americanPsychoCover from './images/americanPsycho.jpg';
import theWolfOfWallStreetCover from './images/theWolfOfWallStreet.jpg';
import inceptionCover from './images/inception.jpg';
import boratCover from './images/borat.jpg';
import thisIsSpinalTapCover from './images/thisIsSpinalTap.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <h1>Welcome to Kodflix</h1>  
        <div className='container'> 
          <MovieItem title='Memento' image={mementoCover}/>
          <MovieItem title='American Psycho' image={americanPsychoCover} />
          <MovieItem title='The Wolf of Wall Street' image={theWolfOfWallStreetCover}/>
        </div> 
        <div className='container'>
          <MovieItem title='Inception' image={inceptionCover}/>
          <MovieItem title='Borat' image={boratCover} />
          <MovieItem title='This is Spinal Tap' image={thisIsSpinalTapCover}/>
        </div>
      </div>
    </div>   
  );
}



export default App;
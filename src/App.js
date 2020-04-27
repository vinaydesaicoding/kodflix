import React from 'react';
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
          <div className='item'><img src={mementoCover}  alt='memento' />
            <div className='overlay'><h2>Memento</h2></div>
          </div>
          <div className='item'><img src={americanPsychoCover} alt='americanPsycho' />
          <div className='overlay'><h2>American Psycho</h2></div>
          </div>
          <div className='item'><img src={theWolfOfWallStreetCover} alt='theWolfOfWallStreet' />
            <div className='overlay'><h2>The Wolf of Wall Street</h2></div>
          </div>
        </div> 
        <div className='container'>
          <div className='item'><img src={inceptionCover} alt='inception' />
            <div className='overlay'><h2>Inception</h2></div>
          </div>
          <div className='item'><img src={boratCover} alt='borat' />
            <div className='overlay'><h2>Borat</h2></div>
          </div>
          <div className='item'><img src={thisIsSpinalTapCover} alt='thisIsSpinalTap' />
            <div className='overlay'><h2>This is Spinal Tap</h2></div>
          </div>
        </div>
      </div>
    </div>   
  );
}

export default App;
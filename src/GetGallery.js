import mementoCover from './images/memento.jpg';
import americanPsychoCover from './images/americanPsycho.jpg';
import theWolfOfWallStreetCover from './images/theWolfOfWallStreet.jpg';
import inceptionCover from './images/inception.jpg';
import boratCover from './images/borat.jpg';
import thisIsSpinalTapCover from './images/thisIsSpinalTap.jpg';

export default function GetGallery() {
    return [
      {id: 'memento', title: 'Memento', image: mementoCover},
      {id: 'american-psycho', title: 'American Psycho', image: americanPsychoCover},
      {id: 'the-wolf-of-wall-street', title: 'The Wolf of Wall Street', image: theWolfOfWallStreetCover},
      {id: 'inception', title: 'Inception', image: inceptionCover},
      {id: 'borat', title: 'Borat', image: boratCover},
      {id: 'this-is-spinal-tap', title: 'This is Spinal Tap', image: thisIsSpinalTapCover}
    ];
  }
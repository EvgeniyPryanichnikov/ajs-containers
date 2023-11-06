import './css/style.css';
import showCreatingTeam from './js/Team';
import showMap from './js/ErrorRepository';
import showSettings from './js/Settings';

//  first task about Set
showCreatingTeam();

//  second task about Map
showMap();

//  third task about Map for game
showSettings(
  ['theme', 'light'],
  ['music', 'trance'],
  ['difficulty', 'nightmare'],
);

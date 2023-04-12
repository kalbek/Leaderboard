import './style.css';
import Leaderboard from './modules/Leaderboard.js';

function component() {
  const element = document.createElement('div');

  const addScore = document.getElementById('submit');
  addScore.addEventListener('click', (e) => {
    e.preventDefault();
    Leaderboard.addScore();
  });

  return element;
}

document.body.appendChild(component());

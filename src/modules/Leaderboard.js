class Leaderboard {
  // define api end-point
  static apiEndPoint =
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/zeuHJjnZPKYf0b8na598/scores/';

  static addScore = async () => {
    // grab the name and score from input
    const name = document.getElementById('name');
    const score = document.getElementById('score');

    const action = {
      method: 'POST',
      body: JSON.stringify({
        user: name.value,
        score: score.value,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    };
    // post a user and score on api
    if (name.value !== null && score.value !== null) {
      await fetch(this.apiEndPoint, action).then((response) => response.json());
    }
    // clear name and score fields
    name.value = '';
    score.value = '';
  };

  // get all users and thir scores from api
  static getScores = async () => {
    const response = await fetch(this.apiEndPoint, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then((response) => response.json());
    return response;
  };

  static updateUI = async () => {
    // get the current leaderboard from api
    const leaderboard = await Leaderboard.getScores();
    const scoreTable = document.querySelector('.score-table');
    // clear current table first
    scoreTable.innerHTML = '';
    // finally update list on Leaderboard table
    leaderboard.result.forEach((s) => {
      const d = document.createElement('div');
      d.classList.add('score');
      d.innerText = `Name: ${s.user}   ${s.score}`;
      scoreTable.appendChild(d);
    });
  };
}
module.exports = Leaderboard;

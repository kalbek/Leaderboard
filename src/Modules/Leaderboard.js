class Leaderboard {
  // define api end-point
  static apiEndPoint =
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/YR6UdUAwI76be9FlHAuj/scores/';

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


}
module.exports = Leaderboard;

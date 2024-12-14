//FETCH READING JSON FILES
const teams_json = 'data/teams.json';
const cards = document.querySelector('#champions');
let teamsList = {};

async function getTeamsData() {
  const response = await fetch(teams_json);
  teamsList = await response.json();

  renderTeams(teamsList.teams);
}



function renderTeams(teams) {

  cards.innerHTML = '';

  teams.map((team) => {
    if (team.championship_titles.length > 0) {
      const teamDiv = document.createElement('div');
      teamDiv.classList.add('card');
      const picture = document.createElement('picture');
      const img = document.createElement('img');
      img.setAttribute('src', `${team.team_badge}`);
      img.setAttribute('alt', `Badge of ${team.name}`);
      img.setAttribute('loading', 'lazy');
      picture.appendChild(img);
      const teamH3 = document.createElement('h3');
      teamH3.textContent = `${team.name}`;
      teamDiv.appendChild(teamH3);
      teamDiv.appendChild(picture);
      teamDiv.addEventListener("click", () => {
        displayTeamDetails(team);
      });
      cards.appendChild(teamDiv);
    }
  });

}

// Store the selected elements that we are going to use. 
const championDetails = document.querySelector('#dialogBox');

function displayTeamDetails(team) {

  championDetails.innerHTML = '';
  championDetails.innerHTML = `
        <div>
        <h3>${team.name} Championship Titles</h3>
        <hr>
        <p><strong>Years</strong>: ${team.championship_titles.join(', ')}</p>
        </div>
        <button id="closeBtn">Close</button>
    `;
  const closeModal = document.querySelector('#closeBtn');
  closeModal.addEventListener("click", () => championDetails.close());
  championDetails.showModal();
}




getTeamsData();


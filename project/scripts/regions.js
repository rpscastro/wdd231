//FETCH READING JSON FILES
const teams_json = 'data/teams.json';
const cards = document.querySelector('#cards');
let teamsList = {};

async function getTeamsData() {
  const response = await fetch(teams_json);
  teamsList = await response.json();

  renderTeams(teamsList.teams);
}

function renderTeams(teams) {
  const html = teams.map(
    (team) => `<div class="card team_info">
    <picture>
      <img src=${team.team_badge} alt="Badge of ${team.name}" loading="lazy" >
    </picture>
    <div>
      <h3 id="title">${team.name}</h3>
      <p><span class="label">Mascot:</span> ${team.mascot}</p>
      <p><span class="label">State:</span> ${team.state}</p>
      <p><span class="label">Region:</span> ${team.region}</p>
    </div>
    </div>`
  );
  cards.innerHTML = html.join("");
}

/* reset Function */
function reset(){
  while(cards.firstChild){
    cards.removeChild(cards.firstChild);
  }
}

/* filterTeams Function */
function filterTeams(teams) {
  this.reset();

  let filter = document.querySelector("#region-filter").value;


  switch (filter) {
      case "midwest":
        renderTeams(teams.filter(team => (team.region == "Midwest")));
          break;
      case "north":
        renderTeams(teams.filter(team => (team.region == "North")));
          break;
      case "northeast":
        renderTeams(teams.filter(team => (team.region == "Northeast")));
          break;
      case "south":
        renderTeams(teams.filter(team => (team.region == "South")));
          break;
      case "southeast":
        renderTeams(teams.filter(team => (team.region == "Southeast")));
          break;
      case "all":
        renderTeams(teams);
          break;

  }

}

getTeamsData();

/* Event Listener */
document.querySelector("#region-filter").addEventListener("change", () => {filterTeams(teamsList.teams)});
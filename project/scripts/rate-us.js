const timestampInput = document.querySelector("#timestamp");
const loadDate = new Date();
timestampInput.value = `${loadDate}`;

//FETCH READING JSON FILES
const teams_json = 'data/teams.json';
let teamsList = {};

async function getTeamsData() {
  const response = await fetch(teams_json);
  teamsList = await response.json();

  renderTeams(teamsList.teams);
}



function renderTeams(teams) {

  const html = teams.map(
    (team) => `<option value=${team.name}>${team.name}</option>`
);
html.push('<option value=other>Other</option>');
html.unshift("<option disabled selected value=''>Choose a team...</option>");
document.querySelector("#select").innerHTML = html.join("");

}

getTeamsData();

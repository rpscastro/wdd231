//FETCH READING JSON FILES
const members_json = 'data/members.json';
const cards = document.querySelector('#cards');

async function getMemberData() {
  const response = await fetch(members_json);
  const data = await response.json();
  renderMembers(data.members);
}


function renderMembers(members) {
  const html = members.map(
    (member) => `<div class="card">
    <picture>
      <img src=${member.image} alt=${member.name} loading="lazy" width="400" height="250">
    </picture>
    <h3 id="title">${member.name}</h3>
    <p><span class="label">Address:</span> ${member.address}</p>
    <p><span class="label">Phone:</span> ${member.phone}</p>
    <p><span class="label">Sector:</span> ${member.sector}</p>
    <p><span class="label">Website: <a href= ${member.website} target="_blank" title="Website">Website</a></p>
    <p><span class="label">Membership level:</span> ${member.membership_level}</p>
    </div>`
  );
  document.querySelector("article").innerHTML = html.join("");
}

getMemberData();

//SWITCH GRID AND LIST

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
  // example using arrow function
  display.classList.add("cards");
  display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
  display.classList.add("list");
  display.classList.remove("cards");
}
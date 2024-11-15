const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';


// button elements
const all = document.querySelector("#all");
const idaho = document.querySelector("#idaho");
const nonus = document.querySelector("#nonus");
const ten = document.querySelector("#ten");
const childs = document.querySelector("#childs");
const childl = document.querySelector("#childl");
const old = document.querySelector("#old");



const getProphets = async (filter = "all") => {
	let prophets = await getProphetData(url);

	switch (filter) {
		case "idaho":
			prophets = prophets.filter((prophet) => prophet.birthplace === "Idaho");
			break;
		case "nonus":
			prophets = prophets.filter((prophet) => prophet.birthplace === "England");
			break;
		case "ten":
			prophets = prophets.filter((prophet) => prophet.length >= 15);
			break;
		case "childs":
			prophets = prophets.filter((prophet) => prophet.numofchildren < 5);
			break;
		case "childl":
			prophets = prophets.filter((prophet) => prophet.numofchildren >= 10);
			break;
		case "old":
			prophets = prophets.filter(
				(prophet) => getAgeAtDeathInYears(prophet.birthdate, prophet.death) >= 95
			);
			break;
		default:
			break;
	}

	displayProphets(prophets);
};

async function getProphetData(url) {
  const response = await fetch(url);
  const data = await response.json();
  // console.table(data.prophets); // temporary testing of data response
   // note that we reference the prophets array of the JSON data object, not just the object
   return data.prophets;
}

const displayProphets = (prophets) => {
    const cards = document.getElementById("cards");
    cards.innerHTML = "";
    // card build code goes here
    prophets.forEach((prophet) => {
      // Create elements to add to the div.cards element
      let card = document.createElement('section');
      let fullName = document.createElement('h2'); // fill in the blank

      let stats = document.createElement("div");
      stats.classList.add("stats");
      let date = document.createElement("p");
      let death = document.createElement("p");
      let ageatdeath = document.createElement("p");
      let length = document.createElement("p");
      let place = document.createElement("p");
      let num = document.createElement("p");

      let portrait = document.createElement('img');

      // Build the h2 content out to show the prophet's full name
      fullName.textContent = `${prophet.name} ${prophet.lastname}`; // fill in the blank

      date.innerHTML = `<span class="label">Birth:</span> ${prophet.birthdate}`;
		  place.innerHTML = `<span class="label">Place:</span> ${prophet.birthplace}`;
		  num.innerHTML = `<span class="label">Children:</span> ${prophet.numofchildren}`;
		  length.innerHTML = `<span class="label">Prophet Years:</span> ${prophet.length}`;
		  death.innerHTML = `<span class="label">Death:</span> ${prophet.death}`;
		  ageatdeath.innerHTML = `<span class="label">Age:</span> ${getAgeAtDeathInYears(
			prophet.birthdate,
			prophet.death
		)}`;



      // Build the image portrait by setting all the relevant attributes
      portrait.setAttribute('src', prophet.imageurl);
      portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`); // fill in the blank
      portrait.setAttribute('loading', 'lazy');
      portrait.setAttribute('width', '340');
      portrait.setAttribute('height', '440');


      stats.appendChild(date);
      stats.appendChild(place);
      stats.appendChild(num);
      stats.appendChild(length);
      stats.appendChild(death);
      stats.appendChild(ageatdeath);

      // Append the section(card) with the created elements
      card.appendChild(fullName); //fill in the blank
      card.appendChild(stats);
      card.appendChild(portrait);

      cards.appendChild(card);
    }); // end of arrow function and forEach loop
}


getProphets();

// buttons
all.addEventListener("click", () => {
	clearButtonClasses();
	getProphets("all");
	all.classList.add("active");
});

idaho.addEventListener("click", () => {
	clearButtonClasses();
	getProphets("idaho");
	idaho.classList.add("active");
});

document.querySelector("#nonus").addEventListener("click", () => {
	clearButtonClasses();
	getProphets("nonus");
	nonus.classList.add("active");
});

ten.addEventListener("click", () => {
clearButtonClasses();
	getProphets("ten");
	ten.classList.add("active");
});

childs.addEventListener("click", () => {
	clearButtonClasses();
	getProphets("childs");
	childs.classList.add("active");
});

childl.addEventListener("click", () => {
	clearButtonClasses();
	getProphets("childl");
	childl.classList.add("active");
});

old.addEventListener("click", () => {
	clearButtonClasses();
	getProphets("old");
	old.classList.add("active");
});

function getAgeAtDeathInYears(birthdate, deathdate) {
	let birth = new Date(birthdate);
	let death = new Date(deathdate);
	if (deathdate === null) {
		death = new Date();
	}
	return Math.floor((death - birth) / (365 * 24 * 60 * 60 * 1000));
}

function clearButtonClasses() {
	filterbuttons = document.querySelectorAll("button");
	filterbuttons.forEach(button => button.className="");
}
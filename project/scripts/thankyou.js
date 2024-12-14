function showNumberOfReviews() {
    // 1️⃣ Initialize display element variable
    const reviewsDisplay = document.getElementById("reviews");

    // 2️⃣ Get the stored VALUE for the numReviews-ls KEY in localStorage if it exists. If the numReviews KEY is missing, then assign 0 to the numReviews variable.
    let numReviews = Number(window.localStorage.getItem("numReviews-ls")) || 0;

    // 3️⃣ Determine if this is the first visit or display the number of reviews. We wrote this example backwards in order for you to think deeply about the logic.
    if (numReviews >= 1) {
        numReviews++;
        localStorage.setItem("numReviews-ls", numReviews);
        reviewsDisplay.textContent = `Number of reviews completed: ${numReviews}`;
    } else {
        numReviews++;
        localStorage.setItem("numReviews-ls", numReviews);
        reviewsDisplay.textContent = `This is your first review. 🥳 Welcome!`;
    }

};

showNumberOfReviews();

//FORM
//Grab the entire URL for this page including the attached GET values
const currentUrl = window.location.href;

//Divide the url into two halves
const everything = currentUrl.split('?');

//Grab just the second half
let formData = everything[1].split('&');

function show(cup) {

    formData.forEach((element) => {

        if (element.startsWith(cup)) {
            decodedString = decodeURIComponent(element)
            formattedString = decodedString.replace(/\+/g, ' ');
            result = formattedString.split('=')[1].replace("%40", "@")
        }// end if

    })
    return (result)
} //end show

const showInfo = document.querySelector('#results');

showInfo.innerHTML = `
<p>Participant ${show("first")} ${show("last")}</p>
<p>Your email <a href="mailto:${show("email")}"> ${show("email")}</a></p>
<p>You gave us ${show("rating")}  &star;</p>
<p>Form was submitted on ${show("timestamp")}</p>
`
    ;





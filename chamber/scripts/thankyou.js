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
<p>Application from ${show("first")} ${show("last")}</p>
<p>Business Name: ${show("organization")}</p>
<p>Your phone ${show("phone")}</p>
<p>Your email <a href="mailto:${show("email")}"> ${show("email")}</a></p>
<p>Form was submitted on ${show("timestamp")}</p>
`
    ;



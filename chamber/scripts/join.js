const timestampInput = document.querySelector("#timestamp");
const loadDate = new Date();
timestampInput.value = `${loadDate}`;

//DIALOG BOXES
const NonProfitBtn = document.querySelector("#NonProfitBtn");
const BronzeLvlBtn = document.querySelector("#BronzeLvlBtn");
const SilverLvlBtn = document.querySelector("#SilverLvlBtn");
const GoldLvlBtn = document.querySelector("#GoldLvlBtn");


const dialogBox = document.querySelector("#dialogBox");
const dialogText = document.querySelector("#dialogBox div");
const closeButton = document.querySelector("#closeBtn");

// "Show the dialog" button opens the dialog modally
NonProfitBtn.addEventListener("click", () => {
    dialogBox.showModal();
    dialogText.innerHTML = `
            
            <h3>Non Profit Membership</h3>
            <hr>
            <p><strong>Benefits include:</strong></p>
            <ul>
                <li>Attend the chamber of commerce meetings and free courses </li>
                <li>Publish your business in the directory page</li>             
            </ul>
            <p><strong>COST:</strong> Free</p>
       `;
});

BronzeLvlBtn.addEventListener("click", () => {
    dialogBox.showModal();
    dialogText.innerHTML = `
            
            <h3>Bronze Membership</h3>
            <hr>
            <p><strong>Benefits include:</strong></p>
            <ul>
                <li>Attend the chamber of commerce meetings and free courses</li>
                <li>Attend all the Bronze Level courses</li>
                <li>Publish your business in the directory page</li>               
            </ul>
            <p><strong>COST:</strong> $50 annual</p>
       `;
});

SilverLvlBtn.addEventListener("click", () => {
    dialogBox.showModal();
    dialogText.innerHTML = `
            
            <h3>Silver Membership</h3>
            <hr>
            <p><strong>Benefits include:</strong></p>
            <ul>
                <li>Attend the chamber of commerce meetings and free courses</li>
                <li>Attend all the Bronze and Silver Level courses</li>
                <li>Publish your business in the directory page</li>               
            </ul>
            <p><strong>COST:</strong> $75 annual</p>
       `;
});

GoldLvlBtn.addEventListener("click", () => {
    dialogBox.showModal();
    dialogText.innerHTML = `
            
            <h3>Gold Membership</h3>
            <hr>
            <p><strong>Benefits include:</strong></p>
            <ul>
                <li>Attend the chamber of commerce meetings and free courses</li>
                <li>Attend all the Bronze, Silver and Gold Level courses</li>
                <li>Publish your business in the directory page</li>
                <li>Consulting services to boost your business</li>
                <li>Have your business shown in the home page</li>                  
            </ul>
            <p><strong>COST:</strong> $100 annual</p>
       `;
});





// "Close" button closes the dialog
closeButton.addEventListener("click", () => {
    dialogBox.close();
});

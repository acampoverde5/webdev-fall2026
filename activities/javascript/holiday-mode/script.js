// STEP 1: Track whether holiday mode is on

let isHolidayMode = false;

// STEP 2: Create the function that runs when the button is clicked

function changeTheme() {
    // STEP 3: get the button and the elements to change

    const button = document.getElementById('theme-toggle');
    const header = document.getElementById('site-header');
    const title = document.getElementById('page-title');
    const heading = document.getElementById('welcome-heading');
    const footer = document.getElementById('site-footer');
    const menu = document.getElementById('menu-box');
    const text = document.getElementById('welcome-text');

    const normalMusic = new Audio("Normal.mp3");
    const turkeyMusic = new Audio("Patrick.mp3");

// STEP 4: if holiday mode wasn't on, turn it on

    if (isHolidayMode === false) {
        normalMusic.pause();
        turkeyMusic.play();
        document.body.style.backgroundColor = "lightgreen";
        header.style.backgroundColor = "green";
        title.style.color = "lightgreen";
        heading.style.color = "darkgreen";
        footer.style.backgroundColor = "green";
        menu.style.backgroundColor = "lightblue";
        text.style.color = "lightgreen";
        footer.style.color = "lightgreen";

        title.textContent = "Welcome to the Saint Patrick's Day Bakery!";
        heading.textContent = "Happy Saint Patrick's Day!";
        button.textContent = "Normal Mode";
        document.body.style.backgroundImage = "linear-gradient(to right, darkgreen, lightgreen, darkgreen)";
        

        isHolidayMode = true;
        }
     
// STEP 5: if holiday mode was on, turn it off
    else {
        turkeyMusic.play();
        normalMusic.pause();
        document.body.style.backgroundColor = "";
        header.style.backgroundColor = "";
        title.style.color = "";
        heading.style.color = "";
        footer.style.backgroundColor = "";
        menu.style.backgroundColor = "";
        text.style.color = "";
         footer.style.color = "";

        title.textContent = "Sunny Side Bakery";
        heading.textContent = "Welcome!";
        button.textContent = "Holiday Mode";
        document.body.style.backgroundImage = "";

        isHolidayMode = false;
    }
}
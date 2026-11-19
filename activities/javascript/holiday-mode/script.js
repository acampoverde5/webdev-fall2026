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

// STEP 4: if holiday mode wasn't on, turn it on

    if (isHolidayMode === false) {
        document.body.style.backgroundColor = "lightgreen";
        header.style.backgroundColor = "green";
        title.style.color = "lightgreen";
        heading.style.color = "darkgreen";
        footer.style.backgroundColor = "green";
        menu.style.backgroundColor = "lightblue";
        text.style.color = "black";
        footer.style.color = "lightblue";

        title.textContent = "Welcome to the Saint Patrick's Day Bakery!";
        heading.textContent = "Happy Saint Patrick's Day!";
        button.textContent = "Normal Mode";

        isHolidayMode = true;
    }
     
// STEP 5: if holiday mode was on, turn it off
    else {
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
        isHolidayMode = false;
    }
}
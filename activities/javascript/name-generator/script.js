function generateName() {

    const month = document.getElementById("month").value;
    const age = document.getElementById("age").value;
    const color = document.getElementById("color").value;

    let firstName = "";
    let lastName = "";
    let middleName = "";

    //Month
    if (month === "January") {
        firstName = "Fluffy";
    } else if (month === "February") {
        firstName = "Sparkly";
    } else if (month === "March") {
        firstName = "Bouncy";
    } else if (month === "April") {
        firstName = "Silly";
    } else if (month === "May") {
        firstName = "Happy";
    } else if (month === "June") {
        firstName = "Sleepy";
    } else if (month === "July") {
        firstName = "Crazy";
    } else if (month === "August") {
        firstName = "Smelly";
    } else if (month === "September") {
        firstName = "Funny";
    } else if (month === "October") {
        firstName = "Wacky";
    } else if (month === "November") {
        firstName = "Goofy";
    } else if (month === "December") {
        firstName = "Silly";
    } else {
        firstName = "Unknown";
    }

    //Age
    if (age < 13) {
        middleName = "the Brave";
    } else if (age < 18) {
        middleName = "the Cool";
    } else {
        middleName = "the Wise";
    }

    //Color
    if (color === "red") {
        lastName = "Fire";
    } else if (color === "blue") {
        lastName = "Ice";
    } else if (color === "green") {
        lastName = "Forest";
    } else {
        lastName = "Wind";
    }

    // Combine name
    const name = firstName + " " + middleName + " " + lastName;

    // Display name
    document.getElementById("result").textContent = name;
}
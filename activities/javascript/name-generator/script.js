function generateName() {

    const month = document.getElementById("month").value;
    const age = document.getElementById("age").value;
    const color = document.getElementById("color").value;

    let firstName = "";
    let lastName = "";
    let middleName = "";

    const resultParagraph = document.getElementById("result");
    //Month
    if (month === "January") {
        firstName = "Fluffy";
        resultParagraph.style.color = "white";
        resultParagraph.style.backgroundColor = "lightblue";
    } else if (month === "February") {
        firstName = "Sparkly";
        resultParagraph.style.color = "white";
        resultParagraph.style.backgroundColor = "pink";
    } else if (month === "March") {
        firstName = "Bouncy";
        resultParagraph.style.color = "white";
        resultParagraph.style.backgroundColor = "green";
    } else if (month === "April") {
        firstName = "Silly";
        resultParagraph.style.color = "white";
        resultParagraph.style.backgroundColor = "yellow";
    } else if (month === "May") {
        firstName = "Happy";
        resultParagraph.style.color = "white";
        resultParagraph.style.backgroundColor = "orange";
    } else if (month === "June") {
        firstName = "Sleepy";
        rsesultParagraph.style.color = "white";
        resultParagraph.style.backgroundColor = "purple";
    } else if (month === "July") {
        firstName = "Crazy";
        resultParagraph.style.color = "white";
        resultParagraph.style.backgroundColor = "red";
    } else if (month === "August") {
        firstName = "Smelly";
        resultParagraph.style.color = "white";
        resultParagraph.style.backgroundColor = "brown";
    } else if (month === "September") {
        firstName = "Funny";
        resultParagraph.style.color = "white";
        resultParagraph.style.backgroundColor = "gray";
    } else if (month === "October") {
        firstName = "Wacky";
        resultParagraph.style.color = "white";
        resultParagraph.style.backgroundColor = "black";
    } else if (month === "November") {
        firstName = "Goofy";
        resultParagraph.style.color = "white";
        resultParagraph.style.backgroundColor = "blue";
    } else if (month === "December") {
        firstName = "Silly";
        resultParagraph.style.color = "white";
        resultParagraph.style.backgroundColor = "green";
    } else {
        firstName = "Unknown";
        resultParagraph.style.color = "black";
        resultParagraph.style.backgroundColor = "white";
    }

    //Age
    if (age < 13) {
        middleName = "the Brave";
    } else if (age < 18) {
        middleName = "the Best";
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
        lastName = "Unicorn";
    }

    // Combine name
    const name = firstName + " " + middleName + " " + lastName;

    // Display name
    document.getElementById("result").textContent = name;
}
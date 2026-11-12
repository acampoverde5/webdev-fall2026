function create() {
    // get the value typed into the name input by the user
    const name1 = document.getElementById("nameInput1").value;
    const name2 = document.getElementById("nameInput2").value;
    const adjective = document.getElementById("adjectiveInput").value;
    const verb = document.getElementById("verbInput").value;
    const number = document.getElementById("numberInput").value;
    const animal = document.getElementById("animalInput").value;
    const food = document.getElementById("foodInput").value;
    const color = document.getElementById("colorInput").value;
    const place = document.getElementById("placeInput").value;
    const object = document.getElementById("objectInput").value;
    // create story
    const story =
    "One day, " + name1 + " was walking through the forest and saw a " + adjective + " " + animal + ". " +
    "The " + animal + " was " + verb + "ing and had a " + color + " " + object + ". " +
    name1 + " was so surprised that they dropped their " + food + ". " +
    name2 + " came to help and they both went to " + place + ". " +
    "They had a great time and ate the " + food + ". The end.";

    // print story on webpage
    document.getElementById("madlib").textContent = story;
}
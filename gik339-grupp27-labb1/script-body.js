/* Hämtar div textbox med hjälp av DOM-funktion getElementsByClassName, där classname är textbox */
function getDiv() {
    let textbox = document.getElementsByClassName("textBox").innerHTML;
}
/* Hämtar input med hjälp av DOM-funktion getElementById, där id är color */
function getColor() {
    let color = document.getElementById("color").innerHTML;
}
/* Hämtar textfält med hjälp av DOM-funktion getElementByClassName, där className är textfield*/
function getTextfield() {
    let textfield = document.getElementByClassName("textField").innerHTML;
}
/* Hämtar content med hjälp av DOM-funktion getElementById, där id är content*/
function getContent() {
    let content = document.getElementById("content").innerHTML;
}
eventLyssnare();
/* Hämtar textfält med hjälp av DOM-funktion getElementByClassName, där className är textfield*/
function getTextfield1() {
    let textfield1 = document.getElementByClassName("textField").innerHTML;
}
/* Hämtar divStyle med hjälp av DOM-funktion getElementById, där id är divStyle*/
function getDivStyle() {
    let divStyle = document.getElementById("divStyle").innerHTML;
}
/* Hämtar checkbox med hjälp av DOM-funktion getElementByClassName, där className är checkbox*/
function getCheckbox() {
    let checkbox = document.getElementByClassName("checkBox").innerHTML;
}
/* Hämtar knappen med hjälp av DOM-funktion getElementByTagName, där tagName är delete*/
function getButton() {
    let button = document.getElementsByTagName("delete").innerHTML;
}
/* Skapar en funktion (eventlyssnare) som när den triggas 
ska avsändaren (target) skrivas ut till konsolen. Om avsändaren (target) 
är inputfältet content, ska dess värde skrivas ut till div-elementet */

function eventLyssnare(event) {
    /* alert("Target")
    content.addEventListener("click", eventLyssnare); */
    let e = event || window.event;
/* Skriver ut till konsolen vilket inputfält som genererade eventet (target) */
    console.log("Event triggered by: " + e.content.id);

/* Tar reda på inputfältets name attribut*/
    let fieldName = e.target.name;

    /* Om name-attributet är "content" */
    if (fieldName == "content") {
        let outputDiv = document.getElementById("output");

        /* Skriver ut värdet i inputfältet till div-elementet */
        outputDiv.innerHTML = "Input value: " + e.content.value;
    }
}

/* Hämtar input-elementet */
const contentInput = document.getElementById("content");

/* Lägger till en eventlyssnare till input-elementet */
contentInput.addEventListener("input", handleInput);
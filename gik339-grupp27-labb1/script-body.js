/* Hämtar div textbox med hjälp av getElementsByClassName, där classname är textbox */
const textBox = document.getElementsByClassName("textBox");

/* Hämtar input med hjälp av getElementById, där id är color */
const color = document.getElementById("color");

/* Hämtar textfält med hjälp getElementByClassName, där className är textfield*/
const textfield = document.getElementsByClassName("textField");

/* Hämtar content med hjälp av getElementById, där id är content*/
const content = document.getElementById("content");



/* eventLyssnare(); */
/* Hämtar textfält med hjälp av querySelector, där className är textfield*/
const textfield1 = document.querySelector(".textField");

/* Hämtar divStyle med hjälp av getElementById, där id är divStyle*/
const divStyle = document.getElementById("divStyle");

/* Hämtar checkbox med hjälp av getElementByClassName, där className är checkbox*/
const checkbox = document.getElementsByClassName("checkBox");

/* Hämtar knappen med hjälp av getElementByTagName, där tagName är delete*/
const button = document.querySelector("#delete");

/* Skapar en funktion (eventlyssnare) som när den triggas 
ska avsändaren (target) skrivas ut till konsolen. Om avsändaren (target) 
är inputfältet content, ska dess värde skrivas ut till div-elementet */

/* getTextfield1.addEventListener'click', () => {
    content = document.getElementsByName("content");
    content.for((content) => {
        if (content.checked) {
            output.innerText = `You selected: ${content.value}`;
        }
    }); */

/* function eventLyssnare(event) {*/
    /* alert("Target")
    content.addEventListener("click", eventLyssnare); */
    /* let e = event || window.event; */
/* Skriver ut till konsolen vilket inputfält som genererade eventet (target) */
   /*  console.log("Event triggered by: " + e.content.id);
 */
/* Tar reda på inputfältets name attribut*/
   /*  let fieldName = e.target.name;
 */
    /* Om name-attributet är "content" */
  /*   if (fieldName == "content") {
        let outputDiv = document.getElementById("output"); */

        /* Skriver ut värdet i inputfältet till div-elementet */
       /*  outputDiv.innerHTML = "Input value: " + e.content.value;
    }
}  */

/* Hämtar input-elementet */
/* const contentInput = document.getElementById("content"); */

/* Lägger till en eventlyssnare till input-elementet */
/* contentInput.addEventListener("input", handleInput); */
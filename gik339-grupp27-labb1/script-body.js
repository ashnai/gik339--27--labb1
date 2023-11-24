// Hämtar alla input-element med klassen 'textfield'
const inputFields = document.querySelectorAll('.textfield');

// Hämtar elementet där nya element ska visas
const dynamicDisplay = document.getElementById('dynamicDisplay');

// Hämtar input-fält för färg
const colorField = document.getElementById('color');

// Hämtar input-fält för text
const contentField = document.getElementById('content');

// Hämtar checkbox-elementet
const divStyleCheckbox = document.getElementById('divStyle');


// Kollar i consol loggen vad vi hämtar
console.log(inputFields, dynamicDisplay, colorField, contentField,divStyleCheckbox)


// Funktionen som hanterar eventet
function handleInputEvent(e) {
  // Skriver ut vilket element som genererade eventet
  console.log('Event genererat av:', e.target);
  // Hämtar name-attributet från elementet som genererade eventet
  const fieldName = e.target.name;
  // Kontrollerar om det är 'content'-fältet
  if (fieldName === 'content') {
      // Hämtar värdet från 'content'-fältet
      const contentValue = e.target.value;
      // Skriver ut värdet i 'content'-fältet till div-elementet
      dynamicDisplay.innerHTML = contentValue;
  }
}

// Lägger till eventlyssnare till alla input-fält
inputFields.forEach(field => field.addEventListener('input', handleInputEvent));


divStyleCheckbox.addEventListener('change', function() {
  if (this.checked) {
    // Sätter bakgrundsfärgen på dynamicDisplay baserat på värdet i colorField
    dynamicDisplay.style.backgroundColor = colorField.value;
    // Sätter innehållet i dynamicDisplay baserat på värdet i contentField
    dynamicDisplay.innerHTML = contentField.value;
  } else {
    // Återställer dynamicDisplay till standardinställningar när checkboxen inte är ikryssad
    dynamicDisplay.style.backgroundColor = ''; // Eller sätt en standardfärg
    dynamicDisplay.innerHTML = ''; // Eller sätt standardtext
  }
});


// Hämtar "Ta bort"-knappen
const deleteButton = document.querySelector("#delete");
// Lägger till en eventlyssnare på "Ta bort"-knappen

deleteButton.addEventListener('click', function() {
    // Hämtar dynamicDisplay-elementet
    const dynamicDisplay = document.getElementById('dynamicDisplay');
    console.log(deleteButton)
    // Rensar allt innehåll i dynamicDisplay när knappen klickas
    dynamicDisplay.style.backgroundColor = '';
    dynamicDisplay.innerHTML = '';
});

//getting checkboxes



let checkboxes = document.querySelectorAll('input[type="checkbox"]');

//add eventListener to each checkbox
checkboxes.forEach(function(checkbox){
  checkbox.addEventListener('change', function(){
    //get the label associated with the checkbox
    let label = document.querySelector('label[for="' + checkbox.id + '"]');

    // get the text content of the label
    let checkboxText = label.textContent;

    // get the text display element
    let textDisplay = document.getElementById('textDisplay');

    //check if the box is checked
  if(checkbox.checked) {

    // if checked append the text to the display elelment
    textDisplay.textContent += checkboxText + "\n";
    console.log(textDisplay.textContent);
  }

  else {
    //if unchecked remove the text from the display
    textDisplay.textContent = textDisplay.textContent.replace(checkboxText + "\n", '')
    console.log(textDisplay.textContent);
  }


  });


})


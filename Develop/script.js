// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.


  const mainContainer = document.getElementById ("mainContainer");
  
  const currentHour = dayjs().hour();


  for (let index = 9; index <= 17; index++) {
    
    let hourStatus;
    if (index == currentHour)
      hourStatus = 1;
    else if (index > currentHour)
      hourStatus = 2;
    else if (index < currentHour)
      hourStatus = 0;



    const timeBlock = blockCreater(hourStatus, index);
    mainContainer.appendChild(timeBlock);  
  }

});


function blockCreater(blockType, hour){
  const timeBlock = document.createElement("DIV");
  const timeIndicator = document.createElement("DIV");
  const textBlock = document.createElement("TEXTAREA");
  const buttonBlock = document.createElement("BUTTON");
  const iBlock = document.createElement("i");

  // Define CSS classes for the elements

  let divClass = "row time-block ";
  let timeClass = "col-2 col-md-1 hour text-center py-3";
  let textClass = "col-8 col-md-10 description";
  let buttonClass = "btn saveBtn col-2 col-md-1";
  let iBlocKClass = "fas fa-save";

  if (blockType == 0)
    divClass = divClass + "past";
  else if (blockType == 1)
    divClass = divClass + "present";
  else if (blockType == 2)
    divClass = divClass + "future";

  // Set the rest of the attributes

  iBlock.ariaHidden = "true";
  buttonBlock.ariaLabel = "save";
  textBlock.rows = "3";

  // Set the time text

  var timeString;

  if (hour < 12)
    timeString = hour + ' AM';
  else{
    timeString = hour == 12 ? hour = 12 + " PM" : (hour-12) + ' PM';
  }

  timeIndicator.innerHTML = timeString;
  
  // Set the classes on elements

  timeBlock.setAttribute("class", divClass);
  timeIndicator.setAttribute("class", timeClass)
  textBlock.setAttribute("class", textClass);
  buttonBlock.setAttribute("class", buttonClass);
  iBlock.setAttribute("class", iBlocKClass);
  
  // Structure the elements

  buttonBlock.appendChild(iBlock);
  timeBlock.appendChild(timeIndicator);
  timeBlock.appendChild(textBlock);
  timeBlock.appendChild(buttonBlock);
  
  return timeBlock;
}
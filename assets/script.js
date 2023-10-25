// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function saveButton() {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  $("#saveItem0").on("click", () => {
    saveText(0);
  });

  $("#saveItem1").on("click", () => {
    saveText(1);
  });
  $("#saveItem2").on("click", () => {
    saveText(2);
  });
  $("#saveItem3").on("click", () => {
    saveText(3);
  });
  $("#saveItem4").on("click", () => {
    saveText(4);
  });
  $("#saveItem5").on("click", () => {
    saveText(5);
  });
  $("#saveItem6").on("click", () => {
    saveText(6);
  });
  $("#saveItem7").on("click", () => {
    saveText(7);
  });
  $("#saveItem8").on("click", () => {
    saveText(8);
  });

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  function setColors() {

    // get the 24 hour value of the current time
    var now = moment().format("H");
    // set each element
    for (var i = 0; i < 9; i++) {
      // get the time block element to set the background
      var hourBlock = $(`#input${i}`);
      // get the 24 hour value of the time block w data-attribute
      var hour = hourBlock.attr("data-hour");
      // set the background color of the calendar event based on whether its future, present, or past
      if (now > hour) {
        hourBlock.setAttribute("bg-secondary");
      } else if (now < hour) {
        hourBlock.setAttribute("bg-success");
      } else if (now == hour) {
        hourBlock.setAttribute("bg-danger");
      }
    }
  }
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  // save each calendar event text to localstorage by inserting it into the array
  function saveText(id) {

    // get the current events array from localstorage
    var currentEvents = JSON.parse(localStorage.getItem("events"));
    // get the new input text the user has typed
    var inputText = $(`#input${id}`).val();

    // store the input text in the localstorage array at the right time block
    currentEvents[id] = inputText;

    // resave the array to localstorage
    localStorage.setItem("events", JSON.stringify(currentEvents));
  }
  // TODO: Add code to display the current date in the header of the page.
});

// // Use Day.js to format the date
var today = dayjs();
$('#currentDay').text(today.format('MMM D, YYYY'));
// Variables set to attributes set in the HTML
var currentDay = $("#currentDay");
var saveButton = $(".saveBtn");
var hourNumber = [
  $("#hour-9"),
  $("#hour-10"),
  $("#hour-11"),
  $("#hour-12"),
  $("#hour-13"),
  $("#hour-14"),
  $("#hour-15"),
  $("#hour-16"),
  $("#hour-17"),
];
$(function () {
  // Variable set to the current hour
  var timeNow = dayjs().format("h");
// For each item in the hourNumber array, an if statement compares the current hour to the hour of each text box. If they are equal, the "present" class is added. If the hour of the text box is greater than the current hour, the "future" class is added. For all other cases the "past" class is added.
 for (var i=0; i<hourNumber.length; i++) {
  if (timeNow == hourNumber.length + 9) {
    hourNumber[i].attr("class", "present");
  } else if (timeNow < hourNumber.length + 9) {
    hourNumber[i].attr("class", "future");
  } else {
    hourNumber[i].attr("class", "past");
  }
 };
//  This function prints the current date and day to the header of the page.
  var rightNow = dayjs();
  currentDay.text(rightNow.format("dddd, MMM D, YYYY"));
  // An event listener that starts the following function when the save button is clicked.
  saveButton.on("click", function(event) {
    // Prevents default browser behavior.
    event.preventDefault();
    // Saves text to local storage and if the text box is blank, load saved text from local storage to the text area.
    for (var i=0; i<hourNumber.length; i++) {
      var textBox = hourNumber[i].children("textarea").value;
      localStorage.setItem("textBox");
      if (textBox.value = "") {
        textBox.text(localStorage.getitem("textBox"));
      };
    };

  });

});

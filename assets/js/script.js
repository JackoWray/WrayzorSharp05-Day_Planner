function onReady() {
  var dateAndTime = $("#currentDay");

  function setNow() {
    var now = moment();
    var nowFormatted = now.format("Do MMMM YYYY, h:mm:ssA");
    var nowHour = parseFloat(now.format("H"));

    dateAndTime.text(nowFormatted);
    var rowElements = $(".row");
    var labelElements = $(".row label");
    var textareaElement = $(".row textarea");
    if (parseFloat(rowElements.attr("data-hour")) < nowHour) {
      labelElements.addClass("past");
      textareaElement.addClass("past");
    } else if (parseFloat(rowElements.attr("data-hour")) == nowHour) {
      labelElements.addClass("present");
      textareaElement.addClass("present");
    } else {
      labelElements.addClass("future");
      textareaElement.addClass("future");
    }
  }

  setNow();

  setInterval(function () {
    setNow();
  }, 1000);
}

onReady();

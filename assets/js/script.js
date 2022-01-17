function onReady() {
  var dateAndTime = $("#currentDay");

  function setNow() {
    var now = moment().subtract(7, "hours");
    var nowFormatted = now.format("Do MMMM YYYY, h:mm:ssA");
    var nowHour = parseFloat(now.format("H"));
    var timeslotsForColour = [
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

    dateAndTime.text(nowFormatted);
    if (nowHour < 18) {
      for (var i = 0; i < timeslotsForColour.length; i++) {
        timeslotsForColour[i].addClass("present");
      }
      for (var i = 0; i + 9 < nowHour; i++) {
        timeslotsForColour[i].removeClass("present").addClass("past");
      }
      for (var i = 8; i + 9 > nowHour; i--) {
        timeslotsForColour[i].removeClass("present").addClass("future");
      }
    } else {
      for (var i = 0; i < timeslotsForColour.length; i++) {
        timeslotsForColour[i].addClass("past");
      }
    }
  }

  setNow();

  setInterval(function () {
    setNow();
  }, 1000);

  var todosValue = [
    document.getElementById("input-1").value,
    document.getElementById("input-2").value,
    document.getElementById("input-3").value,
    document.getElementById("input-4").value,
    document.getElementById("input-5").value,
    document.getElementById("input-6").value,
    document.getElementById("input-7").value,
    document.getElementById("input-8").value,
    document.getElementById("input-9").value,
  ];

  var todos = [
    document.getElementById("input-1"),
    document.getElementById("input-2"),
    document.getElementById("input-3"),
    document.getElementById("input-4"),
    document.getElementById("input-5"),
    document.getElementById("input-6"),
    document.getElementById("input-7"),
    document.getElementById("input-8"),
    document.getElementById("input-9"),
  ];

  var buttons = [
    document.getElementById("save-button-1"),
    document.getElementById("save-button-2"),
    document.getElementById("save-button-3"),
    document.getElementById("save-button-4"),
    document.getElementById("save-button-5"),
    document.getElementById("save-button-6"),
    document.getElementById("save-button-7"),
    document.getElementById("save-button-8"),
    document.getElementById("save-button-9"),
  ];

  var keys = [
    "Key-1",
    "Key-2",
    "Key-3",
    "Key-4",
    "Key-5",
    "Key-6",
    "Key-7",
    "Key-8",
    "Key-9",
  ];

  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
      event.preventDefault();
      localStorage.setItem(keys[i], todosValue[i]);
      todos[i].innerHTML = localStorage.getItem(keys[i]);
    });
  }

  function renderDailyEvents() {
    if (localStorage.getItem("Key-1") !== null) {
      for (var i = 0; i < keys.length; i++) {
        todos[i].innerHTML = localStorage.getItem(keys[i]);
      }
    }
  }
  renderDailyEvents();
}

onReady();

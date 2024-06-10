function startTimer() {
    var minutesInput = document.getElementById("minutes").value;
    var secondsInput = document.getElementById("seconds").value;
  
    if (minutesInput === "" && secondsInput === "") {
      alert("Please enter minutes and/or seconds.");
      return;
    }
  
    var totalSeconds = parseInt(minutesInput) * 60 + parseInt(secondsInput);
    if (isNaN(totalSeconds) || totalSeconds <= 0) {
      alert("Invalid input. Please enter a valid number of minutes and/or seconds.");
      return;
    }
  
    var countdown = setInterval(function() {
      totalSeconds--;
      var minutes = Math.floor(totalSeconds / 60);
      var seconds = totalSeconds % 60;
  
      document.getElementById("minutes").value = String(minutes).padStart(2, '0');
      document.getElementById("seconds").value = String(seconds).padStart(2, '0');
  
      if (totalSeconds <= 0) {
        clearInterval(countdown);
        alert("Time's up!");
      }
    }, 1000);
  }
  
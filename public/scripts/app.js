// Client facing scripts here

const validate = function(answer, correctAnswer, form) {

  console.log('anything');
  const formname = document.getElementById(form);

  if (answer == correctAnswer) {
    formname.innerHTML = "<div style='background-color:lightgreen'><h1>CORRECT!! The answer was: " + correctAnswer + "</h1></div>";
  }
  else {
    console.log('anything2');
    formname.innerHTML = "<div style='background-color:pink'><h1>DOH! You were wrong! The answer was: " + correctAnswer + "</h1></div>";
  }
};



// Client facing scripts here

const validate = function(answer, correctAnswer, form) {
  const formname = document.getElementById(form);

  if (answer == correctAnswer) {
    formname.innerHTML = "<div style='background-color:lightgreen'><h1>CORRECT!! The answer was: " + correctAnswer + "</h1></div>";
  }
  else {
    formname.innerHTML = "<div style='background-color:pink'><h1>DOH! You were wrong! The answer was: " + correctAnswer + "</h1></div>";
  }
};




const copyContent = () => {
  let text = document.getElementById('myText').innerHTML;

  navigator.clipboard.writeText(text).then(() => {
    console.log('Content copied to clipboard', text);
    /* Resolved - text copied to clipboard successfully */
  },() => {
    console.error('Failed to copy');
    /* Rejected - text failed to copy to the clipboard */
  });
}

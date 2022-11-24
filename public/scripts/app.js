// Client facing scripts here


const copyContent = (input) => {

  console.log("tesetINput", input)

  navigator.clipboard.writeText(input).then(() => {

    /* Resolved - text copied to clipboard successfully */
  },() => {
    console.error('Failed to copy');
    /* Rejected - text failed to copy to the clipboard */
  });
}


const validate = function(answer, correctAnswer, form) {
  const formname = document.getElementById(form);

  console.log('validate')
  if (answer == correctAnswer) {
    // router.post('/quiz/:id', (req, res) => {
    //   res.redirect('/')
    // })
      window.location.replace("localhost:8080/correct");

    // formname.innerHTML = "<div><h1>CORRECT!! Have a Duff on the house!</h1></div>";
  }
  else {
    formname.innerHTML = "<div<h1>DOH! You were wrong!</h1></div>";
  }
};






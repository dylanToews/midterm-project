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


  console.log('correctAnswer',correctAnswer)
  console.log('answer',answer)
  console.log('form',form)

  if (answer == correctAnswer) {


    formname.innerHTML =`<button class="btn" id = "correct-message" onclick="copyContent('localhost:8080/correct')"><i class="fa-solid fa-copy"></i>Wohoo! You're smart! Click to copy link and share results</button>`

    console.log('validate')
  }
  else {
    formname.innerHTML = `<button class="btn" id = "incorrect-message" onclick="copyContent('localhost:8080/incorrect')"><i class="fa-solid fa-copy"></i>DOH! Wrong. Click to copy link and share results</button>`;
  }
};





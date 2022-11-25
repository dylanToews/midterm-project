// Client facing scripts here


//Function to copy link with button click

const copyContent = (input) => {
 navigator.clipboard.writeText(input).then(() => {
  },() => {
  });
}


//Function to varify if chosen answer is correct

const validate = function(answer, correctAnswer, form) {
  const formname = document.getElementById(form);

  if (answer == correctAnswer) {
    formname.innerHTML =`<button class="btn" id = "correct-message" onclick="copyContent('localhost:8080/correct')"><i class="fa-solid fa-copy"></i>Wohoo! You're smart! Click to copy link and share results</button>`
  }
  else {
    formname.innerHTML = `<button class="btn" id = "incorrect-message" onclick="copyContent('localhost:8080/incorrect')"><i class="fa-solid fa-copy"></i>DOH! Wrong. Click to copy link and share results, if you want...</button>`;
  }
};





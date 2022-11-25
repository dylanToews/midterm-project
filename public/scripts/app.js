//Function to copy link with button click

const copyContent = (input) => {
  navigator.clipboard.writeText(input).then(() => {
  }, () => {
  });
};


//Function to varify if chosen answer is correct

const validate = function(answer, correctAnswer, form) {
  const formname = document.getElementById(form);

  if (answer == correctAnswer) {
    formname.innerHTML = `<button class="btn" id = "correct-message" onclick="copyContent('localhost:8080/correct')"><i class="fa-solid fa-copy"></i>Wohoo! You're smart! Click to copy link and share results</button>`;
  }
  else {
    formname.innerHTML = `<button class="btn" id = "incorrect-message" onclick="copyContent('localhost:8080/incorrect')"><i class="fa-solid fa-copy"></i>DOH! Wrong. Click to copy link and share results, if you want...</button>`;
  }
};



//Functions to shuffle answers everytime quiz page is loaded

const shuffle = function () {
  const array = [0, 1, 2, 3];
  return array.sort(() => Math.random() - 0.5);
}

const getOption = (option, order) => {
  const result = {};
  for (let i = 0; i < 4; i++) {
    result[`option${i}`] = option[`incorrect_${order[i]}`];
    if (order[i] == 0) {
      result[`option${i}`] = option[`correct_answer`];
    }
  }
  return result;
};

const shuffleQuestions = qObj => {
  const order = shuffle();
  const options = getOption(qObj, order);
  const result = {
    question_content: qObj.question_content,
    quiz_id: qObj.quiz_id,
    correct_answer: qObj.correct_answer,
    ...options,
    fullname: qObj.fullname,
    description: qObj.description,
    title: qObj.title,
    email: qObj.email,
    url: qObj.url,
    private: qObj.private,
    creator_id: qObj.creator_id
  };
  return result;
};


module.exports = { shuffleQuestions }



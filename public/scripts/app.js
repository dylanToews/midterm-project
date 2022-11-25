//Function to copy link with button click

const copyContent = (input) => {
  navigator.clipboard.writeText(input).then(() => {
  }, () => {
  });
};


//Function to varify if chosen answer is correct

const validate = function(answer) {

  if (answer === 'correct_answer') {
    return '/correct';
  }
  else {
    return '/incorrect';
  }
};



//Functions to shuffle answers everytime quiz page is loaded

const shuffle = function() {
  const array = [0, 1, 2, 3];
  return array.sort(() => Math.random() - 0.5);
};

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


module.exports = { shuffleQuestions, validate }



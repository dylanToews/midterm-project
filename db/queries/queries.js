const db = require('../connection');

//Renders all user information

const getUsers = () => {
  return db.query('SELECT * FROM users;')
    .then(data => {
      return data.rows;
    });
};

//Renders all the quizzes

const getAllQuizzes = () => {
  return db.query('SELECT * FROM quizzes;')
    .then(data => {
      return data.rows;
    });
};


//Function to get one quiz based on ID. Need to be able to change the ID based on what the user clicks on the index page

const getOneQuiz = () => {
  return db.query(
    `SELECT *
      FROM questions
      WHERE id = 1;`)
    .then(data => {
      return data.rows;
    });
};




module.exports = { getUsers, getAllQuizzes, getOneQuiz };

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
  return db.query(`SELECT *
  FROM quizzes
  LEFT JOIN users ON quizzes.id = users.id`)
    .then(data => {
      return data.rows;
    });
};



//To get specific quiz based on ID

const getQuizFromId = function(id) {
  return db
    .query(`SELECT * FROM questions
    INNER JOIN users on questions.id = users.id
    INNER JOIN quizzes ON questions.id = quizzes.id
    WHERE questions.id = $1`, [id])
    .then((result) => {
      return result.rows[0];
    })
    .catch((err) => {
      console.log('myerror:', err.message);
    });
};



const addQuiz = function(title, description) {
  const queryParams = [];

  let values = '';

  let queryString = `INSERT INTO quizzes (title, description)
  VALUES ( $1, $2) RETURNING * ;`;

  // console.log('qstring:', queryString, 'qparams:', queryParams);

  return db.query(queryString, [title, description])
    .then(res => {
      //creatQuestion(quiz_id);
      return res.rows[0];
    });
};

const addQuestion = function(id, question, correctAnswer, incorrect1, incorrect2, incorrect3) {

  const queryParams = [];

  let values = '';

  let queryString = `INSERT INTO questions (id, question_content, correct_answer, incorrect_1, incorrect_2, incorrect_3)
  VALUES ( $1, $2, $3, $4, $5, $6) RETURNING * ;`;


  // console.log('qstring:', queryString, 'qparams:', queryParams);

  return db.query(queryString, [id, question, correctAnswer, incorrect1, incorrect2, incorrect3])

    .then(res => {
      return res.rows[0];
    });

};







module.exports = { getUsers, getAllQuizzes, getQuizFromId, addQuiz, addQuestion };




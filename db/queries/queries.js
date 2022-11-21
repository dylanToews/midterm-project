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
  INNER JOIN users ON quizzes.id = users.id`)
    .then(data => {
      return data.rows;
    });
};

//working version without join

// const getAllQuizzes = () => {
//   return db.query(`SELECT * FROM quizzes`)
//     .then(data => {
//       return data.rows;
//     });
// };



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


const addQuiz = function(quiz) {
  const queryParams = [];
  let queryString = `INSERT INTO quizzes (
    id, title, description, share_link, private, url,
  )`



};





module.exports = { getUsers, getAllQuizzes, getQuizFromId };




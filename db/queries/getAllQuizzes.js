const db = require('../connection');

const getAllQuizzes = () => {
  return db.query('SELECT * FROM quizzes;')
    .then(data => {
      return data.rows;
    });
};

module.exports = { getAllQuizzes };

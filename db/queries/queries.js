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


  return db.query(queryString, [title, description])
    .then(res => {
      return res.rows[0];
    });
};

const addQuestion = function(id, question, correctAnswer, incorrect1, incorrect2, incorrect3) {

  const queryParams = [];

  let values = '';

  let queryString = `INSERT INTO questions (id, question_content, correct_answer, incorrect_1, incorrect_2, incorrect_3)
  VALUES ( $1, $2, $3, $4, $5, $6) RETURNING * ;`;

  return db.query(queryString, [id, question, correctAnswer, incorrect1, incorrect2, incorrect3])

    .then(res => {
      return res.rows[0];
    });
};

const addUserInfo = function(id, creator, email) {

  const queryParams = [];

  let values = '';

  let queryString = `INSERT INTO users (id, fullname, email)
  VALUES ( $1, $2, $3) RETURNING * ;`;

  return db.query(queryString, [id, creator, email])

    .then(res => {
      return res.rows[0];
    });

}

const checkEmailAndPassword = function(email, password) {
  if (email && password) {
    // Execute SQL query that'll select the account from the database based on the specified email and password
    db.query('SELECT * FROM users WHERE email = ? AND password = ?', [email, password], function(error, results, fields) {
      // If there is an issue with the query, output the error
      if (error) throw error;
      // If the account exists
      if (results.length > 0) {
        // Authenticate the user
        req.session.loggedin = true;
        req.session.email = email;
        // Redirect to home page
        res.redirect('/');
      } else {
        res.send('Incorrect email and/or Password!');
      }
      res.end();
    });
  } else {
    res.send('Please enter email and Password!');
    res.end();
  }
};




module.exports = { getUsers, getAllQuizzes, getQuizFromId, addQuiz, addQuestion, addUserInfo, checkEmailAndPassword };




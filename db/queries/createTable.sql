const db = require('../connection');

const creatQuiz = () => {
  const queryString = `
  INSERT INTO quizzes(
    title,
    description,
    private,
    user_quiz_id
    )
    VALUSE ($1, $2, $3, $4) 
    RETURNING*;
 *** We should know the generated id to insert into question tables ***
  INSERT INTO questions( 
    question_content,
    correct_answer,
    wrong_answer1,
    wrong_answer2,
    wrong_answer3
    )
    VALUES ($5, $6, $7, $8, $9)
    RETURNING*;
    ` 
  return pool.query(queryString , Object.values(quiz))
    .then(data => {
      return data.rows;
    });
};

module.exports = { creatQuiz };
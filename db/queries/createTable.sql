const db = require('../connection');

const creatQuiz = () => {
  const queryString = `
  INSERT INTO quizzes(
    title,
    description,
    private,
    ctreator_id
    )
    VALUES ($1, $2, $3, $4) 
    RETURNING*;
    `
    return pool.query(queryString , Object.values(quiz))
    .then(data => {
      creatQuestion(quiz_id);
      return data.rows;
    });

 /*** We should know the generated id to insert into question tables ***/
  const creatQuestion = () => {
  const queryString = `
  INSERT INTO questions( 
    question_content,
    correct_answer,
    wrong_answer1,
    wrong_answer2,
    wrong_answer3,
    quiz_id
    )
    VALUES ($5, $6, $7, $8, $9 , ${quiz_id})
    RETURNING*;
    ` 
  return pool.query(queryString , Object.values(quiz))
    .then(data => {
      return data.rows;
    });
};

module.exports = { creatQuiz };
module.exports = { creatQuestion };
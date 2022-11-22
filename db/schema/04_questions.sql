-- Drop and recreate questions table 

DROP TABLE IF EXISTS questions CASCADE;
CREATE TABLE questions (
  id SERIAL PRIMARY KEY NOT NULL,
  question_content VARCHAR(255) NOT NULL,
  correct_answer VARCHAR(255) NOT NULL,
  wrong_answer1 VARCHAR(255) NOT NULL,
  wrong_answer2 VARCHAR(255) NOT NULL,
  wrong_answer3 VARCHAR(255) NOT NULL,
  quiz_id INTEGER REFERENCES quizzes(id) ON DELETE CASCADE
);
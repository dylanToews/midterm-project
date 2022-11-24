-- Drop and recreate questions table

DROP TABLE IF EXISTS questions CASCADE;
CREATE TABLE questions (
  id SERIAL PRIMARY KEY NOT NULL,
  question_content VARCHAR(255) NOT NULL,
  correct_answer VARCHAR(255) NOT NULL,
  incorrect_1 VARCHAR(225) NOT NULL,
  incorrect_2 VARCHAR(255) NOT NULL,
  incorrect_3 VARCHAR(225) NOT NULL,
  quiz_id INTEGER REFERENCES quizzes(id) ON DELETE CASCADE
);


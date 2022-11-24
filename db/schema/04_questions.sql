-- Drop and recreate questions table

DROP TABLE IF EXISTS questions CASCADE;
CREATE TABLE questions (
  id SERIAL PRIMARY KEY NOT NULL,
  question_content VARCHAR(255),
  correct_answer VARCHAR(255),
  incorrect_1 VARCHAR(225),
  incorrect_2 VARCHAR(255),
  incorrect_3 VARCHAR(225),
  quiz_id INTEGER REFERENCES quizzes(id) ON DELETE CASCADE
);


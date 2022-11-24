-- Drop and recreate questions table

DROP TABLE IF EXISTS questions CASCADE;
CREATE TABLE questions (
  id SERIAL PRIMARY KEY NOT NULL,
  question_content TEXT NOT NULL,
  correct_answer TEXT NOT NULL,
  incorrect_1 TEXT NOT NULL,
  incorrect_2 TEXT NOT NULL,
  incorrect_3 TEXT NOT NULL,
  quiz_id INTEGER REFERENCES quizzes(id) ON DELETE CASCADE
);


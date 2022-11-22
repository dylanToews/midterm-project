-- Drop and recreate user_quizzes table

DROP TABLE IF EXISTS user_quizzes CASCADE;
CREATE TABLE user_quizzes (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  quiz_id INTEGER REFERENCES quizzes(id) ON DELETE CASCADE
);

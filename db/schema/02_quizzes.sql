-- Drop and recreate quizzes table

DROP TABLE IF EXISTS quizzes CASCADE;
CREATE TABLE quizzes (
  id SERIAL PRIMARY KEY NOT NULL,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  private BOOLEAN DEFAULT FALSE,
  creator_id INTEGER REFERENCES users(id) ON DELETE CASCADE
);

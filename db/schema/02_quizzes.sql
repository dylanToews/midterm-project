-- Drop and recreate quizzes table

DROP TABLE IF EXISTS quizzes CASCADE;
CREATE TABLE quizzes (
  id SERIAL PRIMARY KEY NOT NULL,
  title VARCHAR(255) NOT NULL,
  description VARCHAR(255),
  private BOOLEAN DEFAULT FALSE,
  url VARCHAR(255),
  creator_id INTEGER REFERENCES users(id) ON DELETE CASCADE
);

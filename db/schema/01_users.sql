-- Drop and recreate Users table (Example)

DROP TABLE IF EXISTS users CASCADE;
CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL
);

DROP TABLE IF EXISTS user_quizzes CASCADE;
CREATE TABLE user_quizzes (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE
);

DROP TABLE IF EXISTS quizzes CASCADE;
CREATE TABLE quizzes (
  id SERIAL PRIMARY KEY NOT NULL,
  title VARCHAR(255) NOT NULL,
  description VARCHAR(255) NOT NULL,
  share_link VARCHAR(255) NOT NULL,
  private BOOLEAN,
  url VARCHAR(255) NOT NULL,
  user_quiz_id INTEGER REFERENCES user_quizzes(id) ON DELETE CASCADE
);

DROP TABLE IF EXISTS questions CASCADE;
CREATE TABLE questions (
  id SERIAL PRIMARY KEY NOT NULL,
  question_content VARCHAR(255) NOT NULL,
  correct_answer VARCHAR(255) NOT NULL,
  quiz_id INTEGER REFERENCES quizzes(id) ON DELETE CASCADE
);

DROP TABLE IF EXISTS answers CASCADE;
CREATE TABLE answers (
  id SERIAL PRIMARY KEY NOT NULL,
  answer VARCHAR(255) NOT NULL,
  question_id INTEGER REFERENCES questions(id) ON DELETE CASCADE
);

-- Users table seeds --
INSERT INTO users VALUES (1, 'Robbie', 'Robbie@gmail.com');
INSERT INTO users VALUES (2, 'David', 'David@gmail.com');
INSERT INTO users VALUES (3, 'Dylan', 'Dylan@gmail.com');
INSERT INTO users VALUES (4, 'Admin', 'Admin@gmail.com');

-- user_quizzes table seeds --
INSERT INTO user_quizzes VALUES (1, 1);
INSERT INTO user_quizzes VALUES (2, 2);
INSERT INTO user_quizzes VALUES (3, 3);

-- quizzes table seeds --
INSERT INTO quizzes VALUES (1, 'quiz 1', 'quiz 1 description', 'www.example.com', false, 'e4r5t6', 1);
INSERT INTO quizzes VALUES (2, 'quiz 2', 'quiz 2 description', 'www.example2.com', false, 'q1w2e3', 2);
INSERT INTO quizzes VALUES (3, 'quiz 3', 'quiz 3 description', 'www.example3.com', true, 'y6u7i8', 3);

-- questions table seeds --
INSERT INTO questions VALUES (1, 'question 1 ?', 'corrct answer', 'wrong answer 1', 'wrong answer 2', 'wrong answer 3', 1);
INSERT INTO questions VALUES (2, 'question 2 ?', 'corrct answer', 'wrong answer 1', 'wrong answer 2', 'wrong answer 3', 1);
INSERT INTO questions VALUES (3, 'question 3 ?', 'corrct answer', 'wrong answer 1', 'wrong answer 2', 'wrong answer 3', 2);
INSERT INTO questions VALUES (4, 'question 4 ?', 'corrct answer', 'wrong answer 1', 'wrong answer 2', 'wrong answer 3', 2);
INSERT INTO questions VALUES (5, 'question 5 ?', 'corrct answer', 'wrong answer 1', 'wrong answer 2', 'wrong answer 3', 3);
INSERT INTO questions VALUES (6, 'question 6 ?', 'corrct answer', 'wrong answer 1', 'wrong answer 2', 'wrong answer 3', 3);


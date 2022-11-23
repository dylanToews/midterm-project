-- Users table seeds --
INSERT INTO users (fullname, email, password) VALUES ('Robbie', 'Robbie@gmail.com', 'password');
INSERT INTO users (fullname, email, password) VALUES ('David', 'David@gmail.com', 'password');
INSERT INTO users (fullname, email, password) VALUES ('Dylan', 'Dylan@gmail.com', 'password');

-- quizzes table seeds --
INSERT INTO quizzes (title, description, private, url, creator_id) VALUES ('quiz 1', 'quiz 1 description TESTTESTT ESTTESTTESTTESTTESTTES TTESTTESTTESTTESTTESTTE STTESTTESTTESTTESTTE STTESTTESTTESTTES TTESTTESTTESTT ESTTESTTESTTESTTEST', false, 'www.example.com', 1);
INSERT INTO quizzes (title, description, private, url, creator_id) VALUES ('quiz 2', 'quiz 2 description', false, 'www.example2.com', 2);
INSERT INTO quizzes (title, description, private, url, creator_id) VALUES ('quiz 3', 'quiz 3 description', true, 'www.example3.com', 3);
INSERT INTO quizzes (title, description, private, url, creator_id) VALUES ('quiz 3', 'quiz 3 description', true, 'www.example3.com', 3);
INSERT INTO quizzes (title, description, private, url, creator_id) VALUES ('quiz 3', 'quiz 3 description', true, 'www.example3.com', 3);
INSERT INTO quizzes (title, description, private, url, creator_id) VALUES ('quiz 3', 'quiz 3 description', true, 'www.example3.com', 3);
INSERT INTO quizzes (title, description, private, url, creator_id) VALUES ('quiz 3', 'quiz 3 description', true, 'www.example3.com', 3);
INSERT INTO quizzes (title, description, private, url, creator_id) VALUES ('quiz 3', 'quiz 3 description', true, 'www.example3.com', 3);
INSERT INTO quizzes (title, description, private, url, creator_id) VALUES ('quiz 3', 'quiz 3 description', true, 'www.example3.com', 3);
INSERT INTO quizzes (title, description, private, url, creator_id) VALUES ('quiz 3', 'quiz 3 description', true, 'www.example3.com', 3);
INSERT INTO quizzes (title, description, private, url, creator_id) VALUES ('quiz 3', 'quiz 3 description', true, 'www.example3.com', 3);
INSERT INTO quizzes (title, description, private, url, creator_id) VALUES ('quiz 3', 'quiz 3 description', true, 'www.example3.com', 3);
INSERT INTO quizzes (title, description, private, url, creator_id) VALUES ('quiz 3', 'quiz 3 description', true, 'www.example3.com', 3);
INSERT INTO quizzes (title, description, private, url, creator_id) VALUES ('quiz 3', 'quiz 3 description', true, 'www.example3.com', 3);
INSERT INTO quizzes (title, description, private, url, creator_id) VALUES ('quiz 3', 'quiz 3 description', true, 'www.example3.com', 3);
INSERT INTO quizzes (title, description, private, url, creator_id) VALUES ('quiz 3', 'quiz 3 description', true, 'www.example3.com', 3);
INSERT INTO quizzes (title, description, private, url, creator_id) VALUES ('quiz 3', 'quiz 3 description', true, 'www.example3.com', 3);


-- -- user_quizzes table seeds --
INSERT INTO user_quizzes (user_id, quiz_id) VALUES (1 ,1);
INSERT INTO user_quizzes (user_id, quiz_id) VALUES (2 ,1);
INSERT INTO user_quizzes (user_id, quiz_id) VALUES (3 ,2);



-- -- questions table seeds --
INSERT INTO questions (question_content, correct_answer, incorrect_1, incorrect_2, incorrect_3, quiz_id) VALUES ('question 1 ?', 'corrct answer', 'wrong answer 1', 'wrong answer 2', 'wrong answer 3', 1);
INSERT INTO questions (question_content, correct_answer, incorrect_1, incorrect_2, incorrect_3, quiz_id) VALUES ('question 2 ?', 'corrct answer', 'wrong answer 1', 'wrong answer 2', 'wrong answer 3', 1);
INSERT INTO questions (question_content, correct_answer, incorrect_1, incorrect_2, incorrect_3, quiz_id) VALUES ('question 3 ?', 'corrct answer', 'wrong answer 1', 'wrong answer 2', 'wrong answer 3', 2);

-- user_quizzes table seeds --
-- INSERT INTO user_quizzes VALUES (1, 1 ,1);
-- INSERT INTO user_quizzes VALUES (2, 2, 2);
-- INSERT INTO user_quizzes VALUES (3, 3, 3);





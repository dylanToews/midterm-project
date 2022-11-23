-- Users table seeds --
INSERT INTO users (fullname, email) VALUES ('Robbie', 'Robbie@gmail.com');
INSERT INTO users (fullname, email) VALUES ('David', 'David@gmail.com');
INSERT INTO users (fullname, email) VALUES ('Dylan', 'Dylan@gmail.com');

-- quizzes table seeds --
INSERT INTO quizzes (title, description, private, url, creator_id) VALUES ('quiz 1', 'quiz 1 description', false, 'www.example.com', 1);
INSERT INTO quizzes (title, description, private, url, creator_id) VALUES ('quiz 2', 'quiz 2 description', false, 'www.example2.com', 2);
INSERT INTO quizzes (title, description, private, url, creator_id) VALUES ('quiz 3', 'quiz 3 description', true, 'www.example3.com', 3);

-- -- user_quizzes table seeds --
INSERT INTO user_quizzes (user_id, quiz_id) VALUES (1 ,1);
INSERT INTO user_quizzes (user_id, quiz_id) VALUES (2 ,1);
INSERT INTO user_quizzes (user_id, quiz_id) VALUES (3 ,2);


<<<<<<< HEAD
-- -- questions table seeds --
INSERT INTO questions (question_content, correct_answer, incorrect_1, incorrect_2, incorrect_3, quiz_id) VALUES ('question 1 ?', 'corrct answer', 'wrong answer 1', 'wrong answer 2', 'wrong answer 3', 1);
INSERT INTO questions (question_content, correct_answer, incorrect_1, incorrect_2, incorrect_3, quiz_id) VALUES ('question 2 ?', 'corrct answer', 'wrong answer 1', 'wrong answer 2', 'wrong answer 3', 1);
INSERT INTO questions (question_content, correct_answer, incorrect_1, incorrect_2, incorrect_3, quiz_id) VALUES ('question 3 ?', 'corrct answer', 'wrong answer 1', 'wrong answer 2', 'wrong answer 3', 2);
=======
-- user_quizzes table seeds --
INSERT INTO user_quizzes VALUES (1, 1 ,1);
INSERT INTO user_quizzes VALUES (2, 2, 2);
INSERT INTO user_quizzes VALUES (3, 3, 3);
INSERT INTO user_quizzes VALUES (4, 4, 4);
INSERT INTO user_quizzes VALUES (5, 5, 5);
INSERT INTO user_quizzes VALUES (6, 6, 6);
INSERT INTO user_quizzes VALUES (7, 7, 7);
INSERT INTO user_quizzes VALUES (8, 8, 8);
INSERT INTO user_quizzes VALUES (9, 9, 9);
INSERT INTO user_quizzes VALUES (10, 10, 10);
INSERT INTO user_quizzes VALUES (11, 11, 11);
INSERT INTO user_quizzes VALUES (12, 12, 12);
INSERT INTO user_quizzes VALUES (13, 13, 13);
INSERT INTO user_quizzes VALUES (14, 14, 14);
INSERT INTO user_quizzes VALUES (15, 15, 15);
INSERT INTO user_quizzes VALUES (16, 16, 16);
INSERT INTO user_quizzes VALUES (17, 17, 17);
INSERT INTO user_quizzes VALUES (18, 18, 18);
INSERT INTO user_quizzes VALUES (19, 19, 19);
INSERT INTO user_quizzes VALUES (20, 20, 20);



-- questions table seeds --
<<<<<<< HEAD
INSERT INTO questions VALUES (1, 'question 1  test ?', 'corrct answer', 'wrong answer 1', 'wrong answer 2', 'wrong answer 3', 1);
INSERT INTO questions VALUES (2, 'question 2 ?', 'corrct answer', 'wrong answer 1', 'wrong answer 2', 'wrong answer 3', 1);
INSERT INTO questions VALUES (3, 'question 3 ?', 'corrct answer', 'wrong answer 1', 'wrong answer 2', 'wrong answer 3', 2);
INSERT INTO questions VALUES (4, 'question 4 ?', 'corrct answer', 'wrong answer 1', 'wrong answer 2', 'wrong answer 3', 2);
INSERT INTO questions VALUES (5, 'question 5 ?', 'corrct answer', 'wrong answer 1', 'wrong answer 2', 'wrong answer 3', 3);
INSERT INTO questions VALUES (6, 'question 6 ?', 'corrct answer', 'wrong answer 1', 'wrong answer 2', 'wrong answer 3', 3);
=======
INSERT INTO questions VALUES (1, 'question 1 ?', 'corrct answer', 'wrong answer 1', 'wrong answer 2', 'wrong answer 3', 1);
INSERT INTO questions VALUES (2, 'question 2 ?', 'corrct answer', 'wrong answer 1', 'wrong answer 2', 'wrong answer 3', 2);
INSERT INTO questions VALUES (3, 'question 3 ?', 'corrct answer', 'wrong answer 1', 'wrong answer 2', 'wrong answer 3', 3);
INSERT INTO questions VALUES (4, 'question 4 ?', 'corrct answer', 'wrong answer 1', 'wrong answer 2', 'wrong answer 3', 4);
INSERT INTO questions VALUES (5, 'question 5 ?', 'corrct answer', 'wrong answer 1', 'wrong answer 2', 'wrong answer 3', 5);
INSERT INTO questions VALUES (6, 'question 6 ?', 'corrct answer', 'wrong answer 1', 'wrong answer 2', 'wrong answer 3', 6);
INSERT INTO questions VALUES (7, 'question 6 ?', 'corrct answer', 'wrong answer 1', 'wrong answer 2', 'wrong answer 3', 7);
INSERT INTO questions VALUES (8, 'question 6 ?', 'corrct answer', 'wrong answer 1', 'wrong answer 2', 'wrong answer 3', 8);
INSERT INTO questions VALUES (9, 'question 6 ?', 'corrct answer', 'wrong answer 1', 'wrong answer 2', 'wrong answer 3', 9);
INSERT INTO questions VALUES (10, 'question 6 ?', 'corrct answer', 'wrong answer 1', 'wrong answer 2', 'wrong answer 3', 10);
INSERT INTO questions VALUES (11, 'question 6 ?', 'corrct answer', 'wrong answer 1', 'wrong answer 2', 'wrong answer 3', 11);
INSERT INTO questions VALUES (12, 'question 6 ?', 'corrct answer', 'wrong answer 1', 'wrong answer 2', 'wrong answer 3', 12);
INSERT INTO questions VALUES (13, 'question 6 ?', 'corrct answer', 'wrong answer 1', 'wrong answer 2', 'wrong answer 3', 13);
INSERT INTO questions VALUES (14, 'question 6 ?', 'corrct answer', 'wrong answer 1', 'wrong answer 2', 'wrong answer 3', 14);
INSERT INTO questions VALUES (15, 'question 6 ?', 'corrct answer', 'wrong answer 1', 'wrong answer 2', 'wrong answer 3', 15);
INSERT INTO questions VALUES (16, 'question 6 ?', 'corrct answer', 'wrong answer 1', 'wrong answer 2', 'wrong answer 3', 16);
INSERT INTO questions VALUES (17, 'question 6 ?', 'corrct answer', 'wrong answer 1', 'wrong answer 2', 'wrong answer 3', 17);
INSERT INTO questions VALUES (18, 'question 6 ?', 'corrct answer', 'wrong answer 1', 'wrong answer 2', 'wrong answer 3', 18);
INSERT INTO questions VALUES (19, 'question 6 ?', 'corrct answer', 'wrong answer 1', 'wrong answer 2', 'wrong answer 3', 19);
INSERT INTO questions VALUES (20, 'question 6 ?', 'corrct answer', 'wrong answer 1', 'wrong answer 2', 'wrong answer 3', 20);

<<<<<<< HEAD
>>>>>>> origin/html_index_midterm
>>>>>>> origin/routes_1
=======
>>>>>>> origin/html_index_midterm
>>>>>>> origin/shuffleAnswer


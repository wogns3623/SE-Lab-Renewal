-- INSERT INTO User(u_id, u_pw, u_lname, u_fname, u_perm)
-- VALUES('ptest', 'ptest', '김', '교수', 2);
-- INSERT INTO User(u_id, u_pw, u_lname, u_fname, u_perm)
-- VALUES('dobby', 'dobby', '김', '대학원생', 1);
-- INSERT INTO User(u_id, u_pw, u_lname, u_fname, u_perm)
-- VALUES('stest', 'stest', '김', '학생', 0);

INSERT INTO Board(bo_name)
VALUES('notice'); /*1*/
INSERT INTO Board(bo_name)
VALUES('research'); /*2*/
INSERT INTO Board(bo_name)
VALUES('publication'); /*3*/
INSERT INTO Board(bo_name)
VALUES('courses'); /*4*/
INSERT INTO Board(bo_name)
VALUES('gallery'); /*5*/
INSERT INTO Board(bo_name)
VALUES('sboard'); /*6*/

INSERT INTO Category(bo_id, cat_name, cat_perm_read, cat_perm_write)
VALUES(1, 'general', 0, 2);

INSERT INTO Category(bo_id, cat_name, cat_perm_read, cat_perm_write)
VALUES(2, 'introduction', 0, 2);
INSERT INTO Category(bo_id, cat_name, cat_perm_read, cat_perm_write)
VALUES(2, 'project', 0, 1);

INSERT INTO Category(bo_id, cat_name, cat_perm_read, cat_perm_write)
VALUES(3, 'international conference', 0, 1);
INSERT INTO Category(bo_id, cat_name, cat_perm_read, cat_perm_write)
VALUES(3, 'international journal', 0, 1);
INSERT INTO Category(bo_id, cat_name, cat_perm_read, cat_perm_write)
VALUES(3, 'Domestic conference', 0, 1);
INSERT INTO Category(bo_id, cat_name, cat_perm_read, cat_perm_write)
VALUES(3, 'Domestic journal', 0, 1);

INSERT INTO Category(bo_id, cat_name, cat_perm_read, cat_perm_write)
VALUES(4, 'general', 0, 1);

INSERT INTO Category(bo_id, cat_name, cat_perm_read, cat_perm_write)
VALUES(5, 'social activity', 0, 1);
INSERT INTO Category(bo_id, cat_name, cat_perm_read, cat_perm_write)
VALUES(5, 'conference', 0, 1);
INSERT INTO Category(bo_id, cat_name, cat_perm_read, cat_perm_write)
VALUES(5, 'etc', 0, 1);

INSERT INTO Category(bo_id, cat_name, cat_perm_read, cat_perm_write)
VALUES(6, 'general', 0, 0);
INSERT INTO Category(bo_id, cat_name, cat_perm_read, cat_perm_write, cat_type)
VALUES(6, 'question', 0, 0, 1);
INSERT INTO Category(bo_id, cat_name, cat_perm_read, cat_perm_write)
VALUES(6, 'submit', 1, 0);

INSERT INTO Course_type(ct_no, ct_title, ct_type)
VALUES('CSE107', 'Logical Fundamentals of Programming', 0);
INSERT INTO Course_type(ct_no, ct_title, ct_type)
VALUES('CSE117', 'Programming Fundamentals', 0);
INSERT INTO Course_type(ct_no, ct_title, ct_type)
VALUES('CSE322', 'Web Programming', 0);
INSERT INTO Course_type(ct_no, ct_title, ct_type)
VALUES('CSE326', 'Web Application Development', 0);
INSERT INTO Course_type(ct_no, ct_title, ct_type)
VALUES('CSE4006', 'Software Engineering', 0);
INSERT INTO Course_type(ct_no, ct_title, ct_type)
VALUES('CIN870', 'Formal Methods', 1);
INSERT INTO Course_type(ct_no, ct_title, ct_type)
VALUES('CSE603', 'Management of Semistructured Data', 1);
INSERT INTO Course_type(ct_no, ct_title, ct_type)
VALUES('CSE609', 'Model Checking', 1);
INSERT INTO Course_type(ct_no, ct_title, ct_type)
VALUES('CSE639', 'Special Topics in Software Engineering', 1);
INSERT INTO Course_type(ct_no, ct_title, ct_type)
VALUES('CSE6050', 'Advanced Software Engineering', 1);

-- INSERT INTO Course(ct_id, course_year, course_semester, p_id)
-- VALUES(4, 2019, 2, num);

INSERT INTO File(file_name, file_type, file_src)
VALUES("default_user_profile", "image/png", "assets/user/profiles/default_user_profile.png");
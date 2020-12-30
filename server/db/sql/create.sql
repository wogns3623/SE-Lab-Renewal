source delete.sql;

CREATE TABLE `User` (
	`u_no`	          INT	          NOT NULL  AUTO_INCREMENT  PRIMARY KEY,
	`u_id`	          VARCHAR(256)	NOT NULL  UNIQUE,
	`u_pw_salt`	      VARCHAR(256)	NOT NULL,
	`u_pw`	          VARCHAR(256)	NOT NULL,
	`u_lname`	        VARCHAR(50)	  NOT NULL,
	`u_fname`         VARCHAR(50)	  NOT NULL,
	`u_nick`	        VARCHAR(50)	  NULL,
	`u_email`	        VARCHAR(256)	NULL      UNIQUE,
	`file_id`	        INT           NULL      COMMENT 'user profile image',
	`u_perm`	        TINYINT	      NOT NULL	DEFAULT 0	COMMENT '0: 학생, 1: 조교/대학원생, 2: 교수'
);

CREATE TABLE `Board` (
	`bo_id`	          INT	          NOT NULL  AUTO_INCREMENT  PRIMARY KEY,
	`bo_name`	        VARCHAR(50)	  NOT NULL
);

CREATE TABLE `Category` (
	`cat_id`	        INT	          NOT NULL  AUTO_INCREMENT  PRIMARY KEY,
	`bo_id`	          INT	          NOT NULL,
	`cat_name`	      VARCHAR(50)	  NOT NULL,
	`cat_perm_read`	  TINYINT   	  NOT NULL,
	`cat_perm_write`	TINYINT	      NOT NULL,
	`cat_type`	      TINYINT	      NOT NULL  DEFAULT 0 COMMENT '0: default, 1: QA'
);

CREATE TABLE `Post` (
	`p_id`	          INT	          NOT NULL  AUTO_INCREMENT  PRIMARY KEY,
	`u_no`	          INT	          NOT NULL,
	`cat_id`	        INT	          NOT NULL,
	`p_date`	        DATETIME	    NOT NULL,
	`p_date_modi`	    TIMESTAMP	    NOT NULL,
	`p_title`	        VARCHAR(256)	NOT NULL,
	`p_content`	      TEXT	        NOT NULL,
	`p_tags`	        TEXT	        NULL
);

CREATE TABLE `Comment` (
	`comm_id`	        INT	          NOT NULL  AUTO_INCREMENT  PRIMARY KEY,
	`u_no`	          INT	          NOT NULL,
	`p_id`	          INT	          NOT NULL,
	`comm_content`	  TEXT	        NOT NULL,
	`comm_date`	      DATETIME	    NOT NULL,
	`comm_date_modi`	TIMESTAMP	    NOT NULL
);

CREATE TABLE `File` (
	`file_id`	        INT	          NOT NULL  AUTO_INCREMENT  PRIMARY KEY,
	`file_name`	      INT	          NOT NULL,
	`file_type`	      TINYINT	      NOT NULL  COMMENT 'image, file',
	`file_src`	      VARCHAR(256)	NOT NULL,
	`file_desc`	      VARCHAR(256)	NULL
);

CREATE TABLE `Course_type` (
  `ct_id`           INT           NOT NULL  AUTO_INCREMENT  PRIMARY KEY,
	`ct_no`	          VARCHAR(20)	  NOT NULL  UNIQUE,
	`ct_title`	      VARCHAR(50)	  NOT NULL,
  `ct_type`         TINYINT       NOT NULL COMMENT '0:undergraduate, 1: postgraduate'
);

DROP TABLE IF EXISTS `Course`;

CREATE TABLE `Course` (
	`course_id`	      INT	          NOT NULL  AUTO_INCREMENT  PRIMARY KEY,
	`ct_id`	          INT	          NOT NULL,
	`course_year`	    YEAR	        NOT NULL,
  `course_semester` TINYINT       NOT NULL,
	`p_id`	          INT	          NOT NULL	COMMENT 'course_detail'
);

DROP TABLE IF EXISTS `Slide`;

CREATE TABLE `Slide` (
	`slide_id`	      INT	          NOT NULL  AUTO_INCREMENT  PRIMARY KEY,
	`course_id`	      INT	          NOT NULL,
	`slide_no`	      INT	          NOT NULL,
	`slide_type`	    TINYINT	      NOT NULL	COMMENT '0: lecture, 1:lab',
	`slide_title`	    VARCHAR(50)	  NOT NULL,
	`slide_content`	  TEXT	        NOT NULL
);


ALTER TABLE `Post` ADD CONSTRAINT `FK_User_TO_Post_1` FOREIGN KEY (
	`u_no`
)
REFERENCES `User` (
	`u_no`
);

ALTER TABLE `Post` ADD CONSTRAINT `FK_Category_TO_Post_1` FOREIGN KEY (
	`cat_id`
)
REFERENCES `Category` (
	`cat_id`
);

ALTER TABLE `Category` ADD CONSTRAINT `FK_Board_TO_Category_1` FOREIGN KEY (
	`bo_id`
)
REFERENCES `Board` (
	`bo_id`
);

ALTER TABLE `Comment` ADD CONSTRAINT `FK_User_TO_Comment_1` FOREIGN KEY (
	`u_no`
)
REFERENCES `User` (
	`u_no`
);

ALTER TABLE `Comment` ADD CONSTRAINT `FK_Post_TO_Comment_1` FOREIGN KEY (
	`p_id`
)
REFERENCES `Post` (
	`p_id`
);

ALTER TABLE `Course` ADD CONSTRAINT `FK_Course_type_TO_Course_1` FOREIGN KEY (
	`ct_id`
)
REFERENCES `Course_type` (
	`ct_id`
);

ALTER TABLE `Course` ADD CONSTRAINT `FK_Post_TO_Course_1` FOREIGN KEY (
	`p_id`
)
REFERENCES `Post` (
	`p_id`
);

ALTER TABLE `Slide` ADD CONSTRAINT `FK_Course_TO_Slide_1` FOREIGN KEY (
	`course_id`
)
REFERENCES `Course` (
	`course_id`
);

source insert.sql;
CREATE DATABASE todolist;

USE todolist;

CREATE table todolist(
	id int AUTO_INCREMENT primary key, -- id 열을 기본 키로 설정하고 자동 증가
	todo varchar(300) not null,
	date datetime
);

-- clear 열 추가
ALTER TABLE todolist ADD clear BOOLEAN DEFAULT 0;

-- DEFAULT 값 추가 하기 위해서 사용
-- ALTER TABLE todolist DROP COLUMN clear;

SELECT * FROM todolist;

-- 테스트용
INSERT INTO todolist (todo, date)
VALUES ('Test Todo 2', NOW());
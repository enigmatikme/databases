CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  MSG_ID INT AUTO_INCREMENT, 
  MSG_TXT TEXT, 
  USER TEXT, 
  CREATE_AT TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
  ROOM TEXT,
  PRIMARY KEY (MSG_ID)
);

CREATE TABLE users (
  USER_ID INT AUTO_INCREMENT, 
  USER TEXT, 
  PRIMARY KEY (USER_ID)
);

/* Create other tables and define schemas for them here! */

insert into messages(msg_txt, user, room) values('YOU GO GLEN COCO', 'Karin', 'lobby');
insert into messages(msg_txt, user, room) values('hello world', 'Christopher Andrew Larson', '8th floor');

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/


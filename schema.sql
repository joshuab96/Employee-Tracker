--Content Management System

DROP DATABASE IF EXISTS CMS_db;

CREATE DATABASE CMS_db;

USE CMS_db;

CREATE TABLE DEPARTMENT(
id INTEGER AUTO_INCREMENT NOT NULL,
NAME VARCHAR (30),
PRIMARY KEY (id)
);

CREATE TABLE ROLE(
id INTEGER AUTO_INCREMENT NOT NULL,
TITLE VARCHAR (30),
SALARY DECIMAL, 
DEPARTMENT_ID INT,
PRIMARY KEY (id)
);

CREATE TABLE EMPLOYEE(
id INTEGER AUTO_INCREMENT NOT NULL,
FIRST_NAME VARCHAR(30),
LAST_NAME VARCHAR (30),
ROLE_ID INT ,
MANAGER_ID INT,
PRIMARY KEY (id)
);

DROP DATABASE IF EXISTS CMS;

CREATE DATABASE CMS;

USE CMS;

CREATE TABLE DEPARTMENT (
PRIMARY KEY (id),
NAME VARCHAR (30)
);

CREATE TABLE ROLE (
PRIMARY KEY (id),
TITLE VARCHAR (30),
SALARY DECIMAL, 
DEPARTMENT_ID INT
);

CREATE TABLE EMPLOYEE (
PRIMARY KEY (id),
FIRST_NAME VARCHAR(30),
LAST_NAME VARCHAR (30),
ROLE_ID INT ,
MANAGER_ID INT
)


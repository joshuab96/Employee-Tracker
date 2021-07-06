-- Departments
INSERT INTO DEPARTMENT  (name)
VALUES ("payroll"); 

INSERT INTO DEPARTMENT  (name)
VALUES ("customer_service"); 

INSERT INTO DEPARTMENT  (name)
VALUES ("human_resources"); 

INSERT INTO DEPARTMENT  (Name)
VALUES ("accounts"); 

-- Roles
INSERT INTO ROLE (title, salary, department_id)
VALUES ('receptionist', 60000, 2 ); -- customer_service

INSERT INTO ROLE (title, salary, department_id)
VALUES ('clerk', 70000, 1 ); -- accounts

INSERT INTO ROLE (title, salary, department_id)
VALUES ('hr_manager', 80000, 3 ); -- human_resources

INSERT INTO ROLE (title, salary, department_id)
VALUES ('payroll_officer', 75000, 4 ); -- payroll



-- Employees
INSERT INTO EMPLOYEE (first_name, last_name, role_id, manager_id)
VALUES ('Joshua', 'Bernardo', 3, 1); -- hr_manager

INSERT INTO EMPLOYEE (first_name, last_name, role_id, manager_id)
VALUES ('Sarah', 'Thomson', 1, 2); -- receptionist 

INSERT INTO EMPLOYEE (first_name, last_name, role_id, manager_id)
VALUES ('Peter', 'Davidson', 4, 3); -- payroll_officer

INSERT INTO EMPLOYEE (first_name, last_name, role_id, manager_id)
VALUES ('Dave', 'Impey', 2, 4); -- clerk
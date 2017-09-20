# SQL

Structured Query Language

Database - a data structure for storing and quickly accessing data

SQL database - a database system that uses the SQL language. They are all Relational Database Management Systems (RDBMS). e.g.:
  - MySQL
  - SQLServer
  - OracleSQL
  - SQLite
  - PostgreSQL

No-SQL database - a database system that uses a language for accessing/modifying a database that is not SQL. e.g.:
  - MongoDB - document-based database management system (DBDBMS)
  - DynamoDB

Relational Database Management Systems
- Organize data into a series of tables
- You can relate different tables to each other, typically by using "primary keys".

| id | username | email |
| --- | ---- | --- |
| 1 | nhuntwalker | nicholas@codefellows.com |
| 2 | gmeringolo | gmeringolo@gmail.com |
| 3 | brookr | brook@codefellows.com |

| id | title | user_id |
| --- | --- | --- |
| 1 | Lorem ipsum dolor | 1 |
| 2 | sit amet, consectetur | 1 |
| 3 | adipisicing elit, sed | 1 |
| 4 | do eiusmod tempor | 1 |
| 5 | The Mets are Awesome! | 2 |
| 6 | Let's all be friends | 3 |

SQL Queries

- `CREATE DATABASE blogsite;`
- `CREATE TABLE users (id SERIAL PRIMARY KEY, username VARCHAR(80) NOT NULL, email VARCHAR(80) NOT NULL);`
- `CREATE TABLE posts (id SERIAL PRIMARY KEY, title VARCHAR(80), user_id INTEGER);`
- data types:
  * INTEGER
  * VARCHAR(256)
  * DOUBLE
  * DATETIME
- `INSERT INTO users (username, email) VALUES ('nhuntwalker', 'nicholas@codefellows.com');`
- `SELECT * FROM users;`
- `UPDATE users SET username='nicholas' WHERE email='nicholas@codefellows.com';`
- `DELETE FROM users WHERE id=1;`
- `DROP TABLE users;`
- `DROP DATABASE blogsite;`

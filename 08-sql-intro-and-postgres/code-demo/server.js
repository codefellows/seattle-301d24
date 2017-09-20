'use strict';

const EXPRESS = require('express');
const PARSER = require('body-parser').urlencoded({ extended: true });
const PG = require('pg');
const CLIENT = new PG.Client(process.env.DATABASE_URL);
CLIENT.connect();

CLIENT.query('CREATE TABLE IF NOT EXISTS company (id SERIAL PRIMARY KEY, name VARCHAR(100) NOT NULL, age INTEGER NOT NULL, address VARCHAR(50), SALARY DOUBLE PRECISION);')
CLIENT.query('DELETE FROM company;')

let data = [
  [ 'Paul', 32, 'California', 20000.00 ],
  ['Allen', 25, 'Texas', 15000.00 ],
  ['Teddy', 23, 'Norway', 20000.00 ],
  [ 'Mark', 25, 'Rich-Mond ', 65000.00 ],
  [ 'David', 27, 'Texas', 85000.00 ],
  [ 'Kim', 22, 'South-Hall', 45000.00 ],
  [ 'James', 24, 'Houston', 10000.00]
];

for (let i = 0; i < data.length; i++) {
  CLIENT.query(`INSERT INTO company (name, age, address, salary) VALUES ($1, $2, $3, $4);`, data[i]);
}

CLIENT.query(`UPDATE company SET salary=1000000 WHERE age = 25;`)

CLIENT.query(`SELECT * FROM company;`)
  .then(function(result){
    console.log(result.rows);
  })
  .catch(function(err){
    console.error(err);
  })

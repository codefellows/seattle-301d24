'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const pg = require('pg')

const app = express()
const client = new pg.Client(process.env.DATABASE_URL)
const PORT = process.env.POST || 3000
client.connect()

app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))

app.get('/api/tasks', (request, response) => {
  client.query(`SELECT * FROM tasks;`)
        .then(result => {
          console.log(result.rows)
          response.send(result.rows)
        })
        .catch(err => {
          console.error(err)
        })
})

app.get('/api/tasks/:id', (request, response) => {
  client.query(`SELECT * FROM tasks WHERE id=$1;`, [request.params.id])
        .then(result => {
          console.log(result.rows)
          response.send(result.rows)
        })
        .catch(err => {
          console.error(err)
        })
})

app.post('/api/tasks', (request, response) => {
  client.query(`INSERT INTO tasks (title, completed) VALUES ($1, $2);`, [
    request.body.title,
    request.body.completed
  ]).then(() => {
    response.send(`I'm done!`)
  })
})

app.get('*', (request, response) => {
  response.sendFile('index.html', { root: './public'})
})

// DOES NOT WORK FOR SOME REASON!
// (function(){
//   client.query(`CREATE TABLE IF NOT EXISTS tasks ( id SERIAL PRIMARY KEY, title VARCHAR(100), completed BOOLEAN )`)
// })()

app.listen(PORT, () => {
  console.log(`Currently listening on port ${PORT}`)
})

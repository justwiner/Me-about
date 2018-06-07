const express = require('express')
const createError = require('http-errors')
const cookieParser = require('cookie-parser')
const indexRouter = require('./routes/index')

const app = express()

app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS')
  res.header('Access-Control-Allow-Headers', 'X-Requested-With')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  next()
})

app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(cookieParser())

app.use('/api/about',indexRouter)

app.use((req, res, next) => {
  next(createError(404));
});

const port = process.env.PORT || 3000;

app.listen(port)

console.log(`App start on : ${port}`)
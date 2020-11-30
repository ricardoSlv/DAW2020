import createError from 'http-errors'
import express, { json, urlencoded } from 'express'
import logger from 'morgan'

import dotenv from 'dotenv'
dotenv.config()

import path,{ join } from 'path'
const __dirname = path.resolve(path.dirname('')); 

import studentsRouter from './routes/students.js'

import mongoose from 'mongoose'

const mongoDB = `mongodb+srv://${process.env.DBUSER}:${process.env.DBPASS}@daw2020.akqj9.mongodb.net/${process.env.DB}?retryWrites=true&w=majority`

mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true})

const app = express()

// view engine setup
app.set('views', join(__dirname, 'views'))
app.set('view engine', 'pug')

app.use(logger('dev'))
app.use(json())
app.use(urlencoded({ extended: false }))
app.use(express.static(join(__dirname, 'public')))

app.use('/alunos', studentsRouter)
app.use('/',(_,res)=>res.redirect('/alunos'))


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404))
})

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

export default app

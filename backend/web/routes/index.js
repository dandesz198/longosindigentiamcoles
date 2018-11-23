const passport = require('passport')
const { Router } = require('express')
const { catchAsyncErrors } = require('../utils')
const users = require('./users')
const articles = require('./articles')

const publicRouter = new Router()
// use the private router for protected endpoints
const privateRouter = new Router()
privateRouter.use(passport.authenticate('jwt', { session: false }))

// user endpoints
publicRouter.post('/register', catchAsyncErrors(users.register))
publicRouter.post('/login', catchAsyncErrors(users.login))
publicRouter.get('/all', catchAsyncErrors(users.all))
privateRouter.put('/me', catchAsyncErrors(users.update))
privateRouter.delete('/delete/:id', catchAsyncErrors(users.delete))

// article endpoints
privateRouter.post('/create', catchAsyncErrors(articles.create))
publicRouter.get('/get', catchAsyncErrors(articles.getAll))
publicRouter.get('/get:id', catchAsyncErrors(articles.getById))
privateRouter.delete('/delete/:id', catchAsyncErrors(articles.delete))

module.exports = {
  public: publicRouter,
  private: privateRouter
}

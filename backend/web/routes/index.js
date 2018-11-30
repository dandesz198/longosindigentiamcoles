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
// privateRouter.delete('/user/edit/:id', catchAsyncErrors(users.edit))
publicRouter.get('/users', catchAsyncErrors(users.all))
privateRouter.delete('/user/delete/:id', catchAsyncErrors(users.delete))

// article endpoints
publicRouter.post('/article/create', catchAsyncErrors(articles.create))
publicRouter.get('/article/all', catchAsyncErrors(articles.getAll))
publicRouter.get('/article/:id', catchAsyncErrors(articles.getById))
privateRouter.delete('/article/delete/:id', catchAsyncErrors(articles.delete))

module.exports = {
  public: publicRouter,
  private: privateRouter
}

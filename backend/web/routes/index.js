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
publicRouter.put('/all', catchAsyncErrors(users.all))
privateRouter.put('/me', catchAsyncErrors(users.update))

// article endpoints
publicRouter.put('/get/:id', catchAsyncErrors(articles.update))
privateRouter.post('/create', catchAsyncErrors(articles.create))
privateRouter.put('/edit/:id', catchAsyncErrors(articles.update))

module.exports = {
  public: publicRouter,
  private: privateRouter
}

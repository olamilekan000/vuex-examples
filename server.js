const express = require('express')
const http = require('http')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const passport = require('passport')

const app = express()

mongoose.connect('mongodb://localhost:27017/auth', {
	useMongoClient: true
})

const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const config = require('./webpack.config')
const compiler = webpack(config)

app.use(
	webpackDevMiddleware(compiler, {
		noInfo: true,
		publicPath: config.output.publicPath
	})
)

app.use(bodyParser.json())

const Auth = require('./controllers/auth')
require('./services/passport')

const requireAuth = passport.authenticate('jwt', { session: false })
const requireSignin = passport.authenticate('local', { session: false })

app.post('/auth/signin', requireSignin, Auth.signin)
app.post('/auth/signup', Auth.signup)
app.get('/auth/verify', requireAuth)

app.use((req, res) => res.sendFile(__dirname + '/index.html'))

app.listen(3000, () => console.log('Server Listening on PORT 3000'))

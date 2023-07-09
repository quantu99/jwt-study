const authRouter = require('./auth')
function routes(app){
app.use('/v1/auth', authRouter)}
module.exports = routes
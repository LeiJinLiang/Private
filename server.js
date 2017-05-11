var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var config = require('./webpack.config')

var app = new (require('express'))()
var port = 3000
var compiler = webpack(config)
var compression = require('compression')
const log4js = require('log4js');
log4js.configure({
    appenders: [
        { type: 'console' },
        { type: 'file', filename: 'cheese.log', category: 'cheese' }
    ]
});

const logger = log4js.getLogger('cheese');
logger.setLevel('INFO');

app.use(compression())
app.use(log4js.connectLogger(logger, { level: log4js.levels.INFO }));
app.use(webpackDevMiddleware(compiler,{ noInfo : true, publicPath : config.output.publicPath}))
app.use(webpackHotMiddleware(compiler))

app.get('/',(req,res)=> {
    console.log('__dirname',__dirname)
    res.sendFile(__dirname+'/index.html')
})


app.listen(port, function(error) {
    if (error) {
        console.error(error)
    } else {
        console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
    }
})
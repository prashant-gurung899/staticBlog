let express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
let path = require('path')
let app = express()
let router = require('./routes/blog')

let exphbs = require('express-handlebars');

const log = console.log;
const PORT = 3000;

app.engine('handlebars', exphbs.engine({ extname: '.handlebars', defaultLayout: "main"}));
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'static')))
app.use('/', router)
//or
//app.use('/',require(path.join(__dirname,'./routes/blog.js')))


app.listen(PORT, () => {
    log(`server listeing at port : ${PORT}`)
})
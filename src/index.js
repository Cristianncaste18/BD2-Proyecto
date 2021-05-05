const express = require('express')
const logger = require('morgan')
const app = express();
const exphbs = require('express-handlebars')
const router = require('./routes')

/* setting */
app.engine('handlebars',exphbs());
app.set('view engine', 'handlebars');
app.set('views', __dirname + '/views');

/* middlewares */
app.use(logger('dev'));
app.use(express.json({limit:'10mb'}));
app.use(express.urlencoded({extended: false}))
app.use('/',router)

app.listen(3000,()=>{
  console.log('Server on port 300')
})
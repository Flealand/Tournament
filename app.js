const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const expressHbs = require('express-handlebars');
const session = require('express-session');
const db = require('./utils/database'),
    sequelize = db.sequelize;
const app = express();


app.engine(
    'hbs',
    expressHbs({
      layoutsDir: './views/layouts/',
      defaultLayout: 'main-layout',
      extname: 'hbs'
    })
);
app.set('view engine', 'hbs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

// put in our own sessionStore (new instance of sessionStore) instead of using expresse's
app.use(session({
  store: sessionStore
  , secret: 'secret'
  , resave: false
  , saveUninitialized: false
  , key: 'connect.sid'
}));




sequelize.sync({force: true})
.then(result => {
  app.listen(3000);
})
.catch(err => {
  console.log(err);
});


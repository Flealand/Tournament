const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const expressHbs = require('express-handlebars');
const session = require('express-session');
const db = require('./utils/database'),
    sequelize = db.sequelize;
const app = express();

const routes = require('./routes/routes');


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

app.use('/', routes);


sequelize.sync({force: true})
.then(result => {
  console.log(result);
  app.listen(3000);
})
.catch(err => {
  console.log(err);
});


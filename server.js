const express = require('express'),
  mongoose = require('mongoose'),
  bodyParser = require('body-parser'),
  dbConfig = require('./config/database.config')
app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
})

mongoose.connect(dbConfig.url, {
  useNewUrlParser: true
}).then(
  () => console.log('Successfully connected to database')
).catch(
  () => {
    console.log('Database connecting error');
    process.exit();
  }
)

const
  tasksRouter = require('./routes/tasks.routes'),
  userRouter = require('./routes/user.routes');

app.use('/user', userRouter);
app.use('/tasks', tasksRouter);

app.listen(3000, function () {
  console.log('ToDo App Servier is running and listening port 3000');
});

app.get('/', function (req, res) {
  res.send('ToDo app is working!')
})
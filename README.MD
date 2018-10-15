# ToDo Application (server)
Express + MongoDB

Application with simple CRUD created for studing NodeJS, Express, MongoDB and Mongoose

To start the application:
```
npm run start
```

Database configuration:
```
config/database.config.js
```

## ToDo:
* tests
* comments
* attachments
* multiple task lists
* authentification
* multiple users

##Done:
* CRUD

##API
```
GET /tasks - all tasks list
[
  {
    _id: String
    title: String,
    description: String
  }
]
```
```
GET /tasks/:taskId - get task by id
{
  _id: String
  title: String,
  description: String
}
```
```
POST /tasks - create task

request:
{
  title: String,
  description: String
}

response:
{
  _id: String
  title: String,
  description: String
}
```

```
PUT /tasks/:taskId - update task

request:
{
  title: String,
  description: String
}

response:
{
  _id: String
  title: String,
  description: String
}
```
```
DELETE /tasks/:taskId - delete task
{
  _id: String
  title: String,
  description: String
}
```
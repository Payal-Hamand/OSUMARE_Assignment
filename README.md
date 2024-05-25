# OSUMARE_BackEnd Assignment

# Task API

## Running the API

1. Clone the repository
2. Run npm install to install dependencies
3. Run node index.js to start the server
4. Use Postman to test the endpoints

## Endpoints

### Create a new task

- _URL:_ localhost:3000/tasks
- _Method:_ POST
- _Request:_
  - Body: { title, description }
- _Response:_
  - Status Code: 201
  - Body: {
    "status": true,
    "data": {
    "id": 3,
    "title": "New Task",
    "description": "Backend Assignment"
    }
    }
  - Status Code: 400 if title or description is missing
    Body - {
    "status": false,
    "message": "Title and description are required"
    }

### Retrieve all tasks

- _URL:_ localhost:3000/tasks
- _Method:_ GET
- _Response:_
  - Status Code: 200
  - Body:{
    "status": true,
    "data": [
    {
    "id": 2,
    "title": "New Task",
    "description": "Backend Assignment"
    },
    {
    "id": 3,
    "title": "New Task",
    "description": "Backend Assignment"
    }
    ]
    }

### Retrieve a specific task by ID

- _URL:_ localhost:3000/tasks/2
- _Method:_ GET
- _Response:_
  - Status Code: 200
  - Body:{
    "status": true,
    "data": {
    "id": 2,
    "title": "New Task",
    "description": "Backend Assignment"
    }
    }
  - Status Code: 404 if task not found
    Body - {
    "satus": false,
    "message": "Task not found"
    }

### Update an existing task by ID

- _URL:_ localhost:3000/tasks/1
- _Method:_ PUT
- _Request:_
  - Body: { title, description }
- _Response:_
  - Status Code: 200
  - Body: {
    "status": true,
    "data": {
    "id": 1,
    "title": "Task NO 2",
    "description": "Backend Assignment"
    }
    }
  - Status Code: 400 if title or description is missing
    Body - {
    "status": false,
    "message": "Title and description are required"
    }
  - Status: 404 if task not found
    Body - {
    "status": false,
    "message": "Task not found"
    }

### Delete a task by ID

- _URL:_ localhost:3000/tasks/1
- _Method:_ DELETE
- _Response:_
  - Status Code: 200
  - Body: {
    "status": true,
    "message": "Task is deleted"
    }
  - Status Code : 404 if task not found
    Body - {
    "status": false,
    "message": "Task not found"
    }

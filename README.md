# MERN-Task-Management-App
## Backend Part
For the backend part first of all install the following dependecies:
```
npm i express mongoose nodemon dotenv cors bcryptjs
```
There are used two schemas with MongoDB database:
- User Schema for Signup and Signin functionalities
- Task schema for CRUD operations

### For Signup and Signin functionalities use the following APIs:
- http://localhost:1000/api/v1/register
- http://localhost:1000/api/v1/signin

### For CRUD operations use the following APIs:
- http://localhost:1000/api/v2/addTask (For Creating a Task)
- http://localhost:1000/api/v2/getTasks/task_id (For getting all Tasks)
- http://localhost:1000/api/v2/updateTask/task_id (For updating a Task)
- http://localhost:1000/api/v2/deleteTask/task_id (For Creating a Task)

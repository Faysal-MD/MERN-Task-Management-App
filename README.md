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
- localhost:1000/api/v1/register
- localhost:1000/api/v1/signin

### For CRUD operations use the following APIs:
- For Creating a Task use **POST** method:
  ```
  localhost:1000/api/v2/addTask
  ```
- For getting all Tasks use **GET** method:
  ```
  localhost:1000/api/v2/getTasks/task_id
  ```
- For updating a Task use **PUT** method:
  ```
  localhost:1000/api/v2/updateTask/task_id
  ```
- For Creating a Task use **DELETE** method:
  ```
  localhost:1000/api/v2/deleteTask/task_id 
  ```
## Frontend Part
  For the frontend part I used **React.JS** and **Tailwind CSS**. In the component folder there are four folders they are authentication, home, navbar, and task. 
  In the authentication folder there used Sign Up and Sign In forms, in the task folder there designed the task card using tailwind CSS.
>>>>>>> 61416eb70a55f79668aacc96db612d4f7f86acd7

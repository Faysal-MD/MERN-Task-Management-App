# MERN-Task-Management-App

## Backend Part

For the backend part first of all install the following dependecies:

```
npm i express mongoose nodemon dotenv cors
```

For starting the project locally run the following command:
```
npm start
```

There are four folders in this project, they are: controller, database, model, and routes

- In the controller folder there is a file named "task-controller.js" which is used for controlling the CRUD operations.
- In the database section, "db.js" contains the MongoDB connection setup.
- In the model folder the schema is generated for task management.
- Finally, in the routes section all the routes and APIs are created.

## Frontend Part

For the backend part first of all install the following dependecies:

```
npm i axios react-dom react-redux react-router-dom redux redux-devtools-extension redux-thunk
```

For starting the project locally run the following command:
```
npm run dev
```

For the frontend part I used **Vite + React.JS** and **Tailwind CSS**. Here I make the UI for CRUD operations.

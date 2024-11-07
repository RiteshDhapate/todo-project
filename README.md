# Todo Application Documentation

## Overview
This is a Todo application with a frontend built on Next.js and a backend running on Docker in Render with MongoDB for data storage. The backend supports CRUD operations for todos and user authentication with JWT tokens. 

### Project URLs
- **Frontend URL**: [https://todo-project-green.vercel.app](https://todo-project-green.vercel.app)
- **Backend URL**: [https://todo-project-2y6d.onrender.com](https://todo-project-2y6d.onrender.com)
- **Custom Domain URL**: [https://todo.ritesh.live](https://todo.ritesh.live)

## Technologies Used
- **Frontend**: Next.js
- **Backend**: Node.js, Express
- **Database**: MongoDB (Hosted on Render)
- **Authentication**: JWT (JSON Web Token)
- **Containerization**: Docker (Backend runs in a Docker container on Render)

## Features
### Backend
- **CRUD Operations**: Supports Create, Read, Update, and Delete operations for todos.
- **Authentication**: JWT-based user authentication to protect todo data and endpoints.
- **Data Persistence**: MongoDB database for storing user data and todos.

### Frontend
- **User Interface**: Clean and responsive UI built with Next.js, allowing users to manage their todos effectively.
- **Interaction with Backend**: Utilizes API calls to interact with the backend server for CRUD operations.
- **State Management**: Local state management to reflect changes in real-time.

---

## API Endpoints

### Authentication
- **POST** `/api/v1/register`: Registers a new user.
- **POST** `/api/v1/login`: Logs in a user and provides a JWT token.

### Todo Operations
- **GET** `/api/v1/todos`: Retrieves the list of todos for the authenticated user.
- **POST** `/api/v1/todos`: Creates a new todo for the user.
- **PATCH** `/api/v1/todos`: Updates an existing todo by ID.
- **DELETE** `/api/v1/todos/:id`: Deletes a specific todo by ID.

## Environment Variables

### Backend
- **`MONGODB_URI`**: MongoDB connection string.
- **`JWT_SECRET`**: Secret key for signing JWT tokens.
- **`PORT`**: Port on which the server is running.

---

## Running the Application Locally

### Prerequisites
- Ensure **Docker** is installed for containerization of the backend.

### Steps
1. **Clone the repository** for both frontend and backend codebases.
2. **Backend Setup**:
   - Configure environment variables (e.g., `MONGODB_URI` and `JWT_SECRET`) in the Docker container.
   - Start the Docker container and ensure it connects to MongoDB.
3. **Frontend Setup**:
   - Install dependencies using `npm install`.
   - Start the frontend server using `npm run dev`.
4. Access the application via the frontend URL configured in your local setup.

---

## Deployment

### Backend Deployment on Render
- **Dockerized**: The backend is containerized with Docker, allowing seamless deployment on Render.
- **Render Configuration**:
   - Ensure Render uses the environment variables correctly for MongoDB and JWT.
   - Configure Render to restart the container upon code changes.

### Frontend Deployment on Vercel
- Deployed on **Vercel**, where updates to the frontend code will automatically trigger a deployment.

### Custom Domain
- The custom domain [https://todo.ritesh.live](https://todo.ritesh.live) is configured to point to the Vercel deployment, ensuring a branded experience.

---

## Security
- **JWT Authentication**: Ensures secure access to todos, with JWT tokens used to authenticate API requests.
- **Environment Variables**: Secrets like `JWT_SECRET` and `MONGODB_URI` are stored securely as environment variables.

---

## Additional Notes
- **Custom Domain**: [https://todo.ritesh.live](https://todo.ritesh.live) is linked to the frontend on Vercel.
- **Error Handling**: Ensure proper error handling, especially for unauthorized access (401 errors) and invalid requests (404 errors).

---

This documentation provides an overview of the Todo application's functionality, API structure, deployment details, and setup instructions. It ensures that developers and stakeholders understand the architecture and can contribute effectively.

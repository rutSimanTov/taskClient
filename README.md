# Task Management Client

**Access the live Task Management System here**: [Visit the live site](https://taskclient-7oyd.onrender.com/)

This repository contains the **frontend** of a Task Management System, designed for efficient task handling with user authentication and role-based access control.

## Features 🌟

- **Task Viewing**: All users can view tasks seamlessly.
- **Authentication**: Users can register and log in to the system.
- **Role-Based Permissions**:
  - Authenticated users can add, update, or delete tasks.
  - Non-authenticated users are limited to viewing tasks.
- **Modern UI**: Built with a focus on user experience and responsiveness.

## Technology Stack 🛠️

- **Frontend**:
  - **CSS**: For styling and responsive design.
  - **JavaScript**: Handles dynamic content and client-side logic.
  - **HTML**: For semantic structure.

- **Backend (Integrated with)**:
  - Hosted in the [TaskServer Repository](https://github.com/rutSimanTov/taskServer).
  - Implements JWT (JSON Web Token) for secure authentication.

## How It Works 🔍

1. Users can register and log in through the client interface.
2. Authenticated users receive JWT tokens for secure session management.
3. Tasks can be viewed by all users, while only authenticated users can modify them.
4. All interactions with the server are performed via a REST API provided by the backend.

## Setup and Installation 🚀

1. Clone the repository:
   ```bash
   git clone https://github.com/rutSimanTov/taskClient.git
   ```
2. Navigate into the project directory:
```bash
cd taskClient
```
3. Open the index.html file in your browser to run the client.
## Backend Integration 🔗
Ensure the backend server is set up and running. The server repository can be found [here](https://github.com/rutSimanTov/taskServer).

## Contributing 💡
Contributions are welcome! Feel free to submit a pull request or open an issue for any enhancements or bugs.




# QuickNotes Pro

A full-stack note-taking application built with a React frontend and a Node.js/Express backend. The project focuses on organising notes through a straightforward interface and an API-backed workflow.

## Live Demo

[Open QuickNotes Pro](https://quick-notes-pro-8fkv-9a1pahjr5-nikki03-techs-projects.vercel.app/signup)

The hosted URL may change if the deployment is moved or redeployed.

## Features

- Sign up and log in through the app's authentication flow
- Create, view, update, and delete notes
- React frontend with Redux-based state management
- Express backend and MongoDB integration
- Responsive interface for everyday note management

Authentication and security should be tested in the deployed environment before using real or sensitive information.

## Tech Stack

| Layer | Technologies |
| --- | --- |
| Frontend | React, React Router, Redux Toolkit, Axios, Tailwind CSS |
| Backend | Node.js, Express.js |
| Database | MongoDB |
| Authentication | JWT-based flow (as implemented in the project) |

## Repository Structure

```text
QuickNotes-Pro/
├── backend/    # API and database integration
├── frontend/   # React application
└── README.md
```

## Run Locally

### 1. Clone the repository

```bash
git clone https://github.com/Nikki03-tech/QuickNotes-Pro.git
cd QuickNotes-Pro
```

### 2. Start the backend

```bash
cd backend
npm install
```

Create a local `.env` file using the variable names expected by the backend. Configure your MongoDB connection string and JWT secret locally; never commit credentials. Then run the backend script defined in the backend's `package.json`.

### 3. Start the frontend

In a second terminal:

```bash
cd frontend
npm install
npm start
```

Use the backend URL and port expected by the frontend configuration. The frontend uses Create React App scripts.

## API Areas

The README's original API design includes note operations and authentication routes. Refer to the backend route files for the current exact paths and request payloads before integrating another client.

## Screenshots

The repository's existing README images show the login, signup, and note-creation flows. See the [repository](https://github.com/Nikki03-tech/QuickNotes-Pro) for the latest screenshots and source.

## Potential Next Steps

- Add search, filtering, categories, and tags
- Improve validation and user-facing API error states
- Document exact environment variables and API payloads
- Add automated tests for authentication and note CRUD flows

## Author

**Nikitha Singh Raj Purohit** · B.Tech CSE & IT, Class of 2027

- [GitHub](https://github.com/Nikki03-tech)
- [LinkedIn](https://www.linkedin.com/in/nikitha-singh-raj-purohit-862317301/)

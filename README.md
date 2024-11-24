# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

# **Developer Instructions**
## Overview

This application allows users to manage tasks with features to:
1. Add new tasks
2. Toggle task completion
3. Delete tasks
4. Filter tasks based on their completion status (All, Active, Completed)

The app uses Redux for global state management of tasks, while Context API is utilized to manage some additional state or provide flexibility for certain components (like managing form input or task display).

## **Tech Stack:**
**Frontend:** React (with functional components and React hooks)
**State Management:**
- **Redux:** Used for global state management (task data).
- **Context API:** Used for managing additional state (like UI-related states or temporary form data).
**Styling:** Bootstrap (for layout and styling)
**TypeScript:** Strong typing for better development experience

## Setting Up the Development Environment
1. Clone the repository:
    ```git clone https://github.com/your-username/task-management-app.git
    ```cd task-management-app
2. Install dependencies:
    Make sure you have Node.js and npm installed. Then, run:
    ```npm install
3. Start the application:
    After the dependencies are installed, run the following command to start the development server:
    ```npm start
The app should now be available at http://localhost:3000.

## **Folder Structure**
    ```src/
  ├── components/
  │   ├── AddTask.tsx         # Component for adding new tasks
  │   ├── Filter.tsx          # Component for filtering tasks (Active, Completed, All)
  │   ├── TaskList.tsx        # Component for displaying tasks
  ├── context/
  │   ├── TaskProvider.tsx    # Context provider for managing task data globally
  ├── redux/
  │   ├── store.ts            # Redux store setup
  │   ├── taskSlice.ts        # Redux slice to manage tasks (actions, reducers)
  ├── App.tsx                 # Main application component
  ├── index.tsx               # Entry point of the application
  └── index.css               # Global styles



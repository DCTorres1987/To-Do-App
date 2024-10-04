# To-Do Task App

This is a simple yet efficient To-Do Task App built with React and TypeScript, allowing users to manage tasks by adding, editing, deleting, and reordering tasks using drag-and-drop functionality. The app also features task persistence using local storage.

Table of Contents
[Getting Started](#getting-started-with-create-react-app)
[Features](#features)
[Technologies Used](#technologies-used)
[Installation](#installation)
[Usage](#usage)
Optimizations
Folder Structure
Contributing
License

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Features

- **Add Tasks:** Easily add new tasks to the to-do list.
- **Edit Tasks:** Edit existing tasks by clicking the edit icon.
- **Mark Tasks as Completed:** Toggle task completion with a click.
- **Delete Tasks:** Remove tasks from the list.
- **Reorder Tasks:** Drag and drop tasks to reorder them.
- **Persistent Storage:** Tasks are saved in local storage, so your list remains even after a page refresh.
- **Responsive Design:** Optimized for both desktop and mobile use.

## Technologies Used

- **React with TypeScript:** A modern JavaScript library for building user interfaces.
- **react-beautiful-dnd:** Provides drag-and-drop functionality for reordering tasks.
- **Styled-Components:** Utilized for component-level styles in a clean and modular way.
- **Local Storage:** Tasks are persisted locally in the browser.

## Installation

1. Clone this repository:

    ```git clone https://github.com/your-username/todo-task-app.git```

2. Navigate to the project directory:

    ```cd todo-task-app```

3. Install the dependencies using yarn or npm:

    ```yarn install```

    or

    ```npm install```

4. Start the development server:

    ```yarn start```

    or

    ```npm start```

5. Open your browser and visit http://localhost:3000 to view the app.

## Usage

- **Add a Task:** Type a task into the input field and either press Enter or click the "+" button.
- **Mark Task as Completed:** Click on a task to toggle its completed status (it will be crossed out).
- **Edit a Task:** Click the pencil icon next to a task, make changes in the input field, and save.
- **Delete a Task:** Click the trash icon next to a task to remove it.
- **Reorder Tasks:** Drag and drop tasks to reorder them within the list.

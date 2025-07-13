# TaskBolt - Fast and Efficient Task Manager

Welcome to **TaskBolt**, a modern, user-friendly task management app built with React. Designed for simplicity and performance, TaskBolt helps you organize your tasks efficiently with reminders, filtering, and a clean interface.

---

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Setup & Installation](#setup--installation)
- [How This Project Is Made](#how-this-project-is-made)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## Demo

*coming soon.*

---

## Features

- Add, edit, and delete tasks with title, description, and due date.
- Filter tasks by completion status: All, Completed, Incomplete.
- Prevent selecting past dates when creating tasks.
- Reminder notifications at 24h, 12h, 6h, 3h, and 1h before due date.
- Both in-app toast and device (system) notifications.
- Responsive design with smooth user experience.
- Separate pages for About, Contact, Privacy Policy, and Terms of Service.
- Persistent tasks stored in browser localStorage.

---

## Tech Stack

- **React** – Frontend UI library.
- **React Router DOM** – Client-side routing.
- **React Toastify** – Toast notifications.
- **UUID** – Unique ID generation for tasks.
- **Tailwind CSS** – Utility-first CSS framework for styling.
- **Browser Notifications API** – For system notifications.

---

## Project Structure
```
src/
├── components/
│ ├── About.jsx
│ ├── Contact.jsx
│ ├── Footer.jsx
│ ├── Manager.jsx
│ ├── Navbar.jsx
│ ├── PrivacyPolicy.jsx
│ ├── TermsOfService.jsx
├── App.jsx
├── index.js
├── styles.css (Tailwind imports or custom styles)
```

- **App.jsx**: Main app component handling routing and layout.
- **Manager.jsx**: Core task management component with task CRUD and reminders.
- **Contact.jsx**, **About.jsx**, **PrivacyPolicy.jsx**, **TermsOfService.jsx**: Informational pages.
- **Navbar.jsx** and **Footer.jsx**: Navigation and footer UI components.

---

## Setup & Installation

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- npm (comes with Node.js) or yarn

### Steps

1. **Clone the repository**
```
git clone https://github.com/your-username/taskbolt.git
cd taskbolt
```

2. **Install dependencies**

Using npm:
```
npm install
```

Or using yarn:
```
yarn install
```

3. **Start the development server**
```
npm start
```

or
```
yarn start
```

4. Open your browser and navigate to:
```
http://localhost:3000
```

You should see the TaskBolt app running!

---

## How This Project Is Made

- **React Functional Components & Hooks:**  
  The app uses React functional components with hooks like `useState` and `useEffect` to manage state and lifecycle events.

- **Routing with React Router:**  
  Navigation between pages (Home, About, Contact, Privacy Policy, Terms of Service) is handled using React Router DOM for a smooth SPA experience.

- **Task Management Logic:**  
  Tasks are stored in localStorage to persist across sessions. Users can add, edit, delete, and mark tasks as complete.

- **Date Validation:**  
  The date picker input restricts users from selecting past dates using the `min` attribute dynamically set to today’s date.

- **Reminder Notifications:**  
  A periodic timer checks tasks and triggers reminders at specific intervals (24h, 12h, 6h, 3h, 1h before due date) using both React Toastify for in-app notifications and the Web Notifications API for device notifications.

- **Scrollbar Hiding:**  
  The entire app container uses inline styles and CSS to hide scrollbars while keeping scrolling functional, providing a cleaner UI.

- **Styling:**  
  Tailwind CSS utility classes are used extensively for responsive, modern, and consistent styling across components.

---

## Usage

- **Add a Task:** Fill in the title, description, and due date (cannot be in the past), then click "Save".
- **Edit a Task:** Click the edit icon on an incomplete task to load it into the form for updating.
- **Mark Complete:** Click the checkmark icon to mark a task as completed.
- **Delete a Task:** Click the trash icon to remove a task.
- **Filter Tasks:** Use the checkboxes to filter between all, completed, or incomplete tasks.
- **Navigate:** Use the navbar to visit About, Contact, Privacy Policy, and Terms of Service pages.

---

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a Pull Request.

---

## License

This project is licensed under the MIT License.

---

## Contact

For any questions or feedback, please reach out at:

- GitHub: https://github.com/indrajeetsingh/Algonive_TaskBolt

---

Thank you for using **TaskBolt** — your fast and efficient task manager! 🚀

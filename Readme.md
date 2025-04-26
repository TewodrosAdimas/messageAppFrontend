# React Messaging App Frontend

This repository contains the frontend codebase for a modern messaging application, built using React.js and styled with Tailwind CSS. It features a clean, responsive layout inspired by common chat interfaces.


## Screenshot

![alt text](<Screenshot from 2025-04-26 09-06-07.png>)


## Features

*   **Chat List Sidebar:** Displays a list of ongoing conversations with user avatars, names, last message snippets, and timestamps.
*   **Active Chat Highlighting:** Clearly indicates the currently selected chat in the sidebar.
*   **Chat Window:** Displays the message history for the selected conversation.
*   **Message Bubbles:** Differentiates between sent (outgoing) and received (incoming) messages.
*   **Message Input:** Allows users to type and send new messages (currently logs to console and updates mock state).
*   **Responsive Design:** Basic structure adapts to different screen sizes (further refinement may be needed).
*   **Mock Data:** Operates with hardcoded data for demonstration purposes.

## Tech Stack

*   **[React.js](https://reactjs.org/) (v18+):** JavaScript library for building user interfaces.
*   **[Vite](https://vitejs.dev/):** Next-generation frontend tooling for fast development and optimized builds.
*   **[Tailwind CSS](https://tailwindcss.com/):** A utility-first CSS framework for rapid UI development.
*   **[PostCSS](https://postcss.org/):** Tool for transforming CSS with JavaScript plugins.
*   **[Autoprefixer](https://github.com/postcss/autoprefixer):** PostCSS plugin to parse CSS and add vendor prefixes.
*   **ESLint:** For code linting and consistency.


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development purposes.

### Prerequisites

*   [Node.js](https://nodejs.org/) (v18 or later recommended)
*   [npm](https://www.npmjs.com/) (v9 or later recommended) or [yarn](https://yarnpkg.com/)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/TewodrosAdimas/messageAppFrontend.git
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd messaging-app
    ```
3.  **Install dependencies:**
    ```bash
    npm install
    # or
    # yarn install
    ```

### Running the Development Server

1.  **Start the Vite development server:**
    ```bash
    npm run dev
    # or
    # yarn dev
    ```
2.  Open your browser and navigate to the URL provided by Vite (usually `http://localhost:5173` or similar).

The application will automatically reload if you make changes to the code.

### Building for Production

To create an optimized build of the application for deployment:

```bash
npm run build
# or
# yarn build

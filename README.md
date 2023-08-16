# group-randomizer
user interface in order to randomize groups of names



# Group Randomizer App

The Group Randomizer App is a web application built using React on the frontend and Express.js on the backend. It allows you to create groups and generate a JWT token containing group information.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Backend](#backend)
- [Frontend](#frontend)
- [Contributing](#contributing)
- [License](#license)

## Features

- Create groups and generate JWT tokens.
- Store group information in a JWT token.
- Communicate between frontend and backend using Axios.
- Utilize cookies for secure storage and retrieval of tokens.

## Getting Started

Follow these instructions to set up and run the Group Randomizer App on your local machine.

### Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/fredegd/group-randomizer.git
Navigate to the project directory:

sh
Copy code
cd group-randomizer
Install backend dependencies:

sh
Copy code
cd backend
npm install
Install frontend dependencies:

sh
Copy code
cd ../frontend
npm install
Usage
Run the backend server:

sh
Copy code
cd ../backend
npm start
The server will start at http://localhost:3011.

Run the frontend app:

sh
Copy code
cd ../frontend
npm start
The app will start at http://localhost:5173.

Open your web browser and navigate to http://localhost:5173 to use the Group Randomizer App.

Backend
The backend of the app is built using Express.js. It provides an API endpoint for creating groups and generating JWT tokens.

API Endpoints
POST /api/create/group: Creates a group and returns a JWT token containing group information.
Frontend
The frontend of the app is built using React. It allows users to input group information and communicate with the backend to generate JWT tokens.

Components
Randomizer: Main component that handles group creation and JWT token generation.
InputMask: Component for entering group title and members.
Groups: Component for displaying group title and members from the JWT token.
Contributing
Contributions are welcome! If you find a bug or want to enhance the app, feel free to open an issue or submit a pull request.

License
This project is licensed under the MIT License - see the LICENSE file for details.
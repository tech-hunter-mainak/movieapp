# MovieApp

MovieApp is a web application that allows users to browse and explore various movies. This project includes a React frontend and an Express backend with a SQL database. First download the full repo from github.

## Getting Started

Follow the instructions below to set up and run the project on your local machine.

### Prerequisites

- Node.js and npm (https://nodejs.org/)
- XAMPP (https://www.apachefriends.org/index.html)

### Installation

1. **Download and Install XAMPP Server:**

   Download and install XAMPP from [here](https://www.apachefriends.org/index.html). After installation, start the Apache and MySQL modules from the XAMPP control panel.

2. **Create Database:**

   - Open XAMPP control panel and click on 'Admin' button for MySQL. This will open phpMyAdmin.
   - Create a new database named `movieapp`.

3. **Import SQL Dumps:**

   - Go to the `sql` folder where all SQL dump files are located.
   - Import these dumps into the `movieapp` database you just created.

4. **Set Up Server:**

   - Navigate to the `/server` folder in your project directory.
   - Run `npm install` to install all necessary dependencies.
   - Run `npm start` to start the server.

5. **Set Up Client:**

   - Navigate to the main project directory.
   - Run `npm install` to install all necessary dependencies.
   - Run `npm start` to start the React application.

6. **Access the Application:**

   - Open your browser and go to `http://localhost:3000`.


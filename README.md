# c4c-projects

## If there are any issues with visiting my website or installing and running locally please contact: chen.po-j@northeastern.edu

## Website is uploaded to netlify and server is running on render. Databse is running on MongoDB AWS

Visit the link: https://main--c4c-projects-page.netlify.app/

Once on the site the site will likely be empty because the server spins down after long durations of inactivity. 
Wait for around 2 minutes and refresh the site and the site data should load. This site is meant to be viewed on DESKTOP ONLY. 

You may visit the admin page with the login credentials:
username: admin
password: 123

You can edit, delete, or add any new projects but all data is stored on a MongoDB database hosted by AWS.
Data is NOT stored in local storage for data persistence and is stored by MongoDB

A authentication token is stored on local storage when you login and is deleted when you click the logout icon.
JWT token is signed and lasts for 500 seconds so you will be redirected to home page and required to sign in again after 500 seconds

Changing active status for projects in Admin page will change which organizations are shown in the client user page.

## If you want to run and install locally

### Prerequisites

Ensure you have the following software installed on your system:

- **Node.js** (v16.0.0 or higher) and **npm** (Node Package Manager)
  
- **Git** (for cloning the repository)

### Clone the Repository

First, clone the repository from GitHub to your local machine.
Then open the repository in your IDE and open a new terminal and navigate to the project directory

### Install Dependencies

Navigate to the project directory and install the dependencies for both the backend and the frontend.

1. **Backend Setup**

   Navigate to the backend directory and install the required packages:

   ```bash
   cd C4C-PROJECTS/backend
   npm install
   ```

2. **Frontend Setup**

   Navigate to the frontend directory and install the required packages:

   ```bash
   cd C4C-PROJECTS/frontend
   npm install
   ```

### Set Up Environment Variables

You'll need to set up environment variables for the the frontend. Create `.env` files in the respective directories with the necessary configurations.


1. **Frontend Environment Variables**

   Create a `.env` file in the `frontend` directory with the following contents:

   ```env
   REACT_APP_API_BASE=http://localhost:3000
   ```

### Running the Application

Now you can run both the backend and frontend servers.

1. **Start the Backend Server**

   Navigate to the `backend` directory and start the server:

   ```bash
   cd ../backend
   npm start
   ```

   The backend server will start running on `http://localhost:3000`.

2. **Start the Frontend Server**

   Open a new terminal window or tab, navigate to the `frontend` directory, and start the React application:

   ```bash
   cd ../frontend
   npm start
   ```

   The frontend application will ask to start running on a different port since server is already running on `http://localhost:3000`.
   Select Yes to run on a different port.

### Accessing the Application

Open your web browser and navigate to the port where your front-end is running on to view the application.

## High-level Approach

This is a full-stack web application built using ReactJS for the front-end and Node-Js and MongoDB for the back-end.
The front-end is hosted on netlify.com and server is running on render.com and connected to a MongoDB database on AWS.

### Overview:
This application displays partner organizations that C4C is collaborating or has collaborated with. A client typically would visit
C4C's project website to see what C4C's ACTIVE projects are.
I implemented user authentication for a Admin Content Management System page for C4C admins that wish to edit, delete, add, activate or deactivate C4C projects.

## Design decisions

I designed this application with a client user view vs administrator view because it makes sense for admins to display the C4C's projects to the public via the client view, while easily being able to alter the website content using the admin panel. This allows site content to be changed and updated easily through admin logins.
A C4C admin can wish to activate or deactivate projects by editing the existing projects in the admin panel.
Only projects that are set to "Active" will be displayed on the main home page for the clients to see.
Only admins are able to see all active or inactive projects in the admin panel.

### Authentication
When a correct username and password is supplied the server will sign a JWT token that expires in 500 seconds and send it back
to the client. The client stores this authentication token in their local storage when they are logged in. Sensitive API requests to the server such as editing, deleting, adding projects, or trying to navigate to the admin site without signing in will be rejected if the client sends a incorrect auth token to the server. When the server's auth token expires admins must sign in again to obtain a new valid token. 
When Admin is authenticated the user will stay signed in regardless of refreshing or exiting out of the website. 

## Bonus features and Reflection

### Client user view

Created a project client view for the public to see all active C4C partners and project. 
Changing a project's active status in the admin panel decides whether a project is displayed in the client project page.

### MongoDB Database

Implemented MongoDB database on AWS for data persistency. 

### Authorization Control

Implemented token validation for user authentication allowing admin sign in sessions. Admins don't have to sign in everytime
they refresh or close out of the website to visit the admin page. 

### Edit organization

Implemented the ability to edit existing project's title, header, description, image URL, and active status. Active status also
determines which projects are displayed in the client user page. 

### Search and Filter

Implemented the ability to search for organizations by their title in admin page. Also added filter functionality that can either display all existing organizations or only active organization for easy access and edit capabilities for admin users. 


<p align="center">
  </p>

<h1 align="center">ZeroWasteGourmet</h1>

<p align="center">
  <a href="#about">About</a> •
  <a href="#setup">Setup</a> •
  <a href="#running">Running</a> •
  <a href="#built-with">Built With</a> •
  <a href="#contributors">Contributors</a> •
  <a href="#license">License</a>
</p>

---

## About

**ZeroWasteGourmet** is a web application that helps people waste less food at home. It guides users to cook with recipes that minimise food waste, plan their grocery shopping, and create weekly meal plans. By using this app, users can change their shopping, cooking, and eating habits in a sustainable way. 
 
You can search for recipes based on ingredients you have at home. The recipes include tips on how to use all parts of an ingredient. For example, you can use an onion skin, a broccoli stem, or the end of a mushroom.

---

## Setup

##### <a href="#built-with">Requirements:</a> Code editors (VS Code, Atom...), Node.js, React, Nodemon. (optional) Python



### Client 

> Download the Node.js and install (https://nodejs.org/).
Use the package manager npm to install the dependencies.

1. From the top-level directory: `ss23-zerowastegourmet`

2. Change to folder
   ```sh
   $ cd client
   ```

3. Run the following commands to install npm and dependencies, the CSS library Bulma:

   ```sh
   npm install
   ```
   ```sh
   npm install react-router-dom
   ```
   ```sh
   npm install bulma
   ```

### Server

> Installation

1. From the top-level directory: `ss23-zerowastegourmet`

2. Change to folder
   ```sh
   $ cd server

3. Run following commands to install express and dependencies:

   ```sh
   npm install
   ```

Note: If you find any ImportError messages, continue to install missing dependencies.

### Python API

> Installation

1. From the top-level directory: `ss23-zerowastegourmet`

2. Change to folder
   ```sh
   $ cd api

3. Run the following command to install flask and dependencies:

   ```sh
   pip install flask
   ```
---

## Running 

- **Run the server** 
1. Go to the directory: `ss23-zerowastegourmet/server`

2. Run the following command:

   ```sh
   $ node app.js 
   ``` 
   or
   ```sh
   $ nodemon app.js
   ```

- **Run the client** 
1. Go to the directory: `ss23-zerowastegourmet/client`

2. Run the following command:

   ```sh
   $ npm start
   ```

- **Run the API** 
1. Go to the directory: `ss23-zerowastegourmet/api`

2. Run the following command:

   ```sh
   $ python zeroapp.py
   ```

---
## Built With

### Technology

- [React](https://react.dev)
- [Python](https://www.python.org)
- [SQLite3](https://www.sqlite.org/index.html)
- [Flask API](https://flask.palletsprojects.com/en/3.0.x/api/)
- [Node.js](https://nodejs.org)
- [Express](https://expressjs.com)
- [Moongose](https://mongoosejs.com)
- [MongoDB](https://www.mongodb.com)
---

## Contributors

### Team members

- UX Thamiris Câmara
- UX Jana Müller
- WD Guilherme F. M. Muniz 
- WD So Jin Park 
- DS Irene Gon
- DS Daniel J. Paul

### Mentor
- Kate Borovikova
- Petra Broeken

#### Techlabs Berlin Summer Term 2023

---

## License
This project is licensed under MIT License.

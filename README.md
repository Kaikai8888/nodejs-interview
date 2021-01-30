# Todo List - nodejs-interview code 
## Installation
1. Enter `git clone https://github.com/Kaikai8888/nodejs-interview.git` in the terminal to download the project folder

2. Install mySQL and use mySQL workbench to create the database,`todo_dev_insight_eye` with following SQL script

  ```sql
  DROP DATABASE IF EXISTS todo_dev_insight_eye;
  CREATE DATABASE todo_dev_insight_eye;
  ```

3. Modify MySQL username, password in `./config/config.json`
4. Enter `npx sequelize db:migrate` in the terminal to create tables in the database
5. Enter `npx sequelize db:seed:all` in the terminal to create seed data
6. Enter `npm run dev` in the terminal to run app.js with nodemon to start local server
7. Enter http://localhost:3000 in the browser and visit the website


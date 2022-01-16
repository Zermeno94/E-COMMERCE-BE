## HW 13: E- COMMERCE-BE 🛍️

![GitHub license](https://img.shields.io/badge/license-MIT-ff69b4.svg)


## Description
Your task is to build the back end for an e-commerce site by modifying starter code. You’ll configure a working Express.js API to use Sequelize to interact with a MySQL database.


## Table of Contents 🔎
- [Installation](#installation)
- [Usage](#usage)
- [Demo](#demo)
 -[GitHub Link](#githubdeploylink)
- [Contributers](#contributers)
- [Resources & Tutorials](#resources&tutorials)
- [License](#license)

### Installation  💾
You’ll need to use the [MySQL2](https://www.npmjs.com/package/mysql2) and [Sequelize](https://www.npmjs.com/package/sequelize) packages to connect your Express.js API to a MySQL database and the [dotenv](https://www.npmjs.com/package/dotenv) package to use environment variables to store sensitive data. The application will be invoked by using the following command:

```bash
  npm install
```
Open MySQL by the following command line:
```bash
  mysql -u root -p
```
From there you will enter the next command line: 
```bash
  source db/schema.sql
``` 

Exit MySQL shell seed the database with the following command line: 
```bash
  node seeds/index.js  
```
or
```bash
  npm seed
```
Finally you will enter the last command to connect to the server: 
```bash
  npm start
```


### Usage ⚡
This application does not have front-end built, but it allows you to test routes and their functionality using Insomina. 

### Demo 🎥

* [Link to Demo](https://watch.screencastify.com/v/wIFqz9Mdjt1RWgVbblbV)

### GitHub 

* [GitHub Link](https://github.com/Zermeno94/TEAM-PRO-GEN)


## Contributers
* Miranda Zermeno
* Tutor: Eric Slayer 


## Resources & Tutorials  💻


* [https://github.com/ikatyang/emoji-cheat-sheet/blob/master/README.md](#https://github.com/ikatyang/emoji-cheat-sheet/blob/master/README.md)
* [npm documentation on dotenv](#https://www.npmjs.com/package/dotenv)
* [Sequelize documentation on model querying basics](#https://sequelize.org/master/manual/model-querying-basics.html)
* [Sequelize documentation on validations and constraints](#https://sequelize.org/master/manual/validations-and-constraints.html)
* [https://developer.mozilla.org/en-US/](#https://developer.mozilla.org/en-US/)
* [https://www.youtube.com/watch?v=V_Kr9OSfDeU](#https://www.youtube.com/watch?v=V_Kr9OSfDeU)


## MIT License 📍

Copyright (c) 2021 Miranda Zermeno

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
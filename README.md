# Tic Tac Toe

This is a Tic Tac Toe game made with the purpose of improving coding skills and having fun at the same time! The game is a classic to be played with friends or alone if you will. Each player marks an "O" or an "X" in the table. The first to complete a row in any direction, wins the game. Here is a demo link of the project: https://still-island-57296.herokuapp.com/

## Getting Started

This guide will provide you with information regarding how to run the game locally and how to deploy it in a live system if needed.

### Prerequisites

In order to be able to run a test version of the software in your machine, you will need to have installed:


* Node.js
* npm
* npm packages: express, body-parser, eslint and nodemon (last two being optional)
* Heroku account created and locally installed
* Git extension

### Installing


* Download the files to a local folder in your computer or use the following command to clone the repo:

```
$ git clone https://github.com/pedrofilipefontes/tic-tac-toe.git
$ cd tic-tac-toe
```

* In the local folder with the files, start npm and proceed with the details until the package is created

```
$ npm init
```

* Install the npm packages

```
$ npm install express body-parser
```

* To access locally simply run:

```
$ node app.js
```

* And access in your browser the address: http://localhost:4000

**Optional**

* If you do not want to restart your local server with the node command, you can install nodemon globally and initiate in your project local folder. Once you save the local document, the server will restart automatically. To install nodemon, use: (You may need administrator permissions for that, hence the need to use "sudo" in the CLM)

```
$ sudo npm install -g nodemon
```

* Once nodemon is installed, simply run this command from the local folder and later access http://localhost:4000 in your browser:

```
$ nodemon start
```

## Deployment

The deployment step assumes that you have already installed Heroku in your machine. If not, please get it in [this link](https://devcenter.heroku.com/articles/heroku-cli#download-and-install)

Once you have it and you are logged in, use the following commands:

* To start git in the directory:

```
$ git init
```

* Use git status and make sure that you have the "Procfile" (written in the **exact** same way) within your documents. If not, try checking the .gitignore file or try getting the files from the initial Git repository once more.

```
$ git status
```

* Now simply add and commit your project:

```
$ git add .

$ git commit -m "your message here"
```

* To create an app environment with Heroku: (if you are not logged in, it will ask your to authenticate the login. You can follow the instructions in the terminal to do it)

```
$ heroku create
```

* Deploy the project to the Heroku app you have created:

```
$ git push heroku master
```
## Built With

* [npm](https://www.npmjs.com/) - Package Manager
* [express](https://www.npmjs.com/package/express) - Code package
* [body-parser](https://www.npmjs.com/package/body-parser) - Code package
* [Heroku](https://www.heroku.com/) - Cloud platform


## Authors

* **Pedro Filipe Fontes**

## License

This project is licensed under the ISC License.

## Acknowledgments

* The game **is not** mobile optimized. 

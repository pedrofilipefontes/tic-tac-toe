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

Currently being updated. Please wait.

## Built With

Currently being updated. Please wait.


## Authors

* **Pedro Filipe Fontes**


## License

This project is licensed under the ISC License.

## Acknowledgments

* The single player game mode is not finished yet. It will not work
* Need to reset variables and create game restart

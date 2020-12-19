<p align="center">
  <img src="https://github.com/coding-club-iit-jammu/coding-club-iit-jammu.github.io/blob/master/src/assets/cc.png" alt="logo" width="10%" />
</p>
<h1 align="center">Coding Club IIT Jammu</h1>

This is the source code for IIT Jammu coding club website (https://www.codingclubiitjammu.tech/)

# Technology Stack
* Angular Js
* Materilize css

# Requirements
* Nodejs --version >= 10

## Installation 
``` sh
  git clone https://github.com/coding-club-iit-jammu/coding-club-iit-jammu.github.io.git
  cd coding-club-iit-jammu.github.io
  npm install
  npm start

```

## Installation with Docker
``` sh
  git clone https://github.com/coding-club-iit-jammu/coding-club-iit-jammu.github.io.git
  cd coding-club-iit-jammu.github.io
  docker build --tag <image_name>:<version> .
  docker run -p <port_on_local_machine>:80 <image_name>:<version>

```


## Build

Run `npm run build` to build the project, production files will be stored at `dist` folder

## Running unit tests

Run `npm run test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Recommended Reading
* Angular (https://angular.io/docs)
* npm commands (https://docs.npmjs.com/cli/v6/commands/npm/)

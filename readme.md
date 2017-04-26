# React, Redux, Ratchet, Cordova boilerplate

## What's included
* React
* React router, React redux router
* Redux, Redux Thunk, Redux Logger
* Webpack, Webpack dev server
* Ratchet (scss)
* Cordova

## Usage
>Note: If you are using a windows OS, edit `package.json` and replace `export` command with `SET`. _export_ is only vali din unix OS.
* `npm install` to install packages
* change _config.xml_ ot match the project information
* remove `http://localhost:3200/` from _index.html_ in production mode

## Scripts
* _server_: runs a local server on __localhost:3200__
* _build:webpack_: build webpack modules to production mode
* _build:cordova_: builds a debug version of android application
* _run:cordova_: runs cordova debug application on connected device or emulator
* _build:cordova:release_: builds android application in release mode

## License
The project is MIT licensed.

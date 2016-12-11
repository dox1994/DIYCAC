# DIYCAC main website

[![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)

DIYCAC is main website for business, access prod url: www.diycac.cn.

Main tech stack is HTML5/CSS3, JQuery and NodeJS. Use gulp to build and deploy through github.

### Tech

DIYCAC uses a number of open source projects to work properly:

* [HTML/CSS] - everything basic for web apps!
* [Twitter Bootstrap] - great UI boilerplate for modern web apps
* [Gulp] - the streaming build system
* [jQuery] - so be it.
* [Node.js] - evented I/O for the backend
* [Express] - fast node.js network app framework
* [WebStorm] - IDE for development.

Besides, Google fonts and other template CSS are embedded in the project so we don't need to download from.

## How To Run
run 'gulp' to build project

and then 'node server.js' start webservice.

### More On how to run it on a Mac
1. Download [Webstorm](https://www.jetbrains.com/webstorm/download/)
 you will have 30 days trial or free if you register as student email.
2. create a github account and fork this project.
3. git clone your repo. [use my own repo as example]
```
> git clone git@github.com:DataMonster/DIYCAC.git
```
4. move to integration and then create a new branch based on integration, with name: "feature/new-feature"
```
> git checkout integration
> git checkout -b feature/new-feature
```
5. you are in the new branch now, do whatever you want

6. Install NodeJS and NPM on your MAC, use homebrew
> brew install node

#### Now, try to run locally.

7. in your branch, install dependency of the project
```
> npm install
```
8. build project use gulp
```
> gulp
```
9. run server
```
> node server.js
```
10. now, access website through: [http://localhost:3001](http://localhost:3001)

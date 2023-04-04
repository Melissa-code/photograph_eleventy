# photograph_eleventy
***

Portfolio de Charles Cantin passionné par la photographie sous la forme d'un site web.

***

## Table of Contents
1. [General Info](#general-info)
2. [Technologies](#technologies)
3. [Installation](#installation)
4. [Run](#run)

***

## General Info
***
4 pages for the website: home, gallery, prices and contact. 
Charles Cantin must be an administrator to manage the prices and the photos. 

***

## Technologies
***
A list of technologies used within the project:
* [nodejs](https://nodejs.org/en): Version v18 or higher 
* [eleventy](https://www.11ty.dev/docs/)

***

## Prerequisite
***
Install Node.js
If you don’t already have Node.js installed, go to [nodejs](https://nodejs.org/en) and follow the instructions for your operating system.

Open a terminal and use
```
node --version
```
to make sure it’s installed. As long as it’s version 12 or newer, you’re good to go.

## Installation
***
Clone this project :
```
$ git clone https://github.com/Melissa-code/photograph_eleventy.git
$ cd ../path/to/the/file/photograph_eleventy
$ npm install
$ npm start
```

Or make a directory photograph_eleventy whatever you want : 
```
$ mkdir photograph_eleventy
$ cd ../path/to/the/file/photograph_eleventy
$ npm init -y
$ npm install --save-dev @11ty/eleventy
```

## Run 
***
Create a .eleventy.js file in the root of your project and 2 directories src and public in the root of your project.
Then set them as the input and output directories in .eleventy.js :
```
module.exports = function (eleventyConfig) {
  return {
    dir: {
      input: "src",
      output: "public"
    }
  };
};
```
Now we can use in the terminal to start the development server 
```
npm start or npx eleventy --serve 
```

And to generate a build of our site

```
npm run build
```


Open a web browser and go to http://localhost:8080.


To stop the development server whenever you need to, use 
```
ctrl/cmd + c
```
or 
```
ctrl/c
```
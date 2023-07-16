# photograph_eleventy

Portfolio de Charles Cantin passionné par la photographie sous la forme d'un site web.

***

## Table of Contents
1. [General Info](#general-info)
2. [Technologies](#technologies)
3. [Installation](#installation)
4. [Run](#run)
5. [Administration](#administration)
6. [Deploying](#deploying)
6. [Contact-form](#contact-form)

***

## General Info

4 pages for the website: home, gallery, prices and contact. 
Charles Cantin must be an administrator to manage the prices and the photos. 
See the website : [Portfolio de Charles Cantin](https://portfolio-charlescantin-photographe.netlify.app/)

***

## Technologies

A list of technologies used within the project:
* [nodejs](https://nodejs.org/en): Version v18 or higher 
* [eleventy](https://www.11ty.dev/docs/)

***

## Prerequisite

Install Node.js
If you don’t already have Node.js installed, go to [nodejs](https://nodejs.org/en) and follow the instructions for your operating system.

Open a terminal and use
```
node --version
```
to make sure it’s installed. As long as it’s version 12 or newer, you’re good to go.

***

## Installation

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

***

## Run 

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
ctrl/c
```
or 
```
ctrl/cmd + c
```

***

## Administration

- Create an account on Siteleaf [Siteleaf](https://www.siteleaf.com/).
- Sign up with GitHub.
- Fill in the gaps Title* and Domain* (this is the subdomain before siteleaf.net)
- And connect existing repo : choose public repo then choose photograph_eleventy 
- Choose the developer free plan. 
- On the admin panel, you can change now the categories, the images and the prices and you can create or delete them too. 

***

## Deploying

- Create an account on Netlify [Netlify](https://www.netlify.com/blog/netlify-cms-to-become-decap-cms/).
- Click on the button Add new site and select Import an existing project.
- Connect to Git provider : Github.
- Search a repo. If you can't see your reposotory, click on Configure the Netlify app on GitHub.
- When you are on the site settings, make sure the build command is either npm run build or eleventy
- And under "Publish directory", replace _site by public.
- Click on the Deploy site button.
- In a few moments Netlify will tell you that your site is live and give you a URL for it.
- You can rename the name of the site, click on the buttons Site settings then Change site name and Save. 

***

## Contact-form

- Click on "Forms" in the Netlify interface, you'll be brought to the Netlify Forms dashboard.
- The form will have whatever name you used in the name attribute on your contact form, in this case "contact".
- In the Active forms section, click on contact and you can see the list of the emails sent.
- If you click on one, you see the details : name, firstname, email and message. 

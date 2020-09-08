# CMS style Tech Blog
I have built a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well. This site was built from scratch and deployed to Heroku. The app follows the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication

(I have used an Express.js API, configure it to use Sequelize to interact with a MySQL database).

1. A link to the start up demo video is included here https://youtu.be/KlwsOc-TnfQ 
2. The application is deployed at https://murmuring-shelf-60859.herokuapp.com/
3. This code for the app is published to github at: https://github.com/anitapeppercorn/Tech-Blog

## Contents
- [Description](#Description)
- [Demo & Models](#Demo&Models)
- [User Story](#User-Story)
- [Acceptance Criteria](#Acceptance-Criteria)
- [Installation](#Installation)
- [Dependencies](#Dependencies)
- [License](#License)
- [Author](#Author)

## Description

Writing about tech can be just as important as making it. Developers spend plenty of time creating new applications and debugging existing codebases, but most developers also spend at least some of their time reading and writing about technical concepts, recent advancements, and new technologies. A simple Google search for any concept covered in this course returns thousands of think pieces and tutorials from developers of all skill levels!

## Demo & Models
![Demo GIF of app](/images/mock-up.gif)
![DemoVideo](https://youtu.be/KlwsOc-TnfQ)
### Demo 
The video shows how a user would invoke the application from the command line.

### User Story
AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions

### Acceptance Criteria
GIVEN a CMS-style blog site
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
WHEN I click on the homepage option
THEN I am taken to the homepage
WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in
WHEN I choose to sign up
THEN I am prompted to create a username and password
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out
WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post
WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard
WHEN I click on the logout option in the navigation
THEN I am signed out of the site
WHEN I am idle on the page for more than a set time
THEN I am automatically signed out of the site

## Installation
To use this application: Clone the GitHub repository, and install all the dependencies, with```npm install```, on the integrated terminal install all the dependcies. 
Create your .env file and type in:
DB_NAME='tech_blog_db'
DB_USER='yourusername'
DB_PW='yourpassword'

In the integrated terminal, seed ``npm run seed`` and start using ``npm start``. 
app will run at localhost3001


### Dependencies
    - "bcrypt": "^5.0.0",
    - "connect-session-sequelize": "^7.0.1",
    - "dotenv": "^8.2.0",
    - "express": "^4.17.1",
    - "express-handlebars": "^5.1.0",
    - "express-session": "^1.17.1",
    - "mysql2": "^2.1.0",
    - "sequelize": "^6.3.4"
    

## License
[MIT License](./LICENSE)
![license](https://img.shields.io/badge/License-MIT-blue)

### Author: Anita Ganti
![Badge](https://img.shields.io/badge/Github-anitapeppercorn-4cbbb9) 
![Profile Image](https://github.com/anitapeppercorn.png?size=50)
View the author's portfolio at:  https://anitapeppercorn.github.io/anitaprofileportfolio/


[Table of Content](#Table-of-Content) --- [Back to Top](#Tech-Blog) --- [Installation](#Installation)
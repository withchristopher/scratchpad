const { Post } = require('../models');

const postData = [
    {
        title: "Getting 'paranoid' keeps you from anguish",
        post_content: "https://sequelize.org/master/manual/paranoid.html",
        user_id: 1
    },
    {
        title: "Sequelize Automatic Database Migration and Seeding on Heroku",
        post_content: "https://medium.com/@reyhanhamidi/sequelize-automatic-database-migration-and-seeding-on-heroku-fb88cf09573b",
        user_id: 2
    },
    {
        title: "Have you gotten a handle on handlebars yet?",
        post_content: "https://www.npmjs.com/package/handlebars",
        user_id: 3
    },
    {
        title: "How to customize Node.js .env files for different environment stages",
        post_content: "https://www.freecodecamp.org/news/nodejs-custom-env-files-in-your-apps-fa7b3e67abe1/",
        user_id: 5
    },
    {
        title: "Thirst for AI just like H2O ;-)!",
        post_content: "https://www.h2o.ai/",
        user_id: 5
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
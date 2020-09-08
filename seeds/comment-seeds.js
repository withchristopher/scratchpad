const { Comment } = require('../models');

const commentData = [
    {
        user_id: 1,
        post_id: 5,
        comment_text: "This is amazing!"
    },
    {
        user_id: 4,
        post_id: 4,
        comment_text: "This .env is critical to keep our inter-galactic secrets!"
    },
    {
        user_id: 1,
        post_id: 4,
        comment_text: "Awesome! Kudos to the contributors. No choke hold for you today!"
    },
    {
        user_id: 3,
        post_id: 5,
        comment_text: "I'm gonna get on this. AI is key to rule the empire!"
    },
    {
        user_id: 3,
        post_id: 2,
        comment_text: "Automation is everything!"
    },
    {
        user_id: 3,
        post_id: 4,
        comment_text: "Keep up the good work!"
    },
    {
        user_id: 5,
        post_id: 3,
        comment_text: "Don't mean to get a reaction, but have you tried React.js?"
    },
    {
        user_id: 2,
        post_id: 1,
        comment_text: "Nice tool!"
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
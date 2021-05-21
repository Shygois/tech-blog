const { Comment } = require('../models');

const commentData = [
    {
        user_id: 1,
        post_id: 5,
        comment_text: "Amazing!"
    },
    {
        user_id: 1,
        post_id: 4,
        comment_text: "Awesome!"
    },
    {
        user_id: 3,
        post_id: 5,
        comment_text: "Love it!"
    },
    {
        user_id: 3,
        post_id: 2,
        comment_text: "Great!"
    },
    {
        user_id: 2,
        post_id: 1,
        comment_text: "Nice tool!"
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
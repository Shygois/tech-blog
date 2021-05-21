const { User } = require('../models');

const userData = [
    {
        username: "john_smith",
        email: "johnsmith@email.com",
        password: "password1"
    },
    {
        username: "jane_doe",
        email: "janedoe@email.com",
        password: "password2"
    },
    {
        username: "mickey_mouse",
        email: "mickeymouse@email.com",
        password: "password3"
    },
    {
        username: "minnie_mouse",
        email: "minniemouse@email.com",
        password: "password4"
    },
    {
        username: "bill_bob",
        email: "billbob@email.com",
        password: "password5"
    },
    {
        username: "test_account",
        email: "testaccount@email.com",
        password: "password6"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
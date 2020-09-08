const { User } = require('../models');

const userData = [
    {
        username: "sithysithbeans",
        twitter: "sithy",
        github: "sithy",
        email: "sithysithbeans@gmail.com",
        password: "sithy"
    },
    {
        username: "darthvader",
        twitter: "darth",
        github: "darth",
        email: "darthvader@gmail.com",
        password: "darth"
    },
    {
        username: "darthymaul",
        twitter: "maul",
        github: "maul",
        email: "darthymaul@gmail.com",
        password: "darthy"
    },
    {
        username: "emperorpalpatine",
        twitter: "emp",
        github: "emp",
        email: "emperorpalpatine@gmail.com",
        password: "emperor"
    },
    {
        username: "anitapeppercorn",
        twitter: "anitapeppercorn",
        github: "anitapeppercorn",
        email: "anita@peppercorn.ai",
        password: "anita"
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
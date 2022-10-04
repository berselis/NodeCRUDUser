const uuid = require('uuid');

const userDB = [];


const getAllUsers = () => {
    return userDB;
};

const getUserById = (id) => {
    return userDB.find(user => user.id == id);
};

const addUser = (user) => {
    user.id = uuid.v4();
    userDB.push(user);
    return user;
};

module.exports = {
    getAllUsers,
    getUserById,
    addUser
}
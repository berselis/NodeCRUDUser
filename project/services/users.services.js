const {
    getAllUsers,
    getUserById,
    addUser
} = require('../controllers/users.controllers');

const { validateModelUser } = require('../validators/user.validator');




const getUsers = (req, res) => {
    const data = getAllUsers();
    res.status(200).json(data);
};

const getUser = (req, res) => {
    const data = getUserById(req.params.id);
    if (data) {
        res.status(200).json(data);
    } else {
        res.status(404).json({ id: req.params.id, message: "Invalid Id" });
    }
};

const addNewUser = (req, res) => {
    if (validateModelUser(req.body)) {
        const data = addUser(req.body);
        res.status(201).json(data);
    } else {
        res.status(400).json({ message: "Invalid data" })
    }

}

module.exports = {
    getUser,
    getUsers,
    addNewUser
}
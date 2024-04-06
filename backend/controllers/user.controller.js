const User = require("../models/user.model.js");

const createUser = async (req, res) => {
    try {
        const {name, email, section} = req.body;
        const user = await User({
            name:name, 
            email:email, 
            section:section
        });
        await user.save();
        return res.status(201).json({
            message: "New User Created"
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({message: error.message});
    }
}

const getUser = async (req, res) => {
    try {
        const users = await User.find();
        return res.status(200).json(users);
    } catch (error) {
        console.log(error);
        return res.status(500).json({message: error.message});
    }
}

module.exports = {
    createUser,
    getUser
};
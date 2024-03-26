const User = require("../Models/Users")
const AdminPhone = require("../Models/AdminPhone")

const createUser = async (req, res) => {
    try {
        const userData = req.body;
        const newUser = new User(userData);
        const savedUser = await newUser.save();
        res.status(201).json(savedUser)
    }
    catch (err) {
        console.log(err)
    }
}

const getAllUser = async (req, res) => {
    try {
        const result = await User.find()
        res.status(201).json(result)
    }
    catch (err) {
        console.log(err)
    }
}

const getUserByEmail = async (req, res) => {
    try {
        const email = req.params.email;
        console.log("Email :", email)
        const result = await User.findOne({ email: email })
        res.json(result)
    }
    catch (err) {
        console.log(err)
    }
}

const upadateCred = async (req, res) => {
    try {
        const email = req.params.email;
        const credString = req.body;
        const cred = parseInt(credString.amount)
        console.log("deposit", credString)
        const oldCred = await User.findOne({ email: email })
        console.log(typeof (oldCred.credit))
        const upadateCred = await User.findOneAndUpdate({ email: email }, {
            $set: { credit: oldCred.credit + cred }
        }, { new: true })
        res.json(upadateCred)
    }
    catch (err) {
        console.log(err)
    }
}

const withdrawCred = async (req, res) => {
    try {
        const email = req.params.email;
        const credString = req.body;
        console.log("Witdraw", credString)
        const cred = parseInt(credString.amount);
        const oldCred = await User.findOne({ email: email })
        const updateCred = await User.findOneAndUpdate({ email: email }, {
            $set: { credit: oldCred.credit - cred }
        }, { new: true })
        res.json(updateCred)
    }
    catch (err) {
        console.log(err)
    }
}


const deleteUser = async (req, res) => {
    try {
        const id = req.params.id;
        const deleteUser = await User.findByIdAndDelete(id)
        res.json(deleteUser)
    }
    catch (err) {
        console.log(err)
    }
}

const updatePhone = async (req, res) => {
    try {
        const email = req.params.email;
        const phone = req.body;
        console.log(phone)
        const result = await User.findOneAndUpdate({ email: email }, {
            $set: { phone: phone }
        }, { new: true })
        res.json(result)
    }
    catch (err) {
        console.log(err)
    }
}

const getAdminPhone = async (req, res) => {
    try {
        const id = req.params.id
        const result = await AdminPhone.findById(id)
        res.json(result)
    }
    catch(err){
        console.log(err)
    }
}

const updateAdminPhone = async (req, res) => {
    try {
        const phone = req.body;
        console.log(phone)
        const result = await AdminPhone.updateMany({}, {
            $set: { phone: phone.phone }
        })
        res.json(result)
    }
    catch (err) {
        console.log(err)
    }
}


module.exports = {
    createUser, getAllUser, deleteUser, getUserByEmail, upadateCred, withdrawCred, updatePhone, getAdminPhone, updateAdminPhone
}
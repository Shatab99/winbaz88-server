const Refer = require("../Models/ReferSchema")
const Users = require("../Models/Users")

const postRefer = async (req, res) => {
    try {
        const users = await Users.find()
        const refers = await Refer.find()
        const lastEmail = refers[refers.length - 1].referEmail
        console.log(lastEmail)
        const referEmail = users[users.length - 1].email
        const referCode = users[users.length - 1]._id.toString().slice(0, 7)
        const refer = { referEmail, referCode }
        // console.log(refer)

        if (lastEmail === referEmail) {
            res.json("already inserted !")
            return;
        }
        else {
            const data = refer;
            const newData = new Refer(data)
            const savedData = await newData.save()
            res.json(savedData)
        }
    }
    catch (err) {
        console.log(err)
    }
}



const getAllRefer = async (req, res) => {
    try {
        const result = await Refer.find()
        res.json(result)
    }
    catch (err) {
        console.log(err)
    }
}

const getReferedUsers = async (req, res) => {
    try {
        const referId = req.params.referId;
        console.log(referId)
        const result = await Users.find({refered : referId })
        res.json(result)
    }
    catch (err) {
        console.log(err)
    }
}

module.exports = {
    postRefer, getAllRefer,getReferedUsers
}
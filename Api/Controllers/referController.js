const Refer = require("../Models/ReferSchema")
const Users = require("../Models/Users")

const postRefer = async (req, res) => {
    try {
        const users = await Users.find()
        const refers = await Refer.find()
        const lastEmail = refers[refers.length - 1].referEmail
        console.log(lastEmail)
        // const refer = users.map(user=>{
        //     const referCode = user._id.toString().slice(0,7)
        //     const referEmail = user.email
        //     return {referEmail, referCode}
        // })
        // const result = await Refer.insertMany(refer)
        // res.json(result)
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

const deleteAllRef = async (req, res) => {
    try {
        const result = await Refer.deleteMany()
        res.json(result)
    }
    catch (err) {
        console.log(err)
    }
}

const getAllRefer = async (req, res) => {
    const result = await Refer.find()
    res.json(result)
}

module.exports = {
    postRefer, getAllRefer, deleteAllRef
}
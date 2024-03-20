const Deposit = require("../Models/DepositSchema")

const getAllDeposit = async (req, res) => {
    try {
        const result = await Deposit.find({category: "Deposit"})
        res.json(result)
    }
    catch (err) {
        console.log(err)
    }
}
const getAllWithdraw = async (req, res) => {
    try {
        const result = await Deposit.find({category: "Withdraw"})
        res.json(result)
    }
    catch (err) {
        console.log(err)
    }
}

const getDepositUser = async (req, res) => {
    try {
        const email = req.params.email;
        const result = await Deposit.find({email : email})
        res.json(result)
    }
    catch (err) {
        console.log(err)
    }
}

const submitDeposit = async (req, res) => {
    try {
        const data = req.body;
        const newData = new Deposit(data);
        const savedData = await newData.save();
        res.status(201).json(savedData)
    }
    catch (err) {
        console.log(err)
    }
}

const deleteDeposit = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await Deposit.findByIdAndDelete(id)
        res.json(result)
    }
    catch (err) {
        console.log(err)
    }
}

module.exports = {
    submitDeposit, getAllDeposit, deleteDeposit, getDepositUser,getAllWithdraw
}
const History = require("../Models/HistorySchema")

const getHistoryUser = async (req, res) => {
    try {
        const email = req.params.email;
        const result = await History.find({ email: email })
        res.json(result)
    }
    catch (err) {
        console.log(err)
    }
}

const postHistory = async(req, res) => {
    try {
        const data = req.body;
        const newData = new History(data);
        const savedData = await newData.save();
        res.json(savedData)
    }
    catch (err) {
        console.log(err)
    }
}

const deleteHistory = async (req, res)=>{
    try{
        const id = req.params.id;
        const result = await History.findByIdAndDelete(id)
        res.json(result)
    }
    catch(err){
        console.log(err)
    }
}

module.exports = {
    getHistoryUser, postHistory, deleteHistory
}
const User = require("../Models/Users")

const createUser = async (req, res) => {
    try {
        const userData = req.body ;
        console.log("User Data", userData)
        const newUser = new User(userData);
        const savedUser = await newUser.save();
        res.status(201).json(savedUser)
    }
    catch (err) {
        console.log(err)
    }
}

const getAllUser = async(req, res)=>{
    try{
        const result = await User.find()
        res.status(201).json(result)
    }
    catch(err){
        console.log(err)
    }
}


module.exports={
    createUser, getAllUser
}
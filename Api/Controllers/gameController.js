const Game = require("../Models/GameShcema")
const Users = require("../Models/Users")

const updateUserByWheel = async (req, res) => {
    try {
        const gameData = req.body;
        const { randomResult, email, selectedNumbers, betAmount } = gameData
        const oldCred = await Users.findOne({ email: email })
        const len = selectedNumbers.length
        if (selectedNumbers.includes(randomResult)) {
            if (randomResult >= 3) {
                const newCred = ((10 * betAmount) - ((len - 1) * betAmount));
                const updateCred = await Users.findOneAndUpdate({ email: email }, {
                    $set: { credit: oldCred.credit + newCred }
                }, { new: true })
                res.json(updateCred)
            }
            else {
                const newCred = ((10 * betAmount) - ((len - 1) * betAmount));
                const updateCred = await Users.findOneAndUpdate({ email: email }, {
                    $set: { credit: oldCred.credit + newCred }
                }, { new: true })
                res.json(updateCred)
            }
        }
        else {
            const newCred = len * betAmount;
            const updateCred = await Users.findOneAndUpdate({ email: email }, {
                $set: { credit: oldCred.credit - newCred }
            }, { new: true })
            res.json(updateCred)
        }

    }
    catch (err) {
        console.log(err)
    }
}


const updateUserByAviator = async (req, res) => {
    try {
        const data = req.body;
        console.log(data)
        const { email, rbAmount, lbAmount, cashOutLb, cashOutRb } = data
        const user = await Users.findOne({email : email})
        const oldCred = user.credit;
        console.log(oldCred)
        if(cashOutLb === 0 && cashOutRb === 0){
            const newCred = rbAmount+ lbAmount
            const result = await Users.updateOne({email : email}, {
                $set : {credit : oldCred - newCred }
            })
            res.json(result)
        }
        else if (cashOutLb !== 0 && cashOutRb !== 0){
            const newCred = (rbAmount*cashOutRb) + (lbAmount * cashOutLb)
            const result = await Users.updateOne({email : email},{
                $set : {credit : oldCred + newCred}
            } )
            res.json(result)
        }
        else if (cashOutLb === 0 && cashOutRb !== 0){
            const newCred = (cashOutRb * rbAmount) - lbAmount;
            const result = await Users.updateOne({email : email}, {
                $set : {credit : oldCred + newCred}
            })
            res.json(result)
        }
        else if (cashOutLb !== 0 && cashOutRb === 0){
            const newCred = (cashOutLb * lbAmount) - rbAmount;
            const result = await Users.updateOne({email : email}, {
                $set : {credit : oldCred + newCred}
            })
            res.json(result)
        }
    }
    catch (err) {
        console.log(err)
    }
}

module.exports = {
    updateUserByWheel, updateUserByAviator
}

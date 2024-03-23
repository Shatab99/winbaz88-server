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

module.exports = {
    updateUserByWheel
}

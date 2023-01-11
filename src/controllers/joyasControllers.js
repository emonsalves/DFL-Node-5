const { getJoyas } = require('../models/joyasModels')

const getAllJoyas = async (req, res) => {
    try {
        const joyas = await getJoyas()
        res.json(joyas)    
    } catch (error) {
        res.status(500).json({message: error })
    }    
}

module.exports = {
    getAllJoyas
}
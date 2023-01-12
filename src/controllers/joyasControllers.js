const { getJoyas } = require('../models/joyasModels')
const { toHATEOAS } = require('../helpers/Hateoas')

const getAllJoyas = async (req, res) => {
    try {
        const queryStrings = req.query
        const joyas = await getJoyas(queryStrings)
        const HATEOAS = await toHATEOAS(joyas)
        res.json(HATEOAS)
    } catch (error) {
        res.status(500).json({ message: error })
    }
}

module.exports = { getAllJoyas }
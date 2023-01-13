const { getJoyas, getFiltroJoyas } = require('../models/joyasModels')
const { toHATEOAS } = require('../helpers/hateOAS')
const {validateNumber, validateText} = require('../helpers/validation')
const getAllJoyas = async (req, res) => {
    try {
        const queryStrings = req.query       
        const joyas = await getJoyas(queryStrings)
        const HATEOAS = await toHATEOAS(joyas)
        res.status(200).json(HATEOAS)
    } catch (error) {
        res.status(500).json({ message: error })
    }
}

const getFiltro = async (req, res) => {
    try {
        const queryStrings = req.query

        const filtro = await getFiltroJoyas(queryStrings)
        res.status(200).json(filtro)
    } catch (error) {
        res.status(500).json({ message: error })
    }
}

module.exports = { getAllJoyas, getFiltro }
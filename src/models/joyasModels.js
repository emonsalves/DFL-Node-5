const pool = require("../helpers/connectionDb").getInstance();

const getJoyas = async () => {

    SQLquery = { text: "SELECT * FROM inventario" }
    try {
        const result = await pool.query(SQLquery)
        return result.rows
    } catch (error) {
        throw new Error(error)
    }
}

module.exports = {
    getJoyas
}
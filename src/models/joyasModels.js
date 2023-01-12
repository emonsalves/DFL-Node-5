const pool = require("../helpers/connectionDb").getInstance();
const format = require('pg-format')

const getJoyas = async ({ limits = 3, order_by = "stock_ASC", page = 1 }) => {
    const [campo, direccion] = order_by.split("_")
    const offset = (page - 1) * limits
    const SQLquery = format('SELECT * FROM inventario order by %s %s LIMIT %s OFFSET %s', campo, direccion, limits, offset)

    try {
        const result = await pool.query(SQLquery)
        return result.rows
    } catch (error) {
        throw new Error(error)
    }
}

module.exports = { getJoyas }
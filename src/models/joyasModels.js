const pool = require("../helpers/connectionDb").getInstance();
const format = require('pg-format')

const getTotalJoyas = async () => {

    const SQLquery = format('SELECT * FROM inventario')

    try {
        const result = await pool.query(SQLquery)
        return result.rows.length
    } catch (e) {
        console.log(
            "Error al obtener datos funcion getTotalJoyas en Models ",
            "Code: ", e.code,
            "Message: ", e.message
        );
        throw new Error(e);
    }
}


const getJoyas = async ({ limits = 3, order_by = "stock_ASC", page = 1 }) => {

    const totalJoyas = await getTotalJoyas()
    const totalPages = Number(totalJoyas) / Number(limits)

    const [campo, direccion] = order_by.split("_")
    const offset = (page - 1) * limits
    const SQLquery = format('SELECT * FROM inventario order by %s %s LIMIT %s OFFSET %s', campo, direccion, limits, offset)
    

    try {
        const result = await pool.query(SQLquery)
        return [result.rows, {totalPages}, {limits}, {page}]
    } catch (e) {
        console.log(
            "Error al obtener datos funcion getJoyas en Models ",
            "Code: ", e.code,
            "Message: ", e.message
        );
        throw new Error(e);
    }
}

const getFiltroJoyas = async (queryStrings) => {
    let whereClause = ""
    if (queryStrings.precio_max) {
        whereClause += format("precio <= %L", queryStrings.precio_max)
    }
    if (queryStrings.precio_min) {
        if (whereClause) {
            whereClause += " AND ";
        }
        whereClause += format("precio >= %L", queryStrings.precio_min)
    }
    if (queryStrings.categoria) {
        if (whereClause) {
            whereClause += " AND "
        }
        whereClause += format("categoria = %L", queryStrings.categoria)
    }
    if (queryStrings.metal) {
        if (whereClause) {
            whereClause += " AND "
        }
        whereClause += format("metal = %L", queryStrings.metal)
    }

    const SQLquery = `SELECT * FROM inventario ${whereClause ? `WHERE ${whereClause}` : ""}`
    try {
        const result = await pool.query(SQLquery)
        return result.rows
    } catch (e) {
        console.log(
            "Error al obtener datos funcion getFiltroJoyas en Models ",
            "Code: ", e.code,
            "Message: ", e.message
        );
        throw new Error(e);
    }
}

module.exports = { getJoyas, getFiltroJoyas }
require('dotenv').config();

const toHATEOAS = async (joyas) => {
    const { totalPages } = joyas[1]
    const { limits } = joyas[2]
    const { page } = joyas[3]
    try {
        const results = joyas[0].map((joya) => ({
            name: joya.nombre,
            href: `/joyas/joya/${joya.id}`,
        }))

        const totalJoyas = joyas[0].length

        const next = (Number(page) < Number(totalPages))
            ? `${process.env.DOMAIN}:${process.env.PORT}/joyas?limits=${limits}&page=${Number(page) + 1}`
            : ""

        const prev = (Number(page) > 1 & Number(page) <= Number(totalPages))
            ? `${process.env.DOMAIN}:${process.env.PORT}/joyas?limits=${limits}&page=${Number(page - 1)}`
            : ""
        const stockTotal = joyas[0].reduce((acumulador, valorActual) => acumulador + valorActual.stock, 0
        )
        const HATEOAS = {
            totalJoyas,
            stockTotal,
            prev,
            next,
            results
        }
        return HATEOAS
    } catch (e) {
        console.log(
            "Error al realizar HATEOAS",
            "Code: ", e.code,
            "Message: ", e.message
        );
        throw new Error(e);
    }
}

module.exports = { toHATEOAS }
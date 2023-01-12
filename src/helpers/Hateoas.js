const toHATEOAS = async (joyas) => {
    try {
        const results = joyas.map((joya) => {
            return {
                name: joya.nombre,
                href: `/joyas/joya/${joya.id}`,
            }
        }).slice(0)

        const totalJoyas = joyas.length

        const stockTotal = joyas.reduce(
            (acumulador, valorActual) => acumulador + valorActual.stock, 0
        )
        const HATEOAS = {
            totalJoyas,
            stockTotal,
            results
        }
        return HATEOAS
    } catch (error) {
        throw new Error(error)
    }
}

module.exports = { toHATEOAS }
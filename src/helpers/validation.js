const validateText = (element) => typeof element === "string"

const validateNumber = (element) => typeof element === "number" && element >= 0 && Number.isFinite(element)

module.exports = { validateText, validateNumber}
const getServicos = require('./getServicos')

const test = async (req, res) => {
    const lista = await getServicos()
    console.log(lista)
}
test()
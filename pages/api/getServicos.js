const { GoogleSpreadsheet } = require('google-spreadsheet');
const credenciais = require('../../credenciais.json')

const doc = new GoogleSpreadsheet('1A0KYVuOTjf8iGe9talDyEagONSDCH4RKjcy6JQ94eXI')

export default async (req, res) => {
    await doc.useServiceAccountAuth(credenciais)
    await doc.loadInfo()

    const reqs = (req.body)

    const planilha = doc.sheetsByTitle[reqs]
    const linhas = await planilha.getRows()

    const dados = linhas.map((linha) => {
        const serv = {
            Nome: linha.Nome,
            Servicos: linha.Servicos,
            Whatsapp: linha.Whatsapp,
            Facebook: linha.Facebook,
            Instagram: linha.Instagram,
            horarioFuncionamento: linha.horarioFuncionamento,
            status: linha.Status
        }
        return serv
    })
    const Ativos = dados.filter((servico) => servico.status === "Ativo")

    res.end(JSON.stringify(
        Ativos
    ))
}

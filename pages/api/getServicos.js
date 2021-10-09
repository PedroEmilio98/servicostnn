const { GoogleSpreadsheet } = require('google-spreadsheet');
import { fromBase64 } from '../../utils/base64';


const doc = new GoogleSpreadsheet(process.env.SHEET_ID)

export default async (req, res) => {
    await doc.useServiceAccountAuth({
        client_email: process.env.SHEET_CLIENT_EMAIL,
        private_key: fromBase64(process.env.SHEET_PRIVATE_KEY)
    })
    await doc.loadInfo()

    const reqs = (req.body)
    console.log(req.query.categoria)
    const categoria = req.query.categoria

    try {
        const planilha = doc.sheetsByTitle[categoria]
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
    } catch (err) {
        console.log(err)
        res.end(JSON.stringify({}))
    }
}

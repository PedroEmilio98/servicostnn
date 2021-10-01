const { GoogleSpreadsheet } = require('google-spreadsheet');
import { fromBase64 } from '../../utils/base64';

const doc = new GoogleSpreadsheet(process.env.SHEET_ID)

export default async (req, res) => {
    try {
        await doc.useServiceAccountAuth({
            client_email: process.env.SHEET_CLIENT_EMAIL,
            private_key: fromBase64(process.env.SHEET_PRIVATE_KEY)
        })
        await doc.loadInfo()

        const data = JSON.parse(req.body)
        const categoria = data.Categoria

        const sheet = doc.sheetsByTitle['contato']

        await sheet.addRow({
            Status: "Aberto",
            Nome: data.Nome,
            Whatsapp: data.Whatsapp,
            Email: data.Email,
            Mensagem: data.Mensagem
        })
        res.end(JSON.stringify({

        }))
    }
    catch (err) {
        console.log(err)
    }
}
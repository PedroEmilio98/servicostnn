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

    const sheet = doc.sheetsByTitle[categoria]


    await sheet.addRow({
      Status: "Inativo",
      Nome: data.Nome,
      Servicos: data.Servicos,
      Whatsapp: data.Whatsapp,
      Facebook: data.Facebook,
      Instagram: data.Instagram,
      horarioFuncionamento: data.horarioFuncionamento
    })
    res.end(JSON.stringify({

    }))
  }
  catch (err) {
    console.log(err)
  }
}


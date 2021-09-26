const { GoogleSpreadsheet } = require('google-spreadsheet');
const credenciais = require('../../credenciais.json')

const doc = new GoogleSpreadsheet('1A0KYVuOTjf8iGe9talDyEagONSDCH4RKjcy6JQ94eXI')

export default async (req, res) => {
  try {
    await doc.useServiceAccountAuth(credenciais)
    await doc.loadInfo()

    const data = JSON.parse(req.body)
    const categoria = data.Categoria

    const sheet = doc.sheetsByTitle[categoria]
    console.log(data)

    await sheet.addRow({
      Status: "Inativo",
      Nome: data.Nome,
      Servicos: data.Servicos,
      Whatsapp: data.Whatsapp,
      Facebook: data.Facebook,
      Instagram: data.Instagram,
      horarioFuncionamento: data.horarioFuncionamento
    })
    console.log(data)
    res.end(JSON.stringify({

    }))
  }
  catch (err) {
    console.log(err)
  }
}


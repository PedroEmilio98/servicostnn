import style from '../styles/style.module.css'
import Link from 'next/dist/client/link';

const categoria = "Manutenção"
export const getStaticProps = async (catogira) => {
  const res = await fetch('http://localhost:3000/api/getServicos', {
    method: 'POST',
    body: (categoria)
  })
  const data = await res.json()
  return {
    props: { servicos: data }
  }
}
const zap = (numero) => `https://api.whatsapp.com/send?phone=${numero}&text=SuaMensagem`
const index = ({ servicos }) => {



  return (

    <div className={style.background}>
      <h1 className={style.categoria}>{categoria}</h1>
      {servicos[0] &&
        servicos.map(servico => (
          <div key={servico.Nome} className={style.servico}>
            <div className={style.infos}>
              <div className={style.nome}>{servico.Nome}</div>
              {servico.horarioFuncionamento &&
                <div className={style.horario}>Horário de funcionamento: {servico.horarioFuncionamento}
                </div>}
              <div>{servico.Whatsapp}</div>
              <div className={style.servicos}>{servico.Servicos}</div>
            </div>
            <div className={style.contatos}>
              {servico.Whatsapp &&
                <Link href={zap(servico.Whatsapp)}>
                  <a target='_blank'>
                    <div className={style.botaocontatowhatss}>
                      Contato por Whatsapp
                      <div className={style.logo}>
                        <img src='./logo_Wpp1.png' className={style.imglogo} />
                      </div>
                    </div>
                  </a>
                </Link >}
              {servico.Facebook &&
                <Link href={servico.Facebook}>
                  <a target='_blank'>
                    <div className={style.botaocontato}>
                      Página no Facebook
                      <div className={style.logo}>
                        <img src='./logo_Fb.png' className={style.imglogo} />
                      </div>
                    </div>
                  </a>
                </Link >}
              {servico.Instagram &&
                <Link href={servico.Instagram}>
                  <a target='_blank'>
                    <div className={style.botaocontato}>
                      Página no Instagram
                      <div className={style.logo}>
                        <img src='./logo_Ig.png' className={style.imglogo} />
                      </div>
                    </div>
                  </a>
                </Link >}
            </div>
          </div>
        ))
      }

      {!servicos[0] &&
        <div className={style.painelSemCadastro}>
          <p>Nenhum serviço cadastrado nesta categoria ainda. </p>
          <p>Clique em cadastro para inserir um novo serviço!</p>
        </div>
      }
    </div >
  )
}
export default index
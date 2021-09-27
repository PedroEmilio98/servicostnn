import style from '../styles/style.module.css'
import Link from 'next/dist/client/link';

const categoria = "Fretes"
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
            <h1 className={style.categoria}>Fretes</h1>
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
                                <Link className='inline mx-auto hover' href={zap(servico.Whatsapp)}>
                                    <a className='' target='_blank'>
                                        <div className={style.whatsapp}>
                                            Contato por Whatsapp
                                            <div className='p-2 inline'>
                                                <img src='./logo_Wpp1.png' className='w-8 inline right-2' />
                                            </div>
                                        </div>
                                    </a>
                                </Link >}
                            {servico.Facebook &&
                                <Link className='inline mx-auto hover' href={servico.Facebook}>
                                    <a className='w-full' target='_blank'>
                                        <div className={style.facebook}>
                                            Página no Facebook
                                            <div className='p-2 inline'>
                                                <img src='./logo_Fb.png' className='w-8 inline right-2' />
                                            </div>
                                        </div>
                                    </a>
                                </Link >}
                            {servico.Instagram &&
                                <Link className='inline mx-auto hover' href={servico.Instagram}>
                                    <a className='w-full' target='_blank'>
                                        <div className={style.facebook}>
                                            Página no Instagram
                                            <div className='p-2 inline'>
                                                <img src='./logo_Fb.png' className='w-8 inline right-2' />
                                            </div>
                                        </div>
                                    </a>
                                </Link >}
                        </div>
                    </div>
                ))
            }

            {!servicos[0] &&
                <div>
                    Nenhum serviço cadastrado nesta categoria ainda. Clique em cadastrar para cadastrar um novo serviço!
                </div>
            }
        </div >
    )
}
export default index
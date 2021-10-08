import style from '../../styles/style.module.css'
import Link from 'next/link';

const listagem = (props, categoria) => {
    const zap = (numero, nome) => `https://api.whatsapp.com/send?phone=${numero}&text=olá ${nome}`
    return (
        props.map(servico => (
            <div key={servico.Nome} className={style.servico}>
                <div className={style.infos}>
                    <div className={style.nome}>{servico.Nome}</div>
                    {servico.horarioFuncionamento &&
                        <div className={style.horario}>Horário de funcionamento: {servico.horarioFuncionamento}
                        </div>}
                    <div>Telefone: {servico.Whatsapp}</div>
                    <div className={style.servicos}>{servico.Servicos}</div>
                </div>
                <div className={style.contatos}>
                    {servico.Whatsapp &&
                        <Link href={zap(servico.Whatsapp, servico.Nome)}>
                            <a target='_blank' rel="noreferrer">
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
                            <a target='_blank' rel="noreferrer">
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
                            <a target='_blank' rel="noreferrer">
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



    )
}

export default listagem
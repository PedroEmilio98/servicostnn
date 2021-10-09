import style from './style.module.css'
import categorias from '../../utils/categorias'
import Link from 'next/link';


export default function header() {
    return (
        <div>
            <div>
                <div className={style.painelPrincial}>
                    <Link href='/' >
                        <a>
                            <img src='/logo.png' className='mx-auto w-48' />
                        </a>
                    </Link>
                </div>
                <div className={style.painelInferior}>
                    <span>
                        <Link href='/' >
                            <a className={style.linksuperior}>Inicio</a>
                        </Link>
                    </span>
                    <span>
                        <Link href='/sobre'>
                            <a className={style.linksuperior}>Sobre</a>
                        </Link>
                    </span>
                    <span>
                        <Link href='/contato' >
                            <a className={style.linksuperior}>Contato</a>
                        </Link>
                    </span>
                    <span>
                        <Link href='/cadastro' >
                            <a className={style.linksuperior}>Cadastro</a>
                        </Link>
                    </span>
                </div>
                <div className={style.painelInferiorFixo}>
                    {categorias.map(categoria => (
                        < span key={categoria}>
                            <Link href={categoria}>
                                <a className={style.links}>{categoria}</a>
                            </Link>
                        </span>
                    ))}
                </div>
            </div>
        </div >
    )
}
import style from './style.module.css'
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
                    <span>
                        <Link href='/' >
                            <a className={style.links}>Manutenção</a>
                        </Link>
                    </span>
                    <span>
                        <Link href='/ti'>
                            <a className={style.links}>T.I.</a>
                        </Link>
                    </span>
                    <span>
                        <Link href='/educacao' >
                            <a className={style.links}>Educação</a>
                        </Link>
                    </span>
                    <span>
                        <Link href='/gastronomia' >
                            <a className={style.links}>Gastronomia</a>
                        </Link>
                    </span>
                    <span>
                        <Link href='/saude' >
                            <a className={style.links}>Saúde</a>
                        </Link>
                    </span>
                    <span>
                        <Link href='/cuidados'>
                            <a className={style.links}>Cuidados Pessoais</a>
                        </Link>
                    </span>
                    <span>
                        <Link href='/outros'>
                            <a className={style.links}>Outros</a>
                        </Link>
                    </span>
                </div>
            </div>
        </div >
    )
}
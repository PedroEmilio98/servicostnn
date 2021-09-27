import style from './style.module.css'
import Link from 'next/link';

export default function header() {
    return (
        <div>
            <div>
                <div className={style.painelPrincial}>
                    <img src='/logo.png' className='mx-auto w-48' />
                </div>
                <div className={style.painelInferior}>
                    <span className='px-8'>
                        <Link href='/' >
                            <a className={style.links}>Inicio</a>
                        </Link>
                    </span>
                    <span className='px-8'>
                        <Link href='/'>
                            <a className={style.links}>Sobre</a>
                        </Link>
                    </span>
                    <span className='px-8'>
                        <Link href='/' >
                            <a className={style.links}>Sugestões</a>
                        </Link>
                    </span>
                    <span className='px-8'>
                        <Link href='/' >
                            <a className={style.links}>Cadastro</a>
                        </Link>
                    </span>
                </div>
                <div className={style.painelInferiorFixo}>
                    <span className='px-8'>
                        <Link href='/' >
                            <a className={style.links}>Manutenção</a>
                        </Link>
                    </span>
                    <span className='px-8'>
                        <Link href='/ti'>
                            <a className={style.links}>T.I.</a>
                        </Link>
                    </span>
                    <span className='px-8'>
                        <Link href='/educacao' >
                            <a className={style.links}>Educação</a>
                        </Link>
                    </span>
                    <span className='px-8'>
                        <Link href='/gastronomia' >
                            <a className={style.links}>Gastronomia</a>
                        </Link>
                    </span>
                    <span className='px-8'>
                        <Link href='/fretes' >
                            <a className={style.links}>Fretes</a>
                        </Link>
                    </span>
                    <span className='px-8'>
                        <Link href='/cuidados'>
                            <a className={style.links}>Cuidados Pessoais</a>
                        </Link>
                    </span>
                </div>
            </div>
        </div >
    )
}
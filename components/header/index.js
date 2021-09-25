import style from './style.module.css'
import Link from 'next/link';

export default function header() {
    return (
        <div>
            <div className={style.painelPrincial}>
                <img src='/logo.png' className='mx-auto' />
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
        </div >
    )
}
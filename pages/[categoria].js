import style from '../styles/style.module.css'
import listagem from '../components/listagem';
import ListagemVazia from '../components/listagem/listagemvazia';
import categorias from '../utils/categorias'


export const getStaticPaths = async () => {
    const paths = categorias.map(categoria => (
        { params: { categoria: categoria } }
    ))
    console.log(paths)
    return {
        paths,
        fallback: false
    }
}
export const getStaticProps = async ({ params }) => {
    const url = `https://servicostnn.vercel.app/api/getServicos?categoria=${params.categoria}`
    const res = await fetch(url, {
        method: 'POST'
    })
    const data = await res.json()
    return {
        props: {
            servicos: data,
            categoria: params.categoria
        },
        revalidate: 10,
    }
}
const index = ({ servicos }) => {
    return (
        <div>
            <div className={style.background}>
                <h1 className={style.categoria}>{servicos.categoria}</h1>
                {servicos[0] &&
                    listagem(servicos, servicos.categoria)
                }
                {!servicos[0] &&
                    <ListagemVazia />
                }
            </div >
        </div>
    )
}
export default index
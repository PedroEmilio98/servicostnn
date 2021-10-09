import style from '../styles/style.module.css'
import listagem from '../components/listagem';
import ListagemVazia from '../components/listagem/listagemvazia';
import categorias from '../utils/categorias'


export const getStaticPaths = async () => {
    const paths = categorias.map(categoria => (
        { params: { categoria: categoria } }
    ))
    return {
        paths,
        fallback: false
    }
}
export const getStaticProps = async ({ params }) => {
    const url = `https://servicostnn.vercel.app/api/getServicos`
    const res = await fetch(url, {
        body: params.categoria,
        method: 'POST',

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
const index = (props) => {
    return (
        <div>
            <div className={style.background}>
                <h1 className={style.categoria}>{props.categoria}</h1>
                {props.servicos[0] &&
                    listagem(props.servicos)
                }
                {!props.servicos[0] &&
                    <ListagemVazia />
                }
            </div >
        </div>
    )
}
export default index
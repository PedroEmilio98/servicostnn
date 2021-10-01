import style from '../styles/style.module.css'
import listagem from '../components/listagem';
import ListagemVazia from '../components/listagem/listagemvazia';

const categoria = "Educação"
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

const index = ({ servicos }) => {
    return (
        <div>
            <div className={style.background}>
                <h1 className={style.categoria}>{categoria}</h1>
                {servicos[0] &&
                    listagem(servicos, categoria)
                }
                {!servicos[0] &&
                    <ListagemVazia />
                }
            </div >
        </div>
    )
}
export default index
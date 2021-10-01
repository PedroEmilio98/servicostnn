import style from '../../styles/style.module.css'

const listagemVazia = () => {
    return (
        <div className={style.painelSemCadastro}>
            <p>Nenhum serviço cadastrado nesta categoria ainda. </p>
            <p>Clique em cadastro para inserir um novo serviço!</p>
        </div>
    )
}
export default listagemVazia
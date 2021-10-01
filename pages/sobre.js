import style from '../styles/sobre.module.css'

const sobre = () => {
    return (
        <div>
            <div className={style.painel}>
                <h1 className={style.h1}>Bem Vindos!</h1>
                <p className={style.paragrafo}> Me chamo Pedro Emilio e sou estudante de Engenharia da Computação na UFRGS.
                    Atualmente, estou focado no desenvolvimento de software para Web, como páginas interativas e aplicações como esta.
                    Criei este site como projeto para consolidar os conhecimentos em algumas tecnologias e para ajudar a conectar moradores e prestadores de serviço no nosso condomínio.
                    Espero que gostem!
                </p>
                <h2 className={style.h2}>Sobre o site</h2>
                <p className={style.paragrafo}>O Serviços TNN tem como objetivo conectar os prestadores de serviço, sejam eles moradores ou não, com os condôminos.
                    Atualmente nosso condomínio possui diversos grupos dispersos no Facebook e Whatsapp por onde frequentemente pediomos indicações de profissionais.
                    Muitas vezes não conseguimos encontrar o serviço que atenderia nossas expectativas e muitos contatos acabam se perdendo.
                    Por isso o Serviços TNN concentra todas as informações de profissionais e meios de contato em um só lugar.</p>
                <p className={style.paragrafo}> Esta é uma versão inicial da aplicação. Por isso, peço para que deixem suas sugestões de melhorias através da aba "sugestões", no menu amarelo.
                    Para navegar pelas categorias, basta clicar nas opções no painel superior. Nesta primeira versão, é normal que os primeiros acessos sejam um pouco lentos no carregamento.
                </p>
                <h2 className={style.h2}>Como cadastrar um serviço</h2>
                <p className={style.paragrafo}>Para se cadastrar como um prestador de serviço, clique na aba "Cadastro" no menu superior e preencha as informações.
                    O nome, a categoria e o Whatsapp são obrigatórios e as outras informações são opcionais, mas lembre-se que quanto mais completo for seu card mais facil será para seus clientes te encontrarem!
                    Este é um exemplo de um card preenchido completamente:
                    <picture >
                        <source media='(max-width: 900px)' srcSet='exemploCompletoCelular.JPG' />
                        <source media='(min-width: 900px)' srcSet='exemploCompleto.JPG' />
                        <img className={style.imagem} src='exemploCompleto.JPG' />
                    </picture>
                </p>
                <h3 className={style.h3}>Sobre as categorias</h3>
                <p className={style.categoria}><h4 className={style.h4}>Manutenção: </h4>
                    Serviços de manutenção residencial. Hidráulica, elétrica, pedreiros, pintores, reformas, instalação de papel de parede e assemelhados.
                </p>
                <p className={style.categoria}><h4 className={style.h4}>Gastronomia: </h4>
                    Produtos alimentícios. Doces, salgados, cozinha à domicílio, marmitas e assemelhados. Recomenda-se deixar claro na descrição dos serviços se possui pronta entraga.
                </p>
                <p className={style.categoria}><h4 className={style.h4}>T.I.: </h4>
                    Serviços de assistência técnica, manutenção de notebooks, computadores, celulares e tablets. Infraestrutura de T.I., desenvolvimento de software e de hardware. Manutenção e instalaçao
                    de impressoras e outros dispositivos periféricos.
                </p>
                <p className={style.categoria}><h4 className={style.h4}>Educação: </h4>
                    Aulas particulares, aulas de reforço, cursos, consultorias e apoio pedagógico. Recomenda-se deixar claro na descrição dos serviços se atende à distância.
                </p>
                <p className={style.categoria}><h4 className={style.h4}>Cuidados Pessoais: </h4>
                    Serviços relacionados a saúde e auto-cuidado. Cuidadores de idosos, babás, profissionais de estética, personal trainers e relacionados.
                </p>
                <p className={style.categoria}><h4 className={style.h4}>Fretes: </h4>
                    Serviços de deslocamento de móveis, encomendas e outros objetos dentro e fora do condomínio.
                </p>
                <h3 className={style.h3}>Serviços em mais de uma categoria</h3>
                <p className={style.paragrafo}>Infelizmente não é possível selecionar mais de uma categoria para seu serviço. Porém, se ele se enquadra em duas categorias ou você presta serviços diferentes,
                    pode fazer mais de um cadastro, cada um na categoria adequada. Lembre-se que cadastros em categorias que não condizem com o serviço prestado não serão aceitos.
                </p>
                <h2 className={style.h2}>Como alterar ou remover o cadastro</h2>
                <p className={style.paragrafo}>Infelizmente ainda não é possível para os prestadores alterarem ou excluírem seus prórpios cards. Porém, caso seja necessário uma alteração ou você não queria mais
                    que seu nome conste na lista de profissionais, basta entrar em contato através da aba "sugestões" e isso será resolvido assim que possível.
                </p>

            </div>
        </div >
    )
}

export default sobre
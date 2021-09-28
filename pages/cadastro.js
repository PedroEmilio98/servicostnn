import { useState } from 'react';




const Cadastro = () => {

    const categorias = ['Manutenção', 'Gastronomia', 'Educação', 'Cuidados Pessoais', 'T.I.', 'Fretes']
    const [form, setForm] = useState({
        Nome: '',
        Categoria: 'Manutenção',
        Servicos: '',
        Whatsapp: '',
        Facebook: '',
        Instagram: '',
        horarioFuncionamento: ''

    })
    const [sucess, SetSucces] = useState(false);

    const cadastrar = async () => {
        try {
            const response = await fetch('/api/cadastro', {
                method: 'POST',
                body: JSON.stringify(form)
            })
            const data = await response.json();
            SetSucces(true);
        } catch (err) {
            console.log(err)
        }
    }
    const onChange = evt => {
        const value = evt.target.value;
        const key = evt.target.name;
        setForm(old => ({
            ...old,
            [key]: value,
        }))
    }
    return (
        <div className='mx-auto text-center p-4 md:w-3/5 lg:w-2/5'>
            <h1 className='font-bold p-6'>Cadastro</h1>
            {!sucess && <div className='w-2/5 lg:w-1/2 md:w-1/2 ml-12 lg:ml-24'>
                <div className='mx-auto text-left lg:w-80'>
                    <label className='font-bold '>Nome*:</label>
                    <input type='text' className=' bg-yellow-100 block shadow-lg rouded py-4 px-2 lg:px-20 md:px-12' placeholder='Nome' name='Nome' onChange={onChange} value={form.Nome} />
                    <label className='font-bold '>Categoria*:</label>
                    <select className=' block rouded border-2 border-yellow-100 py-4 shadow-lg px-2 lg:w-80 md:w-64' name='Categoria' onChange={onChange} value={form.Categoria}>
                        {categorias.map(categoria => {
                            return (
                                <option value={categoria}>{categoria}</option>
                            )
                        })}
                    </select>
                    <label className='font-bold'>Serviços:</label>
                    <input type='text' className='bg-yellow-100 block shadow-lg rouded py-4  px-2 lg:px-20 md:px-12' placeholder='seuemail@email.com' name='Servicos' onChange={onChange} value={form.Servicos} />
                    <label className='font-bold'>Whatsapp*:</label>
                    <input type='text' className='bg-yellow-100 block shadow-lg rouded py-4  px-2 lg:px-20 md:px-12' placeholder='DDDXXXXXXXXX' name='Whatsapp' onChange={onChange} value={form.Whatsapp} />
                    <label className='font-bold'>Facebook profissional:</label>
                    <input type='text' className='bg-yellow-100 block shadow-lg rouded py-4  px-2 lg:px-20 md:px-12' placeholder='facebook.com.br/seunegocio' name='Facebook' onChange={onChange} value={form.Facebook} />
                    <label className='font-bold'>Instagram:</label>
                    <input type='text' className='bg-yellow-100 block shadow-lg rouded py-4   px-2 lg:px-20 md:px-12' placeholder='@seunegocio' name='Instagram' onChange={onChange} value={form.Instagram} />
                    <label className='font-bold'>Horário de funcionamento:</label>
                    <input type='text' className='bg-yellow-100 block shadow-lg rouded py-4   px-2 lg:px-20 md:px-12' placeholder='@seunegocio' name='horarioFuncionamento' onChange={onChange} value={form.horarioFuncionamento} />
                    <span className='w-full text-xs inline'>Campos com * são de preenchimento obrigatório</span>

                    <button className=" bg-yellow-700 mt-4 ml-4 lg:ml-24 py-4 px-12 font-bold rounded-md shadow-lg" onClick={cadastrar}>Salvar</button>
                </div>
            </div>}
            {
                sucess &&
                <div className='m-auto w-full text-center text-sm  py-8 lg:px-2 mt-4 lg:text-base  border-2 border-yellow-900'>
                    <p className='pb-4'>Cadastro realizado com sucesso!</p>
                    <p>Atenção:</p>
                    <p className='pb-4'>Todos os cadastros passam por uma avaliação antes de irem ao ar.</p>
                    <p>Caso seu cadastro não esteja no ar em até 72 horas, favor entrar em contato através da página "Sugestões".</p>
                </div>
            }
        </div >)
}



export default Cadastro;
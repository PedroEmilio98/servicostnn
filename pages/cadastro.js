import { useState, useEffect } from 'react';
import style from '../styles/style.module.css'
import categorias from '../utils/categorias'




const Cadastro = () => {

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
    const [nomeValidate, SetnomeValidate] = useState(true);
    const [zapValidate, SetzapValidate] = useState(true);

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

    const ArrumadorZap = (numero) => {
        let correto = numero.replace(/-/g, '').replace(/ /g, '').replace(/\//g, '').replace(/\)/g, '').replace(/\(/g, '')
        if (!numero.startsWith('55') && !numero.startsWith('+55')) {
            correto = '+55' + correto
        }
        return correto
    }
    useEffect(() => {
        if (form.Nome === '') {
            SetnomeValidate(false)
        } else {
            SetnomeValidate(true)
        }
        if (form.Whatsapp === '') {
            SetzapValidate(false)
        } else {
            SetzapValidate(true)
        }
        form.Whatsapp = ArrumadorZap(form.Whatsapp)
        console.log(form.Whatsapp)
        if (form.Whatsapp.length != 14) {
            SetzapValidate(false)
        }
        if (form.Whatsapp.match(/[A-Z]/gi)) {
            SetzapValidate(false)
        }

    }, [form.Nome, form.Whatsapp])

    const validar = () => {
        if (nomeValidate && zapValidate) {
            cadastrar()
        } else {
            alert("atente para os campos obrigatórios!")
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
        <div className={style.divCadastro}>
            <div className={style.formCadastro}>
                <h1 className='font-bold p-6'>Cadastro</h1>
                {!sucess && <div className='w-4/5 mx-auto text-left'>

                    <label className='font-bold '>Nome*:</label>
                    <input type='text' className='w-full bg-yellow-100 block shadow-lg rouded py-4 px-6 lg:px-10 md:px-12' placeholder='Nome' name='Nome' onChange={onChange} value={form.Nome} required />
                    {!nomeValidate && <span className='w-full text-xs block text-red-900'>Nome é obrigatorio</span>}
                    <label className='font-bold '>Categoria*:</label>
                    <select className='w-full block rouded border-2 border-yellow-100 py-4 shadow-lg px-6 lg:w-80 md:w-64' name='Categoria' onChange={onChange} value={form.Categoria}>
                        {categorias.map(categoria => {
                            return (
                                <option key={categoria} value={categoria}>{categoria}</option>
                            )
                        })}
                    </select>
                    <p className='w-full text-xs py-1'>para informações sobre categorias, consulte a aba "sobre"</p>
                    <label className='font-bold'>Serviços:</label>
                    <textarea className='w-full bg-yellow-100 block shadow-lg rouded py-4  px-2 lg:px-10 md:px-6' placeholder='Digite aqui um breve resumo dos serviços que você presta.' name='Servicos' onChange={onChange} value={form.Servicos} />
                    <label className='font-bold'>Whatsapp*:</label>
                    <input type='text' className='w-full bg-yellow-100 block shadow-lg rouded py-4  px-2 lg:px-10 md:px-6' placeholder='DDDXXXXXXXXX' name='Whatsapp' onChange={onChange} value={form.Whatsapp} required />
                    {!zapValidate && <span className='w-full text-xs block text-red-900'>O telefone deve conter 11 números (DDD + telefone)</span>}
                    <label className='font-bold'>Link para o Facebook:</label>
                    <input type='text' className='w-full bg-yellow-100 block shadow-lg rouded py-4  px-2 lg:px-10 md:px-6' placeholder='https://facebook.com.br/suapagina' name='Facebook' onChange={onChange} value={form.Facebook} />
                    <label className='font-bold'>Link para o Instagram:</label>
                    <input type='text' className='w-full bg-yellow-100 block shadow-lg rouded py-4   px-2 lg:px-10 md:px-6' placeholder='https://www.instagram.com/suapagina' name='Instagram' onChange={onChange} value={form.Instagram} />
                    <label className='font-bold'>Horário de funcionamento:</label>
                    <input type='text' className='w-full bg-yellow-100 block shadow-lg rouded py-4   px-2 lg:px-10 md:px-6' placeholder='09:00 - 18:00' name='horarioFuncionamento' onChange={onChange} value={form.horarioFuncionamento} />
                    <span className='w-full text-xs inline'>Campos com * são de preenchimento obrigatório</span>
                    <button className={style.botaoSalvarCadastro} onClick={validar}>Salvar</button>

                </div>}
                {
                    sucess &&
                    <div className='m-auto w-full text-center text-sm  py-2 lg:px-8 lg:mt-4 mb-12 lg:text-base   border-2 border-yellow-900'>
                        <p className='pb-4'>Cadastro realizado com sucesso!</p>
                        <p>Atenção:</p>
                        <p className='pb-4'>Todos os cadastros passam por uma avaliação antes de irem ao ar.</p>
                        <p>Caso seu cadastro não esteja no ar em até 72 horas, favor entrar em contato através da página "Sugestões".</p>
                    </div>
                }
            </div >
        </div>
    )
}



export default Cadastro;
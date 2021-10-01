import { useState, useEffect } from 'react';
import style from '../styles/style.module.css'
import Link from 'next/dist/client/link';

const zap = (numero) => `https://api.whatsapp.com/send?phone=${numero}&text=SuaMensagem`

const Contato = () => {

    const categorias = ['Manutenção', 'Gastronomia', 'Educação', 'Cuidados Pessoais', 'T.I.', 'Fretes']
    const [form, setForm] = useState({
        Nome: '',
        Whatsapp: '',
        Email: '',
        Mensagem: ''
    })
    const [sucess, SetSucces] = useState(false);

    const enviar = async () => {
        try {
            const response = await fetch('/api/contato-api', {
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

    const [nomeValidate, SetnomeValidate] = useState(true);
    const [zapValidate, SetzapValidate] = useState(true);
    const [mensagemValidate, SetmensagemValidate] = useState(true);

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
        if (form.Whatsapp.length != 14) {
            SetzapValidate(false)
        }
        if (form.Whatsapp.match(/[A-Z]/gi)) {
            SetzapValidate(false)
        }
        if (form.Mensagem.length < 10) {
            SetmensagemValidate(false)
        } else {
            SetmensagemValidate(true)
        }

    }, [form.Nome, form.Whatsapp, form.Mensagem])

    const validar = () => {
        if (nomeValidate && zapValidate && mensagemValidate) {
            enviar()
        } else {
            alert("atente para os campos obrigatórios!")
        }
    }

    return (

        <div className={style.divCadastro}>
            <div className={style.formCadastro}>
                <h1 className='font-bold p-6'>Contato</h1>
                {!sucess &&
                    <div className='w-4/5 mx-auto text-left'>
                        <label className='font-bold '>Nome*:</label>
                        <input type='text' className='w-full bg-yellow-100 block shadow-lg rouded py-4 px-6 lg:px-10 md:px-12' placeholder='Seu nome' name='Nome' onChange={onChange} value={form.Nome} required />
                        {!nomeValidate && <span className='w-full text-xs block text-red-900'>Nome é obrigatorio</span>}
                        <label className='font-bold'>Whatsapp*:</label>
                        <input type='text' className='w-full bg-yellow-100 block shadow-lg rouded py-4  px-2 lg:px-10 md:px-6' placeholder='DDDXXXXXXXXX' name='Whatsapp' onChange={onChange} value={form.Whatsapp} required />
                        {!zapValidate && <span className='w-full text-xs block text-red-900'>O telefone deve conter 11 números (DDD + telefone)</span>}
                        <label className='font-bold'>Email:</label>
                        <input type='text' className='w-full bg-yellow-100 block shadow-lg rouded py-4   px-2 lg:px-10 md:px-6' placeholder='seuemail@email.com' name='Email' onChange={onChange} value={form.Email} />
                        <label className='font-bold'>Mensagem:</label>
                        <textarea className='w-full bg-yellow-100 block shadow-lg rouded py-4  px-2 lg:px-10 md:px-6' placeholder='Digite aqui sua mensagem' name='Mensagem' onChange={onChange} value={form.Mensagem} required />
                        {!mensagemValidate && <span className='w-full text-xs block text-red-900'>A mensagem deve conter ao menos 10 caracteres</span>}
                        <span className='w-full text-xs inline'>Campos com * são de preenchimento obrigatório</span>
                        <button className={style.botaoSalvarCadastro} onClick={validar}>Enviar</button>

                    </div>
                }
                {
                    sucess &&
                    <div className='m-auto w-full text-center text-sm  py-2 lg:px-8 lg:mt-4 mb-12 lg:text-base   border-2 border-yellow-900'>
                        <p className='pb-4'>Mensagem enviada com sucessso!</p>
                        <p className='pb-4 text-justify'>Você será respondido assim que possível. Se você não for respondido em dois dias úteis
                            ou tiver alguma demanda urgente, favor entrar em contato por Whatsapp.</p>
                    </div>
                }
                <Link href={zap('5551982831917')}>
                    <a target='_blank' className='inline'>
                        <div className='w-full bg-green-700 rounded-full text-white text-center py-3 my-4 mx-auto max-w-md lg:w-3/5'>
                            Contato por Whatsapp
                            <div className={style.logo}>
                                <img src='./logo_Wpp1.png' className={style.imglogo} />
                            </div>
                        </div>
                    </a>
                </Link>

            </div>
        </div >

    )
}



export default Contato;
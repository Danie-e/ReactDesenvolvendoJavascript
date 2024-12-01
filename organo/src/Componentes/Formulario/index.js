import { useState } from 'react';
import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css';

export const Formulario = () => {

    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        ' Inovação e Gestão'
    ]

    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, settime] = useState('');

    const aoSalvar = (event) => {
        event.preventDefault()
        console.log("Formulario foi submetido =>", nome, cargo, imagem,time)
    }

    return (
        <section className='Formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha o formulario para adicionar os membros do time</h2>
                <CampoTexto
                    obrigatorio={true} label="Nome"
                    placeholder="Digite seu nome."
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto
                    obrigatorio={true}
                    label="Cargo"
                    placeholder="Digite seu cargo"
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />
                <CampoTexto
                    label="Imagem"
                    placeholder="Informe o endereço da imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa
                    label="Time"
                    itens={times}
                    valor={time}
                    aoAlterado={valor=>settime(valor)}
                />
                <Botao>Criar card</Botao>
            </form>
        </section>
    )
}

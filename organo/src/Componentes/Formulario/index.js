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

    return (
        <section className='Formulario'>
            <form >
                <h2>Preencha o formulario para adicionar os membros do time</h2>
                <CampoTexto label="Nome" placeholder="Digite seu nome." />
                <CampoTexto label="Cargo" placeholder="Digite seu cargo" />
                <CampoTexto label="Imagem" placeholder="Informe o endereço da imagem" />
                <ListaSuspensa label="Time" itens={times} />
                <Botao>Criar card</Botao>
            </form>
        </section>
    )
}

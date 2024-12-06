import { useState } from 'react';
import Botao from '../Botao';
import Campo from '../Campo';
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css';
import { v4 as uuidv4 } from 'uuid';


const Formulario = ({ aoColaboradorCadastrado, times, cadastrarTime }) => {

    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');
    const [nomeTime, setNomeTime] = useState('');
    const [corTime, setCorTime] = useState('');

    const aoSalvar = (event) => {
        event.preventDefault();
        aoColaboradorCadastrado({
            Nome: nome,
            Cargo: cargo,
            Imagem: imagem,
            Time: time,
            Id: uuidv4()
        });
        setNome('');
        setCargo('');
        setImagem('');
        setTime('');
    }

    return (
        <section className='Formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha o formulario para adicionar os membros do time</h2>
                <Campo
                    obrigatorio={true} label="Nome"
                    placeholder="Digite seu nome."
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <Campo
                    obrigatorio={true}
                    label="Cargo"
                    placeholder="Digite seu cargo"
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />
                <Campo
                    label="Imagem"
                    placeholder="Informe o endereço da imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa
                    label="Time"
                    itens={times}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                />
                <Botao>Criar card</Botao>
            </form>
            <form onSubmit={(evento) => {
                evento.preventDefault();
                cadastrarTime({ nome: nomeTime, cor: corTime })
            }}>
                <h2>Preencha o formulario para adicionar novos times</h2>
                <Campo
                    obrigatorio
                    label="Nome"
                    placeholder="Digite o nome do time."
                    valor={nomeTime}
                    aoAlterado={valor => setNomeTime(valor)}
                />
                <Campo
                    obrigatorio
                    label="Cor"
                    type='color'
                    placeholder="Digite a cor do time"
                    valor={corTime}
                    aoAlterado={valor => setCorTime(valor)}
                />
                <Botao>Criar novo time</Botao>
            </form>
        </section>
    );
}

export default Formulario
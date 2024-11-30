import CampoTexto from '../CampoTexto';
import './Formulario.css';

export const Formulario = () => {
    return (
        <section className='Formulario'>
            <form >
                <h2>Preencha o formulario para adicionar os membros do time</h2>
                <CampoTexto label="Nome" placeholder="Digite seu nome." />
                <CampoTexto label="Cargo" placeholder="Digite seu cargo" />
                <CampoTexto label="Imagem" placeholder="Informe o endereço da imagem" />
            </form>
        </section>
    )
}

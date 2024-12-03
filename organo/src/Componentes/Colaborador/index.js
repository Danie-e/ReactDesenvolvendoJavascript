import { AiFillCloseCircle } from 'react-icons/ai';
import './Colaborador.css';

const Colaborador = ({ imagem, nome, time, corDeFundo, aoDeletar }) => {
    return (
        <div className='Colaborador'>
            <AiFillCloseCircle size={25} className='Deletar' onClick={aoDeletar} />
            <div className='Cabecalho' style={{ backgroundColor: corDeFundo }}>
                <img src={imagem} alt='Imagem buscada pelo GitHub do colaborador.' />
            </div>
            <div className='Rodape'>
                <h4>{nome}</h4>
                <h5>{time}</h5>
            </div>
        </div>
    )
}

export default Colaborador;
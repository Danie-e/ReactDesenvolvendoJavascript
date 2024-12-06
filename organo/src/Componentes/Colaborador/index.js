import { AiFillCloseCircle } from 'react-icons/ai';
import './Colaborador.css';

const Colaborador = ({ colaborador, corDeFundo, aoDeletar }) => {
    return (
        <div className='Colaborador'>
            <AiFillCloseCircle
                size={25}
                className='Deletar'
                onClick={()=>aoDeletar(colaborador.Id)}
            />
            <div className='Cabecalho' style={{ backgroundColor: corDeFundo }}>
                <img src={colaborador.Imagem} alt='Imagem buscada pelo GitHub do colaborador.' />
            </div>
            <div className='Rodape'>
                <h4>{colaborador.Nome}</h4>
                <h5>{colaborador.Time}</h5>
            </div>
        </div>
    )
}

export default Colaborador;
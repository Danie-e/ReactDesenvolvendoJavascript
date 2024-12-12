import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import './Colaborador.css';

const Colaborador = ({ colaborador, corDeFundo, aoDeletar, aoFavoritar }) => {

    function favoritar() {
        console.log(colaborador.Id);
        aoFavoritar(colaborador.Id);
    }

    const propsfavorito = {
        size: 25,
        onClick: favoritar
    }

    return (
        <div className='Colaborador'>
            <AiFillCloseCircle
                size={25}
                className='Deletar'
                onClick={() => aoDeletar(colaborador.Id)}
            />
            <div className='Cabecalho' style={{ backgroundColor: corDeFundo }}>
                <img src={colaborador.Imagem} alt='Imagem buscada pelo GitHub do colaborador.' />
            </div>
            <div className='Rodape'>
                <h4>{colaborador.Nome}</h4>
                <h5>{colaborador.Cargo}</h5>
                <div className='Favoritar'>
                    {colaborador.Favorito
                        ? <AiFillHeart {...propsfavorito} color='red'/>
                        : <AiOutlineHeart {...propsfavorito} />
                    }
                </div>
            </div>
        </div>
    )
}

export default Colaborador;
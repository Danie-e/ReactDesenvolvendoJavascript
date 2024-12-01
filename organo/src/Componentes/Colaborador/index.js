import './Colaborador.css';

const Colaborador = ({ imagem, nome, time }) => {
    return (
        <div className='Colaborador'>
            <div className='Cabecalho'>
                <img src={imagem} alt='Daniela' />
            </div>
            <div className='Rodape'>
                <h4>{nome}</h4>
                <h5>{time}</h5>
            </div>
        </div>
    )
}

export default Colaborador;
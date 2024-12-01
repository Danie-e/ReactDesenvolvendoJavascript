import './Colaborador.css';

const Colaborador = ({ imagem, nome, time, corDeFundo }) => {
    return (
        <div className='Colaborador'>
            <div className='Cabecalho' style={{ backgroundColor: corDeFundo }}>
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
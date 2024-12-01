import Colaborador from '../Colaborador';
import './Time.css';

const Time = (props) => {
    return (
        props.colaboradores.length > 0 &&
        <section className='Time' style={{ backgroundColor: props.corPrimaria }}>
            <h3 style={{ borderColor: props.corSecondaria }}>{props.nome}</h3>
            <div className='Colaboradores'>
                {props.colaboradores.map(
                    colaborador =>
                        <Colaborador
                            key={colaborador.nome}
                            imagem={colaborador.Imagem}
                            nome={colaborador.Nome}
                            time={colaborador.Time}
                            corDeFundo={props.corSecondaria}
                        />
                )}
            </div>
        </section >
    )
}

export default Time;
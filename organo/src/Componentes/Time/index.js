import Colaborador from '../Colaborador';
import './Time.css';

const Time = ({ time, colaboradores, aoDeletar }) => {
    return (
        colaboradores.length > 0 &&
        <section className='Time' style={{ backgroundColor: time.corPrimaria }}>
            <h3 style={{ borderColor: time.corSecondaria }}>{time.nome}</h3>
            <div className='Colaboradores'>
                {colaboradores.map(
                    (colaborador, index) => {

                        return <Colaborador
                            key={index}
                            imagem={colaborador.Imagem}
                            nome={colaborador.Nome}
                            time={colaborador.Time}
                            corDeFundo={time.corSecondaria}
                            aoDeletar={aoDeletar}
                        />
                    }
                )}
            </div>
        </section >
    )
}

export default Time;
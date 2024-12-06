import Colaborador from '../Colaborador';
import './Time.css';
import hexToRgba from 'hex-to-rgba';

const Time = ({ time, colaboradores, aoDeletar, mudarCor }) => {
    return (
        colaboradores.length > 0 &&
        <section className='Time' style={{ backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: hexToRgba(time.cor, '0.6') }}>
                <input onChange={event => mudarCor(event.target.value, time.id)} value={time.cor} type='color' className='Cor-Time'></input>
                <h3 style={{ borderColor: time.cor }}>{time.nome}</h3>
                <div className='Colaboradores'>
                    {colaboradores.map(
                        (colaborador, index) => {
                            return <Colaborador
                                key={index}
                                colaborador={colaborador}
                                corDeFundo={time.cor}
                                aoDeletar={aoDeletar}
                            />
                        }
                    )}
                </div>
            </section >
            )
}

            export default Time;
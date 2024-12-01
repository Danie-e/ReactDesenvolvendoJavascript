import './Time.css';

const Time = (props) => {
    return (
        <section className='Time' style={{ backgroundColor: props.corPrimaria }}>
            <h3 style={{ borderColor: props.corSecondaria }}>{props.nome}</h3>

        </section >
    )
}

export default Time;
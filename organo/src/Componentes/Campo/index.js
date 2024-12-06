import './Campo.css'

const Campo = ({ type = 'text', valor, label, obrigatorio, placeholder, aoAlterado }) => {

    const aoDigitado = (event) => {
        aoAlterado(event.target.value);
    }

    return (
        <div className={`Campo ${type}`}>
            <label>{label}</label>
            <input
                type={type}
                value={valor}
                onChange={aoDigitado}
                required={obrigatorio}
                placeholder={placeholder}
            />
        </div>
    )
};

export default Campo;
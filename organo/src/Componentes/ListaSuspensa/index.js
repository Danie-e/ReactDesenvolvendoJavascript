import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
    return (
        <div className='ListaSuspensa'>
            <label>{props.label}</label>
            <select onChange={event => props.aoAlterado(event.target.value)} required={props.required} value={props.valor}>
                <option value="" />
                {props.itens.map(item => {
                    return <option key={item.nome}>{item.nome}</option>
                })}
            </select>
        </div>
    )
}

export default ListaSuspensa;

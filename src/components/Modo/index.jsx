
const Modo = ({ children }) => {
    return (
        <label>
            <input 
                type="radio"
                // value={value}
                // checked={checked}
                // onChange={onChange}
            />
            {children}
        </label>
    )
}

export default Modo;
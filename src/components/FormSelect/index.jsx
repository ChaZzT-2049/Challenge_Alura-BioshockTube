import { Select } from "../styled";

const FormSelect = (props) => {
    const {value, setValue, placeholder, id, label, options, required} = props
    const actualizarInput = (e) => {
        setValue(e.target.value)
    }
    return <>
        <label htmlFor={id}>{label}</label>
        <Select required={required} id={id} placeholder={placeholder} value={value} onChange={(e) => {actualizarInput(e)}}>
            <option className="optionItem" value="" defaultValue="" disabled>Selecciona una Categoria</option>
            {
                options.map(op => ( 
                    <option key={op.id} className="optionItem" value={op.id}>{op.nombre}</option> 
                ))
            }
        </Select>
    </>
}
export default FormSelect
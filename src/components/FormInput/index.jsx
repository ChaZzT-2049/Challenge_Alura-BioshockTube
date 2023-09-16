import { Input } from "../styled";

const FormInput = (props) => {
    const {value, setValue, placeholder, id, label, required, type} = props
    const actualizarInput = (e) => {
        setValue(e.target.value)
    }
    return <>
        <label htmlFor={id}>{label}</label>
        <Input required={required} type={type} id={id} placeholder={placeholder} value={value} onChange={(e) => {actualizarInput(e)}}/>
    </>
}
export default FormInput
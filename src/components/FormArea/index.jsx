import { TxtArea } from "../styled";

const FormArea = (props) => {
    const {value, setValue, placeholder, id, label, required} = props
    const actualizarInput = (e) => {
        setValue(e.target.value)
    }
    return <>
        <label htmlFor={id}>{label}</label>
        <TxtArea required={required} id={id} placeholder={placeholder} value={value} onChange={(e) => {actualizarInput(e)}}></TxtArea>
    </>
}
export default FormArea
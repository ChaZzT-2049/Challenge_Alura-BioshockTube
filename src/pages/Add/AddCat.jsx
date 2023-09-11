import { Container, MainTitle, FormContainer, FormField, Input, TxtArea, Btn } from "../../components/styled"
const AddCat = () =>{
    return <Container>
        <MainTitle>Agregar Categoria</MainTitle>
        <FormContainer>
            <FormField>
                <label htmlFor="cat">Nombre</label>
                <Input type="text" id="cat" placeholder="Ingresa el nombre de la categoria" />
            </FormField>
            <FormField>
                <label htmlFor="metaDes">Meta Descripcion</label>
                <Input type="text" id="metaDes" placeholder="Ingresa una breve descripción de la categoria" />
            </FormField>
            <FormField>
                <label htmlFor="desc">Descripcion</label>
                <TxtArea id="desc" placeholder="Ingresa una descripción detallada de la categoria"></TxtArea>
            </FormField>
            <FormField>
                <label htmlFor="color">Color de la Categoria</label>
                <Input type="color" id="color" />
            </FormField>
            <FormField>
                <label htmlFor="img">Imagen de Portada</label>
                <Input type="url" id="img" placeholder="Ingresa el link de una imagen" />
            </FormField>
            <FormField>
                <label htmlFor="code">Codigo</label>
                <Input type="password" id="code" placeholder="Ingresa el código de validación" />
            </FormField>
            <FormField>
                <Btn color={({theme}) => theme.on_primary} bg={({theme}) => theme.primary}>Agregar</Btn>
            </FormField>
        </FormContainer>
    </Container>
}
export default AddCat
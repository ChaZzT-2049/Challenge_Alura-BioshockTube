import { Container, MainTitle, FormContainer, FormField, Input, TxtArea, Select, Btn } from "../../components/styled"
const AddVideo = () =>{
    return <Container>
        <MainTitle>Agregar Video</MainTitle>
        <FormContainer action="">
            <FormField>
                <label htmlFor="titulo">Titulo de Video</label>
                <Input type="text" name="titulo" id="titulo" placeholder="Ingresa el titulo del video" />
            </FormField>
            <FormField>
                <label htmlFor="canal">Canal Autor</label>
                <Input type="text" name="canal" id="canal" placeholder="Ingresa nombre del canal autor del video" />
            </FormField>
            <FormField>
                <label htmlFor="desc">Descripcion del video</label>
                <TxtArea name="desc" id="desc" placeholder="Ingresa un breve descripción del video"></TxtArea>
            </FormField>
            <FormField>
                <label htmlFor="img">URL de Portada</label>
                <Input type="url" name="img" id="img" placeholder="Ingresa el link de imagen de portada" />
            </FormField>
            <FormField>
                <label htmlFor="vid">URL de Video</label>
                <Input type="url" name="vid" id="vid" placeholder="Ingresa el link del video" />
            </FormField>
            <FormField>
                <label htmlFor="cat">Selecciona una Categoria</label>
                <Select value="" name="cat" id="cat">
                    <option className="optionItem" value="" defaultValue="" disabled>Selecciona una Categoria</option>
                    <option className="optionItem" value="a">Categoria 1</option>
                    <option className="optionItem" value="b">Categoria 2</option>
                </Select>
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
export default AddVideo
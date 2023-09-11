import { Container, MainTitle, FlexRow, Btn } from "../components/styled"
import styled from "styled-components"

const Atributos = styled(FlexRow)`
    padding: 0;
    justify-content: flex-start;
    border: 2px solid ${({theme}) => theme.outline};
    border-radius: .5rem;
    & h2{
        flex-basis: 16.6666%;
        border: 2px solid ${({theme}) => theme.outline};
        padding: 1rem;
        text-align: center;
        &:hover{
            background: ${({theme}) => theme.surface};
        }
    }
    & h2:first-child{
        border-radius: .4rem 0 0 .4rem
    }
    & h2:last-child{border-radius: 0 .4rem .4rem 0}
    @media screen and (min-width: 0px) and (max-width: 480px){
        display: none;
    }
`;

const CategoryCard = styled.div`
    display: flex;
    height: 20vh;
    border: 2px solid ${({theme}) => theme.outline};
    border-radius: .5rem;
    margin: 1rem 0;
    @media screen and (min-width: 0px) and (max-width: 480px){
        flex-direction: column;
        height: 50vh;
    }
`;
const CardElement = styled.div`
    flex-basis: 16.6%;
    padding: .5rem;
    display: flex;
    justify-content: center;
    overflow-y: auto;
    height: 92.5%;
    @media screen and (min-width: 0px) and (max-width: 480px){
        justify-content: flex-start;
        &:has(button){padding: 0 .5rem; padding-bottom: .5rem; flex-basis: 13%;}
        &:has(button) button{
           width: 100%;
           align-self: flex-start;
        }
        &:has(img){
            background: ${({theme}) => theme.surface};
            flex-grow: 1;
        }
        &:has(small){flex-basis: 8%;}
        &:has(h2){flex-basis: 9%;}
    }
    & button{
        align-self: center;
    }
`;
const Categories = () => {
    return <Container>
        <MainTitle>Categorias en BioshockTube</MainTitle>
        <Atributos>
            <h2>Imagen</h2>
            <h2>Categoria</h2>
            <h2>Descripcion</h2>
            <h2>Meta Descripcion</h2>
            <h2>Editar</h2>
            <h2>Eliminar</h2>
        </Atributos>
        <CategoryCard>
            <CardElement>
                <img src="" alt="" />
            </CardElement>
            <CardElement>
                <h2>Categoria 1</h2>
            </CardElement>
            <CardElement>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, minus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, minus?</p>
            </CardElement>
            <CardElement>
                <small>Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.</small>
            </CardElement>
            <CardElement>
                <Btn bg={({theme}) => theme.primary} color={({theme}) => theme.on_primary}>Editar</Btn>
            </CardElement>
            <CardElement>
                <Btn bg={({theme}) => theme.error} color={({theme}) => theme.on_error}>Eliminar</Btn>
            </CardElement>
        </CategoryCard>
        <CategoryCard>
            <CardElement>
                <img src="" alt="" />
            </CardElement>
            <CardElement>
                <h2>Categoria 1</h2>
            </CardElement>
            <CardElement>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, minus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, minus?</p>
            </CardElement>
            <CardElement>
                <small>Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.</small>
            </CardElement>
            <CardElement>
                <Btn bg={({theme}) => theme.primary} color={({theme}) => theme.on_primary}>Editar</Btn>
            </CardElement>
            <CardElement>
                <Btn bg={({theme}) => theme.error} color={({theme}) => theme.on_error}>Eliminar</Btn>
            </CardElement>
        </CategoryCard>
    </Container>
}
export default Categories
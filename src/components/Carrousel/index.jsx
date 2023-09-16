import styled from "styled-components"
import {Slide} from "../Slide"
const Slider = styled.div`
    width: 100%;
    height: auto;
    max-width: 100em;
    overflow: hidden;
    display: flex;
    flex-direction: column;
`;
const SliderContainer = styled.div`
    width: ${props => props.size + "%"};
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    flex-grow: 1;
    transition: all 500ms ease;
`;
const SlideContainer = styled.div`
    width: calc(100% / ${props => props.n});
    display: flex;
    justify-content: space-between;
    height: 50vh;
    background: ${({theme}) => theme.surface};
    @media screen and (min-width: 0px) and (max-width: 480px){
        flex-direction: column-reverse;
        height: 60vh;
    }
`;
const Controls = styled.ul`
    display: flex;
    justify-content: center;
    gap: 1rem;
    padding-top: 1rem;
    align-items: center;
`;
const Control = styled.li`
    width: 1rem;
    height: 1rem;
    border-radius: 100%;
    background: ${({theme}) => theme.surface};
    cursor: pointer;
    transition: all 500ms ease;
    &.active{
        background: ${({theme}) => theme.primary};
    }
`;
const Carrousel = (props) => {
    const {tema, categories} = props

    let size = categories.length * 100

    const changeSlide = (slide) =>{
        const carrousel = document.querySelector("#carrousel")
        const controls = document.querySelectorAll(".control");
        controls.forEach((c) =>{c.classList.remove("active")})
        const calculo = slide * -(100 / categories.length);
        carrousel.style.transform = `translateX(${calculo}%)`;
        controls[slide].classList.add("active")
    }

    return <Slider>
        <SliderContainer size={size} id="carrousel">
            {
                categories.map(cat => ( 
                    <SlideContainer n={categories.length} key={cat.id}>
                        <Slide cat={cat} tema={tema} />
                    </SlideContainer> 
                ))
            }
        </SliderContainer>
        <Controls>
            {
                categories.map((cat, i) => ( 
                    <Control key={cat.id} onClick={() =>changeSlide(i)} className={`control ${i === 0 ? "active" : ""}`}/> 
                ))
            }
        </Controls>
    </Slider>
}
export default Carrousel
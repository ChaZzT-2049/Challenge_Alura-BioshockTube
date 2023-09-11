import styled from "styled-components"
import {Slide} from "../Slide"
const Slider = styled.div`
    width: 100%;
    max-width: 100em;
    overflow: hidden;
`;
const SliderContainer = styled.div`
    width: 300%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;

    transition: all 500ms ease;
`;
const SlideContainer = styled.div`
    width: calc(100% / 3);
    display: flex;
    justify-content: space-between;
    background: ${({theme}) => theme.surface};
    height: 50vh;
    @media screen and (min-width: 0px) and (max-width: 480px){
        height: auto;
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
    const {tema} = props
    const changeSlide = (slide) =>{
        const controls = document.querySelectorAll(".control")
        controls.forEach((c)=> c.classList.remove("active"))
        const carrousel = document.querySelector("#carrousel")
        const calculo = slide * -(100 / controls.length);
        carrousel.style.transform = `translateX(${calculo}%)`;
        controls[slide].classList.add("active")
    }
    return <Slider>
        <SliderContainer id="carrousel">
            <SlideContainer>1<Slide tema={tema} /></SlideContainer>
            <SlideContainer>2<Slide tema={tema}/></SlideContainer>
            <SlideContainer>3<Slide tema={tema}/></SlideContainer>
        </SliderContainer>
        <Controls>
            <Control onClick={() =>changeSlide(0)} className="control active"/>
            <Control onClick={() =>changeSlide(1)} className="control"/>
            <Control onClick={() =>changeSlide(2)} className="control"/>
        </Controls>
    </Slider>
}
export default Carrousel
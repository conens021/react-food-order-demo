import styled from "styled-components";

export const Backdrop = styled.div`
    visibility:${props => props.visible ? 'visible':'hidden'};
    opacity : ${props => props.visible ? '1' : '0'};
    transition :opacity .3s ;
    position:absolute;
    top:0;
    left : 0;
    height:100%;
    width:100%;
    background-color:#252525e2;
`
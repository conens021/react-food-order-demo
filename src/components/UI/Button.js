import styled from "styled-components";


export const Button = styled.button`
    background-color: ${props => props.mode === 'secondary'? 'white' : '#7E2606'} ;
    border-color: ${props => props.mode === 'secondary'? '#7E2606' : 'transparent'};
    color:  ${props => props.mode === 'secondary'? '#7E2606' : 'white'};
    padding: 0.5em 2em;
    border-radius: 30px;
    font-weight: bold;
    font-size: .9em;
    cursor: pointer;

`
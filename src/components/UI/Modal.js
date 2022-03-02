import styled from "styled-components";

const Modal = styled.form`
    position: absolute;
    left: 30%;
    width: 40%;
    background-color: red;
    z-index: 3;
    border-radius: 20px;
    background-color: white;
    padding:3em 1em;
    display:block;
    
    visibility: ${props => props.visible ? 'visible' : 'hidden'};
    transform: ${props => props.visible ? 'translateY(30%)' : 'translateY(-30%)'};
    transition : visibility .4s;
    transition : transform .4s;

    & .item{
        display:flex;
        justify-content: space-between;
        align-items:center;
        border-bottom: 2px solid #7D584B;
        padding-bottom:1em;
        margin-bottom:1em;
    }

    & .item .left{
        display:flex;
        flex-direction:column;
        row-gap:1em;
    }
    
    & .item .right{
        display:flex;
        column-gap : .5em;
    }


    & .item .left .upper{
        font-size:1.5em;
        font-weight:bold;
    }

    & .item .left .down{
        display:flex;
        column-gap:3em;
    }

    & .item .left .down .price{
        font-size:1em;
        font-weight:bold;
        color: #865748;
    }

    & .item .left .down input{
        width:30px;
        height:20px;
    }

    & .total{
        display:flex;
        justify-content:space-between;
        font-size:1.6em;
        font-weight:bold;
        margin-bottom:1em;
    }

    & .submit-btns{
        display:flex;
        justify-content:flex-end;
        column-gap:.4em;
    }

`

export default Modal
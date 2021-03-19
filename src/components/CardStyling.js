import styled from 'styled-components'

export const Cards = styled.div`
background-color: lightyellow;
opacity: 80%;
color: royalblue;
width:40%;
margin: 0 auto;
padding: 1%;
border: black solid 1px
`

export const Button = styled.button`
background-color: lightyellow; 
color: black;
padding: 15px 32px;
text-align: center;
text-decoration: bold;
display: inline-block;
font-size: 18px;

&:hover{
  color: royalblue;
  background-color: yellow;
  transform: scale(2);
  transition: all 2s ease-in-out
};
`



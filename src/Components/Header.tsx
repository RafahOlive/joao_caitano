import { HamburgerMenu } from "./HamburgerMenu";

import styled from "styled-components";

import logo from '../../src/assets/ajc.png'

// const Title = styled.h1`
// margin: 0;
// `

const LogoImg = styled.img`
  height: 200px; /* Ajuste a altura conforme necessário */
  margin-left: 1rem; /* Adicione margem à esquerda para espaçamento */
`;

const StyledHeader = styled.header`
  color: white;
  padding: 1rem;
  width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
`;

export function Header() {
  return(
    <StyledHeader>
    <LogoImg src={logo} alt="logo" />
    <HamburgerMenu />
    </StyledHeader>
  ) 
}

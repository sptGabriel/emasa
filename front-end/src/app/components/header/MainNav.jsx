import React from 'react';
import { Content, Nav, ContainerNav } from './styles/Desktop';
import { useTheme } from 'emotion-theming';

const NavBar = props => {
  const Theme = useTheme();
  return (
    <ContainerNav theme={props.theme}>
      <Content>
        <Nav {...props}>
          <ul>
            <li>
              <a href="#home">Emasa</a>
            </li>
            <li>
              <a href="#homex">Anuário</a>
            </li>
            <li>
              <a href="#homexv">Informativo</a>
            </li>
            <li>
              <a href="#homexv">2 Via</a>
            </li>
            <li>
              <a href="#homexv">Transparência</a>
            </li>
            <li>
              <a href="#homexv">Licitação</a>
            </li>
          </ul>
        </Nav>
      </Content>
    </ContainerNav>
  );
};

export default NavBar;

import React, { useState } from 'react';
import { Container, Content, HeaderTop, Nav } from './styles';
import { useTheme } from 'emotion-theming';

const Top = props => {
  return (
    <HeaderTop justify={'space-between'} align={'center'} flexdirection={'row'}>
      <div>a</div>
      <div>b</div>
      <div>a</div>
    </HeaderTop>
  );
};

const NavBar = props => {
  return (
    <Nav>
      <ul>
        <li>
          <a>home</a>
        </li>
        <li>
          <a>test</a>
        </li>
        <li>
          <a>test</a>
        </li>
      </ul>
    </Nav>
  );
};

const Header = () => {
  const Theme = useTheme();
  const [text, setText] = useState('');
  const handleClick = () => {
    setText('');
  };
  return (
    <Container theme={Theme}>
      <Content theme={Theme} flexdirection={'column'}>
        {/* <textarea
          onKeyPress={e => {
            if (e.key === 'Enter') {
              e.preventDefault();
            }
            if (e.key === 'Enter') {
              handleClick();
            }
          }}
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Digite aqui sua mensagem"
        /> */}
        <Top theme={Theme} />
        <NavBar theme={Theme} />
      </Content>
    </Container>
  );
};

export default Header;

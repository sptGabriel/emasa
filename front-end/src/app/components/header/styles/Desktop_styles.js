import styled from '@emotion/styled/macro';
import { mxw80, flexCenter, flexRowBet } from '../../../globals/flex';
// border-bottom: 1px solid rgba(255, 255, 255, 0.2);
export const Container = styled.div`
  ${mxw80}
`;
export const TopNav = styled.div`
  width: 100%;
  background: #09295c;
`;
export const ContentTopNav = styled.div`
  ${flexRowBet};
  justify-content: flex-end;
  height: 100%;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`;
export const PopUp = styled.div`
  position: absolute;
  transform: translateY(calc(100% + 1rem));
  width: 200px;
  background: white;
  height: 200px;
  display: ${props => (props.hover ? 'block' : 'none')};
`;
export const WrapAccount = styled.ul`
  position: relative;
  ${flexRowBet};
  flex-direction: column;
  align-items: flex-end;
  padding: 1rem 0;
  li {
    display: flex;
    justify-content: center;
    height: 100%;
    width: 200px;
  }
  a {
    cursor: pointer;
    color: white;
    font-size: 1em;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    color: #fff;
    text-transform: capitalize;
  }
`;
export const WrapAcessibility = styled.div`
  ${flexRowBet};
  width: 100%;
  padding: 0.5rem 0;
  line-height: 24px;
  font-family: 'Poppins', sans-serif;
  p {
    position: relative;
    display: inline-block;
    pointer-events: none;
    color: white;
    padding-right: 9px;
    font-family: inherit;
  }
  ul {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    height: auto;
  }
  a {
    font-family: inherit;
    color: #fff;
    font-size: 13px;
    pointer-events: none;
    padding: 0 9px;
  }
`;

export const Header = styled.header`
  width: 100%;
  height: auto;
`;

export const HeaderMid = styled.div`
  width: 100%;
  height: 300px;
  background: #09295c;
`;

export const Nav = styled.nav`
  width: 100%;
  height: 55px;
  background: #061938;
`;

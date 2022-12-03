import styled from 'styled-components';
import { Colors, Dimensions } from 'components/styles/Theme';

export const NavbarContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${Colors.colorNavbar};
  width: 100%;
  height: ${Dimensions.heightNavbar};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3rem;
  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box; /* Firefox, other Gecko */
  box-sizing: border-box; /* Opera/IE 8+ */
`;

export const Logo = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

export const Resources = styled.div`
  display: flex;
  gap: 1rem;
`;

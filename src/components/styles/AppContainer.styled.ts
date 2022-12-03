import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Colors, Dimensions } from './Theme';

export const AppContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - ${Dimensions.heightNavbar});
  background-color: ${Colors.colorBackgroudnd};
  color: ${Colors.colorText};
  margin-top: ${Dimensions.heightNavbar};
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${Colors.colorText};
`;

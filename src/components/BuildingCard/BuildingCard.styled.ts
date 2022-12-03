import styled from 'styled-components';
import { Colors } from 'components/styles/Theme';

export const BuildingCardContainer = styled.div`
  height: 400px;
  width: 22rem;
  background-color: ${Colors.colorCard};
  padding: 4rem;
  display: flex;
  border-radius: 2.5rem 2.5rem 0 0;
  border: 0.5rem solid;
  border-color: ${Colors.colorCardBorder};
  cursor: pointer;
  &:hover {
    background-color: ${Colors.colorCardHover};
  }
`;

export const BuildingCardInfo = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const BuildingCardTop = styled.div`
  margin-top: 3rem;
  width: 64px;
  height: 64px;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
`;

export const BuildingCardLevel = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: #eb1d36;
  margin-top: 2rem;
  padding: 0.5rem 3rem;
  border-radius: 2.5rem;
  letter-spacing: 2px;
`;

export const BuildingCardTitle = styled.div`
  text-transform: uppercase;
  letter-spacing: 5px;
  font-size: 20px;
`;

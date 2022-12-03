import { Colors } from 'components/styles/Theme';
import styled from 'styled-components';

export const TownhallContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
  padding: 3rem;
  justify-content: center;
  align-items: center;
`;

export const TownhallTitle = styled.div`
  font-size: x-large;
  display: flex;
  gap: 3rem;
`;

export const TownhallBorad = styled.div`
  display: flex;
  flex-direction: column;
  width: 70vw;
`;

export const BoardItem = styled.div`
  display: inline-flex;
  gap: 2rem;
  align-items: center;
  padding: 1rem;
  background-color: ${Colors.colorCard};
  border: 2px solid ${Colors.colorCardBorder};
  justify-content: space-between;
`;

export const BoardItemInfo = styled.div`
  width: 30%;
  display: inline-flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const BoardItemActions = styled.div`
  margin-right: 2rem;
  &button:hover {
    cursor: pointer;
  }
`;

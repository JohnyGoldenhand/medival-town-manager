import { buildingNames } from 'data/buildingsData';
import { useDispatch, useSelector } from 'react-redux';
import { levelUp, SelectTownhall } from 'store/slices/buildings/townhallSlice';

import {
  BoardItem,
  BoardItemActions,
  BoardItemInfo,
  TownhallBorad,
  TownhallContainer,
  TownhallTitle,
} from './TownhallDirectory.styled';

export const TownhallDirectory = () => {
  const { buildingsToDevelop } = useSelector(SelectTownhall);

  const dispatch = useDispatch();

  return (
    <TownhallContainer>
      <TownhallTitle>
        <span>{buildingNames.townhall.toUpperCase()}</span>
      </TownhallTitle>
      <TownhallBorad>
        {buildingsToDevelop.map((building) => (
          <BoardItem key={building.id}>
            <BoardItemInfo>
              <div>
                <img src={building.icon} width="64px" height="64px"></img>
              </div>

              <div>{building.name.toUpperCase()}</div>
              <div>Level: {building.level}</div>
            </BoardItemInfo>
            <BoardItemActions>
              <button onClick={() => dispatch(levelUp(building.id))}>
                Level Up
              </button>
            </BoardItemActions>
          </BoardItem>
        ))}
      </TownhallBorad>
    </TownhallContainer>
  );
};

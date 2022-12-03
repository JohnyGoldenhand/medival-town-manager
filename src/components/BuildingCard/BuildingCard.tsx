import { buildingType } from 'types/building';
import {
  BuildingCardContainer,
  BuildingCardInfo,
  BuildingCardTop,
  BuildingCardLevel,
  BuildingCardTitle,
} from './BuildingCard.styled';

export const BuildingCard = (props: { buildingInfo: buildingType }) => {
  const { name, icon, level } = props.buildingInfo;

  return (
    <BuildingCardContainer>
      <BuildingCardInfo>
        <BuildingCardTop>
          <img src={icon} width={64} height={64} />
          <BuildingCardLevel>
            <span>Level: </span>
            {level}
          </BuildingCardLevel>
        </BuildingCardTop>
        <BuildingCardTitle>{name}</BuildingCardTitle>
      </BuildingCardInfo>
    </BuildingCardContainer>
  );
};

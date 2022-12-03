import { BuildingCard } from 'components/BuildingCard/BuildingCard';
import { StyledLink } from 'components/styles/AppContainer.styled';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { SelectTownhall } from 'store/slices/buildings/townhallSlice';
import {
  BuildingsContainer,
  BuildingsLayout,
} from './BuildingsDirectory.styled';

export const BuildingsDirectory = () => {
  const { buildingsToDevelop } = useSelector(SelectTownhall);

  return (
    <BuildingsContainer>
      <BuildingsLayout>
        {buildingsToDevelop.map((building) => (
          <StyledLink to={building.link} key={building.name}>
            <BuildingCard buildingInfo={building} key={building.id} />
          </StyledLink>
        ))}
      </BuildingsLayout>
    </BuildingsContainer>
  );
};

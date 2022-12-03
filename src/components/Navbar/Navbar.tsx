import { useSelector } from 'react-redux';
import { SelectWorkers } from 'store/slices/buildings/workersSlice';
import { NavbarContainer, Resources } from './Navbar.styled';
import { Outlet } from 'react-router-dom';
import { StyledLink } from 'components/styles/AppContainer.styled';
import { RouteNames } from 'rotues/routes';

export const Navbar = () => {
  const { maxAvilable, currentlyAvilable } = useSelector(SelectWorkers);
  return (
    <>
      <NavbarContainer>
        <StyledLink to={RouteNames.Homepage}>Logo</StyledLink>

        <Resources>
          <div>
            workers: {currentlyAvilable}/{maxAvilable}
          </div>
          <div>materials: 1/100</div>
        </Resources>
      </NavbarContainer>
      <Outlet />
    </>
  );
};

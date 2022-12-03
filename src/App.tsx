import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'store/store';
import { BuildingsDirectory } from 'rotues/BuildingsDirectory/BuildingsDirectory';
import { Navbar } from 'components/Navbar/Navbar';
import { AppContainer } from 'components/styles/AppContainer.styled';
import { RouteNames } from 'rotues/routes';
import { TownhallDirectory } from 'rotues/TownhallDirectory/TownhallDirectory';
import { LumberDirectory } from 'rotues/LumberDirectory/LumberDirectory';
import { MarketDirectory } from 'rotues/MarketDirectory/MarketDirectory';

function App() {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <Router>
          <AppContainer>
            <Routes>
              <Route path={RouteNames.Homepage} element={<Navbar />}>
                <Route index element={<BuildingsDirectory />} />
                <Route
                  path={RouteNames.Townhall}
                  element={<TownhallDirectory />}
                />
                <Route path={RouteNames.Lumber} element={<LumberDirectory />} />
                <Route path={RouteNames.Market} element={<MarketDirectory />} />
              </Route>
            </Routes>
          </AppContainer>
        </Router>
      </Provider>
    </React.StrictMode>
  );
}

export default App;

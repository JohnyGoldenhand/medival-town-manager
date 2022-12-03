import Townhall from 'public/img/townhall.svg';
import Market from 'public/img/market.svg';
import Lumber from 'public/img/lumber.svg';
import { buildingType } from 'types/building';
import { RouteNames } from 'rotues/routes';

export enum buildingNames {
  townhall = 'townhall',
  lumber = 'lumber mill',
  market = 'market',
}

{
  //Delete src from ICON: XYZ.SRC
}

export const buildingsData: Array<buildingType> = [
  {
    name: buildingNames.townhall,
    id: 1,
    icon: Townhall,
    link: RouteNames.Townhall,
    level: 1,
  },

  {
    name: buildingNames.market,
    id: 2,
    icon: Market,
    link: RouteNames.Market,
    level: 1,
  },

  {
    name: buildingNames.lumber,
    id: 3,
    icon: Lumber,
    link: RouteNames.Lumber,
    level: 1,
  },
];

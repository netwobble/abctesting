import { CockpitDashboardStoreModel } from './cockpit-dashboard-store-model.interfaces';
import { CockpitDashboardStoreModelAction } from './cockpit-dashboard-store-model.actions';

export function cockpitDashboardStoreModelReducer(
  state: CockpitDashboardStoreModel,
  action: CockpitDashboardStoreModelAction
): CockpitDashboardStoreModel {
  switch (action.type) {
    case 'DATA_LOADED': {
      return { ...state, ...action.payload };
    }
    default: {
      return state;
    }
  }
}

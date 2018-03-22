import { cockpitDashboardStoreModelReducer } from './cockpit-dashboard-store-model.reducer';
import { cockpitDashboardStoreModelInitialState } from './cockpit-dashboard-store-model.init';
import { CockpitDashboardStoreModel } from './cockpit-dashboard-store-model.interfaces';
import { DataLoaded } from './cockpit-dashboard-store-model.actions';

describe('cockpitDashboardStoreModelReducer', () => {
  it('should work', () => {
    const state: CockpitDashboardStoreModel = {};
    const action: DataLoaded = { type: 'DATA_LOADED', payload: {} };
    const actual = cockpitDashboardStoreModelReducer(state, action);
    expect(actual).toEqual({});
  });
});

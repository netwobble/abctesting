import { TestBed, async } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { provideMockActions } from '@ngrx/effects/testing';
import { DataPersistence } from '@nrwl/nx';
import { hot } from '@nrwl/nx/testing';
import { CockpitDashboardStoreModelEffects } from './cockpit-dashboard-store-model.effects';

describe('CockpitDashboardStoreModelEffects', () => {
  let actions;
  let effects: CockpitDashboardStoreModelEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({})],
      providers: [
        CockpitDashboardStoreModelEffects,
        DataPersistence,
        provideMockActions(() => actions)
      ]
    });

    effects = TestBed.get(CockpitDashboardStoreModelEffects);
  });

  describe('someEffect', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: { type: 'LOAD_DATA' } });
      expect(effects.loadData).toBeObservable(
        hot('-a-|', { a: { type: 'DATA_LOADED', payload: {} } })
      );
    });
  });
});

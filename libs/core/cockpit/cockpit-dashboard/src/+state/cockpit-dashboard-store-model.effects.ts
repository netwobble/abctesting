import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/switchMap';
import { CockpitDashboardStoreModelState } from './cockpit-dashboard-store-model.interfaces';
import { LoadData, DataLoaded } from './cockpit-dashboard-store-model.actions';

@Injectable()
export class CockpitDashboardStoreModelEffects {
  @Effect()
  loadData = this.dataPersistence.fetch('LOAD_DATA', {
    run: (action: LoadData, state: CockpitDashboardStoreModelState) => {
      return {
        type: 'DATA_LOADED',
        payload: {}
      };
    },

    onError: (action: LoadData, error) => {
      console.error('Error', error);
    }
  });

  constructor(
    private actions: Actions,
    private dataPersistence: DataPersistence<CockpitDashboardStoreModelState>
  ) {}
}

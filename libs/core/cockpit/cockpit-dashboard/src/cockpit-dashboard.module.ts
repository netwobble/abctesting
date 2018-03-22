import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardContainerComponent } from './dashboard-container/dashboard-container.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { cockpitDashboardStoreModelReducer } from './+state/cockpit-dashboard-store-model.reducer';
import { cockpitDashboardStoreModelInitialState } from './+state/cockpit-dashboard-store-model.init';
import { CockpitDashboardStoreModelEffects } from './+state/cockpit-dashboard-store-model.effects';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
    ]),
    StoreModule.forFeature(
      'cockpitDashboardStoreModel',
      cockpitDashboardStoreModelReducer,
      { initialState: cockpitDashboardStoreModelInitialState }
    ),
    EffectsModule.forFeature([CockpitDashboardStoreModelEffects])
  ],
  declarations: [DashboardContainerComponent],
  providers: [CockpitDashboardStoreModelEffects]
})
export class CockpitDashboardModule {}

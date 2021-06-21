import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListComponent } from './components/list/list.component';
import { PromiseComponent } from './components/promise/promise.component';
import { OfFromComponent } from './components/list/of-from/of-from.component';
import { ToArrayComponent } from './components/list/to-array/to-array.component';
import { IntervalComponent } from './components/list/interval/interval.component';
import { ObservableComponent } from './components/observable/observable.component';
import { FromEventComponent } from './components/list/from-event/from-event.component';
import { MapOperatorComponent } from './components/list/map-operator/map-operator.component';
import { CustomObservablesComponent } from './components/list/custom-observables/custom-observables.component';
import { PluckOperatorComponent } from './components/list/pluck-operator/pluck-operator.component';
import { FilterOperatorComponent } from './components/list/filter-operator/filter-operator.component';
import { TapOperatorComponent } from './components/list/tap-operator/tap-operator.component';
import { TakeOperatorComponent } from './components/list/take-operator/take-operator.component';

const routes: Routes = [
  { path: 'promise', component: PromiseComponent },
  {
    path: 'observable',
    component: ObservableComponent,
    children: [
      { path: '', component: ListComponent },
      { path: 'of-from', component: OfFromComponent },
      { path: 'to-array', component: ToArrayComponent },
      { path: 'intervals', component: IntervalComponent },
      { path: 'from-event', component: FromEventComponent },
      { path: 'map-operator', component: MapOperatorComponent },
      { path: 'tap-operator', component: TapOperatorComponent },
      { path: 'take-operator', component: TakeOperatorComponent },
      { path: 'pluck-operator', component: PluckOperatorComponent },
      { path: 'filter-operator', component: FilterOperatorComponent },
      { path: 'custom-observable', component: CustomObservablesComponent },
    ],
  },
  {
    path: '**',
    redirectTo: 'observable',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

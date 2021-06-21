import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
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

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    HeaderComponent,
    FooterComponent,
    OfFromComponent,
    PromiseComponent,
    ToArrayComponent,
    IntervalComponent,
    FromEventComponent,
    ObservableComponent,
    MapOperatorComponent,
    CustomObservablesComponent,
    PluckOperatorComponent,
    FilterOperatorComponent,
    TapOperatorComponent,
    TakeOperatorComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

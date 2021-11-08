import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { NgSyzTourModule } from 'projects/ng-syz/src/public-api';

@NgModule({
  declarations: [AppComponent],
  imports: [
    // Angular
    AppRoutingModule,

    // Application
    CoreModule,
    NgSyzTourModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DtIconModule } from '@dynatrace/barista-components/icon';
import { DtTopBarNavigationModule} from "@dynatrace/barista-components/top-bar-navigation";
import { DtMenuModule } from "@dynatrace/barista-components/menu";
import { DtDrawerModule } from "@dynatrace/barista-components/drawer";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DtIconModule.forRoot({ svgIconLocation: '/assets/icons/{{name}}.svg' }),
    DtDrawerModule,
    DtTopBarNavigationModule,
    DtMenuModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

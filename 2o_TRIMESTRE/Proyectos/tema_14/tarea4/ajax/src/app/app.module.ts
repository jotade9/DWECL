import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BotonajaxComponent } from './botonajax/botonajax.component';

@NgModule({
  declarations: [
    AppComponent,
    BotonajaxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

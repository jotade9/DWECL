import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { ItemListComponent } from './components/item-list/item-list.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [AppComponent, ItemListComponent],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore())],
  bootstrap: [AppComponent]
})
export class AppModule {}

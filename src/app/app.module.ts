import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';
// Angular Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule, MatGridListModule } from '@angular/material';
import { MatCheckboxModule } from '@angular/material/checkbox';
// PageComponents
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatGridListModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ElModule } from 'element-angular'

import { AppComponent } from './app.component';
import { GreatAngularComponent } from './great-angular/great-angular.component';

@NgModule({
  declarations: [
    AppComponent,
    GreatAngularComponent
  ],
  imports: [
    BrowserModule,
    ElModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

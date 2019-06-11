import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ForumComponent } from './forum/forum.component';
//import {service1 } from './services/service1'

@NgModule({
  declarations: [
    AppComponent,
    ForumComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [//linstance est cree et on injecte le service
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

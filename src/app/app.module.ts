import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SimpleHttpComponentComponent } from './simple-http-component/simple-http-component.component';
import { MoreHttpRequestsComponentComponent } from './more-http-requests-component/more-http-requests-component.component';
import { YoutubesearchcomponentComponent } from './youtubesearchcomponent/youtubesearchcomponent.component';
import { SearchresultComponentComponent } from './searchresult-component/searchresult-component.component';
import { SearchboxcomponentComponent } from './searchboxcomponent/searchboxcomponent.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SimpleHttpComponentComponent,
    MoreHttpRequestsComponentComponent,
    YoutubesearchcomponentComponent,
    SearchresultComponentComponent,
    SearchboxcomponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import ButtonComponent from 'src/stories/button.component';
import HeaderComponent from 'src/stories/header.component';
import PageComponent from 'src/stories/page.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent, ButtonComponent, HeaderComponent, PageComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

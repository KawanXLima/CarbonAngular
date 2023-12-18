import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import {
  AccordionModule,
  ButtonModule,
  DropdownModule,
  IconModule,
  SearchModule,
  UIShellModule,
  ThemeModule,
  NotificationModule,
} from 'carbon-components-angular';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UIShellModule,
    IconModule,
    SearchModule,
    ButtonModule,
    ThemeModule,
    DropdownModule,
    AccordionModule,
    NotificationModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

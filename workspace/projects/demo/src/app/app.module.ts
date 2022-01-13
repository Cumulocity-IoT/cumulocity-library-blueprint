import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {
  CoreModule,
  BootstrapComponent,
  CommonModule,
} from '@c8y/ngx-components';
import { C8yUtilsDemoModule } from './c8y-utils-demo/c8y-utils-demo.module';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    CommonModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    CoreModule.forRoot(),

    C8yUtilsDemoModule
  ],
  providers: [],
  bootstrap: [BootstrapComponent],
})
export class AppModule {}

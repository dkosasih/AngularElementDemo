import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SubscribeComponent } from './subscribe-component/subscribe.component';

@NgModule({
  declarations: [
    AppComponent,
    SubscribeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  entryComponents: [SubscribeComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

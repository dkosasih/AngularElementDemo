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
  providers: []
})
export class AppModule {
  constructor(public injector: Injector) { }

  ngDoBootstrap() {
    const renderedEl = createCustomElement(SubscribeComponent, { injector: this.injector });

    customElements.define('subscribe-me', renderedEl);

  }
}

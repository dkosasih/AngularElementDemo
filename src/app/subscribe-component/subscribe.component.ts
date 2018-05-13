import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AbcService } from '../some-service/return-abc.service';

@Component({
  selector: 'subscribe-me',
  templateUrl: 'subscribe.component.html',
  styleUrls: ['./subscribe.component.scss'],
  encapsulation: ViewEncapsulation.Native
})

export class SubscribeComponent implements OnInit {

  registeredUser: string;

  constructor(public abc: AbcService){}

  ngOnInit() { }

  ngOnSubmit(form: any) {
    if (form.valid) {
      console.log(this.abc.print());
      this.registeredUser = form.value.email;
    }

  }
}

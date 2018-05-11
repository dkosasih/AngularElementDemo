import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'subscribe-me',
  templateUrl: 'subscribe.component.html',
  styleUrls: ['./subscribe.component.scss']
})

export class SubscribeComponent implements OnInit {

  registeredUser: string;

  ngOnInit() { }

  ngOnSubmit(form: any) {
    console.log(form.valid);
    if (form.valid) {
      this.registeredUser = form.value.email;
    }

  }
}

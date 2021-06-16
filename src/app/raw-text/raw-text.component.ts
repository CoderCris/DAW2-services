import { Component, OnInit } from '@angular/core';
import { ComunicationService } from '../comunication.service';

@Component({
  selector: 'app-raw-text',
  templateUrl: './raw-text.component.html',
  styleUrls: ['./raw-text.component.css']
})
export class RawTextComponent implements OnInit {

  message: string;


  constructor(private comunication: ComunicationService) { }

  ngOnInit(): void {
    this.comunication.sendMessageObservable.subscribe(message => {
      this.message = message;
    });
  }

  sendText(message: string) {
    this.comunication.sendMessage(message);
  }

}

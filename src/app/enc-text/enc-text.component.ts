import { Component, OnInit } from '@angular/core';
import { ComunicationService } from '../comunication.service';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-enc-text',
  templateUrl: './enc-text.component.html',
  styleUrls: ['./enc-text.component.css']
})
export class EncTextComponent implements OnInit {

  message: any;
  message_hex: any;
  message_encryption: any;
  message_decryption: string;
  password: string;
  password_hex: string;

  constructor(public comunication: ComunicationService) { }

  ngOnInit(): void {
  }

  encryptMessage() {
    this.message_hex = CryptoJS.enc.Hex.parse(this.comunication.message);
    this.message_encryption = CryptoJS.AES.encrypt(this.message_hex, this.password.toString());
    this.message = this.message_encryption.toString();
  }

  decryptMessage() {
    //console.log(AES.decrypt(this.message, this.password).toString());
    this.message_decryption = CryptoJS.AES.decrypt(this.message, this.password.trim()).toString();
    this.comunication.sendMessage(this.message_decryption);
  }

}

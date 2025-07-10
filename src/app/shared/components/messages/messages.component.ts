import { Component } from '@angular/core';
import { MessageService } from 'src/app/core/service/heroes/messages/messages.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent {
  constructor(public messageService: MessageService) {}
}

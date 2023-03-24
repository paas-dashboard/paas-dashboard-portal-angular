import { Component } from '@angular/core';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.scss']
})
export class ChatsComponent {
  newMessage = '';

  chatMessages: string[] = [];

  sendMessage() {
    if (this.newMessage.trim()) {
      this.chatMessages.push(this.newMessage.trim());
      this.newMessage = '';
    }
  }
}

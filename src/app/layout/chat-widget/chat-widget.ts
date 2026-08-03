import { Component } from '@angular/core';

@Component({
  selector: 'app-chat-widget',
  imports: [],
  templateUrl: './chat-widget.html',
  styleUrl: './chat-widget.css',
})
export class ChatWidget {
  isOpen = false;

  whatsappUrl = 'https://wa.me/+380502933075';
  telegramUrl = 'https://t.me/+380502933075';

  toggle(): void {
    this.isOpen = !this.isOpen;
  }
}

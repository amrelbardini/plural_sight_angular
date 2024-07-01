import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessagesService } from '../../services/messages.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class MessageComponent implements OnInit {
  constructor(private router: Router, private message: MessagesService) {}

  ngOnInit(): void {}
  closeMessage() :void{
    this.message.isShown = false;

    this.hideMessages();
  }

  hideMessages():void {
    this.router.navigate([
      {
        outlets: {
          popup: null,
        },
      },
    ]);
  }
}

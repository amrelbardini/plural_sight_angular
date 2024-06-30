import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessagesService } from '../../services/messages.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  constructor(private router:Router,private message:MessagesService) { }

  ngOnInit(): void {
  }
  closeMessage(){

    this.message.isShown=false;

    this.hideMessages();
    console.log("-----------HIDE MESSAGE FROM MESSAGE COMP----------------")

    console.log(this.message.isShown)
  }

  hideMessages(){
    this.router.navigate([{outlets:{
      popup:null
    }}])

  }



}

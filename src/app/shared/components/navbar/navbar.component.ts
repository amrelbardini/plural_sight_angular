import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessagesService } from 'src/app/features/messages/services/messages.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isMessagesShown:boolean=this.message.isShown;

  constructor(private router:Router,public message:MessagesService) { }

  ngOnInit(): void {
  }

  showMessages():void{
    this.message.isShown=true;
    this.isMessagesShown=this.message.isShown;

    this.router.navigate([{outlets:{
      popup:['messages']
    }}])
  }

  hideMessages(){
    this.message.isShown=false;
    this.isMessagesShown=this.message.isShown;
    this.router.navigate([{outlets:{
      popup:null
    }}])

  }

}

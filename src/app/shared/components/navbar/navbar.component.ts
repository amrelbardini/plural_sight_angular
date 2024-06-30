import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessagesService } from 'src/app/features/messages/services/messages.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

get isMessageDisplayed():boolean{
  return this.message.isShown;
}


  constructor(private router:Router,private message:MessagesService) { }

  ngOnInit(): void {
  }

  showMessages():void{
    this.message.isShown=true;


    this.router.navigate([{outlets:{
      popup:['messages']
    }}])
  }

  hideMessages(){
    this.message.isShown=false;

    this.router.navigate([{outlets:{
      popup:null
    }}])

  }

}

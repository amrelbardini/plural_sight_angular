import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subscription } from 'rxjs';
import { MessagesService } from 'src/app/features/messages/services/messages.service';
import { AuthenticationService } from 'src/app/features/pages/login/services/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit,OnDestroy {

get isMessageDisplayed():boolean{
  return this.message.isShown;
}

private loggedInSubscription!:Subscription;
private userInfoSubscription!:Subscription;

public isLoggedIn!:boolean;

public username:string="";


  constructor(private router:Router,private message:MessagesService,private authService:AuthenticationService) { }


  ngOnInit(): void {
    this.loggedInSubscription=this.authService.userLoggedIn.subscribe(state=>{
     this.isLoggedIn=state;
     this.username=this.authService.username;

    })

    this.userInfoSubscription=this.authService.userInfo.subscribe((info:any)=>{
      this.username= info['username'];
      console.log(info)
    })




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

  logout(){
    if(confirm("Are you sure you want to logout?")){
      window.location.reload();
    }

  }

ngOnDestroy(): void {
  this.loggedInSubscription.unsubscribe();
  this.userInfoSubscription.unsubscribe();
}

}

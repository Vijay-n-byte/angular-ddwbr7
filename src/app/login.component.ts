import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  simple=false;
  isvalid=false;
  op="modalbackground1";
  constructor() { }

  ngOnInit() {
  }
  counting=0;
  cou=0;
  colorchange="postive";
 binny ="simplilearn";
 changethevalue(op:string){
   console.log(op);
   if(op=="incre"){
    this.cou++;
  }
  else{
    this.cou--;
  }

   if(this.cou>0){
     this.colorchange="positive";
    }
    else{
      this.colorchange="negative";
     
    }

 }

 openmodal(){
   this.op="modalbackground";
 }
 closemodal(){
   this.op="modalbackground1";
 }
 submitvalue(n:NgForm){
   console.log(n.value);
 }
}
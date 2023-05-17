import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {
  @Output() changeto:EventEmitter<any>=new EventEmitter<any>(); 
  
  constructor() { }

  ngOnInit() {
  }
  // cou:number=0;
  clickeve(sam:string){
   
    this.changeto.emit(sam);
    // if(sam=="incre"){
    //   this.cou++;
    // }
    // else{
    //   this.cou--;
    // }
    // console.log(sam);
  }
}
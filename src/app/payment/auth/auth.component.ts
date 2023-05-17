import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  @Input() count:any;

  @Output() countChange:EventEmitter<number>=new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  clickeve(sam:string){
    if(sam=="incre"){
      this.count++;
    }
    else{
      this.count--;

    }
       this.countChange.emit(this.count);
  }

}
import { Component, Input, OnInit } from '@angular/core';
import { Button } from 'protractor';



@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {

  count:number=0;
  
  firstName:string="Rocky";
  userName:string="";
  constructor() { }

  ngOnInit() {
  }

  onClick(){

    let counts=this.count +=1;
    console.log(counts);
    
  
  }

  onKeyUp(value) {
    console.log('$event', value.target.value)
  }
  disable()
  {
    this.userName='';  
    console.log(`clear input`);
  }
}

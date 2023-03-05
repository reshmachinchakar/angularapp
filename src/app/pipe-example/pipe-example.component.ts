import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-example',
  templateUrl: './pipe-example.component.html',
  styleUrls: ['./pipe-example.component.css']
})
export class PipeExampleComponent implements OnInit {

  todaysdate=new Date();

  price:number=70000;
  countLength:number=500;

  employee = {
    id:1,
    empName:'Reshma'

  }
  constructor() { }

  ngOnInit() {
    console.log(this.todaysdate);
    
  }

}

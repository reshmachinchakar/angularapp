import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment-ng-style',
  templateUrl: './assignment-ng-style.component.html',
  styleUrls: ['./assignment-ng-style.component.css']
})
export class AssignmentNgStyleComponent implements OnInit {

  para:string="This is paragraph";
  constructor() { }

  ngOnInit() {
  }
  onclick(val)
  {
    console.log(this.para);
    
    

  }

}

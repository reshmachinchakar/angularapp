import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-assign-template-driven',
  templateUrl: './assign-template-driven.component.html',
  styleUrls: ['./assign-template-driven.component.css']
})
export class AssignTemplateDrivenComponent implements OnInit {

  city=['Kolhapur','Mumbai','Pandharpur'];

  constructor() { }

  ngOnInit() {
  }
  login(form:NgForm)
  {
    console.log("Form Submitted Successfully");
    
  }

}

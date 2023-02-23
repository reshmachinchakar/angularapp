import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-assign-reactive-form',
  templateUrl: './assign-reactive-form.component.html',
  styleUrls: ['./assign-reactive-form.component.css']
})
export class AssignReactiveFormComponent implements OnInit {

  myReactiveForm: FormGroup;
  isSubmitted=false;

  constructor() { 
    this.createForm();
  }

  ngOnInit() {
  }
  createForm()
  {
    this.myReactiveForm = new FormGroup({
      'userDetails':new FormGroup({ 'Password' : new FormControl(null,[Validators.required,Validators.minLength(3),Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,12}$')]),
      'email': new FormControl(null,[Validators.required,Validators.email]),}), 
      'courses':new FormControl('Advance'),
      'date':new FormControl(null,Validators.required),
    });
  }
  
  OnSubmit() {

    this.isSubmitted=true;
    console.log('My ReactiveForm', this.myReactiveForm.value);
   
  }



}

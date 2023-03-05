import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-react-assign2',
  templateUrl: './react-assign2.component.html',
  styleUrls: ['./react-assign2.component.css']
})
export class ReactAssign2Component implements OnInit {

  userDetailsForm :FormGroup;

  accountDetailsForm:FormGroup;

  constructor() {
    this.createForm();
    this.accounts();
   }

  ngOnInit() {
  }
  createForm()
  {
    this.userDetailsForm=new FormGroup({
     'fullname':new FormControl('Homero Simpson',Validators.required),
     'Birthdate':new FormControl('',Validators.required),
     'gender':new FormControl('female',Validators.required),
     'country':new FormControl(null,Validators.required),
     'phone':new FormControl(null,Validators.required),
     'bio': new FormControl(["Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",Validators.maxLength(256)]),


    });

  }

  accounts()
  {
    this.accountDetailsForm=new FormGroup({
    email: new FormControl('', Validators.compose([
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
    ])),
    
  });
  
  }



  onSubmitUserDetails()
  {
  
      
  }

}

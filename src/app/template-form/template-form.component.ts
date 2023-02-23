import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
isSubmitted=false;
isEmailValid=false;

// passwordsMatching = false;
// isConfirmPasswordDirty = false;
// confirmPasswordClass = 'form-control';

formData  = {
  email: '',
  password: '',
  course: '',
  gender: ''
}


defaultVal="Angular";
defaultGender='Male';

course=['Angular','Javascript','Typescript'];
  gender=[
    {
      id:'1', value:'Male'

    },
    {
      id:'2', value:'FeMale'
    }
  ]
  email='';
  constructor() { }

  ngOnInit() {
  }
  login(form: NgForm) {
    this.isSubmitted=true;
    console.log(form);
    
 this.formData.email = form.value.email;
 this.formData.password = form.value.password;
 this.formData.course = form.value.course;
 this.formData.gender = form.value.gender;
//form.reset();

form.controls['course'].setValue('Angular');
form.controls['gender'].patchValue('Male');
      }

      checkemail(email){
        console.log(email.value);
    
        const domain = email.value.substring(email.value.lastIndexOf('@') + 1); // gmail.com
        
        if(domain.toLowerCase() === 'codemindtechnology.com') 
        {
          this.isEmailValid = false;
        } else {
          this.isEmailValid = true;
        }
      }


      // checkPasswords(password: string, confirmPass: string) {
      //   this.isConfirmPasswordDirty = true;
      //   if (password == confirmPass) {
      //     this.passwordsMatching = true;
      //     this.confirmPasswordClass = 'form-control is-valid';
      //   } else {
      //     this.passwordsMatching = false;
      //     this.confirmPasswordClass = 'form-control is-invalid';
      //   }
      // }
    }



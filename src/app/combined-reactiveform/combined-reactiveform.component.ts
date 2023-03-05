import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-combined-reactiveform',
  templateUrl: './combined-reactiveform.component.html',
  styleUrls: ['./combined-reactiveform.component.css']
})
export class CombinedReactiveformComponent implements OnInit {
  userDetailsForm: FormGroup;
  accountDetailsForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.userDetailsForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      birthdate: ['', Validators.required],
      gender: ['', Validators.required],
      country: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      bio: ['']
  })


  
  // Initialize account details form
  this.accountDetailsForm = this.formBuilder.group({
    userName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required],
    terms: [false, Validators.requiredTrue]
  }, {
    validator: this.passwordsMatchValidator
  });
  
}
onSubmit(): void {
  // TODO: Implement submit logic here
  console.log(this.userDetailsForm.value);
  console.log(this.accountDetailsForm.value);
}

passwordsMatchValidator(formGroup: FormGroup): any {
  const passwordControl = formGroup.get('password');
  const confirmPasswordControl = formGroup.get('confirmPassword');

  if (passwordControl.value === confirmPasswordControl.value) {
    confirmPasswordControl.setErrors(null);
  } else {
    confirmPasswordControl.setErrors({ 'passwordMismatch': true });
  }
}

passwordsDoNotMatch(): boolean {
  const passwordControl = this.accountDetailsForm.get('password');
  const confirmPasswordControl = this.accountDetailsForm.get('confirmPassword');

  return passwordControl.value !== confirmPasswordControl.value &&
    confirmPasswordControl.dirty;
}






}

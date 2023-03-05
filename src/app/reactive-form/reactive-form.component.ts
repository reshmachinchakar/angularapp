import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { MyserviceService } from '../Services/myservice.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  age;
  showAge;
  
  myReactiveForm: FormGroup;

  isSubmitted=false;

notAllowedNames=['Harry','Jack'];


 ngOnInit() {

  




//setValue-to add values to all controls dynamically

//PatchValue-to add only those control which has requiredes or you want
 

    // setTimeout(() => {
    //   this.myReactiveForm.setValue({
    //     'userDetails' : {
    //       'username': 'Codemind123',
    //       'email': 'codemind@gamil.com'
    //     },
    //     'courses': 'HTML',
    //     'Gender':'Female',
    //     'skills': ['angular']
    //   })
    // })


// setTimeout(() => {
//   this.myReactiveForm.patchValue({
//     'userDeatils' : {
//              'username': 'Codemind123',
//             'email': 'codemind@gamil.com'
//            }
//   })
// }, 5000)
  }
  constructor(private _fb:FormBuilder) { 
    this.createForm();
  }
  createForm()
  {
    // this.myReactiveForm = new FormGroup({

      //******Set Default Value//**** */

      // 'username' : new FormControl('codemind'),
      // 'email': new FormControl('codemindtechnology@gmail.com'),
      // 'courses':new FormControl('Angular'),
      // 'Gender':new FormControl('Female')


      //****Apply Validations on email */
      // 'username' : new FormControl(null),
      // 'email': new FormControl(null,[Validators.required,Validators.email]),
      // 'courses':new FormControl('Angular'),
      // 'Gender':new FormControl('Female')

      
      //***Using Grouping-Nested FormControls  */
    //   'userDetails':new FormGroup({ 'username' : new FormControl(null,[Validators.required,this.NaNames.bind(this)]),
    //   'email': new FormControl(null,[Validators.required,Validators.email],this.NaEmails),}),
     
    //   'courses':new FormControl(null),
    //   'Gender':new FormControl(null),

    //   //to add FormArray-to add values dynamically
    //   'skills': new FormArray([
    //     new FormControl(null, Validators.required)
    //   ])


    // });


    this.myReactiveForm = this._fb.group({
      userDetails: this._fb.group({
        username: ['', [Validators.required, this.NaNames.bind(this) ]],
        email: ['', [Validators.required, Validators.email], this.NaEmails]
      }),
      courses: ['Angular'],
      Gender:['Female'],
      skills: this._fb.array([])
     });

}



  OnSubmit() {

    this.isSubmitted=true;
    alert('method called');
    console.log('My ReactiveForm', this.myReactiveForm);
    
   
  }


  OnAddSkills() {
    (<FormArray> this.myReactiveForm.get('skills')).push(new FormControl(null, Validators.required));
  }

  NaNames(control:FormControl)
  {
      if(this.notAllowedNames.indexOf(control.value) !=-1)
      {
        return {'NamesNotAllowed':true};
      }
      else
      {
        return null;
      }
  }

  //to handle Async Operation using promises

  NaEmails(control: FormControl) : Promise<any> | Observable<any> 
  {
    const myResponse = new Promise<any> ((resolve, reject) => {
      setTimeout(() => {
        if(control.value == 'codemindtechnology@gmail.com') {
          resolve({'emailNotAllowed': true})
        } else {
          resolve(null)
        }
      }, 3000)
    })
    return myResponse;
  }
  
  ageCalculate()
  {
    //Using DI-Dependancy Injection we cannot create objects everytime(you can pass object to constructor and used only objectName)
    let myservices= new MyserviceService();
    this.showAge=myservices.ageCalculate(this.age);
  }
  

}

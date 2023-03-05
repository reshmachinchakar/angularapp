import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
   age;
  showAge;

  product=[

    {name:'Laptop',id:'101'},
    {name:'TV',id:'102'},
    {name:'Mobile',id:'103'}

  ]

  constructor() { }
  ageCalculate(age:number):number
  {
    
      const convertAge=new Date(this.age);
      const timeDiff=Math.abs(Date.now() - convertAge.getTime());
      return this.showAge=Math.floor(timeDiff/(1000 * 3600 * 24)/365);
    
  }
  disp()
  {
    alert('service method called');
  }
}

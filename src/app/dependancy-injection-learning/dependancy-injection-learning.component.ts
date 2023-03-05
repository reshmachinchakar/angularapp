import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../Services/myservice.service';

@Component({
  selector: 'app-dependancy-injection-learning',
  templateUrl: './dependancy-injection-learning.component.html',
  styleUrls: ['./dependancy-injection-learning.component.css']
})
export class DependancyInjectionLearningComponent implements OnInit {
  age;
  
  constructor(private objService:MyserviceService) { }

  ngOnInit() {
    this.objService.ageCalculate(this.age);
    this.objService.disp();
  }

}

import { Component, Input,Output,EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {

  @Input() child: string;
  @Output() fromChild : EventEmitter<string> = new EventEmitter<string>(); // (fromChild)
  

  lastname: string = 'chinchakar';
  constructor() { }

  ngOnInit() {

    console.log(this.child);
  }
  sendToParent()
  {

    this.fromChild.emit(this.lastname);

  }

}

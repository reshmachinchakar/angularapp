import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-swtich',
  templateUrl: './ng-swtich.component.html',
  styleUrls: ['./ng-swtich.component.css']
})
export class NgSwtichComponent implements OnInit {
  selectedProduct: string;
courses : any[] = [
{
  id:1,
  desc:"Angular core deep Dive",

  iconURL :"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png",
  category: "Intermidiate"
},
{
  id:2,
  desc:"JS",
  iconURL :"https://static.javatpoint.com/images/javascript/javascript_logo.png",
  category: "Advanced"
},
{
  id: 3,
  desc: ' Typescript',
  iconURL: "https://devblogs.microsoft.com/typescript/wp-content/uploads/sites/11/2018/08/typescriptfeature.png",
  catagory: 'ADVANCED'
},
{
  id: 4,
  desc: ' Html',
  iconURL: "https://devblogs.microsoft.com/typescript/wp-content/uploads/sites/11/2018/08/typescriptfeature.png",
}

]



  constructor() { }

  ngOnInit() {
  }
  getProductValue(val) {
    console.log('seleced value from dropdown', val.target.value);
    let selectedValue = val.target.value;
    this.selectedProduct = selectedValue;
    }

}

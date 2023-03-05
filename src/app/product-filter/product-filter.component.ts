import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent implements OnInit {

  search='';
  productArr:any[]=[
    {
    sno:1,
    sname:'Mobile',
    price:20000,
    availability:'Available'
    },
   {
    sno:2,
    sname:'TV',
    price:40000,
    availability:'Available'

   },
   {
    sno:3,
    sname:'Laptop',
    price:60000,
    availability:'Not Available'

   },
   {
    sno:4,
    sname:'Washing Machine',
    price:60000,
    availability:'Available'

   }
];
  constructor() { }

  ngOnInit() {
  }

}

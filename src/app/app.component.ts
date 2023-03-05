import { Component, OnInit } from '@angular/core';
import { DemoService } from './Services/demo.service';
import { ForExService } from './Services/for-ex.service';
import { MyserviceService } from './Services/myservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angularapp';
  name='Reshma';

  parentTochild:string="This is Decorative Binding(I can pass parent to child data)";
  data={
   name:'Reshma',
   dept:'IT'

  }
  posts = [
    {
      title: 'Pam Tree',
      content: 'I love this tree'
    },
    {
      title: 'Mango Tree',
      content: 'I love this tree'
    }
  ]
  empcount;

  product={};

  users;

  show;

  searchName='';
  constructor( private myservice:MyserviceService,private demoservice:DemoService,private forexObj:ForExService)
  {
    this.getMethods();
  }

  showData;

  ngOnInit(): void {
    // throw new Error('Method not implemented.');

    this.product=this.myservice.product;
    // this.demoservice.getuser().subscribe(res=>{
    //   console.log('user api results',res);
    //   this.users=res;
    // }), err =>{
    //   console.log(err);
      
    // }
    this.forexObj.getusers().subscribe(result=>{
      console.log('api results',result);

      this.showData=result;
      
    }),err=>{
      console.log(err);
      
    }
  }

  getMethods(){
    this.empcount=1000;

  }
  testnew()
  {
    alert('event raised');
  }

  onParent(val)
  {
     console.log('value from child to parent',val)
  }


   // date=new Date();
   date=Date();

   img="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg";
}


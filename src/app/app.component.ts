import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
  constructor()
  {
    this.getMethods();

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


import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent implements OnInit {

  title:string="Best Movies of Bollywood";
  
  movies:Movie[]=[
 
    {title:'RRR',director:'reshma',cast:'amir',releaseDate:'2022'},
    {title:'Pathan',director:'vaishnavi',cast:'salman',releaseDate:'2020'},
    {title:'Master',director:'madhuri',cast:'neha',releaseDate:'2019'}

  ]

  favsong=['ved','bajirao','ramSita'];

  constructor() { }

  ngOnInit() {
  }

}

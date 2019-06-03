import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-geographie',
  templateUrl: './geographie.component.html',
  styleUrls: ['./geographie.component.css']
})
export class GeographieComponent implements OnInit {
  afficher:boolean = false;
  constructor() { }
  Regions=[
    {id:'1', name:'Dakar'},
    {id:'2', name:'Thies'},
    {id:'3', name:'Saint Louis'},
    {id:'4', name:'Louga'},
    {id:'5', name:'Diourbel'},
    {id:'6', name:'Tamba'},
    {id:'7', name:'Kaolack'},
    {id:'8', name:'Kolda'},
    {id:'9', name:'Saint Louis'},
    {id:'1o', name:'Zinguichor'},
    {id:'11', name:'Fouta'},
    {id:'12', name:'Matam'},
    {id:'13', name:'DakarKaffrine'},
    {id:'14', name:'Sedhiou'},
  ]


  ngOnInit() {
    console.log(this.Regions[0]);
    

  }

AfficheRegion()
{ 
  if(this.afficher==false){
    return this.afficher = true;
  }else
  {
    return this.afficher = false;
  }

}
  
}

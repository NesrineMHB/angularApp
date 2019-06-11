import { Component, Input, OnInit } from '@angular/core';
import { log } from 'util';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {
//let listUsers[]
  constructor() { }
  users=[]
  info={
      nom: "",
      prenom : "",
      ville :"",
      date : "",
  }
  onAfficher(){
    for(let i=0;i<this.users.length;i++){
     console.log(this.users[i])}
    
  }
  onValider(){
    this.users.push(this.info)
    console.log("user ajouté")
  }

  ngOnInit() {
  }
  
  
}

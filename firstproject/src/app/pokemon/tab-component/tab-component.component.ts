import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'menu-tab-component',
  templateUrl: './tab-component.component.html',
  styleUrls: ['./tab-component.component.css']
})
export class TabComponentComponent implements OnInit {

  constructor() { }
  linksGenerations;
  customClass = 'customClass';
  
  ngOnInit() {
    this.linksGenerations = this.getAllGenerationsLinks(8);
     
  }


  getAllGenerationsLinks(noGenerations){
    let links= {};
    let all = [];
    for(let i=1;i<=noGenerations;i++){
        links["img"]=`<img src="">`;
        links["name"]=`Generation ${i}`;
        all.push (links);
    }
    return all;
  }
}

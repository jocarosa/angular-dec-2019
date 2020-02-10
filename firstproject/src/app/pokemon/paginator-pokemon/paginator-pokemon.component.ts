import { Component, OnInit,Input, Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-paginator-pokemon',
  templateUrl: './paginator-pokemon.component.html',
  styleUrls: ['./paginator-pokemon.component.css']
})
export class PaginatorPokemonComponent implements OnInit {
  @Output() next = new EventEmitter<any>();
  @Input() generac:any; 

  totalItems;
  constructor() {} 

  currentPage=1;

  ngOnInit() {
   // this.currentPage=this.generac.currentPage;
    //this.totalItems = this.generac.end - this.generac.start;
  }
  
  pageChanged(e){
    if(this.generac.tab){
      e.page=1;
      this.currentPage=1;  
    }
    
      let offset = e.page * e.itemsPerPage +this.generac.start - e.itemsPerPage;
      this.next.emit({start:offset,end:this.generac.end,generation:this.generac.generation});

      this.generac.tab=false;
  }
   
  
 
}

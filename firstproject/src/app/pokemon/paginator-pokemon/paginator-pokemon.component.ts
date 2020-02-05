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
    //this.totalItems = this.generac.end - this.generac.start;
  }
  
  pageChanged(e){
    let offset = e.page * 10 +this.generac.start - 10;
    this.next.emit({start:offset,end:this.generac.end});
  }
 
}

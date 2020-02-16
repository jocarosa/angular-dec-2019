import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'paginator-cmp',
  templateUrl: './paginator-cmp.html',
  styleUrls: ['./paginator-cmp.css']
})
export class PaginatorPokemonComponent implements OnInit {
  @Output() next = new EventEmitter<any>();
  @Input() generac: any;

  totalItems;
  constructor() { }

  ngOnInit() { }

  pageChanged(e) {

    let offset = e.page * e.itemsPerPage + this.generac.start - e.itemsPerPage;
    this.next.emit(
      { start: offset, 
        end: this.generac.end, 
        generation: this.generac.generation 
      }
    );

    this.generac.tab = false;
  }



}

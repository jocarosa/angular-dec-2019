import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { CarouselModule } from 'ngx-bootstrap';

import { PokemonComponent } from '@pokemon/pokemon.component';
import { TabComponentComponent } from '@pokemon/tab-component/tab-component.component'
import { PaginatorPokemonComponent } from '@pokemon/paginator-pokemon/paginator-pokemon.component'
import {EvolutionModalComponent} from '@pokemon/evolution-modal/evolution-modal.component';

import { PaginationModule } from 'ngx-bootstrap/pagination';

const routes: Routes = [
    { 
        path: '', component: PokemonComponent,
        children:[
            {
                path:"generation/:id",component:PokemonComponent
            }
        ]
 }
];

@NgModule({
    declarations: [
        PokemonComponent ,
        TabComponentComponent ,
        PaginatorPokemonComponent,
        EvolutionModalComponent
     ],
    imports: [
        CommonModule,
        CarouselModule.forRoot(),
        PaginationModule.forRoot(),
        RouterModule.forChild(routes),
        FormsModule 
               
    ],
    exports:[RouterModule],
    bootstrap: [PokemonComponent],
    providers:[]
  })
  export class PokemonModule { }
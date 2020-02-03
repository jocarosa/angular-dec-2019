import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { CarouselModule } from 'ngx-bootstrap';

import { PokemonComponent } from '@pokemon/pokemon.component';
import { TabComponentComponent } from '@pokemon/tab-component/tab-component.component'


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
        TabComponentComponent  
     ],
    imports: [
        CommonModule,
        CarouselModule.forRoot(),
        RouterModule.forChild(routes) 
               
    ],
    exports:[RouterModule],
    bootstrap: [PokemonComponent],
    providers:[]
  })
  export class PokemonModule { }
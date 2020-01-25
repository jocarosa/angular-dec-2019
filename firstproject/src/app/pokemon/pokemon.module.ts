import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { CarouselModule } from 'ngx-bootstrap';


import { PokemonComponent } from '@pokemon/pokemon.component';
import { TabComponentComponent } from '@pokemon/tab-component/tab-component.component'
import { NgScrollbarModule } from 'ngx-scrollbar';

const routes: Routes = [{ path: '', component: PokemonComponent }];

@NgModule({
    declarations: [
        PokemonComponent ,
        TabComponentComponent  
     ],
    imports: [
        CommonModule,
        NgScrollbarModule,
        CarouselModule.forRoot(),
        RouterModule.forChild(routes) 
               
    ],
    exports:[RouterModule],
    bootstrap: [PokemonComponent]
  })
  export class PokemonModule { }
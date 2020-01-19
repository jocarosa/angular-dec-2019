import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { CarouselModule } from 'ngx-bootstrap';
import { AccordionModule } from 'ngx-bootstrap/accordion';

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
        FormsModule,
        CarouselModule.forRoot(),
        AccordionModule.forRoot(),
        RouterModule.forChild(routes) ,
        NgScrollbarModule       
    ],
    exports:[RouterModule],
    bootstrap: [PokemonComponent]
  })
  export class PokemonModule { }
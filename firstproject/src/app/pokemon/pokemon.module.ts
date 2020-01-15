import { PokemonComponent } from './pokemon.component';
import {CarouselModule} from 'ngx-bootstrap';

import { NgModule } from '@angular/core';


import {CommonModule} from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

const routes: Routes = [{ path: '', component: PokemonComponent }];

@NgModule({
    declarations: [
        PokemonComponent
    ],
    imports: [
        CommonModule,
        NgbModule,
        CarouselModule.forRoot(),
        RouterModule.forChild(routes),
        
    ],
    exports:[RouterModule],
    bootstrap: [PokemonComponent]
  })
  export class PokemonModule { }
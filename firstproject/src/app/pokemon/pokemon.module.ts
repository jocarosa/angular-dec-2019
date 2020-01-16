import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {CarouselModule} from 'ngx-bootstrap';

import { PokemonComponent } from './pokemon.component';

const routes: Routes = [{ path: '', component: PokemonComponent }];

@NgModule({
    declarations: [
        PokemonComponent
    ],
    imports: [
        CommonModule,
        CarouselModule.forRoot(),
        RouterModule.forChild(routes),
        
    ],
    exports:[RouterModule],
    bootstrap: [PokemonComponent]
  })
  export class PokemonModule { }
import { PokemonComponent } from './pokemon.component';
import { NgModule } from '@angular/core';


import {CommonModule} from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: '', component: PokemonComponent }];

@NgModule({
    declarations: [
        PokemonComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        
    ],
    exports:[RouterModule],
    bootstrap: [PokemonComponent]
  })
  export class PokemonModule { }
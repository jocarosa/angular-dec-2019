import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { PokemonComponent } from '@pokemon/pokemon.cmp';
import { TabComponentComponent } from '@pokemon/menu-generation-cmp/menu-generation-cmp'
import { PaginatorPokemonComponent } from '@pokemon/paginator-cmp/paginator-cmp'
import { EvolutionModalComponent } from '@pokemon/modal-evolution-cmp/modal-evolution-cmp';

import { PaginationModule } from 'ngx-bootstrap/pagination';

const routes: Routes = [
    {
        path: '', component: PokemonComponent,
        children: [
            {
                path: "generation/:id", component: PokemonComponent
            }
        ]
    }
];

@NgModule({
    declarations: [
        PokemonComponent,
        TabComponentComponent,
        PaginatorPokemonComponent,
        EvolutionModalComponent
    ],
    imports: [
        CommonModule,
        PaginationModule.forRoot(),
        RouterModule.forChild(routes),
        FormsModule

    ],
    exports: [RouterModule],
    bootstrap: [PokemonComponent],
    providers: []
})
export class PokemonModule { }
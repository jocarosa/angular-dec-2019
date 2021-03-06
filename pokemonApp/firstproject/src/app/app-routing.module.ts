import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonModule } from '@pokemon/pokemon.module';

const routes: Routes = [
{ path:'pokemon',
loadChildren:()=>import('./pokemon/pokemon.module')
.then(m=>m.PokemonModule)
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

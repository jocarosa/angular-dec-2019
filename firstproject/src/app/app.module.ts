import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from '@app/app-routing.module';
import { AppComponent } from '@app/app.component';
import { PokemonService } from '@pokemon/pokemon.service';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { ModalModule } from 'ngx-bootstrap/modal';
 
@NgModule({
  declarations: [
    AppComponent        
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    PaginationModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [PokemonService,HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }

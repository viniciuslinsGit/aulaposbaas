import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarComponent } from './disciplina/listar/listar.component';
import { AlterarComponent } from './disciplina/alterar/alterar.component';
import { DeletarComponent } from './disciplina/deletar/deletar.component';
import { CadastrarComponent } from './disciplina/cadastrar/cadastrar.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    AlterarComponent,
    DeletarComponent,
    CadastrarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

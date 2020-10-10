import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlterarComponent } from './disciplina/alterar/alterar.component';
import { CadastrarComponent } from './disciplina/cadastrar/cadastrar.component';
import { DeletarComponent } from './disciplina/deletar/deletar.component';
import { ListarComponent } from './disciplina/listar/listar.component';


const routes: Routes = [
  {
    path: 'cadastrar',
    component: CadastrarComponent
  },
  {
    path: 'listar',
    component: ListarComponent
  },
  {
    path: 'alterar',
    component: AlterarComponent
  },
  {
    path: 'deletar',
    component: DeletarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

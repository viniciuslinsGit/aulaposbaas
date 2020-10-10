import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './disciplina/cadastrar/cadastrar.component';
import { ListarComponent } from './disciplina/listar/listar.component';


const routes: Routes = [
  {
    path: 'cadastrar',
    component: CadastrarComponent
  },
  {
    path: 'listar',
    component: ListarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

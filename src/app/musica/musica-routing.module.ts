import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MusicaEditarComponent } from './musica-editar/musica-editar.component';
import { MusicaListaComponent } from './musica-lista/musica-lista.component';

const routes: Routes = [
  {
    path: '',
    component: MusicaListaComponent
  },
  {
    path: 'novo',
    component: MusicaEditarComponent
  },
   {
    path: ':id',
    component: MusicaEditarComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MusicaRoutingModule { }

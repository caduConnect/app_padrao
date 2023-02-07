import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MusicaModule } from './musica/musica.module';

// Aqui definimos as rotas principais
const routes: Routes = [
//Aqui é declarado que se não especificada a rota, 
//é para o usuário ser redirecionado para a página "home"
  {
    path: '',
    redirectTo: 'musica',
    pathMatch: 'full'

  },
 // Aqui está declarando a página home e importando seu componente
 {
  path: 'musica',
  loadChildren: () => MusicaModule,

},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MusicaRoutingModule } from './musica-routing.module';
import { MusicaEditarComponent } from './musica-editar/musica-editar.component';
import { MusicaListaComponent } from './musica-lista/musica-lista.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [MusicaEditarComponent, MusicaListaComponent],
  imports: [
    CommonModule,
    MusicaRoutingModule,
    FormsModule,
  ]
})
export class MusicaModule { }

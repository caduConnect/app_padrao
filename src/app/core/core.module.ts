import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MusicaService } from '../musica/musica.service';
import { MenuComponent } from './menu/menu.component';



@NgModule({
  //Em declaratios é informado todos os componentes na mesma pasta.
  declarations: [
    MenuComponent
  ],
  //os exports são declarados para serem usados em outros componentes.
  exports:[
    MenuComponent
  ],
  //Aqui vão os imports para os componentes na mesma pasta.
  imports: [
    CommonModule
  ],
  //Providers do CORE é aonde TODOS as services são declaradas.
  providers:[
    MusicaService
  ]
})
export class CoreModule { }

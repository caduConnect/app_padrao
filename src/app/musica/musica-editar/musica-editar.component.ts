import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Musica } from '../musica';
import { MusicaService } from '../musica.service';

@Component({
  selector: 'app-musica-editar',
  templateUrl: './musica-editar.component.html',
  styleUrls: ['./musica-editar.component.css']
})
export class MusicaEditarComponent implements OnInit {
  title: string = 'Adicionar Música';

  musica = new Musica();
  musicas!: Observable<Musica[]>;

  constructor(
    private musicaService: MusicaService,
    private route: ActivatedRoute
  ) {
    this.musicas = this.musicaService.listar();
  }

  ngOnInit(): void {
    // id na url
    const id: number = this.route.snapshot.params['id'];

    if (id) {
      this.title = 'Alterar música';
      this.getMusica(id);
    }
  }

  getMusica(id: number) {
    this.musicaService.getById(id).subscribe((response) => {
      if (response == null) {
        this.title = 'Erro ao encontrar item';
      }
      this.musica = { ...response };
    });
  }

  getAlterar() {
    this.musicaService.getAlterar(this.musica.id, this.musica).subscribe(
      (response) => {
        setTimeout(() => {
          window.history.back();
        }, 1000);
      })
  }

  getIncluir() {
    this.musicaService.getIncluir(this.musica).subscribe(
      (response) => {
        setTimeout(() => {
          window.history.back();
        }, 1000);
      }
    )
  }

  getIsEditando() {
    return Boolean(this.musica.id);
  }

  salvar() {
    if (this.getIsEditando()) {
      this.getAlterar();
    } else {
      this.getIncluir();
    }
  }
}
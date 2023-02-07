import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Musica } from '../musica';
import { MusicaService } from '../musica.service';

@Component({
  selector: 'app-musica-lista',
  templateUrl: './musica-lista.component.html',
  styleUrls: ['./musica-lista.component.css']
})
export class MusicaListaComponent implements OnInit {
  musica = new Musica
  musicas = new Array<Musica>()

  constructor(
    private musicaService: MusicaService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getItens()
  }

  getItens() {
    this.musicaService.listar().subscribe(
      (response) => {
        if (response) {
          this.musicas = [...response];
        }
      })
  }

  onEditar(id: number) {
    this.router.navigate([`/musica/${id}`])
  }

  onDelete(id: number) {
    this.musicaService.getDelete(id).subscribe(
      () => {
        setTimeout(() => {
          return window.location.reload();
        }, 1000)
      })
  }
}

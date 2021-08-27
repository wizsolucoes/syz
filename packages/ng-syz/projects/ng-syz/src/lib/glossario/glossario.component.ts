import { Component, Input, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'ng-syz-glossario',
  templateUrl: './glossario.component.html',
  styleUrls: ['./glossario.component.scss'],
})
export class NgSyzGlossarioComponent implements OnInit {
  @Input() listaGlossario: any[];
  campoBusca: string;
  campoBusca$ = new Subject<string>();
  loadingComponent: boolean;
  carregarMaisVisivel: boolean;

  constructor( ) {
    this.campoBusca = '';
    this.loadingComponent = true;
    this.carregarMaisVisivel = true;

    this.campoBusca$
      .pipe(debounceTime(1000), distinctUntilChanged())
      .subscribe((model) => {
        this.aplicarFiltroTexto(model);
      });
  }

  ngOnInit(): void {
    this.carregarLista(null, true);
  }

  aplicarFiltroTexto(event: string) {
    this.campoBusca = event;
    this.carregarLista(true, true);
  }

  carregarLista(filtroAplicado?: boolean, loading?: boolean) {
    this.carregarMaisVisivel = true;

    if (loading) {
      this.loadingComponent = true;
    }
  }

  carregarMais() {
    this.carregarLista();
  }

  openTab(id: number) {
    this.listaGlossario.forEach((glossario) => {
      if (glossario.id === id) {
        glossario.opened = !glossario.opened;
      }
    });
  }
}

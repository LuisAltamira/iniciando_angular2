import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent implements OnInit {
  public title:string;
  public favoritos: Array<string>;
  public favoritosVisibles: boolean;

  constructor() {
    this.title = 'Listado de marcadores';
    this.favoritos = ['newemage', 'google', 'imss'];
    this.favoritosVisibles = true;
  }

  showFavoritos() {
    this.favoritosVisibles = true;
  }

  hideFavoritos() {
    this.favoritosVisibles = false;
  }

  ngOnInit() {
  }

}

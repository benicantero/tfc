import { Articulo } from './../modelos/articulo';
import { ArticulosService } from './../servicios/articulos.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

  articulo: Articulo = {descripcion: '', categoria: '', tipo: '', cantidad: null};


  constructor(
    private router: Router,
    private articuloFirestore: ArticulosService) { }


  ngOnInit() {
  }

nuevoArticulo() {
  let articulo: Articulo = {
      descripcion : this.articulo.descripcion,
      categoria : this.articulo.categoria,
      tipo: this.articulo.tipo,
      cantidad: this.articulo.cantidad
    };

  this.articuloFirestore.altaArticulo(articulo).then(
      () => this.router.navigate(['articulos'])
);
  }
}

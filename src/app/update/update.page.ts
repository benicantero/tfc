import { ArticulosService } from './../servicios/articulos.service';
import { Component, OnInit } from '@angular/core';
import { Articulo } from '../modelos/articulo';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})
export class UpdatePage implements OnInit {

  articulo: Articulo;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private service: ArticulosService) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.service.getArticulo(id).subscribe(
      (articulo)=>{articulo;}
    )
  }
 modificarArticulo() {
    let art: Articulo = {id: this.articulo.id,
              descripcion: this.articulo.descripcion,
              categoria: this.articulo.categoria, tipo: this.articulo.tipo,
              cantidad: this.articulo.cantidad};
    this.service.editArticulo(art).then(
        () => {this.router.navigateByUrl('/list');}
    );
 }
 }

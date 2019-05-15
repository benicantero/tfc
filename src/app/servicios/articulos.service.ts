import { Articulo } from './../modelos/articulo';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {

  articulos = 'articulos';

  constructor(private db: AngularFirestore) { }

  getArticulos() {
    return this.db.collection<Articulo>(this.articulos).snapshotChanges().pipe(
      map( articulos => {
        return articulos.map(
          articulo => {
            const data = articulo.payload.doc.data();
            const key = articulo.payload.doc.id;
            return {id: key, ...data};
          }
        );
      })
    );
  }
  altaArticulo(articulo: Articulo) {
    return this.db.collection<Articulo>(this.articulos).add(articulo);
  }

}

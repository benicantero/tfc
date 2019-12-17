import { Medicamento } from '../modelos/medicamento';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedicamentosService {

  private medicamentos: AngularFirestoreCollection<Medicamento>;
  private meds: Observable<Medicamento[]>;

  constructor(private db: AngularFirestore) {
    this.medicamentos = this.db.collection<Medicamento>('pastillero');

    this.meds = this.medicamentos.snapshotChanges().pipe(map(
      medicamentos => {
        return medicamentos.map(medicamento => {
            const data = medicamento.payload.doc.data();
            const key = medicamento.payload.doc.id;
            return {id: key, ...data};
          }
        );
      })
    );
   }

  getMedicamentos(){
    return this.meds;
  }

  altaMedicamento(medicamento: Medicamento) {
    return this.medicamentos.add(medicamento);
  }

  getMedicamento(id){
    return this.medicamentos.doc(id).snapshotChanges();
  }

  editMedicamento(medicamento: Medicamento){
    return this.medicamentos.doc(medicamento.id).set(medicamento);
  }

}

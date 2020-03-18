import { MedicamentosService } from '../servicios/medicamentos.service';
import { Component, OnInit } from '@angular/core';
import { Medicamento } from '../modelos/medicamento';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})
export class UpdatePage implements OnInit {

  medicamento: Medicamento = {nombre: '', cantidad: '', tomas: '', foto: null};

  id;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private service: MedicamentosService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.service.getMedicamento(this.id).subscribe(
      (medicamento) => {
        this.medicamento.nombre = medicamento.get('nombre');
        this.medicamento.cantidad = medicamento.get('cantidad');
        this.medicamento.tomas = medicamento.get('tomas');
        this.medicamento.cantidad = medicamento.get('foto');
      }
    );
  }

 modificarMedicamento() {
    let med: Medicamento = {
              id: this.id,
              nombre: this.medicamento.nombre,
              cantidad: this.medicamento.cantidad, 
              tomas: this.medicamento.tomas,
              foto: this.medicamento.foto};
    this.service.editMedicamento(med).then(
        () => {this.router.navigateByUrl('/list');
      }
    );
 }
 
 borrarMedicamento() {
  this.medicamento.id = this.id;
  this.service.borrarMedicamento(this.medicamento).then(
    () => {this.router.navigateByUrl('list');
  }
  );
}

}

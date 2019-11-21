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

  medicamento: Medicamento;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private service: MedicamentosService) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.service.getMedicamento(id).subscribe(
      (medicamento)=>{medicamento;}
    )
  }
 modificarMedicamento() {
    let med: Medicamento = {id: this.medicamento.id,
              nombre: this.medicamento.nombre,
              cantidad: this.medicamento.cantidad, 
              tomas: this.medicamento.tomas,
              foto: this.medicamento.foto};
    this.service.editMedicamento(med).then(
        () => {this.router.navigateByUrl('/list');}
    );
 }
 }

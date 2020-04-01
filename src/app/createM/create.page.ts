import { Medicina } from '../modelos/medicina';
import { MedicinasService } from '../servicios/medicinas.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

  medicina: Medicina = {nombre: '', foto: null};


  constructor(
    private router: Router,
    private medicinaFirestore: MedicinasService) { }


  ngOnInit() {
  }

nuevaMedicina() {
  let medicina: Medicina = {
      nombre : this.medicina.nombre,
      foto : this.medicina.foto
    };

  this.medicinaFirestore.altaMedicina(medicina).then(
      () => this.router.navigate(['listM'])
);
  }
}

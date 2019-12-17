import { Observable } from 'rxjs';
import { MedicamentosService } from '../servicios/medicamentos.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Medicamento } from '../modelos/medicamento';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  medicamentos;

  private selectedItem: any;
  private icons = [
    'flask',
    'wifi',
    'beer',
    'football',
    'basketball',
    'paper-plane',
    'american-football',
    'boat',
    'bluetooth',
    'build'
  ];
  public items: Array<{ title: string; note: string; icon: string }> = [];
  constructor(
    private router: Router,
    private medicamentoService: MedicamentosService
  ) {
  }


  ngOnInit() {
    this.medicamentos = this.medicamentoService.getMedicamentos();
}
}

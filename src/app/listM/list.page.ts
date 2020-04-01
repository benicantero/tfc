import { MedicinasService } from './../servicios/medicinas.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  medicinas;

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
    private medicinaService: MedicinasService
  ) {
  }

  ngOnInit() {
    this.medicinas = this.medicinaService.getMedicinas();

}
}

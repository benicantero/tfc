import { Medicina } from '../modelos/medicina';
import { MedicinasService } from '../servicios/medicinas.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

  medicina: Medicina = { nombre: '', foto: null };

  image = 'https://www.kasterencultuur.nl/editor/placeholder.jpg';

  constructor(
    private router: Router,
    private medicinaFirestore: MedicinasService,
    private camera: Camera
  ) { }


  ngOnInit() {
  }
  async addPhoto(source: string) {
    if (source === 'camera') {
      console.log('camera');
      const cameraPhoto = await this.openCamera();
      this.image = 'data:image/jpg;base64,' + cameraPhoto;
    } else {
      console.log('library');
      const libraryImage = await this.openLibrary();
      this.image = 'data:image/jpg;base64,' + libraryImage;
    }
  }

  async openLibrary() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      targetWidth: 1000,
      targetHeight: 1000,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    };
    return await this.camera.getPicture(options);
  }

  async openCamera() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      targetWidth: 1000,
      targetHeight: 1000,
      sourceType: this.camera.PictureSourceType.CAMERA
    };
    return await this.camera.getPicture(options);
  }

  nuevaMedicina() {
    let medicina: Medicina = {
      nombre: this.medicina.nombre,
      foto: this.medicina.foto
    };

    this.medicinaFirestore.altaMedicina(medicina).then(
      () => this.router.navigate(['listM'])
    );
  }

  salir() { this.router.navigate(['listM']); }

}

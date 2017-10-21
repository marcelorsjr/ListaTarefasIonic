import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

import { Storage } from '@ionic/storage';


@Injectable()
export class PerfilService {

  usuario =  { imageUrl: 'assets/icon/images.png',
  name: '',
  birthdate: '',
  email: '' };


  constructor(private storage: Storage) {



  }

  getUser(scope) {
    this.storage.get('user').then((val) => {
      this.usuario = val;
      if (this.usuario == null) {
        this.usuario = { imageUrl: 'assets/icon/images.png',
        name: '',
        birthdate: '',
        email: '' };
      }
      let callback = scope.getUser
      if (typeof callback === "function") {
           callback(this.usuario, scope);
       }
    });
  }

  addUser(usuario) {
    this.usuario = usuario;
    this.storage.set('user', this.usuario);
  }


}

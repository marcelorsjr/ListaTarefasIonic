import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

import { Storage } from '@ionic/storage';


@Injectable()
export class PerfilService {

  usuario =  { imageUrl: '',
  name: '',
  birthdate: '',
  email: '' };


  constructor(private storage: Storage) {



  }

  storageGetUser(scope, callback) {
    this.storage.get('user').then((val) => {
      this.usuario = val;
      if (this.usuario == null) {
        this.usuario = { imageUrl: '',
        name: '',
        birthdate: '',
        email: '' };
      }
      if (typeof callback === "function") {
         // Execute the callback function and pass the parameters to it​
           callback(this.usuario, scope);
       }
    });
  }

  getUser() {
      return this.usuario
  }

  addUser(usuario) {
    this.usuario = usuario;
    this.storage.set('user', this.usuario);
  }


}

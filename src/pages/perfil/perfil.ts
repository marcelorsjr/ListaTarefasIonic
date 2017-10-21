import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { PerfilService } from '../../providers/perfil-service';

/**
 * Generated class for the PerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 @IonicPage()
 @Component({
 	selector: 'page-perfil',
 	templateUrl: 'perfil.html',
 })
 export class PerfilPage {

 	imageUrl: String;
 	name: String;
 	birthdate: String;
 	email: String;

 	constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public perfilService: PerfilService) {

 	}

 	ionViewDidLoad() {
 		console.log('ionViewDidLoad PerfilPage');
 		 		

 	}

 	ionViewWillEnter() {
 		this.perfilService.storageGetUser(this, this.getUser);

 	}

 	getUser(usuario, self) {
 		 		 		console.log(1)
 		 		console.log(usuario.imageUrl)
 		 		console.log(2)
 		//this.imageUrl = usuario.imageUrl;

 		if (self.imageUrl == "")
 			self.imageUrl = "assets/icon/images.png"
 		self.name = usuario.name;
 		self.birthdate = usuario.birthdate;
 		self.email = usuario.email;

 	}



 	validateFields(): boolean {


 		if (this.name == "") {
 			const alert = this.alertCtrl.create({
 				title: 'Atenção',
 				subTitle: 'Preencha o nome',
 				buttons: ['OK']
 			});
 			alert.present(); 
 			return false;
 		}

 		if (this.birthdate == "") {
 			const alert = this.alertCtrl.create({
 				title: 'Atenção',
 				subTitle: 'Preecha a data de nascimento',
 				buttons: ['OK']
 			});
 			alert.present();
 			return false;
 		}

 		if (this.email == "") {
 			const alert = this.alertCtrl.create({
 				title: 'Atenção',
 				subTitle: 'Preencha o email',
 				buttons: ['OK']
 			});
 			alert.present();
 			return false;
 		}

 		return true;
 	}

 	salvarDados() {
 		if (this.validateFields() == true) {
 			  let usuario =  { imageUrl: this.imageUrl,
               name: this.name,
               birthdate: this.birthdate,
                email: this.email};

                this.perfilService.addUser(usuario);

                 			const alert = this.alertCtrl.create({
 				title: 'Sucesso',
 				subTitle: 'Dados gravados com sucesso!',
 				buttons: ['OK']
 			});
 			alert.present();


 		}
 	}

 }

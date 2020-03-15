import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes, Router } from '@angular/router';
import { NavController, NavParams } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-preparation',
  templateUrl: './preparation.page.html',
  styleUrls: ['./preparation.page.scss'],
})
export class PreparationPage implements OnInit {

  data="";
  filecontent="";
  prepa_coche=[];
  item="";
  cadre="";
  regles="";
  imaginaire="";
  equipe="";
  roles="";
  action="";
  sens="";
  resultat="";

  vide=[];

 constructor(
  private router: Router,
   private http: HttpClient,
   private storage: Storage,
   public navCtrl: NavController,
   public alertController: AlertController
 ) {

    this.cadre="CADRE";
    this.regles="REGLES";
    this.imaginaire="IMAGINAIRE";
    this.equipe="EQUIPE";
    this.roles="ROLES";
    this.action="ACTION";
    this.sens="SENS";
    this.resultat="RESULTAT";

    this.storage.get('prepa_item').then((val) => {this.item = val});
    this.storage.get('prepa_coche').then((val) => {this.prepa_coche = val});

    this.http.get("assets/data/data_preparation.json", {responseType: 'json'}).subscribe(fileContent => { this.data = fileContent["preparation"];});


   }

  ngOnInit() {
  }


  openPreparationPageback(item, coche_prepa){
  this.item = item;
  this.router.navigate(['/preparation']);
  }
  openPreparationPage(item, prepa_coche) {
    this.item = item;
    //this.storage.set('prepa_item', 'EQUIPE' );
    //this.storage.get('prepa_item').then((val) => {console.log(val);item = val});
    //console.log("ok");
    this.router.navigate(['/preparation']);
    //

  //  this.storage.set('prepa_coche', prepa_coche);
  //  this.storage.get('prepa_item').then((val) => {console.log(val);this.item = val});
  //  this.router.navigate(['/preparation']);
      }
  //openPreparationPageback(item, coche_prepa) {   this.navCtrl.push(PreparationPage,{item:item, coche_prepa:coche_prepa}, {animate:true, animation: "transition",direction: 'back'});   }


      async raz_alerte(prepa_coche) {
      var raz_coche=[];
    const alert = await this.alertController.create({
      header: 'Effacer tout!',
      message: 'Souhaitez vous effacer la check-list ?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            ;
          }
        }, {
          text: 'Effacer',
          handler: () => {
            this.prepa_coche= raz_coche;
            this.storage.set('prepa_coche', raz_coche);

            this.item = 'CADRE'
            this.router.navigate(['/preparation'])
          }
        }
      ]
    });

    await alert.present();
    ;
  }

}

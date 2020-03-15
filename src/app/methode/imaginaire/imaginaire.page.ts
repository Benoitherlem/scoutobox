import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes, Router } from '@angular/router';
import { NavController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-imaginaire',
  templateUrl: './imaginaire.page.html',
  styleUrls: ['./imaginaire.page.scss'],
})
export class ImaginairePage implements OnInit {
data_imaginaireetape;
data_imaginaireitem;
itemetapeactif='vide';
itemitemactif='vide';
coloretape=['light','light','light','light'];
coloritem=['light','light','light','light','light','light','light','light','light','light'];
  constructor(
    private router: Router,
     private http: HttpClient,
  ) {

    this.http.get("assets/data/data_imaginaireetape.json", {responseType: 'json'}).subscribe(fileContent => {this.data_imaginaireetape = fileContent["etapes"];});
    this.http.get("assets/data/data_imaginaireitem.json", {responseType: 'json'}).subscribe(fileContent => { this.data_imaginaireitem = fileContent["item"];});


 }



  ngOnInit() {
  }

  etapeactive(item,i)
  {
    console.log(i);
    if (this.itemetapeactif==item){this.itemetapeactif='vide'}
    else {this.itemetapeactif=item}

    if (this.itemetapeactif=='vide'){this.coloretape[i]='light';}
    else {this.coloretape[i]='primary';
    if (i!=0){this.coloretape[0]='light';}
    if (i!=1){this.coloretape[1]='light';}
    if (i!=2){this.coloretape[2]='light';}
    if (i!=3){this.coloretape[3]='light';}

  }
  }
  itemactive(item,i)
  {
    if (this.itemitemactif==item){this.itemitemactif='vide'}
    else {this.itemitemactif=item}

    if (this.itemitemactif=='vide'){this.coloritem[i]='light';}
    else {this.coloritem[i]='primary';}

    if (i!=0){this.coloritem[0]='light';}
    if (i!=1){this.coloritem[1]='light';}
    if (i!=2){this.coloritem[2]='light';}
    if (i!=3){this.coloritem[3]='light';}
    if (i!=4){this.coloritem[4]='light';}
    if (i!=5){this.coloritem[5]='light';}
    if (i!=6){this.coloritem[7]='light';}
    if (i!=7){this.coloritem[8]='light';}
    if (i!=8){this.coloritem[9]='light';}
  }


}

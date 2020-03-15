import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes, Router } from '@angular/router';
import { NavController, NavParams } from '@ionic/angular';
@Component({
  selector: 'app-veillee',
  templateUrl: './veillee.page.html',
  styleUrls: ['./veillee.page.scss'],
})
export class VeilleePage implements OnInit {
data;
color=['light','light','light','light'];
itemactif='vide'
  constructor(
    private router: Router,
     private http: HttpClient,
  )
  {
    this.http.get("assets/data/data_veilleetape.json", {responseType: 'json'}).subscribe(fileContent => {this.data = fileContent["etape"];});
  }


  activeritem(item,i)
      {
      if (this.itemactif == item) { this.itemactif='vide';}
      else {    this.itemactif=item;}

      if (this.itemactif=="Accroche"){this.color[0]="secondary"} else {this.color[0]="light";}
      if (this.itemactif=="Accélération"){this.color[1]="secondary"} else {this.color[1]="light";}
      if (this.itemactif=="Point culminant"){this.color[2]="secondary"} else {this.color[2]="light";}
      if (this.itemactif=="Retour au calme"){this.color[3]="secondary"} else {this.color[3]="light";}


   if (i!=0){this.color[0]='light';}
      if (i!=1){this.color[1]='light';}
      if (i!=2){this.color[2]='light';}
    if (i!=3){this.color[3]='light';}


      }
  ngOnInit() {
  }

}

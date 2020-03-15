import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes, Router } from '@angular/router';
import { NavController, NavParams } from '@ionic/angular';


@Component({
  selector: 'app-activite',
  templateUrl: './activite.page.html',
  styleUrls: ['./activite.page.scss'],
})
export class ActivitePage implements OnInit {

  data_eco="";
  data_gjeu="";
  data_veillee="";
  data_jeucourt="";
  data_actmanuelle="";
  item="vide";

  color_eco="light";
  color_gjeu="light";
  color_veillee="light";
  color_jeucourt="light";
  color_actmanuelle="light";

  constructor(
   private router: Router,
   private http: HttpClient
  ) {
    this.http.get("assets/data/data_eco.json", {responseType: 'json'}).subscribe(fileContent => { this.data_eco = fileContent["eco"];});
    this.http.get("assets/data/data_gjeu.json", {responseType: 'json'}).subscribe(fileContent => { this.data_gjeu = fileContent["gjeu"];});
    this.http.get("assets/data/data_veillee.json", {responseType: 'json'}).subscribe(fileContent => { this.data_veillee = fileContent["veillee"];});
    this.http.get("assets/data/data_jeucourt.json", {responseType: 'json'}).subscribe(fileContent => { this.data_jeucourt = fileContent["jeucourt"];});
    this.http.get("assets/data/data_actmanuelle.json", {responseType: 'json'}).subscribe(fileContent => {this.data_actmanuelle = fileContent["actmanuelle"];});

  }

  ngOnInit() {
  }

    goitem(item_change)
    {

      if (item_change!=this.item)
      {this.item=item_change;  }
      else
      {this.item='vide';}

      if (this.item=="eco"){this.color_eco="tertiary"} else {this.color_eco="light";}
      if (this.item=="gjeu"){this.color_gjeu="tertiary"} else {this.color_gjeu="light";}
      if (this.item=="jeucourt"){this.color_jeucourt="tertiary"} else {this.color_jeucourt="light";}
      if (this.item=="actmanuelle"){this.color_actmanuelle="tertiary"} else {this.color_actmanuelle="light";}
      if (this.item=="veillee"){this.color_veillee="tertiary"} else {this.color_veillee="light";}
    }

  godisplay(id,type)
  {
  //this.storage.set('activite', id);
  this.router.navigate(['activitedisplay', { id:id , type:type }]);

  }

  }

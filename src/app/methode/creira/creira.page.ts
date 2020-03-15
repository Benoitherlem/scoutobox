import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes, Router } from '@angular/router';
import { NavController, NavParams } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-creira',
  templateUrl: './creira.page.html',
  styleUrls: ['./creira.page.scss'],
})
export class CreiraPage implements OnInit {
  data="";
  itemcadre={"name":"x","img":"x","detail":"x","imgf":"x","imgl":"x" };
  itemregles={"name":"x","img":"x","detail":"x","imgf":"x","imgl":"x" };
  itemequipe={"name":"x","img":"x","detail":"x","imgf":"x","imgl":"x" };
  itemimaginaire={"name":"x","img":"x","detail":"x","imgf":"x","imgl":"x" };
  itemroles={"name":"x","img":"x","detail":"x","imgf":"x","imgl":"x" };
  itemaction={"name":"x","img":"x","detail":"x","imgf":"x","imgl":"x" };
  itemsens={"name":"x","img":"x","detail":"x","imgf":"x","imgl":"x" };

  colorcadre="light";
  colorregles="light";
  colorimaginaire="light";
  colorroles="light";
  coloraction="light";
  colorequipe="light";
  colorsens="light";

  itemactif = "vide"
  constructor(
    private router: Router,
     private http: HttpClient,

  ) {
    this.http.get("assets/data/data_creira.json", {responseType: 'json'}).subscribe(fileContent => {this.itemcadre = fileContent["creira"][0];});
    this.http.get("assets/data/data_creira.json", {responseType: 'json'}).subscribe(fileContent => {this.itemregles = fileContent["creira"][1];});
    this.http.get("assets/data/data_creira.json", {responseType: 'json'}).subscribe(fileContent => {this.itemequipe = fileContent["creira"][2];});
    this.http.get("assets/data/data_creira.json", {responseType: 'json'}).subscribe(fileContent => {this.itemimaginaire = fileContent["creira"][3];});
    this.http.get("assets/data/data_creira.json", {responseType: 'json'}).subscribe(fileContent => {this.itemroles = fileContent["creira"][4];});
    this.http.get("assets/data/data_creira.json", {responseType: 'json'}).subscribe(fileContent => {this.itemaction = fileContent["creira"][5];});
    this.http.get("assets/data/data_creira.json", {responseType: 'json'}).subscribe(fileContent => {this.itemsens = fileContent["creira"][6];});

   }

  ngOnInit() {
  }

activeritem(item)
    {
    if (this.itemactif == item) { this.itemactif='vide';}
    else {    this.itemactif=item;}

    if (this.itemactif=="Cadre"){this.colorcadre="secondary"} else {this.colorcadre="light";}
    if (this.itemactif=="Regles"){this.colorregles="secondary"} else {this.colorregles="light";}
    if (this.itemactif=="Equipe"){this.colorequipe="secondary"} else {this.colorequipe="light";}
    if (this.itemactif=="Imaginaire"){this.colorimaginaire="secondary"} else {this.colorimaginaire="light";}
    if (this.itemactif=="Roles"){this.colorroles="secondary"} else {this.colorroles="light";}
    if (this.itemactif=="Action"){this.coloraction="secondary"} else {this.coloraction="light";}
    if (this.itemactif=="Sens"){this.colorsens="secondary"} else {this.colorsens="light";}

    }

}

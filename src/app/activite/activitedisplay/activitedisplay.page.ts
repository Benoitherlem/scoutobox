import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes, Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-activitedisplay',
  templateUrl: './activitedisplay.page.html',
  styleUrls: ['./activitedisplay.page.scss'],
})
export class ActivitedisplayPage implements OnInit {
  id;
  type;
  data;
  item;
  data_eco="";
  data_gjeu="";
  data_veillee="";
  data_jeucourt="";
  data_actmanuelle="";

  constructor(
    private route: ActivatedRoute,
    private router: Router,
     private http: HttpClient

  ) {
    this.id = this.route.snapshot.paramMap.get('id');
    this.type = this.route.snapshot.paramMap.get('type');

    if (this.type=="jeucourt"){this.http.get("assets/data/data_jeucourt.json", {responseType: 'json'}).subscribe(fileContent => { this.item = fileContent["jeucourt"][this.id];});}
    if (this.type=="gjeu"){this.http.get("assets/data/data_gjeu.json", {responseType: 'json'}).subscribe(fileContent => {this.item = fileContent["gjeu"][this.id];});}
    if (this.type=="eco"){this.http.get("assets/data/data_eco.json", {responseType: 'json'}).subscribe(fileContent => {this.item = fileContent["eco"][this.id];});}
    if (this.type=="actmanuelle"){this.http.get("assets/data/data_actmanuelle.json", {responseType: 'json'}).subscribe(fileContent => {this.item = fileContent["actmanuelle"][this.id];});}
    if (this.type=="veillee"){this.http.get("assets/data/data_veillee.json", {responseType: 'json'}).subscribe(fileContent => { this.item = fileContent["veillee"][this.id];});}


   }

  ngOnInit() {
  }

}

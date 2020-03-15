import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes, Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-prepacampdisplay',
  templateUrl: './prepacampdisplay.page.html',
  styleUrls: ['./prepacampdisplay.page.scss'],
})
export class PrepacampdisplayPage implements OnInit {

    id;
    name;
    titre;
    extrait;
    type;
    contenu;


    constructor(
      private route: ActivatedRoute,
      private router: Router,
       private http: HttpClient
    )
     {

     }


  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.name = this.route.snapshot.paramMap.get('name');
    this.titre = this.route.snapshot.paramMap.get('titre');
    this.extrait = this.route.snapshot.paramMap.get('extrait');
    this.type = this.route.snapshot.paramMap.get('type');
    this.contenu = this.route.snapshot.paramMap.get('contenu');


    //this.http.get("assets/data/data_prepacamp.json", {responseType: 'json'}).subscribe(fileContent => { this.item = fileContent["prepacamp"][this.id];});
    //this.http.get("assets/data/data_prepacamp.json", {responseType: 'json'}).subscribe(fileContent => { this.data_prepacamp = fileContent["prepacamp"];});


  }

}

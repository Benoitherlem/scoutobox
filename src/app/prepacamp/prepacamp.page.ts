import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes, Router } from '@angular/router';
import { NavController, NavParams } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-prepacamp',
  templateUrl: './prepacamp.page.html',
  styleUrls: ['./prepacamp.page.scss'],
})
export class PrepacampPage implements OnInit {
  data_prepacamp="";
  color_halp="light";
  color_ve="light";
  color_egf="light";
  color_csp="light";
  item;

  constructor(
    private router: Router,
     private http: HttpClient,
    private storage: Storage
  )
   {

     this.http.get("assets/data/data_prepacamp.json", {responseType: 'json'}).subscribe(fileContent => { this.data_prepacamp = fileContent["prepacamp"];});

  }

  ngOnInit() {
  }

  goitem(item_change)
  {

    if (item_change!=this.item)
    {this.item=item_change;  }
    else
    {this.item='vide';}

    if (this.item=="halp"){this.color_halp="tertiary"} else {this.color_halp="light";}
    if (this.item=="ve"){this.color_ve="tertiary"} else {this.color_ve="light";}
    if (this.item=="egf"){this.color_egf="tertiary"} else {this.color_egf="light";}
    if (this.item=="csp"){this.color_csp="tertiary"} else {this.color_csp="light";}
  }

  godisplay(id, name, type, titre, extrait, contenu)
  {

  this.router.navigate(['prepacampdisplay', { id:id ,name:name, type:type, titre:titre, extrait:extrait, contenu:contenu}]);

  }

}

import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes, Router } from '@angular/router';
import { NavController, NavParams } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { AlertController } from '@ionic/angular';

import { ChartsModule }  from 'ng2-charts'
import { ChartDataSets, ChartType, RadialChartOptions } from 'chart.js';

import {  ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import * as Chart from 'chart.js'

@Component({
  selector: 'app-evaluation',
  templateUrl: './evaluation.page.html',
  styleUrls: ['./evaluation.page.scss'],

})
export class EvaluationPage implements OnInit {









  private barChart: Chart;

  // Radar
  public radarChartLabels:string[] = ['CADRE', 'REGLES', 'EQUIPE', 'IMAGINAIRE','ROLES', 'ACTION', 'SENS'];

  public radarChartData:any = [{data: [0, 0, 0,0,0,0,0], label: "Evaluation"}, {data: [0, 0, 0,0,0,0,0], label: "Ref"}];
  public radarChartType:string = 'radar';

  barChartColors: any [] =[  { backgroundColor:'rgba(44, 205, 0, 1)', borderColor: "rgba(36,142,7,1)", borderWidth: 2 },
    { backgroundColor:'rgba(221, 255, 218, 0)', borderColor: "rgba(255,255,255,0)",  borderWidth: 0 }];

  public chartOptions = {
  scale: { ticks: {  beginAtZero: true,  min: 0, max: 100, stepSize: 20 }, pointLabels: { fontSize: 14  } },
  legend:  {display: false,}, tooltips: {callbacks: { label: tooltipItem => `${tooltipItem.yLabel}: ${tooltipItem.xLabel}`,    title: () => null, }  }
};

  data="";
  filecontent="";
  eval_coche=[];
  val1=1;
  val2=2;
  val3=3;
  val4=4;
  i="0";
  eval = "eval";
  item="EVAL";
  options;
  dat;
  display="none";
  w=400;
  h=400;


  myLineChart=[];
  title = 'angular8chartjs';
    canvas: any;
    ctx: any;


  constructor(
    private router: Router,
     private http: HttpClient,
     private storage: Storage,
     public navCtrl: NavController,
     public alertController: AlertController
  ) {
    this.http.get("assets/data/data_evaluation.json", {responseType: 'json'}).subscribe(fileContent => {console.log(fileContent); this.data = fileContent["evaluation"];});

   }

  ngOnInit() {
  this.canvas = document.getElementById('myChart');


        this.canvas.style.display = "none ";




  }

  openresultat(item, eval_coche)
  {

  this.item = item;

      interface Item{
        categorie:string,
        type:string,
        eval:string,
        icone_range_min:string,
        icone_range_max:string,
        res1:string,
        res2:string,
        res3:string,
        res4:string
      }

      interface Cat{name:string }

      this.radarChartData[0].data[0]=0;
      this.radarChartData[0].data[1]=0;
      this.radarChartData[0].data[2]=0;
      this.radarChartData[0].data[3]=0;
      this.radarChartData[0].data[4]=0;
      this.radarChartData[0].data[5]=0;
      this.radarChartData[0].data[6]=0;

      this.radarChartData[1].data[0]=0;
      this.radarChartData[1].data[1]=0;
      this.radarChartData[1].data[2]=0;
      this.radarChartData[1].data[3]=0;
      this.radarChartData[1].data[4]=0;
      this.radarChartData[1].data[5]=0;
      this.radarChartData[1].data[6]=0;






     for (var _i = 0; _i < this.data.length; _i++) {
    // var item:"";
     let item:any = {};
     item = this.data[_i];

    //  var item = this.data[_i];
      var categ = 0;

      if (item.categorie == this.radarChartLabels[0]) {categ =0;}
      if (item.categorie == this.radarChartLabels[1]) {categ =1;}
      if (item.categorie == this.radarChartLabels[2]) {categ =2;}
      if (item.categorie == this.radarChartLabels[3]) {categ =3;}
      if (item.categorie == this.radarChartLabels[4]) {categ =4;}
      if (item.categorie == this.radarChartLabels[5]) {categ =5;}
      if (item.categorie == this.radarChartLabels[6]) {categ =6;}

              if (item.type=='range'){
                this.radarChartData[1].data[categ] = this.radarChartData[1].data[categ]+4;
                if(this.eval_coche[_i]!= null) {this.radarChartData[0].data[categ] = this.radarChartData[0].data[categ] + this.eval_coche[_i];}
              }

              if (item.type=='toggle'){
                this.radarChartData[1].data[categ] = this.radarChartData[1].data[categ]+4;
                if(this.eval_coche[_i]!= null) {

                            if(this.eval_coche[_i] == true ) {  this.radarChartData[0].data[categ] = this.radarChartData[0].data[categ] + 4;}}
              }


      }




      this.radarChartData[0].data[0]=Math.round(this.radarChartData[0].data[0]*100/this.radarChartData[1].data[0]);
      this.radarChartData[0].data[1]=Math.round(this.radarChartData[0].data[1]*100/this.radarChartData[1].data[1]);
      this.radarChartData[0].data[2]=Math.round(this.radarChartData[0].data[2]*100/this.radarChartData[1].data[2]);
      this.radarChartData[0].data[3]=Math.round(this.radarChartData[0].data[3]*100/this.radarChartData[1].data[3]);
      this.radarChartData[0].data[4]=Math.round(this.radarChartData[0].data[4]*100/this.radarChartData[1].data[4]);
      this.radarChartData[0].data[5]=Math.round(this.radarChartData[0].data[5]*100/this.radarChartData[1].data[5]);
      this.radarChartData[0].data[6]=Math.round(this.radarChartData[0].data[6]*100/this.radarChartData[1].data[6]);


      this.radarChartData[1].data[0]=this.radarChartData[1].data[0]*100/this.radarChartData[1].data[0];
      this.radarChartData[1].data[1]=this.radarChartData[1].data[1]*100/this.radarChartData[1].data[1];
      this.radarChartData[1].data[2]=this.radarChartData[1].data[2]*100/this.radarChartData[1].data[2];
      this.radarChartData[1].data[3]=this.radarChartData[1].data[3]*100/this.radarChartData[1].data[3];
      this.radarChartData[1].data[4]=this.radarChartData[1].data[4]*100/this.radarChartData[1].data[4];
      this.radarChartData[1].data[5]=this.radarChartData[1].data[5]*100/this.radarChartData[1].data[5];
      this.radarChartData[1].data[6]=this.radarChartData[1].data[6]*100/this.radarChartData[1].data[6];





          this.canvas = document.getElementById('myChart');
          this.ctx = this.canvas.getContext('2d');
          let myChart = new Chart(this.ctx, {
            type: 'radar',
            data:  {
                labels: ['CADRE', 'REGLES', 'EQUIPE', 'IMAGINAIRE','ROLES', 'ACTION', 'SENS'],
                datasets: [{label: 'My First dataset',
                    data:[this.radarChartData[0].data[0],
                    this.radarChartData[0].data[1],
                    this.radarChartData[0].data[2],
                    this.radarChartData[0].data[3],
                    this.radarChartData[0].data[4],
                    this.radarChartData[0].data[5],
                    this.radarChartData[0].data[6]],
                    backgroundColor:'rgba(44, 205, 0, 1)', borderColor: "rgba(36,142,7,1)", borderWidth: 2
                  },{label: 'My 2nd dataset',
                      data:[this.radarChartData[1].data[0],
                      this.radarChartData[1].data[1],
                      this.radarChartData[1].data[2],
                      this.radarChartData[1].data[3],
                      this.radarChartData[1].data[4],
                      this.radarChartData[1].data[5],
                      this.radarChartData[1].data[6]],
                      backgroundColor:'rgba(221, 255, 218, 0)', borderColor: "rgba(255,255,255,0)",  borderWidth: 0
                    }]

          },

            options: {responsive:true,
            scale: { ticks: {  beginAtZero: true,  min: 0, max: 100, stepSize: 20 }, pointLabels: { fontSize: 14  } },
            legend:  {display: false,}, tooltips: {callbacks: { label: tooltipItem => `${tooltipItem.yLabel}: ${tooltipItem.xLabel}`,    title: () => null, }  }
          }

          });

            if (  this.item == "RESULTAT") { this.display="block";}
            if (  this.item!="RESULTAT") { this.display="none";}
            this.canvas.style.display = this.display;

  }



   async raz_eval(eval_coche)
  {
    var raz_coche=[];
    const alert = await this.alertController.create({
    header: 'Effacer tout!',
    message: 'Souhaitez démarrer une nouvelle évaluation ?',
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
          this.eval_coche= raz_coche;
          this.storage.set('eval_coche', raz_coche);

          this.item = 'EVAL'
          this.router.navigate(['/evaluation'])
        }
      }
    ]
  });

  await alert.present();
  ;

  }
}

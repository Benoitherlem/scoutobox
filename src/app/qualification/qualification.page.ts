import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qualification',
  templateUrl: './qualification.page.html',
  styleUrls: ['./qualification.page.scss'],
})
export class QualificationPage implements OnInit {

  trancheage=0;
  nbjeunes=0;
  nuits=false;

  constructor() { }

  ngOnInit() {
  }

}

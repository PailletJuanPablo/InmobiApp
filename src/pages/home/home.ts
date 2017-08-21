import { PropiedadesPage } from './../propiedades/propiedades';
import { ListPage } from './../list/list';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

 
export class HomePage {


  page1: any = "Test1Page";
  
  page2: any = "Page3Page";

  page3:any = PropiedadesPage

  constructor(public navCtrl: NavController, public http:Http) {
 

  }
  ionViewDidLoad(){

    
  }
}

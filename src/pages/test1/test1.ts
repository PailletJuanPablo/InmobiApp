import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/**
 * Generated class for the Test1Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-test1',
  templateUrl: 'test1.html',
})
export class Test1Page {

  page1: any = "Test1Page";
  
  page2: any = "Test1Page";

  dolarblue:any;
  dolarlibre:any;
  dolarcargado:boolean=false;
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:Http) {

    this.http.get('http://ws.geeklab.com.ar/dolar/get-dolar-json.php').map(res => res.json()).subscribe(data => {
      this.dolarcargado=true;
this.dolarblue=data.blue;
this.dolarlibre=data.libre
  });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Test1Page');
  }

}

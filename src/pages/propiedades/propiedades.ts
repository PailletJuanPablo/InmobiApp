import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';

import { DetallePage } from '../detalle/detalle';

/**
 * Generated class for the PropiedadesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-propiedades',
  templateUrl: 'propiedades.html',
})
export class PropiedadesPage {
  url: string = 'http://gbertolinoinmobiliaria.com/wp-json/wp/v2/property?per_page=100';
  propiedades:any;
resultados:any;

 searchTerm: string = '';
  items: any;
  constructor(public navCtrl: NavController, public statusbar:StatusBar, public http:Http, private storage: Storage) {
  }

  ionViewDidLoad() {
    this.recargar()
    
     this.storage.get("propiedades").then((val) => {
if (!val){
this.http.get( this.url )
     .map(res => res.json())
     .subscribe(data => {
       // we've got back the raw data, now generate the core schedule data
       // and save the data for later reference
       this.items = data;
             console.log(this.items)
             this.storage.set("propiedades", this.items)
             this.cargarpropiedadeslocales()
     });
               
      
}else{
    this.cargarpropiedadeslocales()

}
     })
   }

   itemTapped(event, item) {
   this.navCtrl.push('DetallePage', {
     item: item
   });
 }

  doRefresh(refresher) {
  this.http.get( this.url )
     .map(res => res.json())
     .subscribe(data => {
       // we've got back the raw data, now generate the core schedule data
       // and save the data for later reference
       this.items = data;
             console.log(this.items)
             this.storage.set("propiedades", this.items)
     });
                  setTimeout(() => {
     console.log('Async operation has ended');
      this.cargarpropiedadeslocales()
     refresher.complete();
   }, 2000);
 }


 cargarpropiedadeslocales(){
   this.storage.get("propiedades").then((val) => {
   console.log('Your age is', val);
this.propiedades=val
 });
 }

   filterItems(searchTerm){

       return this.propiedades.filter((item) => {
         return (item.title.rendered.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
       });     

   }

     setFilteredItems() {

       this.propiedades = this.filterItems(this.searchTerm);

   }

recargar(){
 this.http.get( this.url )
     .map(res => res.json())
     .subscribe(data => {
       // we've got back the raw data, now generate the core schedule data
       // and save the data for later reference
       this.items = data;
             console.log(this.items)
             this.storage.set("propiedades", this.items)
     });
           
      this.cargarpropiedadeslocales()
  
}


}

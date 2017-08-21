import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';
import { InAppBrowser } from '@ionic-native/in-app-browser';

declare var window;

/**
 * Generated class for the DetallePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()

@Component({
  selector: 'page-detalle',
  templateUrl: 'detalle.html',
})
export class DetallePage {
  selectedItem: any;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private callNumber: CallNumber,
  private iab: InAppBrowser) {
        this.selectedItem = navParams.get('item');

  }

  llamar(){
    this.callNumber.callNumber("3543640112", true) 
  .catch(() => alert('Error intentando llamar'));

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad DetallePage');
  }

  enviarwp(){
  window.location='https://api.whatsapp.com/send?phone=+5493543640112&text=Hola,%20me%20comunico%20porque%20estoy%20interesado%20en%20una%20propiedad:%20'+this.selectedItem.link

  }

  abrirlink(){
  
  this.iab.create(this.selectedItem.link+'/#overview',"_blank",{location:"no"});

  }
}

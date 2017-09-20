import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from "@ionic-native/in-app-browser";
import * as $ from "jquery";

@IonicPage()
@Component({
  templateUrl: 'details.html',
})
export class DetailsPage {

  item: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private inAppBrowser:InAppBrowser) {
    this.item = navParams.get('item');
    $(document).ready(function(){
      $("a").attr("target", "_self")
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }

}

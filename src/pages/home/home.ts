import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import { RssProvider } from "../../providers/rss/rss";
import { DetailsPage } from "../details/details";
import * as $ from "jquery";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  rssDataArrray: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public rssProvider: RssProvider) {
    $(document).ready(function(){

      $('#target div a').each(function(){
        $(this).attr('target', '_self');
      });

    });

  }


  ionViewDidLoad(){
    console.log('ionViewDidLoad Homepage');
    this.Get_RSS_Data();
  }

  Get_RSS_Data(){
    this.rssProvider.getRss().subscribe(data => {
      this.rssDataArrray = data;
      console.log(data);
    });
  }

  viewItem(item){
    this.navCtrl.push(DetailsPage, {
       item: item
    });
  }


}

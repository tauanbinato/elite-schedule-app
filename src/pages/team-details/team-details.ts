import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-team-details',
  templateUrl: 'team-details.html',
})
export class TeamDetailsPage {

  public team:any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.team = this.navParams.data;
    console.log("**nav params", this.navParams)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeamDetailsPage');
  }

}

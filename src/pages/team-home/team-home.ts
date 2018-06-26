import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TeamDetailsPage } from '../team-details/team-details';
import { StandigsPage } from '../standigs/standigs';
import { MyTeamsPage } from '../my-teams/my-teams';


@Component({
  selector: 'page-team-home',
  templateUrl: 'team-home.html',
})
export class TeamHomePage {

  public team:any = {};
  public teamDetailTab = TeamDetailsPage;
  public standingsTab = StandigsPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.team = navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeamHomePage');
  }

  goHome():void{
    //this.navCtrl.push(MyTeamsPage);
    this.navCtrl.popToRoot();
  }

}

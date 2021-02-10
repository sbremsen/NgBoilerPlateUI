import { Component, OnInit } from '@angular/core';
// import { AnimationAction } from '../enums/enum';
// import { HomeTilesComponent } from '../../shared/components/home-tiles/home-tiles.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public title = 'Scott Remsen';
  public header = 'Solutions Developer / Purveyor of Good Vibes'
  public description = 'Thank you for viewing this website.  Please view my Portfolio and enjoy checking out some of the components displayed on the Components screen. '
  + 'These components utilize Angular and data feeds from Restful Web API.';
 
  constructor() { }

  ngOnInit() {  }

}

import { Component, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-wip',
  templateUrl: './wip.component.html',
  styleUrls: ['./wip.component.scss']
})
export class WipComponent implements OnInit {

    public lottieLogoOptions!: AnimationOptions;

    constructor() { }

    ngOnInit(): void {

      this.lottieLogoOptions = {
        path: "assets/animations/home-logo.json"
      }
    }

}

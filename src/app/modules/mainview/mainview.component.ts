import { Component, OnInit } from '@angular/core';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';

@Component({
  selector: 'app-mainview',
  templateUrl: './mainview.component.html',
  styleUrls: ['./mainview.component.css']
})
export class MainviewComponent implements OnInit {

    public slides = [
        { 'image': './assets/img/brochures/1/1.png' },
        { 'image': './assets/img/brochures/1/2.png' },
        { 'image': './assets/img/brochures/1/3.png' },
        { 'image': './assets/img/brochures/1/4.png' },
        { 'image': './assets/img/brochures/1/5.png' },
        { 'image': './assets/img/brochures/1/6.png' }
    ]

  constructor() { }

  ngOnInit(): void {
  }

}

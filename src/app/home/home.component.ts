import { Component, OnInit } from '@angular/core';
import { ReturnStatement } from '@angular/compiler';
declare const $:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  images=[
    'assets/demo/images/slider/1.jpg',
    'assets/demo/images/slider/2.jpg',
    'assets/demo/images/slider/3.jpg'
  ]

  constructor() { 
    this.loadCarousel();
  }

  ngOnInit() {
  }

  public setCarouselStyle(){
    return {'background': 'teal'}
  }


  private loadCarousel(){
    $('#oc-features').owlCarousel({
			items: 1,
			margin: 60,
		    nav: true,
		    navText: ['<i class="icon-line-arrow-left"></i>','<i class="icon-line-arrow-right"></i>'],
		    dots: false,
		    stagePadding: 30,
		    responsive:{
				768: { items: 2 },
				1200: { stagePadding: 200 }
			},
		});
  }

}

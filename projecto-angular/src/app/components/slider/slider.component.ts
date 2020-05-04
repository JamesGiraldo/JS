import { Component, OnInit, Input } from '@angular/core';
declare var $: any;

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  @Input() anchura: number;
  @Input('etiquetas') captions: boolean;
  constructor(){ }

  ngOnInit(){
    $("#logo").click(function(e){
      e.preventDefault();
      $("header").css("background", "geen")
                 .css("height", "90px");
    });
    $('.galeria').bxSlider({
       mode: 'fade',
       captions: this.captions,
       autoControls: true,
       slideWidth: this.anchura,
       responsive: true,
       pager: false
     });
  }

}

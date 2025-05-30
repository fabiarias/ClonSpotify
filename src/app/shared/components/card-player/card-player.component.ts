import { Component, Input, input, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';

@Component({
  selector: 'app-card-player',
  standalone: false,
  
  templateUrl: './card-player.component.html',
  styleUrl: './card-player.component.css'
})
export class CardPlayerComponent implements OnInit {
  @Input() mode: 'small' | 'big' = 'small';
  // @Input() track: TrackModel={_id:0};
  // asi no necesito declarar completamente el component
  @Input() track: TrackModel= { _id:0,name:'',album:'',url:'', cover:''};

  constructor(){}

  ngOnInit(): void {
      
  }

}

import { Component , ViewChild , ElementRef} from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-media-player',
  standalone: false,
  
  templateUrl: './media-player.component.html',
  styleUrl: './media-player.component.css'
})
export class MediaPlayerComponent {
  // @ViewChild('progressBar') progressBar: ElementRef = new ElementRef('')
  // listObservers$: Array<Subscription> = []
  // state: string = 'paused'
  mockCover: TrackModel={
    cover:"https://i.scdn.co/image/ab67616d0000b27345ca41b0d2352242c7c9d4bc",
    album:"Giolì & Assia",
    name:"BEBE (Official Video)",
    url:"http://localhost:3000/track-3.mp3",
    _id:1
    
  }
}

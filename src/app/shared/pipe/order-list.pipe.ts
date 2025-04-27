import { Pipe, PipeTransform } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';

@Pipe({
  name: 'orderList',
  standalone: false
})
export class OrderListPipe implements PipeTransform {

  transform(value: TrackModel[], args:string | null = null): TrackModel[] {
    return value;
  }

}

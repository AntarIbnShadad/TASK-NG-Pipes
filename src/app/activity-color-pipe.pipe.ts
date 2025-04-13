import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'activityColorPipe',
  standalone: true
})
export class ActivityColorPipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if(value === 'active'){
      return 'green'
    }
    else if(value === 'inactive'){
      return 'yellow'
    }
    else if(value === 'banned'){
      return 'red'
    }
    else{
      return 'black';
    }

  }

}

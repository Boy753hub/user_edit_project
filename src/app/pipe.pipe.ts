import { Pipe, PipeTransform } from '@angular/core';


@Pipe({ name: 'shortingname' })
export class PipePipe implements PipeTransform {
 //pipe that turns names short 
  transform(value: string, ): string {
    return value.length < 10
      ? value
      : value.slice(0, 10) + '...';
  }
}
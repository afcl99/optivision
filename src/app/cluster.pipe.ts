import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cluster'
})
export class ClusterPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}

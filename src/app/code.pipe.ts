import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'code'
})
export class CodePipe implements PipeTransform {

  transform(code: number): string {

    return `${code} (sn)`;
  }

}

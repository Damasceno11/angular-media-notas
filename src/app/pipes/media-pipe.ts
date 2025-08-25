import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'media',
  standalone: true,
})
export class MediaPipe implements PipeTransform {
  transform(nota1: number, nota2: number): number {
    return (nota1 + nota2) / 2;
  }
}

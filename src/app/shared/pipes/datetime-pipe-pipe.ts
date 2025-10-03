import { Pipe, PipeTransform } from '@angular/core';
import dayjs from 'dayjs';

type ValidDateFormat = 'HH:mm' | 'DD-MMM-YYYY' | 'DD-MMM-YYYY HH:mm';

@Pipe({
  name: 'dateTimeFormat',
})
export class DateTimeFormatPipe implements PipeTransform {
  transform(rawDate: Date, arg: ValidDateFormat): string {
    return dayjs(rawDate).format(arg);
  }
}

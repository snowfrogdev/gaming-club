export class Period {
  constructor(private start: Date, private end: Date) {
    if (start > end) throw RangeError('Start date cannot be after end date.');
    if (start.getTime() === end.getTime()) throw RangeError('Start date and end date cannot be identical.');
  }

  isBeforePeriod(other: Period): boolean {
    return this.end.getTime() <= other.start.getTime();
  }

  isAfterDate(date: Date): boolean {
    return this.start > date;
  }
}

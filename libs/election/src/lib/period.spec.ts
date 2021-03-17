import { Period } from "./Period";

describe('Period', () => {
  test('constructor should throw if start date is after end date', () => {
    const callback = () => new Period(new Date(2021, 11), new Date(2000, 1));

    expect(callback).toThrow();
  })

  test('constructor should throw if start date is equal to end date', () => {
    const callback = () => new Period(new Date(2021, 11), new Date(2021, 11));

    expect(callback).toThrow();
  });

  test('constructor should not throw if start date is before end date', () => {
    const callback = () => new Period(new Date(2000, 1), new Date(2021, 11));

    expect(callback).not.toThrow();
  });

  test('.isBefore(other) should return true when the end date is before the start date of other period', () => {
    const period = new Period(new Date(2021, 1), new Date(2021, 3));
    const other = new Period(new Date(2021, 6), new Date(2021, 9));

    expect(period.isBefore(other)).toBeTruthy();
  })

  test('.isBefore(other) should return false when the end date is after the start date of other period', () => {
    const period = new Period(new Date(2021, 1), new Date(2021, 3));
    const other = new Period(new Date(2021, 2), new Date(2021, 4));

    expect(period.isBefore(other)).toBeFalsy();
  });
})





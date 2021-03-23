import * as Specifications from './specifications';

describe('GreaterThan', () => {
  it('returns false when candidate is smaller than value', () => {
    const greaterThanTen = new Specifications.GreaterThan(10);


    expect(greaterThanTen.isSatisfiedBy(3)).toBeFalsy();
  });

  it('returns false when candidate is equal to value', () => {
    const greaterThanZero = new Specifications.GreaterThan(0);

    expect(greaterThanZero.isSatisfiedBy(0)).toBeFalsy();
  });

  it('returns true when candidate is greater than value', () => {
    const greaterThanMinusTen = new Specifications.GreaterThan(-10);

    expect(greaterThanMinusTen.isSatisfiedBy(-3)).toBeTruthy();
  });
});

describe('GreaterThanOrEqualTo', () => {
  it('returns false when candidate is smaller than value', () => {
    const greaterOrEqualToTen = new Specifications.GreaterThanOrEqualTo(10);

    expect(greaterOrEqualToTen.isSatisfiedBy(3)).toBeFalsy();
  });

  it('returns true when candidate is equal to value', () => {
    const greaterOrEqualToZero = new Specifications.GreaterThanOrEqualTo(0);

    expect(greaterOrEqualToZero.isSatisfiedBy(0)).toBeTruthy();
  });

  it('returns true when candidate is greater than value', () => {
    const greaterOrEqualToMinusTen = new Specifications.GreaterThanOrEqualTo(-10);

    expect(greaterOrEqualToMinusTen.isSatisfiedBy(-3)).toBeTruthy();
  });
});

describe('LessThan', () => {
  it('returns true when candidate is smaller than value', () => {
    const lessThanTen = new Specifications.LessThan(10);

    expect(lessThanTen.isSatisfiedBy(3)).toBeTruthy();
  });

  it('returns false when candidate is equal to value', () => {
    const lessThanZero = new Specifications.LessThan(0);

    expect(lessThanZero.isSatisfiedBy(0)).toBeFalsy();
  });

  it('returns false when candidate is greater than value', () => {
    const lessThanMinusTen = new Specifications.LessThan(-10);

    expect(lessThanMinusTen.isSatisfiedBy(-3)).toBeFalsy();
  });
});

describe('LessThanOrEqualTo', () => {
  it('returns true when candidate is smaller than value', () => {
    const lessThanOrEqualToTen = new Specifications.LessThanOrEqualTo(10);

    expect(lessThanOrEqualToTen.isSatisfiedBy(3)).toBeTruthy();
  });

  it('returns true when candidate is equal to value', () => {
    const lessThanOrEqualToZero = new Specifications.LessThanOrEqualTo(0);

    expect(lessThanOrEqualToZero.isSatisfiedBy(0)).toBeTruthy();
  });

  it('returns false when candidate is greater than value', () => {
    const lessThanOrEqualToMinusTen = new Specifications.LessThanOrEqualTo(-10);

    expect(lessThanOrEqualToMinusTen.isSatisfiedBy(-3)).toBeFalsy();
  });
});

describe('Between', () => {
  it('returns true when candidate is smaller or equal to max and greater or equal to min', () => {
    const betweenMinusTenAndTen = new Specifications.Between(-10, 10);

    expect(betweenMinusTenAndTen.isSatisfiedBy(0)).toBeTruthy();
  });

  it('returns false when candidate is smaller than min', () => {
    const betweenTenAndTwenty = new Specifications.Between(10, 20);

    expect(betweenTenAndTwenty.isSatisfiedBy(5)).toBeFalsy();
  });

  it('returns false when candidate is greater than max', () => {
    const betweenMinusTwentyAndMinusTen = new Specifications.Between(-20, -10);

    expect(betweenMinusTwentyAndMinusTen.isSatisfiedBy(-5)).toBeFalsy();
  });
});


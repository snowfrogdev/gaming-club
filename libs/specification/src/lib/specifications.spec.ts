import * as Specifications from './specifications';

describe('GreaterThan', () => {
  it('returns false when candidate is smaller than value', () => {
    const greaterThanFive = new Specifications.GreaterThan(10);


    expect(greaterThanFive.isSatisfiedBy(3)).toBeFalsy();
  });

  it('returns false when candidate is equal to value', () => {
    const greaterThanTen = new Specifications.GreaterThan(0);

    expect(greaterThanTen.isSatisfiedBy(0)).toBeFalsy();
  });

  it('returns true when candidate is greater than value', () => {
    const greaterThanTen = new Specifications.GreaterThan(-10);

    expect(greaterThanTen.isSatisfiedBy(-3)).toBeTruthy();
  });
});

describe('GreaterThanOrEqualTo', () => {
  it('returns false when candidate is smaller than value', () => {
    const greaterThanFive = new Specifications.GreaterThanOrEqualTo(10);

    expect(greaterThanFive.isSatisfiedBy(3)).toBeFalsy();
  });

  it('returns true when candidate is equal to value', () => {
    const greaterThanTen = new Specifications.GreaterThanOrEqualTo(0);

    expect(greaterThanTen.isSatisfiedBy(0)).toBeTruthy();
  });

  it('returns true when candidate is greater than value', () => {
    const greaterThanTen = new Specifications.GreaterThanOrEqualTo(-10);

    expect(greaterThanTen.isSatisfiedBy(-3)).toBeTruthy();
  });
});

describe('LessThan', () => {
  it('returns true when candidate is smaller than value', () => {
    const greaterThanFive = new Specifications.LessThan(10);

    expect(greaterThanFive.isSatisfiedBy(3)).toBeTruthy();
  });

  it('returns false when candidate is equal to value', () => {
    const greaterThanTen = new Specifications.LessThan(0);

    expect(greaterThanTen.isSatisfiedBy(0)).toBeFalsy();
  });

  it('returns false when candidate is greater than value', () => {
    const greaterThanTen = new Specifications.LessThan(-10);

    expect(greaterThanTen.isSatisfiedBy(-3)).toBeFalsy();
  });
});

describe('LessThanOrEqualTo', () => {
  it('returns true when candidate is smaller than value', () => {
    const greaterThanFive = new Specifications.LessThanOrEqualTo(10);

    expect(greaterThanFive.isSatisfiedBy(3)).toBeTruthy();
  });

  it('returns true when candidate is equal to value', () => {
    const greaterThanTen = new Specifications.LessThanOrEqualTo(0);

    expect(greaterThanTen.isSatisfiedBy(0)).toBeTruthy();
  });

  it('returns false when candidate is greater than value', () => {
    const greaterThanTen = new Specifications.LessThanOrEqualTo(-10);

    expect(greaterThanTen.isSatisfiedBy(-3)).toBeFalsy();
  });
});


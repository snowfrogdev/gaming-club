import { CompositeSpecification } from './abstractions/composite-specification';
import { Visitor } from './abstractions/specification';

export class GreaterThan extends CompositeSpecification<number> {
  constructor(readonly value: number) {
    super();
  }

  isSatisfiedBy(candidate: number): boolean {
    return candidate > this.value;
  }

  accept<R>(visitor: Visitor<R>): R {
    return visitor.visitGreaterThan(this);
  }
}

export class GreaterThanOrEqualTo extends CompositeSpecification<number> {
  accept<R>(visitor: Visitor<R>): R {
    throw new Error('Method not implemented.');
  }
  constructor(readonly value: number) {
    super();
  }
  isSatisfiedBy(candidate: number): boolean {
    return candidate >= this.value;
  }
}

export class LessThan extends CompositeSpecification<number> {
  constructor(readonly value: number) {
    super();
  }

  isSatisfiedBy(candidate: number): boolean {
    return candidate < this.value;
  }

  accept<R>(visitor: Visitor<R>): R {
    return visitor.visitLessThan(this);
  }
}

export class LessThanOrEqualTo extends CompositeSpecification<number> {
  accept<R>(visitor: Visitor<R>): R {
    throw new Error('Method not implemented.');
  }
  constructor(readonly value: number) {
    super();
  }
  isSatisfiedBy(candidate: number): boolean {
    return candidate <= this.value;
  }
}

export class Between extends CompositeSpecification<number> {
  constructor(readonly min: number, readonly max: number) {
    super();
  }
  
  isSatisfiedBy(candidate: number): boolean {
    return candidate >= this.min && candidate <= this.max;
  }

  accept<R>(visitor: Visitor<R>): R {
    return visitor.visitBetween(this);
  }
}

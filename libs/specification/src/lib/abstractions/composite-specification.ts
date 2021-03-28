import { Specification, Visitor } from './specification';

export abstract class CompositeSpecification<T> implements Specification<T> {
  abstract isSatisfiedBy(candidate: T): boolean;
  abstract accept<R>(visitor: Visitor<R>): R;

  and(other: Specification<T>): Specification<T> {
    return new AndSpecification<T>(this, other);
  }
  andNot(other: Specification<T>): Specification<T> {
    return new AndNotSpecification<T>(this, other);
  }
  or(other: Specification<T>): Specification<T> {
    return new OrSpecification<T>(this, other);
  }
  orNot(other: Specification<T>): Specification<T> {
    return new OrNotSpecification<T>(this, other);
  }
  not(): Specification<T> {
    return new NotSpecification<T>(this);
  }
}

export class AndSpecification<T> extends CompositeSpecification<T> {
  constructor(readonly left: Specification<T>, readonly right: Specification<T>) {
    super();
  }

  isSatisfiedBy(candidate: T): boolean {
    return this.left.isSatisfiedBy(candidate) && this.right.isSatisfiedBy(candidate);
  }

  accept<R>(visitor: Visitor<R>): R {
    return visitor.visitAndSpecification(this);
  }
}

export class AndNotSpecification<T> extends CompositeSpecification<T> {
  constructor(readonly left: Specification<T>, readonly right: Specification<T>) {
    super();
  }

  isSatisfiedBy(candidate: T): boolean {
    return this.left.isSatisfiedBy(candidate) && !this.right.isSatisfiedBy(candidate);
  }

  accept<R>(visitor: Visitor<R>): R {
    return visitor.visitAndNotSpecification(this);
  }
}

export class OrSpecification<T> extends CompositeSpecification<T> {
  accept<R>(visitor: Visitor<R>): R {
    throw new Error('Method not implemented.');
  }
  constructor(private left: Specification<T>, private right: Specification<T>) {
    super();
  }

  isSatisfiedBy(candidate: T): boolean {
    return this.left.isSatisfiedBy(candidate) || this.right.isSatisfiedBy(candidate);
  }
}

export class OrNotSpecification<T> extends CompositeSpecification<T> {
  accept<R>(visitor: Visitor<R>): R {
    throw new Error('Method not implemented.');
  }
  constructor(private left: Specification<T>, private right: Specification<T>) {
    super();
  }

  isSatisfiedBy(candidate: T): boolean {
    return this.left.isSatisfiedBy(candidate) || !this.right.isSatisfiedBy(candidate);
  }
}

export class NotSpecification<T> extends CompositeSpecification<T> {
  accept<R>(visitor: Visitor<R>): R {
    throw new Error('Method not implemented.');
  }
  constructor(private other: Specification<T>) {
    super();
  }

  isSatisfiedBy(candidate: T): boolean {
    return !this.other.isSatisfiedBy(candidate);
  }
}

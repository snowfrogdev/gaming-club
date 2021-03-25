import { GreaterThan, LessThan } from "../specifications";
import { AndSpecification } from "./composite-specification";

export interface Specification<T> {
  isSatisfiedBy(candidate: T): boolean;
  accept<R>(visitor: Visitor<R>): R;
  and(other: Specification<T>): Specification<T>;
  andNot(other: Specification<T>): Specification<T>;
  or(other: Specification<T>): Specification<T>;
  orNot(other: Specification<T>): Specification<T>;
  not(): Specification<T>;
}

export interface Visitor<R> {
  visitAndSpecification<T>(specification: AndSpecification<T>): R;
  visitGreaterThan(specification: GreaterThan): R;
  visitLessThan(specification: LessThan): R;
}
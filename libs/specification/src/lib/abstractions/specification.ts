export interface Specification<T> {
  isSatisfiedBy(candidate: T): boolean;
  and(other: Specification<T>): Specification<T>;
  andNot(other: Specification<T>): Specification<T>;
  or(other: Specification<T>): Specification<T>;
  orNot(other: Specification<T>): Specification<T>;
  not(): Specification<T>;
}

import { CompositeSpecification as Specifications } from "./abstractions/composite-specification";

export class GreaterThan extends Specifications<number> {
  constructor(private value: number) {
    super();
  }
  isSatisfiedBy(candidate: number): boolean {
    return candidate > this.value;
  }
}

import { AndNotSpecification, AndSpecification } from './abstractions/composite-specification';
import { Specification, Visitor } from './abstractions/specification';
import { Between, GreaterThan, LessThan } from './specifications';

describe('Visitor', () => {
  test('', () => {
    const mySpec = new GreaterThan(0).and(new LessThan(15)).andNot(new Between(5, 10));
    const equivalentSpec = new AndNotSpecification(new AndSpecification(new GreaterThan(0), new LessThan(15)), new Between(5, 10));
    const visitor = new TestVisitor();
    console.log(visitor.evaluate(mySpec));
    console.log(visitor.evaluate(equivalentSpec));
  });
});

class TestVisitor implements Visitor<string> {
  evaluate<T>(specification: Specification<T>): string {
    return specification.accept(this);
  }

  visitAndSpecification<T>(specification: AndSpecification<T>): string {
    const left = this.evaluate(specification.left);
    const right = this.evaluate(specification.right);

    return `(${left} AND ${right})`;
  }

  visitAndNotSpecification<T>(specification: AndNotSpecification<T>): string {
    const left = this.evaluate(specification.left);
    const right = this.evaluate(specification.right);

    return `(${left} AND NOT ${right})`;
  }

  visitGreaterThan(specification: GreaterThan): string {
    return `GREATER THAN ${specification.value}`;
  }

  visitLessThan(specification: LessThan): string {
    return `LESS THAN ${specification.value}`;
  }

  visitBetween(specification: Between): string {
    return `BETWEEN ${specification.min} AND ${specification.max}`;
  }
}

import { AndSpecification } from './abstractions/composite-specification';
import { Specification } from './abstractions/specification';
import { GreaterThan, LessThan } from './specifications';

describe('Visitor', () => {
  test('', () => {
    const betweenFiveAndTenExclusive = new GreaterThan(5).and(new LessThan(10)).and(new GreaterThan(3));
    const visitor = new TestVisitor();
    console.log(visitor.evaluate(betweenFiveAndTenExclusive));
  });
});

class TestVisitor {
  evaluate<T>(specification: Specification<T>): string {
    return specification.accept(this);
  }

  visitAndSpecification<T>(specification: AndSpecification<T>): string {
    const left = this.evaluate(specification.left);
    const right = this.evaluate(specification.right);

    return `(${left} AND ${right})`;
  }

  visitGreaterThan(specification: GreaterThan): string {
    return `GREATER THAN ${specification.value}`;
  }

  visitLessThan(specification: LessThan): string {
    return `LESS THAN ${specification.value}`;
  }
}

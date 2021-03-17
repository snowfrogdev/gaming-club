import { Election } from './election';
import { MemberId } from './member-id';
import { TriggerElection } from './trigger-election';

describe('Election', () => {
  test('constructor should throw if voting period starts before nomination period ends', () => {
    const command = new TriggerElection(
      new MemberId('1'),
      new Date(2021, 4),
      new Date(2021, 7),
      new Date(2021, 5),
      new Date(2021, 6)
    );

    const callback = () => new Election(command);

    expect(callback).toThrow();
  });

  test('constructor should not throw if voting period starts after nomination period ends', () => {
    const command = new TriggerElection(
      new MemberId('1'),
      new Date(2021, 4),
      new Date(2021, 5),
      new Date(2021, 6),
      new Date(2021, 7)
    );

    const callback = () => new Election(command);

    expect(callback).not.toThrow();
  });

  test('constructor should not throw if voting period starts at nomination period end', () => {
    const command = new TriggerElection(
      new MemberId('1'),
      new Date(2021, 4),
      new Date(2021, 5),
      new Date(2021, 5),
      new Date(2021, 6)
    );

    const callback = () => new Election(command);

    expect(callback).not.toThrow();
  });

  test('constructor should throw if nomination period start is the past', () => {
    const now = () => new Date(2022, 1);
    const command = new TriggerElection(
      new MemberId('1'),
      new Date(2021, 4),
      new Date(2021, 5),
      new Date(2021, 5),
      new Date(2021, 6)
    );

    const callback = () => new Election(command, now);

    expect(callback).toThrow();
  })

  test('constructor should throw if nomination period start is now', () => {
    const now = () => new Date(2022, 4);
    const command = new TriggerElection(
      new MemberId('1'),
      new Date(2021, 4),
      new Date(2021, 5),
      new Date(2021, 5),
      new Date(2021, 6)
    );

    const callback = () => new Election(command, now);

    expect(callback).toThrow();
  });

  test('constructor should not throw if nomination period start is in the future', () => {
    const now = () => new Date(2020, 4);
    const command = new TriggerElection(
      new MemberId('1'),
      new Date(2021, 4),
      new Date(2021, 5),
      new Date(2021, 5),
      new Date(2021, 6)
    );

    const callback = () => new Election(command, now);

    expect(callback).not.toThrow();
  });
});

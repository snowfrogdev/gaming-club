import { Election } from './election';
import { Entity } from './entity';
import { TriggerElection } from './trigger-election';

export class Club extends Entity {
  constructor(private id: ClubId, private _elections = new Set<Election>()) {
    super();
  }

  get elections(): ReadonlySet<Election> {
    return this._elections;
  }

  triggerElection(command: TriggerElection): void {
    if ([...this._elections].some((election) => election.isInProgress())) {
      throw new Error(
        'An Election process has already been started. You cannot have more than one Election at a time.'
      );
    }

    this._elections.add(new Election(command));
  }
}

export class ClubId {
  constructor(private id: string) {}
}

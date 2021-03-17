import { Election } from './election';
import { Entity } from './entity';
import { TriggerElection } from './trigger-election';

export class Club extends Entity {
  get elections(): ReadonlySet<Election> {
    return this._elections;
  }

  constructor(private id: ClubId, private _elections = new Set<Election>()) {
    super();
  }

  triggerElection(command: TriggerElection): void {
    if ([...this._elections].some(election => election.isInProgress())) {
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

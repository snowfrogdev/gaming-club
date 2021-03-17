import { MemberId } from './member-id';
import { Period } from './period';
import { TriggerElection } from './trigger-election';

export class Election {
  private electionAdministratorId: MemberId;
  private nominationPeriod: Period;
  private votingPeriod: Period;
  private state: ElectionState = ElectionState.PendingNominations;

  constructor(command: TriggerElection) {
    this.electionAdministratorId = command.memberId;
    this.nominationPeriod = new Period(
      command.nominationStart,
      command.nominationEnd
    );
    this.votingPeriod = new Period(command.votingStart, command.votingEnd);
  }

  isInProgress(): boolean {
    return (
      this.state !== ElectionState.Cancelled &&
      this.state !== ElectionState.Closed
    );
  }
}

enum ElectionState {
  PendingNominations,
  Nominations,
  PendingVoting,
  Voting,
  Closed,
  Cancelled,
}

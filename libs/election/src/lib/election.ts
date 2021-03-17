import { MemberId } from './member-id';
import { Period } from './period';
import { TriggerElection } from './trigger-election';

export class Election {
  private electionAdministratorId: MemberId;
  private nominationPeriod!: Period;
  private votingPeriod!: Period;
  private state: ElectionState = ElectionState.PendingNominations;

  constructor(command: TriggerElection) {
    this.electionAdministratorId = command.memberId;
    const nominationPeriod = new Period(command.nominationStart, command.nominationEnd);
    const votingPeriod = new Period(command.votingStart, command.votingEnd);
    this.setPeriods(nominationPeriod, votingPeriod);
  }

  private setPeriods(nomination: Period, voting: Period): void {
    if (!nomination.isBefore(voting)) throw RangeError('Voting period cannot precede or overlap nomination period.');

    this.nominationPeriod = nomination;
    this.votingPeriod = voting;
  }

  isInProgress(): boolean {
    return this.state !== ElectionState.Cancelled && this.state !== ElectionState.Closed;
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

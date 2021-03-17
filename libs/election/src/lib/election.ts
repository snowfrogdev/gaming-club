import { MemberId } from "./member-id";
import { TriggerElection } from "./trigger-election";

export class Election {
  private electionAdministratorId: MemberId;
  private nominationPeriod: NominationPeriod;
  private votingPeriod: VotingPeriod;
  private state: ElectionState = ElectionState.PendingNominations;

  constructor(command: TriggerElection) {
    this.electionAdministratorId = command.memberId;
    this.nominationPeriod = new NominationPeriod(command.nominationStart, command.nominationEnd);
    this.votingPeriod = new VotingPeriod(command.votingStart, command.votingEnd);
  }

  isInProgress(): boolean {
    return this.state !== ElectionState.Cancelled && this.state !== ElectionState.Closed;
  }
}

class NominationPeriod {
  constructor(private start: Date, private end: Date) { }
}

class VotingPeriod {
  constructor(private start: Date, private end: Date) { }
}

enum ElectionState {
  PendingNominations,
  Nominations,
  PendingVoting,
  Voting,
  Closed,
  Cancelled
}
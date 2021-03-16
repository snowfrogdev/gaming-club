import { v4 as uuid } from 'uuid';
import { Entity } from "./entity";
import { MemberId } from "./member-id";
import { TriggerElection } from "./trigger-election";

export class Election extends Entity {
  private id: ElectionId;
  private electionAdministratorId: MemberId;
  private nominationPeriod: NominationPeriod;
  private votingPeriod: VotingPeriod;
  constructor(command: TriggerElection) {
    super();
    this.id = new ElectionId(uuid());
    this.electionAdministratorId = command.memberId;
    this.nominationPeriod = new NominationPeriod(command.nominationStart, command.nominationEnd);
    this.votingPeriod = new VotingPeriod(command.votingStart, command.votingEnd);
  }
}

class ElectionId {
  constructor(readonly id: string) { }
}

class NominationPeriod {
  constructor(private start: Date, private end: Date) { }
}

class VotingPeriod {
  constructor(private start: Date, private end: Date) { }
}
import { MemberId } from "./member-id";

export class TriggerElection {
  constructor(
    readonly memberId: MemberId,
    readonly nominationStart: Date,
    readonly nominationEnd: Date,
    readonly votingStart: Date,
    readonly votingEnd: Date
  ) { }
}
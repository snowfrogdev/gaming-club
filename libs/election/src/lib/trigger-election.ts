import { ClubId } from "./club";
import { MemberId } from "./member-id";

export class TriggerElection {
  constructor(
    readonly clubId: ClubId,
    readonly memberId: MemberId,
    readonly nominationStart: Date,
    readonly nominationEnd: Date,
    readonly votingStart: Date,
    readonly votingEnd: Date
  ) { }
}
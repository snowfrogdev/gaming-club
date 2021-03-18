import { Club } from "./club";
import { ClubRepository } from "./club.repository";
import { CommandService } from "./command.service";
import { TriggerElection } from "./trigger-election";

export class TriggerElectionService implements CommandService<TriggerElection> {
  constructor(private clubRepo: ClubRepository) {}
  execute(command: TriggerElection): void {
    const club: Club = this.clubRepo.getById(command.clubId);
    club.triggerElection(command);
    this.clubRepo.save(club);
  }
}
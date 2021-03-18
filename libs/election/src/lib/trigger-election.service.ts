import { ClubRepository } from './club.repository';
import { CommandService } from './command.service';
import { Club } from './domain/model/club/club';
import { TriggerElection } from './domain/model/club/trigger-election';

export class TriggerElectionService implements CommandService<TriggerElection> {
  constructor(private clubRepo: ClubRepository) {}
  execute(command: TriggerElection): void {
    const club: Club = this.clubRepo.getById(command.clubId);
    club.triggerElection(command);
    this.clubRepo.save(club);
  }
}

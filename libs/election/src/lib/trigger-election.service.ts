import { DomainService } from "./domain.service";
import { Election } from "./election";
import { ElectionRepository } from "./election.repository";
import { TriggerElection } from "./trigger-election";

export class TriggerElectionService implements DomainService<TriggerElection> {
  constructor(private repo: ElectionRepository) {}
  execute(command: TriggerElection): void {
    const election = new Election(command);
    this.repo.save(election);
  }
}




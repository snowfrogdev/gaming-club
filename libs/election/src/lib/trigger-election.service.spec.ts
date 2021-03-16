import { Election } from './election';
import { ElectionRepository } from './election.repository';
import { MemberId } from './member-id';
import { TriggerElection } from './trigger-election';
import { TriggerElectionService } from './trigger-election.service';
describe('TriggerElectionService', () => {
  it('.trigger() should save a new Election on the ElectionRepository', () => {
    let election: Election;
    const repo: ElectionRepository = { save: (electionParam) => { election = electionParam; } };
    const service = new TriggerElectionService(repo);
    const command = new TriggerElection(new MemberId('1'), new Date(2021, 4), new Date(2021, 5), new Date(2021, 6), new Date(2021, 7));
    
    service.execute(command);

    expect(election).toBeInstanceOf(Election);
  });
});

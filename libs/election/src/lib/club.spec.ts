import { mock } from 'jest-mock-extended';
import { Club, ClubId } from './club';
import { Election } from './election';
import { MemberId } from './member-id';
import { TriggerElection } from './trigger-election';

describe('Club', () => {
  it('.triggerElection() should create a new Election', () => {
    const club = new Club(new ClubId('1'));
    const command = new TriggerElection(
      new ClubId('1'),
      new MemberId('1'),
      new Date(2021, 4),
      new Date(2021, 5),
      new Date(2021, 6),
      new Date(2021, 7)
    );

    club.triggerElection(command);

    expect(club.elections).toContainEqual(expect.any(Election));
  });

  it('.triggerElection() should not create a new Election if there is already one in Progress', () => {
    const election = mock<Election>();
    election.isInProgress.mockReturnValue(true);
    const club = new Club(new ClubId('1'), new Set([election]));

    const command = new TriggerElection(
      new ClubId('1'),
      new MemberId('1'),
      new Date(2021, 4),
      new Date(2021, 5),
      new Date(2021, 6),
      new Date(2021, 7)
    );

    expect(() => club.triggerElection(command)).toThrow();
  });
});

import { Club } from './domain/model/club/club';
import { ClubId } from './domain/model/club/club-id';

export interface ClubRepository {
  getById(id: ClubId): Club;
  save(club: Club): void;
}

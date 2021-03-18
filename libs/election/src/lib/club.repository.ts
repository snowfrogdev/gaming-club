import { Club, ClubId } from "./club";

export interface ClubRepository {
  getById(id: ClubId): Club;
  save(club: Club): void;
}
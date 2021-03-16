import { Election } from "./election";

export interface ElectionRepository {
  save(election: Election): void;
}
export interface DomainService<TCommand> {
  execute(command: TCommand): void;
}
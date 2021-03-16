export interface CommandService<TCommand> {
  execute(command: TCommand): void;
}
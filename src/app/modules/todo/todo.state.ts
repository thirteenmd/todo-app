import { Todo } from './models/todo'

export interface AppState {
  readonly todos: Todo[];
  readonly visibilityFilter: string;
}

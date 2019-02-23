import { Action } from '@ngrx/store';

export const SetFilter = '[VisibilityFilter] Set Visibility Filter';

export class SetVisibilityFilter implements Action {
  readonly type = SetFilter;

  constructor(public payload: any) { }
}

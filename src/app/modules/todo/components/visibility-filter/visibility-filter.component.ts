import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { AppState } from '../../reducers';
import { getVisibilityFilter } from '../../selectors/todo.selectors';
import { SetVisibilityFilter } from '../../actions/visibility-filter.actions';
import * as FilterValues from '../../../../shared/constants/visibility-filter';

@Component({
  selector: 'app-visibility-filter',
  templateUrl: './visibility-filter.component.html'
})
export class VisibilityFilterComponent implements OnInit {
  todosFilter: string;

  constructor(private store: Store<AppState>) {
    this.store.pipe(select(getVisibilityFilter))
      .subscribe(todosFilter => this.todosFilter = todosFilter);
  }

  ngOnInit() {
  }

  setVisibilityFilter(filter) {
    switch (filter) {
      case 'finished': {
        this.store.dispatch(new SetVisibilityFilter(FilterValues.SHOW_FINISHED));
        break;
      }
      case 'notFinished': {
        this.store.dispatch(new SetVisibilityFilter(FilterValues.SHOW_NOT_FINISHED));
        break;
      }
      default: {
        this.store.dispatch(new SetVisibilityFilter(FilterValues.SHOW_ALL));
        break;
      }
    }
  }
}

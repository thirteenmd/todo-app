import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from '../../reducers';
import { getVisibilityFilter } from '../../selectors/todo.selectors';
import * as VisibilityFilterActions from '../../actions/visibility-filter.actions';
import * as FilterValues from '../../../../shared/constants/visibility-filter';

@Component({
  selector: 'app-visibility-filter',
  templateUrl: './visibility-filter.component.html',
  styleUrls: ['./visibility-filter.component.css']
})
export class VisibilityFilterComponent implements OnInit {
  todosFilter: string;

  constructor(private store: Store<AppState>) {
    this.store.select(getVisibilityFilter)
      .subscribe(todos => {
        this.todosFilter = todos;
      });
   }

  ngOnInit() {
  }

  setVisibilityFilter(filter) {
    switch (filter) {
      case 'finished': {
        this.store.dispatch(new VisibilityFilterActions.SetVisibilityFilter(FilterValues.SHOW_FINISHED));
        break;
      }
      case 'notFinished': {
        this.store.dispatch(new VisibilityFilterActions.SetVisibilityFilter(FilterValues.SHOW_NOT_FINISHED));
        break;
      }
      default: {
        this.store.dispatch(new VisibilityFilterActions.SetVisibilityFilter(FilterValues.SHOW_ALL));
        break;
      }
    }
  }
}

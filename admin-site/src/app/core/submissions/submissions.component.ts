import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AuthStore, SetMessage } from '../auth/auth.store';

@Component({
  selector: 'app-submissions',
  templateUrl: './submissions.component.html',
  styleUrls: ['./submissions.component.sass'],
})
export class SubmissionsComponent {
  @Select(AuthStore.message) message$!: Observable<string | null>;

  constructor(private readonly store: Store) {}

  setMessage() {
    this.store.dispatch(new SetMessage('Hello World!'));
  }
}

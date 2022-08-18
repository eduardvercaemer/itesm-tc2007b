import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { AuthApi } from './auth.api';

export interface AuthUser {
  id: string;
  email: string;
  accessToken: string;
}

export interface AuthModel {
  auth: AuthUser | null;
  loading: boolean;
  error: string | null;
}

export class SetMessage {
  static readonly type = '[Auth] SetMessage';
  constructor(public message: string) {}
}

@State<AuthModel>({
  name: 'auth',
  defaults: {
    auth: null,
    loading: false,
    error: null,
  },
})
@Injectable()
export class AuthStore {
  constructor(private readonly authApi: AuthApi) {}

  @Selector()
  static message(state: AuthModel) {
    return state.error;
  }

  @Action(SetMessage)
  setMessage(ctx: StateContext<AuthModel>, { message }: SetMessage) {
    ctx.patchState({ error: message });
  }
}

import { UserKind } from './UserKind';

export class Auth {
  constructor(
    readonly accessToken: string,
    readonly kind: UserKind,
    readonly id: string,
    readonly email?: string,
    readonly name?: string,
  ) {}
}

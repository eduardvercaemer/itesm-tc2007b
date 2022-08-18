create type user_kind as enum ('admin', 'user');
create table if not exists "user" (
  "id" uuid not null default uuid_generate_v4(),
  "kind" user_kind not null default 'user',

  "email" varchar,
  "password" varchar,

  constraint "user_pkey" primary key ("id"),
  constraint "user_email_uq" unique ("email")
);
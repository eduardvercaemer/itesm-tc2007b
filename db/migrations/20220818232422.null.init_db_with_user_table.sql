create extension if not exists "uuid-ossp" with schema "public" version '1.1';

create type "public"."user_kind" as enum ('admin', 'user');

create table "public"."user" (
    "id" uuid not null default uuid_generate_v4(),
    "kind" user_kind not null default 'user'::user_kind,
    "email" character varying,
    "password" character varying
);


CREATE UNIQUE INDEX user_email_uq ON public."user" USING btree (email);

alter table "public"."user" add constraint "user_email_uq" UNIQUE using index "user_email_uq";
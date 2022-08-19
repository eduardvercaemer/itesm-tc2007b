create type field_kind as enum ('yesno', 'text', 'number', 'select');

create table if not exists "field"
(
    "id"           uuid       not null default uuid_generate_v4(),
    "form_id"      uuid       not null,
    "enabled"      boolean    not null default true,
    "kind"         field_kind not null default 'text',
    "name"         varchar,
    "main_content" text       not null,
    "options"      jsonb      not null default '[]',
    constraint "field_pkey" primary key ("id")
);

create table if not exists "answer"
(
    "id"            uuid not null default uuid_generate_v4(),
    "field_id"      uuid not null,
    "submission_id" uuid not null,
    "yes_no_answer" boolean,
    "text_answer"   text,
    "number_answer" integer,
    "select_answer" integer,
    constraint "answer_pkey" primary key ("id")
);

create table if not exists "form"
(
    "id"      uuid    not null default uuid_generate_v4(),
    "enabled" boolean not null default true,
    constraint "form_pkey" primary key ("id")
);

create table if not exists "submission"
(
    "id"      uuid not null default uuid_generate_v4(),
    "form_id" uuid not null,
    constraint "submission_pkey" primary key ("id")
);

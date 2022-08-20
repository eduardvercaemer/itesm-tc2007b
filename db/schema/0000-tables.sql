create schema if not exists public;

create extension "uuid-ossp" schema public;

create type public.field_kind
as enum (
    'yes-no',
    'text',
    'number',
    'select'
    );

create table if not exists
    public.form
(
    "id"          uuid         not null default uuid_generate_v4() primary key,
    "name"        varchar(255) not null,
    "description" text,
    "enabled"     boolean      not null default true,

    "created_at"  timestamptz  not null default now()
);

create table if not exists
    public.field
(
    "id"             uuid         not null default uuid_generate_v4() primary key,
    "name"           varchar(255) not null,
    "description"    text,
    "kind"           field_kind   not null,
    "enabled"        boolean      not null default true,
    "optional"       boolean      not null default false,
    "form_id"        uuid         not null,

    "content"        text         not null,
    "select_options" jsonb,

    "created_at"     timestamptz  not null default now(),

    constraint "field_form_id_fk"
        foreign key ("form_id")
            references form ("id")
            on delete cascade
);

create table if not exists
    public.submission
(
    "id"         uuid        not null default uuid_generate_v4() primary key,
    "form_id"    uuid        not null,
    -- MISSING
    -- submitter_id
    -- geo position data

    "created_at" timestamptz not null default now(),

    constraint "submission_form_id_fk"
        foreign key ("form_id")
            references form ("id")
            on delete cascade
);

create table if not exists
    public.answer
(
    "id"            uuid        not null default uuid_generate_v4() primary key,
    "submission_id" uuid        not null,
    "field_id"      uuid        not null,

    "yes_no_answer" boolean,
    "text_answer"   text,
    "number_answer" numeric,
    "select_answer" int4,

    "created_at"    timestamptz not null default now(),

    constraint "answer_submission_id_fk"
        foreign key ("submission_id")
            references submission ("id")
            on delete cascade,
    constraint "answer_field_id_fk"
        foreign key ("field_id")
            references field ("id")
            on delete cascade
);

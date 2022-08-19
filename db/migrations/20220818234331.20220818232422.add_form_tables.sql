create type "public"."field_kind" as enum ('yesno', 'text', 'number', 'select');

create table "public"."answer" (
    "id" uuid not null default uuid_generate_v4(),
    "field_id" uuid not null,
    "submission_id" uuid not null,
    "yes_no_answer" boolean,
    "text_answer" text,
    "number_answer" integer,
    "select_answer" integer
);


create table "public"."field" (
    "id" uuid not null default uuid_generate_v4(),
    "form_id" uuid not null,
    "enabled" boolean not null default true,
    "kind" field_kind not null default 'text'::field_kind,
    "name" character varying,
    "main_content" text not null,
    "options" jsonb not null default '[]'::jsonb
);


create table "public"."form" (
    "id" uuid not null default uuid_generate_v4(),
    "enabled" boolean not null default true
);


create table "public"."submission" (
    "id" uuid not null default uuid_generate_v4(),
    "form_id" uuid not null
);


CREATE UNIQUE INDEX answer_pkey ON public.answer USING btree (id);

CREATE UNIQUE INDEX field_pkey ON public.field USING btree (id);

CREATE UNIQUE INDEX form_pkey ON public.form USING btree (id);

CREATE UNIQUE INDEX submission_pkey ON public.submission USING btree (id);

CREATE UNIQUE INDEX user_pkey ON public."user" USING btree (id);

alter table "public"."answer" add constraint "answer_pkey" PRIMARY KEY using index "answer_pkey";

alter table "public"."field" add constraint "field_pkey" PRIMARY KEY using index "field_pkey";

alter table "public"."form" add constraint "form_pkey" PRIMARY KEY using index "form_pkey";

alter table "public"."submission" add constraint "submission_pkey" PRIMARY KEY using index "submission_pkey";

alter table "public"."user" add constraint "user_pkey" PRIMARY KEY using index "user_pkey";

alter table "public"."answer" add constraint "answer_field_fk" FOREIGN KEY (field_id) REFERENCES field(id);

alter table "public"."answer" add constraint "answer_submission_fk" FOREIGN KEY (submission_id) REFERENCES submission(id);

alter table "public"."field" add constraint "field_form_fk" FOREIGN KEY (form_id) REFERENCES form(id);

alter table "public"."submission" add constraint "submission_form_fk" FOREIGN KEY (form_id) REFERENCES form(id);
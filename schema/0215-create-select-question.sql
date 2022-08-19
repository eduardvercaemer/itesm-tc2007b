create or replace function createSelectQuestion(
    "form_id" uuid,
    "name" varchar,
    "main_content" text,
    "options" jsonb
  ) returns uuid as $$
insert into "field" (
    "form_id",
    "name",
    "main_content",
    "options",
    "kind"
  )
values ($1, $2, $3, $4, 'select')
returning "id" $$ language sql;
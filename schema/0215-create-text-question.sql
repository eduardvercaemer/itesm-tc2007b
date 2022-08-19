create or replace function createTextQuestion(
    "form_id" uuid,
    "name" varchar,
    "main_content" text
  ) returns uuid as $$
insert into "field" ("form_id", "name", "main_content", "kind")
values ($1, $2, $3, 'text')
returning "id" $$ language sql;
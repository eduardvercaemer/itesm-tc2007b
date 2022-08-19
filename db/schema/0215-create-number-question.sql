create or replace function createNumberQuestion(
    "form_id" uuid,
    "name" varchar,
    "main_content" text
) returns uuid as
$$
insert into "field" ("form_id", "name", "main_content", "kind")
values ($1, $2, $3, 'number')
returning "id"
$$ language sql;
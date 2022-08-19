drop function if exists "public"."createselectquestion"(form_id uuid, name character varying, main_content text);

set check_function_bodies = off;

CREATE OR REPLACE FUNCTION public.createselectquestion(form_id uuid, name character varying, main_content text, options jsonb)
 RETURNS uuid
 LANGUAGE sql
AS $function$
insert into "field" (
    "form_id",
    "name",
    "main_content",
    "options",
    "kind"
  )
values ($1, $2, $3, $4, 'select')
returning "id" $function$
;
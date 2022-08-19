set check_function_bodies = off;

CREATE OR REPLACE FUNCTION public.createyesnoquestion(form_id uuid, name character varying, main_content text)
 RETURNS uuid
 LANGUAGE sql
AS $function$
insert into "field" ("form_id", "name", "main_content", "kind")
values ($1, $2, $3, 'yesno')
returning "id" $function$
;
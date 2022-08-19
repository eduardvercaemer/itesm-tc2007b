set check_function_bodies = off;

CREATE OR REPLACE FUNCTION public.createnumberquestion(form_id uuid, name character varying, main_content text)
 RETURNS uuid
 LANGUAGE sql
AS $function$
insert into "field" ("form_id", "name", "main_content", "kind")
values ($1, $2, $3, 'number')
returning "id" $function$
;

CREATE OR REPLACE FUNCTION public.createselectquestion(form_id uuid, name character varying, main_content text)
 RETURNS uuid
 LANGUAGE sql
AS $function$
insert into "field" ("form_id", "name", "main_content", "kind")
values ($1, $2, $3, 'select')
returning "id" $function$
;

CREATE OR REPLACE FUNCTION public.createtextquestion(form_id uuid, name character varying, main_content text)
 RETURNS uuid
 LANGUAGE sql
AS $function$
insert into "field" ("form_id", "name", "main_content", "kind")
values ($1, $2, $3, 'text')
returning "id" $function$
;
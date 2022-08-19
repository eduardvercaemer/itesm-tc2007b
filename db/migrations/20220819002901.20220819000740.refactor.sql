alter table "public"."answer" drop constraint "answer_field_fk";

alter table "public"."answer" drop constraint "answer_submission_fk";

alter table "public"."field" drop constraint "field_form_fk";

alter table "public"."submission" drop constraint "submission_form_fk";

set check_function_bodies = off;

CREATE OR REPLACE FUNCTION public.foo(data jsonb)
 RETURNS integer
 LANGUAGE sql
AS $function$
select 1
$function$
;

CREATE OR REPLACE FUNCTION public.createnumberquestion(form_id uuid, name character varying, main_content text)
 RETURNS uuid
 LANGUAGE sql
AS $function$
insert into "field" ("form_id", "name", "main_content", "kind")
values ($1, $2, $3, 'number')
returning "id"
$function$
;

CREATE OR REPLACE FUNCTION public.createselectquestion(form_id uuid, name character varying, main_content text, options jsonb)
 RETURNS uuid
 LANGUAGE sql
AS $function$
insert into "field" ("form_id",
                     "name",
                     "main_content",
                     "options",
                     "kind")
values ($1, $2, $3, $4, 'select')
returning "id"
$function$
;

CREATE OR REPLACE FUNCTION public.createtextquestion(form_id uuid, name character varying, main_content text)
 RETURNS uuid
 LANGUAGE sql
AS $function$
insert into "field" ("form_id", "name", "main_content", "kind")
values ($1, $2, $3, 'text')
returning "id"
$function$
;

CREATE OR REPLACE FUNCTION public.createyesnoquestion(form_id uuid, name character varying, main_content text)
 RETURNS uuid
 LANGUAGE sql
AS $function$
insert into "field" ("form_id", "name", "main_content", "kind")
values ($1, $2, $3, 'yesno')
returning "id"
$function$
;
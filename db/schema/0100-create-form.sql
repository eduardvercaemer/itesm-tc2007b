create or replace function createForm(data jsonb) returns jsonb as
$$
declare
    new_form        public.form;
    form_data       jsonb := data -> 'form';
    field_data      jsonb;
    new_fields_data jsonb;
begin
    -- create new form
    insert into public.form ("name", "description")
    values (form_data ->> 'name',
            form_data ->> 'description')
    returning "id" into new_form;
    -- create new fields on form
    for field_data in select jsonb_array_elements(form_data -> 'fields')
        loop
            insert into public.field ("name",
                                      "description",
                                      "kind",
                                      "form_id",
                                      "content",
                                      "select_options")
            values (field_data ->> 'name',
                    field_data ->> 'description',
                    (field_data ->> 'kind')::public.field_kind,
                    new_form."id",
                    field_data ->> 'content',
                    field_data -> 'select_options');
        end loop;

    select to_jsonb(array_agg(json_build_object(
            'id', "id",
            'name', "name",
            'kind', "kind",
            'content', "content",
            'select_options', "select_options"
        )))
    from public.field
    where "form_id" = new_form."id"
    into new_fields_data;

    return json_build_object(
            'id', new_form."id",
            'fields', new_fields_data
        );
end;
$$ language plpgsql;

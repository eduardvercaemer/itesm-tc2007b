create or replace function foo(data jsonb) returns int as
$$
select 1
$$
    language sql;
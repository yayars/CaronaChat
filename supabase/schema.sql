-- Execute este arquivo no SQL Editor do Supabase.
create table if not exists public.messages (
  id uuid primary key default gen_random_uuid(),
  ride_id text not null,
  sender_id text not null,
  sender_name text not null,
  text text not null check (char_length(text) between 1 and 1000),
  created_at timestamptz not null default now()
);

alter table public.messages enable row level security;

-- Políticas abertas para demonstração escolar. Não use assim em produção.
drop policy if exists "messages_read_demo" on public.messages;
create policy "messages_read_demo"
on public.messages for select
to anon, authenticated
using (true);

drop policy if exists "messages_insert_demo" on public.messages;
create policy "messages_insert_demo"
on public.messages for insert
to anon, authenticated
with check (true);

-- Habilita INSERT para Supabase Realtime.
alter publication supabase_realtime add table public.messages;

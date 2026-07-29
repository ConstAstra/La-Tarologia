-- Schéma Supabase pour La Tarologia.
-- À exécuter dans l'éditeur SQL du projet Supabase (Database > SQL Editor).

-- Profil utilisateur, lié 1-1 à auth.users
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  display_name text,
  created_at timestamptz not null default now()
);

alter table public.profiles enable row level security;

create policy "Les utilisateurs lisent leur propre profil"
  on public.profiles for select
  using (auth.uid() = id);

create policy "Les utilisateurs modifient leur propre profil"
  on public.profiles for update
  using (auth.uid() = id);

create policy "Les utilisateurs créent leur propre profil"
  on public.profiles for insert
  with check (auth.uid() = id);

-- Création automatique du profil à l'inscription
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, display_name)
  values (new.id, new.raw_user_meta_data ->> 'display_name');
  return new;
end;
$$ language plpgsql security definer;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- Historique des tirages, pour retrouver ses lectures en se reconnectant sur un autre appareil
create table if not exists public.draws (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  spread_id text not null,
  card_ids text[] not null,
  reversed boolean[] not null,
  note text,
  created_at timestamptz not null default now()
);

alter table public.draws enable row level security;

create policy "Les utilisateurs lisent leurs propres tirages"
  on public.draws for select
  using (auth.uid() = user_id);

create policy "Les utilisateurs créent leurs propres tirages"
  on public.draws for insert
  with check (auth.uid() = user_id);

create policy "Les utilisateurs suppriment leurs propres tirages"
  on public.draws for delete
  using (auth.uid() = user_id);

create index if not exists draws_user_id_created_at_idx
  on public.draws (user_id, created_at desc);

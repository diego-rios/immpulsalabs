-- Enable necessary extensions
create extension if not exists "uuid-ossp";

-- Create leads table
create table if not exists public.leads (
    id uuid primary key default uuid_generate_v4(),
    first_name text not null,
    last_name text not null,
    email text not null,
    phone text not null,
    country_code text not null,
    source text not null default 'exit_intent',
    page_url text,
    utm_source text,
    utm_medium text,
    utm_campaign text,
    utm_term text,
    utm_content text,
    browser_info jsonb,
    ip_address text,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null,
    updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create index on email for faster lookups
create index if not exists leads_email_idx on public.leads (email);

-- Create function to automatically update updated_at timestamp
create or replace function public.handle_updated_at()
returns trigger as $$
begin
    new.updated_at = timezone('utc'::text, now());
    return new;
end;
$$ language plpgsql security definer;

-- Create trigger for updated_at
drop trigger if exists set_updated_at on public.leads;
create trigger set_updated_at
    before update on public.leads
    for each row
    execute procedure public.handle_updated_at();

-- Create RLS policies
alter table public.leads enable row level security;

-- Drop existing policies if they exist
drop policy if exists "Allow insert for authenticated users" on public.leads;
drop policy if exists "Allow read for authenticated users" on public.leads;
drop policy if exists "Allow update for authenticated users" on public.leads;

-- Policy for insert (allow all users, including anonymous)
create policy "Allow insert for all users"
    on public.leads for insert
    to anon, authenticated
    with check (true);

-- Policy for select (allow authenticated users to read all leads)
create policy "Allow read for authenticated users"
    on public.leads for select
    to authenticated
    using (true);

-- Policy for update (allow authenticated users to update leads)
create policy "Allow update for authenticated users"
    on public.leads for update
    to authenticated
    using (true)
    with check (true);

-- Function to check for duplicate leads within a timeframe
create or replace function public.check_duplicate_lead(
    p_email text,
    p_phone text,
    p_timeframe_minutes int default 30
)
returns boolean
language plpgsql security definer
as $$
declare
    v_exists boolean;
begin
    select exists(
        select 1
        from public.leads
        where (email = p_email or phone = p_phone)
        and created_at > (now() - (p_timeframe_minutes || ' minutes')::interval)
    ) into v_exists;
    
    return v_exists;
end;
$$; 
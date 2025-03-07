-- Create the rsvp-demo-02 table
create table public.rsvp_demo_02 (
    id uuid default gen_random_uuid() primary key,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null,
    name text not null,
    attending text not null,
    number_of_guests integer,
    message text,
    is_visible boolean default true
);

-- Enable Row Level Security (RLS)
alter table public.rsvp_demo_02 enable row level security;

-- Create policy to allow anyone to view visible messages
create policy "Allow public to view visible messages" on public.rsvp_demo_02
    for select using (is_visible = true);

-- Create policy to allow anyone to insert
create policy "Allow public to insert" on public.rsvp_demo_02
    for insert with check (true);
# Wedding Classic - Elegant Digital Wedding Invitation

A modern and elegant digital wedding invitation application built with React, TypeScript, and Tailwind CSS. Features a beautiful split animation effect and integrated RSVP system with Supabase.

## ✨ Features

### 1. Cover Page

- Elegant split animation effect when opening the invitation
- Dynamic guest name from URL parameter (`?to=Guest+Name`)
- Beautiful background images for bride and groom
- Floating sparkles animation effect
- Smooth transitions and hover effects

### 2. Hero Section

- Full-screen responsive design
- Dynamic background with overlay
- Elegant typography and animations
- Smooth scroll integration

### 3. Countdown Section

- Real-time countdown to the wedding day
- Modern glass-morphism design
- Responsive layout for all devices
- Beautiful hover animations

### 4. RSVP System

- Integrated with Supabase
- Real-time form validation
- Guest attendance confirmation
- Message/wishes submission
- Pagination for viewing messages
- Character limit for messages

### 5. Additional Features

- Responsive design for all screen sizes
- Modern animations and transitions
- Clean and elegant UI
- Cross-browser compatibility
- Performance optimized

## 🛠️ Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- Supabase
- Lucide Icons

## 📦 Installation

1. Clone the repository

```bash
git clone <repository-url>
cd wedding-classic
```

2. Install dependencies

```bash
npm install
# or
yarn install
```

3. Set up environment variables

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. Start development server

```bash
npm run dev
# or
yarn dev
```

## 💾 Database Setup

Create the following table in your Supabase database:

```sql
create table public.rsvp_demo_02 (
    id uuid default gen_random_uuid() primary key,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null,
    name text not null,
    attending text not null,
    number_of_guests integer,
    message text,
    is_visible boolean default true
);

-- Enable Row Level Security
alter table public.rsvp_demo_02 enable row level security;

-- Create policies
create policy "Allow public to view visible messages"
    on public.rsvp_demo_02 for select using (is_visible = true);
create policy "Allow public to insert"
    on public.rsvp_demo_02 for insert with check (true);
```

## 🎨 Customization

1. Update couple information in `src/constants/couple.ts`
2. Modify colors in `src/constants/colors.ts`
3. Replace images in `public/images/`:
   - `bride.jpeg` - Bride's photo
   - `groom.jpeg` - Groom's photo
   - `hero-bg.jpeg` - Hero section background

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions, issues and feature requests are welcome. Feel free to check [issues page](issues-link) if you want to contribute.

## ⭐️ Show your support

Give a ⭐️ if this project helped you!

## Check Git

git remote -v
git remote set-url origin https://github.com/heinricov/wedding-classic.git

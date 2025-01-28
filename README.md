# Wedding Zinc - Undangan Pernikahan Digital

Aplikasi undangan pernikahan digital yang elegan dan modern, dibuat dengan React, TypeScript, dan Tailwind CSS. Dilengkapi dengan fitur RSVP yang terintegrasi dengan Supabase untuk penyimpanan data.

## 📱 Demo & Preview

- Demo: [Link Demo](#)
- Repository: [GitHub](#)

## 🌟 Fitur-Fitur

### 1. Halaman Cover
- Tampilan awal dengan animasi yang menarik
- Nama tamu undangan otomatis dari parameter URL (`?to=Nama+Tamu`)
- Tombol "Open Invitation" dengan efek transisi halus
- Background dengan efek blur untuk meningkatkan keterbacaan teks

### 2. Musik Latar
- Pemutaran musik otomatis saat undangan dibuka
- Tombol kontrol musik floating yang elegan
- Dukungan format audio MP3
- Kontrol play/pause yang responsif

### 3. Informasi Acara
- Tampilan countdown timer yang dinamis
- Detail waktu dan lokasi untuk akad nikah
- Detail waktu dan lokasi untuk resepsi
- Integrasi dengan Google Maps
- Tombol "Add to Calendar" untuk Google Calendar

### 4. Galeri Foto
- Layout responsif dengan grid system
- Efek hover yang menarik
- Optimasi gambar otomatis
- Mendukung berbagai format gambar

### 5. RSVP dengan Supabase
- Form konfirmasi kehadiran yang interaktif
- Validasi input otomatis
- Notifikasi sukses/error yang informatif
- Integrasi dengan Supabase untuk penyimpanan data
- Fitur pagination untuk menampilkan pesan (5 pesan per halaman)
- Batasan karakter pesan (maksimal 200 karakter)
- Real-time update pesan ucapan

### 6. Amplop Digital
- Informasi rekening yang terstruktur
- Tampilan yang rapi dan profesional
- Fitur salin nomor rekening dengan satu klik
- Konfirmasi visual saat nomor rekening disalin
- Animasi hover pada kartu rekening

### 7. Footer
- Logo Vertical dengan link ke website perusahaan
- Integrasi media sosial (Instagram, Facebook, Twitter, Email)
- Informasi copyright dan alamat perusahaan
- Link ke halaman Privacy Policy, Terms of Service, dan Contact
- Desain responsif yang menyesuaikan ukuran layar

## 💻 Teknologi

- React + TypeScript
- Tailwind CSS
- Supabase (Database & Authentication)
- Lucide Icons
- Google Maps API
- Web Audio API

## 🛠️ Cara Instalasi

1. Clone repository
```bash
git clone https://github.com/username/wedding-zinc.git
cd wedding-zinc
```

2. Install dependencies
```bash
npm install
```

3. Setup Supabase
```sql
-- Buat tabel RSVP
create table public.rsvp_demo (
    id uuid default gen_random_uuid() primary key,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null,
    name text not null,
    attending text not null,
    number_of_guests integer,
    message text,
    is_visible boolean default true
);

-- Enable Row Level Security
alter table public.rsvp_demo enable row level security;

-- Buat policy untuk view dan insert
create policy "Allow public to view visible messages" 
    on public.rsvp_demo for select using (is_visible = true);
create policy "Allow public to insert" 
    on public.rsvp_demo for insert with check (true);
```

4. Konfigurasi Environment
```bash
# .env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

5. Jalankan aplikasi
```bash
npm run dev
```

## 📝 Cara Kustomisasi

### 1. Informasi Pasangan
Edit file `src/constants/couple.ts`:
```typescript
export const couple = {
  groom: {
    name: "Nama Pengantin Pria",
    photo: "/images/groom.jpg",
    parents: "Nama Orang Tua Pria",
    social: {
      instagram: "@username"
    }
  },
  bride: {
    name: "Nama Pengantin Wanita",
    photo: "/images/bride.jpg",
    parents: "Nama Orang Tua Wanita",
    social: {
      instagram: "@username"
    }
  },
  bankAccounts: {
    "BCA": "1234567890",
    "Mandiri": "0987654321"
  }
};
```

### 2. Waktu & Lokasi
Edit file `src/constants/event-details.ts`

### 3. Tema Warna
Edit file `src/constants/colors.ts`

### 4. Font
Edit file `src/constants/font.ts`

## 📱 Format URL Tamu

- Format: `https://domain.com/?to=Nama+Tamu`
- Contoh: `https://domain.com/?to=Budi+Santoso`
- Spasi menggunakan tanda `+` atau `%20`

## 🔧 Tips Optimasi

1. Kompresi Gambar
   - Gunakan format WebP untuk gambar
   - Optimasi ukuran dengan tools seperti TinyPNG

2. Performa Audio
   - Kompresi file musik (128kbps cukup untuk web)
   - Format MP3 lebih kompatibel

3. Loading Time
   - Implementasi lazy loading untuk gambar
   - Preload untuk aset penting

4. Database
   - Gunakan pagination untuk RSVP messages
   - Batasi jumlah karakter pesan
   - Index kolom yang sering digunakan

## 📄 Lisensi

MIT License - Silakan gunakan dan modifikasi sesuai kebutuhan Anda.

## 🤝 Kontribusi

Kontribusi selalu diterima! Silakan buat pull request atau laporkan issues jika menemukan bug.

# Wedding Zinc - Undangan Pernikahan Digital

Aplikasi undangan pernikahan digital yang elegan dan modern, dibuat dengan React, TypeScript, dan Tailwind CSS.

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

### 5. RSVP
- Form konfirmasi kehadiran yang interaktif
- Validasi input otomatis
- Notifikasi sukses/error yang informatif
- Integrasi dengan sistem backend (opsional)

### 6. Amplop Digital
- Informasi rekening yang terstruktur
- Tampilan yang rapi dan profesional
- Fitur salin nomor rekening

## 💻 Teknologi

- React + TypeScript
- Tailwind CSS
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

3. Jalankan aplikasi
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
  }
};
```

### 2. Waktu & Lokasi
Edit file `src/constants/event-details.ts`:
```typescript
export const eventDetails = {
  akad: {
    date: "Sabtu, 24 Agustus 2024",
    time: "10:00 WIB",
    location: "Nama Tempat",
    link: "URL Google Maps"
  },
  reception: {
    date: "Sabtu, 24 Agustus 2024",
    time: "19:00 WIB",
    location: "Nama Tempat",
    link: "URL Google Maps"
  }
};
```

### 3. Tema Warna
Edit file `src/constants/colors.ts`:
```typescript
export const colors = {
  primary: "#D4A373",
  secondary: "#FEFAE0",
  accent: "#CCD5AE",
  background: "#FAEDCD",
  text: "#4A4A4A",
  textLight: "#6B705C"
};
```

### 4. Font
Edit file `src/constants/font.ts`:
```typescript
export const fonts = {
  title: "font-['Great_Vibes']",
  subtitle: "font-['Cormorant_Garamond']",
  body: "font-['Inter']"
};
```

### 5. Musik Latar
1. Siapkan file musik format MP3
2. Simpan di folder `public/music/`
3. Rename menjadi `background-music.mp3`

### 6. Foto-Foto
1. Optimasi ukuran foto (disarankan max 1MB per foto)
2. Simpan di folder `public/images/`
3. Update referensi di komponen terkait

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

## 📄 Lisensi

MIT License - Silakan gunakan dan modifikasi sesuai kebutuhan Anda.

## 🤝 Kontribusi

Kontribusi selalu diterima! Silakan buat pull request atau laporkan issues jika menemukan bug.

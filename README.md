# Undangan Pernikahan Digital

# Nama : Wedding Zinc

Aplikasi undangan pernikahan digital yang elegan dan modern, dibuat dengan React dan Tailwind CSS.

## 🌟 Fitur-Fitur

### 1. Halaman Cover

- Tampilan awal dengan nama pengantin
- Nama tamu undangan otomatis sesuai link (contoh: `?to=Nama+Tamu`)
- Tombol "Open Invitation" dengan animasi yang menarik
- Background gambar yang dapat disesuaikan

### 2. Musik Latar

- Pemutaran musik otomatis saat undangan dibuka
- Tombol kontrol musik (play/pause) yang tetap terlihat
- Dapat mengganti musik sesuai keinginan

### 3. Informasi Acara

- Detail waktu dan lokasi akad nikah
- Detail waktu dan lokasi resepsi
- Tombol integrasi dengan Google Maps untuk kedua lokasi
- Tampilan countdown menuju hari pernikahan

### 4. Galeri Foto

- Tampilan galeri foto responsif
- Efek hover yang menarik pada setiap foto
- Mendukung multiple foto

### 5. RSVP (Konfirmasi Kehadiran)

- Form RSVP dengan nama tamu otomatis terisi
- Pilihan konfirmasi kehadiran
- Input jumlah tamu yang akan hadir
- Kolom pesan untuk pengantin

### 6. Amplop Digital

- Informasi rekening bank
- Tampilan yang rapi untuk multiple rekening
- Desain yang elegan

## 🛠️ Cara Kustomisasi

### 1. Mengubah Informasi Pengantin

Buka file `src/constants/couple.ts`:

```typescript
export const couple = {
  groom: {
    name: "Nama Pengantin Pria",
    // Tambahkan informasi lain
  },
  bride: {
    name: "Nama Pengantin Wanita",
    // Tambahkan informasi lain
  },
  // Informasi rekening
  bankAccounts: {
    "Nama Bank": "Nomor Rekening",
  },
};
```

### 2. Mengubah Waktu dan Lokasi

Buka file `src/constants/event-details.ts`:

```typescript
export const eventDetails = {
  akad: {
    date: "Sabtu, 24 Agustus 2024 - 10:00",
    location: "Nama Lokasi Akad",
    link: "Link Google Maps Akad",
  },
  reception: {
    date: "Sabtu, 24 Agustus 2024 - 18:00",
    location: "Nama Lokasi Resepsi",
    link: "Link Google Maps Resepsi",
  },
};
```

### 3. Mengganti Musik Latar

1. Letakkan file musik di folder `public/music/`
2. Rename menjadi `background-music.mp3` atau
3. Ubah path di `src/components/MusicPlayer.tsx`

### 4. Mengubah Foto Galeri

Buka file `src/components/sections/Gallery.tsx`:

```typescript
const images = [
  "URL Foto 1",
  "URL Foto 2",
  // Tambahkan URL foto lainnya
];
```

### 5. Mengubah Font

Buka file `src/constants/font.ts`:

```typescript
export const fonts = {
  title: "font-['Great_Vibes']",
  subtitle: "font-['Cormorant_Garamond']",
  // Sesuaikan font lainnya
};
```

Dan update `index.html` untuk menambahkan font dari Google Fonts.

### 6. Mengubah Warna

Buka file `src/constants/colors.ts`:

```typescript
export const colors = {
  primary: "#D4A373",
  // Sesuaikan warna lainnya
};
```

## 📱 Cara Menggunakan Link Tamu

1. Format dasar: `https://your-domain.com/?to=Nama+Tamu`
2. Contoh: `https://your-domain.com/?to=Budi+Santoso`
3. Nama tamu akan muncul di:
   - Halaman cover sebagai sapaan
   - Form RSVP secara otomatis

## 🚀 Cara Menjalankan Proyek

1. Install dependencies:

```bash
npm install
```

2. Jalankan dalam mode development:

```bash
npm run dev
```

3. Build untuk production:

```bash
npm run build
```

## 📝 Catatan Penting

- Pastikan semua gambar yang digunakan memiliki ukuran yang optimal
- Test undangan di berbagai perangkat untuk memastikan responsivitas
- Periksa kompatibilitas browser untuk fitur autoplay musik
- Gunakan format gambar yang mendukung web (jpg, png, webp)
- Kompres file musik agar tidak terlalu berat

## 🤝 Kontribusi

Silakan berkontribusi dengan membuat pull request atau melaporkan issues jika menemukan bug atau memiliki saran peningkatan.

## 📄 Lisensi

MIT License - Silakan gunakan dan modifikasi sesuai kebutuhan Anda.

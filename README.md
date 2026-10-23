# 📦 Kios Mamak Titi — Aplikasi Catatan Keuangan Toko

Aplikasi pembukuan keuangan sederhana, mobile-first, berbahasa Indonesia, untuk pemilik kios kecil.

---

## ✅ Fitur Utama

- **Dashboard** — Ringkasan pemasukan/pengeluaran hari ini & bulan ini, peringatan stok menipis, total kasbon, 10 transaksi terakhir
- **Transaksi** — Catat pemasukan/pengeluaran cepat, pilih produk + qty (stok otomatis diperbarui oleh trigger Supabase), filter & riwayat, edit & hapus dengan konfirmasi
- **Produk/Stok** — Daftar barang, harga modal vs harga jual, margin untung, peringatan stok menipis, tambah/edit/nonaktifkan
- **Kasbon** — Buku utang pelanggan, riwayat cicilan/bayar, tombol kirim pengingat WhatsApp sopan
- **Laporan** — Grafik batang harian (Recharts), rincian pos pengeluaran per kategori, ekspor CSV
- **Pengaturan** — Kelola kategori transaksi, info akun, tombol keluar

---

## 🚀 Cara Menjalankan

### 1. Siapkan File `.env.local`

Buat file `.env.local` di root proyek, isi dengan kredensial Supabase:

```env
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyxxxxx...   # Publishable / anon key
SUPABASE_SERVICE_ROLE_KEY=eyxxxxx...       # hanya dibaca di server
```

Kredensial bisa didapat dari [Supabase Dashboard](https://app.supabase.com) → Project → Settings → API.

> **Penting:** `NEXT_PUBLIC_SUPABASE_ANON_KEY` dipakai di browser. Jangan isi dengan
> Secret key (`sb_secret_...`) — Supabase akan menolaknya dengan pesan
> `Forbidden use of secret API key in browser` sehingga login selalu gagal.
>
> Kalau project hanya punya Secret key, isi `NEXT_PUBLIC_SUPABASE_ANON_KEY` dengan
> key tiruan (mis. `proxy-public-key-placeholder-000000`) dan taruh Secret key di
> `SUPABASE_SERVICE_ROLE_KEY`. Browser otomatis memakai proxy internal
> `/api/supabase`, sehingga kunci asli tetap hanya ada di server. Proxy memblokir
> endpoint admin dan mewajibkan JWT pengguna untuk akses data, jadi RLS tetap berlaku.

### 2. Install Dependensi

```bash
npm install
```

### 3. Jalankan Development Server

```bash
npm run dev
```

Buka browser di [http://localhost:3000](http://localhost:3000)

### 4. Build untuk Production

```bash
npm run build
npm run start
```

---

## 🗃️ Struktur Proyek

```
├── app/
│   ├── layout.tsx          # Layout utama (Sidebar + BottomNav)
│   ├── page.tsx            # Dashboard/Beranda (Server Component)
│   ├── login/              # Halaman login & daftar
│   ├── transaksi/          # Halaman transaksi
│   ├── produk/             # Halaman stok produk
│   ├── kasbon/             # Halaman kasbon & detail per pelanggan
│   ├── laporan/            # Halaman laporan & grafik
│   └── pengaturan/         # Halaman pengaturan kategori
├── components/
│   ├── Navigation.tsx      # Sidebar desktop + BottomNav mobile + MobileHeader
│   ├── ToastProvider.tsx   # Notifikasi toast global
│   ├── transaksi/          # Komponen form & list transaksi
│   ├── produk/             # Komponen daftar produk
│   ├── kasbon/             # Komponen kasbon & detail pelanggan
│   ├── laporan/            # Komponen grafik & laporan
│   └── pengaturan/         # Komponen kelola kategori
├── lib/
│   ├── types.ts            # TypeScript type definitions
│   ├── utils.ts            # Helper: formatRupiah, formatTanggal, dll
│   └── supabase/
│       ├── client.ts       # Supabase browser client (Client Component)
│       ├── server.ts       # Supabase server client (Server Component)
│       └── middleware.ts   # Supabase session middleware
├── middleware.ts            # Auth guard — redirect ke /login jika belum login
└── .env.local              # Kredensial Supabase (JANGAN di-commit ke Git)
```

---

## 🗄️ Database (Supabase — sudah dibuat)

Tabel: `kategori`, `produk`, `transaksi`, `pelanggan`, `kasbon`

View: `ringkasan_harian`, `ringkasan_bulanan`, `saldo_kasbon`, `stok_menipis`

> **RLS aktif**: semua data otomatis terisolasi per `user_id` dari `auth.uid()`. Stok produk diperbarui otomatis lewat trigger ketika transaksi dengan `produk_id` dan `qty` dibuat.

---

## 🛠 Tech Stack

| Teknologi | Versi |
|-----------|-------|
| Next.js | 14 (App Router) |
| TypeScript | 5 |
| Tailwind CSS | 3 |
| Supabase JS | 2 |
| Lucide React | 1 |
| Recharts | 3 |

---

## 📱 Tampilan

- **Mobile**: Bottom navigation bar (Beranda, Transaksi, Stok, Kasbon, Laporan) + Header oranye
- **Desktop**: Sidebar kiri dengan logo kios

Semua teks berbahasa Indonesia, tombol berukuran besar, warna hijau untuk pemasukan dan merah untuk pengeluaran.

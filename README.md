# Laurentia-MD.V2

**Laurentia-MD.V2** adalah bot WhatsApp berbasis Baileys Multi-Device, dikelola oleh **Vall**.

## Persyaratan

- Node.js 20 atau lebih baru
- npm
- FFmpeg dan ImageMagick untuk fitur media tertentu
- Akun WhatsApp owner yang tercantum pada `src/setting.json`

## Instalasi

```bash
git clone https://github.com/Vall-Afk/gabut
cd gabut
npm install --legacy-peer-deps
```

## Konfigurasi owner dan bot

Edit `src/setting.json`:

- `ownerNumber`: JID WhatsApp owner (format `nomor@s.whatsapp.net`)
- `owner`: nomor owner dalam digit internasional tanpa tanda `+`
- `owner1`: array nomor owner untuk kartu kontak
- `ownerName`: nama tampilan owner
- `botName`: nama bot, default `Laurentia-MD.V2`
- `sessionName`: nama dasar folder sesi autentikasi

Nomor owner yang dikonfigurasi untuk rilis ini adalah 6287721373781 (Vall-Afk/Strelicaa.). Jangan membagikan folder sesi atau file kredensial karena dapat memberikan akses ke akun WhatsApp yang tertaut.

## Menjalankan

```bash
npm start
```

Pada koneksi pertama, pindai QR dari menu **Perangkat Tertaut** WhatsApp. Baileys MD menyimpan kredensial pada folder `session_auth/` (atau nama sesuai `sessionName`). Cadangkan folder tersebut secara privat dan jangan commit ke Git.

## Catatan migrasi

- Menggunakan `@whiskeysockets/baileys` 6.7.24.
- Menggunakan autentikasi Multi-File Auth State.
- Membutuhkan Node.js >=20.
- Sesi single-file dari implementasi lama tidak otomatis dikonversi. Simpan file sesi lama sebagai cadangan; pairing ulang mungkin diperlukan.
- GitHub Actions memeriksa sintaks JavaScript dan impor ESM Baileys. Pemeriksaan CI bukan pengganti uji koneksi WhatsApp langsung.

## Repository

https://github.com/Vall-Afk/gabut

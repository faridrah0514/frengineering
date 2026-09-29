# FR Engineering

Landing page engineering studio untuk pengembangan aplikasi end-to-end, data
engineering, integrasi sistem, dan workflow automation.

## Menjalankan secara lokal

```bash
npm install
npm run dev
```

Buka `http://localhost:3000`.

## Konfigurasi

Salin `.env.example` menjadi `.env.local`, lalu sesuaikan:

- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_WHATSAPP_NUMBER`
- `NEXT_PUBLIC_CONTACT_EMAIL`

CTA utama mengarahkan prospek ke WhatsApp. Form konsultasi menyusun pesan dari
input pengguna dan membuka WhatsApp tanpa menyimpan data di server.

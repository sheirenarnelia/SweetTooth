# 🍰 Sweet Tooth — Dessert Ordering Web App

> **DevOps Handover Guide — Week 6 Assignment**  
> *"Move beyond 'it works on my laptop.' Make it reproducible for another person."*

Selamat datang di repositori **Sweet Tooth**! Dokumen ini dibuat agar siapa pun (termasuk teman penguji dari kelompok lain) dapat menjalankan aplikasi ini di laptop masing-masing dengan mudah hanya menggunakan Docker.

---

## 📌 Prasyarat (Prerequisites)
Pastikan laptop Anda sudah terinstall:
- **Git** ([Download Git](https://git-scm.com/))
- **Docker Desktop** yang sudah dalam keadaan menyala (*Running*) ([Download Docker](https://www.docker.com/products/docker-desktop/))
- Web Browser (Chrome / Edge / Safari / Firefox)

---

## 🚀 Panduan Menjalankan Aplikasi (Hanya 5 Langkah!)

Ikuti 5 langkah berurutan di bawah ini di terminal Anda:

### Langkah 1: Clone Repository
Unduh repository ini ke laptop Anda:
```bash
git clone https://github.com/sheirenarnelia/SweetTooth.git
cd "SweetTooth Project 2"
```

---

### Langkah 2: Siapkan File Konfigurasi (.env)
Salin template konfigurasi bawaan (tidak ada password rahasia):
* **Pengguna Mac / Linux:**
  ```bash
  cp .env.example .env
  ```
* **Pengguna Windows (PowerShell):**
  ```powershell
  copy .env.example .env
  ```

---

### Langkah 3: Jalankan Aplikasi dengan Docker
Jalankan perintah ini untuk otomatis mem-build image dan menyalakan container di latar belakang:
```bash
docker compose up --build -d
```
> ⏱️ *Tunggu beberapa detik sampai muncul tulisan `Started`.*

---

### Langkah 4: Buka Aplikasi di Browser
Setelah container menyala, buka browser dan akses tautan berikut:

👉 **[http://localhost:8085](http://localhost:8085)**  
*(Jika port 8085 tidak bisa, cek file `.env` untuk melihat port yang aktif).*

**Informasi Port:**
* **Host Port (Laptop Anda):** `8085`
* **Container Port:** `80` (Nginx Web Server)

---

### Langkah 5: Matikan Aplikasi (Jika Sudah Selesai)
Setelah selesai mencoba dan mengambil bukti screenshot, matikan container dengan perintah:
```bash
docker compose down
```

---

## 🧪 Tabel Verifikasi Pengujian (Untuk Handover Tester)

Bagi teman kelompok lain yang menguji, silakan lakukan 3 pengujian berikut untuk memastikan aplikasi berjalan normal:

| No | Pengujian | Cara Cek | Hasil yang Diharapkan |
| :---: | :--- | :--- | :--- |
| **V-01** | **Cek Status Container** | Ketik di terminal: `docker compose ps` | Status container bertuliskan `Up`. |
| **V-02** | **Cek Akses Web** | Buka browser: `http://localhost:8085` | Halaman Home *Sweet Tooth* muncul dengan rapi. |
| **V-03** | **Cek Fitur Utama (Menu & Keranjang)** | Klik menu **Our Menu**, lalu klik tombol **Order Now** pada salah satu kue. | Jumlah kue dan total harga pada keranjang belanja bertambah secara otomatis. |
| **V-04** | **Cek Restart Container** | Ketik: `docker compose restart` | Container restart dengan mulus tanpa error. |

---

## 🔍 Perintah Tambahan untuk Pengecekan (Opsional)

Jika ingin melihat log atau detail container:
* **Melihat status container:**
  ```bash
  docker compose ps
  ```
* **Melihat catatan log:**
  ```bash
  docker compose logs
  ```
* **Melihat live logs:**
  ```bash
  docker compose logs -f sweettooth-web
  ```

---

## 🛠️ Panduan Mengatasi Kendala (Troubleshooting)

### 1. Muncul error `port is already allocated` atau `bind: address already in use`
* **Penyebab:** Port `8085` sedang dipakai oleh aplikasi lain di laptop Anda.
* **Solusi:** Buka file `.env`, ubah baris `APP_PORT=8085` menjadi port lain (misalnya `APP_PORT=8088` atau `APP_PORT=3000`), lalu jalankan kembali `docker compose up -d`.

### 2. Tampilan gambar/tombol di browser tidak ter-update
* **Penyebab:** Cache browser lama masih tersimpan.
* **Solusi:** Lakukan *Hard Reload* di browser dengan menekan tombol **Ctrl + Shift + R** (Windows) atau **Cmd + Shift + R** (Mac).

### 3. Error `Cannot connect to the Docker daemon`
* **Penyebab:** Aplikasi Docker Desktop di laptop Anda belum dibuka/belum menyala.
* **Solusi:** Buka aplikasi Docker Desktop dan pastikan ikon Docker di taskbar/menu bar sudah berwarna hijau/aktif.

---

## 👥 Informasi Proyek & Repositori
* **Mata Kuliah:** Information Systems Agile Project Management with DevOps (IS 2026)
* **Dosen:** Eka Parima Saragih, S.Kom., M.Kom.
* **Repository:** [https://github.com/sheirenarnelia/SweetTooth.git](https://github.com/sheirenarnelia/SweetTooth.git)
* **Branch:** `chore/dockerize-project` (merged into `main`)
* **Release Tag:** `week6-docker-v1`
